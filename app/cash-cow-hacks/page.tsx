import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { Lightbulb, ArrowLeft } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Transform Lifestyle Business to Sellable Asset | Cash Cow Exit Strategies',
  description: 'Convert your cash cow into a sellable business. Separate personal expenses, reduce owner dependency, document processes, build management team, and create scalable systems. Proven strategies to maximize lifestyle business value.',
  keywords: [
    'lifestyle business exit',
    'cash cow business sale',
    'reduce owner dependency',
    'business sellability',
    'lifestyle to sellable business',
    'owner-dependent business',
    'scalable business systems',
    'business value building',
    'personal vs business expenses',
    'sellable asset creation'
  ],
  openGraph: {
    title: 'Turn Your Cash Cow Into a Sellable Asset',
    description: 'Transform your lifestyle business into an attractive acquisition target with proven strategies.',
    url: 'https://learn.livmo.com/cash-cow-hacks',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/cash-cow-hacks',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Cash Cow to Sellable Asset', url: 'https://learn.livmo.com/cash-cow-hacks' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Turn Your Cash Cow Into a Sellable Asset',
  description: 'Practical strategies to transform lifestyle businesses into attractive acquisition targets by reducing owner dependency and implementing scalable systems',
  url: 'https://learn.livmo.com/cash-cow-hacks',
  keywords: ['lifestyle business', 'cash cow exit', 'business sellability', 'owner dependency', 'scalable systems']
});

export default function CashCowHacksPage() {
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
                <Lightbulb className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Turn Your Cash Cow Into a Sellable Asset
              </h1>
            </div>
            
            <p className="text-xl text-green-100">
              Transform your lifestyle business into an attractive acquisition target with proven strategies.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-50 mb-4">
                <Lightbulb className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're creating a practical guide to help you transition from lifestyle business to sellable asset:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">💡 Quick Wins</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Separate Personal vs Business Expenses</li>
                  <li>• Document Key Processes</li>
                  <li>• Build Management Team</li>
                  <li>• Clean Up Financial Statements</li>
                </ul>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🎯 Long-Term Strategy</h3>
                <ul className="text-sm text-livmo-body space-y-1">
                  <li>• Reduce Owner Dependency</li>
                  <li>• Implement Scalable Systems</li>
                  <li>• Build Recurring Revenue</li>
                  <li>• Create Growth Trajectory</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-8 text-left">
              <h3 className="font-semibold text-livmo-navy mb-2">⚠️ Common Pitfalls:</h3>
              <ul className="text-sm text-livmo-body space-y-1">
                <li>• Personal expenses mixed with business (Other Expenses)</li>
                <li>• Owner compensation as contractor payments</li>
                <li>• Undocumented processes and tribal knowledge</li>
                <li>• Single-person dependencies</li>
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

