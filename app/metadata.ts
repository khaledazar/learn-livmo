import type { Metadata } from 'next';

const siteUrl = 'https://learn.livmo.com';

export const homeMetadata: Metadata = {
  title: 'Learn Livmo - Complete Exit Readiness Academy | Business Exit Planning',
  description: 'Free comprehensive training for business owners planning an exit. Master M&A process, SaaS valuation, financial reporting, legal due diligence, and operational maturity. Whether exiting now or building value for later - start your journey today.',
  keywords: [
    'business exit planning',
    'sell my business',
    'M&A process guide',
    'SaaS valuation calculator',
    'business valuation',
    'exit readiness',
    'company sellability',
    'exit strategy',
    'business sale preparation',
    'mergers and acquisitions training'
  ],
  openGraph: {
    title: 'Learn Livmo - Your Complete Exit Readiness Academy',
    description: 'Free resources to help business owners master exit planning. Interactive guides, tools, and templates for M&A success.',
    url: siteUrl,
    siteName: 'Learn Livmo',
    type: 'website',
    images: [
      {
        url: `${siteUrl}/universal-assets/images/livmo-logo-light-bg.png`,
        width: 1200,
        height: 630,
        alt: 'Learn Livmo - Exit Readiness Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn Livmo - Complete Exit Readiness Academy',
    description: 'Free resources for business owners planning an exit. Master M&A, valuation, and more.',
  },
  alternates: {
    canonical: siteUrl,
  },
};

