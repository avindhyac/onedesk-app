import SectionHeading from "../components/SectionHeading";
import FaqItem from "../components/FaqItem";
import "./Faq.css";

const FAQS = [
  {
    q: "What exactly is OneDesk?",
    a: "OneDesk is a subscription that bundles your back-office services - corporate secretarial, accounting, legal, tax, HR and marketing - under one team.",
    defaultOpen: true,
  },
  {
    q: "Can I pick only the services I need?",
    a: "Absolutely. Start with accounting and tax, add legal or HR whenever you're ready. You only pay for what you use.",
  },
  {
    q: "How fast can you form my company?",
    a: "Most filings go out same-day; states return documents in 2–10 business days depending on jurisdiction.",
  },
  {
    q: "Do I get real people or software?",
    a: "Both. Real specialists do the work; our dashboard keeps everything visible and on schedule.",
  },
];

export default function Faq() {
  return (
    <section className="faq-section">
      <div className="faq-section__inner">
        <SectionHeading title="Questions, answered." />
        <div className="faq-section__list">
          {FAQS.map((f) => (
            <FaqItem key={f.q} q={f.q} defaultOpen={f.defaultOpen}>
              {f.a}
            </FaqItem>
          ))}
        </div>
      </div>
    </section>
  );
}
