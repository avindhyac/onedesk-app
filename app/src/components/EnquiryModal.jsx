import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { Input, Textarea } from "./FormField";
import "./EnquiryModal.css";

/**
 * Enquiry dialog. `firm` is the partner being enquired about (or null for a
 * general "help me choose" enquiry). Rendered with the native <dialog> element
 * so focus-trapping, ESC-to-close and inert background come for free.
 */
export default function EnquiryModal({ firm, open, onClose }) {
  const ref = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const dlg = ref.current;
    if (!dlg) return;
    if (open && !dlg.open) dlg.showModal();
    else if (!open && dlg.open) dlg.close();
  }, [open]);

  const heading = firm ? `Enquire about ${firm.name}` : "Tell us what you need";
  const intro = firm
    ? `Share a few details and a OneDesk specialist will introduce you to ${firm.name} — at your OneDesk member rate — within one business day.`
    : "Tell us what you're trying to get done and we'll match you with the right specialist at a OneDesk member rate.";

  return (
    <dialog
      ref={ref}
      className="enquiry"
      onClose={onClose}
      onClick={(e) => { if (e.target === ref.current) onClose(); }}
      aria-labelledby="enquiry-title"
    >
      <div className="enquiry__panel">
        <button type="button" className="enquiry__close" onClick={onClose} aria-label="Close enquiry">
          <iconify-icon icon="lucide:x" />
        </button>

        {sent ? (
          <div className="enquiry__success">
            <span className="enquiry__success-icon"><iconify-icon icon="lucide:check" /></span>
            <h2 className="enquiry__title" id="enquiry-title">Enquiry received.</h2>
            <p className="enquiry__intro">
              {firm
                ? `A OneDesk specialist will introduce you to ${firm.name} within one business day.`
                : "A OneDesk specialist will reach out within one business day to match you with the right firm."}
            </p>
            <Button variant="primary" onClick={onClose}>Done</Button>
          </div>
        ) : (
          <>
            <div className="enquiry__head">
              {firm && (
                <span className={`enquiry__badge od-tag od-tag--${firm.service}`}>
                  {firm.loc.split(" · ")[0]}
                </span>
              )}
              <h2 className="enquiry__title" id="enquiry-title">{heading}</h2>
              <p className="enquiry__intro">{intro}</p>
            </div>

            <form className="enquiry__form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <div className="enquiry__grid">
                <Input label="Full name" placeholder="Jordan Rivera" required />
                <Input label="Work email" type="email" icon="lucide:mail" placeholder="you@company.com" required />
              </div>
              <Textarea
                label={firm ? `What do you need from ${firm.name}?` : "What do you need help with?"}
                rows={3}
                placeholder="A short description of what you're looking for…"
              />
              <Button variant="primary" type="submit" size="lg" block iconRight="lucide:arrow-right">
                {firm ? "Request an intro" : "Request a match"}
              </Button>
              <p className="enquiry__fineprint">
                <iconify-icon icon="lucide:shield-check" /> No obligation. We only share your details with the firm you choose.
              </p>
            </form>
          </>
        )}
      </div>
    </dialog>
  );
}
