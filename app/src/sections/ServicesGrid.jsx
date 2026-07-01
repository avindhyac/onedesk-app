import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { characters } from "../data/characters";
import "./ServicesGrid.css";

const SERVICES = [
  { key: "sec", char: "secretarial", title: "Corporate Secretarial", desc: "Formation, registered agent and every state filing kept current — automatically." },
  { key: "acc", char: "accounting",  title: "Accounting",            desc: "Bookkeeping, payroll and clean monthly reports, done for you by real accountants." },
  { key: "leg", char: "legal",       title: "Legal",                 desc: "Contracts, compliance and on-call counsel — without the hourly billing." },
  { key: "tax", char: "tax",         title: "Tax",                   desc: "Federal, state and sales tax filed on time, with every deduction found." },
  { key: "hr",  char: "hr",          title: "HR",                    desc: "Hiring, onboarding and benefits handled, so your team feels looked after." },
  { key: "mkt", char: "marketing",   title: "Marketing",             desc: "Brand, content and campaigns that actually move the needle on growth." },
];

export default function ServicesGrid() {
  return (
    <section className="services-grid">
      <div className="services-grid__inner">
        <SectionHeading
          eyebrow="Everything you need"
          title="Six teams. One desk."
          subtitle="Bundle the back-office functions every company needs — each run by specialists, all coordinated for you."
        />
        <div className="services-grid__cards">
          {SERVICES.map((s) => (
            <ServiceCard
              key={s.key}
              service={s.key}
              title={s.title}
              description={s.desc}
              character={characters[s.char]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
