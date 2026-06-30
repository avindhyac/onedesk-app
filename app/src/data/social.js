/* ===========================================================================
   OneDesk · Social + contact links - single source of truth.
   Footer and ContactPage both read from here, so a URL changes in one place.
   WhatsApp is a placeholder until the Business account exists - swap `href`
   for a wa.me link (e.g. https://wa.me/94770000000) and set external: true.
   =========================================================================== */

export const CONTACT_EMAIL = "hello@onedesk.one";

export const SOCIAL = {
  whatsapp: { label: "WhatsApp", href: "#", external: false }, // TODO: set wa.me link
  instagram: { label: "Instagram", href: "https://www.instagram.com/onedesk.one/", external: true },
  facebook: { label: "Facebook", href: "https://www.facebook.com/902015689671880", external: true },
  email: { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false },
};

/* Spread onto an anchor to get correct new-tab + security attrs for externals. */
export const linkAttrs = (s) =>
  s.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
