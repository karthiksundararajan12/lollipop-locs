import { HeartHandshake, Home, ShieldCheck, Sparkles } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import { Reveal } from "./Reveal";

const icons = {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Home,
};

export function WhyUs() {
  return (
    <section className="bg-mist/70 px-4 py-16 sm:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lollipop">
            Why parents love us
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Premium care, kid-first manners
          </h2>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          {FEATURES.map((feature, index) => {
            const Icon = icons[feature.icon];
            return (
              <Reveal key={feature.title} delay={index * 0.08} as="article">
                <div className="flex h-full gap-4 rounded-3xl bg-white/90 p-6 shadow-card sm:p-7">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blush text-candy">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-charcoal">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                      {feature.description}
                    </p>
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
