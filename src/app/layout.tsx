import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fulton Market AI Studio | Chicago Full-Stack & AI Development",
  description:
    "8x hackathon-winning developer helping startups and enterprises ship production-ready software. Full-stack, AI, and Web3 development based in Chicago's Fulton Market.",
  keywords:
    "Chicago developer, full-stack development, AI integration, Web3 development, React, Next.js, smart contracts, Fulton Market",
  openGraph: {
    title: "Fulton Market AI Studio",
    description: "Ship software that actually works.",
    url: "https://fultonmarketaistudio.com",
    siteName: "Fulton Market AI Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fulton Market AI Studio",
    description: "Ship software that actually works.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-navy-900 text-steel-100`}
      >
        {children}
      </body>
    </html>
  );
}
