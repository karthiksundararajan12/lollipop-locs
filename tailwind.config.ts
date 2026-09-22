import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        candy: "#FF6FA5",
        lollipop: "#8B5CF6",
        sunny: "#FFD166",
        charcoal: "#2C2433",
        cream: "#FFF7F4",
        blush: "#FFE8F0",
        mist: "#F4EEFF",
        whatsapp: "#1FBE5A",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px -16px rgba(139, 92, 246, 0.22)",
        card: "0 8px 28px -14px rgba(44, 36, 51, 0.16)",
        lift: "0 22px 50px -18px rgba(255, 111, 165, 0.35)",
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(135deg, #FF6FA5 0%, #8B5CF6 52%, #FFD166 130%)",
        "hero-wash":
          "radial-gradient(ellipse 80% 60% at 10% 0%, rgba(255,111,165,0.28), transparent 55%), radial-gradient(ellipse 70% 50% at 95% 10%, rgba(139,92,246,0.22), transparent 50%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(255,209,102,0.2), transparent 50%)",
      },
    },
  },
  plugins: [],
};

export default config;
