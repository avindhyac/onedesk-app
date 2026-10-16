import { SERVICE_PAGE_CONTENT } from "./servicePageContent";

// Canonical service metadata for cards/navigation and /services/:slug pages.
// Secretarial copy is maintained below; other detail copy comes from
// services-sections.md, transcribed in servicePageContent.js.
export const SERVICE_DETAIL_ENABLED = true;

export const SERVICES = [
  {
    key: "sec",
    slug: "secretarial",
    char: "secretarial",
    icon: "lucide:building-2",
    title: "OneDesk Secretarial",
    tagline: "Structure your business for what’s next. ",
    desc: "From company incorporation and annual returns to statutory records and resolutions, we keep your corporate obligations in order.",
    points: [
      "Company formation & EIN",
      "Registered agent in all 50 states",
      "Annual reports & state filings",
      "Cap table & board minutes",
    ],
    detail: {
      intro:
        "Setting up and maintaining a company involves more than registration. From incorporation to statutory compliance to changes in ownership and corporate structure, OneDesk provides the support you need to keep your business properly structured and up to date. ",
      timeline: {
        eyebrow: "Company Incorporation",
        title: "From name to a company",
        intro: "Setting up and maintaining a company involves more than registration. From incorporation to statutory compliance to changes in ownership and corporate structure, OneDesk provides the support you need to keep your business properly structured and up to date.",
        flow: ["Select the name", "Submit for approval", "Apply for incorporation", "Register", "Ready"],
        steps: [
          {
            kicker: "Company name",
            title: "Choose with confidence",
            body: "You choose your preferred name. We check its availability and guide you on how to submit the name correctly to the Registrar of Companies (ROC), helping reduce the risk of rejection or resubmission. We then manage the name reservation process for you.",
            image: new URL("../assets/services/Corporate/Asset 16@4x.webp", import.meta.url).href,
          },
          {
            kicker: "Company structure",
            title: "Set up your company the right way",
            body: "We prepare the required incorporation documents and put the right ownership, directors, company secretary and share capital structure in place.",
            image: new URL("../assets/services/Corporate/Asset 15@4x.webp", import.meta.url).href,
          },
          {
            kicker: "Register with the Registrar of Companies",
            title: "Submit & incorporate",
            body: "We submit the incorporation documents to the Registrar of Companies and complete the required Beneficial Ownership filings and declarations.",
            image: new URL("../assets/services/Corporate/Asset 13@4x.webp", import.meta.url).href,
          },
          {
            title: "Receive your legal documents",
            body: "Once the incorporation is approved, we finalise your corporate records and provide your completed incorporation documents.",
            image: new URL("../assets/services/Corporate/Asset 14@4x.webp", import.meta.url).href,
          },
        ],
        closing: "From name to company\nwe handle the details in between",
        nextLabel: "Ongoing Secretarial Support",
      },
      whyEyebrow: "Company structure",
      whyTitle: "Why a Private Limited Company?",
      whySubtitle: "A structure built for what comes next",
      whyBody:
        "A Private Limited Company provides a formal structure for businesses looking to operate, grow and bring in new shareholders or investors.",
      whyItems: [
        {
          title: "Limited liability",
          body: "The company's liabilities are generally separate from the personal assets of its shareholders, subject to applicable law.",
        },
        {
          title: "Separate legal identity",
          body: "The company has its own legal identity, separate from its shareholders and directors.",
        },
        {
          title: "Built for growth",
          body: "A clear shareholding structure provides a framework for bringing in investors, shareholders or strategic partners.",
        },
        {
          title: "Greater credibility",
          body: "A formal corporate structure can support your relationships with banks, investors, suppliers and other business partners.",
        },
      ],
      whyClosing:
        "We prepare the required incorporation documents and put the right ownership, directors, company secretary and share capital structure in place.",
      sections: [
        {
          heading: "Company Incorporation",
          body: "From the initial name search to incorporation and post-incorporation requirements.",
          points: [
            "Company name search and reservation",
            "Preparation of incorporation documents",
            "Registration with the Registrar of Companies",
            "Appointment of directors and company secretary",
            "Shareholder and share capital structuring",
            "Articles of Association",
            "Certificate of Incorporation",
            "Post-incorporation compliance guidance",
          ],
        },
        {
          heading: "Corporate Governance & Secretarial Compliance",
          body: "Keeping your company's records, filings and governance requirements up to date.",
          points: [
            "Maintenance of statutory registers and company records",
            "Board and shareholder resolutions",
            "Annual return preparation and filing",
            "Changes to directors and company secretaries",
            "Share transfers and allotments",
            "Changes to registered office and company particulars",
            "Amendments to Articles of Association",
            "Board and shareholder meeting minutes",
            "Corporate changes and related Registrar filings",
          ],
        },
        {
          heading: "Capital Transactions & Restructuring",
          body: "Supporting changes to your ownership, share capital and corporate structure.",
          points: [
            "Share issues and allotments",
            "Share transfers",
            "Changes in shareholding",
            "Increase or reduction of stated capital",
            "Capital restructuring",
            "Changes to shareholder rights",
            "Local and foreign investor entry",
            "Corporate approvals and documentation",
            "Statutory and Beneficial Ownership filings",
          ],
        },
        {
          heading: "Banking & Regulatory Liaison",
          body: "Helping you manage the corporate documentation required when dealing with banks and financial institutions.",
          points: [
            "Bank account opening documentation",
            "Board resolutions and certified corporate documents",
            "KYC and Beneficial Ownership documentation",
            "Authorised signatory changes",
            "Bank mandate documentation",
            "Liaison with banking institutions",
            "Capital deposit confirmations, where applicable",
            "Regulatory and compliance documentation",
          ],
        },
      ],
      approach:
        "Good governance isn't a formality, it's the structure everything else stands on. We build it in from day one and keep it there.",
    },
  },
  {
    key: "leg",
    slug: "legal",
    char: "legal",
    icon: "lucide:scale",
    title: "OneDesk Legal",
    tagline: "Counsel on call, not on the clock.",
    desc: "Practical legal support for contracts, agreements, compliance and everyday business decisions.",
    points: [
      "Contract drafting & review",
      "Compliance & policies",
      "Trademark & IP basics",
      "On-demand legal Q&A",
    ],
    detail: SERVICE_PAGE_CONTENT.leg,
  },
  {
    key: "tax",
    slug: "tax",
    char: "tax",
    icon: "lucide:percent",
    title: "OneDesk Tax",
    tagline: "Every filing, every deduction.",
    desc: "Tax registrations, returns and ongoing advisory, helping you meet local obligations, plan ahead and avoid costly surprises.",
    points: [
      "Federal & state returns",
      "Sales tax & nexus",
      "Quarterly estimates",
      "Year-round tax planning",
    ],
    detail: SERVICE_PAGE_CONTENT.tax,
  },
  {
    key: "acc",
    slug: "accounting",
    char: "accounting",
    icon: "lucide:calculator",
    title: "OneDesk Books",
    tagline: "Clear books. Better decisions.",
    desc: "Accurate bookkeeping, internal audits, and financial reporting that give you a clear view of performance, cash flow and what comes next.",
    points: [
      "Monthly bookkeeping",
      "Payroll & expense management",
      "Investor-ready financials",
      "Dedicated accountant",
    ],
    detail: SERVICE_PAGE_CONTENT.acc,
  },
  {
    key: "hr",
    slug: "hr",
    char: "hr",
    icon: "lucide:users",
    title: "OneDesk People",
    tagline: "Hire well. Build better teams.",
    desc: "From recruitment and onboarding to payroll support, policies and employee administration, we help you build a workplace that runs smoothly.",
    points: [
      "Hiring & onboarding",
      "Benefits administration",
      "Handbooks & policies",
      "PTO & compliance",
    ],
    detail: SERVICE_PAGE_CONTENT.hr,
  },
  {
    key: "mkt",
    slug: "marketing",
    char: "marketing",
    icon: "lucide:megaphone",
    title: "OneDesk Marketing",
    tagline: "You’ve built the product. We’ll build the audience",
    desc: "Strategy, branding, content and campaigns built around clear business goals, helping you reach the right audience and turn attention into growth.",
    points: [
      "Branding & identity",
      "Web development & SEO",
      "Content & campaigns",
      "Performance & ROI reporting",
    ],
    detail: SERVICE_PAGE_CONTENT.mkt,
  },
];

// Existing per-pillar illustrations, ordered to match the current service rows.
// Explicit URLs keep unused/older artwork out of the production build.
const SECTION_IMAGES = {
  sec: [
    new URL("../assets/services/Corporate/Asset 20.webp", import.meta.url).href,
    new URL("../assets/services/Corporate/Asset 21.webp", import.meta.url).href,
    new URL("../assets/services/Corporate/Asset 22.webp", import.meta.url).href,
    new URL("../assets/services/Corporate/Asset 24.webp", import.meta.url).href,
  ],
  leg: [
    new URL("../assets/services/Legal/Asset 28.webp", import.meta.url).href,
    new URL("../assets/services/Legal/Asset 30.webp", import.meta.url).href,
    new URL("../assets/services/Legal/Asset 29.webp", import.meta.url).href,
    new URL("../assets/services/Legal/Asset 31.webp", import.meta.url).href,
  ],
  tax: [
    new URL("../assets/services/Tax/tax_character_clipboard.webp", import.meta.url).href,
    new URL("../assets/services/Tax/tax_character_calculator_desk.webp", import.meta.url).href,
    new URL("../assets/services/Tax/tax_character_desk_risk_plan.webp", import.meta.url).href,
    new URL("../assets/services/Tax/tax_character_presentation.webp", import.meta.url).href,
  ],
  acc: [
    new URL("../assets/services/Accounting/Asset 13@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/Asset 14@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/Asset 15@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/Asset 21@4x.webp", import.meta.url).href,
  ],
  hr: [
    new URL("../assets/services/HR/OneDesk_HR_01_meeting.webp", import.meta.url).href,
    new URL("../assets/services/HR/OneDesk_HR_02_filing.webp", import.meta.url).href,
    new URL("../assets/services/HR/OneDesk_HR_03_laptop.webp", import.meta.url).href,
    new URL("../assets/services/HR/OneDesk_HR_04_org_chart.webp", import.meta.url).href,
  ],
  mkt: [
    new URL("../assets/services/Marketing/OneDesk_character_replacement_1 (1).webp", import.meta.url).href,
    new URL("../assets/services/Marketing/OneDesk_character_replacement_4 (1).webp", import.meta.url).href,
    new URL("../assets/services/Marketing/Asset 32.webp", import.meta.url).href,
    new URL("../assets/services/Marketing/OneDesk_character_replacement_2 (1).webp", import.meta.url).href,
  ],
};

// October artwork separates onboarding/timeline illustrations from service rows.
// Keep the replaced basenames, scoped under timeline/ when they previously shared a file.
const TIMELINE_IMAGES = {
  acc: [
    new URL("../assets/services/Accounting/timeline/Asset 13@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/timeline/Asset 14@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/timeline/Asset 15@4x.webp", import.meta.url).href,
    new URL("../assets/services/Accounting/timeline/Asset 21@4x.webp", import.meta.url).href,
  ],
  leg: [
    new URL("../assets/services/Legal/timeline/Asset 28.webp", import.meta.url).href,
    new URL("../assets/services/Legal/timeline/Asset 30.webp", import.meta.url).href,
    new URL("../assets/services/Legal/timeline/Asset 29.webp", import.meta.url).href,
    new URL("../assets/services/Legal/timeline/Asset 31.webp", import.meta.url).href,
  ],
  tax: [
    new URL("../assets/services/Tax/timeline/tax_character_clipboard.webp", import.meta.url).href,
    new URL("../assets/services/Tax/timeline/tax_character_calculator_desk.webp", import.meta.url).href,
    new URL("../assets/services/Tax/timeline/tax_character_desk_risk_plan.webp", import.meta.url).href,
    new URL("../assets/services/Tax/timeline/tax_character_presentation.webp", import.meta.url).href,
  ],
  hr: [
    new URL("../assets/services/HR/timeline/OneDesk_HR_01_meeting.webp", import.meta.url).href,
    new URL("../assets/services/HR/timeline/OneDesk_HR_02_filing.webp", import.meta.url).href,
    new URL("../assets/services/HR/timeline/OneDesk_HR_03_laptop.webp", import.meta.url).href,
    new URL("../assets/services/HR/timeline/OneDesk_HR_04_org_chart.webp", import.meta.url).href,
  ],
  mkt: [
    new URL("../assets/services/Marketing/timeline/OneDesk_character_replacement_1 (1).webp", import.meta.url).href,
    new URL("../assets/services/Marketing/timeline/OneDesk_character_replacement_4 (1).webp", import.meta.url).href,
    new URL("../assets/services/Marketing/timeline/Asset 32.webp", import.meta.url).href,
    new URL("../assets/services/Marketing/timeline/OneDesk_character_replacement_2 (1).webp", import.meta.url).href,
  ],
};

// Map over supplied content rather than imposing a fixed section/step count.
for (const service of SERVICES) {
  const images = SECTION_IMAGES[service.key] ?? [];
  const timelineImages = TIMELINE_IMAGES[service.key] ?? [];
  service.detail.sections.forEach((section, i) => {
    section.image = images[i] ?? null;
  });
  service.detail.timeline?.steps.forEach((step, i) => {
    step.image ??= timelineImages[i] ?? null;
  });
}

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
