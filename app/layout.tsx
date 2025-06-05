import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jutellane Solutions | Cloud Confidence. Delivered.",
  description:
    "Certified DevSecOps and Cloud Automation for startups and growing teams.",
  openGraph: {
    title: "Jutellane Solutions | Cloud Confidence. Delivered.",
    description:
      "Secure, scalable AWS services by Justine Tekang — Certified DevSecOps Expert.",
    url: "https://jutellane-solutions.vercel.app",
    siteName: "Jutellane Solutions",
    images: [
      {
        url: "/aws-banner.png",
        width: 1200,
        height: 630,
        alt: "Jutellane Solutions Banner",
      },
    ],
    type: "website",
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
        <Navbar />
        {children}
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  );
}
