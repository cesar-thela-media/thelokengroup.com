import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { SectionHeader } from "@/components/ThreeWaysToSell";
import { ArrowRight, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Careers",
  description: "Join one of Houston's best places to work. Explore open positions at The Loken Group.",
};

const openings = [
  {
    title: "Buyer Specialist",
    type: "Full-Time",
    location: "The Woodlands, TX",
    team: "Production",
    description:
      "Represent buyers throughout Greater Houston. You'll guide clients from first showing to closing, leveraging our systems, marketing, and support team to deliver an exceptional experience.",
    requirements: [
      "Active Texas Real Estate License",
      "2+ years buyer representation experience",
      "Strong communication and follow-up skills",
      "Self-motivated with a team-first attitude",
    ],
  },
  {
    title: "Inside Sales Agent",
    type: "Full-Time",
    location: "The Woodlands, TX",
    team: "Inside Sales",
    description:
      "Convert inbound and outbound leads into appointments for our Buyer and Listing Specialists. This is a high-activity role built for someone who thrives on conversations and momentum.",
    requirements: [
      "Active Texas Real Estate License (or willing to obtain)",
      "Experience in sales or customer-facing roles",
      "Proficiency with CRM systems",
      "Competitive, goal-oriented mindset",
    ],
  },
  {
    title: "Transaction Coordinator",
    type: "Full-Time",
    location: "The Woodlands, TX (Hybrid)",
    team: "Back Office",
    description:
      "Manage all administrative aspects of real estate transactions from contract to close. You'll be the backbone that keeps our pipeline running smoothly.",
    requirements: [
      "2+ years transaction coordination experience",
      "Knowledge of Texas real estate contracts",
      "Exceptional attention to detail",
      "Strong written and verbal communication",
    ],
  },
  {
    title: "Marketing Coordinator",
    type: "Full-Time",
    location: "The Woodlands, TX (Hybrid)",
    team: "Back Office",
    description:
      "Create compelling listing content, manage social media, coordinate video shoots, and support our brand across all channels.",
    requirements: [
      "Degree in Marketing, Communications, or related field",
      "Proficiency in Canva, Adobe Creative Suite, or similar",
      "Experience managing social media accounts",
      "Real estate experience a plus",
    ],
  },
  {
    title: "Virtual Assistant",
    type: "Full-Time",
    location: "Remote (International)",
    team: "International",
    description:
      "Support our agents with scheduling, CRM updates, email management, and administrative tasks. Strong English communication skills are a must.",
    requirements: [
      "Excellent written and verbal English",
      "Proficiency in Google Workspace and CRM tools",
      "Reliable high-speed internet connection",
      "Proactive and detail-oriented",
    ],
  },
  {
    title: "Listing Photographer",
    type: "Contract / Part-Time",
    location: "Greater Houston, TX",
    team: "Back Office",
    description:
      "Capture stunning photography and video for residential listings across our portfolio. You'll work with our marketing team to ensure every property is showcased at its best.",
    requirements: [
      "Professional DSLR/mirrorless photography experience",
      "Real estate or architectural photography portfolio",
      "Own professional lighting equipment",
      "Reliable vehicle for travel across Houston metro",
    ],
  },
];

const perks = [
  { icon: "🏆", title: "Top-Ranked Team", body: "Work alongside the #1 real estate team in Houston — learn from the best every single day." },
  { icon: "📈", title: "Uncapped Earnings", body: "Our production team earns commission-based income with no ceiling. High performers thrive here." },
  { icon: "🤝", title: "World-Class Training", body: "Access Keller Williams' national training platform plus in-house coaching from Lance and Karina Loken." },
  { icon: "🏡", title: "Lead Generation", body: "We invest heavily in marketing and lead generation so you can focus on closing, not cold calling." },
  { icon: "⚙️", title: "Built-In Systems", body: "Proven processes, CRM, marketing, and admin support so nothing falls through the cracks." },
  { icon: "❤️", title: "Culture of Excellence", body: "Named a Top Workplace in Houston multiple times. We celebrate wins and grow together." },
];

export default function CareersPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="Loken Group office"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A]/90 to-[#1A1A1A]/50" />
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Join Our Team
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-6xl text-white leading-tight mb-5 max-w-2xl">
            Work for One of Houston&apos;s Best Places to Work
          </h1>
          <p className="font-sans text-gray-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            A culture of excellence, collaboration, and results. The Loken Group has been named a top workplace in Houston multiple times — we&apos;re always looking for driven individuals to grow with us.
          </p>
          <a
            href="#openings"
            className="inline-flex items-center gap-2 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3.5 transition-colors"
          >
            View Open Positions <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="WHY THE LOKEN GROUP" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {perks.map((p, i) => (
              <div key={i} className="border border-gray-100 p-8 hover:border-[#BE1E2D]/30 transition-colors">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-serif font-bold text-lg text-[#1A1A1A] mb-2">{p.title}</h3>
                <p className="font-sans text-sm text-gray-600 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader text="OPEN POSITIONS" />
          <div className="flex flex-col gap-5">
            {openings.map((job, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 p-8 hover:border-[#BE1E2D]/40 hover:shadow-sm transition-all group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-white bg-[#BE1E2D] px-2.5 py-1 uppercase">
                        {job.team}
                      </span>
                      <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-gray-400 border border-gray-200 px-2.5 py-1 uppercase">
                        {job.type}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-2xl text-[#1A1A1A]">{job.title}</h3>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 shrink-0">
                    <MapPin size={13} />
                    <span className="font-sans text-sm">{job.location}</span>
                  </div>
                </div>
                <p className="font-sans text-sm text-gray-600 leading-relaxed mb-5">{job.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {job.requirements.map((r, j) => (
                    <div key={j} className="flex items-start gap-2">
                      <span className="w-1 h-1 bg-[#BE1E2D] rounded-full mt-2 shrink-0" />
                      <span className="font-sans text-xs text-gray-500">{r}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-[#BE1E2D] text-[#BE1E2D] font-sans font-semibold text-xs px-6 py-2.5 hover:bg-[#BE1E2D] hover:text-white transition-colors"
                >
                  Apply Now <ArrowRight size={12} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Don&apos;t See the Right Fit?
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Send Us Your Resume Anyway
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            We&apos;re always growing and always looking for exceptional talent. Drop us a line — if you&apos;re the right fit, we&apos;ll make room.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
