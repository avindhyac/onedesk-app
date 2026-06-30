import Eyebrow from "../components/Eyebrow";
import "./Audience.css";

const TAGS = [
  { color: "sec", label: "Startups" },
  { color: "acc", label: "SMEs" },
  { color: "leg", label: "Corporates" },
  { color: "tax", label: "Foreign investors" },
  { color: "hr", label: "Founder-led" },
  { color: "mkt", label: "Expanding into Sri Lanka" },
];

const CARDS = [
  { color: "sec", title: "Startups & founders", text: "Incorporate cleanly, set up payroll from day one and stay compliant without building a back office in-house." },
  { color: "acc", title: "SMEs & corporates", text: "Coordinate legal, tax, secretarial and HR across your organisation through one accountable partner." },
  { color: "tax", title: "Foreign investors & entrants", text: "Navigate Sri Lanka's regulatory landscape with on-the-ground expertise from one trusted team." },
];

export default function Audience() {
  return (
    <section id="audience" className="audience">
      <div className="audience__inner">
        <div>
          <Eyebrow tone="harbor">Who it&apos;s for</Eyebrow>
          <h2 className="audience__title">
            Built for businesses at every stage<span className="dot">.</span>
          </h2>
          <p className="audience__lede">
            Whether you&apos;re setting up for the first time or scaling across markets - OneDesk gives you
            the operational backbone to move with confidence.
          </p>
          <div className="audience__tags">
            {TAGS.map((t) => (
              <span key={t.label} className="audience__tag" style={{ background: `var(--c-${t.color}-l)`, color: `var(--c-${t.color})` }}>
                <span className="audience__tag-dot" style={{ background: `var(--c-${t.color})` }} />
                {t.label}
              </span>
            ))}
          </div>
        </div>
        <div className="audience__cards">
          {CARDS.map((c) => (
            <div key={c.title} className="audience__card" style={{ background: `var(--c-${c.color}-l)` }}>
              <h3 style={{ color: `var(--c-${c.color})` }}>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
