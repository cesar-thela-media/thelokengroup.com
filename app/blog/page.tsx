import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/ThreeWaysToSell";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | The Loken Group",
  description: "Real estate tips, market updates, and Houston community news from The Loken Group.",
};

const categories = ["All", "Market Updates", "Seller Tips", "Buyer Guide", "Community", "Careers"];

const featured = {
  category: "Market Updates",
  title: "Houston Real Estate Market Report — Spring 2024",
  excerpt:
    "Inventory remains tight across the Greater Houston suburbs. The Woodlands and Katy continue to lead demand, with homes averaging just 22 days on market. Here's everything buyers and sellers need to know heading into summer.",
  date: "April 15, 2024",
  author: "Lance Loken",
  img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&q=80",
  readTime: "7 min read",
};

const posts = [
  {
    category: "Seller Tips",
    title: "5 Ways to Add $30,000 to Your Home's Value Before Listing",
    excerpt: "Our top listing specialists share the highest-ROI improvements sellers can make in 30 days or less — without breaking the bank.",
    date: "April 8, 2024",
    author: "Jennifer Garcia",
    img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
    readTime: "5 min read",
  },
  {
    category: "Buyer Guide",
    title: "First-Time Buyer's Roadmap to the Houston Suburbs",
    excerpt: "Katy, Pearland, Spring — which suburb fits your budget and lifestyle? We compare the top 6 Houston communities side by side.",
    date: "March 28, 2024",
    author: "Sarah Detmore",
    img: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80",
    readTime: "9 min read",
  },
  {
    category: "Market Updates",
    title: "Interest Rates & You: What Houston Buyers Need to Know in 2024",
    excerpt: "Rates have shifted — but Houston's market fundamentals remain strong. Here's how to position yourself as a buyer or seller right now.",
    date: "March 15, 2024",
    author: "Lance Loken",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    readTime: "6 min read",
  },
  {
    category: "Seller Tips",
    title: "The Cash Offer Upfront Program Explained",
    excerpt: "Skip the showings and sell on your timeline. Our Cash Offer Upfront program gives you certainty without sacrifice.",
    date: "March 10, 2024",
    author: "Karina Loken",
    img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    readTime: "4 min read",
  },
  {
    category: "Community",
    title: "Loken Group Sponsors Annual Woodlands Charity Home Tour",
    excerpt: "For the third consecutive year, we partnered with local nonprofits to raise over $180,000 for Houston-area families in need.",
    date: "February 22, 2024",
    author: "Karina Loken",
    img: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=600&q=80",
    readTime: "3 min read",
  },
  {
    category: "Buyer Guide",
    title: "Are You an A, B, or C Buyer? How to Win in a Competitive Market",
    excerpt: "Understand how sellers and agents categorize buyers — and what you can do to put yourself in the strongest position possible.",
    date: "February 14, 2024",
    author: "Sarah Detmore",
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    readTime: "5 min read",
  },
  {
    category: "Seller Tips",
    title: "Why Properties Fail to Sell — and How We Fix It",
    excerpt: "The most common reasons homes sit on the market, and what The Loken Group does differently to move properties fast.",
    date: "January 30, 2024",
    author: "Jennifer Garcia",
    img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80",
    readTime: "6 min read",
  },
  {
    category: "Market Updates",
    title: "The Woodlands vs. Katy: Which Market is Stronger in 2024?",
    excerpt: "A data-driven comparison of two of Houston's most competitive suburban markets — pricing, inventory, schools, and lifestyle.",
    date: "January 15, 2024",
    author: "Lance Loken",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    readTime: "8 min read",
  },
  {
    category: "Buyer Guide",
    title: "Complete Guide to Buying a Home in Houston",
    excerpt: "Step-by-step walkthrough from pre-approval to closing — what to expect, what to watch for, and how to win.",
    date: "January 5, 2024",
    author: "Will Borel",
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    readTime: "12 min read",
  },
];

const categoryColors: Record<string, string> = {
  "Market Updates": "bg-[#1A1A1A] text-white",
  "Seller Tips": "bg-blue-700 text-white",
  "Buyer Guide": "bg-green-700 text-white",
  "Community": "bg-amber-600 text-white",
  "Careers": "bg-purple-700 text-white",
};

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeader
        label="The Loken Group Blog"
        title="Real Estate Insights"
        subtitle="Market updates, expert tips, and Houston community stories — from the team that knows Greater Houston best."
      />

      {/* Category Filter */}
      <div className="bg-white border-b border-gray-100 sticky top-[80px] z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`font-sans text-xs font-semibold tracking-wide px-4 py-2 whitespace-nowrap border transition-colors ${
                cat === "All"
                  ? "bg-[#BE1E2D] border-[#BE1E2D] text-white"
                  : "border-gray-200 text-gray-600 hover:border-[#BE1E2D] hover:text-[#BE1E2D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-16 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
            <div className="relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-gray-100">
              <Image
                src={featured.img}
                alt={featured.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className={`absolute top-4 left-4 font-sans text-[9px] font-bold tracking-widest px-2.5 py-1 ${categoryColors[featured.category] ?? "bg-gray-700 text-white"}`}>
                {featured.category}
              </span>
            </div>
            <div className="p-10 flex flex-col justify-center">
              <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase mb-3">Featured Post</span>
              <h2 className="font-serif font-bold text-2xl md:text-3xl text-[#1A1A1A] leading-snug mb-4 group-hover:text-[#BE1E2D] transition-colors">
                {featured.title}
              </h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-gray-400 font-sans mb-6">
                <span>{featured.date}</span>
                <span>·</span>
                <span>By {featured.author}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#BE1E2D] hover:gap-3 transition-all">
                Read Article <ArrowRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="RECENT ARTICLES" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article
                key={i}
                className="group bg-white border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={post.img}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className={`absolute top-3 left-3 font-sans text-[9px] font-bold tracking-widest px-2 py-0.5 ${categoryColors[post.category] ?? "bg-gray-700 text-white"}`}>
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-serif font-bold text-base text-[#1A1A1A] leading-snug mb-2 group-hover:text-[#BE1E2D] transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-400 font-sans">
                      <span>{post.date}</span>
                      <span className="mx-1.5">·</span>
                      <span>{post.readTime}</span>
                    </div>
                    <span className="font-sans text-[11px] font-semibold text-[#BE1E2D]">Read →</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 mt-14">
            {[1, 2, 3, "...", 7].map((p, i) => (
              <button
                key={i}
                className={`w-9 h-9 font-sans text-sm border transition-colors ${
                  p === 1
                    ? "bg-[#BE1E2D] border-[#BE1E2D] text-white"
                    : "border-gray-200 text-gray-600 hover:border-[#BE1E2D] hover:text-[#BE1E2D]"
                }`}
              >
                {p}
              </button>
            ))}
            <button className="px-4 h-9 font-sans text-sm border border-gray-200 text-gray-600 hover:border-[#BE1E2D] hover:text-[#BE1E2D] transition-colors">
              Next →
            </button>
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
            Get Articles Delivered to Your Inbox
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Monthly market reports, expert tips, and community updates — direct from The Loken Group.
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
        </div>
      </section>
    </PageLayout>
  );
}
