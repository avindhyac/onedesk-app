import { Link } from "react-router-dom";
import Image from "./Image";
import ServiceTimeline from "./ServiceTimeline";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import Eyebrow from "../components/Eyebrow";
import Button from "../components/Button";
import CharacterPair from "../components/CharacterPair";
import CtaBand from "../sections/CtaBand";
import { characters } from "../data/characters";
import { SERVICES } from "../data/services";
import "./ServiceDetailTemplate.css";

// Shared layout: service-specific copy, artwork and optional blocks live in data/services.js.
export default function ServiceDetailTemplate({ service }) {
  const { key, slug, title, tagline, icon, detail } = service;
  const headline = detail.headline ?? tagline;
  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <PageTransition>
      <div style={{
        "--svcd-color": `var(--od-${key}-text)`,
        "--svcd-tint": `var(--od-${key}-tint)`,
      }}>
      <Seo
        title={title}
        description={`${headline} ${detail.intro}`}
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
                {headline}
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
                sizes="(max-width: 860px) 180px, 280px"
                loading="eager"
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

      <ServiceTimeline timeline={detail.timeline} />

      <div className="svcd-body">
        {detail.overviewTitle && detail.overviewBody && (
          <section className={`svcd-overview svcd-overview--${key}`}>
            <div className="svcd-overview__inner">
              <h2 className="svcd-overview__title">{detail.overviewTitle}</h2>
              <p className="svcd-overview__body">{detail.overviewBody}</p>
            </div>
          </section>
        )}

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
                    <Image
                      sizes="(max-width: 860px) calc(100vw - 40px), 460px"
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

      {detail.whyTitle && (
        <section className={`svcd-why svcd-why--${key}`}>
          <div className="svcd-why__inner">
            <div className="svcd-why__intro">
              {detail.whyEyebrow && <p className="svcd-why__eyebrow">{detail.whyEyebrow}</p>}
              <h2 className="svcd-why__title">{detail.whyTitle}</h2>
              <p className="svcd-why__subtitle">{detail.whySubtitle}</p>
              <p className="svcd-why__body">{detail.whyBody}</p>
            </div>

            <div className="svcd-why__grid">
              {detail.whyItems.map((item) => (
                <article key={item.title} className="svcd-why__card">
                  <span className="svcd-why__icon" aria-hidden="true">
                    <iconify-icon icon="lucide:check" />
                  </span>
                  <h3 className="svcd-why__card-title">{item.title}</h3>
                  <p className="svcd-why__card-body">{item.body}</p>
                </article>
              ))}
            </div>

            {detail.whyClosing && <p className="svcd-why__closing">{detail.whyClosing}</p>}
            {detail.whyDisclaimer && <p className="svcd-why__disclaimer"><em>{detail.whyDisclaimer}</em></p>}
          </div>
        </section>
      )}

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
        title={detail.cta?.title ?? `Ready to hand off ${title.toLowerCase()}?`}
        subtitle={detail.cta?.subtitle ?? "Bundle it with the other five and one team runs your whole back office."}
        ctaLabel={detail.cta?.label ?? "Talk to us"}
        ctaTo={detail.cta?.to ?? "/contact"}
      />
      </div>
    </PageTransition>
  );
}
