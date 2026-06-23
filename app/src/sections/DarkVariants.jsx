import "./DarkVariants.css";

const THEMES = [
  {
    slug: "obsidian",
    name: "Obsidian",
    desc: "Current base color, gradient removed — pure flat dark",
    bg: "#15211F",
    card: "#1C2A2A",
    cardBorder: "rgba(255,255,255,0.07)",
    accent: "#EE7632",
    accentSoft: "rgba(238,118,50,0.16)",
    muted: "rgba(255,255,255,0.58)",
  },
  {
    slug: "navy",
    name: "Midnight Navy",
    desc: "Deep cool blue-black — shifts the warmth out entirely",
    bg: "#0E1825",
    card: "#162031",
    cardBorder: "rgba(111,156,169,0.14)",
    accent: "#6F9CA9",
    accentSoft: "rgba(111,156,169,0.16)",
    muted: "rgba(255,255,255,0.55)",
  },
  {
    slug: "carbon",
    name: "Carbon",
    desc: "True neutral near-black — no hue, just depth",
    bg: "#111111",
    card: "#1A1A1A",
    cardBorder: "rgba(255,255,255,0.07)",
    accent: "#EE7632",
    accentSoft: "rgba(238,118,50,0.16)",
    muted: "rgba(255,255,255,0.52)",
  },
  {
    slug: "plum",
    name: "Deep Plum",
    desc: "Dark with a purple undertone — premium and editorial",
    bg: "#130F1E",
    card: "#1C1628",
    cardBorder: "rgba(192,132,252,0.14)",
    accent: "#C084FC",
    accentSoft: "rgba(192,132,252,0.16)",
    muted: "rgba(255,255,255,0.55)",
  },
  {
    slug: "forest",
    name: "Forest Night",
    desc: "Deep green-black — organic and grounded",
    bg: "#0B1A14",
    card: "#112219",
    cardBorder: "rgba(74,222,128,0.12)",
    accent: "#4ADE80",
    accentSoft: "rgba(74,222,128,0.14)",
    muted: "rgba(255,255,255,0.55)",
  },
  {
    slug: "slate",
    name: "Slate Storm",
    desc: "Cool grey-blue — industrial and technical",
    bg: "#111827",
    card: "#1F2937",
    cardBorder: "rgba(56,189,248,0.12)",
    accent: "#38BDF8",
    accentSoft: "rgba(56,189,248,0.14)",
    muted: "rgba(255,255,255,0.55)",
  },
  {
    slug: "volcanic",
    name: "Volcanic",
    desc: "Warm near-black with red-orange undertone — energetic",
    bg: "#1A0F0A",
    card: "#251510",
    cardBorder: "rgba(255,107,53,0.12)",
    accent: "#FF6B35",
    accentSoft: "rgba(255,107,53,0.16)",
    muted: "rgba(255,255,255,0.55)",
  },
  {
    slug: "indigo",
    name: "Deep Indigo",
    desc: "Dark with a blue-violet cast — futuristic and clean",
    bg: "#0D0F1F",
    card: "#141628",
    cardBorder: "rgba(129,140,248,0.14)",
    accent: "#818CF8",
    accentSoft: "rgba(129,140,248,0.16)",
    muted: "rgba(255,255,255,0.55)",
  },
];

const CARDS = [
  {
    title: "Reach the right clients",
    text: "Access startups, SMEs, corporates and foreign investors.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="8" r="3" /><path d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" /><path d="M16 8h5M18.5 5.5v5" />
      </svg>
    ),
  },
  {
    title: "Plug into the network",
    text: "A broader service ecosystem with real momentum.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11a4 4 0 0 1 0-6l2-2a4 4 0 0 1 6 6l-1 1" /><path d="M15 13a4 4 0 0 1 0 6l-2 2a4 4 0 0 1-6-6l1-1" />
      </svg>
    ),
  },
  {
    title: "Borrow our credibility",
    text: "Stronger trust through association with OneDesk.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Cross-referrals",
    text: "Work flows across legal, tax, HR, accounting and marketing.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    ),
  },
];

export default function DarkVariants() {
  return (
    <div className="dv">

      <div id="dv-header" className="dv__header">
        <div className="dv__header-inner">
          <p className="dv__header-label">Design Lab</p>
          <h1 className="dv__header-title">Dark Theme Variations</h1>
          <p className="dv__header-sub">
            8 flat dark variants — gradient removed, only background color and accent change.
            Scroll to compare.
          </p>
          <div className="dv__toc">
            {THEMES.map((t) => (
              <a key={t.slug} href={`#dv-${t.slug}`} className="dv__toc-item">
                <span className="dv__toc-swatch" style={{ background: t.bg, borderColor: t.accent }} />
                <span className="dv__toc-name">{t.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {THEMES.map((t, i) => (
        <section
          key={t.slug}
          id={`dv-${t.slug}`}
          className="dv__panel"
          style={{
            "--dv-bg": t.bg,
            "--dv-card": t.card,
            "--dv-card-border": t.cardBorder,
            "--dv-accent": t.accent,
            "--dv-accent-soft": t.accentSoft,
            "--dv-muted": t.muted,
          }}
        >
          <div className="dv__badge">
            <span className="dv__badge-num">{i + 1}/{THEMES.length}</span>
            <span className="dv__badge-name">{t.name}</span>
          </div>

          <div className="dv__inner">
            <div className="dv__copy">
              <span className="dv__eyebrow">OneDesk Marketplace</span>
              <h2 className="dv__title">
                A broader ecosystem your business can plug into<span className="dv__dot">.</span>
              </h2>
              <p className="dv__lede">
                Beyond core services, the OneDesk Marketplace connects vetted partners with the businesses
                that need them — and gives every member access to a wider network of opportunity.
              </p>
              <p className="dv__desc">{t.desc}</p>
              <div className="dv__swatches">
                <span className="dv__swatch-item">
                  <span className="dv__swatch-dot" style={{ background: t.bg, outline: "1.5px solid rgba(255,255,255,0.2)" }} />
                  <code>{t.bg}</code>
                </span>
                <span className="dv__swatch-item">
                  <span className="dv__swatch-dot" style={{ background: t.card }} />
                  <code>{t.card}</code>
                </span>
                <span className="dv__swatch-item">
                  <span className="dv__swatch-dot" style={{ background: t.accent }} />
                  <code>{t.accent}</code>
                </span>
              </div>
              <div className="dv__ctas">
                <a href="#dv-header" className="dv__btn-primary">Become a partner</a>
                <a href="#dv-header" className="dv__btn-ghost">Explore partners</a>
              </div>
            </div>

            <div className="dv__grid">
              {CARDS.map((c) => (
                <div key={c.title} className="dv__card">
                  <span className="dv__icon">{c.icon}</span>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <a href="#dv-header" className="dv__link">
                    Learn more <span aria-hidden="true">›</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <div className="dv__footer">
        <a href="#dv-header" className="dv__back">↑ Back to top</a>
      </div>
    </div>
  );
}
