import Eyebrow from "../components/Eyebrow";
import CountUp from "../components/CountUp";
import { characters } from "../data/characters";
import "./Stats.css";

const STATS = [
  { to: 150, suffix: "+", label: "Businesses supported" },
  { to: 6, suffix: "", label: "Services, one roof" },
  { to: 100, suffix: "%", label: "Compliance visibility" },
  { to: 1, suffix: "", label: "Point of contact" },
];

export default function Stats() {
  return (
    <section id="stats" className="stats">
      <div className="stats__bg1" />
      <div className="stats__bg2" />
      <div className="stats__bg3" />
      <div className="stats__bg4" />
      <div className="stats__inner">
        <div className="stats__art">
          <img src={characters.hr} alt="" />
        </div>
        <div>
          <Eyebrow tone="on-light">By the numbers</Eyebrow>
          <h2 className="stats__title">
            The compounding advantage of one connected partner<span className="dot">.</span>
          </h2>
          <div className="stats__grid">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stats__value"><CountUp to={s.to} suffix={s.suffix} /></div>
                <div className="stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
