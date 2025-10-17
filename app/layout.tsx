import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Topbar from "@/components/Topbar";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

// ✅ Google Font
const inter = Inter({ subsets: ["latin"] });

// ✅ Full metadata including favicon, OG, manifest
export const metadata: Metadata = {
  metadataBase: new URL("https://jutellane.com"),
  title: "Jutellane Solutions | Cloud Confidence. Delivered.",
  description:
    "Certified DevSecOps and Cloud Automation for startups and growing teams.",
  icons: {
    icon: "/favicon.ico",                  // Browser tab favicon
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",        // iOS/Apple devices
  },
  manifest: "/manifest.json",              // For PWA installs
  openGraph: {
    title: "Jutellane Solutions",
    description: "Secure, scalable DevSecOps & Cloud services by Justine Tekang.",
    url: "https://jutellane.com",
    siteName: "Jutellane Solutions",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Jutellane Solutions Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jutellane Solutions",
    description:
      "Secure, scalable DevSecOps & Cloud services by Justine Tekang.",
    images: ["/og.png"],
    creator: "@justinelongla",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <HeroSection />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
