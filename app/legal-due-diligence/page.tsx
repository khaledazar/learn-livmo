import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { Scale, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Due Diligence Audit Kit | M&A Document Preparation Checklist',
  description: 'Complete legal due diligence toolkit for business exit. Free checklists for corporate documents, IP filings, NDAs, vendor agreements, and gap clean-up workflows. Prepare for M&A due diligence with confidence.',
  keywords: [
    'legal due diligence checklist',
    'M&A legal preparation',
    'corporate documents audit',
    'IP filings inventory',
    'contract review checklist',
    'NDA template',
    'vendor agreement review',
    'legal compliance M&A',
    'due diligence preparation',
    'business sale legal docs'
  ],
  openGraph: {
    title: 'Legal Due Diligence Audit Kit for M&A',
    description: 'Complete legal preparation toolkit with checklists and trackers for successful M&A due diligence.',
    url: 'https://learn.livmo.com/legal-due-diligence',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/legal-due-diligence',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Legal Due-Diligence Audit Kit', url: 'https://learn.livmo.com/legal-due-diligence' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Legal Due-Diligence Audit Kit',
  description: 'Comprehensive legal audit toolkit including checklists for corporate documents, IP filings, contracts, and gap clean-up workflows for M&A preparation',
  url: 'https://learn.livmo.com/legal-due-diligence',
  keywords: ['legal due diligence', 'M&A preparation', 'corporate documents', 'contract review', 'compliance audit']
});

export default function LegalDueDiligencePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white">
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
                <Scale className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Legal Due-Diligence Audit Kit
              </h1>
            </div>
            
            <p className="text-xl text-blue-100">
              Comprehensive checklists and trackers for corporate documents, IP filings, key contracts, and clean-up workflows.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-livmo-navy/10 mb-4">
                <Scale className="h-10 w-10 text-livmo-navy" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're preparing a complete legal due diligence toolkit including:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-livmo-navy mb-2">📋 Checklists</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Corporate Documents Tracker</li>
                  <li>• IP Filings Inventory</li>
                  <li>• Contract Review Checklist</li>
                  <li>• Compliance Documentation</li>
                </ul>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-livmo-navy mb-2">🔧 Workflows</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Gap Clean-Up Process</li>
                  <li>• Assignment Clause Review</li>
                  <li>• NDA & Vendor Agreement Templates</li>
                  <li>• Legal Q&A Preparation</li>
                </ul>
              </div>
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

