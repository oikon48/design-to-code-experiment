import { posts } from '@/app/content';

export function BlogSection() {
  return (
    <section className="blog" id="blog">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">
            Insights on design, research, and building resilient digital products.
          </p>
        </header>
        <div className="blog__grid">
          {posts.map((post) => (
            <article key={post.title} className="post">
              <div className="post__media" aria-hidden="true" />
              <div className="post__content">
                <p className="post__meta">{post.meta}</p>
                <h3 className="post__title">{post.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
