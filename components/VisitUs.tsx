import Image from "next/image";
import { Clock, MapPin, ParkingCircle, Heart, Landmark } from "lucide-react";
import { ADDRESS, HOURS, IMAGES } from "@/lib/constants";
import { CallCta, DirectionsCta, WhatsAppCta } from "./CtaButton";
import { Reveal } from "./Reveal";

const visitPerks = [
  { label: "Easy Parking", icon: ParkingCircle },
  { label: "Family Friendly Location", icon: Heart },
  { label: "Near Infosys Campus", icon: Landmark },
];

export function VisitUs() {
  return (
    <section id="visit" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <Reveal className="mx-auto max-w-7xl">
        <h2 className="font-display text-3xl font-bold text-navy text-balance sm:text-4xl">
          Visit Lollipop Locs – Electronic City
        </h2>

        <div className="mt-8 grid items-start gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
            <div className="flex gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pastel-lavender text-violet-500">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <address className="not-italic">
                <p className="font-display text-lg font-bold text-navy">
                  {ADDRESS.line1}
                </p>
                <p className="mt-1 text-sm text-muted">{ADDRESS.line2}</p>
              </address>
            </div>

            <div className="mt-6 flex gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-pastel-mint text-emerald-600">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <ul className="space-y-1">
                {HOURS.map((row) => (
                  <li key={row.days} className="text-sm text-muted">
                    <span className="font-semibold text-navy">{row.days}:</span>{" "}
                    {row.time}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <CallCta label="Call Now" className="w-full sm:w-auto" />
              <WhatsAppCta label="WhatsApp" className="w-full sm:w-auto" />
              <DirectionsCta className="w-full sm:w-auto" />
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {visitPerks.map((perk) => (
                <li
                  key={perk.label}
                  className="flex items-center gap-2 text-sm font-semibold text-navy"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blush text-accent">
                    <perk.icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {perk.label}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <div className="relative aspect-[4/3] min-h-[260px]">
              <Image
                src={IMAGES.storefront.src}
                alt={IMAGES.storefront.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
