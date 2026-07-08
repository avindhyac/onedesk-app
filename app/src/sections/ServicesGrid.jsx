import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { characters } from "../data/characters";
import { SERVICES } from "../data/services";
import "./ServicesGrid.css";

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="services-grid__inner">
        <SectionHeading
          eyebrow="Everything you need"
          title="Six teams. One desk."
          subtitle="Bundle the back-office functions every company needs - each run by specialists, all coordinated for you."
        />
        <div className="services-grid__cards">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.key}
              service={s.key}
              title={s.title}
              description={s.desc}
              character={characters[s.char]}
              to={`/services/${s.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
