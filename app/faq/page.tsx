"use client";
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";

const sections = [
  {
    id: "selling",
    label: "Selling",
    count: 6,
    faqs: [
      { q: "How does the Guaranteed Sale work?", a: "We market your home at full market value using our proven systems — professional photography, targeted digital marketing, and agent outreach. If it doesn't sell within the agreed timeframe, we buy it ourselves at a price we commit to upfront. You're never left waiting or forced to accept less." },
      { q: "What's the average time to sell with you?", a: "Our average days on market is 29 — well below the Houston metro average. In many cases, especially in high-demand communities like The Woodlands and Katy, we've closed in under 10 days." },
      { q: "Do I need to make repairs before listing?", a: "For our traditional Guaranteed Sale program, we recommend minor prep work that yields high returns. However, with our Cash Offer Upfront program, we purchase homes as-is — no repairs, no staging, no showings required." },
      { q: "How is my listing price determined?", a: "We perform a detailed Comparative Market Analysis (CMA) using recent comparable sales, current inventory, location, condition, and market trends. We present this data transparently and recommend a strategy designed to maximize your net proceeds." },
      { q: "What is the Buy Before You Sell program?", a: "It allows you to buy your next home before selling your current one. We guarantee the purchase of your current home so you can make a non-contingent offer on your new home — giving you a huge competitive advantage in Houston's market." },
      { q: "What fees does The Loken Group charge sellers?", a: "Our commission structure is discussed during your listing consultation. We're transparent about all costs upfront and provide a Seller Net Sheet so you know exactly what you'll walk away with before signing anything." },
    ],
  },
  {
    id: "buying",
    label: "Buying",
    count: 6,
    faqs: [
      { q: "Do I need to be pre-approved before working with you?", a: "We strongly recommend it. Pre-approval tells you your true budget, shows sellers you're serious, and lets our agents act quickly when the right home appears. We can connect you with trusted local lenders who can often pre-approve you within 24 hours." },
      { q: "How much does it cost to use a buyer's agent?", a: "In Texas, buyer's agent commissions are typically paid by the seller as part of the transaction. In most cases, our buyer services come at no direct cost to you." },
      { q: "Which Houston suburbs do you specialize in?", a: "We serve the full Greater Houston metro — The Woodlands, Katy, Cypress, Sugar Land, Pearland, Spring, Conroe, Friendswood, League City, Humble, Baytown, Missouri City, and beyond. Our agents live in these communities." },
      { q: "What's the difference between pre-qualification and pre-approval?", a: "Pre-qualification is a quick estimate based on self-reported income and debt. Pre-approval involves a full credit check and income verification — it carries much more weight with sellers and is what we recommend before you begin seriously shopping." },
      { q: "How do you help buyers win in a competitive market?", a: "Our agents know the local markets intimately and can often identify homes before they're officially listed. We also help structure offers strategically — escalation clauses, flexible closing dates, and strong earnest money." },
      { q: "Can you help if I'm relocating from out of state?", a: "Absolutely. We've helped hundreds of relocating families navigate Houston's communities from afar. We offer virtual tours, detailed community guides, and dedicated relocation specialists who understand the unique needs of out-of-state buyers." },
    ],
  },
  {
    id: "programs",
    label: "Our Programs",
    count: 4,
    faqs: [
      { q: "What makes the Cash Offer Upfront different from an investor offer?", a: "Investor offers are typically 60–75 cents on the dollar. Our Cash Offer Upfront is based on real, current comparable sales — designed to be a fair market price, not a lowball. We're a team of real estate professionals, not a hedge fund." },
      { q: "Can I use Buy Before You Sell if I haven't found a home yet?", a: "Yes. You can enroll in the program and start shopping before you've committed to a new purchase. We'll work with you to understand your current home's value and what we'd guarantee for it so you can shop with a clear budget." },
      { q: "Is the Guaranteed Sale available on all homes?", a: "The Guaranteed Sale is available on most residential properties in our service area. During our initial consultation we'll confirm eligibility based on condition, location, and price point." },
      { q: "Can I combine programs?", a: "In some cases, yes. For example, a move-up buyer might use our Buy Before You Sell program to secure their next home, then choose Cash Offer Upfront for the fastest possible exit on their current property. Our specialists will help you find the right combination." },
    ],
  },
  {
    id: "general",
    label: "General",
    count: 4,
    faqs: [
      { q: "How do I get started?", a: "The easiest way is to call or text us at (281) 861-4624, fill out a contact form, or request a guaranteed offer on our website. A team member will reach out within a few hours." },
      { q: "Is The Loken Group affiliated with Keller Williams?", a: "Yes. The Loken Group operates under the Keller Williams brand, which gives us access to the world's largest real estate technology platform, global referral network, and industry-leading training systems." },
      { q: "Do you work with investors?", a: "Yes. We work with both residential buyers and investors looking for rental properties, fix-and-flip opportunities, and new construction in the Greater Houston area." },
      { q: "Can you help with new construction?", a: "Yes. We have strong relationships with the leading homebuilders in Greater Houston and can represent you in new construction transactions — at no additional cost to you as a buyer." },
    ],
  },
];

function FaqItem({ faq, isOpen, onToggle }: { faq: { q: string; a: string }; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button onClick={onToggle} className="w-full flex items-start justify-between py-5 text-left gap-4 group">
        <span className={`font-sans font-semibold text-sm leading-snug transition-colors ${isOpen ? "text-[#BE1E2D]" : "text-[#1A1A1A] group-hover:text-[#BE1E2D]"}`}>
          {faq.q}
        </span>
        <ChevronDown size={15} className={`shrink-0 mt-0.5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#BE1E2D]" : ""}`} />
      </button>
      {isOpen && (
        <p className="font-sans text-sm text-gray-600 leading-relaxed pb-5 max-w-2xl">{faq.a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const current = sections.find((s) => s.id === activeSection)!;

  return (
    <PageLayout>
      {/* ── HERO: clean two-line with counter ── */}
      <section className="bg-[#1A1A1A] py-16 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-4">Have Questions?</p>
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              Frequently Asked<br />Questions
            </h1>
          </div>
          <div className="flex gap-6">
            {sections.map((s) => (
              <div key={s.id} className="text-center">
                <p className="font-serif font-bold text-3xl text-white">{s.count}</p>
                <p className="font-sans text-xs text-gray-400 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BODY: sidebar nav + content ── */}
      <section className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">

            {/* Sticky sidebar */}
            <aside className="lg:sticky lg:top-[100px] lg:self-start">
              <p className="font-sans text-[10px] font-bold tracking-[0.35em] text-gray-400 uppercase mb-4">Categories</p>
              <nav className="flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setActiveSection(s.id); setOpenIdx(null); }}
                    className={`flex items-center justify-between gap-3 px-4 py-3 text-left font-sans text-sm font-semibold transition-colors whitespace-nowrap w-full ${
                      activeSection === s.id
                        ? "bg-[#BE1E2D] text-white"
                        : "text-gray-600 hover:text-[#1A1A1A] hover:bg-gray-50"
                    }`}
                  >
                    <span>{s.label}</span>
                    <span className={`font-sans text-xs font-normal ${activeSection === s.id ? "text-white/70" : "text-gray-400"}`}>
                      {s.count}
                    </span>
                  </button>
                ))}
              </nav>

              {/* CTA card */}
              <div className="hidden lg:block mt-10 border border-gray-100 p-6 bg-gray-50">
                <p className="font-sans text-xs font-bold text-[#1A1A1A] mb-2">Still have questions?</p>
                <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">Our team answers calls Mon–Sat.</p>
                <a href="tel:2818614624" className="inline-flex items-center gap-2 font-sans text-xs font-semibold text-[#BE1E2D] hover:gap-2.5 transition-all">
                  <Phone size={12} /> (281) 861-4624
                </a>
              </div>
            </aside>

            {/* FAQ content */}
            <div>
              <div className="mb-8 pb-6 border-b border-gray-100">
                <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A]">{current.label} Questions</h2>
                <p className="font-sans text-sm text-gray-400 mt-1">{current.count} answers</p>
              </div>
              <div>
                {current.faqs.map((faq, i) => (
                  <FaqItem
                    key={i}
                    faq={faq}
                    isOpen={openIdx === i}
                    onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                  />
                ))}
              </div>

              {/* Inline CTA */}
              <div className="mt-12 bg-[#1A1A1A] p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="font-serif font-bold text-xl text-white mb-1">Didn't find your answer?</p>
                  <p className="font-sans text-sm text-gray-400">Talk to a real person — we're available 7 days a week.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                  <a href="/contact" className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-6 py-3 transition-colors">
                    Contact Us <ArrowRight size={13} />
                  </a>
                  <a href="tel:2818614624" className="inline-flex items-center gap-2 border border-white/30 text-white font-sans font-semibold text-sm px-6 py-3 hover:border-white transition-colors">
                    <Phone size={13} /> Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
