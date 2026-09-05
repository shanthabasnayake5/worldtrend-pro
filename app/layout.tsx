import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WorldTrend Pro",
    template: "%s | WorldTrend Pro",
  },
  description:
    "Discover what's trending worldwide in technology, AI, business, finance, health, science, travel, entertainment, sports, and more.",
  keywords: [
    "WorldTrend Pro",
    "world trends",
    "latest news",
    "technology",
    "artificial intelligence",
    "business",
    "finance",
    "health",
    "science",
    "travel",
    "entertainment",
    "sports",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}