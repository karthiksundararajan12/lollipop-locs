import Image from "next/image";
import { IMAGES } from "@/lib/constants";
import { WhatsAppCta } from "./CtaButton";
import { Reveal } from "./Reveal";

export function ReassuranceSplit() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-white p-5 shadow-card sm:p-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={IMAGES.reassurance.src}
                alt={IMAGES.reassurance.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 480px"
                className="object-cover"
              />
            </div>
          </div>
          <p className="absolute -bottom-3 right-3 flex h-24 w-24 rotate-6 items-center justify-center rounded-full bg-accent px-3 text-center font-display text-xs font-bold leading-tight text-white shadow-lift sm:h-28 sm:w-28 sm:text-sm">
            It&apos;s okay to take your time
          </p>
        </div>

        <div className="lg:py-4">
          <h2 className="font-display text-3xl font-bold leading-tight text-navy text-balance sm:text-4xl">
            Worried Your Little One Won&apos;t Sit for a Haircut?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            First haircuts can feel big — for kids and for parents. If your
            little one is anxious, shy, or just not ready to sit still, that is
            completely normal. At Lollipop Locs we never rush. Parents stay
            close, chairs are themed, and we wait until your child is
            comfortable before we pick up the scissors.
          </p>
          <p className="mt-5 font-display text-xl font-bold text-accent text-balance sm:text-2xl">
            Let Them Explore. Let Them Play. Let Them Get Comfortable.
          </p>
          <div className="mt-7">
            <WhatsAppCta />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
