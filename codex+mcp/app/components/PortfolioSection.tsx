import { projects } from '@/app/content';

export function PortfolioSection() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            A snapshot of recent engagements across SaaS, fintech, e-commerce, and enterprise platforms.
          </p>
        </header>
        <div className="portfolio__grid">
          {projects.map((project) => (
            <article key={project.title} className="project">
              <div className="project__media" aria-hidden="true" />
              <div className="project__content">
                <span className="project__meta">{project.category}</span>
                <h3 className="project__title">{project.title}</h3>
                <p className="project__body">{project.body}</p>
                <a className="button button--ghost" href="#">
                  Case study
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="portfolio__cta">
          <a className="button button--primary" href="#">
            More projects
          </a>
        </div>
      </div>
    </section>
  );
}
