import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollToTop from "./ScrollToTop";
import SectionSnap from "./SectionSnap";

export default function Layout() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        smoothWheel: !reduce,
        anchors: { offset: -72 }, // land hash targets below the sticky header
      }}
    >
      <ScrollToTop />
      <SectionSnap />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </ReactLenis>
  );
}
