import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";
import Button from "../components/Button";
import StatLedger from "../components/StatLedger";
import CtaBand from "../sections/CtaBand";
import { characters } from "../data/characters";
import "./ServicesPage.css";

const SERVICES = [
  {
    key: "sec", char: "secretarial", icon: "lucide:building-2",
    title: "Corporate Secretarial",
    tagline: "Stay in good standing, effortlessly.",
    desc: "From formation to annual reports, we keep your entity compliant in every state you operate. Registered agent, filings and reminders — all handled.",
    points: ["Company formation & EIN", "Registered agent in all 50 states", "Annual reports & state filings", "Cap table & board minutes"],
  },
  {
    key: "acc", char: "accounting", icon: "lucide:calculator",
    title: "Accounting",
    tagline: "Books you can actually trust.",
    desc: "Real accountants keep your books clean and your reports current, so you always know where you stand — and so does your investor.",
    points: ["Monthly bookkeeping", "Payroll & expense management", "Investor-ready financials", "Dedicated accountant"],
  },
  {
    key: "leg", char: "legal", icon: "lucide:scale",
    title: "Legal",
    tagline: "Counsel on call, not on the clock.",
    desc: "Contracts reviewed, compliance covered and questions answered — without surprise invoices. Your legal team, on a flat subscription.",
    points: ["Contract drafting & review", "Compliance & policies", "Trademark & IP basics", "On-demand legal Q&A"],
  },
  {
    key: "tax", char: "tax", icon: "lucide:percent",
    title: "Tax",
    tagline: "Every filing, every deduction.",
    desc: "Federal, state and sales tax prepared and filed on time, with proactive planning to keep more money in the business.",
    points: ["Federal & state returns", "Sales tax & nexus", "Quarterly estimates", "Year-round tax planning"],
  },
  {
    key: "hr", char: "hr", icon: "lucide:users",
    title: "HR",
    tagline: "Take care of your team.",
    desc: "Hiring, onboarding, benefits and policies — set up properly from day one, so your people feel supported and you stay compliant.",
    points: ["Hiring & onboarding", "Benefits administration", "Handbooks & policies", "PTO & compliance"],
  },
  {
    key: "mkt", char: "marketing", icon: "lucide:megaphone",
    title: "Marketing",
    tagline: "Growth that compounds.",
    desc: "Brand, content and campaigns run by specialists who treat your numbers like their own. Less guesswork, more pipeline.",
    points: ["Brand & messaging", "Content & SEO", "Paid & email campaigns", "Monthly growth reporting"],
  },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <Seo
        title="Services"
        description="Six specialist teams, fully coordinated — corporate secretarial, accounting, legal, tax, HR and marketing under one roof."
        path="/services"
      />

      <section className="svcp-hero">
        <div className="svcp-hero__inner">
          <SectionHeading
            eyebrow="Our services"
            title="Six specialist teams, fully coordinated."
            subtitle="Each service is run by experts and themed in its own color — so you always know who's doing what."
          />
        </div>
      </section>

      <section className="svcp-proof">
        <div className="svcp-proof__inner">
          <StatLedger
            layout="row"
            variant="light"
            items={[
              { to: 6,                label: "Specialist teams",  accent: "sec" },
              { to: 50,               label: "Industries served", accent: "acc" },
              { to: 1,                label: "Monthly bill",      accent: "tax" },
              { to: 100, suffix: "%", label: "In-house experts",  accent: "mkt" },
            ]}
          />
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={s.key} className={`svcp-row ${flip ? "svcp-row--white" : "svcp-row--paper"}`}>
            <div className="svcp-row__inner">
              <div className={`svcp-row__art ${flip ? "svcp-row__art--right" : ""}`}>
                <div className={`svcp-row__blob svcp-blob--${s.key}`} />
                <span className={`svcp-row__icon-badge svcp-icon-badge--${s.key}`}>
                  <iconify-icon icon={s.icon} />
                </span>
                <img src={characters[s.char]} alt={s.title} className="svcp-row__char" />
              </div>
              <div className="svcp-row__copy">
                <Tag service={s.key} />
                <h2 className={`svcp-row__tagline svcp-tagline--${s.key}`}>{s.tagline}</h2>
                <p className="svcp-row__desc">{s.desc}</p>
                <ul className="svcp-row__points">
                  {s.points.map((p) => (
                    <li key={p} className="svcp-row__point">
                      <iconify-icon icon="lucide:check-circle-2" className={`svcp-row__check svcp-check--${s.key}`} />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="svcp-row__cta">
                  <Button variant="primary" size="md" iconRight="lucide:arrow-right" as={Link} to="/contact">
                    Talk to {s.title}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Bundle them and save."
        subtitle="Most founders combine three or more services. The more you bundle, the more you save."
        ctaLabel="See pricing"
        ctaTo="/pricing"
      />
    </PageTransition>
  );
}
