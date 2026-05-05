import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// perubahan font, sebelumnya menggunakan Inter, sekarang menggunakan Barlow Condensed
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// penambahan font DM Sans
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

// metadata untuk SEO dan informasi dasar situs
export const metadata: Metadata = {
  title: "DigiMount Rajabasa",
  description: "Manage expeditions, track climber safety, and coordinate complex mountain operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(barlowCondensed.variable, dmSans.variable, "font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
