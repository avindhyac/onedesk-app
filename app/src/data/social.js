/* ===========================================================================
   OneDesk · Social + contact links - single source of truth.
   Footer and ContactPage both read from here, so a URL changes in one place.
   WhatsApp uses international format for wa.me links.
   =========================================================================== */
const CONTACT_EMAIL = "hello@onedesk.one";

export const SOCIAL = {
  whatsapp: { label: "WhatsApp", href: "https://wa.me/94775694203", external: true },
  instagram: {
    label: "Instagram",
    href: "https://www.instagram.com/onedesk.one/",
    external: true,
  },
  facebook: {
    label: "Facebook",
    href: "https://www.facebook.com/902015689671880",
    external: true,
  },
  email: { label: "Email", href: `mailto:${CONTACT_EMAIL}`, external: false },
};

/* Spread onto an anchor to get correct new-tab + security attrs for externals. */
export const linkAttrs = (s) =>
  s.external ? { target: "_blank", rel: "noopener noreferrer" } : {};
