import { Link } from "react-router-dom";
import Button from "../components/Button";
import { logos } from "../data/logos";
import { SOCIAL, linkAttrs } from "../data/social";
import "./Footer.css";

const DOT_COLORS = ["sec", "acc", "leg", "tax", "hr", "mkt"];

const SERVICE_LINKS = [
  { to: "/services", label: "Legal" },
  { to: "/services", label: "Tax advisory" },
  { to: "/services", label: "Accounting" },
  { to: "/services", label: "HR & payroll" },
  { to: "/services", label: "Company secretarial" },
  { to: "/services", label: "Marketing" },
];

const COMPANY_LINKS = [
  { to: "/about",       label: "About us" },
  { to: "/pricing",     label: "Pricing" },
  { href: "/#solution", label: "How it works" },
  { to: "/marketplace", label: "Marketplace" },
  { href: "/#process",  label: "Process" },
  { to: "/contact",     label: "Contact" },
];

const SOCIALS = [
  {
    ...SOCIAL.whatsapp,
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.68)"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.524 5.845L0 24l6.338-1.499A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.641-.503-5.158-1.381l-.369-.22-3.766.89.924-3.662-.241-.378A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>,
  },
  {
    ...SOCIAL.instagram,
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.68)" strokeWidth="1.7"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.68)" stroke="none"/></svg>,
  },
  {
    ...SOCIAL.facebook,
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="rgba(255,255,255,0.68)"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    ...SOCIAL.email,
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.68)" strokeWidth="1.7"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 6.5l8.5 6 8.5-6"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div>
            <img src={logos.whiteTrim} alt="OneDesk" className="footer__logo" />
            <p className="footer__blurb">
              Everything your business needs, in one place — six pillars, one trusted partner.
            </p>
            <div className="footer__dots">
              {DOT_COLORS.map((c) => (
                <span key={c} className="footer__dot" style={{ background: `var(--c-${c}-m)` }} />
              ))}
            </div>
            <div className="footer__social">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer__social-link" {...linkAttrs(s)}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}><Link to={s.to}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  {l.to ? <Link to={l.to}>{l.label}</Link> : <a href={l.href}>{l.label}</a>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer__contact">
              <li><a href="mailto:hello@onedesk.one">hello@onedesk.one</a></li>
              <li>Colombo, Sri Lanka</li>
            </ul>
            <div className="footer__book">
              <Button variant="on-dark" size="sm" as={Link} to="/contact">Book a call</Button>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} OneDesk. All rights reserved.</p>
          <div className="footer__legal">
            <Link to="/privacy">Privacy</Link>
            <Link to="/terms">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
