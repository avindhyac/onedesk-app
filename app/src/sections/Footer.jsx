import Button from "../components/Button";
import { logos } from "../data/logos";
import "./Footer.css";

const DOT_COLORS = ["sec", "acc", "leg", "tax", "hr", "mkt"];

const SERVICE_LINKS = ["Legal", "Tax advisory", "Accounting", "HR & payroll", "Company secretarial", "Marketing"];

const COMPANY_LINKS = [
  { href: "#", label: "About us" },
  { href: "#solution", label: "How it works" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
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
              <a href="#" aria-label="LinkedIn" className="footer__social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="rgba(255,255,255,0.68)">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.74 2.64 4.74 6.07V21H16.6v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85V21H8.93z" />
                </svg>
              </a>
              <a href="#" aria-label="Email" className="footer__social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.68)" strokeWidth="1.7">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3.5 6.5l8.5 6 8.5-6" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s}><a href="#services">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul className="footer__contact">
              <li>hello@onedesk.one</li>
              <li>Colombo, Sri Lanka</li>
            </ul>
            <div className="footer__book"><Button variant="on-dark" size="sm" as="a" href="#contact">Book a call</Button></div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} OneDesk. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
