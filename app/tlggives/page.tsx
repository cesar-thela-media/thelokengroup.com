import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { Heart, Home, BookOpen, Utensils } from "lucide-react";

export const metadata = {
  title: "TLG Gives | Community",
  description: "The Loken Group's community giving initiative — supporting Houston families through housing, education, and hunger relief.",
};

const impactStats = [
  { num: "$2.4M+", label: "Donated to Houston charities" },
  { num: "1,200+", label: "Families supported annually" },
  { num: "14", label: "Nonprofit partners" },
  { num: "3,000+", label: "Volunteer hours per year" },
];

const causes = [
  {
    icon: <Home size={24} className="text-[#BE1E2D]" />,
    title: "Housing for All",
    org: "Habitat for Humanity — Greater Houston",
    commitment: "Build partner since 2015",
    body: "The Loken Group funds and volunteers on one full Habitat home build per year in Greater Houston — ensuring families in need have a safe, stable place to call home.",
    img: "https://images.unsplash.com/photo-1593786039009-8a5b0f76f1f1?w=900&q=80",
  },
  {
    icon: <BookOpen size={24} className="text-[#BE1E2D]" />,
    title: "Education Access",
    org: "Houston Area Community Foundation",
    commitment: "$50,000 annual scholarship fund",
    body: "We fund the TLG Gives Scholarship for Houston-area students entering college — with preference given to first-generation college students from underserved communities.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=900&q=80",
  },
  {
    icon: <Utensils size={24} className="text-[#BE1E2D]" />,
    title: "Hunger Relief",
    org: "Houston Food Bank",
    commitment: "Annual food drive + sponsorship",
    body: "Every year, The Loken Group organizes a city-wide food drive across our listings and offices — collecting tens of thousands of pounds of food for Houston families in crisis.",
    img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=80",
  },
  {
    icon: <Heart size={24} className="text-[#BE1E2D]" />,
    title: "Veterans Support",
    org: "Homes For Our Troops",
    commitment: "Veteran home program partner",
    body: "We prioritize serving veterans with home purchase and sale support — and donate a portion of every veteran transaction to HFOT, building specially adapted homes for severely injured veterans.",
    img: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=900&q=80",
  },
];

const initiatives = [
  { year: "2024", title: "Rebuilt 3 homes in Kashmere Gardens", partner: "Rebuilding Together Houston", impact: "30 volunteers, $85K in materials" },
  { year: "2024", title: "Funded 6 college scholarships", partner: "HACF", impact: "$50,000 total awarded" },
  { year: "2023", title: "Food Drive — 22,000 lbs collected", partner: "Houston Food Bank", impact: "16,500 meals provided" },
  { year: "2023", title: "Habitat for Humanity Build Day", partner: "HFHGH", impact: "Complete home framing, 28 volunteers" },
  { year: "2023", title: "Veterans Home Assistance Program", partner: "Homes for Our Troops", impact: "12 veteran families served" },
  { year: "2022", title: "Annual Toy Drive", partner: "Toys for Tots — Houston", impact: "1,400+ toys collected across 9 offices" },
];

export default function TlgGivesPage() {
  return (
    <PageLayout>
      {/* ── HERO: cause-forward with warm image ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-[#1A1A1A]">
        <Image
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1600&q=80"
          alt="Volunteers helping community"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 pb-20 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart size={16} className="text-[#BE1E2D]" fill="#BE1E2D" />
              <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase">TLG Gives</p>
            </div>
            <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              We Serve More Than<br />Just Homes.
            </h1>
            <p className="font-sans text-gray-300 text-base leading-relaxed max-w-xl">
              Every transaction closes with a purpose. A portion of every Loken Group deal goes back to the Houston communities that trust us — through food, shelter, education, and hope.
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact stats — red bar ── */}
      <section className="bg-[#BE1E2D] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-serif font-bold text-3xl md:text-4xl text-white">{s.num}</p>
              <p className="font-sans text-xs text-white/70 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cause cards: 2-col image+text ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Our Causes</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Where We Give</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {causes.map((c, i) => (
              <div key={i} className="group overflow-hidden">
                <div className="relative h-52 overflow-hidden mb-5">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#1A1A1A]/20" />
                </div>
                <div className="flex items-start gap-4">
                  <div className="shrink-0 mt-0.5">{c.icon}</div>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-0.5">{c.title}</h3>
                    <p className="font-sans text-xs font-semibold text-[#BE1E2D] mb-1">{c.org}</p>
                    <p className="font-sans text-[10px] text-gray-400 mb-3">{c.commitment}</p>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline of initiatives ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Recent Activity</p>
            <h2 className="font-serif font-bold text-3xl text-[#1A1A1A]">What We&apos;ve Done</h2>
          </div>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-[#BE1E2D]/20" />
            {initiatives.map((item, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0">
                <div className="shrink-0 w-4 h-4 rounded-full bg-[#BE1E2D] mt-1 relative z-10" />
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-sans text-xs font-bold text-[#BE1E2D]">{item.year}</span>
                    <span className="font-sans text-[9px] text-gray-400 uppercase tracking-wide">{item.partner}</span>
                  </div>
                  <h3 className="font-sans font-semibold text-sm text-[#1A1A1A] mb-1">{item.title}</h3>
                  <p className="font-sans text-xs text-gray-400">{item.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get involved CTA ── */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Get Involved</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
              Every home sold funds<br />a family helped.
            </h2>
            <p className="font-sans text-gray-400 text-sm leading-relaxed max-w-sm">
              When you work with The Loken Group, you&apos;re not just choosing the best in Houston real estate — you&apos;re helping us give back to the communities we all call home.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a href="/your-home-sold-guaranteed" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-4 transition-colors text-center">
              Get My Guaranteed Offer
            </a>
            <a href="/contact" className="inline-block border border-white/20 text-white font-sans font-semibold text-sm px-10 py-4 hover:border-white transition-colors text-center">
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
