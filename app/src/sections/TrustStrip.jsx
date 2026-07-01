import Stat from "../components/Stat";
import "./TrustStrip.css";

const STATS = [
  { to: 150, suffix: "+",  label: "Businesses supported", color: "var(--od-orange)" },
  { to: 6,   suffix: "",   label: "Services, one roof",    color: "var(--od-teal)"   },
  { to: 100, suffix: "%",  label: "Compliance visibility", color: "var(--od-sec)"    },
  { to: 1,   suffix: "",   label: "Point of contact",      color: "var(--od-acc)"    },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-strip__inner">
        {STATS.map((s) => (
          <Stat key={s.label} to={s.to} suffix={s.suffix} label={s.label} color={s.color} />
        ))}
      </div>
    </section>
  );
}
