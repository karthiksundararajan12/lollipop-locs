"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lollipop, Menu, Phone, Navigation, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MAPS_DIRECTIONS_URL,
  NAV_LINKS,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-blush/90 backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-white shadow-soft">
            <Lollipop className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-navy sm:text-xl">
              Lollipop Locs
            </span>
            <span className="truncate text-[10px] font-medium text-muted sm:text-[11px]">
              Premium Kids & Tweens Salon
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-3.5 lg:flex xl:gap-5">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="whitespace-nowrap text-[13px] font-medium text-muted transition hover:text-accent xl:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <a href={PHONE_TEL} className="btn-pink-outline px-3.5 py-2 text-xs">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            Call
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp px-3.5 py-2 text-xs"
          >
            <FaWhatsapp className="h-3.5 w-3.5" aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href={MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pink-outline px-3.5 py-2 text-xs"
          >
            <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
            Get Directions
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 bg-white text-navy shadow-card lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-accent/10 bg-blush lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-3 py-3 text-base font-medium text-navy hover:bg-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-2 px-4 pb-4 sm:grid-cols-3">
              <a href={PHONE_TEL} className="btn-pink-outline w-full">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pink-outline w-full"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
