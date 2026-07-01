import "./Badge.css";

export default function Badge({ children, tone = "orange", icon }) {
  return (
    <span className={`od-badge od-badge--${tone}`}>
      {icon && <iconify-icon icon={icon} className="od-badge__icon" />}
      {children}
    </span>
  );
}
