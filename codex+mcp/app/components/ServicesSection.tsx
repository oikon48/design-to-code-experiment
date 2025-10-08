import clsx from 'clsx';
import { services } from '@/app/content';

export function ServicesSection() {
  return (
    <section className="services" id="services">
      <div className="container services__layout">
        <div className="services__intro">
          <h2 className="section-title">What I do?</h2>
          <p className="lead">
            I collaborate with founders, product teams, and agencies to build digital products powered by insight,
            strategy, and delightful design.
          </p>
          <p className="lead">
            Whether you need a new product from scratch or want to elevate an existing experience, I'm ready to help.
          </p>
          <a className="button button--primary" href="#contact">
            Say hello!
          </a>
        </div>
        <div className="services__list">
          {services.map((service) => (
            <article
              key={service.title}
              className={clsx('service', service.active && 'service--active')}
            >
              <h3 className="service__title">{service.title}</h3>
              <p className="service__body">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
