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
        black: '#0A0A0A',
        white: '#FFFFFF',
        accent: '#FF4C24',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.2)",
          "0 0px 65px rgba(255, 255,255, 0.1)"
        ]
      },
      borderRadius: {
        custom: '2rem',

      },
    },
  },
  plugins: [],
} satisfies Config;
