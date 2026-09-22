import type { ReactNode } from "react";
import { Phone, Navigation } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  MAPS_DIRECTIONS_URL,
  PHONE_TEL,
  WHATSAPP_URL,
} from "@/lib/constants";

type Variant = "whatsapp" | "pink" | "pink-outline" | "navy" | "white-outline";

const variants: Record<Variant, string> = {
  whatsapp: "btn-whatsapp",
  pink: "btn-pink",
  "pink-outline": "btn-pink-outline",
  navy: "btn-navy",
  "white-outline":
    "btn border-2 border-white bg-white/10 text-white hover:bg-white hover:text-accent",
};

type CtaButtonProps = {
  href: string;
  variant: Variant;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  external?: boolean;
};

export function CtaButton({
  href,
  variant,
  children,
  icon,
  className = "",
  external,
}: CtaButtonProps) {
  const isExternal = external ?? href.startsWith("http");

  return (
    <a
      href={href}
      className={`${variants[variant]} ${className}`}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {icon}
      {children}
    </a>
  );
}

type LabelProps = {
  label?: string;
  className?: string;
};

export function WhatsAppCta({
  label = "WhatsApp to Book",
  className = "",
}: LabelProps) {
  return (
    <CtaButton
      href={WHATSAPP_URL}
      variant="whatsapp"
      className={className}
      icon={<FaWhatsapp className="h-4 w-4" aria-hidden="true" />}
    >
      {label}
    </CtaButton>
  );
}

export function CallCta({
  label = "Call & Book",
  className = "",
  outline = false,
}: LabelProps & { outline?: boolean }) {
  return (
    <CtaButton
      href={PHONE_TEL}
      variant={outline ? "pink-outline" : "pink"}
      className={className}
      icon={<Phone className="h-4 w-4" aria-hidden="true" />}
    >
      {label}
    </CtaButton>
  );
}

export function DirectionsCta({
  label = "Get Directions",
  className = "",
}: LabelProps) {
  return (
    <CtaButton
      href={MAPS_DIRECTIONS_URL}
      variant="pink-outline"
      className={className}
      icon={<Navigation className="h-4 w-4" aria-hidden="true" />}
    >
      {label}
    </CtaButton>
  );
}
