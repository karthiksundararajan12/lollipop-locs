import { Instagram, MessageCircle } from "lucide-react";
import {
  ADDRESS,
  INSTAGRAM_URL,
  NAV_LINKS,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 border-t border-charcoal/8 pt-12 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-semibold">🍭 Lollipop Locs</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-charcoal/60">
            A premium kids & tweens hair salon and spa in Electronic City,
            Bengaluru.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/45">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-charcoal/70 transition hover:text-lollipop"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/45">
            Visit
          </p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-charcoal/70">
            {ADDRESS.full}
          </address>
          <div className="mt-5 flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lollipop Locs on Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-charcoal shadow-card transition hover:text-candy"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white shadow-card transition hover:brightness-110"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-center text-xs text-charcoal/40 md:text-left">
        © {new Date().getFullYear()} Lollipop Locs. All rights reserved.
      </p>
    </footer>
  );
}
