import { useEffect, useId, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "../components/Button";
import { SERVICES, SERVICE_DETAIL_ENABLED } from "../data/services";
import "./Header.css";

const NAV_LINKS = [
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services" },
  // Marketplace is not live yet — shown muted with a "WIP" badge, not linked.
  { to: "/marketplace", label: "Marketplace", soon: true },
];

function ServicesDropdown({ mobile = false, onNavigate }) {
  const [open, setOpen] = useState(false);
  const container = useRef(null);
  const trigger = useRef(null);
  const panelId = useId();
  const { pathname } = useLocation();
  const active = pathname === "/services" || pathname.startsWith("/services/");
  const linkClass = mobile ? "header__sheet-link" : "header__link";

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (!container.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  const close = () => {
    setOpen(false);
    onNavigate?.();
  };

  if (!SERVICE_DETAIL_ENABLED) {
    return <NavLink to="/services" className={linkClass} onClick={onNavigate}>Services</NavLink>;
  }

  return (
    <div
      ref={container}
      className={`header__services${mobile ? " header__services--mobile" : ""}`}
      onPointerEnter={(event) => {
        if (!mobile && event.pointerType !== "touch") setOpen(true);
      }}
      onPointerLeave={() => {
        if (!mobile) setOpen(false);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          event.stopPropagation();
          trigger.current?.focus();
          setOpen(false);
        }
      }}
    >
      <div className="header__services-heading">
        <NavLink
          ref={trigger}
          to="/services"
          className={`${linkClass} header__services-toggle${active ? ` ${linkClass}--active` : ""}`}
          aria-expanded={mobile ? undefined : open}
          aria-controls={mobile ? undefined : panelId}
          onClick={close}
          onFocus={() => {
            if (!mobile) setOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              setOpen(true);
              requestAnimationFrame(() => {
                container.current?.querySelector(".header__service-link")?.focus();
              });
            }
          }}
        >
          Services
          {!mobile && <iconify-icon icon="lucide:chevron-down" aria-hidden="true" />}
        </NavLink>
        {mobile && (
          <button
            type="button"
            className="header__services-toggle header__services-expand"
            aria-label={`${open ? "Collapse" : "Expand"} services`}
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
          >
            <iconify-icon icon="lucide:chevron-down" aria-hidden="true" />
          </button>
        )}
      </div>
      <div id={panelId} className="header__services-panel" hidden={!open}>
        {SERVICES.map((service) => (
          <NavLink
            key={service.slug}
            to={`/services/${service.slug}`}
            className="header__service-link"
            style={{ "--service-color": `var(--od-${service.key}-text)`, "--service-tint": `var(--od-${service.key}-tint)` }}
            onClick={close}
          >
            <span className="header__service-icon" aria-hidden="true"><iconify-icon icon={service.icon} /></span>
            {service.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

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
            link.to === "/services" ? (
              <ServicesDropdown key={link.to} />
            ) : link.soon ? (
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
          <Button variant="primary" size="sm" as={Link} to="/contact" onClick={close}>
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
          link.to === "/services" ? (
            <ServicesDropdown key={`${link.to}-${open}`} mobile onNavigate={close} />
          ) : link.soon ? (
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
