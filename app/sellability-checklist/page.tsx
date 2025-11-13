import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { ClipboardCheck, FileText, Users, DollarSign, Shield, ArrowRight, Download, ExternalLink } from 'lucide-react';
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

const assessmentAreas = [
  {
    icon: DollarSign,
    title: 'Financial Health & Reporting',
    description: 'Clean P&L, reconciled accounts, GAAP compliance, accurate revenue recognition, and audit-ready financials.',
  },
  {
    icon: Users,
    title: 'Operational Maturity',
    description: 'Documented processes, management team depth, systems & technology stack, and reduced owner dependency.',
  },
  {
    icon: Shield,
    title: 'Legal & IP Documentation',
    description: 'Corporate docs, IP filings, customer contracts, employment agreements, and compliance verification.',
  },
  {
    icon: FileText,
    title: 'Customer Concentration',
    description: 'Revenue diversification, retention metrics, contract terms, and customer relationship transferability.',
  },
];

const futureFeatures = [
  'Progress tracking with localStorage',
  'Sellability score calculation',
  'Gap identification by category',
  'Action recommendations',
  'Saved progress across sessions',
  'Exportable assessment report',
];

export default function SellabilityChecklistPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Assessment Tool' }}
          title="Interactive Sellability Checklist"
          subtitle="Assess Your Exit Readiness"
          description="Comprehensive business assessment tool to evaluate your exit readiness across all critical areas. Track progress, identify gaps, and get action recommendations before buyers arrive."
          icon={ClipboardCheck}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="green"
        />

        <ContentSection
          title="Assessment Areas"
          description="Evaluate your business across the dimensions that matter most to buyers."
          background="white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {assessmentAreas.map((area) => (
              <FeatureCard
                key={area.title}
                icon={area.icon}
                title={area.title}
                description={area.description}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          title="Interactive Features"
          description="Coming soon: A powerful interactive assessment tool."
          background="gray"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {futureFeatures.map((feature) => (
              <div key={feature} className="p-4 bg-white border border-gray-200 rounded-md">
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-medium">{feature}</span>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection background="white">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-md bg-green-600 flex items-center justify-center">
                    <Download className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-livmo-navy mb-3">Download PDF Version (Available Now)</h3>
                  <p className="text-gray-700 mb-6">
                    While we build the interactive version, you can download the comprehensive PDF checklist covering all assessment areas. Use it to evaluate your business readiness today.
                  </p>
                  <Link
                    href="https://go.livmo.com/hubfs/Livmo%20-%20Business%20Owner%20Sellability%20Checklist%20-%20Regular%20Business.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors duration-150"
                  >
                    Download PDF Checklist
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-md bg-green-600 text-white mb-6">
              <ClipboardCheck className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
              Interactive Version Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're building an interactive assessment tool with progress tracking, sellability scoring, and personalized recommendations. Check back soon or book a consultation to discuss your exit readiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-livmo-navy font-semibold rounded-md hover:bg-gray-300 transition-colors duration-150"
              >
                Return to Learning Hub
              </Link>
              <Link
                href="https://go.livmo.com/meetings/go-livmo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-colors duration-150"
              >
                Book Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </ContentSection>
      </Layout>
    </>
  );
}
