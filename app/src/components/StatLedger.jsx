import CountUp from "./CountUp";
import RevealOnScroll from "./RevealOnScroll";
import "./StatLedger.css";

/* Accent tick colors. Light surfaces use the readable (AA) shades; dark
   surfaces use the brighter base/tint steps so the tick reads on navy. */
const ACCENT_LIGHT = {
  ember: "var(--od-orange-700)",
  teal: "var(--od-teal-700)",
  sec: "var(--od-sec-text)",
  acc: "var(--od-acc-text)",
  leg: "var(--od-leg-text)",
  tax: "var(--od-tax-text)",
  hr: "var(--od-hr-text)",
  mkt: "var(--od-mkt-text)",
};
const ACCENT_DARK = {
  ember: "var(--od-orange)",
  teal: "var(--od-teal-300)",
  sec: "var(--od-sec-accent)",
  acc: "var(--od-acc-light)",
  leg: "var(--od-leg-light)",
  tax: "var(--od-tax-light)",
  hr: "var(--od-hr-light)",
  mkt: "var(--od-mkt)",
};

// Final rendered width (in ch) so the count-up reserves space and never reflows.
function reserve(item) {
  const str =
    item.to !== undefined
      ? item.to.toLocaleString() + (item.suffix || "")
      : String(item.value ?? "");
  return Math.max(str.length, 2);
}

export default function StatLedger({
  items,
  variant = "light",
  layout = "row",
  className = "",
}) {
  const accents = variant === "dark" ? ACCENT_DARK : ACCENT_LIGHT;

  return (
    <div
      className={`od-ledger od-ledger--${variant} od-ledger--${layout} ${className}`.trim()}
    >
      {items.map((s, i) => (
        <RevealOnScroll
          key={s.label}
          className="od-ledger__cell"
          delay={i * 0.09}
          y={16}
        >
          <span
            className="od-ledger__tick"
            style={{ background: accents[s.accent] || accents.ember }}
            aria-hidden="true"
          />
          <div
            className="od-ledger__value"
            style={{ minWidth: `${reserve(s)}ch` }}
          >
            {s.to !== undefined ? (
              <CountUp to={s.to} suffix={s.suffix || ""} />
            ) : (
              s.value
            )}
          </div>
          <div className="od-ledger__label">{s.label}</div>
          {s.context && <div className="od-ledger__context">{s.context}</div>}
        </RevealOnScroll>
      ))}
    </div>
  );
}
