import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import Script from "next/script";

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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
