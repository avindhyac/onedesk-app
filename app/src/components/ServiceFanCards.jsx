import { useCallback, useEffect, useRef } from "react";
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

  const serviceCards = services
    .filter((item) => item.key !== service)
    .slice(0, 4);
  const supportItems = supportingCards === "services" ? serviceCards : points;

  const addActiveCharacterTransition = useCallback(
    (tl, duration, startAt = 0) => {
      if (!character?.active || !idleRef.current || !activeRef.current) return;

      gsap.killTweensOf([idleRef.current, activeRef.current]);
      tl.to(
        idleRef.current,
        {
          autoAlpha: 0,
          y: 8,
          scale: 0.98,
          duration,
          ease: "power2.out",
        },
        startAt,
      ).fromTo(
        activeRef.current,
        { autoAlpha: 0, y: 12, scale: 0.97 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration,
          ease: "power3.out",
          immediateRender: false,
        },
        startAt,
      );
    },
    [character?.active],
  );

  useEffect(() => {
    const root = rootRef.current;
    const cards = cardsRef.current.filter(Boolean);
    if (!root || !cards.length) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const fanDuration = reduce ? 0 : 0.5;
    const fanStagger = reduce ? 0 : 0.035;
    const fanVars = {
      x: (i) => (i - (cards.length - 1) / 2) * 25,
      y: (i) => Math.abs(i - (cards.length - 1) / 2) * 8,
      rotation: (i) => (i - (cards.length - 1) / 2) * 8,
      duration: fanDuration,
      ease: "back.out(1.4)",
      stagger: fanStagger,
    };

    const supportingCardEls = cards.slice(1);

    gsap.set(cards, {
      x: (i) => (i - (cards.length - 1) / 2) * 7,
      y: (i) => i * 5,
      rotation: (i) => (i - (cards.length - 1) / 2) * 1.5,
      transformOrigin: "50% 88%",
    });
    gsap.set(supportingCardEls, { filter: "grayscale(0)", opacity: 1 });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || revealedRef.current) return;
        revealedRef.current = true;

        const tl = gsap.timeline();
        tl.to(cards, fanVars, 0).to(
          supportingCardEls,
          {
            filter: "grayscale(1)",
            opacity: 0.72,
            duration: fanDuration,
            ease: "power2.out",
            stagger: fanStagger,
          },
          fanStagger,
        );

        addActiveCharacterTransition(tl, fanDuration, 0);

        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [supportItems.length, addActiveCharacterTransition]);

  return (
    <div
      ref={rootRef}
      className={`service-fan service-fan--${service} service-fan--support-${supportingCards}`}
      aria-label={`${title} service highlights`}
    >
      <article
        className="service-fan__card service-fan__card--hero"
        ref={(el) => {
          cardsRef.current[0] = el;
        }}
      >
        <span className="service-fan__character" aria-hidden="true">
          <img
            ref={idleRef}
            className="service-fan__character-img service-fan__character-img--idle"
            src={character?.idle}
            alt=""
            loading="lazy"
            decoding="async"
          />
          {character?.active && (
            <img
              ref={activeRef}
              className="service-fan__character-img service-fan__character-img--active"
              src={character.active}
              alt=""
              loading="lazy"
              decoding="async"
            />
          )}
        </span>
      </article>

      {supportItems.map((item, index) => {
        const isServiceCard = supportingCards === "services";
        const supportKey = isServiceCard ? item.key : item;
        const supportTitle = isServiceCard ? item.title : item;
        const supportCharacter = isServiceCard
          ? characters[item.key]?.idle
          : null;

        return (
          <article
            key={supportKey}
            className={`service-fan__card ${isServiceCard ? `service-fan__card--service service-fan__card--${item.key}` : "service-fan__card--point"}`}
            ref={(el) => {
              cardsRef.current[index + 1] = el;
            }}
          >
            {isServiceCard ? (
              <>
                <img
                  className="service-fan__service-img"
                  src={supportCharacter}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
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
