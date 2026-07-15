import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Below this width the layout collapses to a single tall column where most
// sections already exceed the viewport. Snapping there adds nothing and fights
// native touch scrolling, so mobile stays on plain (smoothed) scrolling.
const MIN_SNAP_WIDTH = 768;

// How long scrolling must be quiet before we treat it as "stopped". A slightly
// longer pause feels less grabby with ScrollSmoother's lerped scroll position.
const SETTLE_MS = 220;

// Don't snap while the wheel/trackpad still has meaningful momentum.
const MAX_SETTLE_VELOCITY = 0.1;

/**
 * Gently "frames" the section nearest to where the user stops scrolling: on
 * scroll-settle, nudges to the closest snap point only if it's within
 * `thresholdPx` (proximity mode; free scroll otherwise). Sections that fit
 * the viewport settle optically centered.
 *
 * Sections TALLER than the viewport get NO snap point: a single point at their
 * top turns the whole upper half into a magnet (the threshold is relative to
 * viewport height), which on settle yanks the reader back to the section
 * start and hides lower content (e.g. the second row of service cards). These
 * are read-through sections, so we let them scroll freely.
 *
 * The threshold is tightened to 20% of viewport height so the remaining
 * (fitting) sections only nudge near a real boundary, and an adjacent fitting
 * section can't grab you as you scroll into a tall one.
 *
 * Snap points are recomputed per route and on resize, accounting for the
 * sticky header height (`--header-h`).
 */
export default function SectionSnap() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let targets = [];
    let thresholdPx = 0;
    let rafId;
    let resizeTimer;
    let settleTimer;
    let lastScrollY = window.scrollY;
    let lastScrollTime = performance.now();
    let scrollVelocity = 0;
    let isSnapping = false;
    const timeouts = [];

    const build = () => {
      targets = [];
      if (window.innerWidth < MIN_SNAP_WIDTH) return;

      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
          10,
        ) || 72;
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll("section");
      if (!sections.length) return;

      sections.forEach((el) => {
        const h = el.offsetHeight;
        const fitsViewport = h <= vh - headerH;

        // Taller-than-viewport sections scroll freely - no snap point, so the
        // reader is never pulled back to the top mid-section.
        if (!fitsViewport) return;

        // Fits: center within the visible area below the sticky header.
        const top = el.getBoundingClientRect().top + scrollY;
        const target = top + h / 2 - (vh + headerH) / 2;

        targets.push(Math.max(0, Math.round(target)));
      });

      thresholdPx = vh * 0.16;
    };

    const onScroll = () => {
      const now = performance.now();
      const yNow = window.scrollY;
      const dt = Math.max(16, now - lastScrollTime);
      scrollVelocity = Math.abs(yNow - lastScrollY) / dt;
      lastScrollY = yNow;
      lastScrollTime = now;

      if (isSnapping) return;

      clearTimeout(settleTimer);
      settleTimer = setTimeout(() => {
        if (!targets.length || window.innerWidth < MIN_SNAP_WIDTH) return;
        if (scrollVelocity > MAX_SETTLE_VELOCITY) {
          onScroll();
          return;
        }

        // Native scrollY, not smoother.scrollTop() - the latter reflects the
        // rendered (lerped) position, which can still be catching up to the
        // real target this soon after the wheel/touch input stops.
        const y = window.scrollY;

        let closest = targets[0];
        let closestDist = Math.abs(targets[0] - y);
        for (let i = 1; i < targets.length; i++) {
          const d = Math.abs(targets[i] - y);
          if (d < closestDist) {
            closestDist = d;
            closest = targets[i];
          }
        }

        // Already there (or too far to count as "settled near a boundary").
        if (closestDist <= 1 || closestDist > thresholdPx) return;

        isSnapping = true;
        const smoother = ScrollSmoother.get();
        if (smoother) smoother.scrollTo(closest, true);
        else window.scrollTo({ top: closest, behavior: "smooth" });

        window.setTimeout(() => {
          isSnapping = false;
          lastScrollY = window.scrollY;
          lastScrollTime = performance.now();
          scrollVelocity = 0;
        }, 420);
      }, SETTLE_MS);
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
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      clearTimeout(settleTimer);
      timeouts.forEach(clearTimeout);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", build);
      window.removeEventListener("scroll", onScroll);
    };
  }, [pathname]);

  return null;
}
