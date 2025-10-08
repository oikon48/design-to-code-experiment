import clsx from 'clsx';
import { processSteps } from '@/app/content';

export function ProcessSection() {
  return (
    <section className="process" id="process">
      <div className="container process__layout">
        <div className="process__intro">
          <h2 className="section-title">Work process</h2>
          <p className="lead">
            Every engagement follows a transparent, collaborative workflow. We uncover insights, build momentum, and
            deliver measurable outcomes together.
          </p>
          <p className="lead">From research to launch, each phase has a clear purpose and defined deliverables.</p>
        </div>
        <div className="process__grid">
          {processSteps.map((step) => (
            <article key={step.title} className={clsx('card', step.accent && 'card--accent')}>
              <div className="card__icon" aria-hidden="true" />
              <h3 className="card__title">{step.title}</h3>
              <p className="card__body">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
