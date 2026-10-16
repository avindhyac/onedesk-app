# Service detail pages

All `/services/:slug` pages use `components/ServiceDetailTemplate.jsx`; no service-specific JSX is needed.

Accounting, Legal, Tax, Marketing and HR detail copy is transcribed from the repository-root `services-sections.md` into `servicePageContent.js`. Update that content module when the reference copy changes. `services.js` supplies shared metadata and per-service artwork, and retains the existing Secretarial content. Card/navigation taglines remain separate from detail-page headlines.

Shared layout order: hero → approach band → optional timeline → optional overview → alternating image/copy sections → optional benefits grid → related services → CTA.

- Hero: `title`, `detail.headline` (falls back to `tagline`), `icon`, `char`, `detail.intro`.
- Approach band: `detail.approach`.
- Overview (optional): `detail.overviewTitle`, `detail.overviewBody`.
- Content rows: `detail.sections[]` with `heading`, `body`, `points`, and `image` (currently attached from `SECTION_IMAGES`). Any number of rows is supported.
- Benefits (optional): `whyEyebrow`, `whyTitle`, `whySubtitle`, `whyBody`, `whyItems: [{ title, body }]`, optional `whyClosing` and `whyDisclaimer` inside `detail`. Legal and Tax disclaimers are preserved from the reference content.
- CTA overrides (optional): `detail.cta: { title, subtitle, label, to }`.
- Colors come from the service's pillar `key`.

## Timeline

Add `detail.timeline` to any service:

```js
timeline: {
  eyebrow: "Your process",
  title: "How we work",
  intro: "Service-specific introduction.",
  steps: [
    {
      id: "discovery", // optional stable key
      kicker: "Discovery", // optional
      title: "Understand your needs",
      body: "Service-specific description.",
      image: new URL("../assets/services/YourFolder/image.webp", import.meta.url).href,
      imageAlt: "", // optional; empty for decorative illustrations
      flowLabel: "Discover", // optional summary label
    },
    // Add or remove as many steps as needed.
  ],
  closing: "Optional closing text.\nLine breaks are preserved.",
  nextLabel: "Optional label introducing the following sections",
},
```

The summary defaults to the steps' `flowLabel`, `kicker`, or `title`. Supply `flow: ["Label", ...]` for an independent summary (as on Secretarial), or `flow: []` to hide it. Numbering, alternating sides, connectors, and final-step styling are automatic. An absent timeline or empty `steps` array renders nothing. One-step timelines have no connector. Missing images are supported.

All six services now provide timeline and benefits content. October artwork is mapped separately in `SECTION_IMAGES` and `TIMELINE_IMAGES` in `services.js`; Secretarial's existing explicit timeline URLs are preserved. Timeline files retain the original replaced basenames under a `timeline/` subfolder where rows and steps previously shared one image. An explicit `step.image` overrides these mappings. The shared timeline retains its legacy `secretarial-incorp` CSS prefix solely to preserve the original design.
