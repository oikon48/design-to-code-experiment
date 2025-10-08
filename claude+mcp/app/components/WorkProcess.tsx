export default function WorkProcess() {
  const processes = [
    { title: "Research", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Design", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Develop", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Deploy", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex gap-20">
          {/* Left: Title and Description */}
          <div className="flex-shrink-0 w-[529px]">
            <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-8">
              Work Process
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,
                laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-lg text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
              </p>
            </div>
          </div>

          {/* Right: Process Cards */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {processes.map((process, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl hover:bg-primary-500 hover:text-white transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary-500 group-hover:bg-white rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-white group-hover:text-primary-500 font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4">{process.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
