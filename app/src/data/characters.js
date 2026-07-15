import charSecretarial from "../assets/char/secretarial.webp";
import charTax from "../assets/char/tax.webp";
import charAccounting from "../assets/char/accounting.webp";
import charHr from "../assets/char/hr.webp";
import charLegal from "../assets/char/legal.webp";
import charMarketing from "../assets/char/marketing.webp";
import charSecretarialSeated from "../assets/char/secretarial-seeated.webp";
import charTaxSeated from "../assets/char/tax-seated.webp";
import charAccountingSeated from "../assets/char/accounting-seated.webp";
import charHrSeated from "../assets/char/hr-seated.webp";
import charLegalSeated from "../assets/char/legal-seated.webp";
import charMarketingSeated from "../assets/char/marketing-seated.webp";

export const characters = {
  secretarial: {
    stand: charSecretarial,
    sit: charSecretarialSeated,
  },
  tax: {
    stand: charTax,
    sit: charTaxSeated,
  },
  accounting: {
    stand: charAccounting,
    sit: charAccountingSeated,
  },
  hr: {
    stand: charHr,
    sit: charHrSeated,
  },
  legal: {
    stand: charLegal,
    sit: charLegalSeated,
  },
  marketing: {
    stand: charMarketing,
    sit: charMarketingSeated,
  },
};
