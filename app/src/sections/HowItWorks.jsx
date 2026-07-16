import SectionHeading from "../components/SectionHeading";
import step1Img from "../assets/char/Home/OD-Web-23.webp";
import step2Img from "../assets/char/Home/OD-Web-24.webp";
import step3Img from "../assets/char/Home/OD-Web-25.webp";
import "./HowItWorks.css";

const STEPS = [
  {
    step: "01",
    titleLines: ["Tell us what", "you need."],
    body: "We learn about your business, priorities and the services you need today.",
    image: step1Img,
  },
  {
    step: "02",
    titleLines: ["Meet", "your specialists."],
    body: "We connect you with experienced in-house experts across the relevant service areas.",
    image: step2Img,
  },
  {
    step: "03",
    titleLines: ["Focus on", "your business."],
    body: "Your OneDesk team takes care of the rest, with clear communication and support as your needs grow.",
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
              <img
                className="how-it-works__img"
                src={s.image}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
