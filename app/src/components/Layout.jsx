import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollToTop from "./ScrollToTop";
import SectionSnap from "./SectionSnap";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, useGSAP);

export default function Layout() {
  const location = useLocation();

  // Mounts once for the life of the app (Layout wraps the router Outlet and
  // never remounts on route change).
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const smoother = ScrollSmoother.create({ smooth: 1 });
      return () => smoother.kill();
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const smoother = ScrollSmoother.create({ smooth: 0 });
      return () => smoother.kill();
    });

    // In-page hash links (e.g. "Explore the network" -> #network): the
    // browser's native same-page anchor jump can't find a scrollable
    // ancestor here (ScrollSmoother's wrapper is position:fixed/overflow:hidden,
    // and the real scroll lives on <html>), so it silently no-ops. Intercept
    // and drive it through the smoother instead, landing below the fixed header.
    const onAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href").slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      e.preventDefault();
      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
          10,
        ) || 72;
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smoother.scrollTo(smoother.offset(target, "top") - headerH, true);
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      mm.revert();
    };
  }, []);

  return (
    <>
      {/* Fixed, so it lives outside the ScrollSmoother wrapper - a transform
          on an ancestor (which #smooth-content gets) breaks position:sticky
          the same way it breaks position:fixed. */}
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <ScrollToTop />
          <SectionSnap />
          <AnimatePresence mode="wait" initial={false}>
            <Outlet key={location.pathname} />
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  );
}
