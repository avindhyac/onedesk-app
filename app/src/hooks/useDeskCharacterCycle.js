import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HOLD = 2.6;
const SWAP = 0.9;

// Cycles a stack of absolutely-positioned character images in place: the
// active one fades out while rotating away, the next fades in rotating from
// the opposite direction, then loops forever. `offset` staggers a seat's
// start against another seat's so both sides don't swap in lockstep.
// Skips entirely when the user has requested reduced motion (first character
// just stays put).
export default function useDeskCharacterCycle(scopeRef, { offset = 0 } = {}) {
  const itemsRef = useRef([]);
  itemsRef.current = [];

  const register = (el) => {
    if (el && !itemsRef.current.includes(el)) itemsRef.current.push(el);
  };

  useGSAP(
    () => {
      const items = itemsRef.current;
      if (items.length < 2) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(items, { opacity: 0, rotate: 0 });
        gsap.set(items[0], { opacity: 1 });

        const tl = gsap.timeline({ repeat: -1, delay: offset });

        items.forEach((_, i) => {
          const next = (i + 1) % items.length;
          tl.to(
            items[i],
            { opacity: 0, rotate: -14, duration: SWAP, ease: "power2.inOut" },
            `+=${HOLD}`
          ).fromTo(
            items[next],
            { opacity: 0, rotate: 14 },
            { opacity: 1, rotate: 0, duration: SWAP, ease: "power2.inOut", immediateRender: false },
            "<"
          );
        });

        return () => tl.kill();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { opacity: 0 });
        gsap.set(items[0], { opacity: 1 });
      });

      return () => mm.revert();
    },
    { scope: scopeRef, dependencies: [offset] }
  );

  return register;
}
