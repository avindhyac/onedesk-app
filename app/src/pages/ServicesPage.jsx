import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import PageHero from "../components/PageHero";
import FinalCta from "../sections/FinalCta";
import { characters } from "../data/characters";
import "./ServicesPage.css";

const SERVICES = [
  {
    key: "legal", color: "leg", rgb: "75,56,98", num: "01",
    title: "Legal Advisory & Regulatory Support",
    desc: "Drafting, contracts and regulatory guidance to keep you protected at every stage of your business journey.",
    features: [
      "Commercial agreement drafting and review",
      "Regulatory and licensing support",
      "Corporate governance advisory",
      "Employment and HR legal frameworks",
      "Risk and dispute advisory support",
    ],
  },
  {
    key: "tax", color: "tax", rgb: "196,106,58", num: "02",
    title: "Tax Advisory & Compliance",
    desc: "Strategic tax planning and compliance management that keeps you efficient, accurate and ahead of every deadline.",
    features: [
      "Tax registrations and statutory enrollment",
      "Corporate tax filing coordination",
      "Withholding tax reporting",
      "Tax structuring and advisory",
      "Cross-border tax considerations",
    ],
  },
  {
    key: "accounting", color: "acc", rgb: "104,126,116", num: "03",
    title: "Accounting & Financial Reporting",
    desc: "Structured financial support that gives you a clear, current picture of your business at all times.",
    features: [
      "Bookkeeping and ledger maintenance",
      "Bank reconciliations",
      "Accounts payable and receivable tracking",
      "Financial statement preparation",
      "Management reporting support",
    ],
  },
  {
    key: "hr", color: "hr", rgb: "217,107,94", num: "04",
    title: "HR & Payroll Administration",
    desc: "Compliant people administration and payroll management that runs accurately, on time, every cycle.",
    features: [
      "Employment documentation and contracts",
      "Payroll processing and salary management",
      "Statutory contributions and filings",
      "Employee record maintenance",
      "HR policy and compliance support",
    ],
  },
  {
    key: "secretarial", color: "sec", rgb: "29,45,68", num: "05",
    title: "Company Secretarial & Statutory Compliance",
    desc: "Full incorporation support and ongoing regulatory compliance — from first filing to annual returns and beyond.",
    features: [
      "Company name reservation and incorporation filing",
      "Articles of Association preparation",
      "Statutory register maintenance",
      "Board and shareholder resolution preparation",
      "Director appointment and share transfer management",
      "Annual return filings",
    ],
  },
  {
    key: "marketing", color: "mkt", rgb: "201,152,42", num: "06",
    title: "Marketing & Brand Growth",
    desc: "Brand and growth support that helps the right audiences find, understand and trust your business.",
    features: [
      "Brand strategy and positioning",
      "Digital marketing and content",
      "Social media management",
      "Growth and acquisition campaigns",
      "Marketing compliance and creative",
    ],
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
    <div>
      <PageHero
        eyebrow="Our services"
        title="Six pillars. One partner"
        subtitle="From first incorporation to ongoing compliance — every function your business needs, coordinated under one roof."
      />

      <section className="svc-list">
        <div className="svc-list__inner">
          {SERVICES.map((s, i) => (
            <div
              key={s.key}
              className={`svc-row${i % 2 === 1 ? " svc-row--flip" : ""}`}
              style={{ "--pillar": `var(--c-${s.color})`, "--pillar-l": `var(--c-${s.color}-l)`, "--pillar-m": `var(--c-${s.color}-m)` }}
            >
              <div className="svc-row__visual">
                <div className="svc-row__seal">
                  <img src={characters[s.key]} alt={s.title} />
                </div>
                <span className="svc-row__num">{s.num}</span>
              </div>
              <div className="svc-row__content">
                <h2 className="svc-row__title">{s.title}</h2>
                <p className="svc-row__desc">{s.desc}</p>
                <ul className="svc-row__features">
                  {s.features.map((f) => (
                    <li key={f}>
                      <span className="svc-row__check">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="md" dot as={Link} to="/contact">Get in touch</Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="svc-process">
        <div className="svc-process__inner">
          <div className="svc-process__head">
            <Eyebrow tone="harbor">How we work</Eyebrow>
            <h2 className="svc-process__title">From first conversation to scale<span className="dot">.</span></h2>
            <p className="svc-process__lede">A four-stage approach that adapts to where your business is — and where it's going.</p>
          </div>
          <div className="svc-process__steps">
            {PROCESS_STEPS.map((s) => (
              <div key={s.num} className="svc-process__step" style={{ "--pillar": `var(--c-${s.color})`, "--pillar-l": `var(--c-${s.color}-l)` }}>
                <div className="svc-process__bullet">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Ready to bring everything under one roof?" />
    </div>
  );
}
