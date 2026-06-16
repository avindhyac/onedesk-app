import Eyebrow from "../components/Eyebrow";
import { ROW_1, ROW_2 } from "../data/testimonials";
import "./Testimonials.css";

function Card({ t }) {
  return (
    <div
      className="testimonial-card"
      style={{ background: t.bg, borderColor: t.border, borderTopColor: t.top }}
    >
      <div className="testimonial-card__quote" style={{ color: t.quoteColor }}>&ldquo;</div>
      <p style={{ color: t.text }}>{t.quote}</p>
      <div className="testimonial-card__person">
        <div className="testimonial-card__avatar" style={{ background: t.avatarBg, color: t.avatarFg }}>{t.initial}</div>
        <div>
          <div className="testimonial-card__name" style={{ color: t.nameColor }}>{t.name}</div>
          <div className="testimonial-card__role" style={{ color: t.roleColor }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

function Row({ items, animation, duration }) {
  const doubled = [...items, ...items];
  return (
    <div className="testimonials__carousel" data-carousel>
      <div className="testimonials__track" data-track style={{ animation: `${animation} ${duration}s linear infinite` }}>
        {doubled.map((t, i) => (
          <Card key={`${t.name}-${i}`} t={t} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__head">
        <Eyebrow>What clients say</Eyebrow>
        <h2>Real businesses. Real clarity<span className="dot">.</span></h2>
      </div>
      <Row items={ROW_1} animation="odScrollL" duration={36} />
      <div style={{ marginTop: 16 }}>
        <Row items={ROW_2} animation="odScrollR" duration={42} />
      </div>
    </section>
  );
}
