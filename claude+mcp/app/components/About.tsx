export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex items-center gap-16">
          {/* Left: Image and Social Media */}
          <div className="flex-shrink-0 relative">
            <div className="w-[424px] h-[468px] bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl overflow-hidden">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">About Image</span>
              </div>
            </div>
            {/* Social Media Card */}
            <div className="absolute bottom-[-36px] left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-lg p-4 flex gap-4">
              {["Facebook", "Twitter", "LinkedIn", "GitHub"].map((social, index) => (
                <div
                  key={index}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary-500 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
                >
                  <span className="text-xs">{social[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="flex-1 max-w-[536px]">
            <h2 className="text-[38px] font-semibold leading-[50px] text-gray-900 mb-8">
              I am Professional User Experience Designer
            </h2>
            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-600 leading-6">
                I design and develop services for customers specializing creating stylish, modern websites,
                web services and online stores. My passion is to design digital user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-6">
                I design and develop services for customers specializing creating stylish, modern websites,
                web services.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors">
                My Project
              </button>
              <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 text-base font-medium rounded-lg hover:border-primary-500 hover:text-primary-500 transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
