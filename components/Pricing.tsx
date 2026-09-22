import Image from "next/image";
import { IMAGES, PRICING } from "@/lib/constants";
import { CallCta, WhatsAppCta } from "./CtaButton";
import { Reveal } from "./Reveal";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
        <Reveal>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Simple Haircut Pricing
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {PRICING.kids.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-3xl bg-white p-6 shadow-card"
              >
                <h3 className="font-display text-2xl font-bold text-accent">
                  {card.title}
                </h3>
                <ul className="mt-5 space-y-3">
                  {card.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-baseline justify-between gap-3 border-b border-blush pb-3 last:border-0"
                    >
                      <span className="text-sm font-medium text-muted">
                        {item.name}
                      </span>
                      <span className="font-display text-xl font-bold text-navy">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-2">
                  <WhatsAppCta className="w-full" />
                  <CallCta className="w-full" />
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Parent + Child Combos
          </h2>
          <article className="mt-6 overflow-hidden rounded-3xl bg-white shadow-card">
            <div className="relative h-44 sm:h-52">
              <Image
                src={IMAGES.combo.src}
                alt={IMAGES.combo.alt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {PRICING.combos.map((combo) => (
                  <li
                    key={combo.name}
                    className="flex items-baseline justify-between gap-3 border-b border-dashed border-accent/20 pb-3 last:border-0"
                  >
                    <span className="font-medium text-navy">{combo.name}</span>
                    <span className="font-display text-lg font-bold text-accent">
                      {combo.price}
                    </span>
                  </li>
                ))}
              </ul>
              <WhatsAppCta
                label="Book Parent + Child"
                className="mt-6 w-full"
              />
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
