import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { CLIENT_LOGOS } from "../data/clientLogos";
import { HERO_TABLE_SEATS } from "../data/heroTableCharacters";
import tableImg from "../assets/char/Home/OD-Web-39.webp";
// import useSplitTextReveal from "../hooks/useSplitTextReveal";
import useDropDot from "../hooks/useDropDot";
import useTableCharacterCycle from "../hooks/useTableCharacterCycle";
import "./Hero.css";

const TITLE_REVEAL_DELAY = 0.15;
const TITLE_REVEAL_DURATION = 0.9;

export default function Hero() {
  const titleRef = useRef(null);
  const tableSceneRef = useRef(null);

  // useSplitTextReveal(titleRef, { duration: TITLE_REVEAL_DURATION, stagger: 0.12, delay: TITLE_REVEAL_DELAY, ease: "expo.out" });
  useDropDot(titleRef, { delay: TITLE_REVEAL_DELAY + TITLE_REVEAL_DURATION + 0.05 });
  const registerLeft = useTableCharacterCycle(tableSceneRef, { offset: 0, direction: -1 });
  const registerRight = useTableCharacterCycle(tableSceneRef, { offset: 1, direction: 1 });

  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <Badge tone="orange" icon="lucide:sparkles">Trusted by founders everywhere</Badge>
          </div>
          <h1 className="hero__title" ref={titleRef}>
            Everything your business<br className="hero__title-break" /> <span className="hero__title-tail"> needs, in one place<span className="dot">.<span className="hero__dot-ripple" aria-hidden="true" /></span></span>
          </h1>
          <p className="hero__lede">
            OneDesk brings <strong>legal, tax, accounting, HR, secretarial and marketing</strong> support
            together, under one structured, trusted partner.
          </p>
          <div className="hero__ctas">
            <Button variant="primary" size="lg" iconRight="lucide:arrow-right" as={Link} to="/contact">
              Get started
            </Button>
            <Button variant="outline" size="lg" as={Link} to="/pricing">
              See pricing
            </Button>
          </div>
        </div>

        <div className="hero__table-scene" ref={tableSceneRef} aria-hidden="true">
          <img className="hero__table" src={tableImg} alt="" loading="eager" decoding="async" fetchPriority="high" />
          <div className="hero__table-seat hero__table-seat--left">
            {HERO_TABLE_SEATS.left.map((c, i) => (
              <img
                key={c.key}
                ref={registerLeft(i)}
                src={c.src}
                alt=""
                className="hero__table-char"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
              />
            ))}
          </div>
          <div className="hero__table-seat hero__table-seat--right">
            {HERO_TABLE_SEATS.right.map((c, i) => (
              <img
                key={c.key}
                ref={registerRight(i)}
                src={c.src}
                alt=""
                className="hero__table-char"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero__trust">
        <p className="hero__trust-heading">Trusted by great businesses</p>
        <div className="hero__trust-track">
          <div className="hero__trust-inner" aria-hidden="true">
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((c, i) => (
              <span key={i} className="hero__trust-logo">
                {c.name}
                <span className="hero__trust-sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
