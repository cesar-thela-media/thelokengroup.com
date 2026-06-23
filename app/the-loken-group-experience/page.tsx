import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "The Loken Group Experience | About Us",
  description: "What sets The Loken Group apart — our story, values, and commitment to Houston families.",
};

const chapters = [
  {
    year: "2008",
    title: "Founded on a Promise",
    body: "Lance and Karina Loken founded The Loken Group with one belief: sellers deserved a guarantee. If your home doesn't sell, we buy it. That promise — radical in 2008 — has held every single year since.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=900&q=80",
    stat: { num: "Year 1", label: "First Guaranteed Sale closed" },
  },
  {
    year: "2014",
    title: "100% Guaranteed. Every Time.",
    body: "By 2014, we had refined our Guaranteed Sale program into an iron-clad commitment. Every home listed under our program has sold — without exception. Zero failures. 100% success rate.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80",
    stat: { num: "100%", label: "Guaranteed Sale success rate since 2014" },
  },
  {
    year: "2018",
    title: "Houston's #1 Team",
    body: "The Houston Business Journal and Wall Street Journal both recognized The Loken Group as the #1 large real estate team in Houston. We surpassed teams with twice our headcount by building better systems and a culture of relentless accountability.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    stat: { num: "#1", label: "Large real estate team in Houston" },
  },
  {
    year: "2020",
    title: "Recognized Nationally",
    body: "The Wall Street Journal ranked The Loken Group #1 nationally among all large real estate teams — across every major market in the United States. Keller Williams named us the #1 team worldwide.",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
    stat: { num: "#1", label: "Nationally per Wall Street Journal" },
  },
  {
    year: "Today",
    title: "Still Growing. Still Guaranteeing.",
    body: "Today we're a team of 26+ full-time professionals serving 9 counties across Greater Houston. We've helped over 500 families this year alone — and every single one had the backing of our guarantee.",
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
    stat: { num: "500+", label: "Families helped this year" },
  },
];

const values = [
  { title: "Results Over Activity", body: "We don't measure success by how many calls we make or signs we put up. We measure it by closed transactions, happy clients, and dollars above asking price." },
  { title: "Radical Transparency", body: "Every number we quote — 29 days, +2%, 100% — is verified by REAL Trends and the Houston Association of REALTORS®. No marketing spin." },
  { title: "The Team Advantage", body: "Unlike a solo agent, our team means someone is always available. A buyer specialist, a transaction coordinator, a listing agent — all dedicated to your deal." },
  { title: "Rooted in Houston", body: "Our agents don't just work here — they live here. Our kids go to these schools. We eat at these restaurants. We know this market from the inside." },
];

export default function ExperiencePage() {
  return (
    <PageLayout>
      {/* ── Opening statement: full-viewport dark with quote ── */}
      <section className="relative min-h-screen flex items-center bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
          alt="Greater Houston aerial"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]" />
        <div className="relative max-w-5xl mx-auto px-6 py-32 text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase mb-8">The Loken Group Experience</p>
          <blockquote className="font-serif font-bold text-white leading-tight mb-8" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            &ldquo;We guarantee to sell your home —<br />or we&apos;ll buy it ourselves.&rdquo;
          </blockquote>
          <p className="font-sans text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
            A promise made in 2008. Kept every single day since. This is the story of how a bold guarantee became Houston&apos;s #1 real estate team.
          </p>
        </div>
      </section>

      {/* ── Alternating story chapters ── */}
      {chapters.map((ch, i) => (
        <section key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
          <div className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 ${i % 2 === 1 ? "" : ""}`}>
            {/* Image side */}
            <div className={`relative min-h-[400px] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <Image src={ch.img} alt={ch.title} fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#1A1A1A]/30" />
              <span
                className="absolute bottom-6 left-6 font-serif font-bold text-white/20 select-none leading-none"
                style={{ fontSize: "clamp(4rem, 12vw, 8rem)" }}
              >
                {ch.year}
              </span>
            </div>
            {/* Content side */}
            <div className={`flex flex-col justify-center px-10 md:px-16 py-16 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
              <span className="font-sans text-[9px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">{ch.year}</span>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] leading-snug mb-5">{ch.title}</h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8 max-w-md">{ch.body}</p>
              <div className="border-l-4 border-[#BE1E2D] pl-5">
                <p className="font-serif font-bold text-3xl text-[#1A1A1A]">{ch.stat.num}</p>
                <p className="font-sans text-xs text-gray-400 mt-0.5">{ch.stat.label}</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Values: 2x2 grid with large numbers ── */}
      <section className="py-24 px-6 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">What We Believe</p>
            <h2 className="font-serif font-bold text-3xl md:text-5xl text-white leading-tight">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10">
            {values.map((v, i) => (
              <div key={i} className="bg-[#1A1A1A] p-10 md:p-14">
                <span className="font-serif font-bold text-8xl text-white/5 leading-none select-none block -mb-6">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-serif font-bold text-xl text-white mb-3">{v.title}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-sm">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4">
            Experience the Difference Yourself
          </h2>
          <p className="font-sans text-gray-500 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            One conversation is all it takes to see why 500+ Houston families choose The Loken Group every year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/your-home-sold-guaranteed" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors">
              Get My Guaranteed Offer
            </a>
            <a href="/meet-the-team" className="inline-block border border-[#1A1A1A] text-[#1A1A1A] font-sans font-semibold text-sm px-10 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors">
              Meet the Team
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
