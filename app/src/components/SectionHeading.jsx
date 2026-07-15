import "./SectionHeading.css";

export default function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  subtitle,
  accent,
  align = "center",
}) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && (
        <p
          className="section-heading__eyebrow"
          style={eyebrowColor ? { color: eyebrowColor } : undefined}
        >
          {eyebrow}
        </p>
      )}
      <h2 className="section-heading__title">
        {accent ? (
          <>
            {title.split(accent)[0]}
            <span className="section-heading__accent">{accent}</span>
            {title.split(accent)[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}
