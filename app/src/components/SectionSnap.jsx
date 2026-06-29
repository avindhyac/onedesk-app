import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";
import Snap from "lenis/snap";

// Below this width the layout collapses to a single tall column where most
// sections already exceed the viewport. Snapping there adds nothing and fights
// native touch scrolling, so mobile stays on plain (Lenis-smoothed) scrolling.
const MIN_SNAP_WIDTH = 768;

/**
 * Gently "frames" the section nearest to where the user stops scrolling, using
 * Lenis' Snap module in proximity mode (free scroll; only nudges near a
 * boundary). Sections that fit the viewport settle optically centered.
 *
 * Sections TALLER than the viewport get NO snap point: a single point at their
 * top turns the whole upper half into a magnet (distanceThreshold is relative
 * to viewport height), which on debounce yanks the reader back to the section
 * start and hides lower content (e.g. the second row of service cards). These
 * are read-through sections, so we let them scroll freely.
 *
 * `distanceThreshold` is tightened from the 50% default to 20% so the remaining
 * (fitting) sections only nudge near a real boundary, and an adjacent fitting
 * section can't grab you as you scroll into a tall one.
 *
 * Snap points are recomputed per route and on resize, accounting for the
 * sticky header height (`--header-h`).
 */
export default function SectionSnap() {
  const lenis = useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    if (!lenis) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let snap;
    let rafId;
    let resizeTimer;
    const timeouts = [];

    const teardown = () => {
      if (snap) {
        (snap.destroy ?? snap.stop)?.call(snap);
        snap = undefined;
      }
    };

    const build = () => {
      teardown();
      if (window.innerWidth < MIN_SNAP_WIDTH) return;

      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue("--header-h"),
          10,
        ) || 72;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      if (!sections.length) return;

      snap = new Snap(lenis, { type: "proximity", distanceThreshold: "20%" });

      sections.forEach((el) => {
        const h = el.offsetHeight;
        const fitsViewport = h <= vh - headerH;

        // Taller-than-viewport sections scroll freely — no snap point, so the
        // reader is never pulled back to the top mid-section.
        if (!fitsViewport) return;

        // Fits: center within the visible area below the sticky header.
        const top = el.getBoundingClientRect().top + scrollY;
        const target = top + h / 2 - (vh + headerH) / 2;

        snap.add(Math.max(0, Math.round(target)));
      });
    };

    const scheduleBuild = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(build);
    };

    // Initial build, plus delayed rebuilds to catch the page-transition settle,
    // web-font swap and image loads that shift section offsets.
    scheduleBuild();
    timeouts.push(setTimeout(build, 300));
    timeouts.push(setTimeout(build, 800));

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("load", build);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", build);
      teardown();
    };
  }, [lenis, pathname]);

  return null;
}
