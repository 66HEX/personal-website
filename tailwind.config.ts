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
        black: '#000',
        white: '#FFFFFF',
        textGray: '#8C8C8C',
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
        custom: '1rem',

      },
    },
  },
  plugins: [],
} satisfies Config;
