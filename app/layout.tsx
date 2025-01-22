import "./globals.css";
import type { Metadata } from "next";
import SmoothScrolling from "@/app/components/SmoothScrolling/SmoothScrolling";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import localFont from 'next/font/local'
import { Viewport } from 'next'

export const metadata: Metadata = {
    title: "Hex - Web Developer + Designer",
    description: "Portfolio of HEX, a freelance web developer specializing in modern web technologies. I'm Hex, a digital creator based in Poland, where creativity meets precision to craft modern, functional web experiences. I bring ideas to life with every line of code and design, blending innovation and technology to shape digital journeys that captivate, inspire, and stand the test of time.",
    keywords: "freelance web developer, web development, portfolio, modern websites, responsive design, user experience, digital creator, front-end development, UI/UX designer",
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        title: "Hex - Web Developer + Designer",
        description: "Portfolio of HEX, a freelance web developer specializing in modern web technologies and crafting captivating digital experiences.",
        url: "https://hexthecoder.pl",
        images: [
            {
                url: "https://hexthecoder.pl/images/about-photo.png",
                width: 1200,
                height: 630,
                alt: "Hex - Web Developer Portfolio",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hex - Web Developer + Designer",
        description: "Crafting captivating, modern web experiences using cutting-edge technologies. Check out my portfolio.",
        images: "https://hexthecoder.pl/images/about-photo.png",
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 1,
    userScalable: false
};

const lausanne = localFont({
    src: [
        {
            path: './fonts/TWKLausanne-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-750.woff2',
            weight: '750',
            style: 'normal',
        },
    ],
    variable: '--font-lausanne'
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lausanne.variable}>
      <body className="bg-background">
      <SmoothScrolling>
          <Navbar/>
          <main id="page-transition">
              {children}
              <Footer/>
          </main>
      </SmoothScrolling>
      </body>
    </html>
  );
}
