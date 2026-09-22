import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_TEL, WHATSAPP_URL } from "@/lib/constants";

export function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 md:hidden">
      <div className="grid grid-cols-2 bg-navy pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(30,42,74,0.18)]">
        <a
          href={PHONE_TEL}
          className="inline-flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call & Book
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-whatsapp py-3.5 text-sm font-semibold text-white"
        >
          <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
