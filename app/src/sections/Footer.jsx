import { Link } from "react-router-dom";
import { SOCIAL, linkAttrs } from "../data/social";
import "./Footer.css";

const SOCIALS_ICONS = {
  whatsapp: "lucide:message-circle",
  instagram: "lucide:instagram",
  facebook: "lucide:facebook",
  email: "lucide:mail",
};

const SOCIALS = Object.entries(SOCIAL).map(([key, s]) => ({
  ...s,
  key,
  icon: SOCIALS_ICONS[key],
}));

const SERVICE_LINKS = [
  { to: "/services", label: "Legal" },
  { to: "/services", label: "Tax advisory" },
  { to: "/services", label: "Accounting" },
  { to: "/services", label: "HR & payroll" },
  { to: "/services", label: "Company secretarial" },
  { to: "/services", label: "Marketing" },
];

const COMPANY_LINKS = [
  { to: "/about", label: "About us" },
  { to: "/pricing", label: "Pricing" },
  // Marketplace not live yet — shown muted with a "Soon" badge, not linked.
  { to: "/marketplace", label: "Marketplace", soon: true },
  { to: "/contact", label: "Contact" },
];

function Wordmark() {
  return (
    <span className="footer__wordmark">
      onedesk<span className="footer__wordmark-dot">.</span>
    </span>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__grid">
          <div className="footer__brand-col">
            <Wordmark />
            <p className="footer__blurb">
              All your business needs,
              <br />
              in one place.
            </p>
            <div className="footer__social">
              {SOCIALS.map((s) => (
                <a
                  key={s.key}
                  href={s.href}
                  aria-label={s.label}
                  className="footer__social-btn"
                  {...linkAttrs(s)}
                >
                  <iconify-icon icon={s.icon} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Services</h4>
            <ul className="footer__list">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="footer__link">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Company</h4>
            <ul className="footer__list">
              {COMPANY_LINKS.map((l) =>
                l.soon ? (
                  <li key={l.label}>
                    <span
                      className="footer__link footer__link--soon"
                      aria-disabled="true"
                    >
                      {l.label}
                      <span className="footer__badge">WIP</span>
                    </span>
                  </li>
                ) : (
                  <li key={l.label}>
                    <Link to={l.to} className="footer__link">
                      {l.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">Get in touch</h4>
            <ul className="footer__list footer__contact">
              <li>
                <a href="mailto:hello@onedesk.one" className="footer__link">
                  hello@onedesk.one
                </a>
              </li>
              <li className="footer__address">Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} OneDesk, Inc. All rights reserved.</span>
          <span className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">
              Privacy
            </Link>
            <Link to="/terms" className="footer__legal-link">
              Terms
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
