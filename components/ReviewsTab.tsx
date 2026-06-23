export default function ReviewsTab() {
  return (
    <a
      href="#"
      className="fixed left-0 z-50 flex flex-col items-center bg-[#BE1E2D] hover:bg-[#a01825] transition-colors cursor-pointer px-2 py-3 gap-1.5"
      style={{ top: "50%", transform: "translateY(-50%)" }}
      aria-label="Read reviews"
    >
      {/* Star */}
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        <path
          d="M6.5 0.5L7.96 4.96L12.5 4.96L8.77 7.54L10.23 12L6.5 9.42L2.77 12L4.23 7.54L0.5 4.96L5.04 4.96L6.5 0.5Z"
          fill="white"
        />
      </svg>
      {/* Vertical text */}
      <span
        className="font-sans text-white font-bold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
          fontSize: "9px",
          letterSpacing: "0.2em",
        }}
      >
        REVIEWS
      </span>
    </a>
  );
}
