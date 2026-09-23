import { useState } from "react";
import { SOCIAL, linkAttrs } from "../data/social";
import "./WhatsAppPrompt.css";

export default function WhatsAppPrompt() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`wa-prompt-shell ${isOpen ? "wa-prompt-shell--open" : ""}`}>
      {isOpen && (
        <aside className="wa-prompt" aria-label="Contact OneDesk on WhatsApp">
          <button
            className="wa-prompt__close"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Minimize WhatsApp prompt"
          >
            <iconify-icon icon="lucide:x" />
          </button>

          <div className="wa-prompt__header">
            <div className="wa-prompt__icon" aria-hidden="true">
              <iconify-icon icon="ic:baseline-whatsapp" />
            </div>
            <div>
              <p className="wa-prompt__eyebrow">Quick contact</p>
              <h2 className="wa-prompt__title">Talk to OneDesk</h2>
            </div>
          </div>

          <p className="wa-prompt__text">
            Message us on WhatsApp and a OneDesk specialist will help you choose
            the right service.
          </p>

          <div className="wa-prompt__field" aria-hidden="true">
            <span className="wa-prompt__field-label">WhatsApp</span>
            <span className="wa-prompt__field-value">077 569 4203</span>
          </div>

          <a
            className="wa-prompt__cta"
            href={SOCIAL.whatsapp.href}
            {...linkAttrs(SOCIAL.whatsapp)}
            onClick={() => setIsOpen(false)}
          >
            <span>Start chat</span>
            <iconify-icon icon="lucide:arrow-up-right" />
          </a>
        </aside>
      )}

      <button
        className="wa-prompt-fab"
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Minimize WhatsApp prompt" : "Open WhatsApp prompt"}
        aria-expanded={isOpen}
      >
        <iconify-icon icon={isOpen ? "lucide:minus" : "ic:baseline-whatsapp"} />
      </button>
    </div>
  );
}
