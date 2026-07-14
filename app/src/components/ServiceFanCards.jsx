import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./ServiceFanCards.css";

export default function ServiceFanCards({
  service,
  title,
  points = [],
  character,
  supportingCards = "points",
  services = [],
  characters = {},
}) {
  const rootRef = useRef(null);
  const cardsRef = useRef([]);
  const idleRef = useRef(null);
  const activeRef = useRef(null);
  const revealedRef = useRef(false);

  const serviceCards = services.filter((item) => item.key !== service).slice(0, 4);
  const supportItems = supportingCards === "services" ? serviceCards : points;

  const showActive = () => {
    if (!character?.active) return;
    gsap.killTweensOf([idleRef.current, activeRef.current]);
    gsap.timeline({ defaults: { duration: 0.2, ease: "power3.out" } })
      .to(idleRef.current, { autoAlpha: 0, y: 8, scale: 0.98 }, 0)
      .fromTo(activeRef.current, { autoAlpha: 0, y: 12, scale: 0.97 }, { autoAlpha: 1, y: 0, scale: 1 }, 0.03);
  };

  useEffect(() => {
    const root = rootRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!root || !cards.length) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fanVars = {
      x: (i) => (i - (cards.length - 1) / 2) * 25,
      y: (i) => Math.abs(i - (cards.length - 1) / 2) * 8,
      rotation: (i) => (i - (cards.length - 1) / 2) * 8,
      duration: reduce ? 0 : 0.5,
      ease: "back.out(1.4)",
      stagger: reduce ? 0 : 0.035,
      onComplete: () => {
        showActive();
        gsap.to(supportingCards, {
          filter: "grayscale(1)",
          opacity: 0.72,
          duration: reduce ? 0 : 0.35,
          ease: "power2.out",
          stagger: reduce ? 0 : 0.025,
        });
      },
    };

    const supportingCards = cards.slice(1);

    gsap.set(cards, {
      x: (i) => (i - (cards.length - 1) / 2) * 7,
      y: (i) => i * 5,
      rotation: (i) => (i - (cards.length - 1) / 2) * 1.5,
      transformOrigin: "50% 88%",
    });
    gsap.set(supportingCards, { filter: "grayscale(0)", opacity: 1 });

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || revealedRef.current) return;
      revealedRef.current = true;
      gsap.to(cards, fanVars);
      observer.disconnect();
    }, { threshold: 0.35 });

    observer.observe(root);
    return () => observer.disconnect();
  }, [supportItems.length]);

  return (
    <div
      ref={rootRef}
      className={`service-fan service-fan--${service} service-fan--support-${supportingCards}`}
      aria-label={`${title} service highlights`}
    >
      <article className="service-fan__card service-fan__card--hero" ref={(el) => { cardsRef.current[0] = el; }}>
        <span className="service-fan__character" aria-hidden="true">
          <img ref={idleRef} className="service-fan__character-img service-fan__character-img--idle" src={character?.idle} alt="" loading="lazy" />
          {character?.active && <img ref={activeRef} className="service-fan__character-img service-fan__character-img--active" src={character.active} alt="" loading="lazy" />}
        </span>
      </article>

      {supportItems.map((item, index) => {
        const isServiceCard = supportingCards === "services";
        const supportKey = isServiceCard ? item.key : item;
        const supportTitle = isServiceCard ? item.title : item;
        const supportCharacter = isServiceCard ? characters[item.key]?.idle : null;

        return (
          <article
            key={supportKey}
            className={`service-fan__card ${isServiceCard ? `service-fan__card--service service-fan__card--${item.key}` : "service-fan__card--point"}`}
            ref={(el) => { cardsRef.current[index + 1] = el; }}
          >
            {isServiceCard ? (
              <>
                <img className="service-fan__service-img" src={supportCharacter} alt="" loading="lazy" aria-hidden="true" />
              </>
            ) : (
              <>
                <span className="service-fan__point-index">0{index + 1}</span>
                <span className="service-fan__point-text">{supportTitle}</span>
              </>
            )}
          </article>
        );
      })}
    </div>
  );
}
