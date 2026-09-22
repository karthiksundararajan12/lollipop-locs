import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";

export function CTA() {
  return (
    <section className="px-4 pb-4 sm:px-6">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient px-6 py-12 text-center shadow-lift sm:px-10 md:py-16">
        <h2 className="font-display text-3xl font-semibold text-white text-balance sm:text-4xl md:text-5xl">
          Ready to book your little one&apos;s next haircut?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-white/85 sm:text-base">
          Message us on WhatsApp — we&apos;ll find a calm slot that works for
          your family, in-salon or at home.
        </p>
        <div className="mt-8">
          <WhatsAppButton variant="light" className="px-6 py-3.5" />
        </div>
      </Reveal>
    </section>
  );
}
