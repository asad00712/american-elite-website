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
  title: "American Elite Limousine & Taxi — Professional Limo Service in New Jersey",
  description:
    "New Jersey's premier limousine and taxi service. Airport transportation to EWR, JFK, LaGuardia. Corporate travel, party limos, and long distance. Available 24/7. Call (973) 917-4949.",
  keywords: [
    "limousine service NJ",
    "taxi service New Jersey",
    "airport transportation NJ",
    "corporate limo NJ",
    "Parsippany limo",
    "American Elite Limousine",
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
      <body className="min-h-screen overflow-x-hidden xl:max-w-[1600px] mx-auto">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
