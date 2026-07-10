import secretarial from "../assets/char/Home/OD-Web-16.webp";
import legal from "../assets/char/Home/OD-Web-17.webp";
import tax from "../assets/char/Home/OD-Web-18.webp";
import accounting from "../assets/char/Home/OD-Web-19.webp";
import hr from "../assets/char/Home/OD-Web-20.webp";
import marketing from "../assets/char/Home/OD-Web-21.webp";

// Each top-down illustration was drawn leaning toward one side of the desk
// (chair-back baked into the art), so seats are grouped by which way the
// character already reaches rather than by pillar order.
export const HERO_DESK_SEATS = {
  left: [
    { key: "secretarial", src: secretarial },
    { key: "tax", src: tax },
    { key: "hr", src: hr },
  ],
  right: [
    { key: "legal", src: legal },
    { key: "accounting", src: accounting },
    { key: "marketing", src: marketing },
  ],
};
