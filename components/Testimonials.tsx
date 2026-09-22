"use client";

import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="scroll-mt-24 bg-white/50 px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lollipop">
            Reviews
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            Loved by little ones — and their people
          </h2>
        </Reveal>

        <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {TESTIMONIALS.map((review, index) => (
            <Reveal
              key={review.name}
              delay={index * 0.08}
              as="article"
              className="min-w-[78%] snap-center sm:min-w-0"
            >
              <blockquote className="flex h-full flex-col rounded-3xl border border-charcoal/5 bg-cream p-6 shadow-card">
                <div className="mb-4 flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
                  {Array.from({ length: review.rating }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-sunny text-sunny"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-relaxed text-charcoal/80">
                  “{review.quote}”
                </p>
                <footer className="mt-6">
                  <p className="font-display text-base font-semibold text-charcoal">
                    {review.name}
                  </p>
                  <p className="text-xs text-charcoal/50">{review.detail}</p>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
