import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { Lightbulb, DollarSign, FileText, TrendingUp, ArrowRight } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Turn Your Cash Cow Into a Sellable Asset | Lifestyle Business to Exit-Ready',
  description: 'Transform your lifestyle business into an attractive acquisition target. Practical strategies to separate personal expenses, professionalize operations, and build transferable value.',
  keywords: [
    'cash cow to sellable business',
    'lifestyle business exit',
    'prepare business for sale',
    'separate personal business expenses',
    'professionalize small business',
    'build sellable business',
    'owner-dependent business exit',
    'transferable business value'
  ],
  openGraph: {
    title: 'Turn Your Cash Cow Into a Sellable Asset',
    description: 'Practical strategies to transform your lifestyle business into an exit-ready company.',
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
  description: 'Practical strategies to transform lifestyle businesses into attractive acquisition targets by separating personal expenses and professionalizing operations',
  url: 'https://learn.livmo.com/cash-cow-hacks',
  keywords: ['lifestyle business', 'sellable business', 'business transformation', 'owner dependency', 'exit preparation']
});

const features = [
  {
    icon: DollarSign,
    title: 'Separate Personal Expenses',
    description: 'Identify and document personal expenses in P&L, create clean add-back schedules, and establish professional expense policies going forward.',
  },
  {
    icon: FileText,
    title: 'Clean Up Other Expenses',
    description: 'Remove personal pay as contractor costs, eliminate commingled accounts, and create transparent expense categorization.',
  },
  {
    icon: TrendingUp,
    title: 'Reduce Owner Dependency',
    description: 'Build management team, document processes, delegate key relationships, and create systems that run without you.',
  },
  {
    icon: Lightbulb,
    title: 'Quick-Win Improvements',
    description: 'High-impact changes you can make in 30-90 days to dramatically improve sellability and valuation.',
  },
];

export default function CashCowHacksPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Business Transformation' }}
          title="Turn Your Cash Cow Into a Sellable Asset"
          subtitle="From Lifestyle Business to Exit-Ready"
          description="Practical strategies to transform your lifestyle business into an attractive acquisition target. Learn how to separate personal expenses, professionalize operations, and build transferable value."
          icon={Lightbulb}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        <ContentSection
          title="What's Included"
          description="Actionable strategies to make your business more attractive to buyers and increase valuation."
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
              <Lightbulb className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're building a comprehensive guide with checklists, case studies, and step-by-step workflows to transform lifestyle businesses into sellable assets. Check back soon or book a consultation.
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
