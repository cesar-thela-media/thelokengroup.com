import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[580px] md:h-[680px] lg:h-[760px] overflow-hidden">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1600&q=80"
        alt="Luxury home"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Gradient overlay — darker at bottom-left where text lives */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/65 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-14 md:pb-20">
        <div className="max-w-7xl mx-auto w-full px-6 flex items-end justify-between">

          {/* Left: Headline + CTA */}
          <div className="max-w-2xl">
            <h1 className="font-serif text-white text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.08] mb-4">
              We Guarantee To Sell
              <br />
              Your Home&nbsp;&mdash;&nbsp;Or We&apos;ll Buy It.
            </h1>
            {/* Red separator line */}
            <div className="w-20 h-[3px] bg-[#BE1E2D] mb-6" />
            <a
              href="#"
              className="inline-block bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-7 py-4 transition-colors tracking-wide"
            >
              Get My Guaranteed Offer
            </a>
          </div>

          {/* Right: Badge */}
          <div className="hidden md:flex items-center justify-center shrink-0 ml-8">
            <div className="relative w-44 h-44 lg:w-52 lg:h-52">
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
                {/* White filled circle */}
                <circle cx="100" cy="100" r="96" fill="white" />
                {/* Inner red border ring */}
                <circle cx="100" cy="100" r="86" fill="none" stroke="#BE1E2D" strokeWidth="1.5" />
                {/* Dot accents at top/bottom */}
                <circle cx="100" cy="16" r="3.5" fill="#BE1E2D" />
                <circle cx="100" cy="184" r="3.5" fill="#BE1E2D" />
                {/* Arc text paths — radius 78 rides just inside the inner red ring (86) */}
                <defs>
                  <path id="arcTop" d="M 22,100 A 78,78 0 0,1 178,100" />
                  <path id="arcBottom" d="M 22,100 A 78,78 0 0,0 178,100" />
                </defs>
                <text fontSize="8.5" fontFamily="Arial, sans-serif" fontWeight="700" fill="#BE1E2D" letterSpacing="2.5">
                  <textPath href="#arcTop" startOffset="50%" textAnchor="middle">YOUR HOME SOLD GUARANTEED</textPath>
                </text>
                <text fontSize="8.5" fontFamily="Arial, sans-serif" fontWeight="700" fill="#BE1E2D" letterSpacing="2.5">
                  <textPath href="#arcBottom" startOffset="50%" textAnchor="middle">OR WE&apos;LL BUY IT</textPath>
                </text>
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center mt-2">
                <span className="font-serif font-bold text-[#BE1E2D] leading-none"
                  style={{ fontSize: "clamp(2.8rem, 5vw, 3.5rem)" }}>
                  100%
                </span>
                <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-[#1A1A1A] mt-1">
                  SINCE 2014
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
