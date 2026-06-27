import { useState } from "react";
import { motion } from "framer-motion";
import Button from "../components/Button";
import Eyebrow from "../components/Eyebrow";
import PageHero from "../components/PageHero";
import PageTransition from "../components/PageTransition";
import RevealOnScroll from "../components/RevealOnScroll";
import "./ContactPage.css";

const SERVICES = [
  "Legal advisory & regulatory support",
  "Tax advisory & compliance",
  "Accounting & financial reporting",
  "HR & payroll administration",
  "Company secretarial & statutory compliance",
  "Marketing & brand growth",
  "Marketplace / partnership inquiry",
];

const SOCIALS = [
  {
    label: "WhatsApp",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.524 5.845L0 24l6.338-1.499A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.882 0-3.641-.503-5.158-1.381l-.369-.22-3.766.89.924-3.662-.241-.378A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:hello@onedesk.one",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 6.5l8.5 6 8.5-6" />
      </svg>
    ),
  },
];

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState("idle");

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1200);
  };

  if (status === "success") {
    return (
      <motion.div
        className="cf-success"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="cf-success__icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--ember-500)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3>Message sent.</h3>
        <p>Thanks for reaching out — we'll be in touch within one business day.</p>
      </motion.div>
    );
  }

  return (
    <form className="cf" onSubmit={handleSubmit} noValidate>
      <div className="cf__row">
        <div className="cf__field">
          <label htmlFor="cf-name" className="cf__label">Full name <span aria-hidden="true">*</span></label>
          <input id="cf-name" type="text" className="cf__input" value={fields.name} onChange={set("name")} placeholder="Your name" required />
        </div>
        <div className="cf__field">
          <label htmlFor="cf-email" className="cf__label">Email address <span aria-hidden="true">*</span></label>
          <input id="cf-email" type="email" className="cf__input" value={fields.email} onChange={set("email")} placeholder="you@company.com" required />
        </div>
      </div>
      <div className="cf__row">
        <div className="cf__field">
          <label htmlFor="cf-phone" className="cf__label">Phone number</label>
          <input id="cf-phone" type="tel" className="cf__input" value={fields.phone} onChange={set("phone")} placeholder="+94 77 000 0000" />
        </div>
        <div className="cf__field">
          <label htmlFor="cf-service" className="cf__label">Service interest</label>
          <select id="cf-service" className="cf__input cf__select" value={fields.service} onChange={set("service")}>
            <option value="">Select a service…</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div className="cf__field">
        <label htmlFor="cf-message" className="cf__label">Message <span aria-hidden="true">*</span></label>
        <textarea id="cf-message" className="cf__input cf__textarea" value={fields.message} onChange={set("message")} placeholder="Tell us about your business and what you need…" rows={5} required />
      </div>
      <Button variant="primary" size="lg" dot block type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your business"
        subtitle="Tell us where you are today. We'll show you how one connected partner can simplify everything."
      />

      <section className="contact-body">
        <div className="contact-body__inner">

          {/* Form side */}
          <RevealOnScroll>
            <div className="contact-form-col">
              <div className="contact-form-head">
                <Eyebrow tone="ember">Send a message</Eyebrow>
                <h2 className="contact-form-title">We'd love to hear from you</h2>
              </div>
              <div className="contact-form-card">
                <ContactForm />
              </div>
            </div>
          </RevealOnScroll>

          {/* Info panel */}
          <RevealOnScroll delay={0.12}>
            <div className="contact-panel">
              <div className="contact-panel__accent" />
              <div className="contact-panel__body">

                <div className="contact-panel__section">
                  <span className="contact-panel__label">Contact</span>
                  <ul className="contact-panel__list">
                    <li>
                      <span className="contact-panel__icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3.5 6.5l8.5 6 8.5-6" />
                        </svg>
                      </span>
                      <a href="mailto:hello@onedesk.one">hello@onedesk.one</a>
                    </li>
                    <li>
                      <span className="contact-panel__icon">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                        </svg>
                      </span>
                      <span>Colombo, Sri Lanka</span>
                    </li>
                  </ul>
                </div>

                <div className="contact-panel__divider" />

                <div className="contact-panel__section">
                  <span className="contact-panel__label">Follow us</span>
                  <div className="contact-panel__socials">
                    {SOCIALS.map((s) => (
                      <motion.a
                        key={s.label}
                        href={s.href}
                        target={s.href.startsWith("http") ? "_blank" : undefined}
                        rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="contact-panel__social"
                        aria-label={s.label}
                        whileHover={{ y: -3 }}
                        transition={{ type: "spring", stiffness: 400, damping: 28 }}
                      >
                        <span className="contact-panel__social-icon">{s.icon}</span>
                        <span>{s.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="contact-panel__divider" />

                <div className="contact-panel__section">
                  <span className="contact-panel__label">Office hours</span>
                  <p className="contact-panel__hours">Monday – Friday<br />9:00 AM – 6:00 PM (IST)</p>
                  <p className="contact-panel__note">We respond to all enquiries within one business day.</p>
                </div>

              </div>
            </div>
          </RevealOnScroll>

        </div>
      </section>
    </PageTransition>
  );
}
