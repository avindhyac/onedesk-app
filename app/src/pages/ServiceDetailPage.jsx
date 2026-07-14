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
        <div className={`svcd-hero__blob svcd-hero__blob--${key}`} aria-hidden="true" />
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
              <h1 className={`svcd-hero__title svcd-hero__title--${key}`}>{tagline}</h1>
              <p className="svcd-hero__intro">{detail.intro}</p>
              <div className="svcd-hero__cta">
                <Button variant="primary" size="md" iconRight="lucide:arrow-right" as={Link} to="/contact">
                  Talk to {title}
                </Button>
              </div>
            </div>
            <div className="svcd-hero__art">
              <CharacterPair character={characters[service.char]} className="svcd-hero__char" imgClassName="svcd-hero__char-img" />
            </div>
          </div>
        </div>
      </section>

      <section className={`svcd-thesis svcd-thesis--${key}`}>
        <p className="svcd-thesis__text">{detail.approach}</p>
      </section>

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
                <div className={`svcd-section__media ${flip ? "svcd-section__media--right" : ""} svcd-section__media--${key}`}>
                  <span className="svcd-section__media-icon" aria-hidden="true">
                    <iconify-icon icon="lucide:image" />
                  </span>
                  <span className="svcd-section__media-caption">Photo &mdash; {sec.heading}</span>
                </div>
                <div className={`svcd-section__content ${flip ? "svcd-section__content--left" : ""}`}>
                  <h2 className="svcd-section__heading">{sec.heading}</h2>
                  <p className="svcd-section__body">{sec.body}</p>
                  <ul className="svcd-section__chips">
                    {sec.points.map((p) => (
                      <li key={p} className={`svcd-section__chip svcd-section__chip--${key}`}>
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
              <Link key={o.slug} to={`/services/${o.slug}`} className={`svcd-others__tile svcd-others__tile--${o.key}`}>
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
