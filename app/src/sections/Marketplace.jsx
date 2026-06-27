import { Link } from "react-router-dom";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import "./Marketplace.css";

const CARDS = [
  {
    border: "#74a9e8", iconBg: "rgba(116,169,232,0.18)", iconStroke: "#74a9e8",
    title: "Reach the right clients", text: "Access startups, SMEs, corporates and foreign investors.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="8" r="3" /><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 8h5M18.5 5.5v5" /></svg>,
  },
  {
    border: "#abc9bd", iconBg: "rgba(200,232,218,0.18)", iconStroke: "#abc9bd",
    title: "Plug into the network", text: "A broader service ecosystem with real momentum.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" /><path d="M15 13a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" /></svg>,
  },
  {
    border: "#dbb7f7", iconBg: "rgba(219,183,247,0.18)", iconStroke: "#dbb7f7",
    title: "Borrow our credibility", text: "Stronger trust through association with OneDesk.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" /></svg>,
  },
  {
    border: "#ffc269", iconBg: "rgba(255,194,105,0.18)", iconStroke: "#ffc269",
    title: "Cross-referrals", text: "Work flows across legal, tax, HR, accounting and marketing.",
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8" /></svg>,
  },
];

export default function Marketplace() {
  return (
    <section id="marketplace" className="marketplace">
      <div className="marketplace__inner">
        <div>
          <Eyebrow tone="on-dark">OneDesk Marketplace</Eyebrow>
          <h2 className="marketplace__title">
            A broader ecosystem your business can plug into<span className="dot">.</span>
          </h2>
          <p className="marketplace__lede">
            Beyond core services, the OneDesk Marketplace connects vetted partners with the businesses that
            need them — and gives every member access to a wider network of opportunity.
          </p>
          <div className="marketplace__ctas">
            <Button variant="primary" size="lg" dot as={Link} to="/contact">Become a partner</Button>
            <Button variant="on-dark" size="lg" as={Link} to="/marketplace">Explore partners</Button>
          </div>
        </div>
        <div className="marketplace__grid">
          {CARDS.map((c) => (
            <div key={c.title} className="marketplace__card">
              <span className="marketplace__icon" style={{ background: c.iconBg, color: c.iconStroke, stroke: c.iconStroke }}>{c.icon}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
              <Link to="/contact" className="marketplace__link" style={{ color: c.border }}>
                Learn more <span aria-hidden="true">&rsaquo;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
