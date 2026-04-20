import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-cormorant)", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        gold: "#C9A84C",
        "gold-light": "#E8C97A",
        "gold-dark": "#A07830",
        charcoal: "#0F0F0F",
        "charcoal-2": "#161616",
        "charcoal-3": "#1E1E1E",
        "charcoal-4": "#2A2A2A",
        offwhite: "#F5F0E8",
        muted: "#888880",
      },
    },
  },
} satisfies Config;

export default config;
