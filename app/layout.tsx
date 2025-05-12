import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Jutellane Solutions – Cloud Confidence Delivered',
  description:
    'Secure, Scalable AWS Services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Jutellane Solutions',
    description:
      'Cloud Confidence. Delivered. Explore secure DevSecOps and AWS automation services by Justine Tekang.',
    url: 'https://jutellane-solutions-otbe.vercel.app', // or your custom domain
    siteName: 'Jutellane Solutions',
    images: [
      {
        url: '/aws-banner.png',
        width: 1200,
        height: 630,
        alt: 'Jutellane Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jutellane Solutions',
    description:
      'Explore secure AWS cloud services, DevSecOps pipelines, and automation with Justine Tekang.',
    images: ['/aws-banner.png'],
  },
  metadataBase: new URL('https://jutellane-solutions-otbe.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
