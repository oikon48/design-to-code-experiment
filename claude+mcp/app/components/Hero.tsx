export default function Hero() {
  return (
    <section className="relative min-h-screen pt-[96px] overflow-hidden bg-gradient-to-br from-purple-50 via-white to-orange-50">
      {/* Background Decorations */}
      <div className="absolute top-20 left-[-100px] w-[1481px] h-[1481px] bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-[-200px] w-[1228px] h-[1228px] bg-orange-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-[1920px] mx-auto px-[300px] py-20">
        <div className="flex items-center justify-between gap-16">
          {/* Left Content */}
          <div className="flex-1 max-w-[648px]">
            <div className="mb-8 flex gap-4">
              <div className="h-1.5 w-[133px] bg-primary-500 rounded-full"></div>
              <div className="h-1.5 w-[92px] bg-gray-200 rounded-full"></div>
            </div>

            <h1 className="text-[72px] font-semibold leading-[84px] text-gray-900 mb-6">
              Hello, I'm <br />
              Brooklyn Gilbert
            </h1>

            <p className="text-lg text-gray-600 leading-6 mb-12">
              I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build
              immersive and beautiful web applications through carefully crafted code and user-centric design.
            </p>

            <button className="px-8 py-3 bg-primary-500 text-white text-base font-medium rounded-lg hover:bg-primary-900 transition-colors">
              Say Hello
            </button>
          </div>

          {/* Right Image */}
          <div className="flex-shrink-0 relative">
            <div className="w-[536px] h-[636px] bg-gradient-to-br from-purple-100 to-orange-100 rounded-3xl overflow-hidden">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400 text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
