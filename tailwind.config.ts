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
        Lausanne50: 'Lausanne50',
        Lausanne100: 'Lausanne100',
        Lausanne150: 'Lausanne150',
        Lausanne200: 'Lausanne200',
        Lausanne250: 'Lausanne250',
        Lausanne300: 'Lausanne300',
        Lausanne350: 'Lausanne350',
        Lausanne400: 'Lausanne400',
        Lausanne450: 'Lausanne450',
        Lausanne500: 'Lausanne500',
        Lausanne550: 'Lausanne550',
        Lausanne600: 'Lausanne600',
        Lausanne650: 'Lausanne650',
        Lausanne700: 'Lausanne700',
        Lausanne750: 'Lausanne750',
        Lausanne800: 'Lausanne800',
        Lausanne850: 'Lausanne850',
        Lausanne900: 'Lausanne900',
        Lausanne950: 'Lausanne950',
        Lausanne1000: 'Lausanne1000',
        Lausanne300Italic: 'Lausanne300Italic',
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
