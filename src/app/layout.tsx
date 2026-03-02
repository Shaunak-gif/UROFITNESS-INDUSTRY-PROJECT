import type { Metadata } from "next";
import { Playfair_Display, Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"], variable: "--font-playfair",
  weight: ["700", "900"], style: ["normal", "italic"],
});
const bebas = Bebas_Neue({
  subsets: ["latin"], variable: "--font-bebas", weight: "400",
});
const barlow = Barlow({
  subsets: ["latin"], variable: "--font-barlow", weight: ["300","400","500"],
});
const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"], variable: "--font-barlow-condensed", weight: ["400","600","700","900"],
});

export const metadata: Metadata = {
  title:       "URO FITNESS — Built Different",
  description: "Premium fitness training in Pune. Elite coaches, world-class equipment, and transformative results.",
  keywords:    ["gym", "fitness", "Pune", "Pimpri", "personal training", "CrossFit"],
  openGraph: {
    title:       "URO FITNESS — Built Different",
    description: "Premium fitness training in Pune.",
    type:        "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${bebas.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
