import { useEffect, useId, useRef } from "react";
import { Link } from "react-router-dom";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Button from "./Button";
import Image from "./Image";
import secretarialIllustration from "../assets/services/Corporate/Asset 14@4x.webp";
import "./IncorporationModal.css";

const SESSION_KEY = "odIncorporationModalShown";
const DELAY_MS = 3500;
let shownWithoutStorage = false;

function hasBeenShown() {
  if (shownWithoutStorage) return true;
  try { return sessionStorage.getItem(SESSION_KEY) === "true"; }
  catch { return false; }
}

export default function IncorporationModal() {
  const dialogRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (hasBeenShown()) return;
    const dialog = dialogRef.current;
    let releaseScroll;
    let waitingForVisibility = false;

    const unlock = () => {
      releaseScroll?.();
      releaseScroll = undefined;
    };
    const show = () => {
      if (hasBeenShown() || !dialog.isConnected || dialog.open) return;
      if (document.visibilityState === "hidden") {
        waitingForVisibility = true;
        return;
      }
      waitingForVisibility = false;
      dialog.showModal();
      // Mark on display, not dismissal: refreshing or revisiting Home must not
      // repeat the promotion in the same tab session. Storage may be blocked.
      shownWithoutStorage = true;
      try { sessionStorage.setItem(SESSION_KEY, "true"); } catch { /* Use the in-memory fallback. */ }

      const htmlOverflow = document.documentElement.style.overflow;
      const bodyOverflow = document.body.style.overflow;
      const smoother = ScrollSmoother.get();
      const wasPaused = smoother?.paused();
      smoother?.paused(true);
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      releaseScroll = () => {
        document.documentElement.style.overflow = htmlOverflow;
        document.body.style.overflow = bodyOverflow;
        smoother?.paused(wasPaused);
      };
    };
    const onVisibilityChange = () => {
      if (waitingForVisibility) show();
    };
    const timer = window.setTimeout(show, DELAY_MS);
    dialog.addEventListener("close", unlock);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      dialog.removeEventListener("close", unlock);
      if (dialog.open) dialog.close();
      unlock();
    };
  }, []);

  const close = () => dialogRef.current?.close();

  return (
    <dialog
      ref={dialogRef}
      className="incorporation-modal"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const box = event.currentTarget.getBoundingClientRect();
        if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) close();
      }}
    >
      <button className="incorporation-modal__close" type="button" aria-label="Close incorporation offer" onClick={close} autoFocus>
        <iconify-icon icon="lucide:x" aria-hidden="true" />
      </button>
      <div className="incorporation-modal__layout">
        <div className="incorporation-modal__art" aria-hidden="true">
          <Image
            src={secretarialIllustration}
            className="incorporation-modal__illustration"
            sizes="(max-width: 640px) 220px, 300px"
            alt=""
            loading="eager"
            fetchPriority="low"
          />
          <p className="incorporation-modal__art-caption">From name<br /> to a company.</p>
        </div>
        <div className="incorporation-modal__content">
          <p className="incorporation-modal__eyebrow">OneDesk Secretarial</p>
          <h2 id={titleId} className="incorporation-modal__title">Incorporating a company?</h2>
          <p id={descriptionId} className="incorporation-modal__description">
            From name approval to registration, we handle the details so you can focus on what comes next.
          </p>
          <div className="incorporation-modal__actions">
            <Button as={Link} to="/services/secretarial" variant="primary" iconRight="lucide:arrow-right" onClick={close}>
              Start your company today
            </Button>
            
          </div>
        </div>
      </div>
    </dialog>
  );
}
