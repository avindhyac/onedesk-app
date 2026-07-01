---
name: OneDesk
description: Six business-services disciplines, one calm and coherent surface — warm, premium, trustworthy.
colors:
  ember: "#ee7632"
  ember-600: "#d75f1d"
  ember-tint: "#fdf1e8"
  harbor: "#6f9ca9"
  harbor-600: "#557e8b"
  harbor-tint: "#eef4f5"
  ink: "#1d2330"
  ink-2: "#3a3f4b"
  slate: "#5d626d"
  slate-2: "#868b94"
  paper: "#faf8f4"
  paper-2: "#f3f0e9"
  paper-3: "#ebe7de"
  white: "#ffffff"
  line: "#e7e2d8"
  line-strong: "#d6d0c4"
  secretarial-navy: "#1c314f"
  accounting-sage: "#799b91"
  legal-plum: "#584361"
  tax-rust: "#c5652d"
  hr-coral: "#ef8270"
  marketing-gold: "#e4a747"
  ember-readable: "#b54c18"
  harbor-readable: "#3f5f68"
  accounting-sage-text: "#46615a"
  tax-rust-text: "#9a4f22"
  hr-coral-text: "#a8402f"
  marketing-gold-text: "#8a6111"
  success: "#3f9d6d"
  warning: "#e4a747"
  error: "#d8553f"
typography:
  display:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.5rem, 4.4vw, 4rem)"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 2.9vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Poppins, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Open Sans, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Open Sans, system-ui, -apple-system, 'Segoe UI', sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  xs: "6px"
  sm: "10px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "44px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  2xl: "3rem"
  section: "clamp(3.5rem, 7vw, 7rem)"
  gutter: "clamp(1.25rem, 5vw, 4rem)"
components:
  button-primary:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-primary-hover:
    backgroundColor: "{colors.ember}"
    textColor: "{colors.ink}"
  button-secondary:
    backgroundColor: "{colors.harbor}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  button-outline:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 26px"
  card:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.xl}"
    padding: "20px 22px 24px"
  input:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  input-focus:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
---

# Design System: OneDesk

## 1. Overview

**Creative North Star: "One Desk, Six Colors"**

OneDesk is one firm that does the work of six — company secretarial, accounting, legal, tax, HR, and marketing. The design system makes that its central idea. Six service palettes (a navy-through-gold spectrum) form the brand's spine, and a single rainbow hairline across the top of every page binds them into one coordinated surface. Between the six, two neutral brand voices do the connective work: **Ember** (a warm orange) is the one voice of action, and **Harbor** (a calm teal) carries supporting trust cues. Everything sits on warm ivory paper, so the color never feels clinical.

The mood is coordinated specialists under one roof: premium, confident, and expert without being cold or corporate. Hierarchy is weight-driven — heavy Poppins headings against plain-spoken Open Sans body — and elevation is restrained: surfaces are flat at rest and lift only in response to a hover. The system reads as calm authority. It demystifies high-stakes services rather than gatekeeping them.

This system explicitly rejects the generic-corporate template (stock-photo handshakes, blue-gradient SaaS themes, faceless big-firm blandness), discount-services energy (loud pricing banners, clutter), techy-SaaS costume (dark mode, neon gradients, product jargon), and the stuffy old-fashioned law-firm look (dusty serifs, dense text walls, cold formality). OneDesk has a real identity; nothing here should read as a bought theme.

**Key Characteristics:**
- Six-pillar service palette, unified by one rainbow hairline (the brand signature).
- Ember orange as the single action color; Harbor teal as the trust/support voice.
- Warm ivory paper ground — never stark white, never beige-sand default.
- Weight-driven Poppins/Open Sans hierarchy; premium and legible.
- Flat-at-rest surfaces; warm-tinted, restrained shadows that appear on interaction.

## 2. Colors

A warm, dual-accent brand palette (Ember + Harbor) laid over ivory paper, extended by a six-color service spectrum that only appears where a specific discipline is being represented.

### Primary
- **Ember Orange** (`#ee7632`): The single voice of action. Primary CTAs, the wordmark dot, required-field markers, input focus rings, featured-plan accents, and the ember-tinted glow beneath primary buttons. Its darker step, **Ember Deep** (`#d75f1d`), is the hover state.

### Secondary
- **Harbor Teal** (`#6f9ca9`): The trust and support voice. Secondary buttons, trust-note icons, pricing checkmarks, input hover borders, and inline links. Darker step **Harbor Deep** (`#557e8b`) for hover.

### Tertiary — The Six-Pillar Service Spectrum
Each of OneDesk's six services owns a color with a base (icon/link/accent) and a pale tint (card blob / soft background). Used **only** to represent that discipline — never decoratively.
- **Secretarial Navy** (`#1c314f`) · tint `#eaf1fb`
- **Accounting Sage** (`#799b91`) · tint `#eef6f2`
- **Legal Plum** (`#584361`) · tint `#f3ecfa`
- **Tax Rust** (`#c5652d`) · tint `#fbe9dd`
- **HR Coral** (`#ef8270`) · tint `#fdeeec`
- **Marketing Gold** (`#e4a747`) · tint `#fdf2e0`

### Neutral
- **Ink** (`#1d2330`): Headings and the primary dark surface.
- **Ink-2** (`#3a3f4b`): Body copy and emphasis; the default text color on paper.
- **Slate** (`#5d626d`): Muted supporting text, descriptions, nav links at rest.
- **Slate-2** (`#868b94`): Subtle captions, small overlines, placeholder-adjacent text.
- **Paper** (`#faf8f4`): The warm-ivory page ground and input fill.
- **Paper-2 / Paper-3** (`#f3f0e9` / `#ebe7de`): Sunken sections, hover fills, active-nav pill.
- **White** (`#ffffff`): Card and raised-surface fill.
- **Line / Line-strong** (`#e7e2d8` / `#d6d0c4`): Hairline dividers and card borders / input strokes.

### Named Rules
**The One Action Rule.** Ember is the only color permitted on a primary call-to-action. If two buttons on a screen are both orange, one of them is wrong. Ember's scarcity is what makes it read as *the* next step.

**The Service-Color Rule.** The six pillar colors are semantic, not decorative. A color from the spectrum appears only when its service is the subject (its card, icon, link, or tint). Never borrow Legal Plum because a section "needs purple."

**The Rainbow Hairline Rule.** The 3px six-color gradient rule belongs at the top of the page, under the header, once. It is the brand signature — do not repeat it as a section divider or scatter it decoratively.

**The Readable-Shade Rule.** The base brand and service colors (Ember, Harbor, and the lighter pillars — sage, rust, coral, gold) are calibrated for *fills, tints, and large art* — they do **not** meet AA as small text on white. Any meaningful text, link, icon, tag, eyebrow, or stat number uses the darker readable shade of the same hue: `--od-orange-700` / `--od-teal-700` and `--od-<svc>-text` (e.g. `--od-mkt-text`, `--od-hr-text`). Ember and Harbor button fills stay bright but carry a dark-ink label. Same hue, readable step — never the raw base as small text.

## 3. Typography

**Display Font:** Poppins (with system-ui, -apple-system, Segoe UI fallback)
**Body Font:** Open Sans (with system-ui, -apple-system, Segoe UI fallback)
**Label/Mono Font:** DM Mono is available for figures/code but is rarely surfaced.

**Character:** A geometric display sans paired with a humanist workhorse body — Poppins brings confident, rounded authority to headings; Open Sans keeps long-form copy plain-spoken and highly legible. The contrast is on the weight and humanist/geometric axis, not two look-alike sans.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 4.4vw, 4rem)`, 1.06, `-0.025em`): Hero headline only. One per page.
- **Headline** (800, `clamp(2.25rem, 1.4rem + 2.9vw, 3.25rem)`, 1.12, `-0.02em`): Section headings.
- **Title** (700, `1.375rem`/22px, 1.25, `-0.01em`): Card and pricing-plan titles.
- **Body** (400, `1.0625rem`/17px, 1.65): Default prose on paper, in Ink-2. Keep prose columns within a ~680px measure (~65–75ch).
- **Label** (700, `0.8125rem`/13px, `0.06em`, UPPERCASE): Field labels and small trust overlines.

### Named Rules
**The Weight-Over-Size Rule.** Hierarchy is carried by Poppins weight (800 headings vs 400/600 body), not by ever-larger type. The display ceiling is ~4rem; the page states its confidence, it doesn't shout.

**The Plain-Speech Rule.** Body copy is Open Sans at readable size with a 1.65 line-height. Clarity is a premium signal here — never set long copy in the display face or in all-caps.

## 4. Elevation

Flat by default, warm by nature. Surfaces rest flat on paper, separated by hairlines (`#e7e2d8`) rather than shadow. Depth is a **response to interaction**, not decoration: cards and buttons lift on hover with a soft `translateY(-2px to -4px)` and a deeper shadow. All shadows are tinted with warm ink (`rgba(29,35,48,…)`) at low opacity and wide spread — never harsh black — and primary CTAs additionally carry an Ember-tinted glow.

### Shadow Vocabulary
- **Resting card** (`box-shadow: 0 1px 2px rgba(29,35,48,0.05)` / `0 2px 6px rgba(29,35,48,0.06)`): Barely-there seat on the page (xs / sm).
- **Hover lift** (`box-shadow: 0 24px 60px rgba(29,35,48,0.12)`): The lifted state for interactive cards (lg).
- **Brand glow** (`box-shadow: 0 14px 30px rgba(238,118,50,0.30)`): Ember-tinted, reserved for primary buttons and featured pricing.
- **Header blur** (`backdrop-filter: blur(14px)` over `rgba(250,248,244,0.88)`): The sticky header's frosted paper — the one sanctioned use of blur.

### Named Rules
**The Flat-At-Rest Rule.** A surface earns a shadow only when the user is about to interact with it. Static decorative shadows and glass panels are prohibited; the header blur is the single exception.

## 5. Components

### Buttons
- **Shape:** Fully pill (`border-radius: 999px`), 1.5px transparent border, weight 700, min-height 44px at every size (tap-target floor).
- **Primary:** Ember fill with **dark-ink label** (`#1d2330`, ~5.2:1, AA), Ember glow (`13px 26px` at md). Hover keeps the bright fill and leans on `translateY(-2px)` + a stronger glow (darkening the fill would drop the ink label below AA).
- **Secondary:** Harbor fill, **dark-ink label** (same reasoning — teal is a light fill), soft shadow. Hover lifts + deepens shadow.
- **Dark / Outline / Ghost / On-dark:** Ink fill; transparent with `line-strong` border; transparent with paper-2 hover; translucent-white for dark sections.
- **Focus:** `box-shadow: 0 0 0 3px` Ember-at-40% ring (outline suppressed in favor of the ring).

### Cards
- **Corner Style:** Extra-large (`border-radius: 32px`; service and pricing cards).
- **Background:** White on paper.
- **Shadow Strategy:** Flat-at-rest (xs), lift to lg on hover with `translateY(-4px)`. See Elevation.
- **Border:** 1px hairline `#e7e2d8`.
- **Internal Padding:** ~20–32px. Service cards carry a per-pillar tinted "blob" behind the illustration and a matching colored "Learn more ›" link whose gap widens on hover.

### Inputs / Fields
- **Style:** Paper fill (`#faf8f4`), 1.5px `line-strong` border, `border-radius: 16px`, `12px 16px` padding. Uppercase 13px label above, Ember asterisk for required.
- **Focus:** Border shifts to Ember, background to white, `0 0 0 3.5px rgba(238,118,50,0.15)` ring.
- **Hover:** Border shifts to Harbor teal.
- **Checkbox:** 20px, 6px radius; checked fills Ember.

### Navigation
- **Style:** Sticky frosted-paper header (`blur(14px)`, 88% ivory), 72px tall, with the rainbow hairline beneath. Wordmark is Poppins 800 with an Ember dot.
- **Links:** Open Sans 600, 15.5px, Slate at rest → Ink on hover; active link gets an Ink label on a `paper-3` pill.
- **Mobile (≤768px):** Nav collapses to a 44px hamburger; links drop into a paper sheet. Closed sheet must be removed from the tab order.

### Signature: The Six-Pillar System
The rainbow header hairline, the hero's layered multi-radial glow (all six pillar tints bleeding in from the edges), and the per-service tinted card blobs are the brand's distinctive custom patterns. `src/data/pillars.js` is the single source of pillar order and labels — keep any new per-service surface driven by it.

## 6. Do's and Don'ts

### Do:
- **Do** author against the `--od-*` token namespace in `app/src/styles/tokens/od.css` — the single source of truth for color, type, spacing, radii, shadow, and motion. There is no legacy token layer; never introduce a parallel one.
- **Do** use Ember as the one action color, on ≤1 primary CTA per view (The One Action Rule).
- **Do** keep the six pillar colors semantic — a service color appears only where that service is the subject (The Service-Color Rule).
- **Do** ground everything on warm ivory paper (`#faf8f4`); reserve pure white for cards and raised surfaces.
- **Do** drive hierarchy with Poppins weight, capping display at ~4rem.
- **Do** keep surfaces flat at rest and let them lift on hover with warm-tinted, low-opacity shadows.
- **Do** hold body text at Ink-2 (`#3a3f4b`) on paper for a comfortable ≥4.5:1 contrast, and keep prose within ~680px.
- **Do** give every interactive control a ≥44px tap target and a visible Ember focus ring.

### Don't:
- **Don't** ship the **generic-corporate template** — no stock-photo handshakes, no blue-gradient SaaS theme, no faceless big-firm blandness.
- **Don't** slide into **discount-services** energy — no loud pricing banners, no clutter, no budget-marketplace look.
- **Don't** adopt **techy-SaaS costume** — no dark-mode-by-default, no neon gradients, no product-feature jargon in the copy.
- **Don't** revert to the **stuffy old-fashioned legal** look — no dusty serif faces, no dense text walls, no cold formality.
- **Don't** repeat or scatter the rainbow hairline; it belongs once, under the header (The Rainbow Hairline Rule).
- **Don't** set muted Slate on a colored or tinted background where it drops below 4.5:1 — use Ink-2 or a darker step of the background's own hue.
- **Don't** use gradient text, decorative glassmorphism (the header blur is the sole exception), or colored side-stripe borders.
