function HouseIcon({ color }: { color: string }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <path
        d="M8 44V24L28 8l20 16v20H36V32H20v12H8z"
        stroke={color}
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BuySellCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200">
        {/* Buying */}
        <div className="flex flex-col items-start justify-center px-10 py-14 border-b md:border-b-0 md:border-r border-gray-200">
          <HouseIcon color="#BE1E2D" />
          <h3 className="font-serif font-bold text-2xl text-[#1A1A1A] mt-5 mb-2">
            Buying a Home?
          </h3>
          <p className="font-sans text-sm text-gray-600 mb-8 leading-relaxed">
            Expert guidance. Local insight.
            <br />
            We&apos;ll help you find the one.
          </p>
          <a
            href="#"
            className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3 transition-colors"
          >
            Search Homes
          </a>
        </div>

        {/* Selling */}
        <div className="flex flex-col items-start justify-center px-10 py-14 bg-[#BE1E2D]">
          <HouseIcon color="white" />
          <h3 className="font-serif font-bold text-2xl text-white mt-5 mb-2">
            Selling a Home?
          </h3>
          <p className="font-sans text-sm text-white/90 mb-8 leading-relaxed">
            Get our proven plan and our promise.
            <br />
            We&apos;ll sell your home or buy it.
          </p>
          <a
            href="#"
            className="border-2 border-white text-white font-sans font-semibold text-sm px-8 py-3 hover:bg-white hover:text-[#BE1E2D] transition-colors"
          >
            Get My Guaranteed Offer
          </a>
        </div>
      </div>
    </section>
  );
}
