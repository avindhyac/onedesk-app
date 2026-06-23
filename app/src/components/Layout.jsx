import { Outlet } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";
import ScrollToTop from "./ScrollToTop";

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
