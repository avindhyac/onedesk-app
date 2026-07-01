import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";
import FeatureItem from "../components/FeatureItem";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import "./MarketplacePage.css";

const HERO_STATS = [
  ["lucide:badge-check", "600+",  "Vetted firms"],
  ["lucide:briefcase",   "12k",   "Jobs matched"],
  ["lucide:globe",       "40",    "States"],
  ["lucide:star",        "4.9",   "Avg. rating"],
];

const HOW_STEPS = [
  { icon: "lucide:file-check-2",  title: "1 · Apply & get vetted",   service: "sec", body: "Tell us about your firm and specialties. We verify credentials, reviews and capacity." },
  { icon: "lucide:git-merge",     title: "2 · Get matched",           service: "acc", body: "We route businesses to you based on service, location and workload — no cold outreach." },
  { icon: "lucide:line-chart",    title: "3 · Deliver in tandem",     service: "mkt", body: "Collaborate inside the OneDesk dashboard. We handle billing; you handle the craft." },
];

const PARTNERS = [
  { name: "Meridian Books",      service: "acc", loc: "Accounting · Colombo",    rating: "4.9", tags: ["Bookkeeping", "CFO advisory"] },
  { name: "Brightline Legal",    service: "leg", loc: "Legal · Kandy",           rating: "5.0", tags: ["Contracts", "IP & trademark"] },
  { name: "Summit Tax Group",    service: "tax", loc: "Tax · Gampaha",           rating: "4.8", tags: ["R&D credits", "Multi-state"] },
  { name: "Anchor People Co.",   service: "hr",  loc: "HR · Remote",             rating: "4.9", tags: ["Payroll", "Benefits"] },
  { name: "Northstar Studio",    service: "mkt", loc: "Marketing · Colombo",     rating: "4.7", tags: ["Brand", "Performance"] },
  { name: "Capitol Compliance",  service: "sec", loc: "Secretarial · Colombo",   rating: "5.0", tags: ["Entity ops", "Filings"] },
];

function initials(name) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function MarketplacePage() {
  return (
    <PageTransition>
      <Seo
        title="Marketplace"
        description="A B2B hub where vetted accounting, legal, tax, HR and marketing firms connect with OneDesk clients."
        path="/marketplace"
      />

      {/* Hero — dark sec background */}
      <section className="mkt-hero">
        <div className="mkt-hero__inner">
          <div className="mkt-hero__copy">
            <Badge tone="teal" icon="lucide:handshake">For partner firms</Badge>
            <h1 className="mkt-hero__title">
              The OneDesk <span className="mkt-hero__accent">Marketplace.</span>
            </h1>
            <p className="mkt-hero__lede">
              A B2B hub where vetted accounting, legal, tax, HR and marketing firms connect with OneDesk — and work in tandem to serve thousands of growing businesses.
            </p>
            <div className="mkt-hero__ctas">
              <Button variant="primary" size="lg" iconRight="lucide:arrow-right" as={Link} to="/contact">Become a partner</Button>
              <Button variant="on-dark" size="lg" as={Link} to="/contact">Explore partners</Button>
            </div>
          </div>
          <div className="mkt-hero__stats">
            {HERO_STATS.map(([icon, value, label]) => (
              <div key={label} className="mkt-hero__stat">
                <iconify-icon icon={icon} className="mkt-hero__stat-icon" />
                <div className="mkt-hero__stat-value">{value}</div>
                <div className="mkt-hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mkt-how">
        <div className="mkt-how__inner">
          <SectionHeading
            eyebrow="How partnering works"
            title="Grow your firm without growing your sales team."
          />
          <div className="mkt-how__steps">
            {HOW_STEPS.map((s) => (
              <FeatureItem key={s.title} icon={s.icon} title={s.title} service={s.service} layout="col">
                {s.body}
              </FeatureItem>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mkt-dir">
        <div className="mkt-dir__inner">
          <div className="mkt-dir__head">
            <SectionHeading
              eyebrow="Featured partners"
              title="Firms already on the desk"
              align="left"
            />
            <div className="mkt-dir__filters">
              <Tag service="acc" /><Tag service="leg" /><Tag service="tax" /><Tag service="hr" />
            </div>
          </div>
          <div className="mkt-dir__grid">
            {PARTNERS.map((p) => (
              <div key={p.name} className="mkt-partner">
                <div className="mkt-partner__head">
                  <span className={`mkt-partner__avatar mkt-partner-av--${p.service}`}>
                    {initials(p.name)}
                  </span>
                  <Badge tone="warning" icon="lucide:star">{p.rating}</Badge>
                </div>
                <div className={`mkt-partner__name`}>{p.name}</div>
                <div className="mkt-partner__loc">
                  <iconify-icon icon="lucide:map-pin" className="mkt-partner__pin" />{p.loc}
                </div>
                <div className="mkt-partner__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="mkt-partner__tag">{t}</span>
                  ))}
                </div>
                <Link to="/contact" className={`mkt-partner__btn mkt-partner-btn--${p.service}`}>
                  View profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-cta">
        <div className="mkt-cta__inner">
          <div>
            <h2 className="mkt-cta__title">List your firm on OneDesk.</h2>
            <p className="mkt-cta__sub">Join 600+ partners getting matched with ready-to-hire businesses every week.</p>
          </div>
          <Button variant="dark" size="lg" iconRight="lucide:arrow-right" as={Link} to="/contact">
            Apply to partner
          </Button>
        </div>
      </section>
    </PageTransition>
  );
}
