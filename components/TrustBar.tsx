import { Clock, Sparkles, Star, Users } from "lucide-react";
import { STATS } from "@/lib/constants";
import { Reveal } from "./Reveal";

const icons = {
  Star,
  Users,
  Sparkles,
  Clock,
};

export function TrustBar() {
  return (
    <section aria-label="Salon highlights" className="px-4 sm:px-6">
      <Reveal className="mx-auto grid max-w-6xl grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {STATS.map((stat) => {
          const Icon = icons[stat.icon];
          return (
            <article
              key={stat.label}
              className="rounded-2xl border border-white bg-white/80 p-4 shadow-card sm:p-5"
            >
              <Icon
                className="mb-3 h-5 w-5 text-candy"
                aria-hidden="true"
                fill={stat.icon === "Star" ? "currentColor" : "none"}
              />
              <p className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-charcoal/55 sm:text-sm">
                {stat.label}
              </p>
            </article>
          );
        })}
      </Reveal>
    </section>
  );
}
