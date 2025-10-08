export default function Blog() {
  const blogs = [
    {
      title: "How to make web design",
      date: "12 Jan 2024",
      category: "Design",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Best practices in UX",
      date: "15 Jan 2024",
      category: "UX Design",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Modern web development",
      date: "18 Jan 2024",
      category: "Development",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Design systems guide",
      date: "20 Jan 2024",
      category: "Design System",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
  ];

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-5">
            Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-[540px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="aspect-[312/200] bg-gradient-to-br from-purple-100 to-orange-100 rounded-2xl mb-4 overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-gray-400">Blog {index + 1}</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-primary-500 font-medium">{blog.date} • {blog.category}</p>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-500 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-base text-gray-600">{blog.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
