import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Jump to the top instantly on every route change. Routes through the
// ScrollSmoother instance when available so its internal scroll position
// stays in sync; falls back to the native API before it has mounted.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const scrollToHash = () => {
      const target = hash && document.getElementById(hash.slice(1));
      if (!target) return false;

      const headerH =
        parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-h",
          ),
          10,
        ) || 72;
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.scrollTo(smoother.offset(target, "top") - headerH, true);
      else {
        const y = target.getBoundingClientRect().top + window.scrollY - headerH;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      return true;
    };

    if (hash) {
      requestAnimationFrame(() => {
        if (!scrollToHash()) setTimeout(scrollToHash, 80);
      });
      return;
    }

    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, false);
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
