import "./globals.css";
import SmoothScrolling from "@/app/components/SmoothScrolling/SmoothScrolling";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black">
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
