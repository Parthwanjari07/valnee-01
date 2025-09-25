import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Script from "next/script";
import type { Viewport } from "next";
import DisableZoom from "@/components/DisableZoom";

const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff2",
  variable: "--font-cal-sans",
});
const sfPro = localFont({
  src: "../fonts/SF-Pro-Display-Regular.woff2",
  variable: "--font-sf-pro",
});

export const metadata: Metadata = {
  title: "Valnee Solutions",
  description: "The best tech solutions for your needs",
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Umami Analytics */}
      <Script
        src="https://cloud.umami.is/script.js"
        data-website-id="663753ac-dc44-4cd9-81d6-5b2a2b691b40"
      />
      <body
        className={`${calSans.variable} ${sfPro.variable} font-sans antialiased overflow-x-hidden bg-[#00091A]`}
      >
        {/* <DisableZoom /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
