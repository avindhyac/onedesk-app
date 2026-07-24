import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";
import Button from "../components/Button";
import StatLedger from "../components/StatLedger";
import ServiceFanCards from "../components/ServiceFanCards";
import CtaBand from "../sections/CtaBand";
import { SERVICE_FAN_CHARACTERS } from "../data/serviceFanCharacters";
import { SERVICES, SERVICE_DETAIL_ENABLED } from "../data/services";
import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <PageTransition>
      <Seo
        title="Services"
        description="Six specialist teams, fully coordinated corporate secretarial, accounting, legal, tax, HR and marketing under one roof."
        path="/services"
      />

      <section className="svcp-hero">
        <div className="svcp-hero__inner">
          <SectionHeading
            eyebrow="Our services"
            title="Six specialist teams, fully coordinated."
            subtitle="Get the expertise of six departments, without the cost of building them."
          />
        </div>
      </section>

      <section className="svcp-proof">
        <div className="svcp-proof__inner">
          <StatLedger
            layout="row"
            variant="light"
            items={[
              { to: 6, label: "Specialist teams", accent: "sec" },
              { to: 50, label: "Industries served", accent: "acc" },
              { to: 1, label: "Monthly bill", accent: "tax" },
              {
                to: 100,
                suffix: "%",
                label: "In-house experts",
                accent: "mkt",
              },
            ]}
          />
        </div>
      </section>

      {SERVICES.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section
            key={s.key}
            className={`svcp-row ${flip ? "svcp-row--white" : "svcp-row--paper"}`}
          >
            <div className="svcp-row__inner">
              <div
                className={`svcp-row__art ${flip ? "svcp-row__art--right" : ""}`}
              >
                <ServiceFanCards
                  service={s.key}
                  title={s.title}
                  points={s.points}
                  character={SERVICE_FAN_CHARACTERS[s.key]}
                  supportingCards="services"
                  services={SERVICES}
                  characters={SERVICE_FAN_CHARACTERS}
                />
              </div>
              <div className="svcp-row__copy">
                <Tag service={s.key} />
                {SERVICE_DETAIL_ENABLED ? (
                  <Link
                    to={`/services/${s.slug}`}
                    className="svcp-row__tagline-link"
                  >
                    <h2 className={`svcp-row__tagline svcp-tagline--${s.key}`}>
                      {s.tagline}
                    </h2>
                  </Link>
                ) : (
                  <h2 className={`svcp-row__tagline svcp-tagline--${s.key}`}>
                    {s.tagline}
                  </h2>
                )}
                <p className="svcp-row__desc">{s.desc}</p>
                <div className="svcp-row__cta">
                  {SERVICE_DETAIL_ENABLED && (
                    <Button
                      variant="primary"
                      size="md"
                      iconRight="lucide:arrow-right"
                      as={Link}
                      to={`/services/${s.slug}`}
                    >
                      Learn more
                    </Button>
                  )}
                  <Button
                    variant={SERVICE_DETAIL_ENABLED ? "outline" : "primary"}
                    size="md"
                    as={Link}
                    to="/contact"
                  >
                    Talk to {s.title}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand
        title="Bundle them and save."
        subtitle="Most founders combine three or more services. The more you bundle, the more you save."
        ctaLabel="See pricing"
        ctaTo="/pricing"
      />
    </PageTransition>
  );
}
