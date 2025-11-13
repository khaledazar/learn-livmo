import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { ClipboardCheck, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interactive Sellability Checklist | Assess Your Business Exit Readiness',
  description: 'Interactive business sellability assessment tool. Check your exit readiness across financials, operations, legal, and more. Track progress and identify gaps before buyers arrive.',
  keywords: [
    'business sellability checklist',
    'exit readiness assessment',
    'sell business checklist',
    'business sale preparation',
    'sellability score',
    'exit readiness tool',
    'business assessment',
    'M&A readiness checklist'
  ],
  openGraph: {
    title: 'Interactive Sellability Checklist - Assess Your Exit Readiness',
    description: 'Interactive tool to assess your business sellability. Identify gaps and track progress.',
    url: 'https://learn.livmo.com/sellability-checklist',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/sellability-checklist',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Tools', url: 'https://learn.livmo.com/#tools' },
  { name: 'Sellability Checklist', url: 'https://learn.livmo.com/sellability-checklist' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Interactive Sellability Checklist',
  description: 'Interactive business assessment tool to evaluate exit readiness across all critical areas including financials, operations, legal, and customer concentration',
  url: 'https://learn.livmo.com/sellability-checklist',
  keywords: ['sellability', 'business assessment', 'exit readiness', 'M&A preparation', 'business checklist']
});

export default function SellabilityChecklistPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-600 to-livmo-primary text-white">
          <Container>
            <div className="max-w-4xl mx-auto">
              <Link
                href="/"
                className="inline-flex items-center text-green-100 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6">
                  <ClipboardCheck className="h-8 w-8" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                  Interactive Sellability Checklist
                </h1>
              </div>
              
              <p className="text-xl text-green-100">
                Assess your business exit readiness with our comprehensive interactive checklist. Track your progress and identify gaps.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-24 bg-livmo-light-neutral">
          <Container size="md">
            <Card variant="hero" className="text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-4">
                  <ClipboardCheck className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                  Coming Soon - Interactive Version
                </h2>
                <p className="text-lg text-livmo-body mb-6">
                  We're building an interactive sellability assessment tool that will help you evaluate your business across all critical exit readiness areas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-livmo-navy mb-2">📊 Assessment Areas</h3>
                  <ul className="text-sm text-livmo-body space-y-1">
                    <li>• Financial Health & Reporting</li>
                    <li>• Operational Maturity</li>
                    <li>• Legal & IP Documentation</li>
                    <li>• Customer Concentration</li>
                    <li>• Management Team</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg">
                  <h3 className="font-semibold text-livmo-navy mb-2">✨ Features</h3>
                  <ul className="text-sm text-livmo-body space-y-1">
                    <li>• Progress tracking</li>
                    <li>• Sellability score</li>
                    <li>• Gap identification</li>
                    <li>• Action recommendations</li>
                    <li>• Saved progress (localStorage)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-8 text-left border-l-4 border-green-500">
                <h3 className="font-semibold text-livmo-navy mb-3">📥 Download PDF Version (Available Now)</h3>
                <p className="text-sm text-livmo-body mb-4">
                  While we build the interactive version, you can download the comprehensive PDF checklist:
                </p>
                <Link
                  href="https://go.livmo.com/hubfs/Livmo%20-%20Business%20Owner%20Sellability%20Checklist%20-%20Regular%20Business.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
                >
                  Download PDF Checklist
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Link>
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

