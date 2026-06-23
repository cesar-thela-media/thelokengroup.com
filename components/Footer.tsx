import { MapPin, Phone, Mail } from "lucide-react";
import { BRAND, ROUTES } from "@/lib/constants";

const navColumns = [
  {
    links: [
      { label: "Buy", href: ROUTES.buy },
      { label: "Sell", href: ROUTES.sell },
      { label: "Guaranteed Sale", href: ROUTES.guaranteed },
      { label: "Communities", href: ROUTES.communities },
      { label: "Home Search", href: ROUTES.searchHomes },
    ],
  },
  {
    links: [
      { label: "Reviews", href: ROUTES.reviews },
      { label: "Resources", href: ROUTES.resources },
      { label: "Blog", href: ROUTES.blog },
      { label: "Contact", href: ROUTES.contact },
      { label: "Join Our Team", href: ROUTES.careers },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + contact */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <div className="font-serif font-bold text-2xl tracking-widest text-white leading-tight">LOKEN</div>
              <div className="text-[10px] tracking-[0.3em] text-white/80 font-sans">— GROUP —</div>
              <div className="text-[8px] tracking-[0.28em] text-[#BE1E2D] font-sans mt-0.5">
                KELLERWILLIAMS.
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-start gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#BE1E2D]" />
                <span className="leading-snug">
                  2201 Lake Woodlands Dr.
                  <br />
                  The Woodlands, TX 77380
                </span>
              </a>
              <a href={BRAND.phoneHref} className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                <Phone size={15} className="shrink-0 text-[#BE1E2D]" />
                {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white text-sm transition-colors">
                <Mail size={15} className="shrink-0 text-[#BE1E2D]" />
                {BRAND.email}
              </a>
            </div>
          </div>

          {/* Nav links */}
          {navColumns.map((col, i) => (
            <div key={i}>
              <ul className="flex flex-col gap-3.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="font-sans text-sm text-gray-400 hover:text-white transition-colors tracking-wide">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social + badges row */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="font-sans text-[10px] font-bold tracking-[0.35em] text-gray-500 uppercase">
              Follow Us
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded border border-white/30 flex items-center justify-center text-white/70 hover:border-white/60 hover:text-white transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Certification badges */}
          <div className="flex gap-3 items-center flex-wrap justify-center">
            {[
              { top: "INC.", mid: "5000" },
              { top: "HOUSTON CHRONICLE", mid: "TOP 100" },
              { top: "BBB", mid: "ACCREDITED\nBUSINESS" },
            ].map((badge, i) => (
              <div key={i} className="border border-white/20 rounded px-3 py-2 text-center min-w-[68px]">
                <div className="font-sans text-[8px] text-white/40 tracking-wider leading-tight">{badge.top}</div>
                <div className="font-sans text-[10px] font-bold text-white/60 whitespace-pre-line leading-tight mt-0.5">{badge.mid}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-center gap-3 text-[11px] text-white/35 font-sans">
          <span>© {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</span>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white/60 transition-colors">TREC Information About Brokerage Services</a>
          <span className="text-white/20">|</span>
          <a href="#" className="hover:text-white/60 transition-colors">Texas Consumer Protection Notice</a>
        </div>
      </div>
    </footer>
  );
}
