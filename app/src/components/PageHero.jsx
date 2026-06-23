import Eyebrow from "./Eyebrow";
import "./PageHero.css";

export default function PageHero({ eyebrow, eyebrowTone = "ember", title, titleDot = true, subtitle, dark = false, children }) {
  return (
    <section className={`page-hero${dark ? " page-hero--dark" : ""}`}>
      {dark && <div className="page-hero__glow" />}
      <div className="page-hero__inner">
        {eyebrow && <Eyebrow tone={dark ? "on-dark" : eyebrowTone}>{eyebrow}</Eyebrow>}
        <h1 className="page-hero__title">
          {title}{titleDot && <span className="dot">.</span>}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}
