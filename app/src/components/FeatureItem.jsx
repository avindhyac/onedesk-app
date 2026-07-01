import "./FeatureItem.css";

export default function FeatureItem({ icon, title, service = "sec", layout = "row", children }) {
  return (
    <div className={`od-feature od-feature--${layout}`}>
      <span className={`od-feature__icon od-feature__icon--${service}`}>
        <iconify-icon icon={icon} />
      </span>
      <div>
        <h4 className="od-feature__title">{title}</h4>
        {children && <p className="od-feature__body">{children}</p>}
      </div>
    </div>
  );
}
