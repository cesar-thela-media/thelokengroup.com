import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import LeadForm from "@/components/LeadForm";
import { Home, Ruler, TreePine, Award } from "lucide-react";

export const metadata = {
  title: "Build Your Dream Home | New Construction | The Loken Group",
  description: "Build your custom dream home in Greater Houston with the #1 real estate team. We represent you at no cost.",
};

const builders = [
  { name: "Perry Homes", logo: "/globe.svg", specialty: "Value + variety", counties: "Harris, Fort Bend, Montgomery" },
  { name: "David Weekley Homes", logo: "/globe.svg", specialty: "Custom design process", counties: "Harris, Brazoria, Galveston" },
  { name: "Lennar Homes", logo: "/globe.svg", specialty: "Wi-Fi CERTIFIED™ smart homes", counties: "All 9 counties" },
  { name: "Pulte Homes", logo: "/globe.svg", specialty: "Active adult communities", counties: "Harris, Fort Bend, Waller" },
  { name: "Highland Homes", logo: "/globe.svg", specialty: "Energy Star certified", counties: "Harris, Montgomery, Brazoria" },
  { name: "Taylor Morrison", logo: "/globe.svg", specialty: "Move-up & luxury tiers", counties: "Harris, Fort Bend, Galveston" },
];

const advantages = [
  {
    icon: <Home size={22} className="text-[#BE1E2D]" />,
    title: "We Represent You — Free",
    body: "Builder sales agents work for the builder. We work for you. Our representation costs you nothing — the builder pays our fee.",
  },
  {
    icon: <Ruler size={22} className="text-[#BE1E2D]" />,
    title: "Design Center Guidance",
    body: "We've walked hundreds of clients through design center upgrades. We know which features add resale value — and which don't.",
  },
  {
    icon: <TreePine size={22} className="text-[#BE1E2D]" />,
    title: "Community Expertise",
    body: "We know the master-planned communities, lot premiums, deed restrictions, and HOA landscapes across all of Greater Houston.",
  },
  {
    icon: <Award size={22} className="text-[#BE1E2D]" />,
    title: "Contract Review",
    body: "Builder contracts favor builders. We review every clause and negotiate upgrades, price locks, and closing cost contributions.",
  },
];

const process = [
  { num: "01", title: "Choose Your Community & Builder", body: "We narrow down communities based on your school district, commute, and lifestyle priorities. Then we tour model homes together." },
  { num: "02", title: "Select Your Lot & Floor Plan", body: "Lot selection is one of the biggest decisions in new construction. We help you evaluate premiums, views, drainage, and future resale." },
  { num: "03", title: "Design Center Appointments", body: "We attend design center appointments with you, advising on which structural options and finishes yield the best return." },
  { num: "04", title: "Build Phase Check-ins", body: "We perform periodic check-ins during construction and coordinate your pre-drywall and pre-closing inspections with a 3rd-party inspector." },
  { num: "05", title: "Final Walkthrough & Closing", body: "We walk the home with you and a punch list, ensuring all builder corrections are completed before you take possession." },
];

export default function BuildPage() {
  return (
    <PageLayout>
      {/* ── HERO: aerial new construction ── */}
      <section className="relative min-h-[80vh] flex items-end bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1625602812206-5ec545ca1231?w=1600&q=80"
          alt="New construction homes Houston"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl">
            <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase mb-5">New Construction</p>
            <h1 className="font-serif font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Build Your<br />Dream Home.
            </h1>
            <p className="font-sans text-gray-300 text-base leading-relaxed max-w-xl mb-8">
              Greater Houston is one of the most active new construction markets in the country. We help you navigate builders, communities, and contracts — at no cost to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#get-started" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-4 transition-colors">
                Find My Builder
              </a>
              <a href="#builders" className="inline-block border border-white/30 text-white font-sans font-semibold text-sm px-10 py-4 hover:border-white transition-colors">
                View Builders
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why use an agent for new construction ── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">The Smart Move</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight">
              Why You Need Your Own Agent in New Construction
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10">
            {advantages.map((a, i) => (
              <div key={i}>
                <div className="mb-4">{a.icon}</div>
                <h3 className="font-sans font-bold text-sm text-[#1A1A1A] mb-2">{a.title}</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Builder partners ── */}
      <section id="builders" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Our Builder Relationships</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Builders We Work With</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {builders.map((b, i) => (
              <div key={i} className="bg-white border border-gray-100 p-8 hover:border-[#BE1E2D] transition-colors group">
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] group-hover:text-[#BE1E2D] transition-colors">{b.name}</h3>
                </div>
                <p className="font-sans text-xs font-semibold text-gray-500 mb-1">Specialty</p>
                <p className="font-sans text-sm text-[#1A1A1A] mb-4">{b.specialty}</p>
                <p className="font-sans text-xs font-semibold text-gray-500 mb-1">Service Area</p>
                <p className="font-sans text-xs text-gray-400">{b.counties}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process timeline: horizontal numbers ── */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Step by Step</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white">Our Build Process</h2>
          </div>
          <div className="flex flex-col gap-0 divide-y divide-white/5">
            {process.map((step, i) => (
              <div key={i} className="flex gap-8 items-start py-8">
                <span className="font-serif font-bold text-5xl text-white/10 shrink-0 leading-none w-16">{step.num}</span>
                <div>
                  <h3 className="font-sans font-bold text-base text-white mb-2">{step.title}</h3>
                  <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lead form split ── */}
      <section id="get-started" className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        <div className="relative hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=900&q=80"
            alt="Model home interior"
            fill
            sizes="50vw"
            className="object-cover"
          />
        </div>
        <div className="bg-white px-10 md:px-16 py-20">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Get Matched</p>
          <h2 className="font-serif font-bold text-3xl text-[#1A1A1A] leading-tight mb-2">Find Your Builder Today</h2>
          <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8 max-w-sm">
            Tell us your timeline, budget, and community preferences — we'll match you with the right builder and attend model homes with you.
          </p>
          <LeadForm
            source="build-dream-home"
            title=""
            titleRed=""
            subtitle=""
            submitLabel="Match Me With a Builder"
            compact
          />
        </div>
      </section>
    </PageLayout>
  );
}
