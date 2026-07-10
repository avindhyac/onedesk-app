import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { CLIENT_LOGOS } from "../data/clientLogos";
import { HERO_DESK_SEATS } from "../data/heroDeskCharacters";
import deskImg from "../assets/char/Home/OD-Web-22-desk.webp";
import useSplitTextReveal from "../hooks/useSplitTextReveal";
import useDropDot from "../hooks/useDropDot";
import useDeskOrbit from "../hooks/useDeskOrbit";
import "./Hero.css";
import "./HeroAlt.css";

const TITLE_REVEAL_DELAY = 0.15;
const TITLE_REVEAL_DURATION = 0.9;

// Interleave left/right-leaning art (rather than running through one side's
// three before the other's) so the queue feels varied as it cycles.
//
// The source art itself isn't symmetric - HERO_DESK_SEATS.left characters are
// drawn reaching right (their native pose, matching the left seat where the
// table is to their right); .right characters are drawn reaching left
// (native to the right seat). Tagging each with its `home` seat here -
// scoped to this orbit-only queue, not the shared data file - lets
// useDeskOrbit render every character in its exact native/unmirrored pose
// whenever it's on its own seat (matching the static main Hero exactly),
// and mirrored only when it's a guest on the other one.
const ORBIT_CHARACTERS = HERO_DESK_SEATS.left.flatMap((c, i) => [
  { ...c, home: "left" },
  { ...HERO_DESK_SEATS.right[i], home: "right" },
]);

// Alternate hero: same content, but the desk characters share one semicircular
// orbit (see useDeskOrbit) instead of crossfading in place per side.
export default function HeroAlt() {
  const titleRef = useRef(null);
  const deskSceneRef = useRef(null);
  const slotARef = useRef(null);
  const slotBRef = useRef(null);

  useSplitTextReveal(titleRef, { duration: TITLE_REVEAL_DURATION, stagger: 0.12, delay: TITLE_REVEAL_DELAY, ease: "expo.out" });
  useDropDot(titleRef, { delay: TITLE_REVEAL_DELAY + TITLE_REVEAL_DURATION + 0.05 });
  useDeskOrbit(deskSceneRef, [slotARef, slotBRef], ORBIT_CHARACTERS);

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
          <img ref={slotARef} src={ORBIT_CHARACTERS[0].src} alt="" className="hero__orbit-char" />
          <img ref={slotBRef} src={ORBIT_CHARACTERS[1].src} alt="" className="hero__orbit-char" />
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
