import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import { PILLARS } from "../data/pillars";
import { CLIENT_LOGOS } from "../data/clientLogos";
import "./Hero.css";

const COLUMNS = [
  { cards: ["secretarial", "tax"], rot: -7, tx: 10, ty: 14, scale: 0.96, z: 10 },
  { cards: ["accounting", "hr"], rot: 0, tx: 0, ty: -10, scale: 1.05, z: 30 },
  { cards: ["legal", "marketing"], rot: 7, tx: -10, ty: 14, scale: 0.96, z: 10 },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div>
          <Eyebrow>Unified business services</Eyebrow>
          <h1 className="hero__title">
            Everything your business needs, in one place<span className="dot">.</span>
          </h1>
          <p className="hero__lede">
            OneDesk brings <strong>legal, tax, accounting, HR, secretarial and marketing</strong> support
            together — under one structured, trusted partner.
          </p>
          <div className="hero__ctas">
            <Button variant="primary" size="lg" dot as={Link} to="/contact">Get started</Button>
            <Button variant="outline" size="lg" as={Link} to="/pricing">See pricing</Button>
          </div>
        </div>

        <div className="hero__fan">
          {COLUMNS.map((col, i) => (
            <div
              key={i}
              className="hero__col"
              style={{
                "--rot": `${col.rot}deg`,
                "--tx": `${col.tx}px`,
                "--ty": `${col.ty}px`,
                "--scale": col.scale,
                zIndex: col.z,
              }}
            >
              {col.cards.map((key) => {
                const p = PILLARS[key];
                return (
                  <div
                    key={key}
                    className="hero__card"
                    style={{ background: `var(--c-${p.var}-l)`, "--hover-shadow": `0 14px 40px rgba(${p.shadow},0.14)` }}
                  >
                    <div className="hero__card-art">
                      <img src={characters[key]} alt={p.label} />
                    </div>
                    <div className="hero__card-label" style={{ borderTopColor: `rgba(${p.shadow},0.09)` }}>
                      <span style={{ color: `var(--c-${p.var})` }}>{p.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="hero__trust">
        <p className="hero__trust-heading">Trusted by the best</p>
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
