const stats = [
  { big: "29", unit: "DAYS", label: "avg. time on market" },
  { big: "+2%", unit: "", label: "above market\nsale price" },
  { big: "#1", unit: "", label: "Large Team\nin Houston" },
  { big: "#1", unit: "", label: "KW Team\nWorldwide" },
];

export default function StatsBar() {
  return (
    <section className="bg-[#BE1E2D]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center text-center py-9 px-4 border-white/25
                ${i === 0 ? "border-r" : ""}
                ${i === 1 ? "lg:border-r" : ""}
                ${i === 2 ? "border-r border-t lg:border-t-0" : ""}
                ${i === 3 ? "border-t lg:border-t-0" : ""}
              `}
            >
              {/* Big number */}
              <span
                className="font-serif font-bold text-white leading-none"
                style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
              >
                {stat.big}
              </span>
              {/* Unit label (DAYS) if present */}
              {stat.unit && (
                <span className="font-sans font-bold text-white text-sm tracking-widest mt-0.5">
                  {stat.unit}
                </span>
              )}
              {/* Description */}
              <p className="font-sans text-white/85 text-xs whitespace-pre-line leading-snug mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
