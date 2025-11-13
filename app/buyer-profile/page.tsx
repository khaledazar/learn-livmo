import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { Target, Building2, Briefcase, TrendingUp, ArrowRight } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buyer Profile & Comparison Guide | Strategic vs PE vs Corporate Acquirers',
  description: 'Understand your buyer options: strategic buyers, financial buyers (PE firms), and corporate acquirers. Learn what each values, typical deal terms, timelines, and potential pitfalls.',
  keywords: [
    'buyer types M&A',
    'strategic buyers vs PE',
    'corporate acquirers',
    'private equity buyers',
    'M&A buyer profiles',
    'strategic vs financial buyers',
    'buyer due diligence',
    'M&A deal terms'
  ],
  openGraph: {
    title: 'Buyer Profile & Pros-Cons Guide - M&A Buyer Types',
    description: 'Compare strategic, financial, and corporate buyers to choose the right exit path.',
    url: 'https://learn.livmo.com/buyer-profile',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/buyer-profile',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Buyer Profile & Comparison Guide', url: 'https://learn.livmo.com/buyer-profile' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Buyer Profile & Pros-Cons Guide',
  description: 'Comprehensive guide to understanding buyer types including strategic buyers, PE firms, and corporate acquirers with deal terms, timelines, and pitfalls',
  url: 'https://learn.livmo.com/buyer-profile',
  keywords: ['buyer profiles', 'strategic buyers', 'private equity', 'M&A comparison', 'acquirer types']
});

const features = [
  {
    icon: Building2,
    title: 'Strategic Buyers',
    description: 'Operating companies in your industry looking for synergies, market share, or talent. Typically pay highest multiples but have longer integration requirements.',
  },
  {
    icon: Briefcase,
    title: 'Financial Buyers (PE Firms)',
    description: 'Private equity firms focused on cash flow and growth potential. Expect 3-7 year hold periods, professional management, and earnout structures.',
  },
  {
    icon: TrendingUp,
    title: 'Corporate Acquirers',
    description: 'Large corporations seeking innovation, technology, or geographic expansion. Often have complex approval processes but deep pockets.',
  },
  {
    icon: Target,
    title: 'Comparison Framework',
    description: 'Side-by-side analysis of typical deal structures, timelines, valuation multiples, earnout terms, and integration expectations for each buyer type.',
  },
];

export default function BuyerProfilePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Buyer Intelligence' }}
          title="Buyer-Profile & Pros-Cons Guide"
          subtitle="Choose the Right Exit Path"
          description="Understand strategic buyers, PE firms, and corporate acquirers—what they value most, typical deal terms, timelines, and potential pitfalls with each buyer type."
          icon={Target}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        <ContentSection
          title="Buyer Types Overview"
          description="Not all buyers are created equal. Understanding buyer motivations and deal structures helps you choose the right exit path."
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
              <Target className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We're creating a comprehensive buyer comparison guide with detailed profiles, deal term breakdowns, and decision frameworks. Check back soon or book a consultation to discuss your buyer options.
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
