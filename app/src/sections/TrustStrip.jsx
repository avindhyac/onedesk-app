import StatLedger from "../components/StatLedger";
import "./TrustStrip.css";

const STATS = [
  { to: 30, suffix: "+", label: "years of prior expertise", accent: "ember" },
  { to: 6, label: "Services, one roof", accent: "teal" },
  { to: 100, suffix: "%", label: "Compliance visibility", accent: "sec" },
  { to: 1, label: "Point of contact", accent: "acc" },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip">
      <div className="trust-strip__inner">
        <StatLedger items={STATS} layout="row" variant="light" />
      </div>
    </section>
  );
}
