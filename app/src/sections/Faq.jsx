import SectionHeading from "../components/SectionHeading";
import FaqItem from "../components/FaqItem";
import "./Faq.css";

const FAQS = [
  {
    q: "What exactly is OneDesk?",
    a: "OneDesk is a single platform that provides your business with specialist teams across corporate secretarial, legal, tax, accounting, HR and marketing, managed through one point of contact.",
    defaultOpen: true,
  },
  {
    q: "Can I pick only the services I need?",
    a: "Absolutely. Start with any service and add more as your needs evolve. The more services you bring under OneDesk, the more you benefit from bundled pricing.",
  },
  {
    q: "How long does it take to form my company?",
    a: "Once we have all the required information and documents, we submit your application through eROC and manage the process through to incorporation. Timelines may vary depending on approvals and document readiness.",
  },
  {
    q: "Who is behind each OneDesk service?",
    a: "Each service is delivered by experienced in-house specialists, with some bringing over 30 years of expertise to your business.",
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
