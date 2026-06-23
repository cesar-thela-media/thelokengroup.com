import Image from "next/image";

interface PageHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  cta?: { text: string; href: string };
  image?: string;
}

export default function PageHeader({ label, title, subtitle, cta, image }: PageHeaderProps) {
  return (
    <section className="relative bg-[#1A1A1A] overflow-hidden py-16 px-6 md:py-20">
      {image && (
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-[#1A1A1A]/90 to-[#1A1A1A]/60" />
      <div className="relative max-w-7xl mx-auto">
        {label && (
          <p className="font-sans text-[10px] font-bold tracking-[0.4em] text-[#BE1E2D] uppercase mb-4">
            {label}
          </p>
        )}
        <h1 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight max-w-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="font-sans text-gray-400 mt-4 text-sm leading-relaxed max-w-lg">
            {subtitle}
          </p>
        )}
        {cta && (
          <a
            href={cta.href}
            className="inline-block mt-6 bg-[#BE1E2D] hover:bg-[#a01825] text-white font-sans font-semibold text-sm px-7 py-3 transition-colors"
          >
            {cta.text}
          </a>
        )}
      </div>
    </section>
  );
}
