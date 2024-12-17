import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const ZenKurenaido = localFont({
  src: "./fonts/ZenKurenaido.ttf",
  variable: "--font-ZenKurenaido",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Dhanavadh Saito",
  description: "An arts student who has interest in web development. Please come and check my profile.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${NotoSans.variable} ${NotoSansJP.variable} ${ZenKurenaido.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
