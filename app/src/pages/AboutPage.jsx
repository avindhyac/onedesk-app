import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../components/Button";
import CountUp from "../components/CountUp";
import Eyebrow from "../components/Eyebrow";
import PageTransition from "../components/PageTransition";
import RevealOnScroll from "../components/RevealOnScroll";
import FinalCta from "../sections/FinalCta";
import "./AboutPage.css";

const STATS = [
  { to: 200, suffix: "+", label: "Clients served" },
  { to: 6,   suffix: "",  label: "Service pillars" },
  { to: 10,  suffix: "+", label: "Industries covered" },
  { to: 1,   suffix: "",  label: "Integrated team" },
];

const VALUES = [
  {
    color: "sec", title: "Integrity",
    text: "We do what we say, every time. Our clients build on us because we don't cut corners.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    color: "acc", title: "Precision",
    text: "Every detail in your compliance calendar, filing, or contract matters — and we treat it that way.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
  {
    color: "leg", title: "Protection",
    text: "We spot the issues before they become problems — keeping you covered before the call comes.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    color: "tax", title: "Efficiency",
    text: "One conversation, every function. Less friction means more time to focus on what you're building.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>,
  },
  {
    color: "hr", title: "Partnership",
    text: "We grow alongside you. Your milestones are our milestones — your success is what we're built for.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="M7.6 7.6L11 16M16.4 7.6L13 16M8 6h8" /></svg>,
  },
  {
    color: "mkt", title: "Clarity",
    text: "We explain complex things simply. No jargon, no surprises — just clear advice you can act on.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
];

const TEAM = [
  { initials: "TM", role: "Co-founder & CEO", color: "sec" },
  { initials: "TM", role: "Head of Legal", color: "leg" },
  { initials: "TM", role: "Head of Tax & Accounting", color: "tax" },
  { initials: "TM", role: "Head of HR & Payroll", color: "hr" },
  { initials: "TM", role: "Head of Company Secretarial", color: "acc" },
  { initials: "TM", role: "Head of Marketing", color: "mkt" },
];

export default function AboutPage() {
  return (
    <PageTransition>

      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <RevealOnScroll>
            <Eyebrow>About OneDesk</Eyebrow>
            <h1 className="about-hero__title">
              One team.<br />Every function<span className="dot">.</span>
            </h1>
            <p className="about-hero__lede">
              We started OneDesk because great businesses shouldn't be slowed down by the complexity of staying compliant, structured and protected.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* Stats strip */}
      <section className="about-stats">
        <div className="about-stats__inner">
          {STATS.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.08} className="about-stat">
              <span className="about-stat__num">
                <CountUp to={s.to} suffix={s.suffix} />
              </span>
              <span className="about-stat__label">{s.label}</span>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      {/* Story + Belief */}
      <section className="about-story">
        <div className="about-story__inner">
          <RevealOnScroll className="about-story__left">
            <Eyebrow>Our story</Eyebrow>
            <h2 className="about-story__heading">
              One point of contact. Every function<span className="dot">.</span>
            </h2>
            <p className="about-story__text">
              OneDesk was founded on a simple observation: businesses in Sri Lanka were spending more time coordinating between advisors than actually running their operations. Legal, tax, accounting, HR, secretarial and marketing — each function managed by a different firm, on a different invoice, with a different point of contact.
            </p>
            <p className="about-story__text">
              We built OneDesk to change that. A single, integrated team that understands your whole business — not just one part of it. One relationship that moves every function forward, together.
            </p>
            <p className="about-story__text">
              Today, OneDesk serves startups, SMEs, corporates and foreign investors building in Sri Lanka. And through the OneDesk Marketplace, we connect vetted partners with the businesses that need them — expanding the ecosystem for everyone.
            </p>
            <div className="about-story__ctas">
              <Button variant="primary" size="lg" dot as={Link} to="/contact">Work with us</Button>
              <Button variant="outline" size="lg" as={Link} to="/pricing">See pricing</Button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.12} className="about-story__right">
            <div className="about-belief-stack">
              <motion.div
                className="about-belief-card about-belief-card--mission"
                whileHover={{ y: -4, boxShadow: "0 18px 48px rgba(238,118,50,0.10)" }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <span className="about-belief__pill about-belief__pill--mission">
                  <span className="about-belief__pill-dot" />
                  What we believe
                </span>
                <p className="about-belief-card__text">
                  To make professional services accessible, coordinated and genuinely useful. Great businesses shouldn't need to juggle six different firms to stay protected and compliant.
                </p>
              </motion.div>

              <motion.div
                className="about-belief-card about-belief-card--vision"
                whileHover={{ y: -4, boxShadow: "0 18px 48px rgba(111,156,169,0.12)" }}
                transition={{ type: "spring", stiffness: 380, damping: 28 }}
              >
                <span className="about-belief__pill about-belief__pill--vision">
                  <span className="about-belief__pill-dot" />
                  Where we're headed
                </span>
                <p className="about-belief-card__text">
                  A business landscape where structure is a strength, not a burden — where every founder has the infrastructure to focus on building what actually matters.
                </p>
              </motion.div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__inner">
          <RevealOnScroll>
            <div className="about-values__head">
              <Eyebrow>How we work</Eyebrow>
              <h2 className="about-values__title">The principles behind every decision<span className="dot">.</span></h2>
            </div>
          </RevealOnScroll>
          <div className="about-values__grid">
            {VALUES.map((v, i) => (
              <RevealOnScroll key={v.title} delay={i * 0.07}>
                <motion.div
                  className="about-values__card"
                  style={{
                    "--pillar": `var(--c-${v.color})`,
                    "--pillar-l": `var(--c-${v.color}-l)`,
                  }}
                  whileHover={{ y: -6, boxShadow: "0 18px 48px rgba(0,0,0,0.09)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                >
                  <span className="about-values__icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="about-team__inner">
          <RevealOnScroll>
            <div className="about-team__head">
              <Eyebrow tone="harbor">The team</Eyebrow>
              <h2 className="about-team__title">Specialists who know your business<span className="dot">.</span></h2>
              <p className="about-team__lede">Every function at OneDesk is led by a domain specialist. You get expert-level advice across the board — through one coordinated relationship.</p>
            </div>
          </RevealOnScroll>
          <div className="about-team__grid">
            {TEAM.map((m, i) => (
              <RevealOnScroll key={i} delay={i * 0.07}>
                <motion.div
                  className="about-team__card"
                  style={{
                    "--pillar": `var(--c-${m.color})`,
                    "--pillar-l": `var(--c-${m.color}-l)`,
                  }}
                  whileHover={{ y: -6, boxShadow: "0 24px 56px rgba(0,0,0,0.10)" }}
                  transition={{ type: "spring", stiffness: 340, damping: 26 }}
                >
                  <div className="about-team__photo">
                    <span className="about-team__monogram">{m.initials}</span>
                    <div className="about-team__photo-veil" />
                  </div>
                  <div className="about-team__info">
                    <span className="about-team__name">Team Member</span>
                    <span className="about-team__role">
                      <span className="about-team__role-dot" />
                      {m.role}
                    </span>
                  </div>
                </motion.div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Ready to simplify your business operations?" />
    </PageTransition>
  );
}
