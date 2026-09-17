import { Link } from "react-router-dom";
import Button from "../components/Button";
import "./CtaBand.css";

export default function CtaBand({
  title = "Ready to clear your desk?",
  subtitle,
  ctaLabel = "Book a Call",
  ctaTo = "/contact",
}) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner">
        <div>
          <h2 className="cta-band__title">{title}</h2>
          {subtitle && <p className="cta-band__sub">{subtitle}</p>}
          {!subtitle && (
            <p className="cta-band__sub">
              Tell us what you're dealing with. We'll tell you what it takes and
              what it costs, no obligation.
            </p>
          )}
        </div>
        <Button
          variant="dark"
          size="lg"
          iconRight="lucide:arrow-right"
          as={Link}
          to={ctaTo}
        >
          {ctaLabel}
        </Button>
      </div>
    </section>
  );
}
