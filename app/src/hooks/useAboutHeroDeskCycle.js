import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HOLD = 2.2;
const ENTER = 0.9;
const EXIT = 0.75;
const OFFSET_X = 34;
const OFFSET_Y = 10;

// Cycles the advisor at the right side of the About hero desk. The client and
// desk stay anchored, while one service character at a time slides/fades in.
export default function useAboutHeroDeskCycle(scopeRef) {
  const itemsRef = useRef([]);

  const register = (index) => (el) => {
    itemsRef.current[index] = el;
  };

  useGSAP(
    () => {
      const items = itemsRef.current.filter(Boolean);
      if (items.length < 2) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(items, {
          autoAlpha: 0,
          x: OFFSET_X,
          y: OFFSET_Y,
          scale: 0.985,
          transformOrigin: "50% 100%",
          force3D: true,
        });
        gsap.set(items[0], { autoAlpha: 1, x: 0, y: 0, scale: 1 });

        const tl = gsap.timeline({ repeat: -1, delay: 1.1 });

        items.forEach((_, index) => {
          const next = (index + 1) % items.length;

          tl.to(
            items[index],
            {
              autoAlpha: 0,
              x: -OFFSET_X * 0.55,
              y: OFFSET_Y,
              scale: 0.985,
              duration: EXIT,
              ease: "power2.inOut",
            },
            `+=${HOLD}`,
          ).fromTo(
            items[next],
            { autoAlpha: 0, x: OFFSET_X, y: OFFSET_Y, scale: 0.985 },
            {
              autoAlpha: 1,
              x: 0,
              y: 0,
              scale: 1,
              duration: ENTER,
              ease: "power3.out",
              immediateRender: false,
            },
            "-=0.28",
          );
        });

        return () => tl.kill();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { autoAlpha: 0 });
        gsap.set(items[0], { autoAlpha: 1 });
      });

      return () => mm.revert();
    },
    { scope: scopeRef },
  );

  return register;
}
