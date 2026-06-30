import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Pricing from "../sections/Pricing";
import FinalCta from "../sections/FinalCta";

export default function PricingPage() {
  return (
    <PageTransition>
      <Seo
        title="Pricing"
        description="Simple, transparent monthly pricing - no hidden retainers or surprise invoices. Pick the tier that fits your business and scale as you grow."
        path="/pricing"
      />
      <PageHero
        eyebrow="Pricing"
        title="Simple, transparent pricing"
        subtitle="One monthly engagement - no hidden retainers, no surprise invoices. Pick the tier that fits where your business is and move up as you grow."
        seamless
      />
      <Pricing />
      <FinalCta title="Not sure which plan fits? Let's figure it out together." />
    </PageTransition>
  );
}
