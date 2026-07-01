import "./TestimonialCard.css";

function initials(name) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export default function TestimonialCard({ service = "acc", quote, name, role }) {
  return (
    <div className={`tcard od-tcard--${service}`}>
      <p className="tcard__quote">&ldquo;{quote}&rdquo;</p>
      <div className="tcard__person">
        <span className="tcard__avatar">{initials(name)}</span>
        <div>
          <div className="tcard__name">{name}</div>
          <div className="tcard__role">{role}</div>
        </div>
      </div>
    </div>
  );
}
