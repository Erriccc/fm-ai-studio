import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fulton Market AI Studio | Chicago Full-Stack & AI Development",
  description:
    "Award-winning developer helping startups and enterprises ship production-ready software. Full-stack, AI, and business automation based in Chicago's Fulton Market.",
  keywords:
    "Chicago developer, full-stack development, AI integration, business automation, React, Next.js, Meta Business SDK, Fulton Market",
  openGraph: {
    title: "Fulton Market AI Studio",
    description: "Automate your business. Scale without limits.",
    url: "https://fultonmarketaistudio.com",
    siteName: "Fulton Market AI Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fulton Market AI Studio",
    description: "Automate your business. Scale without limits.",
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
        className={`${inter.variable} antialiased bg-navy-900 text-steel-100`}
      >
        {children}
      </body>
    </html>
  );
}
