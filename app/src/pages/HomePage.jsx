import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import Problem from "../sections/Problem";
import Solution from "../sections/Solution";
import Services from "../sections/Services";
import Benefits from "../sections/Benefits";
import Audience from "../sections/Audience";
import Marketplace from "../sections/Marketplace";
import Process from "../sections/Process";
import Stats from "../sections/Stats";
import Testimonials from "../sections/Testimonials";
import FinalCta from "../sections/FinalCta";
// import DarkVariants from "../sections/DarkVariants";

export default function HomePage() {
  return (
    <PageTransition>
      <Seo path="/" />
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
    </PageTransition>
  );
}
