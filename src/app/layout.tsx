import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sketchs Store | Elevate Your Creative Vision",
  description: "The ultimate platform for modern creators to build, share, and scale their artistic output with precision and elegance.",
  keywords: ["creative", "design", "store", "sketchs", "platform", "artists"],
  authors: [{ name: "Sketchs" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
