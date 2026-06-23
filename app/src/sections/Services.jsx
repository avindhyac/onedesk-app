import { Link } from "react-router-dom";
import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import "./Services.css";

const SERVICES = [
  { key: "legal", color: "leg", rgb: "75,56,98", num: "01", title: "Legal", text: "Drafting, contracts and regulatory support to keep you protected at every stage." },
  { key: "tax", color: "tax", rgb: "196,106,58", num: "02", title: "Tax advisory", text: "Planning and compliance that keeps you efficient, accurate and ahead of every deadline." },
  { key: "accounting", color: "acc", rgb: "104,126,116", num: "03", title: "Accounting", text: "Bookkeeping and financial reporting that gives you a clear, current picture." },
  { key: "hr", color: "hr", rgb: "217,107,94", num: "04", title: "HR & payroll", text: "People administration and payroll run accurately, on time, every cycle." },
  { key: "secretarial", color: "sec", rgb: "29,45,68", num: "05", title: "Company secretarial", text: "Statutory registers, resolutions and filings kept accurate at all times." },
  { key: "marketing", color: "mkt", rgb: "201,152,42", num: "06", title: "Marketing", text: "Brand and growth support to help the right audiences find and trust your business." },
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
              style={{ "--pillar": `var(--c-${s.color})`, "--pillar-mid": `var(--c-${s.color}-m)`, "--hover-shadow": `0 20px 48px rgba(${s.rgb},0.16)` }}
            >
              <div className="services__seal">
                <img src={characters[s.key]} alt="" />
              </div>
              <div className="services__card-head">
                <span className="services__num">{s.num}</span>
                <span className="services__dot" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <Link to="/contact" className="services__link">
                Learn more <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
