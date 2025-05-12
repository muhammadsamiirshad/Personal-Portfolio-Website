import React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#030712",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Futuristic Portfolio | Alex Morgan",
  description: "Personal portfolio of Alex Morgan - Full Stack Developer, Cybersecurity Analyst, and Penetration Tester",
  keywords: ["developer", "full stack", "cybersecurity", "portfolio", "react", "next.js"],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Alex Morgan | Full Stack Developer & Cybersecurity Specialist",
    description: "Passionate Full Stack Developer and Cybersecurity Specialist with expertise in building secure, scalable web applications",
    url: "https://alexmorgan.dev",
    siteName: "Alex Morgan Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#030712" />
        <meta name="color-scheme" content="dark" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-darker text-white`}
      >
        {children}
      </body>
    </html>
  );
}
