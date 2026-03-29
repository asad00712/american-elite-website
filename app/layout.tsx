import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Limousine.com — Luxury Ground Travel. Any Place. Any Time. Anywhere.",
  description:
    "The world's premier luxury ground transportation marketplace. Chauffeured sedans, SUVs, vans, and buses across 600+ cities in 60+ countries. All-inclusive pricing, vetted drivers, 24/7 dispatch.",
  keywords: [
    "limousine service",
    "chauffeured travel",
    "airport transfer",
    "corporate travel",
    "luxury car service",
    "limousine.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
