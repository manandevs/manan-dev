import type { Metadata } from "next";
import { Inter, Newsreader, Permanent_Marker } from "next/font/google";
import "./globals.css";
import CustomCursorWithParticles from "@/components/ui/SparklingCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniel Sun | Digital Designer",
  description: "Portfolio of Daniel Sun - Interactive Designer & Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${newsreader.variable} ${permanentMarker.variable} font-sans antialiased bg-white selection:bg-yellow-300 selection:text-black`}
      >
        <CustomCursorWithParticles />
        {children}
      </body>
    </html>
  );
}