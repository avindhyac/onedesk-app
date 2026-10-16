import { useId } from "react";
import Image from "./Image";

// The legacy class prefix preserves the original secretarial page's visual design.
// Both the summary flow and the numbered timeline accept any number of items.
export default function ServiceTimeline({ timeline }) {
  const titleId = useId();
  if (!timeline?.steps?.length) return null;

  const { eyebrow, title, intro, steps, closing, nextLabel } = timeline;
  // A separate summary is optional; otherwise it follows the timeline steps.
  const flow = timeline.flow ?? steps.map((step) => step.flowLabel ?? step.kicker ?? step.title);

  return (
    <section className="secretarial-incorp" aria-labelledby={titleId}>
      <div className="secretarial-incorp__inner">
        {eyebrow && <p className="secretarial-incorp__eyebrow">{eyebrow}</p>}
        <h2 id={titleId} className="secretarial-incorp__title">{title}</h2>
        {intro && <p className="secretarial-incorp__intro">{intro}</p>}

        {flow.length > 0 && (
          <ol className="secretarial-incorp__flow" aria-label={`${title} overview`}>
            {flow.map((label, index) => (
              <li key={index} className={`secretarial-incorp__flow-item ${index === flow.length - 1 ? "secretarial-incorp__flow-item--ready" : ""}`}>
                {label}
              </li>
            ))}
          </ol>
        )}

        <ol className="secretarial-incorp__timeline">
          {steps.map((step, index) => (
            <li
              key={step.id ?? index}
              className={`secretarial-incorp__step ${index % 2 === 1 ? "secretarial-incorp__step--left" : "secretarial-incorp__step--right"} ${index === steps.length - 1 ? "secretarial-incorp__step--ready" : ""}`}
            >
              <div className="secretarial-incorp__media">
                {step.image && <Image src={step.image} sizes="(max-width: 760px) 230px, 260px" alt={step.imageAlt ?? ""} />}
              </div>
              <div className="secretarial-incorp__marker" aria-hidden="true">{index + 1}</div>
              <div className="secretarial-incorp__copy">
                {(step.kicker || index === steps.length - 1) && (
                  <div className="secretarial-incorp__step-labels">
                    {index === steps.length - 1 && <span className="secretarial-incorp__step-status">Ready</span>}
                    {step.kicker && <p className="secretarial-incorp__step-kicker">{step.kicker}</p>}
                  </div>
                )}
                <h3 className="secretarial-incorp__step-title">{step.title}</h3>
                <p className="secretarial-incorp__step-body">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>

        {closing && <p className="secretarial-incorp__closing">{closing}</p>}
        {nextLabel && (
          <>
            <div className="secretarial-incorp__divider" aria-hidden="true"><span /></div>
            <p className="secretarial-incorp__next-label">{nextLabel}</p>
          </>
        )}
      </div>
    </section>
  );
}
