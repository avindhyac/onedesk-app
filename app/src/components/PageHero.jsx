import { useRef } from "react";
import Eyebrow from "./Eyebrow";
import useSplitTextReveal from "../hooks/useSplitTextReveal";
import "./PageHero.css";

export default function PageHero({ eyebrow, eyebrowTone = "ember", title, titleDot = true, subtitle, dark = false, seamless = false, children }) {
  const titleRef = useRef(null);
  useSplitTextReveal(titleRef);

  return (
    <section className={`page-hero${dark ? " page-hero--dark" : ""}${seamless ? " page-hero--seamless" : ""}`}>
      {dark && <div className="page-hero__glow" />}
      <div className="page-hero__inner">
        {eyebrow && <Eyebrow tone={dark ? "on-dark" : eyebrowTone}>{eyebrow}</Eyebrow>}
        <h1 className="page-hero__title" ref={titleRef}>
          {title}{titleDot && <span className="dot">.</span>}
        </h1>
        {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
        {children}
      </div>
      
    </section>
  );
}
