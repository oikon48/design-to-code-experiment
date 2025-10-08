export function CTASection() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta__inner">
        <div>
          <h2 className="cta__title" id="cta-title">
            Do you have a project idea? Let's discuss!
          </h2>
          <p className="cta__subtitle">
            Share your goals and we'll design a roadmap that delivers delightful, measurable impact.
          </p>
        </div>
        <a className="button button--primary" href="#contact">
          Let's work together
        </a>
      </div>
    </section>
  );
}
