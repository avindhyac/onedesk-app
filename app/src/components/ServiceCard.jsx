import { Link } from "react-router-dom";
import "./ServiceCard.css";

const SERVICE_ICONS = {
  sec: "lucide:building-2",
  acc: "lucide:calculator",
  leg: "lucide:scale",
  tax: "lucide:percent",
  hr:  "lucide:users",
  mkt: "lucide:megaphone",
};

export default function ServiceCard({ service, title, description, character, to = "/services", onClick }) {
  const icon = SERVICE_ICONS[service] || "lucide:briefcase";
  return (
    <Link to={to} className={`svc-card od-svc--${service}`} onClick={onClick}>
      <span className="svc-card__rule" aria-hidden="true" />
      <div className="svc-card__art">
        <div className="svc-card__blob" />
        {character && (
          <img src={character} alt="" className="svc-card__char" loading="lazy" />
        )}
      </div>
      <div className="svc-card__body">
        <span className="svc-card__icon" aria-hidden="true">
          <iconify-icon icon={icon} />
        </span>
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>
        <span className="svc-card__cue">
          Explore
          <span className="svc-card__arrow" aria-hidden="true">
            <iconify-icon icon="lucide:arrow-right" />
          </span>
        </span>
      </div>
    </Link>
  );
}
