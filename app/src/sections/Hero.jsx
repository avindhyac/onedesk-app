import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import { PILLARS, TEAM_ORDER } from "../data/pillars";
import "./Hero.css";

const COLUMNS = [
  { offset: 0, cards: ["secretarial", "tax"] },
  { offset: 28, cards: ["accounting", "hr"] },
  { offset: 52, cards: ["legal", "marketing"] },
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
            <Button variant="primary" size="lg" dot as="a" href="#contact">Get started</Button>
            <Button variant="outline" size="lg" as="a" href="#services">Explore services</Button>
          </div>
          <div className="hero__team">
            <span className="hero__team-label">Your team:</span>
            {TEAM_ORDER.map((key) => {
              const p = PILLARS[key];
              return (
                <span key={key} className="hero__team-pill" style={{ background: `var(--c-${p.var}-l)`, color: `var(--c-${p.var})` }}>
                  <span className="hero__team-dot" style={{ background: `var(--c-${p.var})` }} />
                  {p.short}
                </span>
              );
            })}
          </div>
        </div>

        <div className="hero__grid">
          {COLUMNS.map((col, i) => (
            <div key={i} className="hero__col" style={{ marginTop: col.offset }}>
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
    </section>
  );
}
