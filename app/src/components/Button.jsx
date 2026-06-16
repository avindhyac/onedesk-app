import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  dot = false,
  iconLeft = null,
  iconRight = null,
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = [
    "od-btn",
    `od-btn--${variant}`,
    `od-btn--${size}`,
    block ? "od-btn--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag className={cls} {...rest}>
      {iconLeft ? <span className="od-btn__icon">{iconLeft}</span> : null}
      <span>{children}</span>
      {dot ? <span className="od-btn__dot" /> : null}
      {iconRight ? <span className="od-btn__icon">{iconRight}</span> : null}
    </Tag>
  );
}
