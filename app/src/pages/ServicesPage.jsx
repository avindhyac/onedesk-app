import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import RevealOnScroll from "../components/RevealOnScroll";
import FinalCta from "../sections/FinalCta";
import { characters } from "../data/characters";
import "./ServicesPage.css";

const SERVICES = [
  {
    key: "legal", color: "leg", num: "01",
    title: "Legal & Regulatory",
    tagline: "Protection before the problem finds you.",
    chips: ["Contract Drafting", "Regulatory Licensing", "Corporate Governance", "Risk Advisory", "Employment Law"],
  },
  {
    key: "tax", color: "tax", num: "02",
    title: "Tax Advisory",
    tagline: "Efficient, accurate, always ahead.",
    chips: ["Tax Registration", "Corporate Filing", "Tax Structuring", "Cross-border"],
  },
  {
    key: "accounting", color: "acc", num: "03",
    title: "Accounting",
    tagline: "A clear picture of your finances, always.",
    chips: ["Bookkeeping", "Financial Reports", "Bank Reconciliations", "Management Accounts"],
  },
  {
    key: "hr", color: "hr", num: "04",
    title: "HR & Payroll",
    tagline: "Your people, managed with precision.",
    chips: ["Payroll Processing", "Employment Contracts", "Statutory Filings", "HR Compliance", "Record Management"],
  },
  {
    key: "secretarial", color: "sec", num: "05",
    title: "Company Secretarial",
    tagline: "From first filing to last — nothing missed.",
    chips: ["Incorporation", "Annual Returns", "Board Resolutions", "Share Transfers", "Statutory Registers"],
  },
  {
    key: "marketing", color: "mkt", num: "06",
    title: "Marketing & Brand",
    tagline: "Make the right people find you.",
    chips: ["Brand Strategy", "Digital Marketing", "Social Media", "Growth Campaigns"],
  },
];

const PROCESS_STEPS = [
  { num: "01", color: "sec", title: "Understand", text: "We learn your business needs, structure and goals." },
  { num: "02", color: "acc", title: "Structure", text: "We set up the right legal and operational foundations." },
  { num: "03", color: "leg", title: "Manage", text: "Ongoing compliance handled — every obligation met." },
  { num: "04", color: "mkt", title: "Scale", text: "Your support structure grows with every milestone." },
];

export default function ServicesPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Our services"
        title="Six pillars. One partner"
        subtitle="From first incorporation to ongoing compliance — every function your business needs, coordinated under one roof."
      />

      <section className="svc-bento">
        <div className="svc-bento__inner">
          <div className="svc-bento__grid">
            {SERVICES.map((s, i) => (
              <RevealOnScroll
                key={s.key}
                delay={i * 0.07}
                className="svc-wrap"
              >
                <motion.div
                  className="svc-card"
                  style={{
                    "--pillar": `var(--c-${s.color})`,
                    "--pillar-l": `var(--c-${s.color}-l)`,
                    "--pillar-m": `var(--c-${s.color}-m)`,
                  }}
                  whileHover={{ y: -6, boxShadow: "0 24px 60px rgba(0,0,0,0.10)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                >
                  <div className="svc-card__art">
                    <img src={characters[s.key]} alt={s.title} />
                  </div>
                  <div className="svc-card__body">
                    <span className="svc-card__num">{s.num}</span>
                    <h3 className="svc-card__title">{s.title}</h3>
                    <p className="svc-card__tagline">{s.tagline}</p>
                    <div className="svc-card__chips">
                      {s.chips.map((chip) => (
                        <span key={chip} className="svc-card__chip">{chip}</span>
                      ))}
                    </div>
                    <Button variant="primary" size="md" dot as={Link} to="/contact">Get in touch</Button>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="svc-process">
        <div className="svc-process__inner">
          <RevealOnScroll>
            <div className="svc-process__head">
              <Eyebrow tone="harbor">How we work</Eyebrow>
              <h2 className="svc-process__title">From first conversation to scale<span className="dot">.</span></h2>
              <p className="svc-process__lede">A four-stage approach that adapts to where your business is — and where it's going.</p>
            </div>
          </RevealOnScroll>
          <div className="svc-process__steps">
            {PROCESS_STEPS.map((s, i) => (
              <RevealOnScroll key={s.num} delay={i * 0.09}>
                <motion.div
                  className="svc-process__step"
                  style={{ "--pillar": `var(--c-${s.color})`, "--pillar-l": `var(--c-${s.color}-l)` }}
                  whileHover={{ y: -5, boxShadow: "0 18px 44px rgba(0,0,0,0.09)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                >
                  <div className="svc-process__bullet">{s.num}</div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Ready to bring everything under one roof?" />
    </PageTransition>
  );
}
