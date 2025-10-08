export default function Portfolio() {
  const projects = [
    { title: "Web Development", category: "UI/UX Design", image: "1" },
    { title: "Mobile App", category: "Development", image: "2" },
    { title: "Brand Identity", category: "Branding", image: "3" },
    { title: "E-commerce", category: "Web Design", image: "4" },
    { title: "Dashboard", category: "UI Design", image: "5" },
    { title: "Landing Page", category: "Web Design", image: "6" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-5">
            Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-100 to-orange-100 aspect-[424/476] cursor-pointer"
            >
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Project {index + 1}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm mb-2 text-gray-300">{project.category}</p>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button className="px-8 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors">
            View All Project
          </button>
        </div>
      </div>
    </section>
  );
}
