import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Sell Your Home | The Loken Group",
  description: "Sell your Houston home fast and for top dollar. Guaranteed Sale, Cash Offer, and Buy Before You Sell programs.",
};

const programs = [
  {
    num: "01",
    name: "Guaranteed Sale",
    tagline: "We list it. If it doesn't sell, we buy it.",
    href: "/your-home-sold-guaranteed",
    points: ["Full market value listing", "Guaranteed backup offer", "Zero risk to you", "100% success rate since 2014"],
    accent: "bg-[#BE1E2D]",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    num: "02",
    name: "Buy Before You Sell",
    tagline: "Buy your next home before selling your current one.",
    href: "/buybeforeyousell",
    points: ["No contingency offers", "Move once — no temp housing", "We guarantee your current home", "Perfect for move-up buyers"],
    accent: "bg-[#1A1A1A]",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    num: "03",
    name: "Cash Offer Upfront",
    tagline: "Skip showings. Close in as little as 10 days.",
    href: "/cash-offer-upfront",
    points: ["Zero showings required", "As-is — no repairs needed", "Close in 10–90 days", "Fair data-backed offer"],
    accent: "bg-[#BE1E2D]",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
  },
];

const results = [
  { num: "29", unit: "days", label: "average time on market" },
  { num: "+2%", unit: "", label: "above list price on average" },
  { num: "500+", unit: "", label: "homes sold this year" },
  { num: "100%", unit: "", label: "guaranteed sale success rate" },
];

export default function SellPage() {
  return (
    <PageLayout>
      {/* ── HERO: editorial split — no form in hero ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden bg-[#1A1A1A]">
        <Image
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=80"
          alt="Houston luxury home"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        {/* Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent" />
        {/* Large background word */}
        <span className="absolute right-0 bottom-0 font-serif font-bold text-[clamp(120px,20vw,240px)] leading-none text-white/5 select-none pointer-events-none pr-4 pb-0 tracking-tight">
          SELL
        </span>

        <div className="relative w-full max-w-7xl mx-auto px-6 pb-20 pt-40">
          <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-5">
            Sell Your Houston Home
          </p>
          <h1 className="font-serif font-bold text-white leading-[1.05] mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            More Money.<br />Less Time.<br />Guaranteed.
          </h1>
          <p className="font-sans text-gray-300 text-base leading-relaxed max-w-lg mb-10">
            Our listings sell in an average of 29 days at 2% above market rate. And if your home doesn't sell — we buy it ourselves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#get-started" className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors">
              Get My Free Valuation <ArrowRight size={14} />
            </a>
            <a href="/your-home-sold-guaranteed" className="inline-flex items-center gap-2 border border-white/30 text-white font-sans font-semibold text-sm px-8 py-4 hover:border-white transition-colors">
              How the Guarantee Works
            </a>
          </div>
        </div>
      </section>

      {/* ── RESULTS BAR ── */}
      <div className="bg-[#BE1E2D]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/20">
          {results.map((r, i) => (
            <div key={i} className="flex flex-col items-center justify-center py-8 px-4 text-center">
              <span className="font-serif font-bold text-white leading-none" style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)" }}>
                {r.num}<span className="text-xl">{r.unit}</span>
              </span>
              <span className="font-sans text-white/75 text-xs mt-1.5 tracking-wide">{r.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3 PROGRAMS: alternating image/text rows ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Three Ways to Sell</p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-[#1A1A1A] leading-tight">
            Choose the Program<br />That Fits Your Life
          </h2>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col gap-0 border border-gray-200 overflow-hidden">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 lg:grid-cols-2 ${i < programs.length - 1 ? "border-b border-gray-200" : ""}`}
            >
              {/* Image — alternates left/right */}
              <div className={`relative min-h-[280px] lg:min-h-[340px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <Image src={p.img} alt={p.name} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#1A1A1A]/30" />
                <span className="absolute top-6 left-6 font-serif font-bold text-7xl text-white/20 leading-none select-none">{p.num}</span>
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center p-10 lg:p-14 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className={`inline-block font-sans text-[9px] font-bold tracking-[0.35em] text-white px-3 py-1.5 mb-5 self-start ${p.accent}`}>
                  {p.name.toUpperCase()}
                </span>
                <h3 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] leading-snug mb-3">{p.name}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">{p.tagline}</p>
                <ul className="space-y-2 mb-8">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-center gap-2.5 font-sans text-sm text-[#1A1A1A]">
                      <CheckCircle size={14} className="text-[#BE1E2D] shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <a href={p.href} className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#BE1E2D] hover:gap-3 transition-all">
                  Learn More <ArrowRight size={13} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SELLER PROCESS: horizontal numbered timeline ── */}
      <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">What to Expect</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Our Selling Process</h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-6">
            {/* connector line */}
            <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-[#BE1E2D]/30" />
            {[
              { step: "1", title: "Free Valuation", body: "We analyze your home and the market to determine the best list price." },
              { step: "2", title: "Prepare & Stage", body: "Professional photography, staging recommendations, and pre-listing prep." },
              { step: "3", title: "Hit the Market", body: "Full MLS exposure plus our off-market network and digital marketing." },
              { step: "4", title: "Negotiate Offers", body: "Our experts handle all negotiations to maximize your net proceeds." },
              { step: "5", title: "Close & Move", body: "We coordinate every detail from contract to keys." },
            ].map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center relative">
                <div className="w-14 h-14 bg-[#BE1E2D] rounded-full flex items-center justify-center z-10 mb-5">
                  <span className="font-serif font-bold text-white text-xl">{s.step}</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#1A1A1A] mb-2">{s.title}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[160px]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM ANCHOR: full-width dark band ── */}
      <section id="get-started" className="bg-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">No Obligation</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-5">
              Find Out What Your Home Is Worth Today
            </h2>
            <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-md">
              Get a free, no-obligation home valuation. Our specialists will walk you through your options and help you choose the program that fits your timeline and goals.
            </p>
            <div className="flex flex-col gap-3 max-w-xs">
              {["29-day average close", "2% above market rate", "Guaranteed Sale or we buy it"].map((pt) => (
                <div key={pt} className="flex items-center gap-3">
                  <CheckCircle size={15} className="text-[#BE1E2D] shrink-0" />
                  <span className="font-sans text-sm text-gray-300">{pt}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-8 shadow-2xl">
            <LeadForm
              source="sell-page"
              title="Get Your Free"
              titleRed="Home Valuation"
              subtitle="Response within 1 business day."
              submitLabel="Request Free Valuation"
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
