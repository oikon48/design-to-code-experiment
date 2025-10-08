import clsx from 'clsx';
import { contactCards, contactSocialLinks } from '@/app/content';

export function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="container contact__inner">
        <div className="contact__info">
          <h2 className="section-title">Let's discuss your project</h2>
          <p className="lead">
            Share your challenge and I'll respond with a tailored approach, timeline, and next steps.
          </p>
          <div className="contact__cards">
            {contactCards.map((card) => (
              <article
                key={card.label}
                className={clsx('info-card', card.accent && 'info-card--accent')}
              >
                <div className="info-card__icon" aria-hidden="true" />
                <div>
                  <h3 className="info-card__label">{card.label}</h3>
                  <p className="info-card__value">{card.value}</p>
                </div>
              </article>
            ))}
          </div>
          <ul className="social" aria-label="Social media">
            {contactSocialLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={clsx('social__link', link.primary && 'social__link--primary')}
                  href={link.href}
                  aria-label={link.label}
                />
              </li>
            ))}
          </ul>
        </div>
        <form className="contact__form" action="#" method="post">
          <p className="lead">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <label className="field">
            <span className="field__label">Name*</span>
            <input className="field__input" type="text" name="name" required />
          </label>
          <label className="field">
            <span className="field__label">Email*</span>
            <input className="field__input" type="email" name="email" required />
          </label>
          <label className="field">
            <span className="field__label">Location</span>
            <input className="field__input" type="text" name="location" />
          </label>
          <div className="field-group">
            <label className="field">
              <span className="field__label">Budget*</span>
              <input className="field__input" type="text" name="budget" required />
            </label>
            <label className="field">
              <span className="field__label">Subject*</span>
              <input className="field__input" type="text" name="subject" required />
            </label>
          </div>
          <label className="field">
            <span className="field__label">Message*</span>
            <textarea className="field__input field__input--textarea" name="message" rows={4} required />
          </label>
          <button className="button button--primary" type="submit">
            Submit
            <span className="button__icon" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  );
}
