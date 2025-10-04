import type { Metadata } from "next";
import { Space_Grotesk, Literata } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { AnimatedBackground } from "@/components/animated-background";

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
  title: "Astroqua - Ocean Mysteries",
  description:
    "Explore the mysterious connection between deep space and the ocean depths. Discover stories that blur the boundaries between cosmic wonder and aquatic horror.",
  keywords: [
    "ocean mysteries",
    "deep sea exploration",
    "space ocean connection",
    "sci-fi stories",
    "marine biology",
    "astrophysics",
  ],
  authors: [{ name: "Astroqua Team" }],
  creator: "Astroqua",
  publisher: "Astroqua",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://astroqua.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Astroqua - Ocean Mysteries",
    description:
      "Explore the mysterious connection between deep space and the ocean depths. Discover stories that blur the boundaries between cosmic wonder and aquatic horror.",
    url: "https://astroqua.com",
    siteName: "Astroqua",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Astroqua - Ocean Mysteries",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astroqua - Ocean Mysteries",
    description: "Explore the mysterious connection between deep space and the ocean depths.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${literata.variable} antialiased font-body`}>
        <AnimatedBackground />
        <Navbar />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
