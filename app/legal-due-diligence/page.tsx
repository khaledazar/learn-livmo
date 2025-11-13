import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { Scale, FileText, Shield, Clipboard, ArrowRight } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Due Diligence Audit Kit | M&A Document Preparation Checklist',
  description: 'Complete legal due diligence toolkit for business exits. Checklists for corporate docs, IP filings, key contracts, NDAs, vendor agreements, and clean-up workflows to prepare for M&A.',
  keywords: [
    'legal due diligence checklist',
    'M&A legal preparation',
    'corporate documents audit',
    'IP filings checklist',
    'contract review M&A',
    'business sale legal prep',
    'due diligence audit kit',
    'legal readiness exit'
  ],
  openGraph: {
    title: 'Legal Due Diligence Audit Kit - M&A Document Prep',
    description: 'Complete toolkit with checklists and trackers for legal due diligence readiness.',
    url: 'https://learn.livmo.com/legal-due-diligence',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/legal-due-diligence',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Legal Due Diligence Audit Kit', url: 'https://learn.livmo.com/legal-due-diligence' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Legal Due Diligence Audit Kit',
  description: 'Comprehensive legal due diligence toolkit including checklists for corporate documents, IP filings, contracts, and common gap clean-up workflows',
  url: 'https://learn.livmo.com/legal-due-diligence',
  keywords: ['legal due diligence', 'M&A preparation', 'corporate documents', 'IP audit', 'contract review']
});

const features = [
  {
    icon: FileText,
    title: 'Corporate Documents Checklist',
    description: 'Certificate of Incorporation, Bylaws, Board Minutes, Shareholder Agreements, and Cap Table documentation.',
  },
  {
    icon: Shield,
    title: 'IP Filings Tracker',
    description: 'Patents, Trademarks, Copyrights, Domain Names, and Trade Secrets documentation and assignment verification.',
  },
  {
    icon: Clipboard,
    title: 'Key Contracts Review',
    description: 'Customer Agreements, Vendor Contracts, NDAs, Employment Agreements, and Assignment Clause verification.',
  },
  {
    icon: Scale,
    title: 'Clean-Up Workflows',
    description: 'Step-by-step processes to identify and resolve common legal gaps before buyer due diligence begins.',
  },
];

export default function LegalDueDiligencePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Legal Readiness' }}
          title="Legal Due Diligence Audit Kit"
          subtitle="Be Prepared for Buyer Scrutiny"
          description="Comprehensive checklists and trackers for corporate docs, IP filings, key contracts, and common gap clean-up workflows. Get ahead of legal due diligence before buyers arrive."
          icon={Scale}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        <ContentSection
          title="What's Included"
          description="Everything you need to prepare for legal due diligence and avoid deal-killing surprises."
          background="white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection background="gray">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-md bg-livmo-navy text-white mb-6">
              <Scale className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're currently building a comprehensive legal due diligence toolkit with downloadable checklists, trackers, and workflows. Check back soon or book a consultation to discuss your legal readiness.
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
