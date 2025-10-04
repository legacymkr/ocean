import type { Metadata } from "next";
import { Space_Grotesk, Literata } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Astroqua - Deep Space Ocean Mysteries",
  description:
    "Explore the mysterious depths where space meets ocean in our immersive storytelling platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${literata.variable} antialiased font-body`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
