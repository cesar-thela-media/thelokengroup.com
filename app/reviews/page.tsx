import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/ThreeWaysToSell";

export const metadata = {
  title: "Client Reviews",
  description: "500+ verified 5-star reviews from Houston buyers and sellers. See what clients say about The Loken Group.",
};

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#BE1E2D">
          <path d="M7 0.5L8.46 4.96L12.5 4.96L9.27 7.54L10.73 12L7 9.42L3.27 12L4.73 7.54L1.5 4.96L5.54 4.96L7 0.5Z" />
        </svg>
      ))}
    </div>
  );
}

const reviews = [
  {
    quote: "The Loken Group was absolutely outstanding. Our home sold in 8 days for $15,000 over asking price. Lance's team handled everything — we barely had to lift a finger.",
    name: "Michael T.",
    location: "The Woodlands, TX",
    source: "Zillow",
    date: "March 2024",
  },
  {
    quote: "Our buyer specialist found us our dream home in Sugar Land after we'd almost given up. Their knowledge of the local market is genuinely unmatched.",
    name: "Sarah & Tom H.",
    location: "Sugar Land, TX",
    source: "Google",
    date: "January 2024",
  },
  {
    quote: "We used the Guaranteed Sale program and had zero stress. They sold our home five days before the deadline at exactly the price we needed. Worth every penny.",
    name: "Jennifer M.",
    location: "Katy, TX",
    source: "Zillow",
    date: "February 2024",
  },
  {
    quote: "Best decision we ever made. Professional, responsive, and results-driven from day one. Our agent answered calls at 9pm and never missed a beat.",
    name: "Robert K.",
    location: "Katy, TX",
    source: "Google",
    date: "November 2023",
  },
  {
    quote: "Our agent negotiated $22,000 below asking on our new home and got us two weeks of free rent-back. Exceptional negotiator.",
    name: "Amanda L.",
    location: "Pearland, TX",
    source: "Zillow",
    date: "December 2023",
  },
  {
    quote: "We've bought and sold 4 homes through The Loken Group. We'll never use anyone else in the Greater Houston area. Consistent, trustworthy, excellent.",
    name: "The Johnson Family",
    location: "Conroe, TX",
    source: "Google",
    date: "October 2023",
  },
  {
    quote: "The Buy Before You Sell program was a game-changer. We moved into our new home without the pressure of selling first. Truly innovative service.",
    name: "David & Maria P.",
    location: "Spring, TX",
    source: "Zillow",
    date: "September 2023",
  },
  {
    quote: "Incredible team of professionals. Our home sold in 11 days in what everyone was calling a slow market. Their marketing strategy is genuinely remarkable.",
    name: "Christine B.",
    location: "Friendswood, TX",
    source: "Google",
    date: "August 2023",
  },
  {
    quote: "The Cash Offer Upfront program got us a fair price with zero showings and a 12-day close. Stress-free, fast, and exactly what we needed during a difficult move.",
    name: "Steven R.",
    location: "Missouri City, TX",
    source: "Zillow",
    date: "July 2023",
  },
];

const awards = [
  { num: "#1", label: "Large Real Estate Team\nin Houston", year: "2021" },
  { num: "#1", label: "Large Team Nationally\nper Wall Street Journal", year: "2020" },
  { num: "#1", label: "Keller Williams Team\nWorldwide", year: "2020" },
  { num: "#1", label: "Best Place to Work\nin Houston", year: "2015 · 2017 · 2018" },
];

export default function ReviewsPage() {
  return (
    <PageLayout>
      <PageHeader
        label="Client Testimonials"
        title="What Our Clients Say"
        subtitle="Hundreds of families across Greater Houston have trusted us with the biggest financial decisions of their lives."
      />

      {/* Rating overview */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <span className="font-serif font-bold text-7xl text-[#1A1A1A] leading-none">5.0</span>
            <div className="flex flex-col gap-2">
              <Stars />
              <p className="font-sans text-sm text-gray-600">Based on 500+ verified reviews</p>
              <div className="flex gap-3 mt-1">
                {["Zillow", "Google", "Facebook"].map((src) => (
                  <span
                    key={src}
                    className="font-sans text-[10px] font-bold tracking-wide text-gray-400 border border-gray-200 px-2 py-0.5"
                  >
                    {src}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <a
            href="/your-home-sold-guaranteed"
            className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3 transition-colors whitespace-nowrap"
          >
            Get My Guaranteed Offer
          </a>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="CLIENT REVIEWS" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 p-7 flex flex-col">
                <Stars />
                <p className="font-sans text-sm text-gray-700 leading-relaxed mt-4 mb-6 flex-1 italic">
                  &ldquo;{r.quote}&rdquo;
                </p>
                <div className="flex items-end justify-between mt-auto pt-4 border-t border-gray-100">
                  <div>
                    <p className="font-sans font-semibold text-sm text-[#1A1A1A]">{r.name}</p>
                    <p className="font-sans text-xs text-gray-400">{r.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-sans text-[10px] font-bold tracking-wide text-[#BE1E2D] block">
                      {r.source}
                    </span>
                    <span className="font-sans text-[10px] text-gray-400">{r.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="NATIONALLY RECOGNIZED" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {awards.map((a, i) => (
              <div key={i} className="bg-[#1A1A1A] flex flex-col items-center text-center px-6 py-10">
                <span className="font-serif font-bold text-[#BE1E2D] text-5xl leading-none">{a.num}</span>
                <p className="font-sans text-sm text-white font-semibold mt-4 leading-snug whitespace-pre-line">
                  {a.label}
                </p>
                <p className="font-sans text-xs text-gray-500 mt-2">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
