import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHeader from "@/components/PageHeader";
import { SectionHeader } from "@/components/ThreeWaysToSell";
import { MapPin, Bed, Bath, Square } from "lucide-react";

export const metadata = {
  title: "Recently Sold",
  description: "Browse recently sold properties by The Loken Group across Greater Houston.",
};

const soldListings = [
  { price: "$562,000", beds: "4", baths: "3.5", sqft: "2,950", address: "18 Creekview Ln", city: "The Woodlands, TX 77381", soldDate: "Apr 2, 2024", daysOnMarket: "8", overAsk: "+$27,000", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80" },
  { price: "$398,000", beds: "3", baths: "2", sqft: "1,920", address: "4502 Sunset Ridge Dr", city: "Katy, TX 77450", soldDate: "Mar 28, 2024", daysOnMarket: "14", overAsk: "+$8,000", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80" },
  { price: "$715,000", beds: "5", baths: "4", sqft: "3,600", address: "211 Magnolia Hollow", city: "Sugar Land, TX 77478", soldDate: "Mar 25, 2024", daysOnMarket: "6", overAsk: "+$40,000", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { price: "$314,000", beds: "3", baths: "2", sqft: "1,700", address: "823 Pearland Oak Ct", city: "Pearland, TX 77584", soldDate: "Mar 19, 2024", daysOnMarket: "11", overAsk: "+$4,000", img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80" },
  { price: "$485,000", beds: "4", baths: "3", sqft: "2,450", address: "7721 Cypresswood Dr", city: "Cypress, TX 77433", soldDate: "Mar 15, 2024", daysOnMarket: "19", overAsk: "List Price", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80" },
  { price: "$890,000", beds: "5", baths: "5", sqft: "4,200", address: "44 Spring Lakes Blvd", city: "Spring, TX 77379", soldDate: "Mar 10, 2024", daysOnMarket: "9", overAsk: "+$55,000", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80" },
  { price: "$445,000", beds: "4", baths: "3", sqft: "2,300", address: "309 Bridlewood Ct", city: "Friendswood, TX 77546", soldDate: "Mar 4, 2024", daysOnMarket: "22", overAsk: "+$5,000", img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=600&q=80" },
  { price: "$329,000", beds: "3", baths: "2", sqft: "1,780", address: "1105 Clear Creek Dr", city: "League City, TX 77573", soldDate: "Feb 28, 2024", daysOnMarket: "31", overAsk: "List Price", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { price: "$675,000", beds: "5", baths: "4", sqft: "3,400", address: "90 Lake Conroe Pkwy", city: "Conroe, TX 77304", soldDate: "Feb 20, 2024", daysOnMarket: "16", overAsk: "+$25,000", img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80" },
  { price: "$289,000", beds: "3", baths: "2", sqft: "1,590", address: "2244 Baytown Crossing", city: "Baytown, TX 77521", soldDate: "Feb 15, 2024", daysOnMarket: "27", overAsk: "List Price", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80" },
  { price: "$780,000", beds: "5", baths: "4.5", sqft: "3,900", address: "55 Riverview Estates", city: "Missouri City, TX 77459", soldDate: "Feb 8, 2024", daysOnMarket: "12", overAsk: "+$30,000", img: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80" },
  { price: "$419,000", beds: "4", baths: "3", sqft: "2,180", address: "777 Harvest Mill Ln", city: "Humble, TX 77338", soldDate: "Jan 31, 2024", daysOnMarket: "18", overAsk: "+$9,000", img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&q=80" },
];

const stats = [
  { num: "29", label: "Avg Days\non Market" },
  { num: "+2%", label: "Above\nList Price" },
  { num: "500+", label: "Homes Sold\nThis Year" },
  { num: "#1", label: "Team in\nHouston" },
];

export default function RecentlySoldPage() {
  return (
    <PageLayout>
      <PageHeader
        label="Proven Results"
        title="Recently Sold"
        subtitle="Real transactions. Real results. Browse homes we've recently closed across Greater Houston."
      />

      {/* Stats Strip */}
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

      {/* Sold Listings */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <SectionHeader text="RECENT CLOSINGS" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {soldListings.map((l, i) => (
              <div key={i} className="bg-white border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={l.img}
                    alt={l.address}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 saturate-[0.6]"
                  />
                  {/* SOLD overlay */}
                  <div className="absolute inset-0 bg-[#1A1A1A]/20" />
                  <div className="absolute top-3 left-3 bg-[#1A1A1A] text-white font-sans text-[9px] font-bold tracking-widest px-2.5 py-1">
                    SOLD
                  </div>
                  {/* Over ask badge */}
                  {l.overAsk !== "List Price" && (
                    <div className="absolute top-3 right-3 bg-green-700 text-white font-sans text-[9px] font-bold tracking-wide px-2 py-1">
                      {l.overAsk} OVER ASK
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 font-sans text-[10px] text-white/80 bg-black/40 px-2 py-0.5">
                    {l.daysOnMarket} days on market
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <p className="font-serif font-bold text-2xl text-[#1A1A1A] leading-none mb-2">{l.price}</p>
                  <div className="flex items-center gap-4 font-sans text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Bed size={12} /> {l.beds} bd</span>
                    <span className="flex items-center gap-1"><Bath size={12} /> {l.baths} ba</span>
                    <span className="flex items-center gap-1"><Square size={12} /> {l.sqft} sqft</span>
                  </div>
                  <div className="flex items-start gap-1.5 mb-4">
                    <MapPin size={11} className="text-gray-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-sans text-sm text-[#1A1A1A] font-medium leading-tight">{l.address}</p>
                      <p className="font-sans text-xs text-gray-400 leading-snug">{l.city}</p>
                    </div>
                  </div>
                  <p className="font-sans text-[11px] text-gray-400">Closed {l.soldDate}</p>
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
            Your Results Could Be Next
          </p>
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
            Ready to Sell Your Home?
          </h2>
          <p className="font-sans text-gray-400 text-sm leading-relaxed mb-8 max-w-xl mx-auto">
            Our sellers average 29 days on market and +2% above list price. Get your guaranteed offer today and join our track record.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/your-home-sold-guaranteed" className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-10 py-3 transition-colors">
              Get My Guaranteed Offer
            </a>
            <a href="/sell" className="inline-block border border-white/30 text-white font-sans font-semibold text-sm px-10 py-3 hover:border-white transition-colors">
              Learn How We Sell
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
