import Eyebrow from "../components/Eyebrow";
import "./Process.css";

const STEPS = [
  { num: "01", color: "sec", title: "Discover", text: "We learn your business, goals and setup." },
  { num: "02", color: "acc", title: "Connect", text: "Matched with one dedicated team." },
  { num: "03", color: "leg", title: "Diagnose", text: "We map gaps across all six functions." },
  { num: "04", color: "tax", title: "Coordinate", text: "Functions aligned into one plan." },
  { num: "05", color: "hr", title: "Deliver", text: "Work done - on time and on the record." },
  { num: "06", color: "mkt", title: "Scale", text: "Structure grows with every milestone.", filled: true },
];

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process__inner">
        <div className="process__head">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="process__title">From first conversation to scale<span className="dot">.</span></h2>
        </div>
        <div className="process__track-wrap">
          <div className="process__track-line" />
          <div className="process__steps">
            {STEPS.map((s) => (
              <div key={s.num} className="process__step">
                <div
                  className="process__bullet"
                  style={{
                    background: s.filled ? `var(--c-${s.color})` : `var(--c-${s.color}-l)`,
                    borderColor: `var(--c-${s.color})`,
                    color: s.filled ? "#fff" : `var(--c-${s.color})`,
                  }}
                >
                  {s.num}
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
