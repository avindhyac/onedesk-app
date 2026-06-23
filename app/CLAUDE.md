# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Run all commands from `app/`:

- `npm install` — install dependencies
- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build (outputs to `dist/`)
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint over the project

There is no test suite configured.

## Architecture

This is a single-page React 19 + Vite marketing site for OneDesk (an all-in-one business services provider — legal, tax, accounting, HR, company secretarial, and marketing). It was ported from a Claude Design `.dc.html` export into a plain React/Vite app — there is no design-system runtime dependency (`_ds_bundle.js`); DS components were reimplemented as plain React + CSS.

**Page composition** (`src/App.jsx`): the page is a flat, ordered list of section components rendered top to bottom — `Header`, `Hero`, `Problem`, `Solution`, `Services`, `Benefits`, `Audience`, `Marketplace`, `Process`, `Stats`, `Testimonials`, `FinalCta`, `Footer`. Each section lives in `src/sections/<Name>.jsx` paired with a co-located `<Name>.css` file using BEM-ish class names (e.g. `.services__card`, `.testimonial-card`). There is no routing — this is a single static page.

**Design tokens & the 6-pillar color system** (`src/styles/global.css` + `src/styles/tokens/*.css`): six CSS custom-property triples encode OneDesk's six service "pillars," each with a base/light/mid shade:
- `--c-sec` (Secretarial, navy), `--c-acc` (Accounting, sage), `--c-leg` (Legal, purple), `--c-tax` (Tax, rust), `--c-hr` (HR, coral), `--c-mkt` (Marketing, gold)

Sections that render per-pillar cards (Problem, Services, Benefits, Audience, Marketplace) look up these vars by color key (e.g. `var(--c-${color}-l)` for a pastel tint background) rather than hardcoding hex values. `src/data/pillars.js` defines the canonical pillar metadata (`PILLARS`, `TEAM_ORDER`) used to keep pillar ordering/labels consistent across sections.

**Card visual language**: cards across Problem/Services/Benefits/Audience/Marketplace/Testimonials intentionally share one visual language — flat pastel-tint backgrounds (no borders), large border-radius (~24-28px), generous padding, and hover-only shadow lift. When adding a new card-bearing section, match this pattern rather than introducing a new card style. Services and Marketplace cards additionally carry a colored "Learn more ›" chevron link; other sections deliberately omit it (no link target exists for those cards).

**Shared components** (`src/components/`):
- `Button.jsx` — variant/size-driven button (`variant`: primary/dark/secondary/outline/ghost/on-dark; `size`: sm/md/lg), polymorphic via the `as` prop (e.g. `as="a"` for link-styled CTAs).
- `Eyebrow.jsx` — small uppercase label-with-dot used above section headings, with `tone` variants (ember/harbor/muted/on-dark).
- `CountUp.jsx` — IntersectionObserver-driven count-up animation used in the Stats section; animates once when scrolled into view.

**Data files** (`src/data/`): `pillars.js`, `characters.js` (per-pillar illustration imports), `logos.js`, `testimonials.js` (`ROW_1`/`ROW_2` feeding the two oppositely-scrolling testimonial carousel rows in `Testimonials.jsx`, animated via the `odScrollL`/`odScrollR` keyframes in `global.css`).
