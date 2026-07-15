import "./Button.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  block = false,
  dot = false,
  icon = null,
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

  const renderIcon = (src) => {
    if (!src) return null;
    if (typeof src === "string")
      return <iconify-icon icon={src} style={{ fontSize: "1.1em" }} />;
    return <span className="od-btn__icon">{src}</span>;
  };

  return (
    <Tag className={cls} {...rest}>
      {renderIcon(icon || iconLeft)}
      <span>{children}</span>
      {dot && <span className="od-btn__dot" />}
      {renderIcon(iconRight)}
    </Tag>
  );
}
