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
        background: '#050505',
        black: '#050505',
        "icon": 'rgba(255,255,255,0.0125)',
        "line": 'rgba(255,255,255,0.1)',
        "border-outer": 'rgba(255,255,255,0.1)',
        "border-inner": 'rgba(255,255,255,0.1)',
        "card-gradient-darker": 'rgba(255,255,255,0.025)',
        "card-gradient-lighter": 'rgba(255,255,255,0.05)',
        "text-white": '#f7f8f8',
        "text-gray": 'rgba(247,248,248,0.6)',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      borderRadius: {
        "outer-card": '1.2rem',
        "inner-card": '1rem',
        "card": '1.5rem',
        "icon": '0.55rem',
        "icon-small": '0.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
