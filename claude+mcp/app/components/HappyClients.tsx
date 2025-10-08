export default function HappyClients() {
  const clients = ["Google", "Dribbble", "LinkedIn", "Amazon", "Medium", "Spotify"];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1920px] mx-auto px-[300px]">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-semibold leading-[56px] text-gray-900 mb-5">
            Happy Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-[577px] mx-auto">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
        </div>

        {/* Clients Logos */}
        <div className="grid grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="aspect-square bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-primary-50 transition-colors duration-300 cursor-pointer group"
            >
              <span className="text-2xl font-semibold text-gray-400 group-hover:text-primary-500 transition-colors">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
