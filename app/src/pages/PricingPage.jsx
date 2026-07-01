import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Pricing from "../sections/Pricing";
import CtaBand from "../sections/CtaBand";

export default function PricingPage() {
  return (
    <PageTransition>
      <Seo
        title="Pricing"
        description="Simple, transparent monthly pricing — no hidden retainers or surprise invoices. Pick the tier that fits your business and scale as you grow."
        path="/pricing"
      />
      <Pricing />
      <CtaBand
        title="Not sure which plan fits?"
        subtitle="Let's figure it out together. A real person replies within one business day."
        ctaLabel="Talk to us"
        ctaTo="/contact"
      />
    </PageTransition>
  );
}
