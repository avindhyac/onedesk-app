import { Link } from "react-router-dom";
import Button from "./Button";
import "./PricingCard.css";

export default function PricingCard({
  name,
  price,
  period = "/ month",
  tagline,
  features = [],
  cta,
  featured = false,
}) {
  return (
    <div className={`pricing-card ${featured ? "pricing-card--featured" : ""}`}>
      {featured && <div className="pricing-card__badge">Most popular</div>}
      <div className="pricing-card__head">
        <h3 className="pricing-card__name">{name}</h3>
        {tagline && <p className="pricing-card__tagline">{tagline}</p>}
      </div>
      <div className="pricing-card__price">
        <span className="pricing-card__amount">{price}</span>
        <span className="pricing-card__period">{period}</span>
      </div>
      <ul className="pricing-card__features">
        {features.map((f) => (
          <li key={f} className="pricing-card__feature">
            <iconify-icon
              icon="lucide:check-circle-2"
              className="pricing-card__check"
            />
            {f}
          </li>
        ))}
      </ul>
      <Button
        variant={featured ? "primary" : "outline"}
        size="md"
        block
        as={Link}
        to="/contact"
      >
        {cta || `Choose ${name}`}
      </Button>
    </div>
  );
}
