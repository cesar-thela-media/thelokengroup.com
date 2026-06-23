import PageLayout from "@/components/PageLayout";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Partners | The Loken Group",
  description: "Our trusted network of Houston home service partners — lenders, inspectors, contractors, and more.",
};

const partnerCategories = [
  {
    category: "Mortgage Lenders",
    color: "border-t-[#BE1E2D]",
    partners: [
      { name: "Highlands Residential Mortgage", tagline: "Local experts, fast pre-approvals", detail: "Pre-approvals in 24 hours. Dedicated team for Loken Group clients." },
      { name: "Cross Country Mortgage", tagline: "Competitive rates, diverse programs", detail: "FHA, VA, Jumbo, and conventional options with in-house underwriting." },
      { name: "PrimeLending", tagline: "First-time buyer specialists", detail: "Down payment assistance programs and first-time buyer education." },
    ],
  },
  {
    category: "Home Inspection",
    color: "border-t-[#1A1A1A]",
    partners: [
      { name: "AmeriSpec Inspection Services", tagline: "TREC licensed, same-day reports", detail: "Thorough residential inspections with photo documentation and same-day digital reports." },
      { name: "WIN Home Inspection", tagline: "4.9★ on Google", detail: "Detailed reports within 24 hours. Thermal imaging included on all inspections." },
    ],
  },
  {
    category: "Title & Escrow",
    color: "border-t-blue-600",
    partners: [
      { name: "Capital Title of Texas", tagline: "Houston's most trusted title company", detail: "Full-service title and escrow with experienced local closers and mobile signing options." },
      { name: "Heritage Title", tagline: "On-time, on-budget closings", detail: "Digital closings available. Serving Greater Houston for 25+ years." },
    ],
  },
  {
    category: "Contractors & Repairs",
    color: "border-t-green-700",
    partners: [
      { name: "Bellaire Construction Group", tagline: "Pre-listing repairs, fast turnaround", detail: "Specializes in pre-listing repairs, light renovation, and staging-ready prep." },
      { name: "Houston Home Pros", tagline: "Full service, vetted contractors", detail: "Plumbing, HVAC, electrical, roofing — background-checked and insured." },
    ],
  },
  {
    category: "Moving & Storage",
    color: "border-t-amber-500",
    partners: [
      { name: "Two Men and a Truck", tagline: "Loken Group client discount", detail: "Loken Group clients receive preferred pricing and scheduling priority." },
      { name: "U-Pack Moving", tagline: "Flexible relocation solutions", detail: "Ideal for in-state and out-of-state moves. Self-pack or full service." },
    ],
  },
  {
    category: "Home Warranty",
    color: "border-t-purple-600",
    partners: [
      { name: "American Home Shield", tagline: "Comprehensive coverage", detail: "Covers systems and appliances. Optional coverage for sellers during listing period." },
      { name: "First American Home Warranty", tagline: "Buyer peace of mind", detail: "Flexible plans for buyers and sellers. Fast service dispatch nationwide." },
    ],
  },
];

export default function PartnersPage() {
  return (
    <PageLayout>
      {/* ── HERO: minimal with editorial spacing ── */}
      <section className="bg-white py-20 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-end">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-5">Trusted Partners</p>
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                Our Preferred<br />Partner Network
              </h1>
            </div>
            <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-lg lg:ml-auto">
              Every partner on this list has been personally vetted by The Loken Group. We refer them because they deliver — not because of incentives. Each one is held to the same standard of excellence we hold ourselves to.
            </p>
          </div>
        </div>
      </section>

      {/* ── Partner grid by category ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {partnerCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-6 mb-8">
                <h2 className="font-sans font-bold text-xs tracking-[0.35em] text-[#1A1A1A] uppercase">{cat.category}</h2>
                <div className="h-px bg-gray-100 flex-1" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {cat.partners.map((p, i) => (
                  <div key={i} className={`border border-gray-100 border-t-4 ${cat.color} p-7 group hover:shadow-sm transition-shadow`}>
                    <h3 className="font-serif font-bold text-base text-[#1A1A1A] mb-1 group-hover:text-[#BE1E2D] transition-colors">{p.name}</h3>
                    <p className="font-sans text-xs font-semibold text-[#BE1E2D] mb-3">{p.tagline}</p>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{p.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Become a partner CTA ── */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Partner With Us</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Interested in becoming a preferred partner?
            </h2>
            <p className="font-sans text-gray-400 text-sm leading-relaxed">
              We close 500+ transactions per year. If your business serves home buyers or sellers at the highest level, let&apos;s talk about how we can grow together.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <a href="/contact" className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors">
              Inquire About Partnership <ArrowRight size={14} />
            </a>
            <p className="font-sans text-xs text-gray-500">We typically respond within 1 business day.</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
