export default function WhatIDo() {
  const services = [
    {
      title: "UI/UX Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu varius eget velit non."
    },
    {
      title: "Web Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu varius eget velit non."
    },
    {
      title: "App Development",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu varius eget velit non."
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex gap-20">
          {/* Left: Title and Description */}
          <div className="flex-shrink-0 w-[529px]">
            <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-8">
              What I do?
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,
                laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p className="text-lg text-gray-600 leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
              </p>
            </div>
            <button className="px-8 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors">
              Say Hello
            </button>
          </div>

          {/* Right: Service Cards */}
          <div className="flex-1 space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 bg-white rounded-2xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-white">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-base text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
