import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#0B0B0C",
          section: "#111113",
          card: "#161618",
          gold: "#C9A24A",
          "gold-light": "#E5C76B",
          "gold-dark": "#B8963D",
          text: "#F5F5F5",
          muted: "#A1A1AA",
          border: "#2A2A2E",
          red: "#FF3B3B",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease both",
        "fade-in": "fade-in 0.6s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
