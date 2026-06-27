import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <Outlet key={location.pathname} />
      </AnimatePresence>
      <Footer />
    </>
  );
}
