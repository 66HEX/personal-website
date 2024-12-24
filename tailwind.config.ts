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
        black: '#131313',
        white: '#E3E1DE',
        accent: '#FF4C24',
      },
      fontFamily: {
        sans: ['var(--font-lausanne)']
      },
      fontSize: {
        fluid: ['15vw', '15vw'],
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },
      borderRadius: {
        custom: '2rem',

      },
    },
  },
  plugins: [],
} satisfies Config;
