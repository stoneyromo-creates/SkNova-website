import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKNova Web Design | Premium Websites That Convert",
  description:
    "Dallas-based web design studio building high-performance, conversion-focused websites for small businesses and entrepreneurs. Get a stunning, mobile-first website that actually grows your business.",
  keywords: ["web design", "Dallas", "small business website", "landing page", "SKNova"],
  openGraph: {
    title: "SKNova Web Design | Premium Websites That Convert",
    description:
      "Dallas-based web design studio building high-performance, conversion-focused websites for small businesses.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable} scroll-smooth`}>
      <body className="bg-brand-surface font-inter antialiased">{children}</body>
    </html>
  );
}
