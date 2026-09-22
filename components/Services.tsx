"use client";

import { Baby, Home, Scissors, Sparkles } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { Reveal } from "./Reveal";

const icons = {
  Home,
  Scissors,
  Sparkles,
  Baby,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-candy">
            Services
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Thoughtful treatments, tiny clients
          </h2>
          <p className="mt-3 text-charcoal/65">
            From first cuts to after-school trims — priced clearly, timed kindly.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.name} delay={index * 0.08} as="article">
                <div className="group h-full rounded-3xl border border-white bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-mist text-lollipop transition group-hover:bg-lollipop group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-charcoal">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/60">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center justify-between border-t border-charcoal/8 pt-4 text-sm">
                    <span className="font-semibold text-candy">{service.price}</span>
                    <span className="text-charcoal/50">{service.duration}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
