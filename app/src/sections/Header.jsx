import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import "./Header.css";

const NAV_LINKS = [
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  // Marketplace is not live yet — shown muted with a "Soon" badge, not linked.
  { to: "/marketplace", label: "Marketplace", soon: true },
];

function Wordmark() {
  return (
    <span className="header__wordmark">
      onedesk<span className="header__wordmark-dot">.</span>
    </span>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={close}>
          <Wordmark />
        </Link>

        <nav className="header__nav">
          {NAV_LINKS.map((link) =>
            link.soon ? (
              <span
                key={link.to}
                className="header__link header__link--soon"
                aria-disabled="true"
              >
                {link.label}
                <span className="header__badge">WIP</span>
              </span>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `header__link${isActive ? " header__link--active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="header__actions">
          <Button variant="primary" size="sm" as={Link} to="/contact">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`header__bar ${open ? "is-open" : ""}`} />
          <span className={`header__bar ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <div className={`header__sheet ${open ? "is-open" : ""}`} inert={!open}>
        {NAV_LINKS.map((link) =>
          link.soon ? (
            <span
              key={link.to}
              className="header__sheet-link header__sheet-link--soon"
              aria-disabled="true"
            >
              {link.label}
              <span className="header__badge">WIP</span>
            </span>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `header__sheet-link${isActive ? " header__sheet-link--active" : ""}`
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ),
        )}
        <div className="header__sheet-ctas">
          <Button
            variant="primary"
            size="md"
            as={Link}
            to="/contact"
            block
            onClick={close}
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
