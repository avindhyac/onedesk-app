export default function WhyOneDesk() {
  return (
    <section className="hero__why" aria-labelledby="why-one-desk-title">
      <p className="hero__why-eyebrow">Why OneDesk</p>
      <h2 id="why-one-desk-title" className="hero__why-title">
        Built for founders and SMEs
      </h2>
      <p className="hero__why-intro">
        Most providers handle one thing and hand you back a document. We hold
        the whole file, so nothing falls between them.
      </p>
      <div className="hero__why-grid">
        <article className="hero__why-card">
          <h3>One file, one team</h3>
          <p>
            Your tax team and your company secretary work from the same record.
            You explain your business once, not four times.
          </p>
        </article>
        <article className="hero__why-card">
          <h3>Deadlines tracked for you</h3>
          <p>
            Filing dates, renewals and statutory obligations sit on our
            calendar. You get a reminder three weeks out, not a penalty notice.
          </p>
        </article>
        <article className="hero__why-card">
          <h3>In-house, not outsourced</h3>
          <p>
            Qualified accountants, company secretaries and lawyers on our own
            team. Nobody is passing your file to a contractor you never met.
          </p>
        </article>
      </div>
    </section>
  );
}
