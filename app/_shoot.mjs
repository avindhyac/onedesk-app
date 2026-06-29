import { chromium } from "playwright";

const BASE = "http://localhost:5177";
const routes = [
  ["home", "/"],
  ["about", "/about"],
  ["services", "/services"],
  ["pricing", "/pricing"],
  ["contact", "/contact"],
  ["marketplace", "/marketplace"],
];
const viewports = [
  ["desktop", 1440, 900],
  ["tablet", 768, 1024],
  ["mobile", 390, 844],
];

const outDir = process.argv[2];
const browser = await chromium.launch();

for (const [vpName, w, h] of viewports) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  for (const [name, path] of routes) {
    await page.goto(BASE + path, { waitUntil: "networkidle" });
    await page.waitForTimeout(700);
    // scroll through to trigger reveal animations
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += window.innerHeight;
          if (y < document.body.scrollHeight) setTimeout(step, 60);
          else { window.scrollTo(0, 0); setTimeout(res, 300); }
        };
        step();
      });
    });
    await page.waitForTimeout(400);
    await page.screenshot({ path: `${outDir}/${name}-${vpName}.png`, fullPage: true });
    console.log(`shot ${name}-${vpName}`);
  }
  await ctx.close();
}

// Also capture the mobile menu open state on home
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
const page = await ctx.newPage();
await page.goto(BASE + "/", { waitUntil: "networkidle" });
await page.click(".header__toggle");
await page.waitForTimeout(500);
await page.screenshot({ path: `${outDir}/home-mobile-menu.png` });
console.log("shot home-mobile-menu");
await ctx.close();

await browser.close();
console.log("done");
