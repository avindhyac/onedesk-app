import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import SectionHeading from "../components/SectionHeading";
//
import Eyebrow from "../components/Eyebrow";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import CtaBand from "../sections/CtaBand";
import useAboutHeroDeskCycle from "../hooks/useAboutHeroDeskCycle";

import aboutAdvisor05 from "../assets/char/About/OD_Web_AboutUs-05.webp";
import aboutAdvisor06 from "../assets/char/About/OD_Web_AboutUs-06.webp";
import aboutAdvisor07 from "../assets/char/About/OD_Web_AboutUs-07.webp";
import aboutAdvisor08 from "../assets/char/About/OD_Web_AboutUs-08.webp";
import aboutAdvisor09 from "../assets/char/About/OD_Web_AboutUs-09.webp";
import aboutAdvisor10 from "../assets/char/About/OD_Web_AboutUs-10.webp";
import aboutClient from "../assets/char/About/OD_Web_AboutUs-client.webp";
import aboutDesk from "../assets/char/About/OD_Web_AboutUs-desk.webp";
import illoTeam from "../assets/char/About/OD_Web_AboutUs-11.webp";
import illoPeople from "../assets/char/About/OD_Web_AboutUs-12.webp";
import illoClarity from "../assets/char/About/OD_Web_AboutUs-13.webp";
import illoTrust from "../assets/char/About/OD_Web_AboutUs-14.webp";
import illoDesk from "../assets/char/About/OD_Web_AboutUs-15.webp";

import "./AboutPage.css";

const ABOUT_HERO_ADVISORS = [
  { key: "advisor-05", label: "Legal", src: aboutAdvisor05 },
  { key: "advisor-06", label: "Tax", src: aboutAdvisor06 },
  { key: "advisor-07", label: "Secretarial", src: aboutAdvisor07 },
  { key: "advisor-08", label: "Marketing", src: aboutAdvisor08 },
  { key: "advisor-09", label: "HR", src: aboutAdvisor09 },
  { key: "advisor-10", label: "Accounting", src: aboutAdvisor10 },
];

const VALUES = [
  {
    img: illoPeople,
    title: "People over paperwork",
    body: "Behind every filing is a founder with better things to do. We exist to give them their time back.",
  },
  {
    img: illoClarity,
    title: "Radical clarity",
    body: "No jargon, no hidden fees, no surprise invoices. You always know what we are doing and what it costs.",
  },
  {
    img: illoTrust,
    title: "Earned trust",
    body: "We handle sensitive things — money, contracts, people. We treat that responsibility like it is our own.",
  },
  {
    img: illoDesk,
    title: "One desk, forever",
    body: "As you grow, the desk grows with you. New services slot in without new logins or new headaches.",
  },
];

const TEAM = [
  { name: "Co-founder & CEO", service: "sec" },
  { name: "Co-founder & COO", service: "acc" },
  { name: "Head of Legal", service: "leg" },
  { name: "Head of Tax", service: "tax" },
  { name: "Head of People", service: "hr" },
  { name: "Head of Growth", service: "mkt" },
];

export default function AboutPage() {
  const heroSceneRef = useRef(null);
  const advisorCycle = useAboutHeroDeskCycle(heroSceneRef);

  return (
    <PageTransition>
      <Seo
        title="About us"
        description="We started OneDesk because running a company shouldn't mean running six separate advisory relationships."
        path="/about"
      />

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <div className="about-hero__content">
            <Eyebrow tone="ember">About us</Eyebrow>
            <h1 className="about-hero__title">
              We started OneDesk because running a company shouldn't mean
              running six.
            </h1>
            <p className="about-hero__sub">
              Founders were stitching together an accountant here, a lawyer
              there, a payroll tool somewhere else. We brought it all onto one
              desk.
            </p>
            <div className="about-hero__ctas">
              <Button variant="primary" size="lg" as={Link} to="/">
                Get Started
              </Button>
              <Button variant="outline" size="lg" as={Link} to="/pricing">
                See Pricing
              </Button>
            </div>
          </div>
          <div
            className="about-hero__desk-scene"
            ref={heroSceneRef}
            aria-hidden="true"
          >
            <div className="about-hero__desk-glow" />
            <img
              className="about-hero__client"
              src={aboutClient}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
            <div className="about-hero__advisor-seat">
              {ABOUT_HERO_ADVISORS.map((advisor, index) => (
                <img
                  key={advisor.key}
                  ref={advisorCycle.registerAdvisor(index)}
                  className="about-hero__advisor"
                  src={advisor.src}
                  alt=""
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                />
              ))}
            </div>
            <div className="about-hero__service-label" aria-hidden="true">
              {ABOUT_HERO_ADVISORS.map((advisor, index) => (
                <span
                  key={advisor.key}
                  ref={advisorCycle.registerLabel(index)}
                  className="about-hero__service-label-text"
                >
                  {advisor.label}
                </span>
              ))}
            </div>
            <img
              className="about-hero__desk"
              src={aboutDesk}
              alt=""
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__copy">
            <h2 className="about-story__heading">
              From paperwork to peace of mind.
            </h2>
            <p className="about-story__text">
              Our founders were building their third startup when they found
              themselves spending more time chasing accountants, lawyers, HR
              teams and other essential service providers than focusing on the
              business itself.
            </p>
            <p className="about-story__text">
              So they built the solution they wished they had: one trusted
              partner bringing every essential business service together, giving
              founders more time to focus on operations, growth and what they do
              best.
            </p>
            <p className="about-story__text">
              Today, OneDesk helps businesses across Sri Lanka access the
              expertise they need, without the complexity of managing multiple
              providers.
            </p>
            <div className="about-story__ctas">
              <Button variant="outline" size="md" as={Link} to="/marketplace">
                Partner with us
              </Button>
            </div>
          </div>
          <div className="about-story__illo" aria-hidden="true">
            <img src={illoTeam} alt="" loading="lazy" decoding="async" />
          </div>
        </div>
        {/* <div className="about-story__stats-row">
          <StatLedger
            layout="row"
            variant="light"
            className="about-story__ledger"
            items={[
              { value: "2021", label: "Founded", accent: "ember" },
              {
                to: 8000,
                suffix: "+",
                label: "Companies served",
                accent: "ember",
              },
              {
                to: 120,
                suffix: "+",
                label: "Specialists on staff",
                accent: "ember",
              },
              { to: 40, label: "Industries served", accent: "ember" },
            ]}
          />
        </div> */}
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__inner">
          <SectionHeading eyebrow="What we believe" title="Our values" />
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__card">
                <img
                  className="about-values__card-img"
                  src={v.img}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <div className="about-values__card-body">
                  <h3 className="about-values__card-title">{v.title}</h3>
                  <p className="about-values__card-text">{v.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="about-team__inner">
          <SectionHeading eyebrow="The people" title="Leadership" />
          <div className="about-team__grid">
            {TEAM.map((m) => (
              <div key={m.name} className="about-team__card">
                <Avatar name={m.name} service={m.service} size={54} />
                <div className="about-team__meta">
                  <div className="about-team__role-title">{m.name}</div>
                  <div className="about-team__member">Team Member</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to sit back and focus on operations?"
        subtitle="Let OneDesk take care of everything else."
      />
    </PageTransition>
  );
}
