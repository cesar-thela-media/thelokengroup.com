import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, MapPin, Bed, Bath, Square } from "lucide-react";

export const metadata = {
  title: "Buy a Home in Houston",
  description: "Find your dream home in Greater Houston with The Loken Group — local experts in The Woodlands, Katy, Sugar Land, and beyond.",
};

const communities = [
  { name: "The Woodlands", county: "Montgomery Co.", price: "From $350k", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { name: "Sugar Land", county: "Fort Bend Co.", price: "From $295k", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { name: "Katy", county: "Harris / Fort Bend", price: "From $260k", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { name: "Cypress", county: "Harris Co.", price: "From $280k", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { name: "Pearland", county: "Brazoria Co.", price: "From $250k", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
  { name: "Spring", county: "Harris Co.", price: "From $220k", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80" },
];

const featuredListings = [
  { price: "$485,000", beds: "4", baths: "3", sqft: "2,450", address: "The Woodlands", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { price: "$325,000", beds: "3", baths: "2", sqft: "1,850", address: "Katy", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { price: "$615,000", beds: "5", baths: "4", sqft: "3,200", address: "Sugar Land", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
];

const steps = [
  { n: "1", t: "Get Pre-Approved", b: "Know your number before you start. We connect you with trusted local lenders." },
  { n: "2", t: "Find Your Home", b: "We show you on-market, pre-market, and off-market properties that fit your criteria." },
  { n: "3", t: "Make an Offer", b: "Our negotiators structure offers that win — escalation, inspections, favorable terms." },
  { n: "4", t: "Close & Move In", b: "We coordinate the entire closing process. You just show up for the keys." },
];

export default function BuyPage() {
  return (
    <PageLayout>
      {/* ── HERO: white/light with large centered heading + search prompt ── */}
      <section className="relative bg-white overflow-hidden border-b border-gray-100">
        {/* Background image faint right side */}
        <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1000&q=80"
            alt="Beautiful Houston home interior"
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-5">Buy a Home</p>
          <h1 className="font-serif font-bold text-[#1A1A1A] leading-[1.05] mb-6 max-w-2xl" style={{ fontSize: "clamp(2.5rem,5.5vw,4.5rem)" }}>
            Find Your Perfect Home in Greater Houston
          </h1>
          <p className="font-sans text-gray-500 text-base leading-relaxed max-w-xl mb-10">
            Our buyer specialists close 45–60 transactions per year across all 9 Greater Houston counties. More experience means better deals, faster closings, and fewer surprises.
          </p>

          {/* Quick search bar */}
          <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mb-14">
            <input
              type="text"
              placeholder="City, ZIP, or neighborhood…"
              className="flex-1 border border-gray-200 px-5 py-4 font-sans text-sm text-[#1A1A1A] focus:outline-none focus:border-[#BE1E2D] transition-colors"
            />
            <a href="/search-for-homes" className="inline-flex items-center justify-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors whitespace-nowrap">
              Search Homes <ArrowRight size={14} />
            </a>
          </div>

          {/* 3 featured listing previews */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featuredListings.map((l, i) => (
              <a key={i} href="/search-for-homes" className="group flex items-center gap-3 border border-gray-100 p-3 hover:border-[#BE1E2D]/40 hover:shadow-sm transition-all">
                <div className="relative w-20 h-16 shrink-0 overflow-hidden bg-gray-100">
                  <Image src={l.img} alt={l.address} fill sizes="80px" className="object-cover group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-serif font-bold text-lg text-[#1A1A1A] leading-none">{l.price}</p>
                  <p className="font-sans text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                    <Bed size={10} />{l.beds} · <Bath size={10} />{l.baths} · <Square size={10} />{l.sqft}
                  </p>
                  <p className="font-sans text-xs text-gray-500 flex items-center gap-0.5 mt-0.5">
                    <MapPin size={9} className="text-[#BE1E2D]" />{l.address}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNITIES: image tile grid ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-2">Where We Work</p>
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Communities We Serve</h2>
            </div>
            <a href="/houston-communities" className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm font-semibold text-[#BE1E2D] hover:gap-2.5 transition-all">
              View All Communities <ArrowRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {communities.map((c, i) => (
              <a key={i} href="/houston-communities" className="group relative overflow-hidden aspect-[4/3] block">
                <Image src={c.img} alt={c.name} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 to-[#1A1A1A]/10" />
                <div className="absolute bottom-0 left-0 p-5">
                  <p className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase">{c.price}</p>
                  <h3 className="font-serif font-bold text-xl text-white leading-tight">{c.name}</h3>
                  <p className="font-sans text-[11px] text-white/60 flex items-center gap-1 mt-0.5">
                    <MapPin size={9} /> {c.county}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── BUYING PROCESS: horizontal steps ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Simple Process</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">How Buying Works With Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-px bg-gray-200" />
            {steps.map((s) => (
              <div key={s.n} className="flex flex-col items-center text-center relative">
                <div className="w-12 h-12 border-2 border-[#BE1E2D] rounded-full flex items-center justify-center bg-white z-10 mb-5">
                  <span className="font-serif font-bold text-[#BE1E2D] text-lg">{s.n}</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#1A1A1A] mb-2">{s.t}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[170px]">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US: bold stat highlights ── */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-8">
              The Loken Group Buyer Advantage
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "45–60", label: "Transactions per agent per year" },
                { num: "9", label: "Counties served in Greater Houston" },
                { num: "500+", label: "Families helped this year" },
                { num: "#1", label: "Real estate team in Houston" },
              ].map((s, i) => (
                <div key={i} className="border border-white/10 p-5">
                  <p className="font-serif font-bold text-3xl text-[#BE1E2D] leading-none mb-1">{s.num}</p>
                  <p className="font-sans text-xs text-gray-400 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 shadow-2xl">
            <LeadForm
              source="buy-page"
              title="Connect with a"
              titleRed="Buyer Specialist"
              subtitle="Tell us what you're looking for — we'll find it."
              submitLabel="Start My Home Search"
              showNeedToSell
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
