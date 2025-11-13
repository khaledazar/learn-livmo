import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { FileText, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Financial Reporting Best Practices for Business Exit | Boost Valuation',
  description: 'Master financial reporting to maximize your business valuation. Free templates: Chart of Accounts, Revenue Recognition Policy, SaaS Metrics, Variance Analysis. Clean financial statements for successful M&A due diligence.',
  keywords: [
    'financial reporting best practices',
    'business valuation financial statements',
    'P&L optimization',
    'revenue recognition',
    'GAAP compliance',
    'SaaS metrics reporting',
    'financial due diligence',
    'chart of accounts template',
    'clean financial data',
    'M&A financial preparation'
  ],
  openGraph: {
    title: 'Financial Reporting Best Practices for M&A Success',
    description: 'Boost your company valuation with accurate financial statements. Free templates and checklists included.',
    url: 'https://learn.livmo.com/financial-reporting',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/financial-reporting',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Financial Reporting Best Practices', url: 'https://learn.livmo.com/financial-reporting' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Financial Reporting Best Practices for Business Exit',
  description: 'Comprehensive guide to financial reporting that maximizes business valuation with templates for Chart of Accounts, Revenue Recognition Policy, and SaaS Metrics',
  url: 'https://learn.livmo.com/financial-reporting',
  keywords: ['financial reporting', 'business valuation', 'M&A preparation', 'GAAP compliance', 'SaaS metrics']
});

export default function FinancialReportingPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-primary to-livmo-navy text-white">
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
                <FileText className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Financial Reporting Best Practices
              </h1>
            </div>
            
            <p className="text-xl text-blue-100">
              Boost your company valuation with accurate income statements, clean financials, and audit-ready processes.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-livmo-light-gold mb-4">
                <FileText className="h-10 w-10 text-livmo-primary" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're currently building a comprehensive financial reporting toolkit that will include:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 bg-livmo-light-gold rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">📊 Templates & Tools</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Chart of Accounts Template</li>
                  <li>• Revenue Recognition Policy</li>
                  <li>• SaaS Metrics Template</li>
                  <li>• Variance Analysis Worksheets</li>
                </ul>
              </div>
              
              <div className="p-4 bg-livmo-light-gold rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">✅ Checklists</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Reconciliation Checklist</li>
                  <li>• Month-End Close Calendar</li>
                  <li>• Data Integrity Audit Plan</li>
                  <li>• Financial Health Assessment</li>
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

