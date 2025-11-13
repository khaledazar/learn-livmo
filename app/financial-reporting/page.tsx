import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { ContentSection, FeatureCard } from '@/components/design-system/ContentSection';
import { FileText, Download, ExternalLink, CheckCircle2, TrendingUp, FileSpreadsheet, Calendar, Shield } from 'lucide-react';
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

const templates = [
  {
    icon: FileSpreadsheet,
    title: 'Chart of Accounts Template',
    description: 'Organize your accounts for cleaner reporting and better visibility into your financial performance.',
    badge: 'Template',
  },
  {
    icon: FileText,
    title: 'Revenue Recognition Policy',
    description: 'Build consistency into your rev rec process and stay audit-ready with standardized procedures.',
    badge: 'Policy',
  },
  {
    icon: TrendingUp,
    title: 'SaaS Metrics Template',
    description: 'Ensure your core KPIs are defined, consistent, and reportable across all stakeholders.',
    badge: 'Template',
  },
  {
    icon: Calendar,
    title: 'Variance Analysis Worksheets',
    description: 'Track budget vs. actuals, identify trends, and document root causes for all material variances.',
    badge: 'Worksheet',
  },
];

const checklists = [
  {
    icon: CheckCircle2,
    title: 'Reconciliation Checklist',
    description: 'Daily/weekly/monthly reconciliation tasks to keep your books clean and audit-ready.',
  },
  {
    icon: Calendar,
    title: 'Month-End Close Calendar',
    description: 'Day-by-day checklist with responsible owners (RACI matrix) for efficient monthly closes.',
  },
  {
    icon: Shield,
    title: 'Data Integrity Audit Plan',
    description: 'Spot-check sampling, journal entry reviews, and segregation of duties verification.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Health Assessment',
    description: 'Quick-win blind-spot closures and high-impact account reviews to maximize valuation.',
  },
];

export default function FinancialReportingPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Financial Excellence' }}
          title="Financial Reporting Best Practices"
          subtitle="Boost Your Company Valuation"
          description="Master financial reporting to maximize your business value. Get free templates, checklists, and proven frameworks used by top M&A advisors to prepare clean, audit-ready financials."
          icon={FileText}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        <ContentSection
          title="Why Financial Accuracy is a Sellability Superpower"
          description="Clean, reconciled numbers establish immediate credibility with buyers. A tidy P&L can add millions to your exit multiple in under 60 minutes of targeted review."
          background="white"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-md">
              <div className="text-4xl font-bold text-livmo-gold mb-2">3-5x</div>
              <div className="text-sm font-semibold text-livmo-navy mb-2">Valuation Multiple Range</div>
              <p className="text-sm text-gray-600">Clean financials command premium multiples from strategic buyers.</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-md">
              <div className="text-4xl font-bold text-livmo-gold mb-2">60%</div>
              <div className="text-sm font-semibold text-livmo-navy mb-2">Faster Due Diligence</div>
              <p className="text-sm text-gray-600">Organized reconciliations slash back-and-forth during deal diligence.</p>
            </div>
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-md">
              <div className="text-4xl font-bold text-livmo-gold mb-2">$1M+</div>
              <div className="text-sm font-semibold text-livmo-navy mb-2">Value Increase Potential</div>
              <p className="text-sm text-gray-600">Fixing high-impact blind spots can unlock hidden valuation.</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          title="Free Templates & Tools"
          description="Everything you need to establish clean financial reporting and boost buyer confidence."
          background="gray"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {templates.map((template) => (
              <FeatureCard
                key={template.title}
                icon={template.icon}
                title={template.title}
                description={template.description}
                badge={template.badge}
              />
            ))}
          </div>

          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-md">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Download className="h-6 w-6 text-livmo-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-livmo-navy mb-2">Access All Templates</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download the complete Financial Data Hygiene Starter Kit from our Google Drive folder. Includes all templates, policies, and worksheets ready to customize for your business.
                </p>
                <Link
                  href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-livmo-primary text-white text-sm font-semibold rounded-md hover:bg-livmo-navy transition-colors duration-150"
                >
                  Download Templates
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection
          title="Checklists & Frameworks"
          description="Proven processes to maintain financial accuracy and prepare for buyer due diligence."
          background="white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {checklists.map((checklist) => (
              <FeatureCard
                key={checklist.title}
                icon={checklist.icon}
                title={checklist.title}
                description={checklist.description}
              />
            ))}
          </div>
        </ContentSection>

        <ContentSection
          title="Common Financial Pitfalls to Avoid"
          description="Watch out for these deal-killers that can tank your valuation or derail due diligence."
          background="gray"
        >
          <div className="space-y-4">
            <div className="p-6 bg-white border-l-4 border-red-500 rounded-md">
              <h3 className="font-semibold text-livmo-navy mb-2">❌ Mismatched Revenue Recognition</h3>
              <p className="text-sm text-gray-600">Revenue recorded doesn't align with cash collection or contract terms. This destroys buyer trust immediately.</p>
            </div>
            <div className="p-6 bg-white border-l-4 border-red-500 rounded-md">
              <h3 className="font-semibold text-livmo-navy mb-2">❌ Incorrect COGS Classification</h3>
              <p className="text-sm text-gray-600">Mixing pass-through costs with core expenses inflates gross margins artificially. Buyers will catch this in diligence.</p>
            </div>
            <div className="p-6 bg-white border-l-4 border-red-500 rounded-md">
              <h3 className="font-semibold text-livmo-navy mb-2">❌ "Consulting" Catch-All Accounts</h3>
              <p className="text-sm text-gray-600">Hiding project costs and services in vague buckets skews margins and raises red flags about financial discipline.</p>
            </div>
            <div className="p-6 bg-white border-l-4 border-red-500 rounded-md">
              <h3 className="font-semibold text-livmo-navy mb-2">❌ Undisclosed Owner Expenses</h3>
              <p className="text-sm text-gray-600">Personal perks buried in the P&L reduce buyer trust. Document all add-backs clearly and transparently.</p>
            </div>
          </div>
        </ContentSection>

        <ContentSection background="navy">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-white mb-4 tracking-tight">
              Need Help Getting Your Financials Ready?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Our M&A advisors can review your financial reporting and identify quick wins that boost valuation.
            </p>
            <Link
              href="https://go.livmo.com/meetings/go-livmo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-all duration-150 text-lg shadow-lg"
            >
              Book Free Consultation
            </Link>
          </div>
        </ContentSection>

        <ContentSection
          title="Additional Resources"
          description="Expert insights on financial reporting from industry leaders."
          background="white"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="https://www.maxio.com/blog/top-red-flags-in-saas-financial-reporting"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-gray-200 rounded-md hover:border-livmo-primary hover:shadow-md transition-all duration-150 group"
            >
              <div className="flex items-start gap-4">
                <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-livmo-navy mb-2 group-hover:text-livmo-primary transition-colors">
                    Top Red Flags in SaaS Financial Reporting
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Learn what investors and acquirers look for in SaaS financials and how to avoid common mistakes.
                  </p>
                  <span className="text-xs text-gray-500">Maxio • External Link</span>
                </div>
              </div>
            </a>

            <a
              href="https://www.maxio.com/resources/the-top-red-flags-in-saas-financial-reporting"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white border border-gray-200 rounded-md hover:border-livmo-primary hover:shadow-md transition-all duration-150 group"
            >
              <div className="flex items-start gap-4">
                <ExternalLink className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-livmo-navy mb-2 group-hover:text-livmo-primary transition-colors">
                    The Top Red Flags in SaaS Financial Reporting (PDF)
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Comprehensive guide to identifying and fixing financial reporting issues before buyers find them.
                  </p>
                  <span className="text-xs text-gray-500">Maxio • External Link</span>
                </div>
              </div>
            </a>
          </div>
        </ContentSection>
      </Layout>
    </>
  );
}
