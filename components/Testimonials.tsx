import { Star } from "lucide-react";
import { GOOGLE_REVIEWS_URL, TESTIMONIALS } from "@/lib/constants";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-24 px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
            Loved by Parents
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-card">
            <span className="flex text-amber-400" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-bold text-navy">4.9 on Google</span>
          </div>
        </Reveal>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} as="li">
              <blockquote className="flex h-full flex-col rounded-3xl bg-white p-6 shadow-card">
                <span className="flex text-amber-400" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </span>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  “{item.quote}”
                </p>
                <footer className="mt-5 font-display text-base font-bold text-navy">
                  {item.name}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.12} className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink-outline"
          >
            View All Google Reviews
          </a>
        </Reveal>
      </div>
    </section>
  );
}
