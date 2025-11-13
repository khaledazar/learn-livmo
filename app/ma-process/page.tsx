import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { TrendingUp, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M&A Process Roadmap | Complete Guide from Teaser to Close',
  description: 'Master the M&A process: teaser, NDA, LOI, due diligence, definitive agreement, and close. Learn deal-killer traps, timeline expectations, and momentum-building strategies. Interactive 5-phase roadmap for business exits.',
  keywords: [
    'M&A process steps',
    'mergers and acquisitions process',
    'LOI negotiation',
    'due diligence process',
    'definitive agreement',
    'M&A timeline',
    'deal killer mistakes',
    'business sale process',
    'M&A roadmap',
    'acquisition process guide'
  ],
  openGraph: {
    title: 'M&A Process Roadmap - Complete Guide to Business Exit',
    description: 'Interactive guide through every M&A stage from teaser to close. Avoid common pitfalls and keep momentum.',
    url: 'https://learn.livmo.com/ma-process',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/ma-process',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'M&A Process Roadmap', url: 'https://learn.livmo.com/ma-process' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'M&A Process Roadmap',
  description: 'Interactive stage-by-stage M&A process guide covering teaser, LOI, due diligence, definitive agreement, and close with deal-killer traps and momentum strategies',
  url: 'https://learn.livmo.com/ma-process',
  keywords: ['M&A process', 'LOI negotiation', 'due diligence', 'business sale', 'acquisition roadmap']
});

export default function MAProcessPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-gold/90 to-livmo-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-livmo-navy hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                M&A Process Roadmap
              </h1>
            </div>
            
            <p className="text-xl text-livmo-navy">
              Navigate every stage from teaser to close with confidence. Learn deal-killer traps and momentum-building strategies.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-livmo-light-gold mb-4">
                <TrendingUp className="h-10 w-10 text-livmo-gold" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're building an interactive M&A process roadmap with detailed guidance for each stage:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 bg-livmo-light-gold rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🗺️ Process Stages</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Preparation & Positioning</li>
                  <li>• Teaser & NDA</li>
                  <li>• LOI Negotiation</li>
                  <li>• Due Diligence</li>
                  <li>• Definitive Agreement & Close</li>
                </ul>
              </div>
              
              <div className="p-4 bg-livmo-light-gold rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">⚡ Pro Tips</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Deal-Killer Traps to Avoid</li>
                  <li>• Momentum-Building Strategies</li>
                  <li>• Timeline Expectations</li>
                  <li>• Negotiation Best Practices</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-livmo-primary mb-8 text-left">
              <p className="text-sm text-livmo-body">
                <strong className="text-livmo-navy">Note:</strong> This page will feature an interactive timeline showing all 5 phases and 14 key milestones with detailed descriptions, timelines, and actionable tips.
              </p>
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

