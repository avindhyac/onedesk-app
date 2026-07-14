import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const HOLD = 2.6;
const ENTER = 1.5;
const FLIP = 1;
const EXIT = 1.5;
const OFFSET_X = 56;

// Loops a fixed stack of characters at one seat, forever: the active one
// holds, then flips horizontally (as if turning to face away) and slides off
// toward the table's outer edge while fading out, as the next one slides in
// from that same outer edge and fades in. `direction` (-1 left seat, 1 right
// seat) picks which way "off the table" is; `offset` staggers one seat's
// start against the other's so both sides don't swap in lockstep.
//
// `register` takes a fixed slot index and returns a ref callback for that
// slot -- mutating a shared ref array during render (clear-then-push on
// every render) is unsafe and unreliable, so slots are assigned positionally
// instead.
export default function useTableCharacterCycle(scopeRef, { offset = 0, direction = 1 } = {}) {
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
        gsap.set(items, { opacity: 0, x: direction * OFFSET_X, rotateY: 0, transformPerspective: 700 });
        gsap.set(items[0], { opacity: 1, x: 0 });

        const tl = gsap.timeline({ repeat: -1, delay: offset });

        items.forEach((_, i) => {
          const next = (i + 1) % items.length;
          tl.to(items[i], { rotateY: 180, duration: FLIP, ease: "power1.inOut" }, `+=${HOLD}`)
            .to(items[i], { x: direction * OFFSET_X, opacity: 0, duration: EXIT, ease: "power1.in" })
            .set(items[i], { rotateY: 0 })
            .fromTo(
              items[next],
              { opacity: 0, x: direction * OFFSET_X, rotateY: 0 },
              { opacity: 1, x: 0, duration: ENTER, ease: "power2.out", immediateRender: false },
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
    { scope: scopeRef, dependencies: [offset, direction] }
  );

  return register;
}
