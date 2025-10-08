import { testimonial } from '@/app/content';

export function TestimonialSection() {
  return (
    <section className="testimonial" id="testimonial">
      <div className="container testimonial__inner">
        <header className="section-header section-header--center">
          <h2 className="section-title">Testimonial</h2>
          <p className="section-subtitle">
            Kind words from partners who value craft, clarity, and collaboration.
          </p>
        </header>
        <blockquote className="quote">
          <p>{testimonial.quote}</p>
          <footer className="quote__footer">
            <span className="quote__author">{testimonial.author}</span>
            <span className="quote__role">{testimonial.role}</span>
          </footer>
        </blockquote>
        <div className="pagination" aria-hidden="true">
          <span className="pagination__dot pagination__dot--active" />
          <span className="pagination__dot" />
          <span className="pagination__dot" />
        </div>
      </div>
    </section>
  );
}
