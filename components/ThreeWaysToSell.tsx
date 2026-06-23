const ways = [
  {
    title: "Guaranteed Sale",
    description:
      "We market your home and if it doesn't sell, we'll buy it. You get certainty and peace of mind.",
    href: "/your-home-sold-guaranteed",
  },
  {
    title: "Buy Before You Sell",
    description:
      "Buy your next home with confidence before selling. We'll buy yours so you can move on your terms.",
    href: "/buybeforeyousell",
  },
  {
    title: "Cash Offer Upfront",
    description:
      "Get a fair cash offer on your timeline so you can skip the showings and sell with certainty.",
    href: "/cash-offer-upfront",
  },
];

function SellIcon({ variant }: { variant: number }) {
  return (
    <div className="w-[76px] h-[76px] rounded-full border border-[#1A1A1A] flex items-center justify-center mb-6 mx-auto">
      {variant === 0 && (
        /* Single circle with checkmark — no inner ring */
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M9 18l7 7 11-12" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {variant === 1 && (
        /* House with right-pointing arrow out the side */
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M4 30V17L18 5l14 12v13H23v-9h-8v9H4z" stroke="#1A1A1A" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M24 23h8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M28.5 19.5l3.5 3.5-3.5 3.5" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {variant === 2 && (
        /* Dollar sign only — no inner ring */
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 6v24" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13 11.5c0-2.2 2.24-4 5-4s5 1.8 5 4c0 3-5 4.5-5 4.5s-5 1.5-5 4.5c0 2.2 2.24 4 5 4s5-1.8 5-4" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </div>
  );
}

export function SectionHeader({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-12">
      <div className="h-px bg-[#BE1E2D] flex-1" />
      <span className="font-sans text-[11px] font-bold tracking-[0.35em] text-[#1A1A1A] whitespace-nowrap mx-6">
        {text}
      </span>
      <div className="h-px bg-[#BE1E2D] flex-1" />
    </div>
  );
}

export default function ThreeWaysToSell() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader text="THREE WAYS TO SELL" />

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200">
          {ways.map((way, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center px-10 py-12 ${
                i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
              }`}
            >
              <SellIcon variant={i} />
              <h3 className="font-serif font-bold text-xl text-[#1A1A1A] mb-3">
                {way.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5 max-w-[220px]">
                {way.description}
              </p>
              <a
                href={way.href}
                className="font-sans text-sm font-semibold text-[#BE1E2D] flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <span>&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
