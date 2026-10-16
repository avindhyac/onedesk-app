import { createHash } from "node:crypto";
import { readFile, readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const WIDTHS = [64, 128, 256, 384, 640, 960, 1280, 1920];
const IMAGE = /\.(webp|png|jpe?g)$/i;
const VIRTUAL_ID = "virtual:optimized-images";
const RESOLVED_ID = `\0${VIRTUAL_ID}`;
// These scenes position artwork, not export canvases. Remove transparent export
// padding before resizing; all other images retain their original composition.
export function shouldTrimImage(relative) {
  return /^char\/Home\/OD-Web-(3[2-7]|39)\.webp$/.test(relative)
    || /^char\/About\/(OD_Web_AboutUs-(0[5-9]|10|desk)|OD-AboutUs-Client-Desk)\.webp$/.test(relative);
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(file) : IMAGE.test(file) ? [file] : [];
  }));
  return files.flat();
}

export default function optimizedImages() {
  let config;
  let initialization;
  let records = new Map();
  let filesByUrl = new Map();
  let queue = Promise.resolve();
  const emitted = new Set();
  const jobs = new Map();
  // Bound peak memory even when Vite requests dozens of large illustrations.
  const serial = (job) => {
    const result = queue.then(job);
    queue = result.catch(() => {});
    return result;
  };

  const initialize = () => initialization ??= (async () => {
    const root = path.join(config.root, "src/assets");
    records = new Map();
    filesByUrl = new Map();
    for (const file of await walk(root)) {
      const relative = path.relative(root, file).split(path.sep).join("/");
      const original = await readFile(file);
      const trim = shouldTrimImage(relative);
      const hash = createHash("sha256").update(original).update(`v1-trim:${trim}`).digest("hex").slice(0, 20);
      let input = original;
      let metadata;
      if (trim) {
        const normalized = await sharp(original).trim({ threshold: 16 }).png().toBuffer({ resolveWithObject: true });
        input = normalized.data;
        metadata = normalized.info;
      } else {
        metadata = await sharp(original).metadata();
      }
      const widths = [...new Set(WIDTHS.map((width) => Math.min(width, metadata.width)))];
      const variants = widths.map((width) => {
        const name = `assets/images/${hash}-${width}.webp`;
        return { width, name, url: `${config.base}${name}` };
      });
      const fallback = variants.find((variant) => variant.width >= 640) ?? variants.at(-1);
      const record = { file, input, width: metadata.width, height: metadata.height, variants, src: fallback.url };
      records.set(file, record);
      for (const variant of variants) filesByUrl.set(variant.url, { record, variant });
    }
  })();

  const generate = (record, variant) => {
    if (!jobs.has(variant.name)) {
      jobs.set(variant.name, serial(async () => {
        const cache = path.join(config.root, ".cache/optimized-images", path.basename(variant.name));
        try { return await readFile(cache); } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        const buffer = await sharp(record.input)
          .resize({ width: variant.width, withoutEnlargement: true })
          .webp({ quality: 82, effort: 4 })
          .toBuffer();
        await mkdir(path.dirname(cache), { recursive: true });
        await writeFile(cache, buffer);
        return buffer;
      }));
    }
    return jobs.get(variant.name);
  };

  return {
    name: "onedesk-optimized-images",
    enforce: "pre",
    configResolved(resolved) { config = resolved; },
    resolveId(id) { if (id === VIRTUAL_ID) return RESOLVED_ID; },
    // Vite's native new URL(..., import.meta.url) transform otherwise emits the
    // original file directly, bypassing image-module loading and optimization.
    transform(code, id) {
      if (!/\.[jt]sx?(?:\?|$)/.test(id) || !code.includes("new URL")) return;
      const imports = [];
      const transformed = code.replace(
        /new URL\(\s*(["'])([^"']+\.(?:webp|png|jpe?g))\1\s*,\s*import\.meta\.url\s*,?\s*\)\.href/g,
        (match, quote, source) => {
          if (!source.startsWith(".")) return match;
          const binding = `__odOptimizedImage${imports.length}`;
          imports.push(`import ${binding} from ${JSON.stringify(source)};`);
          return binding;
        },
      );
      if (imports.length) return { code: `${imports.join("\n")}\n${transformed}`, map: null };
    },
    async load(id) {
      if (id === RESOLVED_ID) {
        await initialize();
        const manifest = Object.fromEntries([...records.values()].map((record) => [record.src, {
          width: record.width,
          height: record.height,
          srcSet: record.variants.map((variant) => `${variant.url} ${variant.width}w`).join(", "),
        }]));
        return `export default ${JSON.stringify(manifest)};`;
      }
      const [file, query] = id.split("?");
      if (!IMAGE.test(file) || !file.startsWith(path.join(config.root, "src/assets") + path.sep)) return;
      if (query && query !== "url") return;
      await initialize();
      const record = records.get(file);
      if (!record) return;
      this.addWatchFile(file);
      if (config.command === "build") {
        for (const variant of record.variants) {
          if (emitted.has(variant.name)) continue;
          emitted.add(variant.name);
          this.emitFile({ type: "asset", fileName: variant.name, source: await generate(record, variant) });
        }
      }
      return `export default ${JSON.stringify(record.src)};`;
    },
    configureServer(server) {
      // Image replacements/renames must invalidate both the URL modules and the
      // shared manifest. Vite's module-only HMR hook can miss new/removed files.
      const assetsRoot = path.join(config.root, "src/assets") + path.sep;
      let refreshTimer;
      const refreshImages = (event, file) => {
        if (!["add", "change", "unlink"].includes(event) || !IMAGE.test(file) || !file.startsWith(assetsRoot)) return;
        clearTimeout(refreshTimer);
        refreshTimer = setTimeout(() => {
          initialization = undefined;
          jobs.clear();
          server.moduleGraph.invalidateAll();
          server.ws.send({ type: "full-reload" });
        }, 100);
      };
      server.watcher.add(assetsRoot);
      server.watcher.on("all", refreshImages);
      server.httpServer?.once("close", () => {
        clearTimeout(refreshTimer);
        server.watcher.off("all", refreshImages);
      });

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith(`${config.base}assets/images/`)) return next();
        try {
          await initialize();
          const match = filesByUrl.get(req.url.split("?")[0]);
          if (!match) return next();
          const buffer = await generate(match.record, match.variant);
          res.setHeader("Content-Type", "image/webp");
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
          res.end(buffer);
        } catch (error) { next(error); }
      });
    },
  };
}
