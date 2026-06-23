import { SectionHeader } from "./ThreeWaysToSell";

function AvatarPlaceholder() {
  return (
    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden shrink-0">
      <svg viewBox="0 0 64 64" className="w-full h-full" fill="none">
        <circle cx="32" cy="32" r="32" fill="#D1D5DB" />
        <circle cx="32" cy="26" r="10" fill="#9CA3AF" />
        <path d="M10 58c0-12.15 9.85-22 22-22s22 9.85 22 22" fill="#9CA3AF" />
      </svg>
    </div>
  );
}

const columns = [
  { label: "PRODUCTION", count: 4 },
  { label: "INSIDE SALES", count: 3 },
  { label: "BACK OFFICE", count: 5 },
  { label: "INTERNATIONAL", count: 4 },
];

export default function MeetTheTeam() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <SectionHeader text="MEET THE LOKEN GROUP" />

        {/* 4-column layout, all visible at once */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-10 border border-gray-200">
          {columns.map((col, ci) => (
            <div
              key={col.label}
              className={`flex flex-col items-center gap-4 px-4 py-8 border-gray-200
                ${ci === 0 ? "border-r" : ""}
                ${ci === 1 ? "lg:border-r" : ""}
                ${ci === 2 ? "border-r border-t lg:border-t-0" : ""}
                ${ci === 3 ? "border-t lg:border-t-0" : ""}
              `}
            >
              {/* Category label */}
              <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-[#BE1E2D] mb-1 text-center">
                {col.label}
              </p>
              {/* Avatars */}
              <div className="flex flex-wrap justify-center gap-3">
                {Array.from({ length: col.count }).map((_, i) => (
                  <AvatarPlaceholder key={i} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#"
            className="border border-[#BE1E2D] text-[#BE1E2D] font-sans font-semibold text-sm px-10 py-3 hover:bg-[#BE1E2D] hover:text-white transition-colors"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
}
