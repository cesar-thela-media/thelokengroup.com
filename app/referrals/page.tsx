import PageLayout from "@/components/PageLayout";
import { Gift, Users, DollarSign, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Referral Rewards",
  description: "Refer a friend, family member, or colleague to The Loken Group and earn a referral reward.",
};

const tiers = [
  {
    icon: <Gift size={28} className="text-[#BE1E2D]" />,
    tier: "Standard Referral",
    reward: "$500",
    condition: "For any closed transaction under $500,000",
    details: ["Paid at closing", "Any buyer or seller referral", "No limit on number of referrals", "Gift card or check — your choice"],
  },
  {
    icon: <DollarSign size={28} className="text-white" />,
    tier: "Premium Referral",
    reward: "$1,000",
    condition: "For any closed transaction $500,000–$999,999",
    details: ["Paid at closing", "Higher-value homes = higher reward", "Applies to buyers and sellers", "No limit on number of referrals"],
    featured: true,
  },
  {
    icon: <Users size={28} className="text-[#BE1E2D]" />,
    tier: "Luxury Referral",
    reward: "$1,500+",
    condition: "For any closed transaction $1,000,000+",
    details: ["Paid at closing", "Calculated at 0.15% of sale price", "Applies to buyers and sellers", "Personal thank-you from Lance Loken"],
  },
];

const steps = [
  { num: "01", title: "Submit Your Referral", body: "Fill out the form below with your contact info and your referral's info. That's it — we take it from there." },
  { num: "02", title: "We Reach Out", body: "Our team contacts your referral within 24 hours to schedule a free consultation. We let you know when we connect." },
  { num: "03", title: "They Close Their Transaction", body: "Once your referral closes on a purchase or sale, we notify you immediately." },
  { num: "04", title: "You Get Paid", body: "We issue your reward within 5 business days of their closing. Check or gift card — your choice." },
];

const faqs = [
  { q: "Do I need to be a client to refer someone?", a: "No. Anyone can submit a referral — past clients, friends, neighbors, coworkers, or anyone who knows someone buying or selling." },
  { q: "Is there a limit to how many referrals I can send?", a: "No limit. Send 10 referrals, earn 10 rewards. Our top referrers earn thousands per year." },
  { q: "Can I refer someone in a different city?", a: "If the transaction is in Greater Houston (our 9-county service area), yes. For out-of-area referrals, call us — we may be able to connect them with a trusted team in their market." },
  { q: "When exactly do I get paid?", a: "Within 5 business days of your referral's closing date. We'll email you once the transaction closes and confirm your reward delivery." },
];

export default function ReferralsPage() {
  return (
    <PageLayout>
      {/* ── HERO: reward-forward design ── */}
      <section className="bg-[#BE1E2D] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-sans text-[10px] font-bold tracking-[0.5em] text-white/60 uppercase mb-5">Referral Rewards Program</p>
          <h1 className="font-serif font-bold text-white leading-tight mb-5" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Know someone buying<br />or selling in Houston?
          </h1>
          <p className="font-sans text-white/80 text-base leading-relaxed max-w-xl mx-auto mb-10">
            Send them our way and earn up to <strong className="text-white">$1,500</strong> when they close. Simple, transparent, and paid at closing.
          </p>
          <a href="#referral-form" className="inline-block bg-white text-[#BE1E2D] font-sans font-bold text-sm px-12 py-4 hover:bg-gray-100 transition-colors">
            Submit a Referral
          </a>
        </div>
      </section>

      {/* ── Reward tiers ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Reward Tiers</p>
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A]">How Much You Can Earn</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {tiers.map((t, i) => (
              <div key={i} className={`relative p-8 ${t.featured ? "bg-[#1A1A1A] text-white" : "bg-gray-50 border border-gray-100"}`}>
                {t.featured && (
                  <span className="absolute -top-3 left-8 font-sans text-[9px] font-bold tracking-[0.3em] text-white bg-[#BE1E2D] px-4 py-1 uppercase">
                    Most Common
                  </span>
                )}
                <div className="mb-5">{t.icon}</div>
                <p className={`font-sans text-xs font-bold tracking-wide uppercase mb-1 ${t.featured ? "text-gray-400" : "text-gray-400"}`}>{t.tier}</p>
                <p className={`font-serif font-bold text-5xl mb-2 ${t.featured ? "text-white" : "text-[#1A1A1A]"}`}>{t.reward}</p>
                <p className={`font-sans text-xs leading-snug mb-6 ${t.featured ? "text-gray-400" : "text-gray-500"}`}>{t.condition}</p>
                <ul className="space-y-2.5">
                  {t.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle size={13} className={`shrink-0 mt-0.5 ${t.featured ? "text-[#BE1E2D]" : "text-gray-400"}`} />
                      <span className={`font-sans text-xs leading-relaxed ${t.featured ? "text-gray-300" : "text-gray-500"}`}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">The Process</p>
            <h2 className="font-serif font-bold text-3xl text-[#1A1A1A]">Simple. Transparent. Fast.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-5 right-0 w-full h-px bg-[#BE1E2D]/20 translate-x-4" />
                )}
                <div className="w-10 h-10 rounded-full bg-[#BE1E2D] flex items-center justify-center mb-5 relative z-10">
                  <span className="font-sans font-bold text-xs text-white">{i + 1}</span>
                </div>
                <span className="font-sans text-[9px] font-bold tracking-[0.3em] text-[#BE1E2D] uppercase block mb-1">{s.num}</span>
                <h3 className="font-sans font-bold text-sm text-[#1A1A1A] mb-2">{s.title}</h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Referral form ── */}
      <section id="referral-form" className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Submit a Referral</p>
            <h2 className="font-serif font-bold text-3xl text-white leading-tight">Start Earning Today</h2>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Your Name" className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]" />
              <input type="email" placeholder="Your Email" className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]" />
            </div>
            <input type="tel" placeholder="Your Phone" className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]" />
            <div className="border-t border-white/10 pt-4">
              <p className="font-sans text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Your Referral&apos;s Info</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Referral Name" className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]" />
                <input type="tel" placeholder="Referral Phone" className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]" />
              </div>
            </div>
            <select className="bg-white/10 border border-white/20 text-gray-400 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D]">
              <option value="">Referral Type</option>
              <option>Buyer</option>
              <option>Seller</option>
              <option>Both (buying and selling)</option>
            </select>
            <textarea placeholder="Any additional context (optional)" rows={3} className="bg-white/10 border border-white/20 text-white placeholder-gray-500 font-sans text-sm px-4 py-3 w-full focus:outline-none focus:border-[#BE1E2D] resize-none" />
            <button type="submit" className="w-full bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-bold text-sm py-4 transition-colors">
              Submit My Referral
            </button>
          </form>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-3">Questions</p>
            <h2 className="font-serif font-bold text-3xl text-[#1A1A1A]">Referral FAQ</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, i) => (
              <div key={i} className="py-6">
                <p className="font-sans font-semibold text-sm text-[#1A1A1A] mb-2">{faq.q}</p>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
