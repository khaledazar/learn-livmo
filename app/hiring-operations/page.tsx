import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container} from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { Users, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hiring & Operational Maturity Roadmap | Build Scalable Business Operations',
  description: 'Transform operations for business exit. Free gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies. Build operational maturity that increases business value and attracts buyers.',
  keywords: [
    'operational maturity',
    'business process maturity',
    'SOP templates',
    'RACI matrix',
    'gap analysis worksheet',
    'talent retention strategies',
    'operational excellence',
    'scalable operations',
    'org chart template',
    'business process improvement'
  ],
  openGraph: {
    title: 'Hiring & Operational Maturity Roadmap for Business Exit',
    description: 'Build scalable operations with free templates, RACI charts, and process maturity tools.',
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
  description: 'Comprehensive operational maturity toolkit with gap-analysis, SOP templates, RACI charts, and talent retention strategies for building sellable businesses',
  url: 'https://learn.livmo.com/hiring-operations',
  keywords: ['operational maturity', 'SOP templates', 'RACI charts', 'gap analysis', 'talent retention']
});

export default function HiringOperationsPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-primary to-livmo-border text-white">
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
                <Users className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Hiring & Operational Maturity Roadmap
              </h1>
            </div>
            
            <p className="text-xl text-blue-100">
              Build operational excellence with gap-analysis tools, SOP templates, and talent retention strategies.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4">
                <Users className="h-10 w-10 text-livmo-primary" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're developing a complete operational maturity toolkit featuring:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">📊 Assessment Tools</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Gap-Analysis Worksheets</li>
                  <li>• Process Maturity Scorecard</li>
                  <li>• Org Chart Templates</li>
                  <li>• RACI Matrix Builder</li>
                </ul>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">📚 Resources</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• SOP Template Library</li>
                  <li>• Talent Retention Playbook</li>
                  <li>• Compliance Checklists</li>
                  <li>• Hiring Best Practices Guide</li>
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

