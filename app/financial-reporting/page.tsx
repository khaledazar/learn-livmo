import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { Container } from '@/components/layout/Container';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { FileText, Download, ExternalLink, TrendingUp, DollarSign, FileSpreadsheet, Calendar, Shield, AlertTriangle, CheckCircle2, Lightbulb } from 'lucide-react';
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

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
    children: [
      { id: 'why-accuracy-matters', title: 'Why Financial Accuracy Matters' },
      { id: 'common-pitfalls', title: 'Common Financial Pitfalls' },
    ],
  },
  {
    id: 'fundamental-concepts',
    title: 'Fundamental Concepts',
    children: [
      { id: 'pl-vs-balance-sheet', title: 'P&L vs. Balance Sheet' },
      { id: 'cash-vs-accrual', title: 'Cash vs. Accrual Accounting' },
      { id: 'revenue-recognition', title: 'Revenue Recognition' },
      { id: 'add-backs', title: 'Add-Backs' },
      { id: 'sde-ebitda', title: 'SDE & Adjusted EBITDA' },
    ],
  },
  {
    id: 'income-statement',
    title: 'Income Statement Deep-Dive',
    children: [
      { id: 'revenue', title: 'Revenue' },
      { id: 'cogs', title: 'Cost of Goods Sold (COGS)' },
      { id: 'gross-margins', title: 'Gross Margins' },
      { id: 'opex', title: 'Operating Expenses' },
      { id: 'net-profit', title: 'Net Profit & Flow-Through' },
    ],
  },
  {
    id: 'reconciliation',
    title: 'Reconciliation Checklist',
  },
  {
    id: 'month-end-close',
    title: 'Month-End Close Calendar',
  },
  {
    id: 'data-integrity',
    title: 'Data Integrity Audit',
  },
  {
    id: 'hot-tips',
    title: 'Hot Tips & Common Mistakes',
  },
  {
    id: 'templates',
    title: 'Templates & Downloads',
  },
  {
    id: 'next-steps',
    title: 'Next Steps',
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
          description="Master financial reporting to maximize your business value. Get comprehensive guides, templates, and proven frameworks used by top M&A advisors to prepare clean, audit-ready financials."
          icon={FileText}
          backLink={{ href: '/', text: 'Back to Home' }}
          gradient="navy"
        />

        {/* Main Content with Sidebar TOC */}
        <section className="py-16 lg:py-20 bg-white">
          <Container>
            <div className="flex gap-12">
              {/* Sidebar TOC */}
              <aside className="w-64 flex-shrink-0">
                <TableOfContents items={tocItems} />
              </aside>

              {/* Main Content */}
              <div className="flex-1 max-w-4xl">
                
                {/* Introduction Section */}
                <div id="introduction" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Introduction</h2>
                  
                  {/* Why Financial Accuracy Matters */}
                  <div id="why-accuracy-matters" className="mb-12">
                    <h3 className="text-2xl font-semibold text-livmo-navy mb-4">
                      Why Pinpoint Financial Accuracy Is a Sellability Superpower
                    </h3>
                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                      <p className="mb-4">
                        Clean, reconciled numbers aren't just nice to have—they're the foundation of buyer confidence and premium valuations. Here's why financial accuracy matters more than almost anything else in M&A:
                      </p>

                      <div className="my-6 p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <span className="text-2xl mr-3">🎯</span>
                          First Impressions Are Everything
                        </h4>
                        <p className="text-gray-700 mb-0">
                          When buyers first review your financials, they're making snap judgments about your business sophistication. Clean books signal a well-run company. Messy financials raise immediate red flags about operational discipline.
                        </p>
                      </div>

                      <div className="my-6 p-6 bg-gold-50 border-l-4 border-livmo-gold rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <span className="text-2xl mr-3">⚡</span>
                          Value Creation Happens Fast
                        </h4>
                        <p className="text-gray-700 mb-3">
                          A tidy P&L can materially impact your valuation in under 60 minutes of focused review. We've seen businesses add meaningful value by simply:
                        </p>
                        <ul className="text-gray-700 space-y-1 mb-0">
                          <li>• Properly categorizing COGS vs. OpEx</li>
                          <li>• Documenting owner-related add-backs</li>
                          <li>• Reconciling the last 3 months of bank statements</li>
                        </ul>
                      </div>

                      <div className="my-6 p-6 bg-green-50 border-l-4 border-green-500 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <span className="text-2xl mr-3">🚀</span>
                          Clean Books Accelerate Everything
                        </h4>
                        <p className="text-gray-700 mb-2">
                          Organized reconciliations dramatically reduce back-and-forth during due diligence. What could take 90 days of painful data requests gets done in 30 days when your financials are audit-ready.
                        </p>
                        <p className="text-gray-700 mb-0">
                          <strong>Risk reduction = higher offers.</strong> Demonstrated control over revenue recognition and cost accounting minimizes perceived risk, which directly translates to better deal terms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Common Pitfalls */}
                  <div id="common-pitfalls" className="mb-12">
                    <h3 className="text-2xl font-semibold text-livmo-navy mb-6">
                      Common Financial Pitfalls
                    </h3>
                    <div className="grid gap-4">
                      <div className="p-6 bg-white border-l-4 border-red-500 rounded-md shadow-sm">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                          Mismatched Revenue Recognition vs. Cash Collection
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Revenue recorded doesn't align with cash collection or contract terms. This destroys buyer trust immediately and raises questions about your understanding of basic accounting principles.
                        </p>
                      </div>

                      <div className="p-6 bg-white border-l-4 border-red-500 rounded-md shadow-sm">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                          Incorrect Cost-of-Goods-Sold (COGS) Classification
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Mixing pass-through costs with core expenses or misclassifying operational costs as COGS inflates gross margins artificially. Buyers will catch this in diligence and may walk away.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Download CTA */}
                <div className="my-12 p-8 bg-blue-50 border border-blue-200 rounded-md">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-md bg-livmo-primary flex items-center justify-center">
                        <Download className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-livmo-navy mb-3">Download the Complete Toolkit</h3>
                      <p className="text-gray-700 mb-6">
                        Get all templates, checklists, and frameworks from this guide in one downloadable package. Includes Chart of Accounts, Revenue Recognition Policy, SaaS Metrics Template, and more.
                      </p>
                      <Link
                        href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-livmo-primary text-white font-semibold rounded-md hover:bg-livmo-navy transition-colors duration-150"
                      >
                        Download Templates
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Placeholder for remaining sections - will add next */}
                <div className="text-center py-12 text-gray-500">
                  <p>Additional sections being added...</p>
                  <p className="text-sm">Fundamental Concepts, Income Statement, Reconciliation, etc.</p>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-24 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4 tracking-tight">
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
              <p className="mt-6 text-sm text-gray-400">
                No sales pitch. Just actionable insights for your business.
              </p>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}
