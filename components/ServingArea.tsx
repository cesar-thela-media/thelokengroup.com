export default function ServingArea() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] mb-3 uppercase">
              Proudly Serving
            </p>
            <h2 className="font-serif font-bold text-5xl lg:text-6xl text-[#1A1A1A] mb-5 leading-tight">
              Greater Houston
            </h2>
            <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8 max-w-sm">
              The Loken Group proudly serves the Greater Houston nine-county region
              with unmatched results and local market expertise.
            </p>
            <a
              href="#"
              className="border border-[#BE1E2D] text-[#BE1E2D] font-sans font-semibold text-sm px-7 py-3 hover:bg-[#BE1E2D] hover:text-white transition-colors inline-block tracking-widest uppercase text-[11px]"
            >
              View All Areas
            </a>
          </div>

          {/* Right: SVG county map */}
          <div className="relative w-full">
            <svg
              viewBox="0 0 500 380"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer boundary shape */}
              <path
                d="M70 40 L290 28 L445 65 L462 185 L428 308 L300 368 L185 368 L62 280 L36 162 Z"
                fill="#E5E7EB"
                stroke="#BE1E2D"
                strokeWidth="1.5"
              />

              {/* Horizontal county dividers */}
              <line x1="48" y1="110" x2="462" y2="110" stroke="#9CA3AF" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="40" y1="210" x2="456" y2="210" stroke="#9CA3AF" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="55" y1="305" x2="425" y2="305" stroke="#9CA3AF" strokeWidth="0.75" strokeDasharray="4,3" />

              {/* Vertical county dividers */}
              <line x1="180" y1="30" x2="165" y2="368" stroke="#9CA3AF" strokeWidth="0.75" strokeDasharray="4,3" />
              <line x1="318" y1="30" x2="314" y2="368" stroke="#9CA3AF" strokeWidth="0.75" strokeDasharray="4,3" />

              {/* County name labels */}
              {[
                { name: "MONTGOMERY", x: 254, y: 68 },
                { name: "WALLER", x: 115, y: 158 },
                { name: "HARRIS", x: 254, y: 158 },
                { name: "LIBERTY", x: 382, y: 110 },
                { name: "CHAMBERS", x: 390, y: 185 },
                { name: "FORT BEND", x: 115, y: 258 },
                { name: "GALVESTON", x: 382, y: 295 },
                { name: "BRAZORIA", x: 228, y: 338 },
                { name: "WHARTON", x: 115, y: 338 },
              ].map((c) => (
                <text
                  key={c.name}
                  x={c.x}
                  y={c.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="9.5"
                  fontFamily="Arial, sans-serif"
                  fontWeight="700"
                  fill="#4B5563"
                  letterSpacing="0.8"
                >
                  {c.name}
                </text>
              ))}

              {/* Red dot accent on Harris county (primary market) */}
              <circle cx="254" cy="148" r="4" fill="#BE1E2D" opacity="0.7" />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
