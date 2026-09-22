import Image from "next/image";
import { GALLERY } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function ExperienceGallery() {
  return (
    <section id="experience" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-navy text-balance sm:text-4xl">
            The Lollipop Locs Haircut Experience
          </h2>
          <p className="mt-2 font-display text-xl font-semibold text-accent">
            Cute Salon. Serious Haircuts.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
            Bring a reference photo — we&apos;ll match the cut your child (and
            you) have been imagining, on a chair they actually want to sit in.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="mt-8">
        <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-4 pb-4 snap-x snap-mandatory no-scrollbar sm:px-6">
          {GALLERY.map((item) => (
            <figure
              key={item.caption}
              className="w-[78vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-3xl bg-white shadow-card sm:w-[280px]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="300px"
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <figcaption className="px-4 py-3.5 font-display text-base font-bold text-navy">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
