import Button from "../components/Button";
import { logos } from "../data/logos";
import "./Header.css";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#solution", label: "How it works" },
  { href: "#marketplace", label: "Marketplace" },
  { href: "#audience", label: "Who we serve" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#top">
          <img src={logos.fullcolour} alt="OneDesk" className="header__logo" />
        </a>
        <nav className="header__nav">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header__actions">
          <a href="#contact" className="header__link">Sign in</a>
          <Button variant="primary" size="md" dot as="a" href="#contact">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
