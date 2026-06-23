import PageLayout from "@/components/PageLayout";
import { BRAND, ROUTES } from "@/lib/constants";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <PageLayout>
      <section className="min-h-[80vh] bg-white flex items-center justify-center px-6 py-24">
        <div className="max-w-xl w-full text-center">
          {/* Giant 404 */}
          <p
            className="font-serif font-bold text-[#BE1E2D]/10 leading-none select-none"
            style={{ fontSize: "clamp(8rem, 25vw, 16rem)" }}
            aria-hidden="true"
          >
            404
          </p>

          <div className="-mt-8 relative z-10">
            <p className="font-sans text-[10px] font-bold tracking-[0.45em] text-[#BE1E2D] uppercase mb-4">
              Page Not Found
            </p>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-[#1A1A1A] leading-tight mb-4">
              This page doesn&apos;t exist.
            </h1>
            <p className="font-sans text-sm text-gray-500 leading-relaxed mb-10 max-w-sm mx-auto">
              The link may be broken or the page may have moved. Start from the
              homepage or reach us directly.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/"
                className="bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-8 py-3 transition-colors"
              >
                Back to Homepage
              </a>
              <a
                href={ROUTES.contact}
                className="border border-[#1A1A1A] text-[#1A1A1A] font-sans font-semibold text-sm px-8 py-3 hover:bg-[#1A1A1A] hover:text-white transition-colors"
              >
                Contact Us
              </a>
            </div>

            <p className="font-sans text-xs text-gray-400 mt-8">
              Or call us directly:{" "}
              <a href={BRAND.phoneHref} className="text-[#BE1E2D] hover:underline font-semibold">
                {BRAND.phone}
              </a>
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
