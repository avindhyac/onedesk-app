import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import Solution from "./sections/Solution";
import Services from "./sections/Services";
import Benefits from "./sections/Benefits";
import Audience from "./sections/Audience";
import Marketplace from "./sections/Marketplace";
import Process from "./sections/Process";
import Stats from "./sections/Stats";
import Testimonials from "./sections/Testimonials";
import FinalCta from "./sections/FinalCta";
import Footer from "./sections/Footer";

function App() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "var(--paper-100)", color: "var(--text-body)", overflowX: "hidden" }}>
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Benefits />
      <Audience />
      <Marketplace />
      <Process />
      <Stats />
      <Testimonials />
      <FinalCta />
      <Footer />
    </div>
  );
}

export default App;
