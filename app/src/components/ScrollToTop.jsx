import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Jump to the top instantly on every route change. Routes through the
// ScrollSmoother instance when available so its internal scroll position
// stays in sync; falls back to the native API before it has mounted.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(0, false);
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
