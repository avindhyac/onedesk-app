// Canonical service data — single source of truth for the homepage grid,
// the /services overview, and the /services/:slug detail pages.
// Detail copy is derived from OneDesk_Services.md (the service-pillar reference doc).

export const SERVICES = [
  {
    key: "sec",
    slug: "secretarial",
    char: "secretarial",
    icon: "lucide:building-2",
    title: "Corporate Secretarial",
    tagline: "Stay in good standing, effortlessly.",
    desc: "Formation, registered agent and every state filing kept current, automatically.",
    points: ["Company formation & EIN", "Registered agent in all 50 states", "Annual reports & state filings", "Cap table & board minutes"],
    detail: {
      intro: "A sound corporate structure is the foundation of every sustainable business. We handle structured incorporation and ongoing secretarial support, so you stay compliant and transparent from day one through growth.",
      sections: [
        {
          heading: "Company Incorporation",
          body: "We help you set up the right legal entity in Sri Lanka, including private limited companies, with careful attention to structure and strategy.",
          points: ["Shareholding structure", "Director composition", "Capitalization strategy", "Governance requirements", "Regulatory classification", "Foreign investment implications"],
        },
        {
          heading: "Corporate Governance & Secretarial Compliance",
          body: "Once you're incorporated, compliance becomes continuous. We keep it on track with a structured compliance calendar.",
          points: ["Statutory registers", "Board & shareholder resolutions", "Annual return filings", "Director appointments & resignations", "Share transfers & allotments", "Constitutional amendments"],
        },
        {
          heading: "Capital Transactions & Restructuring",
          body: "As your business evolves, we advise on and implement changes to your capital structure, prepared with tax and accounting alignment in mind.",
          points: ["Share issuances & transfers", "Capital increases & reorganizations", "Changes in shareholder arrangements", "Entry of strategic or foreign investors"],
        },
        {
          heading: "Foreign Investor & Cross-Border Entry",
          body: "For investors entering Sri Lanka, and Sri Lankan companies expanding to the UAE or Singapore, we coordinate with regional partners for seamless structuring.",
          points: ["Investment vehicles", "Regulatory approvals", "Local compliance obligations", "Cross-jurisdiction coordination"],
        },
        {
          heading: "Banking & Regulatory Liaison",
          body: "Opening a bank account requires structured documentation and beneficial ownership transparency. We handle the coordination.",
          points: ["Board resolutions & certified documentation", "KYC & beneficial ownership compilation", "Liaison with banking institutions", "Capital deposit confirmations"],
        },
      ],
      approach: "Good governance isn't a formality, it's the structure everything else stands on. We build it in from day one and keep it there.",
    },
  },
  {
    key: "leg",
    slug: "legal",
    char: "legal",
    icon: "lucide:scale",
    title: "Legal",
    tagline: "Counsel on call, not on the clock.",
    desc: "Contracts reviewed, compliance covered and questions answered, without surprise invoices. Your legal team, on a flat subscription.",
    points: ["Contract drafting & review", "Compliance & policies", "Trademark & IP basics", "On-demand legal Q&A"],
    detail: {
      intro: "Contracts, governance and regulatory obligations shape more than compliance, they shape commercial stability. We advise across your lifecycle, from incorporation through expansion and, where needed, dispute management.",
      sections: [
        {
          heading: "Commercial Contracting",
          body: "We draft, review and negotiate the agreements your business runs on, prioritizing clear risk allocation and enforceability.",
          points: ["Shareholder agreements", "Joint venture arrangements", "Supply & distribution agreements", "Service & consultancy contracts", "NDAs & confidentiality agreements"],
        },
        {
          heading: "Regulatory Compliance & Governance",
          body: "We provide structured advisory across the layered regulatory environments businesses operate in.",
          points: ["Corporate law compliance", "Licensing & regulatory approvals", "Director duties & governance obligations", "Board advisory support"],
        },
        {
          heading: "Employment & HR Legal Frameworks",
          body: "Employment relationships carry legal weight. We help you get the documentation right, aligned with payroll and tax.",
          points: ["Employment contracts", "HR policies & internal regulations", "Incentive & retention structures", "Disciplinary & termination processes"],
        },
        {
          heading: "Dispute Strategy & Risk Mitigation",
          body: "When conflicts do arise, we bring cross-jurisdictional experience to bear.",
          points: ["Pre-dispute risk assessments", "Settlement strategy advisory", "Coordination with litigation & arbitration counsel", "Evidentiary documentation review"],
        },
      ],
      approach: "The strongest businesses document decisions before disputes force them to. That's the discipline we bring to every contract and compliance call.",
    },
  },
  {
    key: "tax",
    slug: "tax",
    char: "tax",
    icon: "lucide:percent",
    title: "Tax",
    tagline: "Every filing, every deduction.",
    desc: "Federal, state and sales tax prepared and filed on time, with proactive planning to keep more money in the business.",
    points: ["Federal & state returns", "Sales tax & nexus", "Quarterly estimates", "Year-round tax planning"],
    detail: {
      intro: "Tax is a structural part of corporate planning, capital allocation and cross-border strategy. We bring the same discipline to tax that governs our legal and corporate work.",
      sections: [
        {
          heading: "Corporate Tax Structuring",
          body: "We advise on structuring your operations for clarity and predictability, especially for growing businesses and foreign investors.",
          points: ["Entity selection & tax implications", "Capital structuring", "Dividend planning & profit distributions", "Withholding tax exposure", "Cross-border transaction analysis"],
        },
        {
          heading: "Tax Registrations & Ongoing Compliance",
          body: "We keep your statutory obligations addressed consistently, with a compliance calendar that reduces exposure to penalties.",
          points: ["Tax registrations & statutory enrolments", "Corporate income tax filing coordination", "Withholding tax reporting", "Statutory payment timelines"],
        },
        {
          heading: "Cross-Border Tax Considerations",
          body: "For Sri Lankan businesses expanding abroad, and foreign investors entering Sri Lanka, we evaluate exposure early through our regional partner network.",
          points: ["Cross-border tax exposure", "Double taxation implications", "Structuring aligned with expansion strategy", "Documentation & reporting expectations"],
        },
        {
          heading: "Tax Risk Assessment & Advisory",
          body: "We evaluate exposure before it becomes a liability.",
          points: ["Contractual arrangements", "Capital reorganizations", "Employment & compensation structures", "Related-party transactions"],
        },
      ],
      approach: "Tax works best woven into how you run the business, not bolted on at filing time. That's the discipline we bring to every return and structure.",
    },
  },
  {
    key: "acc",
    slug: "accounting",
    char: "accounting",
    icon: "lucide:calculator",
    title: "Accounting",
    tagline: "Books you can actually trust.",
    desc: "Real accountants keep your books clean and your reports current, so you always know where you stand, and so does your investor.",
    points: ["Monthly bookkeeping", "Payroll & expense management", "Investor-ready financials", "Dedicated accountant"],
    detail: {
      intro: "Financial clarity is the backbone of sound governance. We provide structured accounting and reporting designed for transparency, accuracy and regulatory alignment.",
      sections: [
        {
          heading: "Bookkeeping & Record Maintenance",
          body: "Your transactions, recorded systematically and to standard.",
          points: ["Monthly bookkeeping & ledger maintenance", "Bank & account reconciliation", "Accounts payable & receivable tracking", "Expense categorization"],
        },
        {
          heading: "Financial Statements",
          body: "We coordinate the preparation of the reports you and your stakeholders rely on.",
          points: ["Profit & loss statements", "Balance sheets", "Cash flow statements", "Management accounts"],
        },
        {
          heading: "Audit Coordination & Regulatory Reporting",
          body: "For entities subject to audit, we keep everything aligned and ready.",
          points: ["Documentation for auditors", "Coordination with external audit firms", "Statutory filing alignment", "Consistency between records and reporting"],
        },
        {
          heading: "Financial Governance & Advisory",
          body: "Beyond reporting, we help you build the systems around it.",
          points: ["Internal financial controls", "Reporting frameworks", "Governance-aligned financial practices", "Documentation for investors or lenders"],
        },
      ],
      approach: "Clear numbers make every other decision easier. We treat your books as a governance tool, not a monthly chore.",
    },
  },
  {
    key: "hr",
    slug: "hr",
    char: "hr",
    icon: "lucide:users",
    title: "HR",
    tagline: "Take care of your team.",
    desc: "Hiring, onboarding, benefits and policies set up properly from day one, so your people feel supported and you stay compliant.",
    points: ["Hiring & onboarding", "Benefits administration", "Handbooks & policies", "PTO & compliance"],
    detail: {
      intro: "Human capital drives growth, but employment relationships carry layered statutory obligations. We provide disciplined HR and payroll administration built for compliance and continuity.",
      sections: [
        {
          heading: "Employment Framework Design",
          body: "We help you build compliant, commercially sound employment structures.",
          points: ["End-to-end recruitment", "Employment agreements", "HR policies & internal regulations", "Compensation & benefit frameworks", "Confidentiality & non-compete protections"],
        },
        {
          heading: "Payroll Administration & Statutory Compliance",
          body: "Payroll is both a financial and regulatory function, we run it as both.",
          points: ["Salary processing & payroll management", "Statutory contribution calculations", "Withholding & remittance coordination", "Record maintenance & reporting"],
        },
        {
          heading: "Ongoing HR Compliance",
          body: "Employment obligations don't end at onboarding.",
          points: ["Probation & confirmation processes", "Disciplinary procedures", "Termination & separation documentation", "Statutory employee record-keeping"],
        },
        {
          heading: "Workforce Structuring & Growth",
          body: "As you scale, workforce strategy has to scale with you.",
          points: ["Workforce planning", "Restructuring advisory", "Coordination with tax & accounting on compensation", "Investor due-diligence documentation"],
        },
      ],
      approach: "Your team runs on the same discipline as the rest of your back office: compliant, continuous, and never an afterthought.",
    },
  },
  {
    key: "mkt",
    slug: "marketing",
    char: "marketing",
    icon: "lucide:megaphone",
    title: "Marketing",
    tagline: "Growth that compounds.",
    desc: "Brand, content and campaigns run by specialists who treat your numbers like their own. Less guesswork, more pipeline.",
    points: ["Brand & messaging", "Content & SEO", "Paid & email campaigns", "Monthly growth reporting"],
    detail: {
      intro: "A business is only as strong as its ability to communicate value clearly and consistently. We build brand positioning and market visibility that holds up alongside your governance and compliance discipline.",
      sections: [
        {
          heading: "Brand Strategy & Positioning",
          body: "We help you define and articulate a coherent market identity.",
          points: ["Brand positioning & value proposition", "Audience & market segmentation", "Competitive landscape assessment", "Brand guidelines & visual identity", "Messaging for investors, partners & customers"],
        },
        {
          heading: "Digital Marketing & Campaign Management",
          body: "Visibility takes structured, measurable execution.",
          points: ["Website & digital presence strategy", "SEO & content discoverability", "Paid & organic social campaigns", "Email marketing & lead nurturing", "Marketing calendar & campaign coordination"],
        },
        {
          heading: "Content & Creative Development",
          body: "Clear communication takes disciplined content production.",
          points: ["Website & collateral copywriting", "Corporate presentations & pitch materials", "Case studies & thought leadership", "Visual & multimedia coordination", "Localization for cross-border messaging"],
        },
        {
          heading: "Marketing Analytics & Performance Reporting",
          body: "Marketing decisions should be evidence-based.",
          points: ["Campaign performance tracking", "Customer acquisition cost & channel analysis", "Marketing dashboards", "ROI assessment on marketing spend"],
        },
        {
          heading: "Market Entry & Cross-Border Positioning",
          body: "For businesses expanding abroad, or foreign investors entering Sri Lanka, positioning needs early evaluation.",
          points: ["Local market perception analysis", "Messaging adapted for new-market audiences", "Coordination with corporate & regulatory milestones", "Governance-aligned public communications"],
        },
      ],
      approach: "Brand isn't separate from governance, it's the story your numbers back up. We keep that story consistent everywhere it's told.",
    },
  },
];

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug);
}
