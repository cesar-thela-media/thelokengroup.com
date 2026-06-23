import Image from "next/image";
import PageLayout from "@/components/PageLayout";

export const metadata = {
  title: "Mission Statement",
  description: "Our mission: to sell your home for the most money in the least time — guaranteed.",
};

const pillars = [
  {
    letter: "G",
    word: "Guaranteed",
    statement: "We put our guarantee in writing. If your home doesn't sell, we buy it. No asterisks. No fine print. One promise, kept every time.",
  },
  {
    letter: "R",
    word: "Results",
    statement: "We are measured by one thing: the outcomes we deliver. Avg. 29 days on market. Avg. 2% above asking. 100% Guaranteed Sale success rate.",
  },
  {
    letter: "O",
    word: "Ownership",
    statement: "Every agent on our team owns their results. We don't make excuses. We solve problems — for our clients and for each other.",
  },
  {
    letter: "W",
    word: "Worth It",
    statement: "We are obsessed with making sure every client feels — and is — better off for having worked with us. Not just sold. Truly, measurably better off.",
  },
];

const commitments = [
  { title: "We will always tell you the truth about your home's value", body: "Even when it's not what you want to hear. Our job is to advise, not to please." },
  { title: "We will never take a listing we can't sell", body: "If we can't commit to a Guaranteed Sale, we'll tell you why — and what needs to change." },
  { title: "We will answer your calls, texts, and emails within hours", body: "You will never wonder where your agent is or what's happening with your home." },
  { title: "We will fight to get every dollar on the table", body: "Our negotiators are trained to find value in every transaction — not just close it." },
  { title: "We will treat your home like it's our own", body: "From photography to final walkthrough, every detail is handled with care and intentionality." },
];

export default function MissionPage() {
  return (
    <PageLayout>
      {/* ── Big statement hero — centered typographic ── */}
      <section className="min-h-[70vh] bg-white flex flex-col items-center justify-center text-center px-6 py-24 border-b border-gray-100">
        <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase mb-8">Our Mission</p>
        <h1 className="font-serif font-bold text-[#1A1A1A] leading-[1.1] max-w-4xl mx-auto" style={{ fontSize: "clamp(2.5rem, 7vw, 5.5rem)" }}>
          To sell your home for the most money, in the least time,{" "}
          <em className="text-[#BE1E2D] not-italic">guaranteed.</em>
        </h1>
        <div className="mt-16 w-16 h-px bg-[#BE1E2D]" />
      </section>

      {/* ── GROW acronym section ── */}
      <section className="bg-[#1A1A1A] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase text-center mb-20">How We Live It</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-white/5">
            {pillars.map((p) => (
              <div key={p.letter} className="bg-[#1A1A1A] px-10 py-12 group">
                <span className="font-serif font-bold text-[6rem] leading-none text-white/5 block mb-4 group-hover:text-[#BE1E2D]/10 transition-colors select-none">
                  {p.letter}
                </span>
                <h3 className="font-serif font-bold text-2xl text-white mb-3">{p.word}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed">{p.statement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-bleed image with pull quote ── */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560472355-536de3962603?w=1600&q=80"
          alt="Houston real estate"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/70" />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <blockquote className="text-center max-w-3xl">
            <p className="font-serif font-bold text-white leading-tight mb-6" style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}>
              &ldquo;Anyone can list a home. We guarantee to sell yours.&rdquo;
            </p>
            <cite className="font-sans text-sm text-gray-400 not-italic">— Lance Loken, Founder &amp; CEO</cite>
          </blockquote>
        </div>
      </section>

      {/* ── 5 commitments list ── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">What We Promise</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Our Client Commitments</h2>
          </div>
          <div className="flex flex-col divide-y divide-gray-100">
            {commitments.map((c, i) => (
              <div key={i} className="py-8 grid grid-cols-1 md:grid-cols-[2fr_3fr] gap-4 md:gap-10 items-start">
                <div className="flex items-start gap-4">
                  <span className="font-serif font-bold text-5xl text-[#BE1E2D]/10 leading-none">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] leading-snug pt-1">{c.title}</h3>
                </div>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section className="bg-[#BE1E2D] py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-white leading-tight">
            Hold us to our promise.
          </h2>
          <a href="/your-home-sold-guaranteed" className="inline-block bg-white text-[#BE1E2D] font-sans font-semibold text-sm px-10 py-3 hover:bg-gray-100 transition-colors whitespace-nowrap">
            Get My Guaranteed Offer
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
