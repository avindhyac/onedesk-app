import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import { logos } from "../data/logos";
import "./Header.css";

const NAV_LINKS = [
  { to: "/about",       label: "About us" },
  { to: "/services",    label: "Services" },
  { to: "/pricing",     label: "Pricing" },
  { to: "/marketplace", label: "Marketplace" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="header__inner">
        <Link to="/" className="header__brand" onClick={close}>
          <img src={logos.ink} alt="OneDesk" className="header__logo" />
        </Link>

        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `header__link${isActive ? " header__link--active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button variant="primary" size="md" dot as={Link} to="/contact">
            Contact us
          </Button>
        </div>

        <button
          type="button"
          className="header__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`header__toggle-bar ${open ? "is-open" : ""}`} />
          <span className={`header__toggle-bar ${open ? "is-open" : ""}`} />
        </button>
      </div>

      <div className={`header__sheet ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="header__sheet-link"
            onClick={close}
          >
            {link.label}
          </NavLink>
        ))}
        <Button variant="primary" size="md" dot as={Link} to="/contact" block onClick={close}>
          Contact us
        </Button>
      </div>
    </header>
  );
}
