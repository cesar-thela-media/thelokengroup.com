import PageLayout from "@/components/PageLayout";
import { GraduationCap, Star, Users, TrendingUp } from "lucide-react";

export const metadata = {
  title: "Houston Schools Guide | Best School Districts | The Loken Group",
  description: "Compare top Houston school districts — Katy ISD, CISD, Cy-Fair, and more. Find homes in the best school zones.",
};

const districts = [
  {
    name: "Katy ISD",
    badge: "Top Rated",
    badgeColor: "bg-[#BE1E2D]",
    rating: "A",
    enrollment: "90,000+",
    schools: "72",
    counties: "Harris, Fort Bend, Waller",
    highlights: ["Top 3 in Texas by Texas Monthly", "47 National Blue Ribbon schools", "96% graduation rate", "Strong STEM & fine arts programs"],
    avgHomePrice: "$420,000",
    color: "border-[#BE1E2D]",
  },
  {
    name: "Cy-Fair ISD",
    badge: "Largest in Texas",
    badgeColor: "bg-[#1A1A1A]",
    rating: "A",
    enrollment: "120,000+",
    schools: "90",
    counties: "Harris, Waller",
    highlights: ["Largest single-district footprint in TX", "14 recognized schools of excellence", "Dual language programs", "High-performance athletic programs"],
    avgHomePrice: "$370,000",
    color: "border-gray-200",
  },
  {
    name: "Conroe ISD",
    badge: "Growth District",
    badgeColor: "bg-green-700",
    rating: "A",
    enrollment: "70,000+",
    schools: "68",
    counties: "Montgomery, Harris",
    highlights: ["Fastest-growing district in TX", "Strong community support", "IB and Pre-AP programs", "Award-winning CTE pathways"],
    avgHomePrice: "$385,000",
    color: "border-gray-200",
  },
  {
    name: "Fort Bend ISD",
    badge: "Most Diverse",
    badgeColor: "bg-blue-700",
    rating: "A",
    enrollment: "82,000+",
    schools: "75",
    counties: "Fort Bend, Harris",
    highlights: ["Most ethnically diverse in TX", "30+ languages spoken", "Magnet programs for STEM", "Sugar Land & Missouri City communities"],
    avgHomePrice: "$440,000",
    color: "border-gray-200",
  },
  {
    name: "Spring Branch ISD",
    badge: "City Access",
    badgeColor: "bg-purple-700",
    rating: "B+",
    enrollment: "33,000+",
    schools: "47",
    counties: "Harris",
    highlights: ["Inside 610 Loop access", "Magnet program diversity", "Strong arts curriculum", "Proximity to Houston Medical Center"],
    avgHomePrice: "$520,000",
    color: "border-gray-200",
  },
  {
    name: "Pearland ISD",
    badge: "Best Value",
    badgeColor: "bg-amber-600",
    rating: "A",
    enrollment: "24,000+",
    schools: "25",
    counties: "Brazoria, Harris",
    highlights: ["Low crime area", "Tight-knit community feel", "High property appreciation", "Strong sports programs"],
    avgHomePrice: "$355,000",
    color: "border-gray-200",
  },
];

const comparisonRows = [
  { label: "Average SAT Score", katy: "1,150", cyfair: "1,080", conroe: "1,090", fortbend: "1,130" },
  { label: "Graduation Rate", katy: "96%", cyfair: "95%", conroe: "95%", fortbend: "96%" },
  { label: "Avg. Class Size", katy: "22", cyfair: "24", conroe: "23", fortbend: "22" },
  { label: "Student-Teacher Ratio", katy: "17:1", cyfair: "18:1", conroe: "17:1", fortbend: "17:1" },
  { label: "State Accountability Rating", katy: "A", cyfair: "A", conroe: "A", fortbend: "A" },
];

export default function SchoolsPage() {
  return (
    <PageLayout>
      {/* ── HERO: Dark with icon row — data-forward design ── */}
      <section className="bg-[#1A1A1A] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-5">Houston Communities</p>
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight mb-5">
                Houston Area<br />Schools Guide
              </h1>
              <p className="font-sans text-gray-400 text-base leading-relaxed max-w-lg mb-8">
                School district quality is one of the top factors in home value and family satisfaction. We&apos;ve compiled the essential data on Greater Houston&apos;s top-rated districts so you can choose the right community for your family.
              </p>
              <a href="/houston-communities" className="inline-block border border-white/30 text-white font-sans font-semibold text-sm px-8 py-3 hover:border-white transition-colors">
                Browse Communities
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <GraduationCap size={20} className="text-[#BE1E2D]" />, num: "6+", label: "A-rated school districts" },
                { icon: <Star size={20} className="text-[#BE1E2D]" />, num: "47", label: "National Blue Ribbon schools" },
                { icon: <Users size={20} className="text-[#BE1E2D]" />, num: "400k+", label: "Students enrolled" },
                { icon: <TrendingUp size={20} className="text-[#BE1E2D]" />, num: "95%+", label: "Avg. graduation rate" },
              ].map((s, i) => (
                <div key={i} className="bg-white/5 p-6 flex flex-col gap-3">
                  {s.icon}
                  <p className="font-serif font-bold text-3xl text-white">{s.num}</p>
                  <p className="font-sans text-xs text-gray-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── District cards — featured Katy at top ── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">District Profiles</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">Top Houston School Districts</h2>
          </div>

          {/* Featured: Katy ISD */}
          <div className={`border-2 ${districts[0].color} p-8 md:p-12 mb-6 relative overflow-hidden`}>
            <span className={`absolute top-0 right-0 font-sans text-[9px] font-bold tracking-[0.35em] text-white uppercase px-4 py-2 ${districts[0].badgeColor}`}>
              {districts[0].badge}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-serif font-bold text-6xl text-[#BE1E2D]/20">{districts[0].rating}</span>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">{districts[0].name}</h3>
                    <p className="font-sans text-xs text-gray-400">{districts[0].counties}</p>
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {districts[0].highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2 font-sans text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#BE1E2D] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-3 gap-6 md:gap-8">
                <div className="text-center">
                  <p className="font-serif font-bold text-2xl text-[#1A1A1A]">{districts[0].enrollment}</p>
                  <p className="font-sans text-xs text-gray-400">Enrollment</p>
                </div>
                <div className="text-center">
                  <p className="font-serif font-bold text-2xl text-[#1A1A1A]">{districts[0].schools}</p>
                  <p className="font-sans text-xs text-gray-400">Schools</p>
                </div>
                <div className="text-center">
                  <p className="font-serif font-bold text-2xl text-[#1A1A1A]">{districts[0].avgHomePrice}</p>
                  <p className="font-sans text-xs text-gray-400">Avg. Home</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other districts 2-col grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {districts.slice(1).map((d, i) => (
              <div key={i} className={`border ${d.color} p-7 relative`}>
                <span className={`inline-block font-sans text-[8px] font-bold tracking-[0.35em] text-white uppercase px-3 py-1 mb-4 ${d.badgeColor}`}>
                  {d.badge}
                </span>
                <div className="flex items-start gap-4 mb-5">
                  <span className="font-serif font-bold text-4xl text-[#1A1A1A]/10 leading-none">{d.rating}</span>
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1A1A1A]">{d.name}</h3>
                    <p className="font-sans text-xs text-gray-400">{d.counties}</p>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {d.highlights.slice(0, 3).map((h, j) => (
                    <li key={j} className="flex items-center gap-2 font-sans text-xs text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-6 pt-4 border-t border-gray-50">
                  <div>
                    <p className="font-serif font-bold text-base text-[#1A1A1A]">{d.enrollment}</p>
                    <p className="font-sans text-[10px] text-gray-400">Students</p>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-base text-[#1A1A1A]">{d.avgHomePrice}</p>
                    <p className="font-sans text-[10px] text-gray-400">Avg. Home Price</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Side by Side</p>
            <h2 className="font-serif font-bold text-3xl text-[#1A1A1A]">Top 4 District Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b-2 border-[#1A1A1A]">
                  <th className="text-left pb-4 font-semibold text-gray-500 text-xs pr-6">Metric</th>
                  {["Katy ISD", "Cy-Fair ISD", "Conroe ISD", "Fort Bend ISD"].map((d, i) => (
                    <th key={i} className={`pb-4 font-bold text-center text-xs ${i === 0 ? "text-[#BE1E2D]" : "text-[#1A1A1A]"}`}>
                      {d}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : ""}`}>
                    <td className="py-4 pr-6 font-sans text-xs text-gray-500">{row.label}</td>
                    <td className="py-4 text-center font-semibold text-[#BE1E2D]">{row.katy}</td>
                    <td className="py-4 text-center text-gray-700">{row.cyfair}</td>
                    <td className="py-4 text-center text-gray-700">{row.conroe}</td>
                    <td className="py-4 text-center text-gray-700">{row.fortbend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6 bg-[#1A1A1A] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-white mb-4">Find a Home in the Right District</h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8">Our agents know every neighborhood and school zone in Greater Houston. Tell us your priorities — we&apos;ll find the right fit.</p>
          <a href="/contact" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors">
            Talk to a Schools Specialist
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
