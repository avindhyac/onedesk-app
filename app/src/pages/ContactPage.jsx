import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { Input, Textarea, Select, Checkbox } from "../components/FormField";
import PageTransition from "../components/PageTransition";
import Seo from "../components/Seo";
import "./ContactPage.css";

const DETAILS = [
  { icon: "lucide:mail",    title: "Email us",     body: "hello@onedesk.one",           service: "sec" },
  { icon: "lucide:phone",   title: "Call us",      body: "+94 77 000 0000",              service: "acc" },
  { icon: "lucide:map-pin", title: "Visit",        body: "Colombo, Sri Lanka",           service: "leg" },
  { icon: "lucide:clock",   title: "Hours",        body: "Mon–Fri · 9am–6pm IST",        service: "mkt" },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) {
    return (
      <div className="contact-success">
        <span className="contact-success__icon">
          <iconify-icon icon="lucide:check" />
        </span>
        <h3 className="contact-success__title">Thanks — we're on it.</h3>
        <p className="contact-success__body">A OneDesk specialist will email you within one business day.</p>
        <Button variant="outline" onClick={() => setSent(false)}>Send another</Button>
      </div>
    );
  }
  return (
    <form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <h3 className="contact-form__heading">Tell us about your business</h3>
      <div className="contact-form__grid">
        <Input label="Full name"   placeholder="Jordan Rivera" required />
        <Input label="Work email" icon="lucide:mail" type="email" placeholder="you@company.com" required />
        <Input label="Company"    placeholder="Acme Inc." />
        <Select label="Company size" options={["1–10", "11–50", "51–200", "200+"]} />
      </div>
      <div className="contact-form__full">
        <Select
          label="Which services interest you?"
          options={["I'm not sure yet", "Accounting", "Legal", "Tax", "HR", "Marketing", "Corporate Secretarial", "The full desk"]}
        />
      </div>
      <div className="contact-form__full">
        <Textarea label="How can we help?" rows={4} placeholder="Tell us what you'd like handled…" />
      </div>
      <div className="contact-form__full">
        <Checkbox label="Email me OneDesk tips and product updates" defaultChecked />
      </div>
      <div className="contact-form__full">
        <Button block size="lg" type="submit" iconRight="lucide:send" variant="primary">
          Send message
        </Button>
      </div>
    </form>
  );
}

export default function ContactPage() {
  return (
    <PageTransition>
      <Seo
        title="Contact"
        description="Get in touch with OneDesk. A real person replies within one business day."
        path="/contact"
      />

      <section className="contact-page">
        <div className="contact-page__inner">
          {/* Left — info */}
          <div className="contact-info">
            <SectionHeading
              eyebrow="Contact"
              title="Let's get your desk set up."
              subtitle="Tell us what you need handled. A real person replies within one business day — no bots, no phone trees."
              align="left"
            />
            <div className="contact-details">
              {DETAILS.map((d) => (
                <div key={d.title} className="contact-detail">
                  <span className={`contact-detail__icon contact-detail-icon--${d.service}`}>
                    <iconify-icon icon={d.icon} />
                  </span>
                  <div>
                    <div className="contact-detail__title">{d.title}</div>
                    <div className="contact-detail__body">{d.body}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="contact-security">
              <iconify-icon icon="lucide:shield-check" className="contact-security__icon" />
              Your information is encrypted and never shared.
            </div>
          </div>

          {/* Right — form card */}
          <div className="contact-form-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
