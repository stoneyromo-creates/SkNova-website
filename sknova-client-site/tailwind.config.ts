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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-28px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(-14px)" },
          "50%": { transform: "translateY(14px)" },
        },
        "glow-breathe": {
          "0%, 100%": { opacity: "0.07" },
          "50%": { opacity: "0.16" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.65s ease both",
        "fade-in": "fade-in 0.65s ease both",
        float: "float 10s ease-in-out infinite",
        "float-reverse": "float-reverse 12s ease-in-out infinite",
        "glow-breathe": "glow-breathe 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
