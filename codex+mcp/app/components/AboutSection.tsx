import { aboutSocialLinks } from '@/app/content';

export function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__media" aria-hidden="true">
          <div className="about__photo" />
          <ul className="social social--vertical" aria-label="Social profiles">
            {aboutSocialLinks.map((link) => (
              <li key={link.label}>
                <a
                  className={`social__link${link.primary ? ' social__link--primary' : ''}`}
                  href={link.href}
                  aria-label={link.label}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content">
          <h2 className="section-title">I am a professional user experience designer</h2>
          <p className="lead">
            I design and develop services for customers, specialising in creating stylish, modern websites, thoughtful
            web services, and high-performing online stores. My passion is crafting digital user experiences that
            delight and deliver results.
          </p>
          <p className="lead">
            From discovery workshops to polished deployment, I help teams transform complex challenges into simple,
            human-centred solutions.
          </p>
          <div className="button-row">
            <a className="button button--primary" href="#portfolio">
              My projects
            </a>
            <a className="button button--ghost" href="#" download>
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
