import "./Eyebrow.css";

export default function Eyebrow({
  children,
  tone = "ember",
  className = "",
  ...rest
}) {
  const cls = [
    "od-eyebrow",
    tone === "harbor" ? "od-eyebrow--harbor" : "",
    tone === "muted" ? "od-eyebrow--muted" : "",
    tone === "on-dark" ? "od-eyebrow--on-dark" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span className={cls} {...rest}>
      <span className="od-eyebrow__dot" />
      {children}
    </span>
  );
}
