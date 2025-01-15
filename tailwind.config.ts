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
        "card-outer": 'rgba(255,255,255,0.025)',
        "card-inner": 'rgba(255,255,255,0.015)',
        "card-border": 'rgba(255,255,255,0.05)',
        "text-white": '#dcdcdc',
        "text-gray": '#808080',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      borderRadius: {
        "outer-card": '1rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
