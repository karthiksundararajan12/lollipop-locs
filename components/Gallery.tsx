import Image from "next/image";
import { GALLERY } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-candy">
            Gallery
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Soft light, happy afters
          </h2>
        </Reveal>

        <div className="columns-2 gap-3 md:columns-3 md:gap-4">
          {GALLERY.map((photo, index) => (
            <Reveal
              key={photo.src}
              delay={index * 0.06}
              className="mb-3 break-inside-avoid md:mb-4"
            >
              <figure
                className={`relative overflow-hidden rounded-2xl bg-blush shadow-card sm:rounded-3xl ${
                  photo.tall ? "aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition duration-500 hover:scale-[1.04]"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
