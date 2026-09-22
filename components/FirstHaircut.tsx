import Image from "next/image";
import { Award } from "lucide-react";
import { IMAGES } from "@/lib/constants";
import { WhatsAppCta } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FirstHaircut() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10">
      <Reveal className="mx-auto grid max-w-7xl items-center gap-8 overflow-hidden rounded-3xl bg-white p-5 shadow-card sm:p-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={IMAGES.firstHaircut.src}
              alt={IMAGES.firstHaircut.alt}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold leading-tight text-navy text-balance sm:text-4xl">
            Their First Haircut Happens Only Once
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A first haircut is a tiny milestone with a big feeling. We keep the
            room calm, the scissors patient, and you close by — so the memory is
            of giggles and a little certificate, not tears in a busy adult
            salon.
          </p>

          <div className="mt-6 flex gap-3 rounded-3xl bg-blush p-4 sm:p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pastel-lemon text-accent">
              <Award className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-navy">
                Personalised First Haircut Certificate
              </p>
              <p className="mt-1 text-sm font-semibold text-accent">
                ₹899 Add-On
              </p>
            </div>
          </div>

          <div className="mt-7">
            <WhatsAppCta
              label="Book Their First Haircut"
              className="w-full sm:w-auto"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
