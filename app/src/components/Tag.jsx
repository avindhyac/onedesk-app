import "./Tag.css";

const SERVICE_LABELS = {
  sec: "Corporate Secretarial",
  acc: "Accounting",
  leg: "Legal",
  tax: "Tax",
  hr: "HR",
  mkt: "Marketing",
};

export default function Tag({ service, children }) {
  return (
    <span className={`od-tag od-tag--${service}`}>
      {children || SERVICE_LABELS[service] || service}
    </span>
  );
}
