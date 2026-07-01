import CountUp from "./CountUp";
import "./Stat.css";

export default function Stat({ value, label, color, to, suffix = "", prefix = "" }) {
  return (
    <div className="od-stat">
      <div className="od-stat__value" style={color ? { color } : undefined}>
        {to !== undefined
          ? <><span>{prefix}</span><CountUp to={to} suffix={suffix} /></>
          : value}
      </div>
      <div className="od-stat__label">{label}</div>
    </div>
  );
}
