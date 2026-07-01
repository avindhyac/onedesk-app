import SectionHeading from "../components/SectionHeading";
import FeatureItem from "../components/FeatureItem";
import "./HowItWorks.css";

const STEPS = [
  {
    icon: "lucide:clipboard-list",
    title: "1 · Tell us about your business",
    service: "sec",
    body: "A 10-minute onboarding. Pick the services you need; skip the ones you don't.",
  },
  {
    icon: "lucide:users-round",
    title: "2 · Meet your team",
    service: "acc",
    body: "We match you with a dedicated pod of experts across each function.",
  },
  {
    icon: "lucide:rocket",
    title: "3 · Get back to building",
    service: "mkt",
    body: "We handle the filings, books and admin. You get a single dashboard and one bill.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__inner">
        <SectionHeading
          eyebrow="How it works"
          eyebrowColor="var(--od-teal-700)"
          title="Up and running in a week."
          align="left"
        />
        <div className="how-it-works__steps">
          {STEPS.map((s) => (
            <FeatureItem key={s.title} icon={s.icon} title={s.title} service={s.service} layout="col">
              {s.body}
            </FeatureItem>
          ))}
        </div>
      </div>
    </section>
  );
}
