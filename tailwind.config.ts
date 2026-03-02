import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        yellow: { DEFAULT: "#F5C518", dim: "#c9a010" },
        dark:   { DEFAULT: "#0d0d0d", card: "#111111", border: "#1e1e1e" },
      },
      fontFamily: {
        playfair: ["var(--font-playfair)"],
        bebas:    ["var(--font-bebas)"],
        barlow:   ["var(--font-barlow)"],
        condensed:["var(--font-barlow-condensed)"],
      },
      clipPath: {
        btn: "polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
