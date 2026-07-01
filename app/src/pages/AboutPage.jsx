import { Link } from "react-router-dom";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import FeatureItem from "../components/FeatureItem";
import SectionHeading from "../components/SectionHeading";
import Stat from "../components/Stat";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import CtaBand from "../sections/CtaBand";
import "./AboutPage.css";

const VALUES = [
  { icon: "lucide:hand-heart",   title: "People over paperwork",  service: "hr",  body: "Behind every filing is a founder with better things to do. We exist to give them their time back." },
  { icon: "lucide:eye",          title: "Radical clarity",         service: "sec", body: "No jargon, no hidden fees, no surprise invoices. You always know what we are doing and what it costs." },
  { icon: "lucide:shield-check", title: "Earned trust",            service: "leg", body: "We handle sensitive things — money, contracts, people. We treat that responsibility like it is our own company." },
  { icon: "lucide:infinity",     title: "One desk, forever",       service: "acc", body: "As you grow, the desk grows with you. New services slot in without new logins or new headaches." },
];

const TEAM = [
  { name: "Co-founder & CEO",         service: "sec" },
  { name: "Co-founder & COO",         service: "acc" },
  { name: "Head of Legal",            service: "leg" },
  { name: "Head of Tax",              service: "tax" },
  { name: "Head of People",           service: "hr"  },
  { name: "Head of Growth",           service: "mkt" },
];

export default function AboutPage() {
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
          <SectionHeading
            eyebrow="About us"
            title="We started OneDesk because running a company shouldn't mean running six."
            subtitle="Founders were stitching together an accountant here, a lawyer there, a payroll tool somewhere else. We brought it all onto one desk."
          />
        </div>
      </section>

      {/* Story + Stats */}
      <section className="about-story">
        <div className="about-story__inner">
          <div className="about-story__copy">
            <h2 className="about-story__heading">From paperwork to peace of mind.</h2>
            <p className="about-story__text">
              Our founders were on their third startup and tired of the same problem: the back office was a patchwork of vendors, spreadsheets and missed deadlines. So they built the thing they wished existed — one team, one dashboard, one bill.
            </p>
            <p className="about-story__text">
              Today OneDesk supports companies across the country, handling the unglamorous work that keeps a business alive and compliant.
            </p>
            <div className="about-story__ctas">
              <Button variant="outline" size="md" iconRight="lucide:arrow-right" as={Link} to="/marketplace">
                Partner with us
              </Button>
            </div>
          </div>
          <div className="about-story__stats">
            <div className="about-story__stat-card about-story__stat-card--orange">
              <Stat value="2021" label="Founded" color="var(--od-orange)" />
            </div>
            <div className="about-story__stat-card about-story__stat-card--teal">
              <Stat to={8000} suffix="+" label="Companies served" color="var(--od-teal-600)" />
            </div>
            <div className="about-story__stat-card about-story__stat-card--acc">
              <Stat to={120} suffix="+" label="Specialists on staff" color="var(--od-acc)" />
            </div>
            <div className="about-story__stat-card about-story__stat-card--leg">
              <Stat to={40} label="States covered" color="var(--od-leg)" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="about-values__inner">
          <SectionHeading eyebrow="What we believe" title="Our values" />
          <div className="about-values__grid">
            {VALUES.map((v) => (
              <div key={v.title} className="about-values__card">
                <FeatureItem icon={v.icon} title={v.title} service={v.service}>
                  {v.body}
                </FeatureItem>
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
                <Avatar name={m.name} service={m.service} size={56} />
                <div>
                  <div className="about-team__name">Team Member</div>
                  <div className="about-team__role">{m.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to simplify your operations?"
        subtitle="Join founders who let OneDesk handle the back office."
      />
    </PageTransition>
  );
}
