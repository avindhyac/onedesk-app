import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import "./Services.css";

const SERVICES = [
  { key: "legal", color: "leg", rgb: "75,56,98", num: "01", title: "Legal", text: "Drafting, contracts and regulatory support to keep you protected at every stage.", textOpacity: 0.70 },
  { key: "tax", color: "tax", rgb: "196,106,58", num: "02", title: "Tax advisory", text: "Planning and compliance that keeps you efficient, accurate and ahead of every deadline.", textOpacity: 0.70 },
  { key: "accounting", color: "acc", rgb: "104,126,116", num: "03", title: "Accounting", text: "Bookkeeping and financial reporting that gives you a clear, current picture.", textOpacity: 0.70 },
  { key: "hr", color: "hr", rgb: "217,107,94", num: "04", title: "HR & payroll", text: "People administration and payroll run accurately, on time, every cycle.", textOpacity: 0.70 },
  { key: "secretarial", color: "sec", rgb: "29,45,68", num: "05", title: "Company secretarial", text: "Statutory registers, resolutions and filings kept accurate at all times.", textOpacity: 0.60 },
  { key: "marketing", color: "mkt", rgb: "201,152,42", num: "06", title: "Marketing", text: "Brand and growth support to help the right audiences find and trust your business.", textOpacity: 0.70 },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__head">
          <Eyebrow>Our services</Eyebrow>
          <h2 className="services__title">Six pillars. One partner<span className="dot">.</span></h2>
          <p className="services__lede">
            From the first incorporation document to the next board advisory call — all from one coordinated team.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map((s) => (
            <div
              key={s.key}
              className="services__card"
              style={{
                background: `var(--c-${s.color}-l)`,
                "--hover-shadow": `0 24px 64px rgba(${s.rgb},0.18)`,
              }}
            >
              <div className="services__card-top">
                <span className="services__num" style={{ color: `var(--c-${s.color}-m)` }}>{s.num}</span>
                <h3 style={{ color: `var(--c-${s.color})` }}>{s.title}</h3>
                <p style={{ color: `rgba(${s.rgb},${s.textOpacity})`, maxWidth: "22ch" }}>{s.text}</p>
                <a href="#contact" className="services__link" style={{ color: `var(--c-${s.color})` }}>
                  Learn more <span aria-hidden="true">&rsaquo;</span>
                </a>
              </div>
              <div className="services__art">
                <div className="services__art-card">
                  <img src={characters[s.key]} alt={s.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
