export default function Testimonial() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-5">
            Testimonial
          </h2>
          <p className="text-lg text-gray-600 max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="max-w-[872px] mx-auto text-center">
          <p className="text-2xl text-gray-700 leading-9 mb-12 italic">
            "Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at.
            Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus,
            eleifend ac cursus sed, tincidunt ut sapien. Morbi ornare elit at libero suscipit porta."
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Esther Howard</h3>
            <p className="text-base text-gray-600">Managing Director, ABC company</p>
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
