"use client";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ChevronDown, ArrowRight, Download } from "lucide-react";

const categories = [
  {
    id: "buyer",
    label: "Buyer Guides",
    color: "bg-green-700",
    items: [
      { title: "Complete Guide to Buying a Home in Houston", desc: "Step-by-step from pre-approval to closing — what to expect, what to watch for, and how to win in any market.", action: "Download PDF" },
      { title: "First-Time Buyer Checklist", desc: "A printable checklist covering every milestone from choosing a lender to receiving your keys on closing day.", action: "Download Checklist" },
      { title: "Are You an A, B, or C Buyer?", desc: "Understand how sellers and agents categorize buyers — and what you can do to put yourself in the strongest position.", action: "Read Article" },
      { title: "Houston School District Comparison Guide", desc: "Compare Katy ISD, CISD, Cy-Fair, Pearland ISD, and more — ratings, boundaries, and what matters most for families.", action: "Download Guide" },
      { title: "Understanding Closing Costs in Texas", desc: "A plain-English breakdown of every fee you'll encounter at closing — no surprises on your big day.", action: "Read Article" },
      { title: "Houston Home Affordability Calculator", desc: "Estimate your buying power based on your income, debt, and down payment before you start shopping.", action: "Use Tool" },
    ],
  },
  {
    id: "seller",
    label: "Seller Guides",
    color: "bg-blue-700",
    items: [
      { title: "Complete Guide to Selling Your Home in Houston", desc: "Everything you need to know to sell fast and for top dollar — from staging to contract negotiation.", action: "Download PDF" },
      { title: "5 Ways to Add $30,000 to Your Home Before Listing", desc: "The highest-ROI improvements sellers can make in 30 days or less — without major renovation spend.", action: "Read Article" },
      { title: "Why Properties Fail to Sell", desc: "The most common reasons homes sit on the market — and exactly what The Loken Group does differently to move properties fast.", action: "Read Article" },
      { title: "Seller Net Sheet Calculator", desc: "Estimate your take-home after commissions, closing costs, and payoff. Know what you'll net before you list.", action: "Use Tool" },
      { title: "Staging Your Home for Maximum Impact", desc: "A room-by-room guide to preparing your home for photography and showings that command top-dollar offers.", action: "Download Guide" },
      { title: "Instant Home Value Estimator", desc: "Get an immediate estimate of your home's current market value based on recent comparable sales.", action: "Get Estimate" },
    ],
  },
  {
    id: "market",
    label: "Market Reports",
    color: "bg-[#1A1A1A]",
    items: [
      { title: "Houston Real Estate Market Report — Spring 2024", desc: "Inventory, pricing trends, and community spotlights for Greater Houston's most active suburbs.", action: "Download Report" },
      { title: "The Woodlands vs. Katy: Market Comparison 2024", desc: "A data-driven side-by-side of two of Houston's most competitive suburban markets.", action: "Read Article" },
      { title: "Interest Rate Impact on Houston Buyers", desc: "How rate shifts affect affordability in Houston's suburbs — and what it means for buyers and sellers right now.", action: "Read Article" },
      { title: "2024 Houston Suburb Price Index", desc: "Median home prices, price-per-sqft, and year-over-year appreciation across all major Houston suburbs.", action: "Download Report" },
    ],
  },
  {
    id: "programs",
    label: "Sell Programs",
    color: "bg-[#BE1E2D]",
    items: [
      { title: "Your Home Sold Guaranteed — Full Explainer", desc: "How our Guaranteed Sale program works, what the guarantee covers, and who it's right for.", action: "Read Guide" },
      { title: "Buy Before You Sell — Program Guide", desc: "Complete breakdown of how we help move-up buyers purchase without a contingency.", action: "Read Guide" },
      { title: "Cash Offer Upfront — FAQ", desc: "Common questions about our cash offer program — offers, timelines, eligibility, and how it compares.", action: "Read FAQ" },
    ],
  },
];

function AccordionItem({ item, isOpen, onToggle }: { item: (typeof categories)[0]["items"][0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 px-0 text-left group"
      >
        <span className="font-sans font-semibold text-sm text-[#1A1A1A] group-hover:text-[#BE1E2D] transition-colors pr-4">
          {item.title}
        </span>
        <ChevronDown
          size={16}
          className={`text-gray-400 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#BE1E2D]" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="pb-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xl">{item.desc}</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#BE1E2D] whitespace-nowrap hover:gap-2.5 transition-all shrink-0"
          >
            <Download size={11} />
            {item.action}
          </a>
        </div>
      )}
    </div>
  );
}

function CategorySection({ cat }: { cat: (typeof categories)[0] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-16 px-6 border-b border-gray-100 last:border-b-0">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className={`font-sans text-[9px] font-bold tracking-[0.35em] text-white px-3 py-1.5 uppercase ${cat.color}`}>
            {cat.label}
          </span>
          <div className="h-px bg-gray-100 flex-1" />
          <span className="font-sans text-xs text-gray-400">{cat.items.length} resources</span>
        </div>
        <div>
          {cat.items.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filtered = activeTab === "all" ? categories : categories.filter((c) => c.id === activeTab);

  return (
    <PageLayout>
      {/* ── HERO: clean editorial strip ── */}
      <section className="bg-white border-b border-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-4">Free Resources</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
              Buyer & Seller<br />Resource Library
            </h1>
            <p className="font-sans text-gray-500 text-sm leading-relaxed max-w-xs">
              Free guides, calculators, market reports, and program explainers — everything you need to make confident real estate decisions.
            </p>
          </div>
        </div>
      </section>

      {/* ── STICKY TAB NAV ── */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-0 overflow-x-auto">
            {[{ id: "all", label: "All Resources" }, ...categories.map((c) => ({ id: c.id, label: c.label }))].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`font-sans text-xs font-semibold tracking-wide px-5 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-[#BE1E2D] text-[#BE1E2D]"
                    : "border-transparent text-gray-500 hover:text-[#1A1A1A]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── ACCORDION SECTIONS ── */}
      <div className="bg-white">
        {filtered.map((cat) => (
          <CategorySection key={cat.id} cat={cat} />
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Ready to Act?</p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Talk to an Agent Today
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Our team is available 7 days a week to answer your questions and walk you through your options — no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors">
              Contact Us
            </a>
            <a href="/your-home-sold-guaranteed" className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-sans font-semibold text-sm px-10 py-3 hover:border-white transition-colors">
              Get My Guaranteed Offer <ArrowRight size={13} />
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
