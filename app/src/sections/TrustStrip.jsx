import StatLedger from "../components/StatLedger";
import "./TrustStrip.css";

const STATS = [
  { to: 48, suffix: "hrs", label: "Company Incorporation", accent: "ember" },
  { to: 1, label: "Point of contact across every service", accent: "teal" },
  { to: 5, label: "In-house specialist teams", accent: "sec" },
  {
    to: 20,
    suffix: " years",
    label: "Combined practice experience",
    accent: "ember",
  },
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
