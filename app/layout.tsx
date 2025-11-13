import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";
import { StructuredData, organizationSchema, websiteSchema } from "@/components/seo/StructuredData";

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteUrl = 'https://learn.livmo.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Learn Livmo - Complete Exit Readiness Academy for Business Owners",
    template: "%s | Learn Livmo"
  },
  description: "Master business exit planning with comprehensive guides on M&A process, SaaS valuation, financial reporting, legal due diligence, and operational maturity. Free resources for business owners exiting now or building value for later.",
  keywords: [
    "business exit planning",
    "M&A process",
    "business valuation",
    "SaaS metrics",
    "exit readiness",
    "sell my business",
    "business sellability",
    "financial due diligence",
    "legal due diligence",
    "operational maturity",
    "business acquisition",
    "exit strategy",
    "company valuation",
    "business sale preparation"
  ],
  authors: [{ name: "Livmo" }],
  creator: "Livmo",
  publisher: "Livmo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Learn Livmo',
    title: 'Learn Livmo - Complete Exit Readiness Academy',
    description: 'Interactive learning platform for business owners preparing for exit. Master M&A, valuation, financial reporting, and more.',
    images: [
      {
        url: `${siteUrl}/universal-assets/images/livmo-logo-light-bg.png`,
        width: 1200,
        height: 630,
        alt: 'Livmo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Livmo - Complete Exit Readiness Academy',
    description: 'Master business exit planning with comprehensive guides and tools.',
    images: [`${siteUrl}/universal-assets/images/livmo-logo-light-bg.png`],
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [
      { url: '/universal-assets/accents/19.png', sizes: '32x32', type: 'image/png' },
      { url: '/universal-assets/accents/19.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/universal-assets/accents/19.png',
    shortcut: '/universal-assets/accents/19.png',
  },
  verification: {
    google: 'your-google-verification-code', // User should add their actual code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable}`}>
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

