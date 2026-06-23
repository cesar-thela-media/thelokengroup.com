import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Cash Offer Upfront",
  description: "Get a fair cash offer on your home — skip the showings and close on your timeline.",
};

const timeline = [
  { day: "Day 1", title: "Request Your Offer", body: "Submit your home details. We review and prepare a fair, data-backed cash offer within 24 hours." },
  { day: "Day 2", title: "Review & Accept", body: "We present your offer transparently — no hidden fees, no last-minute reductions." },
  { day: "10–90", title: "Choose Your Close Date", body: "Pick your closing date — as fast as 10 days or as far as 90 days out. Your timeline." },
  { day: "Done", title: "Collect Your Check", body: "Close, sign, and walk away with cash in hand. No repairs, no showings, no stress." },
];

const compare = [
  ["Showings Required", "Yes", "Yes", "No"],
  ["Close Timeline", "30–60 days", "Flexible", "10–90 days"],
  ["Repairs Required", "Minor", "Minor", "None — as-is"],
  ["Price Certainty", "Guaranteed floor", "Market rate", "Offer upfront"],
  ["Best For", "Max price", "Move-up buyers", "Speed & certainty"],
];

export default function CashOfferUpfrontPage() {
  return (
    <PageLayout>
      {/* ── HERO: white/bold — centered big number focal point ── */}
      <section className="bg-white border-b border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-0 grid grid-cols-1 lg:grid-cols-2 gap-0 items-end">
          {/* Left: big number + text */}
          <div className="pb-20">
            <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-5">Sell Program — 03</p>
            {/* Giant focal number */}
            <div className="flex items-end gap-4 mb-6">
              <span className="font-serif font-bold text-[#1A1A1A] leading-none select-none" style={{ fontSize: "clamp(5rem,16vw,11rem)" }}>10</span>
              <div className="pb-3">
                <span className="font-sans text-xl font-bold text-[#BE1E2D] block leading-tight">DAYS</span>
                <span className="font-sans text-xs text-gray-400 block leading-tight">to close</span>
              </div>
            </div>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4">
              Cash Offer Upfront.<br />Skip the Showings.
            </h1>
            <p className="font-sans text-gray-500 text-base leading-relaxed max-w-md mb-8">
              Get a fair cash offer on your timeline. Zero showings, zero repairs, zero uncertainty. Close as fast as 10 days or as slow as 90.
            </p>
            <div className="grid grid-cols-2 gap-px bg-gray-100 border border-gray-100 max-w-sm">
              {[
                { val: "0", lbl: "Showings" },
                { val: "$0", lbl: "Repairs" },
                { val: "100%", lbl: "As-Is" },
                { val: "24h", lbl: "Offer Response" },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5 text-center">
                  <p className="font-serif font-bold text-2xl text-[#BE1E2D]">{s.val}</p>
                  <p className="font-sans text-[10px] text-gray-400 tracking-wide mt-0.5">{s.lbl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: house image flush to edge */}
          <div className="relative hidden lg:block self-stretch min-h-[540px]">
            <Image
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&q=80"
              alt="Cash offer on your home"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
            {/* Form overlay card */}
            <div className="absolute bottom-8 left-0 right-8 bg-white shadow-2xl p-6 ml-[-2rem]">
              <LeadForm
                source="cash-offer-upfront"
                title="Get Your"
                titleRed="Cash Offer"
                subtitle="No obligation. Response within 24 hours."
                submitLabel="Request My Cash Offer"
                compact
              />
            </div>
          </div>
        </div>
        {/* Mobile form */}
        <div className="lg:hidden px-6 pb-16">
          <div className="bg-gray-50 border border-gray-200 p-6">
            <LeadForm
              source="cash-offer-upfront"
              title="Get Your"
              titleRed="Cash Offer"
              subtitle="No obligation. Response within 24 hours."
              submitLabel="Request My Cash Offer"
            />
          </div>
        </div>
      </section>

      {/* ── TIMELINE: horizontal steps with connecting dots ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Simple Process</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">From Request to Cash — Fast</h2>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-px bg-[#BE1E2D]/20" />
            {timeline.map((t, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-[72px] h-[72px] bg-[#1A1A1A] rounded-full flex flex-col items-center justify-center z-10 mb-5 shrink-0">
                  <span className="font-sans text-[9px] text-gray-400 leading-none">{t.day.includes("–") || t.day === "Done" ? "" : "Day"}</span>
                  <span className="font-serif font-bold text-white text-xl leading-tight">{t.day.replace("Day ", "")}</span>
                </div>
                <h4 className="font-sans font-bold text-sm text-[#1A1A1A] mb-2">{t.title}</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed max-w-[165px]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARE TABLE ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Side by Side</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Compare All Three Programs</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left py-4 pr-6 font-sans text-xs font-bold tracking-widest text-gray-400 uppercase w-1/4 border-b-2 border-[#1A1A1A]"></th>
                  <th className="text-center py-4 px-4 font-sans text-xs font-bold text-[#1A1A1A] uppercase border-b-2 border-[#1A1A1A]">Guaranteed Sale</th>
                  <th className="text-center py-4 px-4 font-sans text-xs font-bold text-[#1A1A1A] uppercase border-b-2 border-[#1A1A1A]">Buy Before You Sell</th>
                  <th className="py-4 px-4 border-b-2 border-[#BE1E2D]">
                    <span className="block font-sans text-xs font-bold text-white uppercase bg-[#BE1E2D] px-3 py-1.5 text-center">Cash Offer Upfront ✓</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {compare.map(([feature, col1, col2, col3], i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 pr-6 font-sans text-sm font-semibold text-[#1A1A1A]">{feature}</td>
                    <td className="py-4 px-4 text-center font-sans text-sm text-gray-500">{col1}</td>
                    <td className="py-4 px-4 text-center font-sans text-sm text-gray-500">{col2}</td>
                    <td className="py-4 px-4 text-center font-sans text-sm font-semibold text-[#BE1E2D] bg-[#BE1E2D]/5">{col3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <a href="/your-home-sold-guaranteed" className="text-center border border-gray-200 text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors">
              Guaranteed Sale
            </a>
            <a href="/buybeforeyousell" className="text-center border border-gray-200 text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors">
              Buy Before You Sell
            </a>
          </div>
        </div>
      </section>

      {/* ── DARK CTA with house image ── */}
      <section className="relative bg-[#1A1A1A] py-24 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1400&q=60" alt="" fill sizes="100vw" className="object-cover opacity-10" />
        <div className="relative max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">No Obligation</p>
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-white leading-tight mb-5">
            See What Your Home Is Worth — Today
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Request your cash offer now. We review your property and respond within 24 hours — no showings, no repairs, no hassle.
          </p>
          <a href="#top" className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-4 transition-colors">
            Request My Cash Offer <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
