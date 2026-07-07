import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { CLIENT_LOGOS } from "../data/clientLogos";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <Badge tone="orange" icon="lucide:sparkles">Trusted by founders everywhere</Badge>
          </div>
          <h1 className="hero__title">
            Everything your business needs, in one place<span className="dot">.</span>
          </h1>
          <p className="hero__lede">
            OneDesk brings <strong>legal, tax, accounting, HR, secretarial and marketing</strong> support
            together, under one structured, trusted partner.
          </p>
          <div className="hero__ctas">
            <Button variant="primary" size="lg" iconRight="lucide:arrow-right" as={Link} to="/contact">
              Get started
            </Button>
            <Button variant="outline" size="lg" as={Link} to="/pricing">
              See pricing
            </Button>
          </div>
        </div>

      </div>

      <div className="hero__trust">
        <p className="hero__trust-heading">Trusted by great businesses</p>
        <div className="hero__trust-track">
          <div className="hero__trust-inner" aria-hidden="true">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <span key={i} className="hero__trust-logo">
                {c.name}
                <span className="hero__trust-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
