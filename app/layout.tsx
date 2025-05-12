import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jutellane Solutions | Cloud Confidence. Delivered.',
  description:
    'Secure, scalable AWS services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert. Book a free assessment today.',
  keywords: [
    'AWS DevOps',
    'Cloud Engineer',
    'DevSecOps',
    'Infrastructure as Code',
    'Cloud Automation',
    'Justine Tekang',
    'Jutellane Solutions',
    'CI/CD',
    'Kubernetes',
  ],
  authors: [
    { name: 'Justine Tekang', url: 'https://jutellane-solutions.vercel.app' },
  ],
  openGraph: {
    title: 'Jutellane Solutions | Cloud Confidence. Delivered.',
    description:
      'Cloud and DevSecOps services powered by AWS. Start your secure cloud journey with Justine Tekang today.',
    url: 'https://jutellane-solutions.vercel.app',
    siteName: 'Jutellane Solutions',
    images: [
      {
        url: 'https://jutellane-solutions.vercel.app/aws-banner.png',
        width: 1200,
        height: 630,
        alt: 'Jutellane Solutions Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jutellane Solutions | Cloud Confidence. Delivered.',
    description:
      'Secure, scalable AWS services with Justine Tekang — Certified DevSecOps & Cloud Automation Expert.',
    images: ['https://jutellane-solutions.vercel.app/aws-banner.png'],
    creator: '@justinelongla', // update if you have a Twitter handle
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
