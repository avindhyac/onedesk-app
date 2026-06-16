import Eyebrow from "../components/Eyebrow";
import { characters } from "../data/characters";
import { logos } from "../data/logos";
import "./Solution.css";

const POINTS = [
  { color: "sec", title: "A single relationship", text: "one team that knows your business end to end." },
  { color: "acc", title: "Shared context", text: "decisions in one function inform every other." },
  { color: "leg", title: "Structured by design", text: "built to stay compliant and ready to scale." },
];

const Check = ({ stroke }) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
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
            One team. Every function. All in step<span className="dot">.</span>
          </h2>
          <p className="solution__lede">
            OneDesk isn&apos;t a list of services — it&apos;s a single operating layer. Your legal position informs
            your tax, your compliance calendar informs your filings, your HR setup informs your payroll. One
            team holds it all.
          </p>
          <div className="solution__points">
            {POINTS.map((p) => (
              <div key={p.title} className="solution__point">
                <span className="solution__point-icon" style={{ background: `var(--c-${p.color}-l)` }}>
                  <Check stroke={`var(--c-${p.color})`} />
                </span>
                <p><strong>{p.title}</strong> &mdash; {p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="solution__visual">
          <div className="solution__badge-wrap">
            <div className="solution__badge">
              <img src={logos.ink} alt="OneDesk" />
              <div className="solution__badge-divider" />
              <span>Your operating layer</span>
            </div>
          </div>
          <div className="solution__cols">
            <div className="solution__col" style={{ background: "var(--c-leg-l)" }}>
              <span style={{ color: "var(--c-leg)" }}>Legal</span>
              <img src={characters.legal} alt="Legal" style={{ height: 148 }} />
            </div>
            <div className="solution__col solution__col--tall" style={{ background: "var(--c-acc-l)" }}>
              <span style={{ color: "var(--c-acc)" }}>Accounting</span>
              <img src={characters.accounting} alt="Accounting" style={{ height: 164 }} />
            </div>
            <div className="solution__col" style={{ background: "var(--c-hr-l)" }}>
              <span style={{ color: "var(--c-hr)" }}>HR</span>
              <img src={characters.hr} alt="HR" style={{ height: 148 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
