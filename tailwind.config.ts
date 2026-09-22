import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FFF3F7",
        accent: {
          DEFAULT: "#EC4899",
          dark: "#DB2777",
        },
        navy: "#1E2A4A",
        muted: "#4B5563",
        whatsapp: "#25D366",
        pastel: {
          blue: "#D6EEFF",
          peach: "#FFE0C8",
          lavender: "#E6DEFF",
          mint: "#D1F5E8",
          lemon: "#FFF1C4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(236, 72, 153, 0.28)",
        card: "0 12px 32px -16px rgba(30, 42, 74, 0.16)",
        lift: "0 20px 44px -18px rgba(219, 39, 119, 0.38)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
