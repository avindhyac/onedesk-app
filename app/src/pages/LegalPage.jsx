import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import "./LegalPage.css";

/* Placeholder legal content. Replace the section bodies with copy reviewed by
   your legal advisor before relying on these pages. */
const CONTENT = {
  privacy: {
    title: "Privacy Policy",
    path: "/privacy",
    eyebrow: "Legal",
    subtitle: "How OneDesk collects, uses, and protects the information you share with us.",
    updated: "June 2026",
    sections: [
      {
        h: "Information we collect",
        p: "When you contact us or request a service, we collect the details you provide — such as your name, email address, phone number, and the nature of your enquiry. We also collect basic, non-identifying usage data to understand how the site is used.",
      },
      {
        h: "How we use your information",
        p: "We use your information to respond to enquiries, deliver the services you request, and keep you informed about your engagement. We do not sell your personal information to third parties.",
      },
      {
        h: "Data retention",
        p: "We retain your information only as long as necessary to provide our services and meet our legal and regulatory obligations.",
      },
      {
        h: "Your rights",
        p: "You may request access to, correction of, or deletion of the personal information we hold about you. To make a request, email hello@onedesk.one.",
      },
      {
        h: "Contact",
        p: "Questions about this policy can be sent to hello@onedesk.one or by post to our office in Colombo, Sri Lanka.",
      },
    ],
  },
  terms: {
    title: "Terms of Service",
    path: "/terms",
    eyebrow: "Legal",
    subtitle: "The terms that govern your use of the OneDesk website and services.",
    updated: "June 2026",
    sections: [
      {
        h: "Using this site",
        p: "By accessing this website you agree to use it lawfully and not to misuse, disrupt, or attempt to gain unauthorised access to any part of it.",
      },
      {
        h: "Services",
        p: "Information on this site describes our services in general terms and does not constitute a binding offer or professional advice. Specific engagements are governed by a separate agreement entered into with you.",
      },
      {
        h: "Intellectual property",
        p: "All content on this site — including text, graphics, logos, and illustrations — belongs to OneDesk or its licensors and may not be reproduced without permission.",
      },
      {
        h: "Limitation of liability",
        p: "We work to keep the information on this site accurate and current, but we make no warranties as to its completeness and are not liable for any loss arising from reliance on it.",
      },
      {
        h: "Contact",
        p: "Questions about these terms can be sent to hello@onedesk.one.",
      },
    ],
  },
};

export default function LegalPage({ kind }) {
  const c = CONTENT[kind];

  return (
    <PageTransition>
      <Seo title={c.title} description={c.subtitle} path={c.path} />
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.subtitle} />
      <section className="legal">
        <div className="legal__inner">
          <p className="legal__updated">Last updated: {c.updated}</p>
          {c.sections.map((s) => (
            <div key={s.h} className="legal__section">
              <h2 className="legal__h">{s.h}</h2>
              <p className="legal__p">{s.p}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
