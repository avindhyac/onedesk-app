import { useState } from "react";
import Button from "../components/Button";
import Badge from "../components/Badge";
import SectionHeading from "../components/SectionHeading";
import Tag from "../components/Tag";
import FeatureItem from "../components/FeatureItem";
import StatLedger from "../components/StatLedger";
import EnquiryModal from "../components/EnquiryModal";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import "./MarketplacePage.css";

const HERO_STATS = [
  { to: 600, suffix: "+", label: "Vetted firms", accent: "ember" },
  { value: "12k", label: "Intros made", accent: "teal" },
  { to: 40, label: "Industries", accent: "sec" },
  { value: "4.9", label: "Avg. rating", accent: "mkt" },
];

const HOW_STEPS = [
  {
    icon: "lucide:search",
    title: "1 · Browse the network",
    service: "sec",
    body: "Every firm is pre-screened by OneDesk - credentials, track record and capacity checked before it makes the list.",
  },
  {
    icon: "lucide:send",
    title: "2 · Send one enquiry",
    service: "acc",
    body: "Tell us what you need. No cold outreach and no sales gauntlet, just one short form to the OneDesk desk.",
  },
  {
    icon: "lucide:handshake",
    title: "3 · We make the intro",
    service: "mkt",
    body: "We connect you with the right specialist at a OneDesk member rate, and stay in the loop until you're set up.",
  },
];

const PARTNERS = [
  {
    name: "Meridian Books",
    service: "acc",
    loc: "Accounting · Colombo",
    rating: "4.9",
    tags: ["Bookkeeping", "CFO advisory"],
  },
  {
    name: "Brightline Legal",
    service: "leg",
    loc: "Legal · Kandy",
    rating: "5.0",
    tags: ["Contracts", "IP & trademark"],
  },
  {
    name: "Summit Tax Group",
    service: "tax",
    loc: "Tax · Gampaha",
    rating: "4.8",
    tags: ["R&D credits", "Multi-region"],
  },
  {
    name: "Anchor People Co.",
    service: "hr",
    loc: "HR · Remote",
    rating: "4.9",
    tags: ["Payroll", "Benefits"],
  },
  {
    name: "Northstar Studio",
    service: "mkt",
    loc: "Marketing · Colombo",
    rating: "4.7",
    tags: ["Brand", "Performance"],
  },
  {
    name: "Capitol Compliance",
    service: "sec",
    loc: "Secretarial · Colombo",
    rating: "5.0",
    tags: ["Entity ops", "Filings"],
  },
];

function initials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function MarketplacePage() {
  const [enquiry, setEnquiry] = useState({ open: false, firm: null, key: 0 });
  const openEnquiry = (firm) =>
    setEnquiry((e) => ({ open: true, firm, key: e.key + 1 }));
  const closeEnquiry = () => setEnquiry((e) => ({ ...e, open: false }));

  return (
    <PageTransition>
      <Seo
        title="Marketplace"
        description="Hand-picked specialist firms available to OneDesk clients at member rates."
        path="/marketplace"
      />

      {/* Hero — dark sec background */}
      <section className="mkt-hero">
        <div className="mkt-hero__inner">
          <div className="mkt-hero__copy">
            <Badge tone="teal" icon="lucide:sparkles">
              Curated specialist network
            </Badge>
            <h1 className="mkt-hero__title">
              Specialists,{" "}
              <span className="mkt-hero__accent">at member rates.</span>
            </h1>
            <p className="mkt-hero__lede">
              A hand-picked network of vetted accounting, legal, tax, HR,
              marketing and secretarial firms available to OneDesk clients at
              preferred rates. Tell us what you need and we'll make the intro.
            </p>
            <div className="mkt-hero__ctas">
              <Button
                variant="primary"
                size="lg"
                iconRight="lucide:arrow-down"
                as="a"
                href="#network"
              >
                Explore the network
              </Button>
              <Button variant="on-dark" size="lg" as="a" href="#how">
                How it works
              </Button>
            </div>
          </div>
          <StatLedger
            className="mkt-hero__ledger"
            layout="grid"
            variant="dark"
            items={HERO_STATS}
          />
        </div>
      </section>

      {/* How it works */}
      <section className="mkt-how" id="how">
        <div className="mkt-how__inner">
          <SectionHeading
            eyebrow="How it works"
            title="Vetted specialists, without the vetting."
            eyebrowColor="var(--od-teal-300)"
          />
          <div className="mkt-how__steps">
            {HOW_STEPS.map((s) => (
              <FeatureItem
                key={s.title}
                icon={s.icon}
                title={s.title}
                service={s.service}
                layout="col"
              >
                {s.body}
              </FeatureItem>
            ))}
          </div>
        </div>
      </section>

      {/* Directory */}
      <section className="mkt-dir" id="network">
        <div className="mkt-dir__inner">
          <div className="mkt-dir__head">
            <SectionHeading
              eyebrow="The network"
              title="Specialists you can bring on today"
              align="left"
              eyebrowColor="var(--od-teal-300)"
            />
            <div className="mkt-dir__filters">
              <Tag service="acc" />
              <Tag service="leg" />
              <Tag service="tax" />
              <Tag service="hr" />
            </div>
          </div>
          <div className="mkt-dir__grid">
            {PARTNERS.map((p) => (
              <article
                key={p.name}
                className={`mkt-partner od-partner--${p.service}`}
              >
                <span className="mkt-partner__rule" aria-hidden="true" />
                <div className="mkt-partner__head">
                  <span
                    className={`mkt-partner__avatar mkt-partner-av--${p.service}`}
                  >
                    {initials(p.name)}
                  </span>
                  <span className="mkt-partner__rating">
                    <iconify-icon
                      icon="lucide:star"
                      className="mkt-partner__star"
                    />
                    {p.rating}
                  </span>
                </div>
                <h3 className="mkt-partner__name">{p.name}</h3>
                <div className="mkt-partner__loc">
                  <iconify-icon
                    icon="lucide:map-pin"
                    className="mkt-partner__pin"
                  />
                  {p.loc}
                </div>
                <div className="mkt-partner__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="mkt-partner__tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mkt-partner__footer">
                  <span className="mkt-partner__rate">
                    <iconify-icon icon="lucide:badge-percent" />
                    OneDesk member rate
                  </span>
                  <button
                    type="button"
                    className="mkt-partner__btn"
                    onClick={() => openEnquiry(p)}
                  >
                    Enquire
                    <iconify-icon
                      icon="lucide:arrow-right"
                      className="mkt-partner__btn-arrow"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mkt-cta">
        <div className="mkt-cta__inner">
          <div>
            <h2 className="mkt-cta__title">Not sure who you need?</h2>
            <p className="mkt-cta__sub">
              Tell us what you're trying to get done and we'll match you with
              the right specialist at a OneDesk member rate.
            </p>
          </div>
          <Button
            variant="dark"
            size="lg"
            iconRight="lucide:arrow-right"
            onClick={() => openEnquiry(null)}
          >
            Talk to OneDesk
          </Button>
        </div>
      </section>

      <EnquiryModal
        key={enquiry.key}
        firm={enquiry.firm}
        open={enquiry.open}
        onClose={closeEnquiry}
      />
    </PageTransition>
  );
}
