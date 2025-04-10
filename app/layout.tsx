"use client"
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react";
import NewNavbar from "./components/NewNavBar";
import { usePathname } from "next/navigation";
import NewFooter from "./components/NewFooter";

const NotoSans = localFont({
  src: "./fonts/NotoSansThai.ttf",
  variable: "--font-noto-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const NotoSansJP = localFont({
  src: "./fonts/NotoSansJP.ttf",
  variable: "--font-noto-sansJP",
  weight: "100 200 300 400 500 600 700 800 900",
});
const SarabunRegular = localFont({
  src: "./fonts/Sarabun-Regular.ttf",
  variable: "--font-sarabun-regular",
  weight: "400",
});
const SarabunMedium = localFont({
  src: "./fonts/Sarabun-Medium.ttf",
  variable: "--font-sarabun-medium",
  weight: "500",
});

// export const metadata: Metadata = {
//   title: "Dhanavadh Saito",
//   description: "An arts student who has interest in web development. I’m always eager to explore new opportunities for learning and personal growth, so feel free to reach out to me anytime!",
//   keywords: "Dhanavadh, Saito, Arts, arts chula, aksorn, dhanavadh saito, intern, internship, port, portfolio, ธนวัฒน์, ธนวัฒน์ ซาอิโตะ, ซาอิโตะ, นิสิต, นิสิตอักษร, อักษร, อักษร จุฬา ",
// };



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const header = pathName === "/" ? <NewNavbar /> : <Navbar />;

  return (
    <html lang="en">  
      <title>Dhanavadh Saito</title>    
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="An arts student who has interest in web development. I’m always eager to explore new opportunities for learning and personal growth, so feel free to reach out to me anytime!" />
      <meta name="keywords" content="Dhanavadh, Saito, Arts, arts chula, aksorn, dhanavadh saito, intern, internship, port, portfolio, ธนวัฒน์, ธนวัฒน์ ซาอิโตะ, ซาอิโตะ, นิสิต, นิสิตอักษร, อักษร, อักษร จุฬา " />
      <meta name="author" content="Dhanavadh Saito" />
      <meta name="theme-color" content="#000000" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Dhanavadh Saito" />
      <meta name="application-name" content="Dhanavadh Saito" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />      
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <meta property="og:title" content="Dhanavadh Saito - A UX Designer &amp; Front-end Developer Blog" />
      <meta property="og:description" content="An arts student who has interest in web development. I’m always eager to explore new opportunities for learning and personal growth, so feel free to reach out to me anytime!" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banner-og.png" />
      <meta property="og:url" content="https://beta.dhanav.me/" />
      <body
        className={`${NotoSans.variable} ${NotoSansJP.variable} ${SarabunRegular.variable} ${SarabunMedium.variable} antialiased`}
      >
        {header}
        {children}
        <SpeedInsights />
        <Analytics />
        {/* <Footer /> */}
        <NewFooter />
      </body>
    </html>
  );
}
