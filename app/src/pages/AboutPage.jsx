import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import PageHero from "../components/PageHero";
import FinalCta from "../sections/FinalCta";
import "./AboutPage.css";

const VALUES = [
  {
    color: "sec", title: "Integrity",
    text: "We do what we say, every time. Our clients build on us because we don't cut corners.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#1d2d44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    color: "acc", title: "Precision",
    text: "Every detail in your compliance calendar, filing, or contract matters — and we treat it that way.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#687e74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>,
  },
  {
    color: "leg", title: "Protection",
    text: "We spot the issues before they become problems — keeping you covered before the call comes.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#4b3862" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>,
  },
  {
    color: "tax", title: "Efficiency",
    text: "One conversation, every function. Less friction means more time to focus on what you're building.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c46a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M21 7v5h-5" /></svg>,
  },
  {
    color: "hr", title: "Partnership",
    text: "We grow alongside you. Your milestones are our milestones — your success is what we're built for.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#d96b5e" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="6" cy="6" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="12" cy="18" r="2.4" /><path d="M7.6 7.6L11 16M16.4 7.6L13 16M8 6h8" /></svg>,
  },
  {
    color: "mkt", title: "Clarity",
    text: "We explain complex things simply. No jargon, no surprises — just clear advice you can act on.",
    icon: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#c9982a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
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
    <div>
      <PageHero
        eyebrow="About OneDesk"
        title="Built to make business simpler for founders"
        subtitle="We started OneDesk because great businesses shouldn't be slowed down by the complexity of staying compliant, structured and protected."
      />

      <section className="about-mv">
        <div className="about-mv__inner">
          <div className="about-mv__card about-mv__card--mission">
            <Eyebrow tone="ember">Mission</Eyebrow>
            <h2>To make professional services accessible, coordinated and genuinely useful.</h2>
            <p>Great businesses shouldn't need to juggle six different firms. OneDesk gives every founder and business owner access to the full suite of professional services they need — through one trusted, structured partner.</p>
          </div>
          <div className="about-mv__card about-mv__card--vision">
            <Eyebrow tone="harbor">Vision</Eyebrow>
            <h2>A business landscape where structure is a strength, not a burden.</h2>
            <p>We believe that when legal, financial and operational foundations are solid, businesses don't just survive — they compound. Our vision is a Sri Lanka where every business owner has the support to focus on building what matters.</p>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__aside">
            <Eyebrow>Our story</Eyebrow>
            <div className="about-story__accent" />
          </div>
          <div className="about-story__content">
            <h2>One point of contact. Every function<span className="dot">.</span></h2>
            <p>OneDesk was founded on a simple observation: businesses in Sri Lanka were spending more time coordinating between advisors than actually running their operations. Legal, tax, accounting, HR, secretarial and marketing — each function managed by a different firm, on a different invoice, with a different point of contact.</p>
            <p>We built OneDesk to change that. A single, integrated team that understands your whole business — not just one part of it. One relationship that moves every function forward, together.</p>
            <p>Today, OneDesk serves startups, SMEs, corporates and foreign investors building in Sri Lanka. And through the OneDesk Marketplace, we connect vetted partners with the businesses that need them — expanding the ecosystem for everyone.</p>
            <div className="about-story__ctas">
              <Button variant="primary" size="lg" dot as={Link} to="/contact">Work with us</Button>
              <Button variant="outline" size="lg" as={Link} to="/services">Our services</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-values__inner">
          <div className="about-values__head">
            <Eyebrow>How we work</Eyebrow>
            <h2 className="about-values__title">The principles behind every decision<span className="dot">.</span></h2>
          </div>
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__card" style={{ background: `var(--c-${v.color}-l)` }}>
                <span className="about-values__icon">{v.icon}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team__inner">
          <div className="about-team__head">
            <Eyebrow tone="harbor">The team</Eyebrow>
            <h2 className="about-team__title">Specialists who know your business<span className="dot">.</span></h2>
            <p className="about-team__lede">Every function at OneDesk is led by a domain specialist. You get expert-level advice across the board — through one coordinated relationship.</p>
          </div>
          <div className="about-team__grid">
            {TEAM.map((m, i) => (
              <div key={i} className="about-team__card">
                <div className="about-team__avatar" style={{ background: `var(--c-${m.color}-l)`, color: `var(--c-${m.color})` }}>
                  {m.initials}
                </div>
                <div className="about-team__info">
                  <span className="about-team__name">Team Member</span>
                  <span className="about-team__role">{m.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta title="Ready to simplify your business operations?" />
    </div>
  );
}
