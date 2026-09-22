import Image from "next/image";
import { Navigation } from "lucide-react";
import { IMAGES, MAPS_DIRECTIONS_URL } from "@/lib/constants";
import { CallCta, CtaButton, WhatsAppCta } from "./CtaButton";
import { Reveal } from "./Reveal";

export function FinalCTA() {
  return (
    <section className="px-4 py-6 sm:px-6 sm:py-10">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl">
        <div className="relative min-h-[420px] sm:min-h-[380px]">
          <Image
            src={IMAGES.finalCta.src}
            alt={IMAGES.finalCta.alt}
            fill
            loading="lazy"
            sizes="100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/55 to-accent/30" />
          <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-end px-5 py-10 text-center sm:min-h-[380px] sm:justify-center sm:py-16">
            <h2 className="font-display text-3xl font-bold text-white text-balance sm:text-4xl lg:text-5xl">
              Ready for Their Next Haircut?
            </h2>
            <p className="mt-3 font-display text-xl font-bold text-blush">
              Kids Haircuts from ₹899
            </p>
            <div className="mt-7 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
              <WhatsAppCta
                label="WhatsApp & Book Now"
                className="w-full sm:w-auto"
              />
              <CallCta label="Call & Book" className="w-full sm:w-auto" />
              <CtaButton
                href={MAPS_DIRECTIONS_URL}
                variant="white-outline"
                className="w-full sm:w-auto"
                icon={<Navigation className="h-4 w-4" aria-hidden="true" />}
              >
                Get Directions
              </CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
