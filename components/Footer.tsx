import { Lollipop } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { NAV_LINKS, SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="px-4 pb-28 pt-10 sm:px-6 md:pb-14">
      <div className="mx-auto max-w-7xl rounded-3xl bg-white px-6 py-10 shadow-card sm:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent text-white">
                <Lollipop className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-bold text-navy">
                  Lollipop Locs
                </span>
                <span className="text-[11px] font-medium text-muted">
                  Premium Kids & Tweens Salon
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              A happier haircut experience in Electronic City, Bengaluru —
              designed around kids, thought through for parents.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Quick links
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-navy transition hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Follow along
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lollipop Locs on Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                <FaInstagram className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lollipop Locs on Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                <FaFacebookF className="h-4 w-4" />
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lollipop Locs on YouTube"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blush text-accent transition hover:-translate-y-0.5 hover:bg-accent hover:text-white"
              >
                <FaYoutube className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 font-display text-lg font-bold text-accent">
              A Happier Brighter Tomorrow
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-blush pt-6 text-center text-xs text-muted md:text-left">
          © {new Date().getFullYear()} Lollipop Locs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
