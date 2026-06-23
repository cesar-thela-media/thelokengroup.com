"use client";
import { useState } from "react";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
// metadata not supported in client components — set in layout or via separate metadata file
import { Bed, Bath, Square, MapPin, SlidersHorizontal } from "lucide-react";

const listings = [
  { price: "$485,000", beds: "4", baths: "3", sqft: "2,450", address: "1234 Oak Creek Dr", city: "The Woodlands, TX 77380", status: "NEW", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { price: "$325,000", beds: "3", baths: "2", sqft: "1,850", address: "567 Cypress Mill Rd", city: "Katy, TX 77450", status: "ACTIVE", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { price: "$615,000", beds: "5", baths: "4", sqft: "3,200", address: "890 Sugar Mill Way", city: "Sugar Land, TX 77478", status: "ACTIVE", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { price: "$289,000", beds: "3", baths: "2", sqft: "1,650", address: "432 Pinewood Ct", city: "Humble, TX 77338", status: "PRICE DROP", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=80" },
  { price: "$895,000", beds: "5", baths: "5", sqft: "4,100", address: "78 Spring Lakes Blvd", city: "Spring, TX 77379", status: "ACTIVE", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
  { price: "$415,000", beds: "4", baths: "3", sqft: "2,100", address: "2345 Conroe Mill Rd", city: "Conroe, TX 77304", status: "ACTIVE", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { price: "$525,000", beds: "4", baths: "3.5", sqft: "2,750", address: "910 Bridgestone Dr", city: "Cypress, TX 77433", status: "NEW", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80" },
  { price: "$375,000", beds: "3", baths: "2.5", sqft: "2,000", address: "156 Pearland Grove Ln", city: "Pearland, TX 77584", status: "ACTIVE", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
  { price: "$699,000", beds: "5", baths: "4", sqft: "3,500", address: "23 Friendswood Oaks Dr", city: "Friendswood, TX 77546", status: "ACTIVE", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80" },
  { price: "$445,000", beds: "4", baths: "3", sqft: "2,300", address: "678 Clear Lake Dr", city: "League City, TX 77573", status: "PRICE DROP", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { price: "$298,000", beds: "3", baths: "2", sqft: "1,700", address: "345 Baytown Crossing", city: "Baytown, TX 77521", status: "ACTIVE", img: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=600&q=80" },
  { price: "$755,000", beds: "5", baths: "4.5", sqft: "3,800", address: "112 Missouri City Ln", city: "Missouri City, TX 77459", status: "NEW", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
];

const statusColors: Record<string, string> = {
  NEW: "bg-[#BE1E2D] text-white",
  ACTIVE: "bg-[#1A1A1A] text-white",
  "PRICE DROP": "bg-green-700 text-white",
};

const selectCls =
  "border border-gray-200 px-4 py-2.5 font-sans text-sm text-[#1A1A1A] bg-white focus:outline-none focus:border-[#BE1E2D] transition-colors";

export default function SearchForHomesPage() {
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <PageLayout>
      {/* Filter bar */}
      <div className="sticky top-[80px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Desktop filters */}
          <div className="hidden md:flex items-center gap-3 flex-wrap">
            <input
              type="text"
              placeholder="City, ZIP, or neighborhood"
              className={selectCls + " flex-1 min-w-[200px]"}
            />
            <select className={selectCls}>
              <option>Min Price</option>
              <option>$200,000</option>
              <option>$300,000</option>
              <option>$400,000</option>
              <option>$500,000</option>
              <option>$750,000</option>
            </select>
            <select className={selectCls}>
              <option>Max Price</option>
              <option>$400,000</option>
              <option>$600,000</option>
              <option>$800,000</option>
              <option>$1,000,000+</option>
            </select>
            <select className={selectCls}>
              <option>Beds</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
              <option>5+</option>
            </select>
            <select className={selectCls}>
              <option>Baths</option>
              <option>1+</option>
              <option>2+</option>
              <option>3+</option>
              <option>4+</option>
            </select>
            <select className={selectCls}>
              <option>Type</option>
              <option>House</option>
              <option>Condo</option>
              <option>Townhouse</option>
              <option>Land</option>
            </select>
            <button className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-7 py-2.5 transition-colors whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Mobile filter toggle */}
          <div className="flex md:hidden items-center justify-between gap-3">
            <input
              type="text"
              placeholder="City, ZIP, or neighborhood"
              className={selectCls + " flex-1"}
            />
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="flex items-center gap-2 border border-gray-200 px-4 py-2.5 font-sans text-sm text-[#1A1A1A]"
            >
              <SlidersHorizontal size={14} />
              Filters
            </button>
          </div>

          {filtersOpen && (
            <div className="md:hidden grid grid-cols-2 gap-3 mt-3">
              <select className={selectCls}>
                <option>Min Price</option>
                <option>$200,000</option>
                <option>$300,000</option>
                <option>$500,000</option>
              </select>
              <select className={selectCls}>
                <option>Max Price</option>
                <option>$500,000</option>
                <option>$800,000</option>
                <option>$1,000,000+</option>
              </select>
              <select className={selectCls}>
                <option>Beds</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
              <select className={selectCls}>
                <option>Baths</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
              <button className="col-span-2 bg-[#BE1E2D] text-white font-sans font-semibold text-sm py-3 transition-colors">
                Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results header */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <p className="font-sans text-sm text-gray-600">
          Showing <strong className="text-[#1A1A1A]">{listings.length} homes</strong> in Greater Houston
        </p>
        <select className="border border-gray-200 px-3 py-2 font-sans text-sm text-[#1A1A1A] focus:outline-none focus:border-[#BE1E2D]">
          <option>Sort: Newest</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Sq Ft: Largest</option>
        </select>
      </div>

      {/* Listings grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((l, i) => (
            <div
              key={i}
              className="border border-gray-200 overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                <Image
                  src={l.img}
                  alt={l.address}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span
                  className={`absolute top-3 left-3 font-sans text-[10px] font-bold tracking-widest px-2.5 py-1 ${
                    statusColors[l.status] ?? "bg-gray-700 text-white"
                  }`}
                >
                  {l.status}
                </span>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="font-serif font-bold text-2xl text-[#1A1A1A] leading-none mb-2">
                  {l.price}
                </p>
                <div className="flex items-center gap-4 font-sans text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Bed size={13} /> {l.beds} bd
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={13} /> {l.baths} ba
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={13} /> {l.sqft} sqft
                  </span>
                </div>
                <div className="flex items-start gap-1.5">
                  <MapPin size={12} className="text-gray-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-sans text-sm text-[#1A1A1A] font-medium leading-tight">{l.address}</p>
                    <p className="font-sans text-xs text-gray-400 leading-snug">{l.city}</p>
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5">
                <a
                  href="#"
                  className="block text-center border border-[#BE1E2D] text-[#BE1E2D] font-sans font-semibold text-xs py-2.5 hover:bg-[#BE1E2D] hover:text-white transition-colors tracking-wide"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {[1, 2, 3, "...", 8].map((p, i) => (
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
    </PageLayout>
  );
}
