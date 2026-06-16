import Eyebrow from "../components/Eyebrow";
import "./Benefits.css";

const BENEFITS = [
  {
    color: "sec", title: "Save time", text: "One conversation moves every function forward at once.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1d2d44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
  {
    color: "acc", title: "Less to manage", text: "One point of contact replaces juggling many firms.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#687e74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>,
  },
  {
    color: "leg", title: "Everything in one place", text: "All six functions through one organised relationship.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4b3862" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></svg>,
  },
  {
    color: "tax", title: "Compliance discipline", text: "A managed calendar keeps every obligation consistently met.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c46a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    color: "hr", title: "Aligned decisions", text: "Legal, tax, HR and finance move in step — never against each other.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#d96b5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="M7.6 7.6L11 16M16.4 7.6L13 16M8 6h8" /></svg>,
  },
  {
    color: "mkt", title: "Scale with confidence", text: "A structure ready for your next hire, round or milestone.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c9982a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>,
  },
];

export default function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits__inner">
        <div className="benefits__head">
          <div>
            <Eyebrow>Why OneDesk</Eyebrow>
            <h2 className="benefits__title">
              Build with structure. Scale with confidence<span className="dot">.</span>
            </h2>
          </div>
          <p className="benefits__lede">
            The compounding advantage of one connected partner — less to manage, more clarity, decisions that
            finally pull in the same direction.
          </p>
        </div>
        <div className="benefits__grid">
          {BENEFITS.map((b) => (
            <div key={b.title} className="benefits__card" style={{ background: `var(--c-${b.color}-l)` }}>
              <span className="benefits__icon">{b.icon}</span>
              <h3>{b.title}</h3>
              <p>{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
