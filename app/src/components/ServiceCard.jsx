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

export default function ServiceCard({ service, title, description, character, onClick }) {
  const icon = SERVICE_ICONS[service] || "lucide:briefcase";
  return (
    <div className={`svc-card od-svc--${service}`}>
      <div className="svc-card__art">
        <div className="svc-card__blob" />
        {character && (
          <img src={character} alt={title} className="svc-card__char" />
        )}
      </div>
      <div className="svc-card__body">
        <span className="svc-card__icon">
          <iconify-icon icon={icon} />
        </span>
        <h3 className="svc-card__title">{title}</h3>
        <p className="svc-card__desc">{description}</p>
        <Link
          to="/services"
          className="svc-card__link"
          onClick={onClick}
        >
          Learn more <iconify-icon icon="lucide:arrow-right" className="svc-card__arrow" />
        </Link>
      </div>
    </div>
  );
}
