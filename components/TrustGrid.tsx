"use client";

import {
  Armchair,
  Gamepad2,
  HeartHandshake,
  Puzzle,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { TRUST_ITEMS } from "@/lib/constants";
import { Reveal } from "./Reveal";

const icons: Record<(typeof TRUST_ITEMS)[number]["icon"], LucideIcon> = {
  HeartHandshake,
  Armchair,
  Puzzle,
  Gamepad2,
  Sparkles,
};

const tones: Record<(typeof TRUST_ITEMS)[number]["tone"], string> = {
  blue: "bg-pastel-blue text-sky-600",
  peach: "bg-pastel-peach text-orange-500",
  lavender: "bg-pastel-lavender text-violet-500",
  mint: "bg-pastel-mint text-emerald-600",
  lemon: "bg-pastel-lemon text-accent-dark",
};

export function TrustGrid() {
  return (
    <section id="why-us" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="text-center font-display text-3xl font-bold text-navy text-balance sm:text-4xl">
            Made for Kids. Thought Through for Parents.
          </h2>
        </Reveal>
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {TRUST_ITEMS.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={index * 0.06} as="li">
                <article className="h-full rounded-3xl bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft">
                  <span
                    className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${tones[item.tone]}`}
                  >
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
