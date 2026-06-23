export default function Loading() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        {/* Animated brand mark */}
        <div className="flex flex-col items-center leading-none select-none">
          <span
            className="font-serif font-bold tracking-widest text-[#1A1A1A] animate-pulse"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)" }}
          >
            LOKEN
          </span>
          <span className="text-[9px] tracking-[0.3em] text-[#1A1A1A]/60 font-sans font-medium -mt-0.5">
            — GROUP —
          </span>
          <span className="text-[7px] tracking-[0.25em] text-[#BE1E2D]/60 font-sans font-medium mt-0.5">
            KELLERWILLIAMS.
          </span>
        </div>

        {/* Progress bar */}
        <div className="w-32 h-px bg-gray-100 overflow-hidden">
          <div className="h-full bg-[#BE1E2D] animate-[loading_1.2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style>{`
        @keyframes loading {
          0%   { width: 0%; margin-left: 0%; }
          50%  { width: 60%; margin-left: 20%; }
          100% { width: 0%; margin-left: 100%; }
        }
      `}</style>
    </div>
  );
}
