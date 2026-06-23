import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/ThreeWaysToSell";
import { ArrowRight, Play } from "lucide-react";

const featuredArticles = [
  {
    category: "Press Coverage",
    title: "The Loken Group Named #1 Real Estate Team in Houston by Wall Street Journal",
    excerpt:
      "For the second consecutive year, The Loken Group has been recognized as the top-producing real estate team in the Greater Houston metropolitan area, outpacing over 35,000 competing agents.",
    date: "March 15, 2024",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
    source: "Wall Street Journal",
    featured: true,
  },
  {
    category: "Market Update",
    title: "Houston Real Estate Market Report: Spring 2024",
    excerpt:
      "Inventory remains tight across the Greater Houston suburbs, with The Woodlands and Katy leading demand. Our team breaks down what buyers and sellers need to know this season.",
    date: "April 2, 2024",
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80",
    source: "Loken Group",
    featured: true,
  },
];

const articles = [
  {
    category: "Seller Tips",
    title: "5 Ways to Add $30,000 to Your Home's Value Before Listing",
    excerpt:
      "Our top listing specialists share the highest-ROI improvements sellers can make in 30 days or less.",
    date: "March 28, 2024",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  },
  {
    category: "Buyer Guide",
    title: "First-Time Buyer's Roadmap to the Houston Suburbs",
    excerpt:
      "Katy, Pearland, Spring — which suburb fits your budget and lifestyle? We compare the top 6 communities.",
    date: "March 10, 2024",
    img: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=800&q=80",
  },
  {
    category: "Press Coverage",
    title: "Houston Business Journal: Loken Group Closes Record Q1",
    excerpt:
      "The Loken Group posted its strongest first quarter in 10 years, closing 134 transactions totaling $61M in volume.",
    date: "April 8, 2024",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
  },
  {
    category: "Market Update",
    title: "Interest Rates & You: What Houston Buyers Need to Know in 2024",
    excerpt:
      "Rates have shifted — but Houston's market fundamentals remain strong. Here's how to position yourself as a buyer or seller.",
    date: "February 22, 2024",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
  },
  {
    category: "Seller Tips",
    title: "The Cash Offer Upfront Program Explained",
    excerpt:
      "Skip the showings and sell on your timeline. Our Cash Offer Upfront program gives you certainty without sacrifice.",
    date: "February 14, 2024",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80",
  },
  {
    category: "Community",
    title: "Loken Group Sponsors Annual Woodlands Charity Home Tour",
    excerpt:
      "For the third consecutive year, we proudly partnered with local nonprofits to raise over $180,000 for Houston-area families in need.",
    date: "January 30, 2024",
    img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&q=80",
  },
];

const videos = [
  {
    title: "Your Home Sold Guaranteed — How It Works",
    duration: "3:24",
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    title: "The Woodlands Market Update — April 2024",
    duration: "5:47",
    thumb: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
  },
  {
    title: "Lance Loken on Fox Business — Houston Real Estate",
    duration: "8:12",
    thumb: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
  },
  {
    title: "Client Success Story: Sold in 8 Days Over Asking",
    duration: "2:55",
    thumb: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  },
];

const categoryColors: Record<string, string> = {
  "Press Coverage": "bg-[#BE1E2D] text-white",
  "Market Update": "bg-[#1A1A1A] text-white",
  "Seller Tips": "bg-blue-700 text-white",
  "Buyer Guide": "bg-green-700 text-white",
  "Community": "bg-amber-600 text-white",
};

export default function MediaPage() {
  return (
    <PageLayout>
      <PageHeader
        label="News & Resources"
        title="Media Center"
        subtitle="Market reports, press coverage, seller tips, and video content — all in one place."
      />

      {/* Featured Articles */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="FEATURED STORIES" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map((a, i) => (
              <article
                key={i}
                className="group border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-4 left-4 font-sans text-[9px] font-bold tracking-widest px-2.5 py-1 ${
                      categoryColors[a.category] ?? "bg-gray-700 text-white"
                    }`}
                  >
                    {a.category}
                  </span>
                  <span className="absolute top-4 right-4 font-sans text-[9px] font-bold tracking-wide text-white/80 bg-black/40 px-2 py-1">
                    {a.source}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-sans text-xs text-gray-400 mb-2">{a.date}</p>
                  <h2 className="font-serif font-bold text-xl text-[#1A1A1A] leading-snug mb-3 group-hover:text-[#BE1E2D] transition-colors">
                    {a.title}
                  </h2>
                  <p className="font-sans text-sm text-gray-600 leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 font-sans text-xs font-semibold text-[#BE1E2D]">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="LATEST ARTICLES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article
                key={i}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span
                    className={`absolute top-3 left-3 font-sans text-[9px] font-bold tracking-widest px-2 py-0.5 ${
                      categoryColors[a.category] ?? "bg-gray-700 text-white"
                    }`}
                  >
                    {a.category}
                  </span>
                </div>
                <div className="p-5">
                  <p className="font-sans text-[11px] text-gray-400 mb-2">{a.date}</p>
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#BE1E2D] transition-colors">
                    {a.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="inline-flex items-center gap-1 font-sans text-[11px] font-semibold text-[#BE1E2D]">
                    Read More <ArrowRight size={11} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="VIDEO LIBRARY" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-900">
                  <Image
                    src={v.thumb}
                    alt={v.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-[#BE1E2D] transition-colors">
                      <Play size={18} className="text-[#1A1A1A] group-hover:text-white ml-0.5 transition-colors" fill="currentColor" />
                    </div>
                  </div>
                  {/* Duration */}
                  <span className="absolute bottom-2 right-2 font-sans text-[10px] font-bold text-white bg-black/60 px-1.5 py-0.5">
                    {v.duration}
                  </span>
                </div>
                <p className="font-sans text-sm font-semibold text-[#1A1A1A] mt-3 leading-snug group-hover:text-[#BE1E2D] transition-colors">
                  {v.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Stay Informed
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Get the Houston Market Report
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Monthly insights on pricing trends, community spotlights, and expert advice — delivered directly to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 focus:outline-none focus:border-[#BE1E2D] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="font-sans text-[11px] text-gray-600 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>
    </PageLayout>
  );
}
