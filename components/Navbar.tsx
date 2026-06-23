"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { BRAND, ROUTES } from "@/lib/constants";

const navItems = [
  {
    label: "Sell",
    href: "/sell",
    children: [
      { label: "Sell Your Home", href: "/sell" },
      { label: "Your Home Sold Guaranteed", href: "/your-home-sold-guaranteed" },
      { label: "Buy Before You Sell", href: "/buybeforeyousell" },
      { label: "Cash Offer Upfront", href: "/cash-offer-upfront" },
    ],
  },
  {
    label: "Buy",
    href: "/buy",
    children: [
      { label: "Buy Your Dream Home", href: "/buy" },
      { label: "Build Your Dream Home", href: "/build-your-dream-home" },
    ],
  },
  {
    label: "Communities",
    href: "/houston-communities",
    children: [
      { label: "Houston Communities", href: "/houston-communities" },
      { label: "Schools Guide", href: "/schools" },
    ],
  },
  {
    label: "Home Search",
    href: "/search-for-homes",
    children: [
      { label: "Search For Homes", href: "/search-for-homes" },
      { label: "Recently Sold", href: "/recently-sold" },
    ],
  },
  {
    label: "About",
    href: "/meet-the-team",
    children: [
      { label: "Meet The Team", href: "/meet-the-team" },
      { label: "The Loken Group Experience", href: "/the-loken-group-experience" },
      { label: "Reviews", href: "/reviews" },
      { label: "Mission Statement", href: "/mission-statement" },
      { label: "Careers", href: "/careers" },
      { label: "Partners", href: "/partners" },
      { label: "Referral Rewards", href: "/referrals" },
    ],
  },
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "Press Releases", href: "/press-releases" },
      { label: "TV / Radio Ads", href: "/tv-radio-ads" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

function DropdownMenu({ items, visible }: { items: { label: string; href: string }[]; visible: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 w-56 bg-white border border-gray-100 shadow-lg transition-all duration-150 z-50 ${
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
      }`}
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-5 py-3 font-sans text-sm text-[#1A1A1A] hover:bg-gray-50 hover:text-[#BE1E2D] border-b border-gray-50 last:border-b-0 transition-colors"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}

export default function Navbar({ floating = false }: { floating?: boolean }) {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <header className={`${floating ? "absolute" : "sticky"} top-0 left-0 right-0 z-50 bg-white border-b border-gray-100`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex flex-col items-center leading-none select-none shrink-0">
          <span className="font-serif font-bold text-xl lg:text-2xl tracking-widest text-[#1A1A1A]">LOKEN</span>
          <span className="text-[10px] tracking-[0.3em] text-[#1A1A1A] font-sans font-medium -mt-0.5">— GROUP —</span>
          <span className="text-[7px] tracking-[0.25em] text-[#BE1E2D] font-sans font-medium mt-0.5">KELLERWILLIAMS.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-5">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className="flex items-center gap-1 text-sm font-sans font-medium text-[#1A1A1A] hover:text-[#BE1E2D] transition-colors py-2"
              >
                {item.label}
                {item.children && (
                  <ChevronDown size={12} className={`transition-transform duration-150 ${activeDropdown === item.label ? "rotate-180 text-[#BE1E2D]" : "text-gray-400"}`} />
                )}
              </a>
              {item.children && (
                <DropdownMenu items={item.children} visible={activeDropdown === item.label} />
              )}
            </div>
          ))}
          <a
            href={ROUTES.guaranteed}
            className="ml-1 border border-[#BE1E2D] text-[#BE1E2D] text-sm font-sans font-semibold px-5 py-2.5 hover:bg-[#BE1E2D] hover:text-white transition-colors whitespace-nowrap"
          >
            Get My Guaranteed Offer
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <a
                  href={item.href}
                  className="flex-1 py-3 text-base font-sans font-medium text-[#1A1A1A] hover:text-[#BE1E2D]"
                  onClick={() => !item.children && setOpen(false)}
                >
                  {item.label}
                </a>
                {item.children && (
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className="p-2 text-gray-400"
                  >
                    <ChevronDown size={14} className={`transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                )}
              </div>
              {item.children && mobileExpanded === item.label && (
                <div className="pl-4 pb-2 flex flex-col gap-0 border-l border-gray-100 ml-2">
                  {item.children.map((child) => (
                    <a
                      key={child.href}
                      href={child.href}
                      className="py-2 text-sm font-sans text-gray-500 hover:text-[#BE1E2D]"
                      onClick={() => setOpen(false)}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={ROUTES.guaranteed}
            className="mt-2 border border-[#BE1E2D] text-[#BE1E2D] text-sm font-sans font-semibold px-5 py-3 text-center hover:bg-[#BE1E2D] hover:text-white transition-colors"
            onClick={() => setOpen(false)}
          >
            Get My Guaranteed Offer
          </a>
        </div>
      )}
    </header>
  );
}
