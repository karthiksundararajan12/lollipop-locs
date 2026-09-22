import { Clock, MapPin, Navigation } from "lucide-react";
import { ADDRESS, HOURS, MAPS_DIRECTIONS_URL, MAPS_EMBED_SRC } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="location" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-candy">
            Location & hours
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Find us in Electronic City
          </h2>
          <p className="mt-3 max-w-md text-charcoal/65">
            A quiet, easy-to-reach studio in Phase 1 — open late so after-school
            and weekend visits stay simple.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex gap-3 rounded-2xl bg-white p-4 shadow-card">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lollipop" aria-hidden="true" />
              <address className="not-italic">
                <p className="font-semibold text-charcoal">{ADDRESS.line1}</p>
                <p className="text-sm text-charcoal/60">{ADDRESS.line2}</p>
              </address>
            </div>
            <div className="flex gap-3 rounded-2xl bg-white p-4 shadow-card">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-candy" aria-hidden="true" />
              <div>
                <p className="font-semibold text-charcoal">Hours</p>
                <p className="text-sm text-charcoal/60">{HOURS}</p>
              </div>
            </div>
          </div>

          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-sm font-semibold text-cream transition hover:-translate-y-0.5 hover:bg-lollipop"
          >
            <Navigation className="h-4 w-4" aria-hidden="true" />
            Get Directions
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="overflow-hidden rounded-3xl bg-blush shadow-soft">
            <iframe
              title="Map showing Lollipop Locs in Electronic City Phase 1, Bengaluru"
              src={MAPS_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 md:h-[420px]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
