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
            <div className="lg:flex gap-12">
              {/* Sidebar TOC */}
              <aside className="lg:w-64 flex-shrink-0 lg:self-start">
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
                        Clean, reconciled numbers aren't just nice to have—they're the foundation of buyer confidence and premium valuations. A well-structured P&L can literally <strong>add millions of dollars to your company's value</strong>. Here's why financial accuracy matters more than almost anything else in M&A:
                      </p>

                      <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">
                          First Impressions Are Everything
                        </h4>
                        <p className="text-gray-700 mb-0">
                          When buyers first review your financials, they're making snap judgments about your business sophistication. Clean books signal a well-run company. Messy financials raise immediate red flags about operational discipline.
                        </p>
                      </div>

                      <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-gold rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">
                          Value Creation Happens Fast
                        </h4>
                        <p className="text-gray-700 mb-3">
                          A tidy P&L can materially impact your valuation in under 60 minutes of focused review. We've seen businesses add meaningful value by simply:
                        </p>
                        <ul className="text-gray-700 space-y-1 mb-0 list-disc ml-5">
                          <li>Properly categorizing COGS vs. OpEx</li>
                          <li>Documenting owner-related add-backs</li>
                          <li>Reconciling the last 3 months of bank statements</li>
                        </ul>
                      </div>

                      <div className="my-6 p-6 bg-gray-50 border-l-4 border-green-600 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">
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

                    {/* Reference to P&L 101 Guide */}
                    <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-livmo-primary" />
                        Comprehensive Guide Available
                      </h4>
                      <p className="text-gray-700 mb-3">
                        For a complete deep-dive on how to structure your P&L to maximize exit valuation, see our comprehensive guide:
                      </p>
                      <Link
                        href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150"
                      >
                        The P&L 101: A Guide to Increasing Your Company's Exit Valuation
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
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
                        <p className="text-gray-600 text-sm mb-2">
                          Revenue recorded doesn't align with cash collection or contract terms. This destroys buyer trust immediately and raises questions about your understanding of basic accounting principles.
                        </p>
                        <p className="text-xs text-gray-500 italic">
                          Non-compliance with ASC 606 revenue standards can result in financial restatements that instantly derail a deal.
                        </p>
                      </div>

                      <div className="p-6 bg-white border-l-4 border-red-500 rounded-md shadow-sm">
                        <h4 className="font-semibold text-livmo-navy mb-2 flex items-center">
                          <AlertTriangle className="h-5 w-5 text-red-500 mr-2" />
                          Incorrect Cost-of-Goods-Sold (COGS) Classification
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          Mixing pass-through costs with core expenses or misclassifying operational costs as COGS inflates gross margins artificially. Buyers will catch this in diligence and may walk away.
                        </p>
                        <p className="text-xs text-gray-500 italic">
                          Poor cost categorization signals operational discipline issues and forces buyers to discount your valuation.
                        </p>
                      </div>
                    </div>

                    {/* Audit Readiness Reference */}
                    <div className="mt-6 p-6 bg-yellow-50 border border-yellow-200 rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">Avoiding Red Flags in Due Diligence</h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Learn how to identify and fix common red flags before they hurt your valuation. The Maxio Billing Playbook covers:
                      </p>
                      <ul className="text-sm text-gray-700 space-y-1 mb-3 list-disc ml-5">
                        <li>ASC 606 compliance and revenue recognition standards</li>
                        <li>Financial hygiene practices for audit readiness</li>
                        <li>Monthly reconciliation workflows</li>
                      </ul>
                      <Link
                        href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                      >
                        Startup_Billing_Playbook_Part_3_Maxio.pdf
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
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

                {/* Fundamental Concepts Section */}
                <div id="fundamental-concepts" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Fundamental Accounting Concepts</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Before diving into the details, let's establish a common understanding of key financial concepts that matter most in M&A.
                  </p>

                  {/* Concept 1: P&L vs Balance Sheet */}
                  <div id="pl-vs-balance-sheet" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. P&L vs. Balance Sheet
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy">What It Means:</strong>
                        <p className="ml-4">The P&L (Profit & Loss Statement) shows your business performance over a period—revenue, expenses, and profit. The Balance Sheet is a snapshot of your financial position at a specific moment—assets, liabilities, and equity.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Why It Matters:</strong>
                        <p className="ml-4">Buyers use the P&L to evaluate operational efficiency and growth. The Balance Sheet reveals stability and capital structure. Both must tell a consistent story.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Interrelation Example:</strong>
                        <p className="ml-4">Unearned revenue (deferred revenue) shows up as a liability on the Balance Sheet when you collect cash before delivering the service. As you deliver, it flows through the P&L as recognized revenue.</p>
                      </div>
                    </div>
                  </div>

                  {/* Concept 2: Cash vs Accrual */}
                  <div id="cash-vs-accrual" className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. Cash vs. Accrual Accounting
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy">What It Means:</strong>
                        <p className="ml-4"><strong>Cash accounting</strong> records revenue when payment is received and expenses when paid. <strong>Accrual accounting</strong> records revenue when earned and expenses when incurred, regardless of cash timing.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Why It Matters:</strong>
                        <p className="ml-4">GAAP (Generally Accepted Accounting Principles) requires accrual accounting for credible, comparable financials. Buyers expect it. Cash accounting can mask underlying business health.</p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                        <strong className="text-livmo-navy">Timing Impact Example:</strong>
                        <p className="mb-2 ml-4">You invoice a customer for $50K in December. They pay in January.</p>
                        <p className="ml-4">• Cash: Revenue appears in January (when paid)</p>
                        <p className="ml-4">• Accrual: Revenue appears in December (when earned)</p>
                      </div>
                    </div>
                  </div>

                  {/* Concept 3: Revenue Recognition */}
                  <div id="revenue-recognition" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Revenue Recognition
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy">What It Means:</strong>
                        <p className="ml-4">GAAP principles that determine when and how to record revenue. Different rules apply for recurring subscriptions vs. one-time projects.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Why It Matters:</strong>
                        <p className="ml-4">Proper revenue recognition shows the true health of your business. Mismatches are the #1 red flag for buyers.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-livmo-primary">
                        <strong className="text-livmo-navy">Real Example: $240K Annual SaaS Contract</strong>
                        <p className="ml-4 mt-2"><strong className="text-red-600">❌ Wrong:</strong> Record entire $240K in January when contract is signed</p>
                        <p className="ml-4"><strong className="text-green-600">✅ Right:</strong> Amortize over 12 months → $20K/month × 12 months</p>
                        <p className="ml-4 mt-2 text-sm italic">This matches revenue to the period when service is delivered, not when cash is collected.</p>
                      </div>

                      <div className="mt-4 p-4 bg-gray-50 rounded border border-gray-200">
                        <p className="text-sm text-gray-700 mb-2">
                          <strong>Deep Dive Available:</strong> For a comprehensive guide on revenue recognition and recurring revenue strategies that maximize valuation:
                        </p>
                        <Link
                          href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                        >
                          Exit Valuation Deep Dive: Unlocking Value with Revenue Recognition & Recurring Revenue
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Concept 4: Add-Backs */}
                  <div id="add-backs" className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      4. Add-Backs
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy">What It Means:</strong>
                        <p className="ml-4">Expenses that are added back to profit because they're one-time, non-recurring, or owner-specific. Common add-backs include owner perks, one-time costs, and non-cash charges.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Qualifying Items:</strong>
                        <ul className="ml-8 space-y-1 list-disc">
                          <li>Owner's personal vehicle expenses</li>
                          <li>One-time legal fees or restructuring costs</li>
                          <li>Above-market owner compensation</li>
                          <li>Family member salaries (if not market rate)</li>
                          <li>Non-cash charges (depreciation, amortization)</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                        <strong className="text-livmo-navy">⚠️ Transparency Imperative:</strong>
                        <p className="ml-4">Every add-back must be clearly documented and defensible. Buyers will scrutinize these heavily. Undisclosed or questionable add-backs destroy credibility.</p>
                      </div>
                    </div>
                  </div>

                  {/* Concept 5: SDE & EBITDA */}
                  <div id="sde-ebitda" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      5. SDE & Adjusted EBITDA
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy">Definitions:</strong>
                        <p className="ml-4"><strong>SDE (Seller's Discretionary Earnings):</strong> Net profit + owner salary + owner benefits + interest + taxes + depreciation + amortization</p>
                        <p className="ml-4 mt-2"><strong>Adjusted EBITDA:</strong> Similar to SDE but excludes owner salary (assumes buyer will hire a replacement)</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">When Each Is Used:</strong>
                        <p className="ml-4">• <strong>SDE:</strong> Typically for smaller businesses ($0-$5M revenue) where the owner is deeply involved</p>
                        <p className="ml-4">• <strong>Adjusted EBITDA:</strong> For larger businesses or when selling to a strategic buyer who won't replace the owner</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                        <strong className="text-livmo-navy">Buyer Focus:</strong>
                        <p className="ml-4">Both metrics help buyers compare operational efficiency across targets. Higher margins = higher multiples. Clean documentation = fewer questions.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Income Statement Deep-Dive Section */}
                <div id="income-statement" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Income Statement Deep-Dive</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Understanding every line of your P&L is critical for presenting clean financials to buyers. Here's how to optimize each section.
                  </p>

                  {/* Sample P&L Display */}
                  <div className="mb-10 p-6 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                    <h3 className="text-xl font-semibold mb-6">Sample Income Statement Anatomy</h3>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-md font-mono text-sm">
                      <div className="flex justify-between border-b border-white/20 pb-2 mb-4">
                        <span className="font-bold">INCOME STATEMENT</span>
                        <span className="text-gray-300">Sample SaaS Business</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="font-semibold">REVENUE</span>
                          <span className="font-bold">$1,200,000</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300">
                          <span>Recurring Revenue (ARR)</span>
                          <span>$1,000,000</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300 pb-2">
                          <span>Non-Recurring Revenue</span>
                          <span>$200,000</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-white/10">
                          <span className="font-semibold">COST OF GOODS SOLD</span>
                          <span className="font-bold">($300,000)</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300">
                          <span>Hosting & Infrastructure</span>
                          <span>$150,000</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300 pb-2">
                          <span>Support Staff Costs</span>
                          <span>$150,000</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 bg-white/10 px-4 rounded">
                          <span className="font-bold">GROSS PROFIT</span>
                          <div className="text-right">
                            <div className="font-bold">$900,000</div>
                            <div className="text-sm text-livmo-gold">75% Margin</div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center py-2 border-b border-white/10 mt-4">
                          <span className="font-semibold">OPERATING EXPENSES</span>
                          <span className="font-bold">($600,000)</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300">
                          <span>Sales & Marketing</span>
                          <span>$250,000</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300">
                          <span>Research & Development</span>
                          <span>$200,000</span>
                        </div>
                        <div className="flex justify-between pl-4 text-sm text-gray-300 pb-2">
                          <span>General & Administrative</span>
                          <span>$150,000</span>
                        </div>
                        
                        <div className="flex justify-between items-center py-3 bg-livmo-gold/20 px-4 rounded mt-4">
                          <span className="font-bold">NET PROFIT</span>
                          <div className="text-right">
                            <div className="font-bold">$300,000</div>
                            <div className="text-sm text-livmo-gold">25% Net Margin</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Revenue Deep-Dive */}
                  <div id="revenue" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Revenue - Deep Dive</h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Includes:</strong>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li><strong>Recurring Revenue:</strong> Subscriptions, SaaS contracts, retainers</li>
                          <li><strong>Non-Recurring Revenue:</strong> One-time services, setup fees, professional services</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                        <strong className="text-livmo-navy block mb-2">Why Segmentation Matters:</strong>
                        <p className="mb-3">Buyers pay premium multiples for recurring revenue because it's predictable. Clear segmentation demonstrates business model strength and revenue quality.</p>
                        <p className="text-sm italic">
                          <strong>Key Metric:</strong> Net Dollar Retention (NDR) and expansion revenue from usage-based or hybrid pricing models can significantly increase your valuation multiple. Learn more in{' '}
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-livmo-primary hover:text-livmo-navy font-semibold"
                          >
                            Startup_Billing_Playbook_Part_2_Maxio.pdf
                          </Link>
                        </p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Common Mistakes:</strong>
                        <ul className="ml-6 space-y-1 list-disc text-red-600">
                          <li>❌ Recording full contract value upfront instead of monthly recognition</li>
                          <li>❌ Mixing recurring and one-time revenue in a single line</li>
                          <li>❌ Not documenting revenue recognition policy</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-livmo-primary">
                        <strong className="text-livmo-navy block mb-2">✅ Best Practice:</strong>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li>Maintain separate MRR/ARR schedule outside of P&L</li>
                          <li>Reconcile MRR to P&L revenue monthly</li>
                          <li>Document all revenue recognition policies in writing</li>
                          <li>Show cohort analysis for recurring vs. one-time</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* COGS Deep-Dive */}
                  <div id="cogs" className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Cost of Goods Sold (COGS) - Deep Dive</h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Includes:</strong>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li>Hosting, infrastructure, and cloud costs directly tied to service delivery</li>
                          <li>Support staff salaries for customer-facing technical support</li>
                          <li>Third-party APIs or services required to deliver your product</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                        <strong className="text-livmo-navy block mb-2">⚠️ Categorization Warning:</strong>
                        <p>Avoid the "Consulting" catch-all. Buyers will dig into this and may perceive it as hidden costs or poor accounting discipline. Always itemize pass-through services and project-based costs separately.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">COGS vs. OpEx:</strong>
                        <p className="mb-2">A common mistake is mixing operational expenses into COGS. Here's the difference:</p>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li><strong>COGS:</strong> Costs that scale with revenue (hosting per customer, support hours)</li>
                          <li><strong>OpEx:</strong> Fixed costs that don't scale directly (office rent, executive salaries)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Gross Margins */}
                  <div id="gross-margins" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Gross Margins - Deep Dive</h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">Calculation:</strong>
                        <div className="bg-gray-100 p-4 rounded font-mono text-sm">
                          <p>Gross Margin ($) = Revenue - COGS</p>
                          <p>Gross Margin (%) = (Gross Margin $ / Revenue) × 100</p>
                          <p className="mt-2 text-green-600">Example: ($1.2M - $300K) / $1.2M = 75%</p>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                        <strong className="text-livmo-navy block mb-2">SaaS Benchmarks:</strong>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li><strong>Top Quartile SaaS:</strong> 75-85% gross margin</li>
                          <li><strong>Median SaaS:</strong> 65-75% gross margin</li>
                          <li><strong>Below 65%:</strong> Buyer questions on scalability</li>
                        </ul>
                        <p className="mt-2 italic text-sm">Higher margins = higher valuation multiples</p>
                      </div>
                    </div>
                  </div>

                  {/* Operating Expenses */}
                  <div id="opex" className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Operating Expenses (OpEx) - Deep Dive</h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">Core Buckets:</strong>
                        <ul className="ml-6 space-y-2 list-disc">
                          <li><strong>Sales & Marketing (S&M):</strong> Salaries, advertising, lead generation, sales tools</li>
                          <li><strong>Research & Development (R&D):</strong> Product development, engineering salaries, software licenses</li>
                          <li><strong>General & Administrative (G&A):</strong> Executive salaries, office rent, legal, accounting</li>
                        </ul>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">One-off Expenses to Call Out:</strong>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li>Litigation or legal settlements</li>
                          <li>Restructuring or severance costs</li>
                          <li>Owner personal expenses (clearly document for add-backs)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Net Profit */}
                  <div id="net-profit" className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Net Profit & Flow-Through - Deep Dive</h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What Drives Profit:</strong>
                        <p>Net profit is what remains after all operating expenses. It's determined by how efficiently you manage OpEx while maintaining revenue growth.</p>
                      </div>
                      <div className="bg-blue-50 p-4 rounded border-l-4 border-livmo-primary">
                        <strong className="text-livmo-navy block mb-2">Flow-Through & Valuation Impact:</strong>
                        <p>Flow-through measures how much of each incremental revenue dollar drops to the bottom line. Clean flow-through (minimal expense bloat) supports higher exit multiples because it shows operational efficiency.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reconciliation Checklist Section */}
                <div id="reconciliation" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Reconciliation Checklist</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Clean reconciliations are the foundation of buyer trust. Here are the four critical reconciliations every business should perform regularly.
                  </p>

                  {/* Bank-to-Book */}
                  <div className="mb-10 p-6 bg-white border-l-4 border-livmo-primary rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. Bank-to-Book Reconciliation
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Means:</strong>
                        <p>Match your bank statements to your general ledger to ensure every transaction is recorded accurately.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Why It Matters:</strong>
                        <p>This is the most fundamental reconciliation. Discrepancies here signal poor controls and raise immediate red flags.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <strong className="text-livmo-navy block mb-2">How To Do It:</strong>
                        <div className="space-y-2">
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 1:</strong> Download bank statement for the period</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 2:</strong> Compare ending balance to GL cash account</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 3:</strong> Identify and document all outstanding items (deposits in transit, outstanding checks)</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 4:</strong> Resolve discrepancies within 48 hours</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Frequency:</strong>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">Daily or Weekly</span>
                      </div>
                    </div>
                  </div>

                  {/* ARR/MRR vs Deposits */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. ARR/MRR vs. Deposits Reconciliation
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Means:</strong>
                        <p>Compare your MRR/ARR schedules against actual cash deposits to identify timing gaps, refunds, or churn.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Why It Matters:</strong>
                        <p>This reconciliation proves that your recurring revenue is real and collectible. Buyers scrutinize this heavily.</p>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <strong className="text-livmo-navy block mb-2">How To Do It:</strong>
                        <div className="space-y-2">
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 1:</strong> Pull MRR schedule from billing system</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 2:</strong> Compare to actual deposits for the same period</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 3:</strong> Identify timing gaps (annual vs. monthly billing, payment delays)</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 4:</strong> Document refunds, chargebacks, and churn</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Frequency:</strong>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">Monthly</span>
                      </div>
                    </div>
                  </div>

                  {/* Prepaids & Deferrals */}
                  <div className="mb-10 p-6 bg-white border-l-4 border-livmo-gold rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Prepaids & Deferrals Roll-forwards
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Means:</strong>
                        <p>Track all prepaid expenses and deferred revenues with roll-forward schedules showing beginning balance, additions, amortization, and ending balance.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Why It Matters:</strong>
                        <p>Proper deferral accounting is essential for accurate GAAP financials. This is a common area where buyers find issues.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded">
                        <strong className="text-livmo-navy block mb-2">How To Do It:</strong>
                        <div className="space-y-2">
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 1:</strong> List all prepaid expenses and deferred revenues</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 2:</strong> Create roll-forward schedule for each item</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 3:</strong> Post monthly amortization journal entries</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 4:</strong> Verify ending balances tie to Balance Sheet</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Frequency:</strong>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">Monthly</span>
                      </div>
                    </div>
                  </div>

                  {/* AR vs Revenue */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      4. Accounts Receivable vs. Revenue Booked
                    </h3>
                    <div className="space-y-4 text-gray-700">
                      <div>
                        <strong className="text-livmo-navy block mb-2">What It Means:</strong>
                        <p>Reconcile your AR aging to revenue booked on the P&L to ensure revenue recognition is accurate.</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Why It Matters:</strong>
                        <p>Stale AR (&gt;90 days) may indicate revenue recognition issues or collection problems—both major red flags.</p>
                      </div>
                      <div className="bg-white p-4 rounded border border-gray-200">
                        <strong className="text-livmo-navy block mb-2">How To Do It:</strong>
                        <div className="space-y-2">
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 1:</strong> Run AR aging report from your accounting system</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 2:</strong> Compare total AR to P&L revenue for the period</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 3:</strong> Identify and write off uncollectible receivables</span>
                          </label>
                          <label className="flex items-start gap-3">
                            <input type="checkbox" className="mt-1" disabled />
                            <span><strong>Step 4:</strong> Document collection efforts for overdue invoices</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <strong className="text-livmo-navy block mb-2">Frequency:</strong>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm font-semibold">Monthly</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hot Tips & Common Mistakes */}
                <div id="hot-tips" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Hot Tips & Common Mistakes</h2>
                  
                  <div className="grid gap-6">
                    {/* Consulting Catch-All */}
                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        "Consulting" Catch-All Traps
                      </h3>
                      <div className="text-gray-700">
                        <p className="mb-2"><strong className="text-red-600">Danger:</strong> Hiding true project costs in a generic "Consulting" expense line skews your gross margins and raises immediate questions.</p>
                        <p><strong className="text-green-600">Solution:</strong> Itemize all pass-through services by category (e.g., "Third-Party Development", "Contract Design Services"). Transparency builds trust.</p>
                      </div>
                    </div>

                    {/* Owner Expenses */}
                    <div className="p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        Transparent Owner-Expense Categorization
                      </h3>
                      <div className="text-gray-700">
                        <p className="mb-2"><strong className="text-red-600">Pitfall:</strong> Undisclosed owner perks (personal vehicles, family trips) reduce buyer trust when discovered.</p>
                        <p><strong className="text-green-600">Best Practice:</strong> Clearly label owner expenses in a separate line and document them for add-backs. Make it easy for buyers to adjust.</p>
                      </div>
                    </div>

                    {/* Quick Wins */}
                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        Quick-Win Blind-Spot Closures
                      </h3>
                      <div className="text-gray-700">
                        <p className="mb-2">Look for "$1M+/month" anomalies in your P&L detail view. These are usually:</p>
                        <ul className="ml-6 space-y-1 list-disc">
                          <li>Duplicate entries from accounting system migrations</li>
                          <li>Misclassified one-time revenues showing as recurring</li>
                          <li>Incorrectly capitalized expenses</li>
                        </ul>
                        <p className="mt-2"><strong className="text-green-600">Impact:</strong> Fixing these can immediately clean your financials and add credibility.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Templates & Downloads Section */}
                <div id="templates" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Templates & Downloads</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    All resources are available in our Google Drive folder. Download the files that are most relevant to your needs.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* P&L 101 Guide */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-livmo-primary/10 rounded-md flex items-center justify-center">
                          <FileText className="h-6 w-6 text-livmo-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">The P&L 101</h3>
                          <p className="text-sm text-gray-600 mb-4">A Guide to Increasing Your Company's Exit Valuation</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Download Google Doc <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Exit Valuation Deep Dive */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-livmo-gold/20 rounded-md flex items-center justify-center">
                          <TrendingUp className="h-6 w-6 text-livmo-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">Exit Valuation Deep Dive</h3>
                          <p className="text-sm text-gray-600 mb-4">Unlocking Value with Revenue Recognition & Recurring Revenue</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Download Google Doc <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Chart of Accounts - Excel */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-md flex items-center justify-center">
                          <FileSpreadsheet className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">SaaS Chart of Accounts (Detailed)</h3>
                          <p className="text-sm text-gray-600 mb-4">Complete Excel template with SaaS-specific account structure</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            SaaS_COA_Detailed_v3.xlsx <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Chart of Accounts - Text */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-md flex items-center justify-center">
                          <FileText className="h-6 w-6 text-livmo-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">Sample Chart of Accounts</h3>
                          <p className="text-sm text-gray-600 mb-4">Text-based reference for SaaS company account structure</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Sample Chart of Accounts for a SaaS Company.txt <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Billing Playbook Part 1 */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-md flex items-center justify-center">
                          <Download className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">Billing Playbook Part 1</h3>
                          <p className="text-sm text-gray-600 mb-4">Billing infrastructure and platform selection (Maxio)</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Startup_Billing_Playbook_Part_1_Maxio.pdf <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Billing Playbook Part 2 */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-md flex items-center justify-center">
                          <Download className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">Billing Playbook Part 2</h3>
                          <p className="text-sm text-gray-600 mb-4">Pricing strategies and usage-based models (Maxio)</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Startup_Billing_Playbook_Part_2_Maxio.pdf <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>

                    {/* Billing Playbook Part 3 */}
                    <div className="p-6 bg-white border border-gray-200 rounded-md hover:shadow-lg transition-shadow duration-150">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-purple-50 rounded-md flex items-center justify-center">
                          <Download className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-livmo-navy mb-2">Billing Playbook Part 3</h3>
                          <p className="text-sm text-gray-600 mb-4">Audit readiness and ASC 606 compliance (Maxio)</p>
                          <Link
                            href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-150 text-sm"
                          >
                            Startup_Billing_Playbook_Part_3_Maxio.pdf <ExternalLink className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* External Resources */}
                  <div className="mt-12 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">External Resources</h3>
                    <div className="space-y-4">
                      <div>
                        <Link
                          href="https://www.maxio.com/blog/top-red-flags-in-saas-financial-reporting"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-livmo-primary hover:text-livmo-navy font-semibold inline-flex items-center"
                        >
                          Maxio: Top Red Flags in SaaS Financial Reporting
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                        <p className="text-sm text-gray-600 mt-1">Learn about common pitfalls that buyers look for</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Steps CTA */}
                <div id="next-steps" className="mt-16 p-8 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                  <h2 className="text-2xl font-bold mb-4">Ready to Clean Up Your Financials?</h2>
                  <p className="text-gray-200 mb-6">
                    This guide covers the fundamentals. For a comprehensive deep-dive into Income Statement optimization, reconciliation workflows, and month-end close processes, download our complete toolkit or schedule a consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-colors duration-150"
                    >
                      Download Complete Toolkit
                      <Download className="ml-2 h-5 w-5" />
                    </Link>
                    <Link
                      href="https://go.livmo.com/meetings/go-livmo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-md hover:bg-white/20 transition-colors duration-150"
                    >
                      Book Consultation
                    </Link>
                  </div>
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
