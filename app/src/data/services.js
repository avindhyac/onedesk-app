// Canonical service data — single source of truth for the homepage grid,
// the /services overview, and the /services/:slug detail pages.
// Detail copy is derived from OneDesk_Services.md (the service-pillar reference doc).

// The /services/:slug detail pages are hidden for now. Flip this to `true` to
// re-enable them everywhere: the route, the homepage cards, the ServicesPage
// tagline links, and the "Learn more" buttons all read from this flag.
export const SERVICE_DETAIL_ENABLED = true;

// Section artwork lives in src/assets/services/<Folder>/*.webp.
// Reference the selected replacement files directly so older images in the same
// folders are not pulled into the production build by a broad eager glob.

export const SERVICES = [
  {
    key: "sec",
    slug: "secretarial",
    char: "secretarial",
    icon: "lucide:building-2",
    title: "Corporate Secretarial",
    tagline: "Set up right. Stay compliant.",
    desc: "From company incorporation and annual returns to statutory records and resolutions, we keep your corporate obligations in order.",
    points: [
      "Company formation & EIN",
      "Registered agent in all 50 states",
      "Annual reports & state filings",
      "Cap table & board minutes",
    ],
    detail: {
      intro:
        "A sound corporate structure is the foundation of every sustainable business. We handle structured incorporation and ongoing secretarial support, so you stay compliant and transparent from day one through growth.",
      sections: [
        {
          heading: "Company Incorporation",
          body: "We help you set up the right legal entity in Sri Lanka, including private limited companies, with careful attention to structure and strategy.",
          points: [
            "Shareholding structure",
            "Director composition",
            "Capitalization strategy",
            "Governance requirements",
            "Regulatory classification",
            "Foreign investment implications",
          ],
        },
        {
          heading: "Corporate Governance & Secretarial Compliance",
          body: "Once you're incorporated, compliance becomes continuous. We keep it on track with a structured compliance calendar.",
          points: [
            "Statutory registers",
            "Board & shareholder resolutions",
            "Annual return filings",
            "Director appointments & resignations",
            "Share transfers & allotments",
            "Constitutional amendments",
          ],
        },
        {
          heading: "Capital Transactions & Restructuring",
          body: "As your business evolves, we advise on and implement changes to your capital structure, prepared with tax and accounting alignment in mind.",
          points: [
            "Share issuances & transfers",
            "Capital increases & reorganizations",
            "Changes in shareholder arrangements",
            "Entry of strategic or foreign investors",
          ],
        },
        {
          heading: "Foreign Investor & Cross-Border Entry",
          body: "For investors entering Sri Lanka, and Sri Lankan companies expanding to the UAE or Singapore, we coordinate with regional partners for seamless structuring.",
          points: [
            "Investment vehicles",
            "Regulatory approvals",
            "Local compliance obligations",
            "Cross-jurisdiction coordination",
          ],
        },
        {
          heading: "Banking & Regulatory Liaison",
          body: "Opening a bank account requires structured documentation and beneficial ownership transparency. We handle the coordination.",
          points: [
            "Board resolutions & certified documentation",
            "KYC & beneficial ownership compilation",
            "Liaison with banking institutions",
            "Capital deposit confirmations",
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
    title: "Legal",
    tagline: "Counsel on call, not on the clock.",
    desc: "Practical legal support for contracts, agreements, compliance and everyday business decisions.",
    points: [
      "Contract drafting & review",
      "Compliance & policies",
      "Trademark & IP basics",
      "On-demand legal Q&A",
    ],
    detail: {
      intro:
        "Contracts, governance and regulatory obligations shape more than compliance, they shape commercial stability. We advise across your lifecycle, from incorporation through expansion and, where needed, dispute management.",
      sections: [
        {
          heading: "Commercial Contracting",
          body: "We draft, review and negotiate the agreements your business runs on, prioritizing clear risk allocation and enforceability.",
          points: [
            "Shareholder agreements",
            "Joint venture arrangements",
            "Supply & distribution agreements",
            "Service & consultancy contracts",
            "NDAs & confidentiality agreements",
          ],
        },
        {
          heading: "Regulatory Compliance & Governance",
          body: "We provide structured advisory across the layered regulatory environments businesses operate in.",
          points: [
            "Corporate law compliance",
            "Licensing & regulatory approvals",
            "Director duties & governance obligations",
            "Board advisory support",
          ],
        },
        {
          heading: "Employment & HR Legal Frameworks",
          body: "Employment relationships carry legal weight. We help you get the documentation right, aligned with payroll and tax.",
          points: [
            "Employment contracts",
            "HR policies & internal regulations",
            "Incentive & retention structures",
            "Disciplinary & termination processes",
          ],
        },
        {
          heading: "Dispute Strategy & Risk Mitigation",
          body: "When conflicts do arise, we bring cross-jurisdictional experience to bear.",
          points: [
            "Pre-dispute risk assessments",
            "Settlement strategy advisory",
            "Coordination with litigation & arbitration counsel",
            "Evidentiary documentation review",
          ],
        },
      ],
      approach:
        "The strongest businesses document decisions before disputes force them to. That's the discipline we bring to every contract and compliance call.",
    },
  },
  {
    key: "tax",
    slug: "tax",
    char: "tax",
    icon: "lucide:percent",
    title: "Tax",
    tagline: "Every filing, every deduction.",
    desc: "Tax registrations, returns and ongoing advisory, helping you meet local obligations, plan ahead and avoid costly surprises.",
    points: [
      "Federal & state returns",
      "Sales tax & nexus",
      "Quarterly estimates",
      "Year-round tax planning",
    ],
    detail: {
      intro:
        "Tax is a structural part of corporate planning, capital allocation and cross-border strategy. We bring the same discipline to tax that governs our legal and corporate work.",
      sections: [
        {
          heading: "Corporate Tax Structuring",
          body: "We advise on structuring your operations for clarity and predictability, especially for growing businesses and foreign investors.",
          points: [
            "Entity selection & tax implications",
            "Capital structuring",
            "Dividend planning & profit distributions",
            "Withholding tax exposure",
            "Cross-border transaction analysis",
          ],
        },
        {
          heading: "Tax Registrations & Ongoing Compliance",
          body: "We keep your statutory obligations addressed consistently, with a compliance calendar that reduces exposure to penalties.",
          points: [
            "Tax registrations & statutory enrolments",
            "Corporate income tax filing coordination",
            "Withholding tax reporting",
            "Statutory payment timelines",
          ],
        },
        {
          heading: "Cross-Border Tax Considerations",
          body: "For Sri Lankan businesses expanding abroad, and foreign investors entering Sri Lanka, we evaluate exposure early through our regional partner network.",
          points: [
            "Cross-border tax exposure",
            "Double taxation implications",
            "Structuring aligned with expansion strategy",
            "Documentation & reporting expectations",
          ],
        },
        {
          heading: "Tax Risk Assessment & Advisory",
          body: "We evaluate exposure before it becomes a liability.",
          points: [
            "Contractual arrangements",
            "Capital reorganizations",
            "Employment & compensation structures",
            "Related-party transactions",
          ],
        },
      ],
      approach:
        "Tax works best woven into how you run the business, not bolted on at filing time. That's the discipline we bring to every return and structure.",
    },
  },
  {
    key: "acc",
    slug: "accounting",
    char: "accounting",
    icon: "lucide:calculator",
    title: "Accounting",
    tagline: "Clear books. Better decisions.",
    desc: "Accurate bookkeeping, internal audits, and financial reporting that give you a clear view of performance, cash flow and what comes next.",
    points: [
      "Monthly bookkeeping",
      "Payroll & expense management",
      "Investor-ready financials",
      "Dedicated accountant",
    ],
    detail: {
      intro:
        "Financial clarity is the backbone of sound governance. We provide structured accounting and reporting designed for transparency, accuracy and regulatory alignment.",
      sections: [
        {
          heading: "Bookkeeping & Record Maintenance",
          body: "Your transactions, recorded systematically and to standard.",
          points: [
            "Monthly bookkeeping & ledger maintenance",
            "Bank & account reconciliation",
            "Accounts payable & receivable tracking",
            "Expense categorization",
          ],
        },
        {
          heading: "Financial Statements",
          body: "We coordinate the preparation of the reports you and your stakeholders rely on.",
          points: [
            "Profit & loss statements",
            "Balance sheets",
            "Cash flow statements",
            "Management accounts",
          ],
        },
        {
          heading: "Audit Coordination & Regulatory Reporting",
          body: "For entities subject to audit, we keep everything aligned and ready.",
          points: [
            "Documentation for auditors",
            "Coordination with external audit firms",
            "Statutory filing alignment",
            "Consistency between records and reporting",
          ],
        },
        {
          heading: "Financial Governance & Advisory",
          body: "Beyond reporting, we help you build the systems around it.",
          points: [
            "Internal financial controls",
            "Reporting frameworks",
            "Governance-aligned financial practices",
            "Documentation for investors or lenders",
          ],
        },
      ],
      approach:
        "Clear numbers make every other decision easier. We treat your books as a governance tool, not a monthly chore.",
    },
  },
  {
    key: "hr",
    slug: "hr",
    char: "hr",
    icon: "lucide:users",
    title: "HR",
    tagline: "Hire well. Build better teams.",
    desc: "From recruitment and onboarding to payroll support, policies and employee administration, we help you build a workplace that runs smoothly.",
    points: [
      "Hiring & onboarding",
      "Benefits administration",
      "Handbooks & policies",
      "PTO & compliance",
    ],
    detail: {
      intro:
        "Human capital drives growth, but employment relationships carry layered statutory obligations. We provide disciplined HR and payroll administration built for compliance and continuity.",
      sections: [
        {
          heading: "Employment Framework Design",
          body: "We help you build compliant, commercially sound employment structures.",
          points: [
            "End-to-end recruitment",
            "Employment agreements",
            "HR policies & internal regulations",
            "Compensation & benefit frameworks",
            "Confidentiality & non-compete protections",
          ],
        },
        {
          heading: "Payroll Administration & Statutory Compliance",
          body: "Payroll is both a financial and regulatory function, we run it as both.",
          points: [
            "Salary processing & payroll management",
            "Statutory contribution calculations",
            "Withholding & remittance coordination",
            "Record maintenance & reporting",
          ],
        },
        {
          heading: "Ongoing HR Compliance",
          body: "Employment obligations don't end at onboarding.",
          points: [
            "Probation & confirmation processes",
            "Disciplinary procedures",
            "Termination & separation documentation",
            "Statutory employee record-keeping",
          ],
        },
        {
          heading: "Workforce Structuring & Growth",
          body: "As you scale, workforce strategy has to scale with you.",
          points: [
            "Workforce planning",
            "Restructuring advisory",
            "Coordination with tax & accounting on compensation",
            "Investor due-diligence documentation",
          ],
        },
      ],
      approach:
        "Your team runs on the same discipline as the rest of your back office: compliant, continuous, and never an afterthought.",
    },
  },
  {
    key: "mkt",
    slug: "marketing",
    char: "marketing",
    icon: "lucide:megaphone",
    title: "Marketing",
    tagline: "You’ve built the product. We’ll build the audience",
    desc: "Strategy, branding, content and campaigns built around clear business goals, helping you reach the right audience and turn attention into growth.",
    points: [
      "Branding & identity",
      "Web development & SEO",
      "Content & campaigns",
      "Performance & ROI reporting",
    ],
    detail: {
      intro:
        "A business is only as strong as its ability to communicate value clearly and consistently. We build brand positioning and market visibility that holds up alongside your governance and compliance discipline.",
      sections: [
        {
          heading: "Branding",
          body: "We define how your business is seen, a coherent identity and positioning that holds up in front of customers, partners and investors alike.",
          points: [
            "Brand positioning & value proposition",
            "Visual identity & brand guidelines",
            "Messaging & tone of voice",
            "Audience & market segmentation",
            "Investor & partner-facing narrative",
          ],
        },
        {
          heading: "Web Development",
          body: "Your website is often the first due-diligence check anyone runs. We build a fast, credible digital presence that turns that first look into confidence.",
          points: [
            "Website design & build",
            "Landing & campaign pages",
            "SEO & technical foundations",
            "Analytics & tracking setup",
            "Ongoing maintenance & support",
          ],
        },
        {
          heading: "Content Marketing",
          body: "Consistent, credible content keeps you visible between conversations. We plan and produce the words and assets that carry your positioning to market.",
          points: [
            "Content strategy & calendar",
            "Copywriting & editorial",
            "Social & organic campaigns",
            "Case studies & thought leadership",
            "Email marketing & lead nurturing",
          ],
        },
        {
          heading: "Performance Marketing",
          body: "Visibility should be measurable. We run paid campaigns against clear targets and report on what they return, so every unit of spend stays accountable.",
          points: [
            "Paid search & social campaigns",
            "Audience targeting & retargeting",
            "Conversion tracking & attribution",
            "Performance dashboards",
            "ROI & spend analysis",
          ],
        },
      ],
      approach:
        "Brand isn't separate from governance, it's the story your numbers back up. We keep that story consistent everywhere it's told.",
    },
  },
];

// Per-section artwork, in the same order as each service's detail.sections.
// Uses the newly added replacement images from each src/assets/services/<Folder>/ folder.
const SECTION_IMAGES = {
  sec: [
    new URL("../assets/services/Corporate/Asset 20.webp", import.meta.url).href, // Company Incorporation
    new URL("../assets/services/Corporate/Asset 21.webp", import.meta.url).href, // Corporate Governance & Secretarial Compliance
    new URL("../assets/services/Corporate/Asset 22.webp", import.meta.url).href, // Capital Transactions & Restructuring
    new URL("../assets/services/Corporate/Asset 23.webp", import.meta.url).href, // Foreign Investor & Cross-Border Entry
    new URL("../assets/services/Corporate/Asset 24.webp", import.meta.url).href, // Banking & Regulatory Liaison
  ],
  leg: [
    new URL("../assets/services/Legal/Asset 28.webp", import.meta.url).href, // Commercial Contracting
    new URL("../assets/services/Legal/Asset 29.webp", import.meta.url).href, // Regulatory Compliance & Governance
    new URL("../assets/services/Legal/Asset 30.webp", import.meta.url).href, // Employment & HR Legal Frameworks
    new URL("../assets/services/Legal/Asset 31.webp", import.meta.url).href, // Dispute Strategy & Risk Mitigation
  ],
  tax: [
    new URL("../assets/services/Tax/tax_character_desk_risk_plan.webp", import.meta.url).href, // Corporate Tax Structuring
    new URL("../assets/services/Tax/tax_character_clipboard.webp", import.meta.url).href, // Tax Registrations & Ongoing Compliance
    new URL("../assets/services/Tax/tax_character_presentation.webp", import.meta.url).href, // Cross-Border Tax Considerations
    new URL("../assets/services/Tax/tax_character_calculator_desk.webp", import.meta.url).href, // Tax Risk Assessment & Advisory
  ],
  acc: [
    new URL("../assets/services/Accounting/Asset 13@4x.webp", import.meta.url).href, // Bookkeeping & Record Maintenance
    new URL("../assets/services/Accounting/Asset 14@4x.webp", import.meta.url).href, // Financial Statements
    new URL("../assets/services/Accounting/Asset 15@4x.webp", import.meta.url).href, // Audit Coordination & Regulatory Reporting
    new URL("../assets/services/Accounting/Asset 21@4x.webp", import.meta.url).href, // Financial Governance & Advisory
  ],
  hr: [
    new URL("../assets/services/HR/OneDesk_HR_01_meeting.webp", import.meta.url).href, // Employment Framework Design
    new URL("../assets/services/HR/OneDesk_HR_02_filing.webp", import.meta.url).href, // Payroll Administration & Statutory Compliance
    new URL("../assets/services/HR/OneDesk_HR_03_laptop.webp", import.meta.url).href, // Ongoing HR Compliance
    new URL("../assets/services/HR/OneDesk_HR_04_org_chart.webp", import.meta.url).href, // Workforce Structuring & Growth
  ],
  mkt: [
    new URL("../assets/services/Marketing/OneDesk_character_replacement_1 (1).webp", import.meta.url).href, // Branding
    new URL("../assets/services/Marketing/OneDesk_character_replacement_2 (1).webp", import.meta.url).href, // Web Development
    new URL("../assets/services/Marketing/Asset 32.webp", import.meta.url).href, // Content Marketing
    new URL("../assets/services/Marketing/OneDesk_character_replacement_4 (1).webp", import.meta.url).href, // Performance Marketing
  ],
};

// Attach the resolved artwork onto each section object once, at module load.
for (const service of SERVICES) {
  const images = SECTION_IMAGES[service.key] ?? [];
  service.detail.sections.forEach((section, i) => {
    section.image = images[i] ?? null;
  });
}

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
