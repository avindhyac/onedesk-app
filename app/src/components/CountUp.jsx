import { useEffect, useRef, useState } from "react";

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function CountUp({ to, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || done.current) return;
          done.current = true;
          const dur = 1800;
          const start = performance.now();
          const easeOut = (t) => 1 - Math.pow(1 - t, 3);
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            setValue(Math.round(easeOut(p) * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
