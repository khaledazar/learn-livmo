import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { Users, FileText, GitBranch, Award, ArrowRight } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hiring & Operational Maturity Roadmap | Scale Your Business for Exit',
  description: 'Build operational excellence before your exit. Gap-analysis worksheets, SOP template library, RACI charts, talent retention checklists, and compliance frameworks.',
  keywords: [
    'operational maturity',
    'hiring roadmap business exit',
    'SOP templates',
    'RACI chart templates',
    'talent retention',
    'business process documentation',
    'operational excellence M&A',
    'scale business for exit'
  ],
  openGraph: {
    title: 'Hiring & Operational Maturity Roadmap',
    description: 'Build operational maturity and attract top talent to maximize exit value.',
    url: 'https://learn.livmo.com/hiring-operations',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/hiring-operations',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Hiring & Operational Maturity', url: 'https://learn.livmo.com/hiring-operations' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Hiring & Operational Maturity Roadmap',
  description: 'Comprehensive guide to building operational maturity including gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies',
  url: 'https://learn.livmo.com/hiring-operations',
  keywords: ['operational maturity', 'hiring roadmap', 'SOP templates', 'RACI charts', 'talent retention']
});

const features = [
  {
    icon: FileText,
    title: 'Gap-Analysis Worksheets',
    description: 'Identify operational weaknesses across processes, documentation, and team capabilities with structured assessment frameworks.',
  },
  {
    icon: GitBranch,
    title: 'SOP Template Library',
    description: 'Ready-to-customize Standard Operating Procedure templates for sales, operations, finance, customer success, and more.',
  },
  {
    icon: Users,
    title: 'RACI Charts',
    description: 'Responsibility Assignment Matrix templates to clarify roles, accountability, and decision rights across your organization.',
  },
  {
    icon: Award,
    title: 'Talent Retention & Compliance',
    description: 'Checklists for key person risk mitigation, employment agreements, non-compete clauses, and compliance documentation.',
  },
];

export default function HiringOperationsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Operational Excellence' }}
          title="Hiring & Operational Maturity Roadmap"
          subtitle="Scale Your Business for Exit"
          description="Build operational maturity that attracts buyers and commands premium valuations. Get gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies."
          icon={Users}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        <ContentSection
          title="What's Included"
          description="Frameworks and templates to build operational maturity and reduce buyer risk."
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
              <Users className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're building a comprehensive operational maturity toolkit with gap-analysis worksheets, SOP templates, RACI charts, and retention strategies. Check back soon or book a consultation.
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
