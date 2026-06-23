import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Luxury home exterior",
  },
  {
    src: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
    alt: "Elegant living room with fireplace",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    alt: "Real estate team",
  },
  {
    src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    alt: "Houston city skyline",
  },
];

export default function PhotoGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {photos.map((photo, i) => (
        <div key={i} className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 25vw"
            className="object-cover grayscale"
          />
        </div>
      ))}
    </section>
  );
}
