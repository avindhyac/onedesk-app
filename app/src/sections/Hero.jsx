import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { CLIENT_LOGOS } from "../data/clientLogos";
import { HERO_DESK_SEATS } from "../data/heroDeskCharacters";
import deskImg from "../assets/char/Home/OD-Web-22-desk.webp";
import useSplitTextReveal from "../hooks/useSplitTextReveal";
import useDropDot from "../hooks/useDropDot";
import useDeskCharacterCycle from "../hooks/useDeskCharacterCycle";
import "./Hero.css";

const TITLE_REVEAL_DELAY = 0.15;
const TITLE_REVEAL_DURATION = 0.9;

export default function Hero() {
  const titleRef = useRef(null);
  const deskSceneRef = useRef(null);

  useSplitTextReveal(titleRef, { duration: TITLE_REVEAL_DURATION, stagger: 0.12, delay: TITLE_REVEAL_DELAY, ease: "expo.out" });
  useDropDot(titleRef, { delay: TITLE_REVEAL_DELAY + TITLE_REVEAL_DURATION + 0.05 });
  const registerLeft = useDeskCharacterCycle(deskSceneRef, { offset: 0 });
  const registerRight = useDeskCharacterCycle(deskSceneRef, { offset: 1.4 });

  return (
    <section id="top" className="hero">
      <div className="hero__glow" />
      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <Badge tone="orange" icon="lucide:sparkles">Trusted by founders everywhere</Badge>
          </div>
          <h1 className="hero__title" ref={titleRef}>
            Everything your business needs,<br className="hero__title-break" /> <span className="hero__title-tail">in one place<span className="dot">.<span className="hero__dot-ripple" aria-hidden="true" /></span></span>
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

        <div className="hero__desk-scene" ref={deskSceneRef} aria-hidden="true">
          <img className="hero__desk" src={deskImg} alt="" />
          <div className="hero__seat hero__seat--left">
            {HERO_DESK_SEATS.left.map((c) => (
              <img key={c.key} ref={registerLeft} src={c.src} alt="" className="hero__seat-char" />
            ))}
          </div>
          <div className="hero__seat hero__seat--right">
            {HERO_DESK_SEATS.right.map((c) => (
              <img key={c.key} ref={registerRight} src={c.src} alt="" className="hero__seat-char" />
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
