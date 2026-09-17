import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Hero from "../sections/Hero";
import TrustStrip from "../sections/TrustStrip";
import ServicesGrid from "../sections/ServicesGrid";
import HowItWorks from "../sections/HowItWorks";
// import Testimonials from "../sections/Testimonials";
import Faq from "../sections/Faq";
import CtaBand from "../sections/CtaBand";
import WhyOneDesk from "../sections/WhyOneDesk";

export default function HomePage() {
  return (
    <PageTransition>
      <Seo path="/" />
      <Hero />
      <TrustStrip />
      <ServicesGrid />
      <WhyOneDesk />
      <HowItWorks />
      {/* COMMENTED OUT TEMPORARILY <Testimonials /> */}
      <Faq />
      <CtaBand />
    </PageTransition>
  );
}
