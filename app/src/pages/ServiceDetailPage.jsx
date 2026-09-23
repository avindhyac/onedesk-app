import { Link, useParams, Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import CharacterPair from "../components/CharacterPair";
import CtaBand from "../sections/CtaBand";
import { characters } from "../data/characters";
import { SERVICES, getServiceBySlug } from "../data/services";
import "./ServiceDetailPage.css";

const SECRETARIAL_INCORP_IMAGES = [
  new URL("../assets/services/Corporate/Asset 16@4x.webp", import.meta.url).href,
  new URL("../assets/services/Corporate/Asset 15@4x.webp", import.meta.url).href,
  new URL("../assets/services/Corporate/Asset 13@4x.webp", import.meta.url).href,
  new URL("../assets/services/Corporate/Asset 14@4x.webp", import.meta.url).href,
];

const SECRETARIAL_INCORP_STEPS = [
  {
    kicker: "Company name",
    title: "Choose with confidence",
    body: "You choose your preferred name. We check its availability and guide you on how to submit the name correctly to the Registrar of Companies (ROC), helping reduce the risk of rejection or resubmission. We then manage the name reservation process for you.",
    image: SECRETARIAL_INCORP_IMAGES[0],
  },
  {
    kicker: "Company structure",
    title: "Set up your company the right way",
    body: "We prepare the required incorporation documents and put the right ownership, directors, company secretary and share capital structure in place.",
    image: SECRETARIAL_INCORP_IMAGES[1],
  },
  {
    kicker: "Register with the Registrar of Companies",
    title: "Submit & incorporate",
    body: "We submit the incorporation documents to the Registrar of Companies and complete the required Beneficial Ownership filings and declarations.",
    image: SECRETARIAL_INCORP_IMAGES[2],
  },
  {
    kicker: "Ready",
    title: "Receive your legal documents",
    body: "Once the incorporation is approved, we finalise your corporate records and provide your completed incorporation documents.",
    image: SECRETARIAL_INCORP_IMAGES[3],
    ready: true,
  },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/services" replace />;

  const { key, title, tagline, icon, detail } = service;
  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <PageTransition>
      <Seo
        title={title}
        description={`${tagline} ${detail.intro}`}
        path={`/services/${slug}`}
      />

      <section className={`svcd-hero svcd-hero--${key}`}>
        <div
          className={`svcd-hero__blob svcd-hero__blob--${key}`}
          aria-hidden="true"
        />
        <div className="svcd-hero__inner">
          <Link to="/services" className="svcd-hero__back">
            <iconify-icon icon="lucide:arrow-left" />
            All services
          </Link>

          <div className="svcd-hero__grid">
            <div className="svcd-hero__copy">
              <Eyebrow tone="ember">
                <span className={`svcd-hero__icon svcd-hero__icon--${key}`}>
                  <iconify-icon icon={icon} />
                </span>
                {title}
              </Eyebrow>
              <h1 className={`svcd-hero__title svcd-hero__title--${key}`}>
                {tagline}
              </h1>
              <p className="svcd-hero__intro">{detail.intro}</p>
              <div className="svcd-hero__cta">
                <Button
                  variant="primary"
                  size="md"
                  iconRight="lucide:arrow-right"
                  as={Link}
                  to="/contact"
                >
                  Talk to {title}
                </Button>
              </div>
            </div>
            <div className="svcd-hero__art">
              <CharacterPair
                character={characters[service.char]}
                className="svcd-hero__char"
                imgClassName="svcd-hero__char-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className={`svcd-thesis svcd-thesis--${key}`}>
        <p className="svcd-thesis__text">{detail.approach}</p>
      </section>

      {key === "sec" && (
        <section className="secretarial-incorp" aria-labelledby="secretarial-incorp-title">
          <div className="secretarial-incorp__inner">
            <p className="secretarial-incorp__eyebrow">Company Incorporation</p>
            <h2 id="secretarial-incorp-title" className="secretarial-incorp__title">
              From name to a company
            </h2>
            <p className="secretarial-incorp__intro">
              Setting up and maintaining a company involves more than registration. From incorporation to statutory compliance to changes in ownership and corporate structure, OneDesk provides the support you need to keep your business properly structured and up to date.
            </p>

            <div className="secretarial-incorp__flow" aria-label="Company incorporation process">
              {["Select the name", "Submit for approval", "Apply for incorporation", "Register", "Ready"].map((item, index, arr) => (
                <span
                  key={item}
                  className={`secretarial-incorp__flow-item ${index === arr.length - 1 ? "secretarial-incorp__flow-item--ready" : ""}`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="secretarial-incorp__timeline">
              {SECRETARIAL_INCORP_STEPS.map((step, index) => {
                return (
                  <article
                    key={step.title}
                    className={`secretarial-incorp__step ${index % 2 === 1 ? "secretarial-incorp__step--left" : "secretarial-incorp__step--right"} ${step.ready ? "secretarial-incorp__step--ready" : ""}`}
                  >
                    <div className="secretarial-incorp__media">
                      <img src={step.image} alt="" loading="lazy" decoding="async" />
                    </div>
                    <div className="secretarial-incorp__marker" aria-hidden="true">
                      {index + 1}
                    </div>
                    <div className="secretarial-incorp__copy">
                      <p className="secretarial-incorp__step-kicker">{step.kicker}</p>
                      <h3 className="secretarial-incorp__step-title">{step.title}</h3>
                      <p className="secretarial-incorp__step-body">{step.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>

            <p className="secretarial-incorp__closing">
              From name to company<br />we handle the details in between
            </p>
          </div>
        </section>
      )}

      <div className="svcd-body">
        {detail.sections.map((sec, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={sec.heading}
              className={`svcd-section ${flip ? "svcd-section--tint" : ""} svcd-section--${key}`}
              style={{ "--svcd-i": i }}
            >
              <div className="svcd-section__inner">
                <div
                  className={`svcd-section__media ${flip ? "svcd-section__media--right" : ""} svcd-section__media--${key}`}
                >
                  {sec.image ? (
                    <img
                      src={sec.image}
                      alt={sec.heading}
                      className="svcd-section__media-img"
                      loading="lazy"
                    />
                  ) : (
                    <>
                      <span
                        className="svcd-section__media-icon"
                        aria-hidden="true"
                      >
                        <iconify-icon icon="lucide:image" />
                      </span>
                      <span className="svcd-section__media-caption">
                        Photo &mdash; {sec.heading}
                      </span>
                    </>
                  )}
                </div>
                <div
                  className={`svcd-section__content ${flip ? "svcd-section__content--left" : ""}`}
                >
                  <h2 className="svcd-section__heading">{sec.heading}</h2>
                  <p className="svcd-section__body">{sec.body}</p>
                  <ul className="svcd-section__chips">
                    {sec.points.map((p) => (
                      <li
                        key={p}
                        className={`svcd-section__chip svcd-section__chip--${key}`}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="svcd-others">
        <div className="svcd-others__inner">
          <p className="svcd-others__label">Handling something else too?</p>
          <div className="svcd-others__grid">
            {others.map((o) => (
              <Link
                key={o.slug}
                to={`/services/${o.slug}`}
                className={`svcd-others__tile svcd-others__tile--${o.key}`}
              >
                <span className="svcd-others__tile-icon" aria-hidden="true">
                  <iconify-icon icon={o.icon} />
                </span>
                <span className="svcd-others__tile-label">{o.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to hand off ${title.toLowerCase()}?`}
        subtitle="Bundle it with the other five and one team runs your whole back office."
        ctaLabel="See pricing"
        ctaTo="/pricing"
      />
    </PageTransition>
  );
}
