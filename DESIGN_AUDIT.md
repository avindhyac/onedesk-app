# OneDesk — Website Design & Technical Audit

Stack: React 19 · Vite 8 · React Router 7 · Framer Motion · Lenis · Plain CSS with a token system
Scope reviewed: Home, About, Services, Pricing, Contact, Marketplace
Headline verdict: This is a genuinely well-crafted marketing site — distinctive visual identity, clean architecture, and mobile responsiveness that already holds up across the full width range. The gaps are not in the design; they're in production-readiness: SEO infrastructure, image weight, real form/links, and a handful of accessibility refinements.

---

1. Design Quality

What's working (keep it):

- A real visual identity, not a template. The six-pillar color system (--c-sec navy → --c-mkt gold) is used systematically — pastel-tint card backgrounds, the gradient hairline under the header, the per-pillar accent on "Learn more" links. The rainbow header rule and hero glow are a memorable signature without being loud.
- Typography is intentional. Weight-driven hierarchy in Poppins, fluid clamp() sizing on the hero (clamp(38px, 4.4vw, 62px)), tight negative tracking on display text. It reads premium.
- One consistent card language across Problem/Services/Benefits/Marketplace — flat tints, ~18–28px radius, hover-only shadow lift. Cohesion is the strongest design asset here.

Improvements (UX/UI), by impact:

#: D1
Finding: Team section is placeholder content — "TM" monograms and generic "Team Member / Head
of Legal" labels. For a trust-based services firm, real names + photos are the single
highest-trust element on the site. This is the biggest design gap.
Where: About page
────────────────────────────────────────
#: D2
Home mobile and the menu look solid. Let me view the rest of the mobile pages.

Read 3 files

Mobile pages look strong. Note: on Contact mobile, the info panel renders above the form — worth flagging. Let me view About and Marketplace mobile, plus a couple of desktop shots for
comparison.

Read 3 files

I've now reviewed the full code at desktop/tablet/mobile. Thebuild is genuinely polished and already quite responsive — the mobile nav, hero, cards, and footer all reflow cleanly. Before I write the final audit, a few answers will sharpen the
recommendations (especially the deployment sections), since
Mobile pages look strong. Note: on Contact mobile, the info panel renders above the form — worth flagging. Let me view About and Marketplace mobile, plus a couple of desktop shots for comparison.

Read 3 files

I've now reviewed the full code at desktop/tablet/mobile. Thebuild is genuinely polished and already quite responsive — the mobile nav, hero, cards, and
footer all reflow cleanly. Befo few answers will sharpen therecommendations (especially the dev-stack, integrations, and deployment sections), since those depend on intent I can't read from the code.

● User answered Claude's questions:
· The contact form currently fakes submission (a 1.2s timer, no data leaves the browser).
How should real leads be del
· Where do you plan to host the site? → Vercel (Recommended)
· What is the site's primary job? This sets how hard I push SEO architecture (the app is
currently a client-rendered search engines handle poorly). →Not sure yet
· After the report, how far do you want me to take it? → Report only for now

Got it — report only; form stays a demo; hosting on Vercel; I'll advise on the SEO/goal question. Let me run a few concrete technical checks so the report cites real numbers, not
guesses: a production build (buverflow/tap-target audit, andaccessibility greps.

Searched for 1 pattern, read 2

Strong signal already. Two things stand out: the char-hr.webp is 317 KB — larger than the PNGs it sits beside (~70 KB), and the logo PNGs are 150–260 KB each. Focus styles exist in
only 2 of ~25 CSS files. Let me hard accessibility/overflownumbers, then check the logo assets.

● Write(\_probe.mjs)
Wrote 28 lines to \_probe.mjs
import { chromium } from "playwright";
const BASE = "http://loc
const routes = ["/", "/about", "/services", "/pricing", "/contact", "/marketpla
const browser = await ch
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } })
;
const page = await ctx.newPage();
for (const r of routes) {
await page.waitForTime
const data = await page.evaluate(() => {
… +22 lines

Listed 1 directory, ran 1 shell

No horizontal overflow on any rt, exactly one h1 per page — theresponsive and semantic foundations are genuinely solid. The "small tap target" counts
(20–30/page) are mostly inline t me glance at one tablet renderto confirm the mid-range breakpoints hold, then I'll write the report.

Read 1 file

That confirms it — the responsis the whole range. I haveeverything I need. Let me stop the dev server and clean the build artifact.

Ran 1 shell command

Here is the full audit. I revied rendered each at desktop(1440), tablet (768), and mobile (390), plus ran a production build, lint, and an automated
mobile overflow/accessibility pare measured, not estimated.

---

OneDesk — Website Design & Tech

Stack: React 19 · Vite 8 · React Router 7 · Framer Motion · Lenis · Plain CSS with a token system
Scope reviewed: Home, About, Services, Pricing, Contact, Marketplace
Headline verdict: This is a gen site — distinctive visualidentity, clean architecture, and mobile responsiveness that already holds up across the full
width range. The gaps are not iuction-readiness: SEOinfrastructure, image weight, real form/links, and a handful of accessibility refinements.

---

1. Design Quality

What's working (keep it):

- A real visual identity, not a template. The six-pillar color system (--c-sec navy → --c-mkt
  gold) is used systematically — the gradient hairline under the header, the per-pillar accent on "Learn more" links. The rainbow header rule and hero glow are a memorable signature without being loud.
- Typography is intentional. Weins, fluid clamp() sizing on thehero (clamp(38px, 4.4vw, 62px)), tight negative tracking on display text. It reads premium.
- One consistent card language across Problem/Services/Benefits/Marketplace — flat tints,
  ~18–28px radius, hover-only shaongest design asset here.

Improvements (UX/UI), by impact:

#: D1
Finding: Team section is placeholder content — "TM" monograms and generic "Team Member / Head

of Legal" labels. For a trust-based services firm, real names + photos are the single
highest-trust element on the site. This is the biggest design gap.
Where: About page
────────────────────────────────────────
#: D2
Finding: "Trusted by the best" shows invented logos (Cobalt & Co, Meridian, Northwind…). Fine
for a demo, but a credibility/legal risk if launched as-is. Either use real clients (with
permission) or reframe as "Industries we serve."
Where: Hero
────────────────────────────────────────
#: D3
Finding: Contact page stacks the info panel above the form on mobile. The form is the primary
action; on mobile it should come first.
Where: ContactPage.css
───────────────────────────────
#: D4
Finding: Card internals don't align across a row at tablet width — variable illustration
heights leave "Tax Advisory" egal." Minor polish; a fixed art
height or align-items tweak fixes it.
Where: Services tablet
───────────────────────────────
#: D5
Finding: Hero illustration cards have slightly different baselines (variable PNG heights).
Cosmetic.
Where: Hero

---

2. Technical Assessment

Build & code health — strong:

- Production build is clean: 25s with zero warnings.
- JS bundle 458 KB raw / 140 KB gzip, CSS 51 KB / 10 KB gzip. Reasonable, though Framer Motion + Lenis are most of the JS weight — route-level code-splitting would trim first load.
- Architecture is tidy: co-locaign-token layer(styles/tokens/\*), data-driven pillar system. This is maintainable.

The real problem is image weight (your largest performance lever):

┌──────────────────────────────────┬───────────┬─────────────────────────────────────────┐
│ Asset │ Size │ Issue │
├───────────────────────────────────────────────────────────┤
│ │ │ Larger than the PNGs beside it (~62–74 │
│ char-hr.webp │ 318 KB │ KB). The WebP export went wrong — it │
│ │ │ should be ~30–50 KB. │
├──────────────────────────────────┼───────────┼─────────────────────────────────────────┤
│ onedesk-white-trim.png ; should be SVG (a few KB, │
│ │ │ sharp at any size). │
├───────────────────────────────────────────────────────────┤
│ onedesk-fullcolour/ink/white.png │ 149–178 │ Same — the ink logo loads in the header │
│ age at 165 KB. │
└──────────────────────────────────┴───────────┴─────────────────────────────────────────┘

Total image payload is ~1.5 MB cially on mobile data.

Other technical notes:

- No width/height on <img> tags images load.
- No favicon (index.html has none).
- CLAUDE.md is now stale — it documents a "single static page," but routing and six page
  components were added. Worth upfrom truth.

---

3. Functionality

┌──────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Severity │ │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ 🔴 High │ No catch-all 404 route in App.jsx. Unknown URLs render header + footer with │
│ │ a blank body. Add │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ │ Contact form uses noValidate and relies on required — together that means no │
│ 🔴 High │ validation runs at all; submit "succeeds" on an empty form (setTimeout → │
│ │ success). Even as a demo this misleads. (You've chosen to keep it a demo — │
│ │ flagging for go-live.) │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ 🟡 Med │ Social links are href="#" placeholders (WhatsApp, Instagram, Facebook). │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ 🟡 Med │ Form has no inline error feedback and no aria-live on the "Sending…/sent" │
│ │ status. │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ ✅ │ Verified working across devices: mobile menu toggle, scrolling marquees, │
│ │ scroll-reveal animations, and routing all behave correctly. │
└──────────┴──────────────────────────────────────────────────────────────────────────────┘

---

4. SEO & Accessibility

SEO — this is the weakest area, and it's structural:

- The site is a client-rendered <title> — no meta description,no Open Graph / Twitter cards, no canonical, no structured data, no robots.txt or sitemap.
- The <title> never changes between routes — /about, /pricing, etc. all report the same title
  to Google and to social-share u
- No LocalBusiness / Organization schema — a notable miss for a Colombo-based services firm that should appear in local/Google Business results.

▎ You answered "not sure" on the site's primary goal. My recommendation: for a professional-services firm, organic and local search is almost always worth capturing — prospects search "company secretarial Colombo," "tax advisory Sri Lanka," etc. So I'd treat SEO as in-scope. The fix has two tiers: (a) immediate, cheap — add meta description, OG tags, favicon, and per-route titles; (b) structural — add prerendering so crawlers and social scrapers get real HTML (see §5).

Accessibility — good bones, a few real gaps:

Verified good: every image has alt, exactly one h1 per page, hamburger has aria-label + aria-expanded, social links have aria-label, and prefers-reduced-motion is respected
globally. No horizontal overflo

Gaps:

┌──────────┬──────────────────────────────────────────────────────────────────────────────┐
│ Severity │ │
├──────────┼──────────────────────────────────────────────────────────────────────────────┤
│ │ Visible focus styles exist in only 2 of ~25 CSS files (Button, ContactPage). │
│ 🔴 High │ Nav links, footer links, and cards have no :focus-visible outline — │
│ │ keyboard users can't see where they are. Add one global :focus-visible rule. │
├──────────┼─────────────────────────────────────────────────┤
│ │ Closed mobile menu links stay keyboard-focusable. The sheet uses max-height: │
│ 🟡 Med │ 0; overflow: hiddso tabbing reaches hidden nav │
│ │ links. Add inert/visibility when closed. │
├──────────┼─────────────────────────────────────────────────┤
│ 🟡 Med │ 20–30 tap targets per page under 36 px (mostly inline footer + "Learn more │
│ │ ›" links, social icons) — below the WCAG 2.5.8 comfortable minimum. │
├──────────┼─────────────────────────────────────────────────┤
│ 🟡 Med │ Low-contrast risk: 11px overlines in --ink-400 on light tints likely fail │
│ │ WCAG AA. Worth a contrast pass. │
└──────────┴─────────────────────────────────────────────────┘

---

5. Development Suggestions

Frontend — keep React + Vite; it's the right call. Add:

- Per-route meta via react-helmO win).
- Prerendering for the SEO structural fix. Two paths: lightest is vite-react-ssg / a prerender plugin (keeps your current code). If the site will grow content (blog, dynamic
  pages), migrate to Astro (ideal+ React "islands") — it wouldalso slash the JS bundle. Next.js only if you anticipate heavy dynamic/app features.
- Image pipeline (vite-imagetools or pre-export via Squoosh) → AVIF/WebP at correct sizes;
  convert logos to SVG; add loadins on below-fold images.

Backend / integrations (for when the form goes live — currently a demo):

- Lead delivery: since you're on Vercel, a serverless function → email (Resend) or a form service (Formspree/Web3Forms). Add zod validation + aria-live status.
- WhatsApp Business click-to-chat — high-value for the Sri Lankan market; the icon is already in the UI.
- Analytics: Plausible (privacy-friendly) or GA4.
- Google Business Profile + LocalBusiness schema for local discovery.
- CMS (Sanity/Contentful) only ontent (team, pricing,testimonials) regularly.

---

6. Deployment (Vercel) - Vercel auto-detects the Vite essentially zero-config.

- 🔴 Critical for an SPA: add deep-link rewrites or direct hits to /about, /pricing, etc. 404 on refresh. Add a vercel.json rewrite of all paths to /index.html (or rely on the framepreset's SPA handling). Test byafter first deploy.
- Vercel already serves Vite's hashed /assets with immutable caching — good by default.
- ## Ongoing maintenance: enable Vercel Speed Insights + Analytics, turn on preview deployper PR, add robots.txt + sitema/Renovate. Consider Lighthouse CI to catch perf/a11y regressions before merge.

7. Mobile (the original focus) — verdict: already strong
   Measured at 390 px across all sll anywhere, every image has alttext, one h1 per page. The header collapses to a clean animated sheet at 860px, the hero card-fan un-rotates and stacks, and every card grid drops to a single column. This is bmobile execution than most prod

Mobile-specific fixes, prioritized: 1. Re-export char-hr.webp (318 data hardest. (P0, easy) 2. Contact page: put the form before the info panel on mobile. (P1) 3. Tap targets: pad footer link px. (P1) 4. Hidden menu links shouldn't be keyboard-focusable when the sheet is closed. (P1) 5. Confirmed fine, no change needed: menu sheet height, marquee overflow masking, hero stacking.

---

Prioritized action list

P0 — before any launch

- Fix char-hr.webp (and convert logos to SVG) — biggest perf win
- Add SPA rewrite for Vercel (d
- Add 404 route
- Add favicon + meta descriptiote titles
- Global :focus-visible outline

P1 — credibility & correctness

- Replace placeholder team members + invented client logos with real content
- Real form endpoint + validatiast demo)
- Real social/footer links (remove href="#")
- Contact mobile reorder; tap-target padding; inert on closed menu

P2 — growth & polish

- LocalBusiness schema + sitemap/robots + analytics
- Prerendering (or Astro migrat
- Route-level code-splitting; card-row alignment; contrast pass on overlines
- Update the stale CLAUDE.md

---

A few things worth confirming when you're ready to act on this:

1. Goal — want me to firm up th specific intent (local lead-genvs. brand showcase)?
2. Team/logos — are real team members and client names available, or should those sections be reframed?
3. Scope — you chose "report only" for now; whenever you want, I can take the P0 list (image/SEO/404/focus fixes) since those are low-risk and high-impact.
