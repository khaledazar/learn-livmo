import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { Target, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buyer Profile Guide | Strategic vs PE vs Corporate Acquirers Comparison',
  description: 'Master M&A buyer types: Strategic buyers, PE firms, and corporate acquirers. Compare deal timelines, valuation methods, term sheets, and common pitfalls. Choose the right buyer for your business exit.',
  keywords: [
    'types of business buyers',
    'strategic buyers vs PE firms',
    'corporate acquirers',
    'private equity acquisition',
    'strategic acquisition',
    'M&A buyer types',
    'term sheet comparison',
    'buyer due diligence',
    'business acquisition types',
    'exit buyer selection'
  ],
  openGraph: {
    title: 'Buyer Profile & Comparison Guide for M&A Success',
    description: 'Understand strategic buyers, PE firms, and corporate acquirers. Compare deal structures and choose the right buyer.',
    url: 'https://learn.livmo.com/buyer-profile',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/buyer-profile',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Buyer-Profile & Pros-Cons Guide', url: 'https://learn.livmo.com/buyer-profile' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Buyer-Profile & Pros-Cons Guide',
  description: 'Comprehensive comparison of M&A buyer types including strategic buyers, PE firms, and corporate acquirers with deal timeline and term sheet analysis',
  url: 'https://learn.livmo.com/buyer-profile',
  keywords: ['buyer types', 'strategic buyers', 'PE firms', 'corporate acquirers', 'M&A deal structures']
});

export default function BuyerProfilePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-border to-livmo-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6">
                <Target className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Buyer-Profile & Pros-Cons Guide
              </h1>
            </div>
            
            <p className="text-xl text-blue-100">
              Understand different buyer types, what they value most, deal timelines, and potential pitfalls with each.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4">
                <Target className="h-10 w-10 text-livmo-border" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're creating a comprehensive buyer comparison guide covering:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🏢 Strategic Buyers</h3>
                <p className="text-xs text-livmo-body">
                  Synergy-focused, longer timelines, cultural fit important
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">💼 PE Firms</h3>
                <p className="text-xs text-livmo-body">
                  Financial engineering, growth potential, operational improvements
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🏛️ Corporate Acquirers</h3>
                <p className="text-xs text-livmo-body">
                  Market expansion, technology acquisition, talent acquisition
                </p>
              </div>
            </div>

            <div className="bg-livmo-light-gold p-4 rounded-lg mb-8 text-left">
              <h3 className="font-semibold text-livmo-navy mb-2">📋 Included Content:</h3>
              <ul className="text-sm text-livmo-body space-y-1">
                <li>• Typical term sheet structures</li>
                <li>• Deal timeline comparisons</li>
                <li>• Common pitfalls and red flags</li>
                <li>• Valuation methodology preferences</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-livmo-primary text-white font-semibold rounded-lg hover:bg-livmo-navy transition-colors"
            >
              Return to Learning Hub
            </Link>
          </Card>
        </Container>
      </section>
    </Layout>
    </>
  );
}

