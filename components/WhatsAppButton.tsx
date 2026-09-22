import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

type WhatsAppButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "light" | "outline";
};

const variants = {
  primary:
    "bg-whatsapp text-white shadow-soft hover:brightness-110 hover:-translate-y-0.5",
  light:
    "bg-white text-charcoal shadow-soft hover:bg-blush hover:-translate-y-0.5",
  outline:
    "border border-charcoal/15 bg-white/70 text-charcoal backdrop-blur hover:border-lollipop/40 hover:bg-white hover:-translate-y-0.5",
};

export function WhatsAppButton({
  label = "Book on WhatsApp",
  className = "",
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-tight transition duration-300 ${variants[variant]} ${className}`}
    >
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {label}
    </a>
  );
}
