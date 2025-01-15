import "./globals.css";
import type { Metadata } from "next";
import SmoothScrolling from "@/app/components/SmoothScrolling/SmoothScrolling";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";

import localFont from 'next/font/local'

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

const lausanne = localFont({
    src: [
        {
            path: './fonts/TWKLausanne-50.woff2',
            weight: '50',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-50Italic.woff2',
            weight: '50',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-100.woff2',
            weight: '100',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-100Italic.woff2',
            weight: '100',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-150.woff2',
            weight: '150',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-150Italic.woff2',
            weight: '150',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-200.woff2',
            weight: '200',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-200Italic.woff2',
            weight: '200',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-250.woff2',
            weight: '250',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-250Italic.woff2',
            weight: '250',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-300.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-300Italic.woff2',
            weight: '300',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-350.woff2',
            weight: '350',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-350Italic.woff2',
            weight: '350',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-400Italic.woff2',
            weight: '400',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-450.woff2',
            weight: '450',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-450Italic.woff2',
            weight: '450',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-500.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-500Italic.woff2',
            weight: '500',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-550.woff2',
            weight: '550',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-550Italic.woff2',
            weight: '550',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-600.woff2',
            weight: '600',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-600Italic.woff2',
            weight: '600',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-650.woff2',
            weight: '650',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-650Italic.woff2',
            weight: '650',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-700.woff2',
            weight: '700',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-700Italic.woff2',
            weight: '700',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-750.woff2',
            weight: '750',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-750Italic.woff2',
            weight: '750',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-800.woff2',
            weight: '800',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-800Italic.woff2',
            weight: '800',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-850.woff2',
            weight: '850',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-850Italic.woff2',
            weight: '850',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-900.woff2',
            weight: '900',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-900Italic.woff2',
            weight: '900',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-950.woff2',
            weight: '950',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-950Italic.woff2',
            weight: '950',
            style: 'italic',
        },
        {
            path: './fonts/TWKLausanne-1000.woff2',
            weight: '1000',
            style: 'normal',
        },
        {
            path: './fonts/TWKLausanne-1000Italic.woff2',
            weight: '1000',
            style: 'italic',
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
          </main>
          <Footer/>
      </SmoothScrolling>
      </body>
    </html>
  );
}
