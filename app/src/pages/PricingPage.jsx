import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import Pricing from "../sections/Pricing";
import FinalCta from "../sections/FinalCta";

export default function PricingPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="One monthly engagement — no hidden retainers, no surprise invoices. Pick the tier that fits where your business is and move up as you grow."
      />
      <Pricing />
      <FinalCta title="Not sure which plan fits? Let's figure it out together." />
    </PageTransition>
  );
}
