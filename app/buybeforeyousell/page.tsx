import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import { X, CheckCircle, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Buy Before You Sell",
  description: "Buy your next home before selling your current one — move on your terms with The Loken Group.",
};

const problems = [
  "You lose the home you love because you have a sale contingency",
  "You rush your sale and accept less than market value",
  "You scramble to find temporary housing between homes",
  "You make panicked decisions under financial pressure",
];

const solutions = [
  "Make non-contingent offers — be the strongest buyer in the room",
  "Sell your current home at full market value, on your schedule",
  "Move once, straight from your current home to your new one",
  "Secure your next home first, then optimize your sale",
];

const steps = [
  {
    num: "01",
    title: "Find Your Dream Home",
    body: "Start shopping with no pressure. Our buyer specialists help you find and secure your next home — we handle the rest.",
    color: "text-[#BE1E2D]/20",
  },
  {
    num: "02",
    title: "We Guarantee Your Current Home",
    body: "Once you're under contract on your new home, we guarantee the purchase of your current property at a pre-agreed price.",
    color: "text-[#BE1E2D]/20",
  },
  {
    num: "03",
    title: "Move Into Your New Home",
    body: "Close on your new home and move in. Zero overlap. Zero temporary housing. Zero double mortgages.",
    color: "text-[#BE1E2D]/20",
  },
  {
    num: "04",
    title: "We Sell Your Old Home",
    body: "With you already moved out, we professionally list and sell your former home — staging, photography, and all.",
    color: "text-[#BE1E2D]/20",
  },
];

export default function BuyBeforeYouSellPage() {
  return (
    <PageLayout>
      {/* ── HERO: split problem/solution panels ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* LEFT — The Problem (dark) */}
        <div className="relative bg-[#1A1A1A] flex flex-col justify-center px-10 md:px-16 py-20 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=80"
            alt="The problem with selling first"
            fill
            sizes="50vw"
            className="object-cover opacity-10"
          />
          <div className="relative">
            <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-gray-500 uppercase mb-6 block">The Old Way</span>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-8">
              Selling first puts you at a disadvantage.
            </h2>
            <ul className="space-y-4">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X size={15} className="text-red-400 shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-gray-400 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT — The Solution (white) */}
        <div className="relative bg-white flex flex-col justify-center px-10 md:px-16 py-20">
          <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-6 block">Sell Program — 02</span>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-8">
            Buy Before You Sell.<br />Move on your terms.
          </h1>
          <ul className="space-y-4 mb-10">
            {solutions.map((s, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle size={15} className="text-[#BE1E2D] shrink-0 mt-0.5" />
                <span className="font-sans text-sm text-[#1A1A1A] leading-relaxed">{s}</span>
              </li>
            ))}
          </ul>
          <a href="#how-it-works" className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors self-start">
            See How It Works <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ── HOW IT WORKS: numbered vertical timeline ── */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Step by Step</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">How Buy Before You Sell Works</h2>
          </div>

          <div className="relative flex flex-col gap-0">
            {/* vertical connector */}
            <div className="absolute left-[26px] top-12 bottom-12 w-px bg-[#BE1E2D]/20 hidden md:block" />
            {steps.map((s, i) => (
              <div key={i} className="relative flex gap-8 items-start pb-12 last:pb-0">
                {/* Step circle */}
                <div className="shrink-0 w-14 h-14 bg-[#1A1A1A] rounded-full flex items-center justify-center z-10">
                  <span className="font-serif font-bold text-white text-lg">{i + 1}</span>
                </div>
                <div className="flex-1 pt-2">
                  <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase block mb-1">{s.num}</span>
                  <h3 className="font-serif font-bold text-xl text-[#1A1A1A] mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-gray-500 leading-relaxed max-w-xl">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + IMAGE split ── */}
      <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px]">
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=900&q=80"
            alt="Family moving into new home"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-[#1A1A1A] flex flex-col justify-center px-10 md:px-16 py-20">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Get Started</p>
          <h2 className="font-serif font-bold text-3xl text-white leading-tight mb-2">
            Ready to Move Forward?
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
            Talk to a specialist today. We'll walk you through your current home's value, your buying power, and a timeline that works for your family.
          </p>
          <LeadForm
            source="buy-before-you-sell"
            title=""
            titleRed=""
            subtitle=""
            submitLabel="Start My Buy Before You Sell Plan"
            showNeedToSell
          />
        </div>
      </section>

      {/* ── Comparison links ── */}
      <section className="py-12 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-xs text-gray-400 mb-4">Also compare our other sell programs:</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="/your-home-sold-guaranteed" className="border border-gray-200 text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors">
              Guaranteed Sale
            </a>
            <a href="/cash-offer-upfront" className="border border-gray-200 text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors">
              Cash Offer Upfront
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
