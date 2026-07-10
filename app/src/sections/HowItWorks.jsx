import SectionHeading from "../components/SectionHeading";
import step1Img from "../assets/char/Home/OD-Web-23.webp";
import step2Img from "../assets/char/Home/OD-Web-24.webp";
import step3Img from "../assets/char/Home/OD-Web-25.webp";
import "./HowItWorks.css";

const STEPS = [
  {
    step: "01",
    titleLines: ["Tell us about", "your business."],
    body: "A 10-minute onboarding. Pick the services you need; skip the ones you don't.",
    image: step1Img,
  },
  {
    step: "02",
    titleLines: ["Meet", "your team."],
    body: "We match you with a dedicated pod of experts across each function.",
    image: step2Img,
  },
  {
    step: "03",
    titleLines: ["Get back", "to building."],
    body: "We handle the filings, books and admin. You get a single dashboard and one bill.",
    image: step3Img,
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
              <img className="how-it-works__img" src={s.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
