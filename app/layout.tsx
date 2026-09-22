import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lollipop Locs | Kids Haircut in Electronic City, Bangalore",
  description:
    "A happier haircut experience, designed around kids. Premium kids & tweens salon in Electronic City, Bengaluru — patient stylists, themed chairs, and haircuts from ₹899.",
  metadataBase: new URL("https://lollipoplocs.example"),
  openGraph: {
    title: "Lollipop Locs — Premium Kids & Tweens Salon, Electronic City",
    description:
      "Kids haircuts from ₹899. Themed chairs, a play area, and stylists who never rush. Book on WhatsApp.",
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
    <html lang="en" className={`${baloo.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-blush font-body text-navy antialiased">
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
