"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Lollipop, Scissors, Star } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const floaters = [
  {
    icon: Star,
    className: "left-3 top-6 bg-sunny text-charcoal sm:-left-4 sm:top-8",
    delay: 0,
  },
  {
    icon: Scissors,
    className: "right-4 top-10 bg-candy text-white sm:-right-3",
    delay: 0.4,
  },
  {
    icon: Lollipop,
    className: "bottom-8 left-6 bg-lollipop text-white sm:-left-2",
    delay: 0.8,
  },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-hero-wash">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 md:py-20 lg:gap-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lollipop shadow-card">
            Electronic City · Kids & Tweens
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.1] text-charcoal text-balance sm:text-5xl lg:text-6xl">
            Bengaluru&apos;s Favorite Salon for Little Ones
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-charcoal/70 sm:text-lg">
            A calm, candy-colored studio where first haircuts feel like a
            celebration — and everyday trims stay fuss-free, hygienic, and a
            little bit magical.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton className="w-full sm:w-auto" />
            <a
              href="#services"
              className="inline-flex w-full items-center justify-center rounded-full border border-charcoal/12 bg-white/70 px-5 py-3 text-sm font-semibold text-charcoal backdrop-blur transition hover:-translate-y-0.5 hover:border-lollipop/30 hover:bg-white sm:w-auto"
            >
              View Services
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-none"
          initial={reduceMotion ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative overflow-hidden rounded-[2rem] bg-blush shadow-lift sm:rounded-[2.4rem]">
            <div className="relative aspect-[4/5] sm:aspect-[5/6]">
              <Image
                src="https://images.unsplash.com/photo-1517832207067-4db24a2ae47c?auto=format&fit=crop&w=1200&q=80"
                alt="Happy child laughing after a gentle haircut at Lollipop Locs"
                fill
                priority
                sizes="(max-width: 768px) 90vw, 480px"
                className="object-cover object-top"
              />
            </div>
          </div>

          {floaters.map(({ icon: Icon, className, delay }) => (
            <motion.span
              key={className}
              className={`absolute z-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl shadow-soft ${className}`}
              aria-hidden="true"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -8, 0] }
              }
              transition={{
                duration: 4.2,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon className="h-5 w-5" />
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
