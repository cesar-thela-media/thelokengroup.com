import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { SectionHeader } from "@/components/ThreeWaysToSell";
import { MapPin, ArrowRight } from "lucide-react";

const communities = [
  {
    name: "The Woodlands",
    tagline: "Master-Planned Excellence",
    description:
      "One of the nation's most celebrated master-planned communities, The Woodlands blends lush forest trails, top-rated schools, and an award-winning Town Center with world-class dining and retail.",
    highlights: ["Top-rated CISD schools", "Lake Woodlands waterfront", "Hughes Landing retail district", "Low tax rates"],
    medianPrice: "$525,000",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
    county: "Montgomery County",
  },
  {
    name: "Sugar Land",
    tagline: "Upscale Suburban Living",
    description:
      "Sugar Land consistently ranks among Texas's best cities to live. It's known for its outstanding Fort Bend ISD schools, Imperial Market dining scene, and beautifully planned neighborhoods.",
    highlights: ["Fort Bend ISD schools", "Town Square entertainment", "Diverse community", "Easy Highway 59 access"],
    medianPrice: "$415,000",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    county: "Fort Bend County",
  },
  {
    name: "Katy",
    tagline: "Family-First Community",
    description:
      "Katy is one of the fastest-growing suburbs in the nation, celebrated for its legendary Katy ISD schools, affordable new construction, and a welcoming small-town spirit.",
    highlights: ["Katy ISD — nationally ranked", "LaCenterra at Cinco Ranch", "New construction communities", "Quick I-10 commute"],
    medianPrice: "$360,000",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    county: "Harris / Fort Bend / Waller County",
  },
  {
    name: "Cypress",
    tagline: "Space & Style Northwest",
    description:
      "Cypress delivers spacious lots, newer construction, and the highly acclaimed Cy-Fair ISD at a price point that remains accessible compared to the inner loop. Ideal for growing families.",
    highlights: ["Cy-Fair ISD schools", "Towne Lake waterfront community", "Legacy Park retail corridor", "Larger lots & new builds"],
    medianPrice: "$390,000",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    county: "Harris County",
  },
  {
    name: "Pearland",
    tagline: "South Houston's Crown Jewel",
    description:
      "Pearland's explosive growth over the past decade is driven by excellent schools, proximity to the Texas Medical Center, and a vibrant blend of established and new neighborhoods.",
    highlights: ["Pearland ISD schools", "Shadow Creek Ranch", "12 minutes to Med Center", "Thriving restaurant scene"],
    medianPrice: "$335,000",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
    county: "Brazoria / Harris County",
  },
  {
    name: "Spring",
    tagline: "Value & Convenience North",
    description:
      "Spring offers a compelling combination of affordable homes, easy access to the Hardy Toll Road and I-45, and emerging commercial growth that makes it attractive for first-time and move-up buyers alike.",
    highlights: ["Spring ISD schools", "Spring Town Center", "Close to The Woodlands", "Affordable entry points"],
    medianPrice: "$295,000",
    img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&q=80",
    county: "Harris County",
  },
  {
    name: "Conroe",
    tagline: "Lake Living at Its Best",
    description:
      "Conroe sits on the shores of Lake Conroe and offers a relaxed pace, recreational lifestyle, and some of the most affordable waterfront and lakeside properties in the Greater Houston metro.",
    highlights: ["Lake Conroe waterfront", "Conroe ISD schools", "Historic downtown square", "Lower property taxes"],
    medianPrice: "$310,000",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    county: "Montgomery County",
  },
  {
    name: "Friendswood",
    tagline: "Quiet Prestige Southeast",
    description:
      "Friendswood is a quiet, tree-lined community known for exceptionally well-maintained neighborhoods, strong resale values, and the highly regarded Friendswood ISD.",
    highlights: ["Friendswood ISD schools", "Low crime rates", "Strong resale values", "Galveston Bay proximity"],
    medianPrice: "$380,000",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
    county: "Galveston / Harris County",
  },
  {
    name: "League City",
    tagline: "Clear Lake Coastal Living",
    description:
      "League City combines a coastal lifestyle with proximity to NASA/JSC, the University of Houston Clear Lake, and strong employment hubs — making it a perennial favorite with aerospace professionals.",
    highlights: ["Clear Lake access", "NASA/JSC proximity", "South Shore Harbour marina", "CCISD schools"],
    medianPrice: "$355,000",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    county: "Galveston County",
  },
];

const stats = [
  { num: "9", label: "Communities\nServed" },
  { num: "29", label: "Avg Days\nto Close" },
  { num: "500+", label: "Families\nHelped" },
  { num: "#1", label: "Team in\nHouston" },
];

export default function CommunitiesPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600&q=80"
          alt="Greater Houston aerial"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-[#1A1A1A]/40" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Greater Houston
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-5 max-w-2xl">
            Communities We Serve
          </h1>
          <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            The Loken Group specializes in Houston&apos;s most sought-after suburbs. Our agents live, work, and raise families in these communities — giving you an unmatched local advantage.
          </p>
          <a
            href="/search-for-homes"
            className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3.5 transition-colors"
          >
            Search All Homes <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Stats strip */}
      <div className="bg-[#BE1E2D]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col items-center justify-center py-8 px-4 text-center ${
                i < stats.length - 1 ? "border-r border-white/20" : ""
              }`}
            >
              <span className="font-serif font-bold text-4xl text-white leading-none">{s.num}</span>
              <span className="font-sans text-white/80 text-xs mt-1 whitespace-pre-line">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Community Cards */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="EXPLORE COMMUNITIES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((c) => (
              <div
                key={c.name}
                className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={c.img}
                    alt={c.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <p className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase mb-1">
                      {c.tagline}
                    </p>
                    <h2 className="font-serif font-bold text-2xl text-white">{c.name}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 mb-4">
                    <MapPin size={11} className="text-gray-400 shrink-0" />
                    <span className="font-sans text-[11px] text-gray-400">{c.county}</span>
                    <span className="ml-auto font-serif font-bold text-[#BE1E2D] text-sm">
                      Median {c.medianPrice}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">
                    {c.description}
                  </p>
                  <ul className="space-y-1.5 mb-5">
                    {c.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 font-sans text-xs text-gray-500">
                        <span className="w-1 h-1 bg-[#BE1E2D] rounded-full shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/search-for-homes"
                    className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#BE1E2D] hover:gap-2.5 transition-all"
                  >
                    View Homes in {c.name} <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Local Experts
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Not Sure Which Community is Right for You?
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Our buyer specialists live in these neighborhoods. Tell us your lifestyle, budget, and priorities — we&apos;ll match you with the community that fits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors"
            >
              Talk to an Agent
            </a>
            <a
              href="/search-for-homes"
              className="inline-block border border-white/30 text-white font-sans font-semibold text-sm px-10 py-3 hover:border-white transition-colors"
            >
              Search All Homes
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
