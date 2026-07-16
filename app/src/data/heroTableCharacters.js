import secretarial from "../assets/char/Home/OD-Web-32.webp";
import legal from "../assets/char/Home/OD-Web-33.webp";
import accounting from "../assets/char/Home/OD-Web-34.webp";
import marketing from "../assets/char/Home/OD-Web-35.webp";
import tax from "../assets/char/Home/OD-Web-36.webp";
import hr from "../assets/char/Home/OD-Web-37.webp";

// Waist-up illustrations seated at the round table, grouped by which side
// each character's pose/gesture naturally reaches toward.
export const HERO_TABLE_SEATS = {
  left: [
    { key: "accounting", label: "Accounting", src: accounting },
    { key: "secretarial", label: "Company secretarial", src: secretarial },
    { key: "tax", label: "Tax", src: tax },
  ],
  right: [
    { key: "marketing", label: "Marketing", src: marketing },
    { key: "legal", label: "Legal", src: legal },
    { key: "hr", label: "HR", src: hr },
  ],
};
