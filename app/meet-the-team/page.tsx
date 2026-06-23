import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { SectionHeader } from "@/components/ThreeWaysToSell";

export const metadata = {
  title: "Meet the Team",
  description: "26+ full-time professionals dedicated to delivering the best real estate experience in Greater Houston.",
};

function Avatar() {
  return (
    <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
      <svg viewBox="0 0 90 120" className="w-full h-full" fill="none">
        <rect width="90" height="120" fill="#E5E7EB" />
        <circle cx="45" cy="44" r="20" fill="#D1D5DB" />
        <path d="M0 120c0-24.85 20.15-45 45-45s45 20.15 45 45" fill="#D1D5DB" />
      </svg>
    </div>
  );
}

function MemberCard({ name, title, phone }: { name: string; title: string; phone?: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden mb-3">
        <Avatar />
      </div>
      <p className="font-serif font-bold text-[#1A1A1A] text-base leading-tight">{name}</p>
      <p className="font-sans text-[#BE1E2D] text-xs font-semibold mt-0.5 tracking-wide">{title}</p>
      {phone && (
        <a
          href={`tel:${phone.replace(/\D/g, "")}`}
          className="font-sans text-xs text-gray-400 mt-1 block hover:text-[#BE1E2D] transition-colors"
        >
          {phone}
        </a>
      )}
    </div>
  );
}

const production = [
  { name: "Lance Loken", title: "CEO / Co-Owner", phone: "(281) 861-4624" },
  { name: "Karina Loken", title: "COO / Co-Owner", phone: "(281) 861-4624" },
  { name: "Jennifer Garcia", title: "Listing Specialist", phone: "(281) 861-4624" },
  { name: "Sarah Detmore", title: "Buyer Specialist", phone: "(281) 861-4624" },
  { name: "Will Borel", title: "Buyer Specialist", phone: "(281) 861-4624" },
  { name: "LeAnn Acuña", title: "Buyer Specialist", phone: "(281) 861-4624" },
  { name: "Randy Olive", title: "Buyer Specialist", phone: "(281) 861-4624" },
  { name: "Trevor Shelton", title: "Buyer Specialist", phone: "(281) 861-4624" },
];

const insideSales = [
  { name: "Aaron Mitchell", title: "Inside Sales Agent", phone: "(281) 861-4624" },
  { name: "Marya Rodrigues", title: "Inside Sales Agent", phone: "(281) 861-4624" },
  { name: "Kristina Nguyen", title: "Inside Sales Agent", phone: "(281) 861-4624" },
];

const backOffice = [
  { name: "Tiffany Bean", title: "Operations Director" },
  { name: "Rachel Torres", title: "Transaction Coordinator" },
  { name: "Marcus Lee", title: "Transaction Coordinator" },
  { name: "Amy Johnson", title: "Marketing Director" },
  { name: "David Kim", title: "Photographer" },
  { name: "Lisa Wang", title: "Photography Editor" },
  { name: "Carlos Mendez", title: "Finance Director" },
  { name: "Emma Davis", title: "Recruiter" },
  { name: "James Wilson", title: "Operations Specialist" },
];

const international = [
  { name: "Ana Santos", title: "Virtual Assistant" },
  { name: "Miguel Reyes", title: "Virtual Assistant" },
  { name: "Priya Patel", title: "Copywriter" },
  { name: "Yuki Tanaka", title: "Photography Editor" },
  { name: "Fatima Hassan", title: "Virtual Assistant" },
  { name: "Chen Wei", title: "Data Analyst" },
];

function TeamSection({
  label,
  members,
}: {
  label: string;
  members: { name: string; title: string; phone?: string }[];
}) {
  return (
    <section className="py-16 px-6 border-b border-gray-100 last:border-b-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center mb-10">
          <div className="h-px bg-gray-200 flex-1" />
          <p className="font-sans text-[11px] font-bold tracking-[0.35em] text-[#1A1A1A] uppercase whitespace-nowrap mx-6">
            {label}
          </p>
          <div className="h-px bg-gray-200 flex-1" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8">
          {members.map((m) => (
            <MemberCard key={m.name} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MeetTheTeamPage() {
  return (
    <PageLayout>
      {/* Group hero — real site shows a team photo banner with centered title */}
      <section className="relative bg-[#1A1A1A] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1600&q=80"
          alt="The Loken Group team"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/50" />
        <div className="relative py-20 md:py-28 text-center">
          <h1 className="font-serif font-bold text-4xl md:text-5xl text-white tracking-wide">
            MEET THE TEAM
          </h1>
          <p className="font-sans text-gray-400 text-sm mt-3 max-w-lg mx-auto px-6">
            26+ full-time professionals dedicated to delivering the best real estate experience in Greater Houston.
          </p>
        </div>
      </section>

      <TeamSection label="Production Team" members={production} />
      <TeamSection label="Inside Sales Team" members={insideSales} />
      <TeamSection label="Back Office Team" members={backOffice} />
      <TeamSection label="International Team" members={international} />

      {/* Join CTA */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            Careers
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Work for One of Houston&apos;s Best Places to Work
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Join a culture of excellence, collaboration, and results. The Loken Group has been
            named a top workplace in Houston multiple times — and we&apos;re always looking for
            driven individuals to grow with us.
          </p>
          <a
            href="/careers"
            className="inline-block border border-[#BE1E2D] text-[#BE1E2D] font-sans font-semibold text-sm px-10 py-3 hover:bg-[#BE1E2D] hover:text-white transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
