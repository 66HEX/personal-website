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
        background: '#030303',
        black: '#030303',
        "icon": 'rgba(255,255,255,0.0125)',
        "line": 'rgba(255,255,255,0.075)',
        "border-outer": 'rgba(255,255,255,0.1)',
        "border-inner": 'rgba(255,255,255,0.075)',
        "card-gradient-darker": 'rgba(255,255,255,0.075)',
        "card-gradient-lighter": 'rgba(255,255,255,0.05)',
        "text-white": '#f7f8f8',
        "text-gray": 'rgba(247,248,248,0.6)',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      borderRadius: {
        "outer-card": '1.2rem',
        "inner-card": '0.8rem',
        "card": '1.5rem',
        "icon": '0.55rem',
        "icon-small": '0.5rem',
      },
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
