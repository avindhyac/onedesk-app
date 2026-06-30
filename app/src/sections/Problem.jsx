import Eyebrow from "../components/Eyebrow";
import "./Problem.css";

const CARDS = [
  {
    color: "sec",
    title: "Fragmented providers",
    text: "A separate firm for each function - none of them talking to each other.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1d2d44" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    color: "acc",
    title: "Coordination burden",
    text: "Founders become project managers, chasing updates instead of building.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#687e74" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    color: "leg",
    title: "Compliance gaps",
    text: "Filings slip between providers - and the risk lands squarely on you.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4b3862" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" />
        <path d="M12 8v4M12 15.5v.5" stroke="#d96b5e" />
      </svg>
    ),
  },
  {
    color: "tax",
    title: "Scattered decisions",
    text: "Legal, tax and finance move in silos that quietly work against each other.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c46a3a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" /><circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="18" r="2.5" />
        <path d="M8.5 6h7M6 8.5v7M18 8.5v7M8.5 18h7" strokeDasharray="2 3" />
      </svg>
    ),
  },
];

export default function Problem() {
  return (
    <section className="problem">
      <div className="problem__inner">
        <div className="problem__head">
          <div>
            <Eyebrow>The business support gap</Eyebrow>
            <h2 className="problem__title">
              Running a business shouldn&apos;t mean running between providers<span className="dot">.</span>
            </h2>
          </div>
          <p className="problem__lede">
            Most companies stitch together a different firm for every function - the result is fragmentation,
            duplicated effort and decisions made in isolation with no one seeing the whole picture.
          </p>
        </div>
        <div className="problem__grid">
          {CARDS.map((c) => (
            <div key={c.title} className="problem__card" style={{ background: `var(--c-${c.color}-l)` }}>
              <div className="problem__icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
