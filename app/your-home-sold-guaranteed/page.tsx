import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import StatsBar from "@/components/StatsBar";
import { SectionHeader } from "@/components/ThreeWaysToSell";

export const metadata = {
  title: "Your Home Sold Guaranteed",
  description: "We guarantee to sell your Houston home — or we'll buy it ourselves. 100% since 2014.",
};

const steps = [
  {
    num: "01",
    title: "We Set Your Guaranteed Price",
    description:
      "Together, we agree on a minimum guaranteed price and a specific timeframe to sell. You know exactly what you'll receive — no surprises.",
  },
  {
    num: "02",
    title: "We Market Your Home Aggressively",
    description:
      "Professional photography, targeted digital marketing, open houses, and our full database of pre-qualified buyers are deployed on your behalf.",
  },
  {
    num: "03",
    title: "Sold — Or We Buy It",
    description:
      "If your home doesn't sell within the agreed timeframe at the guaranteed price, we purchase it ourselves. No strings, no fine print.",
  },
];

const achievements = [
  { num: "#1", label: "Large Real Estate Team in Houston", year: "2021" },
  { num: "#6", label: "All Real Estate Teams in America", year: "2020" },
  { num: "#1", label: "Keller Williams Team Worldwide", year: "2020" },
  { num: "Inc.", label: "5000 Fastest Growing Companies", year: "2022" },
];

export default function GuaranteedSalePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80"
          alt="Luxury home for sale"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/85 to-[#1A1A1A]/50" />

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-24 lg:py-28 flex flex-col items-start">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-5">
            The Loken Group Guarantee
          </p>
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4 max-w-3xl">
            Your Home Sold
            <br />
            <span className="text-[#BE1E2D]">Guaranteed.</span>
          </h1>
          <div className="w-16 h-[3px] bg-[#BE1E2D] mb-6" />
          <p className="font-sans text-gray-400 text-base leading-relaxed mb-8 max-w-xl">
            We guarantee to sell your home — or we&apos;ll buy it. Since launching this program in 2014,{" "}
            <strong className="text-white font-semibold">
              we have never had to purchase a home under the guarantee.
            </strong>
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="font-serif font-bold text-[#BE1E2D] text-5xl leading-none">100%</span>
              <span className="font-sans text-gray-500 text-xs tracking-widest mt-1 uppercase">Since 2014</span>
            </div>
            <div className="h-12 w-px bg-white/20" />
            <a
              href="#form"
              className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-4 transition-colors"
            >
              Get My Guaranteed Offer
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="HOW IT WORKS" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`flex flex-col px-10 py-12 ${
                  i < 2 ? "border-b md:border-b-0 md:border-r border-gray-200" : ""
                }`}
              >
                <span className="font-serif font-bold text-[#BE1E2D] text-5xl leading-none mb-6 opacity-30">
                  {step.num}
                </span>
                <h3 className="font-serif font-bold text-xl text-[#1A1A1A] mb-3">{step.title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <StatsBar />

      {/* Achievements */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="NATIONALLY RECOGNIZED RESULTS" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200">
            {achievements.map((a, i) => (
              <div key={i} className="bg-white flex flex-col items-center text-center px-6 py-10">
                <span className="font-serif font-bold text-[#BE1E2D] text-4xl leading-none">{a.num}</span>
                <p className="font-sans text-sm text-[#1A1A1A] font-semibold mt-3 leading-snug max-w-[160px]">
                  {a.label}
                </p>
                <p className="font-sans text-xs text-gray-400 mt-1">{a.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4 text-center">
            Take the first step
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white text-center mb-10 leading-tight">
            Request Your Guaranteed Offer
          </h2>
          <div className="bg-white p-8 md:p-10">
            <LeadForm
              source="guaranteed-sale"
              subtitle="A specialist will contact you within 24 hours to discuss your home's value and the guarantee program."
              submitLabel="Request My Guaranteed Offer"
              showMessage
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
