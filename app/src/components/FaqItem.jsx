import { useState } from "react";
import "./FaqItem.css";

export default function FaqItem({ q, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`faq-item ${open ? "faq-item--open" : ""}`}>
      <button
        className="faq-item__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span className="faq-item__q">{q}</span>
        <span className="faq-item__icon">
          <iconify-icon icon={open ? "lucide:x" : "lucide:plus"} />
        </span>
      </button>
      {open && <div className="faq-item__body">{children}</div>}
    </div>
  );
}
