import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import "./FinalCta.css";

const DOT_COLORS = ["sec", "acc", "leg", "tax", "hr", "mkt"];

export default function FinalCta({ title = "Let's build what matters, together." }) {
  return (
    <section id="contact" className="final-cta">
      <div className="final-cta__inner">
        <div className="final-cta__card">
          <div className="final-cta__dots">
            {DOT_COLORS.map((c) => (
              <div key={c} className="final-cta__dot" style={{ background: `var(--c-${c}-m)` }} />
            ))}
          </div>
          <div className="final-cta__content">
            <Eyebrow tone="on-dark">Get started</Eyebrow>
            <h2>{title}</h2>
            <p>Tell us where you are today. We&apos;ll show you what one connected partner can take off your plate.</p>
            <div className="final-cta__ctas">
              <Button variant="primary" size="lg" dot as={Link} to="/contact">Talk to OneDesk</Button>
              <Button variant="on-dark" size="lg" as={Link} to="/pricing">View pricing</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
