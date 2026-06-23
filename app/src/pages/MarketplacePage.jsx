import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import "./MarketplacePage.css";

const FEATURE_CARDS = [
  {
    border: "#74a9e8", iconBg: "rgba(116,169,232,0.18)", iconStroke: "#74a9e8",
    title: "Reach the right clients",
    text: "Access startups, SMEs, corporates and foreign investors looking for your services.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 8h5M18.5 5.5v5" /></svg>,
  },
  {
    border: "#abc9bd", iconBg: "rgba(200,232,218,0.18)", iconStroke: "#abc9bd",
    title: "Plug into the network",
    text: "A broader service ecosystem with real momentum and active referral flows.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" /><path d="M15 13a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" /></svg>,
  },
  {
    border: "#dbb7f7", iconBg: "rgba(219,183,247,0.18)", iconStroke: "#dbb7f7",
    title: "Borrow our credibility",
    text: "Stronger trust through association with the OneDesk brand and vetting process.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    border: "#ffc269", iconBg: "rgba(255,194,105,0.18)", iconStroke: "#ffc269",
    title: "Cross-referrals",
    text: "Work flows across legal, tax, HR, accounting and marketing — all within the OneDesk network.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>,
  },
];

const JOIN_STEPS = [
  {
    num: "01", color: "#74a9e8",
    title: "Apply as a partner",
    text: "Tell us about your business, what you offer, and the clients you serve best.",
  },
  {
    num: "02", color: "#abc9bd",
    title: "Get vetted",
    text: "We review your services, credentials and track record to ensure quality across the network.",
  },
  {
    num: "03", color: "#dbb7f7",
    title: "Get connected",
    text: "Start receiving qualified referrals from OneDesk clients — matched to your expertise.",
  },
];

const PARTNER_TYPES = [
  {
    border: "#74a9e8",
    title: "Legal & Professional Services",
    text: "Solicitors, barristers, notaries, legal consultants and regulatory advisory firms.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
  },
  {
    border: "#ffc269",
    title: "Financial & Accounting Firms",
    text: "Auditors, management accountants, CFOs-for-hire and financial advisory practices.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  },
  {
    border: "#dbb7f7",
    title: "Technology & SaaS Providers",
    text: "Software platforms, fintech tools, HR systems and productivity solutions for businesses.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 20h20" /></svg>,
  },
  {
    border: "#abc9bd",
    title: "Marketing & Creative Agencies",
    text: "Digital agencies, branding studios, PR firms and content creators serving business clients.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" /></svg>,
  },
];

export default function MarketplacePage() {
  return (
    <div className="mkt-page">

      {/* Hero */}
      <section className="mkt-hero">
        <div className="mkt-hero__glow" />
        <div className="mkt-hero__inner">
          <div className="mkt-hero__copy">
            <Eyebrow tone="on-dark">OneDesk Marketplace</Eyebrow>
            <h1 className="mkt-hero__title">
              A broader ecosystem your business can plug into<span className="mkt-dot">.</span>
            </h1>
            <p className="mkt-hero__lede">
              Beyond core services, the OneDesk Marketplace connects vetted partners with the businesses that
              need them — and gives every member access to a wider network of opportunity.
            </p>
            <div className="mkt-hero__ctas">
              <Button variant="primary" size="lg" dot as={Link} to="/contact">Become a partner</Button>
              <Button variant="on-dark" size="lg" as={Link} to="/contact">Explore partners</Button>
            </div>
          </div>
          <div className="mkt-hero__grid">
            {FEATURE_CARDS.map((c) => (
              <div key={c.title} className="mkt-card">
                <span className="mkt-card__icon" style={{ background: c.iconBg, color: c.iconStroke }}>{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <a href="#mkt-join" className="mkt-card__link" style={{ color: c.border }}>
                  Learn more <span aria-hidden="true">&rsaquo;</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section id="mkt-join" className="mkt-join">
        <div className="mkt-join__inner">
          <div className="mkt-join__head">
            <Eyebrow tone="on-dark">Become a partner</Eyebrow>
            <h2 className="mkt-join__title">Three steps to the network<span className="mkt-dot">.</span></h2>
            <p className="mkt-join__lede">Joining is straightforward. We vet every partner to keep quality high — so your referrals arrive pre-qualified.</p>
          </div>
          <div className="mkt-join__steps">
            {JOIN_STEPS.map((s) => (
              <div key={s.num} className="mkt-step">
                <div className="mkt-step__num" style={{ color: s.color, borderColor: s.color }}>{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="mkt-types">
        <div className="mkt-types__inner">
          <div className="mkt-types__head">
            <Eyebrow tone="on-dark">Who can join</Eyebrow>
            <h2 className="mkt-types__title">Built for service businesses of every kind<span className="mkt-dot">.</span></h2>
          </div>
          <div className="mkt-types__grid">
            {PARTNER_TYPES.map((t) => (
              <div key={t.title} className="mkt-type-card" style={{ "--type-border": t.border }}>
                <span className="mkt-type-card__icon" style={{ color: t.border }}>{t.icon}</span>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-cta">
        <div className="mkt-cta__inner">
          <div className="mkt-cta__glow" />
          <div className="mkt-cta__content">
            <Eyebrow tone="on-dark">Ready to plug in?</Eyebrow>
            <h2>Join a network built on credibility and cross-referrals<span className="mkt-dot">.</span></h2>
            <p>Apply to become a OneDesk Marketplace partner — or explore the partners already in the network.</p>
            <div className="mkt-cta__buttons">
              <Button variant="primary" size="lg" dot as={Link} to="/contact">Apply to join</Button>
              <Button variant="on-dark" size="lg" as={Link} to="/contact">Talk to us</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
