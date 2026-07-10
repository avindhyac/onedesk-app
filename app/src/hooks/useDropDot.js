import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Drops a trailing element (e.g. the "." on a headline) in from above with a
// gravity fall, a one-time squash on impact (no bounce/oscillation, per the
// site's motion rules), and an optional ripple flash timed to the landing.
// Looks up the dot/ripple by selector inside containerRef at run time rather
// than trusting refs captured before SplitText potentially restructured the
// DOM, and is meant to run *after* the container's SplitText reveal effect
// (call this hook after useSplitTextReveal in the same component).
// Skips entirely when the user has requested reduced motion.
export default function useDropDot(
  containerRef,
  { dotSelector = ".dot", delay = 0.25 } = {}
) {
  useGSAP(
    () => {
      if (!containerRef.current) return;
      const dotEl = containerRef.current.querySelector(dotSelector);
      if (!dotEl) return;

      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set(dotEl, { yPercent: -350, opacity: 0, transformOrigin: "50% 100%" });

        const tl = gsap.timeline({ delay });

        tl.to(dotEl, { yPercent: 0, opacity: 1, duration: 0.6, ease: "power2.in" })
          .to(dotEl, { scaleX: 1.2, scaleY: 0.3, duration: 0.2, ease: "power1.out" });

        // if (rippleEl) {
        //   tl.fromTo(
        //     rippleEl,
        //     { scale: 0.6, opacity: 0.55 },
        //     { scale: 2.2, opacity: 0, duration: 0.5, ease: "power2.out" },
        //     "<"
        //   );
        // }

        tl.to(dotEl, { scaleX: 1, scaleY: 1, duration: 0.4, ease: "power3.out" });

        return () => tl.kill();
      });

      return () => mm.revert();
    },
    { scope: containerRef, dependencies: [delay] }
  );
}
