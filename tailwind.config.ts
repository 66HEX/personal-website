import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        "text-white": '#FFFFFF',
        "text-gray": '#a6a6a6',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.1)",
          "0 0px 65px rgba(255, 255,255, 0.05)"
        ]
      },
      borderRadius: {
        "outer-card": '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
