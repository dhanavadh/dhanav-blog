import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const NotoSans = localFont({
  src: "./fonts/NotoSansThai.ttf",
  variable: "--font-noto-sans",
  weight: "100 200 300 400 500 600 700 800 900",
});
const IBMPlexSansThaiRegular = localFont({
  src: "./fonts/IBMPlexSansThaiLooped-Regular.ttf",
  variable: "--font-IBM-sans",
  weight: "400",
});
const IBMPlexSansThaiMedium = localFont({
  src: "./fonts/IBMPlexSansThaiLooped-Medium.ttf",
  variable: "--font-IBM-sans-medium",
  weight: "500",
});
const NotoSansJP = localFont({
  src: "./fonts/NotoSansJP.ttf",
  variable: "--font-noto-sansJP",
  weight: "100 200 300 400 500 600 700 800 900",
});
const SarabunRegular = localFont({
  src: "./fonts/Sarabun-Regular.ttf",
  variable: "--font-sarabun-regular",
  weight: "4000",
});
const ZenKurenaido = localFont({
  src: "./fonts/ZenKurenaido.ttf",
  variable: "--font-ZenKurenaido",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dhanavadh Saito",
  description: "An arts student who has interest in web development. Please come and check my profile.",
  keywords: "Dhanavadh, Saito, Arts, arts chula, aksorn, dhanavadh saito, intern, internship, port, portfolio, ธนวัฒน์, ธนวัฒน์ ซาอิโตะ, ซาอิโตะ, นิสิต, นิสิตอักษร, อักษร, อักษร จุฬา ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">      
      <meta property="og:title" content="Dhanavadh Saito - A UX Designer &amp; Front-end Developer Blog" />
      <meta property="og:description" content="An arts student who has interest in web development. Please come and check my profile." />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/banner-og.png" />
      <meta property="og:url" content="https://beta.dhanav.me/" />
      <body
        className={`${NotoSans.variable} ${NotoSansJP.variable} ${ZenKurenaido.variable} ${IBMPlexSansThaiRegular.variable} ${IBMPlexSansThaiMedium.variable} ${SarabunRegular.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
