import SectionHeading from "../components/SectionHeading";
import "./HowItWorks.css";

const STEPS = [
  {
    step: "1",
    titleLines: ["Incorporate your", "company."],
    body: "Name approval, incorporation documents and your certificate, handled end to end. Already incorporated? We take over your existing file instead.",
  },
  {
    step: "2",
    titleLines: ["Add the services", "you need."],
    body: "Start with one team, or all five. Tax, Books, Payroll and Legal switch on when you need them, at the same desk.",
  },
  {
    step: "3",
    titleLines: ["Focus on", "building yours."],
    body: "We track the deadlines and file on time. You get one point of contact and a monthly update, not a chase.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="how-it-works__inner">
        <SectionHeading
          eyebrow="How it works"
          eyebrowColor="var(--od-orange)"
          title="Up and running in a week."
          align="center"
        />
        <div className="how-it-works__steps">
          {STEPS.map((s) => (
            <div className="how-it-works__card" key={s.step}>
              <div className="how-it-works__content">
                <p className="how-it-works__step">Step {s.step}</p>
                <h3 className="how-it-works__title">
                  {s.titleLines[0]}
                  <br />
                  {s.titleLines[1]}
                </h3>
                <p className="how-it-works__body">{s.body}</p>
              </div>
              <div className="how-it-works__number" aria-hidden="true">
                {s.step}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
