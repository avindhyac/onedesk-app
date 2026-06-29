import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import { PILLARS } from "../data/pillars";
import "./Solution.css";

const POINTS = [
  { color: "sec", title: "A single relationship", text: "one team that knows your business end to end." },
  { color: "acc", title: "Shared context", text: "decisions in one function inform every other." },
  { color: "leg", title: "Structured by design", text: "built to stay compliant and ready to scale." },
];

const GROUPS = [
  { label: "Governance", keys: ["legal", "secretarial"] },
  { label: "Finance", keys: ["accounting", "tax"] },
  { label: "Growth", keys: ["hr", "marketing"] },
];

const Check = ({ stroke }) => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 12l5 5L20 6" />
  </svg>
);

export default function Solution() {
  return (
    <section id="solution" className="solution">
      <div className="solution__inner">
        <div>
          <Eyebrow tone="harbor">One connected ecosystem</Eyebrow>
          <h2 className="solution__title">
            One team. Every function<span className="dot">.</span>
          </h2>
          <p className="solution__lede">
            OneDesk isn&apos;t a list of services — it&apos;s a single operating layer. Your legal position informs
            your tax, your compliance calendar informs your filings, your HR setup informs your payroll. One
            team holds it all.
          </p>
          <div className="solution__points">
            {POINTS.map((p) => (
              <div key={p.title} className="solution__point">
                <span className="solution__point-icon" style={{ borderColor: `var(--c-${p.color}-m)` }}>
                  <Check stroke={`var(--c-${p.color})`} />
                </span>
                <p><strong>{p.title}</strong> &mdash; {p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solution__visual">
          <div className="solution__stage">
            {GROUPS.map((g) => (
              <div key={g.label} className="solution__bay">
                <div className="solution__figures">
                  {g.keys.map((k) => (
                    <img key={k} src={characters[k]} alt={PILLARS[k].label} className="solution__figure" />
                  ))}
                </div>
                <div
                  className="solution__plinth"
                  style={{ "--c1": `var(--c-${PILLARS[g.keys[0]].var}-m)`, "--c2": `var(--c-${PILLARS[g.keys[1]].var}-m)` }}
                >
                  <span className="solution__plinth-label">{g.label}</span>
                  <span className="solution__plinth-sub">
                    {g.keys.map((k) => PILLARS[k].short).join(" & ")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
