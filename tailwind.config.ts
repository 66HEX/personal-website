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
        background: '#000000',
        "icon": 'rgba(255,255,255,0.0125)',
        "line": 'rgba(255,255,255,0.05)',
        "border-outer": 'rgba(255,255,255,0.1)',
        "border-inner": 'rgba(255,255,255,0.075)',
        "card-gradient-darker": 'rgba(255,255,255,0.05)',
        "card-gradient-lighter": 'rgba(255,255,255,0.025)',
        "text-white": '#f7f8f8',
        "text-gray": '#8a8f98',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      borderRadius: {
        "outer-card": '1.5rem',
        "inner-card": '0.75rem',
        "icon": '0.75rem',
        "icon-small": '0.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
