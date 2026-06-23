import PageLayout from "@/components/PageLayout";
import { ArrowRight, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Press Releases | Media Coverage",
  description: "Latest news, press releases, and media coverage of The Loken Group — Houston's #1 real estate team.",
};

const featured = {
  tag: "Wall Street Journal",
  date: "March 2024",
  headline: "The Loken Group Named #1 Large Real Estate Team in the United States",
  summary: "REAL Trends Consulting and Tom Ferry, in partnership with the Wall Street Journal, ranked The Loken Group as the top large real estate team in the nation by sales volume — marking the team's third consecutive year on the prestigious rankings.",
  href: "#",
};

const releases = [
  {
    source: "Houston Business Journal",
    date: "Jan 2024",
    headline: "Loken Group Closes Record 500+ Homes in One Calendar Year",
    type: "Press Release",
  },
  {
    source: "Keller Williams Worldwide",
    date: "Nov 2023",
    headline: "Loken Group Recognized at KW Family Reunion as #1 Team Globally",
    type: "Award",
  },
  {
    source: "REAL Trends",
    date: "Oct 2023",
    headline: "REAL Trends Verified: Loken Group Exceeds National Average by 43%",
    type: "Data Report",
  },
  {
    source: "Houston Chronicle",
    date: "Aug 2023",
    headline: "How One Houston Team Pioneered the Guaranteed Home Sale",
    type: "Feature",
  },
  {
    source: "Inman News",
    date: "Jul 2023",
    headline: "The Guaranteed Sale Model: Inside the Loken Group's Growth Strategy",
    type: "Feature",
  },
  {
    source: "Texas Monthly",
    date: "Jun 2023",
    headline: "Top 10 Real Estate Teams in Texas — Loken Group #1",
    type: "Award",
  },
  {
    source: "Press Release",
    date: "Apr 2023",
    headline: "The Loken Group Expands to Serve All 9 Houston Metro Counties",
    type: "Press Release",
  },
  {
    source: "Fox 26 Houston",
    date: "Feb 2023",
    headline: "Lance Loken on Houston's 2023 Housing Market Outlook",
    type: "TV Segment",
  },
  {
    source: "Press Release",
    date: "Jan 2023",
    headline: "Loken Group Launches Buy Before You Sell Program in Greater Houston",
    type: "Press Release",
  },
];

const tagColors: Record<string, string> = {
  "Press Release": "bg-gray-100 text-gray-700",
  "Award": "bg-[#BE1E2D]/10 text-[#BE1E2D]",
  "Feature": "bg-blue-50 text-blue-700",
  "Data Report": "bg-green-50 text-green-700",
  "TV Segment": "bg-amber-50 text-amber-700",
};

const outlets = [
  { name: "Wall Street Journal", abbr: "WSJ" },
  { name: "Houston Business Journal", abbr: "HBJ" },
  { name: "Texas Monthly", abbr: "TM" },
  { name: "Inman News", abbr: "INMAN" },
  { name: "REAL Trends", abbr: "RT" },
  { name: "Houston Chronicle", abbr: "HC" },
  { name: "Fox 26", abbr: "FOX" },
  { name: "Keller Williams", abbr: "KW" },
];

export default function PressReleasesPage() {
  return (
    <PageLayout>
      {/* ── HERO: editorial newspaper-column layout ── */}
      <section className="bg-white border-b-4 border-[#1A1A1A] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="border-b border-gray-200 pb-6 mb-8 flex items-end justify-between">
            <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-[#BE1E2D] uppercase">The Loken Group — Press Room</p>
            <p className="font-sans text-xs text-gray-400 hidden sm:block">Media inquiries: press@lokengroup.com</p>
          </div>
          <h1 className="font-serif font-bold text-5xl md:text-7xl text-[#1A1A1A] leading-none">Press &<br />News</h1>
        </div>
      </section>

      {/* ── Media logos strip ── */}
      <section className="bg-gray-50 py-8 px-6 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-gray-400 uppercase text-center mb-6">As Seen In</p>
          <div className="flex flex-wrap justify-center gap-8">
            {outlets.map((o) => (
              <span key={o.name} className="font-serif font-bold text-lg text-gray-300 hover:text-gray-500 transition-colors cursor-default">
                {o.abbr}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured release: full-width card ── */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-gray-400 uppercase mb-6">Featured</p>
          <div className="bg-[#1A1A1A] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-0">
            <div className="p-10 md:p-14">
              <div className="flex items-center gap-4 mb-6">
                <span className="font-sans text-[9px] font-bold tracking-[0.35em] text-[#BE1E2D] uppercase bg-[#BE1E2D]/10 px-3 py-1.5">
                  {featured.tag}
                </span>
                <span className="font-sans text-xs text-gray-500">{featured.date}</span>
              </div>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-white leading-snug mb-6 max-w-2xl">
                {featured.headline}
              </h2>
              <p className="font-sans text-sm text-gray-400 leading-relaxed max-w-2xl mb-8">
                {featured.summary}
              </p>
              <a href={featured.href} className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-[#BE1E2D] hover:gap-3 transition-all">
                Read Full Story <ArrowRight size={14} />
              </a>
            </div>
            <div className="hidden md:flex items-center justify-center bg-[#BE1E2D] px-12 min-w-[200px]">
              <div className="text-center">
                <p className="font-serif font-bold text-6xl text-white">#1</p>
                <p className="font-sans text-xs text-white/70 mt-1">Nationally</p>
                <p className="font-sans text-xs text-white/70">Per WSJ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Press list ── */}
      <section className="pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="font-sans text-[9px] font-bold tracking-[0.4em] text-gray-400 uppercase">All Coverage</p>
            <span className="font-sans text-xs text-gray-400">{releases.length} items</span>
          </div>
          <div className="divide-y divide-gray-100">
            {releases.map((r, i) => (
              <a key={i} href="#" className="flex flex-col sm:flex-row sm:items-center gap-4 py-6 group hover:bg-gray-50 -mx-4 px-4 transition-colors rounded">
                <div className="flex items-center gap-3 shrink-0 min-w-[200px]">
                  <span className={`font-sans text-[9px] font-bold tracking-[0.25em] uppercase px-2.5 py-1 ${tagColors[r.type] ?? "bg-gray-100 text-gray-600"}`}>
                    {r.type}
                  </span>
                  <span className="font-sans text-xs text-gray-400">{r.date}</span>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-xs font-semibold text-gray-400 mb-0.5">{r.source}</p>
                  <h3 className="font-sans font-semibold text-sm text-[#1A1A1A] group-hover:text-[#BE1E2D] transition-colors leading-snug">{r.headline}</h3>
                </div>
                <ExternalLink size={14} className="text-gray-300 group-hover:text-[#BE1E2D] shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Media contact ── */}
      <section className="py-16 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">Media Inquiries</p>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] mb-3">Press Contact</h2>
          <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
            For interviews, quotes, data requests, or high-resolution assets, reach our communications team.
          </p>
          <a href="mailto:press@lokengroup.com" className="inline-block border border-[#1A1A1A] text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors">
            press@lokengroup.com
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
