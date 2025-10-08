export default function Stats() {
  const stats = [
    { value: "15 Y.", label: "Experience" },
    { value: "250+", label: "Project Completed" },
    { value: "58", label: "Happy Client" },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        <div className="flex items-start justify-between max-w-[648px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-start gap-6">
              {index > 0 && (
                <div className="h-[106px] w-px bg-gray-300 -ml-6"></div>
              )}
              <div className="text-center pt-4">
                <h3 className="text-[40px] font-semibold leading-10 text-gray-900 mb-3">
                  {stat.value}
                </h3>
                <p className="text-base text-gray-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
