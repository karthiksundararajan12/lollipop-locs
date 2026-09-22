"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  Armchair,
  Gamepad2,
  HeartHandshake,
  Sparkles,
  Star,
  type LucideIcon,
} from "lucide-react";
import { HERO_TRUST, IMAGES } from "@/lib/constants";
import { CallCta, WhatsAppCta } from "./CtaButton";

const trustIcons: Record<(typeof HERO_TRUST)[number]["icon"], LucideIcon> = {
  HeartHandshake,
  Armchair,
  Gamepad2,
  Sparkles,
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -right-24 top-1/3 z-0 h-64 w-64 rounded-full bg-pastel-lavender/50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-10 z-0 h-56 w-56 rounded-full bg-pastel-peach/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 md:py-16 lg:gap-14">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-4xl font-bold leading-[1.1] text-navy text-balance sm:text-5xl lg:text-[3.35rem]">
            Kids Haircut in Electronic City, Bangalore
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-accent sm:text-2xl">
            A Happier Haircut Experience, Designed Around Kids
          </p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-[17px]">
            Looking for a kids salon near me in Electronic City? Lollipop Locs
            is a premium salon built around little ones — patient stylists,
            themed chairs, and a space where first haircuts feel like an
            adventure, not a battle.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 shadow-card">
            <span className="flex text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-bold text-navy">4.9</span>
            <span className="text-sm text-muted">Loved by parents</span>
          </div>

          <p className="mt-4 font-display text-2xl font-bold text-accent">
            Kids Haircuts from ₹899
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta
              label="WhatsApp to Book"
              className="w-full sm:w-auto"
            />
            <CallCta label="Call & Book" className="w-full sm:w-auto" />
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HERO_TRUST.map((item) => {
              const Icon = trustIcons[item.icon];
              return (
                <li
                  key={item.label}
                  className="flex items-center gap-2 text-xs font-semibold text-navy sm:flex-col sm:items-start sm:gap-1.5 sm:text-center"
                >
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-accent shadow-card sm:mx-auto">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span>{item.label}</span>
                </li>
              );
            })}
          </ul>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="absolute -left-2 top-6 z-10 max-w-[8.5rem] rotate-[-12deg] rounded-full bg-accent px-4 py-2 text-center font-display text-xs font-bold leading-snug text-white shadow-lift sm:-left-6 sm:text-sm"
            aria-hidden="true"
          >
            Small Haircuts Big Smiles
          </p>
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-lift">
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src={IMAGES.hero.src}
                alt={IMAGES.hero.alt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
