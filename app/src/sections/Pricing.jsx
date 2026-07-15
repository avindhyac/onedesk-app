import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import PricingCard from "../components/PricingCard";
import FaqItem from "../components/FaqItem";
import "./Pricing.css";

const PLANS = [
  {
    name: "Starter",
    price: "LKR 25,000",
    tagline: "For brand-new companies",
    features: [
      "Company formation",
      "Registered agent",
      "Monthly bookkeeping",
      "Annual report filing",
      "Email support",
    ],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: "LKR 65,000",
    tagline: "For funded startups",
    featured: true,
    features: [
      "Everything in Starter",
      "Dedicated accountant",
      "Tax filing & planning",
      "Legal contract review",
      "Priority support",
    ],
    cta: "Choose Growth",
  },
  {
    name: "Full Desk",
    price: "LKR 120,000",
    tagline: "The whole back office",
    features: [
      "Everything in Growth",
      "HR & payroll",
      "Marketing pod",
      "Quarterly business review",
      "Dedicated success lead",
    ],
    cta: "Go Full Desk",
  },
];

const COMPARE_ROWS = [
  ["Corporate secretarial", true, true, true],
  ["Dedicated accountant", false, true, true],
  ["Monthly bookkeeping", true, true, true],
  ["Tax filing & planning", false, true, true],
  ["Legal contract review", false, true, true],
  ["HR & payroll", false, false, true],
  ["Marketing pod", false, false, true],
  ["Priority support", false, true, true],
];

const PRICING_FAQS = [
  {
    q: "Are there any setup fees?",
    a: "None. Your monthly price is all-in, state filing fees are passed through at cost with no markup.",
  },
  {
    q: "Can I change plans later?",
    a: "Anytime. Upgrades take effect immediately; downgrades apply next billing cycle.",
  },
  {
    q: "What if I only need one service?",
    a: "Reach out, we offer standalone service pricing for teams that aren't ready to bundle yet.",
  },
];

export default function Pricing() {
  const cell = (v) =>
    v ? (
      <iconify-icon icon="lucide:check" className="pricing-table__check" />
    ) : (
      <iconify-icon icon="lucide:minus" className="pricing-table__minus" />
    );

  return (
    <>
      <section className="pricing-cards">
        <div className="pricing-cards__inner">
          <SectionHeading
            eyebrow="Pricing"
            title="One subscription. No surprises."
            subtitle="Flat monthly pricing that scales with your business. Cancel anytime."
          />
          <div className="pricing-cards__grid">
            {PLANS.map((p) => (
              <PricingCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-compare">
        <div className="pricing-compare__inner">
          <SectionHeading title="Compare the plans" />
          <div className="pricing-table-wrap">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="pricing-table__th pricing-table__th--label"></th>
                  {["Starter", "Growth", "Full Desk"].map((n, i) => (
                    <th
                      key={n}
                      className={`pricing-table__th ${i === 1 ? "pricing-table__th--featured" : ""}`}
                    >
                      {n}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r) => (
                  <tr key={r[0]} className="pricing-table__row">
                    <td className="pricing-table__td pricing-table__td--label">
                      {r[0]}
                    </td>
                    <td className="pricing-table__td">{cell(r[1])}</td>
                    <td className="pricing-table__td pricing-table__td--featured">
                      {cell(r[2])}
                    </td>
                    <td className="pricing-table__td">{cell(r[3])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="pricing-faq">
        <div className="pricing-faq__inner">
          <SectionHeading title="Pricing questions" />
          <div className="pricing-faq__list">
            {PRICING_FAQS.map((f, i) => (
              <FaqItem key={f.q} q={f.q} defaultOpen={i === 0}>
                {f.a}
              </FaqItem>
            ))}
          </div>
          <p className="pricing-faq__note">
            All plans billed monthly.{" "}
            <Link to="/contact" className="pricing-faq__link">
              Talk to us
            </Link>{" "}
            if you need something custom.
          </p>
        </div>
      </section>
    </>
  );
}
