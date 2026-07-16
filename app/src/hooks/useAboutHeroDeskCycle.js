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
  const labelsRef = useRef([]);

  const registerAdvisor = (index) => (el) => {
    itemsRef.current[index] = el;
  };

  const registerLabel = (index) => (el) => {
    labelsRef.current[index] = el;
  };

  useGSAP(
    () => {
      const items = itemsRef.current.filter(Boolean);
      const labels = labelsRef.current.filter(Boolean);
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
        gsap.set(labels, {
          autoAlpha: 0,
          y: 10,
          filter: "blur(5px)",
          transformOrigin: "50% 50%",
        });
        gsap.set(labels[0], { autoAlpha: 1, y: 0, filter: "blur(0px)" });

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
          )
            .to(
              labels[index],
              {
                autoAlpha: 0,
                y: -8,
                filter: "blur(5px)",
                duration: EXIT * 0.75,
                ease: "power1.in",
              },
              "<",
            )
            .fromTo(
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
            )
            .fromTo(
              labels[next],
              { autoAlpha: 0, y: 10, filter: "blur(5px)" },
              {
                autoAlpha: 1,
                y: 0,
                filter: "blur(0px)",
                duration: ENTER * 0.8,
                ease: "power2.out",
                immediateRender: false,
              },
              "<0.12",
            );
        });

        return () => tl.kill();
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set(items, { autoAlpha: 0 });
        gsap.set(items[0], { autoAlpha: 1 });
        gsap.set(labels, { autoAlpha: 0 });
        gsap.set(labels[0], { autoAlpha: 1 });
      });

      return () => mm.revert();
    },
    { scope: scopeRef },
  );

  return { registerAdvisor, registerLabel };
}
