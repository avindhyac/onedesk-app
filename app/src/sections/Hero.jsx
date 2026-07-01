import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { characters } from "../data/characters";
import { PILLARS } from "../data/pillars";
import { CLIENT_LOGOS } from "../data/clientLogos";
import "./Hero.css";

const COLUMNS = [
  { cards: ["secretarial", "tax"], rot: -7, tx: 10, ty: 14, scale: 0.96, z: 10 },
  { cards: ["accounting", "hr"],   rot: 0,  tx: 0,  ty: -10, scale: 1.05, z: 30 },
  { cards: ["legal", "marketing"], rot: 7,  tx: -10, ty: 14, scale: 0.96, z: 10 },
];

const SVC_TOKEN = {
  secretarial: "sec",
  accounting:  "acc",
  legal:       "leg",
  tax:         "tax",
  hr:          "hr",
  marketing:   "mkt",
};

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div>
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

        <div className="hero__fan">
          {COLUMNS.map((col, i) => (
            <div
              key={i}
              className="hero__col"
              style={{
                "--rot":   `${col.rot}deg`,
                "--tx":    `${col.tx}px`,
                "--ty":    `${col.ty}px`,
                "--scale": col.scale,
                zIndex:    col.z,
              }}
            >
              {col.cards.map((key) => {
                const p = PILLARS[key];
                const svc = SVC_TOKEN[key] || p?.var || "sec";
                return (
                  <div
                    key={key}
                    className="hero__card"
                    style={{
                      background: `var(--od-${svc}-tint)`,
                      "--hover-shadow": `0 14px 40px color-mix(in srgb, var(--od-${svc}) 20%, transparent)`,
                    }}
                  >
                    <div className="hero__card-art">
                      <img src={characters[key]} alt={p?.label || key} />
                    </div>
                    <div
                      className="hero__card-label"
                      style={{ borderTopColor: `var(--od-${svc}-light)`, color: `var(--od-${svc}-text)` }}
                    >
                      {p?.label || key}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
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
