import { Fragment } from 'react';
import { stats } from '@/app/content';

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">
            Hello, I'm <span>Brooklyn Gilbert</span>
          </h1>
          <p className="hero__subtitle">
            I'm a Freelance <strong>UI/UX Designer</strong> and <strong>Developer</strong> based in London, England. I
            build immersive digital products through thoughtful design and carefully crafted code.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Say hello!
            </a>
            <a className="button button--ghost" href="#portfolio">
              View projects
            </a>
          </div>
          <dl className="stats" aria-label="Experience highlights">
            {stats.map((item, index) => (
              <Fragment key={item.label}>
                <div className="stats__item">
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
                {index < stats.length - 1 ? <div className="stats__divider" role="presentation" /> : null}
              </Fragment>
            ))}
          </dl>
        </div>
        <div className="hero__media" aria-hidden="true">
          <div className="hero__image" />
        </div>
      </div>
    </section>
  );
}
