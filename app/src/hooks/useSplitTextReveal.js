import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, useGSAP);

// Word-by-word clip-path wipe reveal for a heading (each word unmasks left
// to right). Skips entirely when the user has requested reduced motion.
export default function useSplitTextReveal(
  ref,
  { duration = 0.45, stagger = 0.45, delay = 0.1, ease = "power2.inOut" } = {},
) {
  useGSAP(
    () => {
      if (!ref.current) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        let split;
        let cancelled = false;

        // Wait for the display font before measuring words -- splitting
        // against a fallback font bakes in fixed-width word boxes that then
        // reflow internally once the real font swaps in.
        document.fonts.ready.then(() => {
          if (cancelled || !ref.current) return;

          split = SplitText.create(ref.current, {
            type: "words",
            deepSlice: true, // safely handle nested inline elements (e.g. a trailing dot span)
          });

          gsap.fromTo(
            split.words,
            { clipPath: "inset(0 100% 0 0)" },
            {
              clipPath: "inset(0 0% 0 0)",
              duration,
              stagger,
              delay,
              ease,
            },
          );
        });

        return () => {
          cancelled = true;
          split?.revert();
        };
      });

      return () => mm.revert();
    },
    { scope: ref },
  );
}
