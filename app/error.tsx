"use client";
import { useEffect } from "react";
import { BRAND, ROUTES } from "@/lib/constants";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[App Error]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-24">
      <div className="max-w-xl w-full text-center">
        {/* Faded background word */}
        <p
          className="font-serif font-bold text-[#BE1E2D]/10 leading-none select-none"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)" }}
          aria-hidden="true"
        >
          500
        </p>

        <div className="-mt-6 relative z-10">
          <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-4">
            Something went wrong
          </p>
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4">
            An unexpected error occurred.
          </h1>
          <p className="font-sans text-sm text-gray-500 leading-relaxed mb-10 max-w-sm mx-auto">
            Our team has been notified. Try refreshing the page, or reach us
            directly if the issue persists.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={reset}
              className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3 transition-colors"
            >
              Try Again
            </button>
            <a
              href="/"
              className="border border-[#1A1A1A] text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              Back to Homepage
            </a>
            <a
              href={ROUTES.contact}
              className="border border-gray-200 text-gray-600 font-sans font-semibold text-sm px-8 py-3 hover:border-gray-400 transition-colors"
            >
              Contact Us
            </a>
          </div>

          <p className="font-sans text-xs text-gray-400 mt-8">
            Or call us:{" "}
            <a href={BRAND.phoneHref} className="text-[#BE1E2D] hover:underline font-semibold">
              {BRAND.phone}
            </a>
          </p>

          {error.digest && (
            <p className="font-sans text-[10px] text-gray-300 mt-3">
              Error ID: {error.digest}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
