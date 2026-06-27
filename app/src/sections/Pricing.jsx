import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import RevealOnScroll from "../components/RevealOnScroll";
import "./Pricing.css";

const Check = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ color }}>
    <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.13" />
    <path d="M4.5 8l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TIERS = [
  {
    id: "starter",
    name: "Starter",
    price: "25,000",
    desc: "The essentials to get your business properly structured and compliant from day one.",
    featured: false,
    checkColor: "var(--c-acc)",
    accentVar: "--c-acc",
    features: [
      "Company incorporation & secretarial",
      "Annual statutory filings",
      "Basic bookkeeping — up to 50 transactions/mo",
      "1 employment contract template",
      "Quarterly tax advisory",
      "Email support",
    ],
    cta: "Get started",
  },
  {
    id: "growth",
    name: "Growth",
    price: "65,000",
    desc: "Full-service support for businesses in motion. The tier most clients start and stay on.",
    featured: true,
    checkColor: "var(--ember-500)",
    accentVar: "ember-500",
    features: [
      "Everything in Starter",
      "Full monthly bookkeeping & management accounts",
      "Payroll for up to 15 employees",
      "Legal advisory — 2 hours/month",
      "Quarterly tax filing & planning",
      "Marketing consultation — 1 session/month",
      "Priority support",
    ],
    cta: "Start with Growth",
  },
  {
    id: "scale",
    name: "Scale",
    price: "120,000",
    desc: "A dedicated team for companies that need every function running at full capacity.",
    featured: false,
    checkColor: "var(--c-leg)",
    accentVar: "--c-leg",
    features: [
      "Everything in Growth",
      "Dedicated account manager",
      "HR & payroll — unlimited employees",
      "Legal retainer — 5 hours/month",
      "Advanced tax & cross-border structuring",
      "Marketing strategy & campaign execution",
      "24/7 priority support",
    ],
    cta: "Talk to us",
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <div className="pricing__inner">
        <RevealOnScroll>
          <div className="pricing__head">
            <Eyebrow>Pricing</Eyebrow>
            <h2 className="pricing__title">
              Transparent pricing for every stage<span className="dot">.</span>
            </h2>
            <p className="pricing__lede">
              One monthly engagement — no hidden retainers, no surprise invoices. Pick the tier that
              fits where your business is today and move up as you grow.
            </p>
          </div>
        </RevealOnScroll>

        <div className="pricing__grid">
          {TIERS.map((tier, i) => (
            <RevealOnScroll key={tier.id} delay={i * 0.1} className="pricing__wrap">
              <motion.div
                className={`pricing__card${tier.featured ? " pricing__card--featured" : ""}`}
                whileHover={{
                  y: -6,
                  boxShadow: tier.featured
                    ? "0 36px 80px rgba(0,0,0,0.13)"
                    : "0 20px 50px rgba(0,0,0,0.09)",
                }}
                transition={{ type: "spring", stiffness: 340, damping: 26 }}
              >
                {tier.featured && (
                  <div className="pricing__badge">Most popular</div>
                )}

                <div className="pricing__tier-name" style={{ color: tier.checkColor }}>
                  {tier.name}
                </div>

                <div className="pricing__price">
                  <span className="pricing__currency">LKR</span>
                  <span className="pricing__amount">{tier.price}</span>
                  <span className="pricing__period">/mo</span>
                </div>

                <p className="pricing__desc">{tier.desc}</p>

                <div className="pricing__divider" />

                <ul className="pricing__features">
                  {tier.features.map((f) => (
                    <li key={f} className="pricing__feature">
                      <span className="pricing__check">
                        <Check color={tier.checkColor} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pricing__cta">
                  <Button
                    variant={tier.featured ? "primary" : "outline"}
                    size="md"
                    dot={tier.featured}
                    as={Link}
                    to="/contact"
                    block
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={0.35}>
          <p className="pricing__note">
            All plans billed monthly in LKR. Prices are indicative — final scope is confirmed during
            onboarding. <Link to="/contact">Talk to us</Link> if you need something custom.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
