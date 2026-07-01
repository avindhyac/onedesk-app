import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";
import "./TestimonialsGrid.css";

const TESTIMONIALS = [
  {
    service: "acc",
    quote: "They closed our books in a weekend and saved us $4k in fees. I finally sleep before tax season.",
    name: "Dana Lee",
    role: "Founder, Tidepool",
  },
  {
    service: "leg",
    quote: "Having legal, tax and accounting under one roof means nothing falls through the cracks anymore.",
    name: "Marcus Reyes",
    role: "CEO, Northwind",
  },
  {
    service: "hr",
    quote: "Onboarding our first five hires was completely painless. OneDesk just handled it.",
    name: "Priya Nair",
    role: "COO, Lumen Labs",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="testimonials-grid">
      <div className="testimonials-grid__inner">
        <SectionHeading
          eyebrow="Loved by founders"
          title="Don't take our word for it."
        />
        <div className="testimonials-grid__cards">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
