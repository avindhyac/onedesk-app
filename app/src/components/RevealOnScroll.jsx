import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function RevealOnScroll({
  children,
  delay = 0,
  className,
  y = 24,
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ref.current,
          { opacity: 0, y },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top bottom-=60",
              once: true,
            },
          },
        );
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [delay, y] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
