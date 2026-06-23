import PageLayout from "@/components/PageLayout";
import { MapPin, SlidersHorizontal, Search, Bed, Bath, DollarSign } from "lucide-react";

export const metadata = {
  title: "Houston Map Search | Search Homes by Map | The Loken Group",
  description: "Search Greater Houston homes by map — filter by neighborhood, price, beds, and more.",
};

const neighborhoods = [
  { name: "The Woodlands", count: 142, avg: "$620K" },
  { name: "Katy", count: 287, avg: "$385K" },
  { name: "Cypress", count: 198, avg: "$420K" },
  { name: "Sugar Land", count: 165, avg: "$510K" },
  { name: "Pearland", count: 134, avg: "$360K" },
  { name: "Spring", count: 211, avg: "$340K" },
  { name: "Conroe", count: 176, avg: "$310K" },
  { name: "League City", count: 124, avg: "$390K" },
  { name: "Friendswood", count: 89, avg: "$420K" },
  { name: "Missouri City", count: 108, avg: "$330K" },
  { name: "Humble", count: 156, avg: "$295K" },
  { name: "Baytown", count: 97, avg: "$260K" },
];

const priceRanges = ["Under $250K", "$250K–$350K", "$350K–$500K", "$500K–$750K", "$750K–$1M", "$1M+"];
const bedsOptions = ["1+", "2+", "3+", "4+", "5+"];
const propertyTypes = ["Single Family", "Townhome", "Condo", "New Construction", "Land"];

export default function HoustonMapSearchPage() {
  return (
    <PageLayout>
      {/* ── Full-width search bar header ── */}
      <section className="bg-[#1A1A1A] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-4 text-center">Greater Houston</p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white text-center leading-tight mb-10">
            Search by Map
          </h1>
          {/* Search bar */}
          <div className="flex bg-white overflow-hidden">
            <div className="flex items-center gap-3 px-5 flex-1">
              <Search size={16} className="text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Neighborhood, zip code, city, or address…"
                className="flex-1 font-sans text-sm text-[#1A1A1A] py-4 focus:outline-none placeholder-gray-400"
                readOnly
              />
            </div>
            <button className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors whitespace-nowrap flex items-center gap-2">
              <MapPin size={14} />
              Search
            </button>
          </div>
        </div>
      </section>

      {/* ── Filters strip ── */}
      <section className="bg-white border-b border-gray-100 py-4 px-6 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center gap-4 min-w-max">
          <SlidersHorizontal size={14} className="text-gray-400 shrink-0" />
          <span className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wide">Filters</span>
          <div className="w-px h-5 bg-gray-200 mx-1" />
          {/* Price */}
          <div className="flex items-center gap-2">
            <DollarSign size={13} className="text-gray-400" />
            <select className="font-sans text-xs text-[#1A1A1A] border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#BE1E2D]">
              <option>Any Price</option>
              {priceRanges.map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
          {/* Beds */}
          <div className="flex items-center gap-2">
            <Bed size={13} className="text-gray-400" />
            <select className="font-sans text-xs text-[#1A1A1A] border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#BE1E2D]">
              <option>Any Beds</option>
              {bedsOptions.map((b) => <option key={b}>{b} Beds</option>)}
            </select>
          </div>
          {/* Baths */}
          <div className="flex items-center gap-2">
            <Bath size={13} className="text-gray-400" />
            <select className="font-sans text-xs text-[#1A1A1A] border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#BE1E2D]">
              <option>Any Baths</option>
              {["1+", "2+", "3+"].map((b) => <option key={b}>{b} Baths</option>)}
            </select>
          </div>
          {/* Type */}
          <select className="font-sans text-xs text-[#1A1A1A] border border-gray-200 px-3 py-2 focus:outline-none focus:border-[#BE1E2D]">
            <option>Any Type</option>
            {propertyTypes.map((t) => <option key={t}>{t}</option>)}
          </select>
          <button className="font-sans text-xs font-semibold text-[#BE1E2D] hover:underline ml-2">
            Reset
          </button>
        </div>
      </section>

      {/* ── Main: map placeholder + neighborhood sidebar ── */}
      <section className="min-h-[600px] grid grid-cols-1 lg:grid-cols-[320px_1fr]">
        {/* Sidebar: neighborhood list */}
        <aside className="bg-gray-50 border-r border-gray-100 overflow-y-auto max-h-[700px] lg:max-h-none">
          <div className="px-5 py-5 border-b border-gray-100 sticky top-0 bg-gray-50 z-10">
            <p className="font-sans text-xs font-bold text-[#1A1A1A]">
              {neighborhoods.reduce((a, n) => a + n.count, 0)} Active Listings
            </p>
            <p className="font-sans text-xs text-gray-400">12 communities in Greater Houston</p>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {neighborhoods.map((n, i) => (
              <button key={i} className="flex items-center justify-between px-5 py-4 hover:bg-white transition-colors text-left group">
                <div>
                  <div className="flex items-center gap-2">
                    <MapPin size={12} className="text-[#BE1E2D] shrink-0" />
                    <span className="font-sans font-semibold text-sm text-[#1A1A1A] group-hover:text-[#BE1E2D] transition-colors">{n.name}</span>
                  </div>
                  <p className="font-sans text-xs text-gray-400 mt-0.5 pl-5">Avg. {n.avg}</p>
                </div>
                <span className="font-sans text-xs font-bold text-white bg-[#BE1E2D] rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                  {n.count > 99 ? "99+" : n.count}
                </span>
              </button>
            ))}
          </div>
        </aside>

        {/* Map area: stylized placeholder with grid overlay ── */}
        <div className="relative bg-[#E8EBE0] overflow-hidden min-h-[500px]">
          {/* Grid lines mimicking map tiles */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />
          {/* Simulated roads */}
          <div className="absolute top-1/3 left-0 right-0 h-px bg-white/60" />
          <div className="absolute top-2/3 left-0 right-0 h-px bg-white/60" />
          <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white/60" />
          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-white/60" />
          {/* Map pins */}
          {[
            { top: "22%", left: "55%", label: "The Woodlands", count: 142 },
            { top: "48%", left: "28%", label: "Katy", count: 287 },
            { top: "38%", left: "40%", label: "Cypress", count: 198 },
            { top: "62%", left: "35%", label: "Sugar Land", count: 165 },
            { top: "75%", left: "50%", label: "Pearland", count: 134 },
            { top: "32%", left: "62%", label: "Spring", count: 211 },
          ].map((pin, i) => (
            <div key={i} className="absolute group cursor-pointer" style={{ top: pin.top, left: pin.left }}>
              <div className="bg-[#BE1E2D] text-white font-sans font-bold text-xs px-3 py-1.5 shadow-lg hover:bg-[#a01825] transition-colors flex items-center gap-1.5 whitespace-nowrap relative -translate-x-1/2 -translate-y-full">
                <span>{pin.count}</span>
                <span className="hidden group-hover:inline">{pin.label}</span>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-[#BE1E2D]" />
              </div>
            </div>
          ))}

          {/* Center label */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-white/80 backdrop-blur-sm px-6 py-4 text-center shadow-sm">
              <MapPin size={20} className="text-[#BE1E2D] mx-auto mb-2" />
              <p className="font-sans font-bold text-sm text-[#1A1A1A]">Interactive Map</p>
              <p className="font-sans text-xs text-gray-400 mt-0.5">Full map integration available</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick links strip ── */}
      <section className="bg-white border-t border-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-6">Browse by Area</p>
          <div className="flex flex-wrap gap-3">
            {neighborhoods.map((n, i) => (
              <a
                key={i}
                href="/search-for-homes"
                className="font-sans text-xs font-semibold px-4 py-2 border border-gray-200 text-gray-600 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors"
              >
                {n.name} ({n.count})
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-serif font-bold text-2xl text-white mb-1">Not finding what you&apos;re looking for?</h2>
            <p className="font-sans text-sm text-gray-400">Tell us your criteria and we&apos;ll find homes before they&apos;re listed.</p>
          </div>
          <a href="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors whitespace-nowrap">
            Get Matched to Homes
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
