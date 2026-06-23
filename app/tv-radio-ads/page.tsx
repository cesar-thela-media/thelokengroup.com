import PageLayout from "@/components/PageLayout";
import { Play, Radio, Tv } from "lucide-react";

export const metadata = {
  title: "TV & Radio Ads | Media",
  description: "Watch and listen to The Loken Group's TV commercials and radio spots from across Greater Houston.",
};

const tvSpots = [
  {
    title: "Your Home Sold Guaranteed — 30s",
    channel: "Fox 26 Houston",
    year: "2024",
    desc: "The flagship TV spot that introduced Houston to the Guaranteed Sale program. Aired on prime-time local news.",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=700&q=80",
  },
  {
    title: "29 Days or We Buy It — 60s",
    channel: "ABC 13 KTRK",
    year: "2024",
    desc: "Extended spot highlighting the 29-day average days on market and the Guaranteed Sale backstop.",
    duration: "1:00",
    thumbnail: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=700&q=80",
  },
  {
    title: "Buy Before You Sell — 30s",
    channel: "NBC 2 KPRC",
    year: "2023",
    desc: "Introduced the Buy Before You Sell program to Houston home owners with a split-screen before/after.",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=700&q=80",
  },
  {
    title: "Cash Offer Upfront — 30s",
    channel: "CW 39 Houston",
    year: "2023",
    desc: "Fast-paced spot focused on the 10-day cash close with zero showings and no repairs.",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1560472355-536de3962603?w=700&q=80",
  },
  {
    title: "Houston's #1 Team — Brand Spot",
    channel: "Telemundo 48",
    year: "2022",
    desc: "Brand awareness campaign airing on Spanish-language television across Greater Houston.",
    duration: "0:30",
    thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=700&q=80",
  },
  {
    title: "Lance Loken — Market Update",
    channel: "Fox Business",
    year: "2023",
    desc: "Lance Loken appeared on Fox Business to discuss the Houston housing market outlook.",
    duration: "4:12",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=700&q=80",
    isInterview: true,
  },
];

const radioSpots = [
  { title: "Houston's Guaranteed Home Sale — :60", station: "KTRH 740 AM", year: "2024", desc: "Drive-time spot on Houston's most-listened-to news radio station." },
  { title: "Why You Need a Team — :30", station: "KSBJ 89.3 FM", year: "2023", desc: "Spot explaining why team-based real estate outperforms solo agents." },
  { title: "Lance Loken Interview", station: "The Morning Drive with Joe Pags", year: "2023", desc: "Live interview discussing 2023 Houston real estate market conditions.", isInterview: true },
  { title: "Cash Offer Upfront — :30", station: "KRBE 104.1 FM", year: "2023", desc: "Targeting first-time and move-up sellers with a clear value proposition." },
  { title: "Move to Houston — Relocation Spot :60", station: "Various", year: "2022", desc: "Syndicated spot for out-of-state buyers relocating to Greater Houston." },
];

export default function TvRadioAdsPage() {
  return (
    <PageLayout>
      {/* ── HERO: dark with broadcast aesthetic ── */}
      <section className="bg-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase mb-5">Media Appearances</p>
              <h1 className="font-serif font-bold text-5xl md:text-6xl text-white leading-none">
                TV &<br />Radio
              </h1>
            </div>
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <Tv size={20} className="text-[#BE1E2D]" />
                <div>
                  <p className="font-serif font-bold text-2xl text-white">{tvSpots.length}</p>
                  <p className="font-sans text-xs text-gray-500">TV Spots</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Radio size={20} className="text-[#BE1E2D]" />
                <div>
                  <p className="font-serif font-bold text-2xl text-white">{radioSpots.length}</p>
                  <p className="font-sans text-xs text-gray-500">Radio Spots</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TV Spots: 3-col thumbnail grid ── */}
      <section className="py-20 px-6 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Tv size={16} className="text-[#BE1E2D]" />
            <h2 className="font-sans font-bold text-xs tracking-[0.4em] text-white uppercase">Television</h2>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tvSpots.map((spot, i) => (
              <div key={i} className="group cursor-pointer">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-[#1A1A1A] overflow-hidden mb-4">
                  <img
                    src={spot.thumbnail}
                    alt={spot.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#BE1E2D]/90 group-hover:bg-[#BE1E2D] flex items-center justify-center transition-colors">
                      <Play size={20} className="text-white translate-x-0.5" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 font-sans text-xs text-white px-2 py-0.5">
                    {spot.duration}
                  </div>
                  {spot.isInterview && (
                    <div className="absolute top-3 left-3 bg-[#BE1E2D] font-sans text-[9px] font-bold tracking-wide text-white px-2.5 py-1 uppercase">
                      Interview
                    </div>
                  )}
                </div>
                {/* Meta */}
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase">{spot.channel}</span>
                    <span className="font-sans text-xs text-gray-600">{spot.year}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-sm text-white group-hover:text-[#BE1E2D] transition-colors mb-1">{spot.title}</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">{spot.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Radio spots: list layout ── */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <Radio size={16} className="text-[#BE1E2D]" />
            <h2 className="font-sans font-bold text-xs tracking-[0.4em] text-white uppercase">Radio</h2>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <div className="flex flex-col divide-y divide-white/5">
            {radioSpots.map((spot, i) => (
              <div key={i} className="py-6 grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-center group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#BE1E2D]/10 flex items-center justify-center transition-colors shrink-0">
                  <Play size={16} className="text-gray-500 group-hover:text-[#BE1E2D] transition-colors translate-x-0.5" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase">{spot.station}</span>
                    <span className="font-sans text-xs text-gray-600">{spot.year}</span>
                    {spot.isInterview && (
                      <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-gray-400 uppercase border border-gray-700 px-2 py-0.5">Live</span>
                    )}
                  </div>
                  <h3 className="font-sans font-semibold text-sm text-white group-hover:text-[#BE1E2D] transition-colors mb-0.5">{spot.title}</h3>
                  <p className="font-sans text-xs text-gray-500">{spot.desc}</p>
                </div>
                <div className="hidden md:flex w-10 h-10 bg-white/5 rounded-full items-center justify-center group-hover:bg-[#BE1E2D]/10 transition-colors">
                  <Play size={14} className="text-gray-600 group-hover:text-[#BE1E2D] translate-x-0.5 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-white border-t border-gray-100 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Media Inquiries</p>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-3">Want to feature The Loken Group?</h2>
          <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
            For media appearances, interviews, and sponsorship opportunities, contact our communications team.
          </p>
          <a href="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors">
            Contact Our Media Team
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
