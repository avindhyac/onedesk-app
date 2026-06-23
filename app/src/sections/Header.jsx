import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Button from "../components/Button";
import { logos } from "../data/logos";
import "./Header.css";

const NAV_LINKS = [
  { to: "/services",    label: "Services" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/about",       label: "About us" },
  { to: "/contact",     label: "Contact" },
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
          <Link to="/contact" className="header__link header__link--quiet">Sign in</Link>
          <Button variant="primary" size="md" dot as={Link} to="/contact">
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
        <Link to="/contact" className="header__sheet-link" onClick={close}>Sign in</Link>
        <Button variant="primary" size="md" dot as={Link} to="/contact" block onClick={close}>
          Get started
        </Button>
      </div>
    </header>
  );
}
