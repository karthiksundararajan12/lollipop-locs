import type { Metadata } from "next";
import { Fredoka, Inter } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lollipop Locs | Premium Kids & Tweens Salon, Electronic City",
  description:
    "Bengaluru’s favorite salon for little ones. Gentle haircuts, first-cut ceremonies, hair spa, and home mundan in Electronic City Phase 1.",
  metadataBase: new URL("https://lollipoplocs.example"),
  openGraph: {
    title: "Lollipop Locs — Kids & Tweens Hair Salon & Spa",
    description:
      "A calm, candy-colored studio in Electronic City where first haircuts feel like a celebration.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream font-body text-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:shadow-soft"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
