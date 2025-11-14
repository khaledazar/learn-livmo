import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { Target, Building2, Briefcase, TrendingUp, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
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

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
  },
  {
    id: 'strategic-buyers',
    title: 'Strategic Buyers',
  },
  {
    id: 'financial-buyers',
    title: 'Financial Buyers (PE)',
  },
  {
    id: 'corporate-acquirers',
    title: 'Corporate Acquirers',
  },
  {
    id: 'comparison-table',
    title: 'Side-by-Side Comparison',
  },
  {
    id: 'decision-framework',
    title: 'Decision Framework',
  },
  {
    id: 'common-pitfalls',
    title: 'Common Pitfalls',
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
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      Not all buyers are created equal. The type of buyer you choose will dramatically impact your deal structure, valuation, post-close involvement, and ultimate success of your exit.
                    </p>
                    <p className="mb-4">
                      Understanding buyer motivations, deal preferences, and typical pitfalls helps you navigate conversations strategically and choose the right exit path for your goals.
                    </p>

                    <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">
                        Why Buyer Selection Matters
                      </h4>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5 mb-0">
                        <li><strong>Valuation:</strong> Strategic buyers often pay higher multiples than financial buyers</li>
                        <li><strong>Deal Structure:</strong> PE firms prefer earnouts; strategic buyers often prefer all-cash upfront</li>
                        <li><strong>Integration:</strong> Corporate acquirers may retain your team; PE firms may replace leadership</li>
                        <li><strong>Timeline:</strong> Smaller strategic buyers move fast; large corporates have slow approval processes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Strategic Buyers Section */}
                <div id="strategic-buyers" className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-livmo-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-livmo-primary" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline text-livmo-navy">Strategic Buyers</h2>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">What Are Strategic Buyers?</h3>
                    <p className="text-gray-700 mb-4">
                      Strategic buyers are operating companies in your industry (or adjacent industries) looking to acquire businesses for synergies, market share expansion, technology acquisition, or talent.
                    </p>
                    <p className="text-gray-700 mb-4">
                      They view your company as a <strong>strategic asset</strong> that enhances their existing operations, rather than purely as a financial investment.
                    </p>
                  </div>

                  {/* What They Value */}
                  <div className="mb-8 p-6 bg-blue-50 border border-blue-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">What Strategic Buyers Value Most</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Synergies:</strong> Revenue synergies (cross-sell opportunities), cost synergies (eliminate redundancies), operational synergies (combined teams)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Customer Base:</strong> Access to your customers for upselling their existing products
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Technology/IP:</strong> Proprietary technology that accelerates their roadmap or fills product gaps
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Talent:</strong> Skilled team members, especially engineering or product talent
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Market Share:</strong> Eliminating a competitor or consolidating market position
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Pros */}
                    <div className="p-6 bg-green-50 border border-green-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Higher Valuations:</strong> Often pay premium multiples (1.5x-3x higher than financial buyers) due to synergy value</li>
                        <li><strong>More Cash Upfront:</strong> Prefer all-cash or stock deals with less earnout dependency</li>
                        <li><strong>Faster Decisions:</strong> Smaller strategic buyers can move quickly (45-90 days to close)</li>
                        <li><strong>Less Invasive Diligence:</strong> Already understand your industry and business model</li>
                        <li><strong>Product/Market Fit:</strong> Can accelerate growth by integrating your product into their distribution</li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="p-6 bg-red-50 border border-red-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Culture Clash:</strong> Integration can be painful if cultures don't align</li>
                        <li><strong>Job Redundancy:</strong> Overlapping roles often result in layoffs (sales, support, admin)</li>
                        <li><strong>Loss of Autonomy:</strong> Your product may be absorbed into their roadmap and lose independence</li>
                        <li><strong>Earnout Risk:</strong> If synergy targets aren't met, earnouts may not pay out</li>
                        <li><strong>Competitive Concerns:</strong> They may be acquiring you to shut down a competing product</li>
                      </ul>
                    </div>
                  </div>

                  {/* Typical Deal Terms */}
                  <div className="p-6 bg-white border border-gray-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">Typical Deal Terms</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-livmo-navy">Valuation Multiple:</strong>
                        <p className="text-gray-700">4-8x EBITDA (or 2-6x Revenue for SaaS)</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Cash vs. Stock:</strong>
                        <p className="text-gray-700">60-100% cash at close</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Earnout:</strong>
                        <p className="text-gray-700">10-30% in earnout over 1-2 years</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Seller Involvement:</strong>
                        <p className="text-gray-700">6-24 months transition period</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Timeline:</strong>
                        <p className="text-gray-700">60-120 days to close</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Employment Req:</strong>
                        <p className="text-gray-700">Key employees retained for 1-2 years</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Financial Buyers (PE) Section */}
                <div id="financial-buyers" className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-6 w-6 text-purple-700" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline text-livmo-navy">Financial Buyers (Private Equity Firms)</h2>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">What Are Financial Buyers?</h3>
                    <p className="text-gray-700 mb-4">
                      Financial buyers—primarily private equity (PE) firms—view your business as a <strong>financial investment</strong>. They're looking for predictable cash flows, growth potential, and operational improvements they can execute over a 3-7 year hold period before exiting.
                    </p>
                    <p className="text-gray-700 mb-4">
                      PE firms typically buy majority stakes (70-100%) and take an active role in strategic decisions while retaining existing management.
                    </p>
                  </div>

                  {/* What They Value */}
                  <div className="mb-8 p-6 bg-purple-50 border border-purple-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">What Financial Buyers Value Most</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Predictable Cash Flow:</strong> Recurring revenue models (SaaS, subscriptions) with high retention
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Growth Potential:</strong> Clear path to 2-3x revenue growth over 3-5 years
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Operational Efficiency:</strong> Margin improvement opportunities through professionalization
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Management Team:</strong> Strong, autonomous team that can run the business without the founder
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Add-On Opportunities:</strong> Platform businesses they can bolt on smaller acquisitions to
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Pros */}
                    <div className="p-6 bg-green-50 border border-green-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Professional Growth:</strong> PE firms bring operational expertise, best practices, and capital to accelerate growth</li>
                        <li><strong>Seller Rollover:</strong> Option to retain 10-30% equity and participate in a second liquidity event</li>
                        <li><strong>Operational Independence:</strong> Management team remains largely intact and autonomous</li>
                        <li><strong>Predictable Process:</strong> PE firms are professional buyers with structured diligence processes</li>
                        <li><strong>Less Disruption:</strong> Business continuity is preserved—employees, customers, operations stay stable</li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="p-6 bg-red-50 border border-red-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Lower Upfront Cash:</strong> Typically 60-70% cash at close, with 20-30% in earnouts tied to performance</li>
                        <li><strong>Earnout Dependency:</strong> Risk of not hitting earnout targets, especially if market conditions change</li>
                        <li><strong>Seller Employment Requirement:</strong> Founders often required to stay 3-5 years post-close</li>
                        <li><strong>Aggressive Growth Targets:</strong> PE firms push for growth which can strain culture and operations</li>
                        <li><strong>Exit Pressure:</strong> PE firms will exit in 3-7 years, potentially forcing another sale or restructuring</li>
                      </ul>
                    </div>
                  </div>

                  {/* Typical Deal Terms */}
                  <div className="p-6 bg-white border border-gray-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">Typical Deal Terms</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-livmo-navy">Valuation Multiple:</strong>
                        <p className="text-gray-700">3-6x EBITDA (or 1-4x Revenue for SaaS)</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Cash vs. Earnout:</strong>
                        <p className="text-gray-700">60-70% cash, 20-30% earnout, 10% rollover equity</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Earnout:</strong>
                        <p className="text-gray-700">2-3 years, tied to revenue/EBITDA targets</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Seller Involvement:</strong>
                        <p className="text-gray-700">3-5 years as CEO or operator</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Timeline:</strong>
                        <p className="text-gray-700">90-150 days to close</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Management Equity:</strong>
                        <p className="text-gray-700">Management team receives equity incentive pool</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corporate Acquirers Section */}
                <div id="corporate-acquirers" className="mb-16">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="h-6 w-6 text-orange-600" />
                    </div>
                    <h2 className="text-3xl font-bold font-headline text-livmo-navy">Corporate Acquirers</h2>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">What Are Corporate Acquirers?</h3>
                    <p className="text-gray-700 mb-4">
                      Corporate acquirers are large, often publicly-traded companies looking to acquire businesses for <strong>innovation, technology, geographic expansion, or talent</strong>. They operate with significant resources but also complex approval processes.
                    </p>
                    <p className="text-gray-700 mb-4">
                      Think: Microsoft, Oracle, Salesforce, Adobe—large enterprises with M&A budgets seeking to "buy" rather than "build" capabilities.
                    </p>
                  </div>

                  {/* What They Value */}
                  <div className="mb-8 p-6 bg-orange-50 border border-orange-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">What Corporate Acquirers Value Most</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Innovation:</strong> Cutting-edge technology or product features that accelerate their roadmap
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Talent Acquisition:</strong> "Acqui-hires" for engineering, AI, or product teams
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Market Expansion:</strong> New verticals, geographies, or customer segments
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Competitive Defense:</strong> Acquiring potential threats before they become major competitors
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Distribution Leverage:</strong> Access to your customer base for cross-selling their suite
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Pros and Cons */}
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Pros */}
                    <div className="p-6 bg-green-50 border border-green-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Advantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Deep Pockets:</strong> Large enterprises can pay premium prices and offer stock upside</li>
                        <li><strong>Brand Recognition:</strong> Being acquired by a major brand brings credibility and validation</li>
                        <li><strong>Resources:</strong> Access to massive distribution, infrastructure, and capital for growth</li>
                        <li><strong>Talent Retention:</strong> Often retain and reward key employees with stock and bonuses</li>
                        <li><strong>Global Scale:</strong> Can take your product global overnight</li>
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="p-6 bg-red-50 border border-red-200 rounded-md">
                      <h4 className="text-lg font-semibold text-livmo-navy mb-4 flex items-center gap-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        Disadvantages
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-700 list-disc ml-5">
                        <li><strong>Slow Process:</strong> Corporate approval can take 6-12 months with multiple stakeholders</li>
                        <li><strong>Bureaucracy:</strong> Decision-making becomes painfully slow post-acquisition</li>
                        <li><strong>Integration Hell:</strong> Complex systems, processes, and culture integration challenges</li>
                        <li><strong>Product Vision Loss:</strong> Your product roadmap gets absorbed into their strategic priorities</li>
                        <li><strong>Deal Risk:</strong> Higher likelihood of deals falling apart due to internal politics or priority shifts</li>
                      </ul>
                    </div>
                  </div>

                  {/* Typical Deal Terms */}
                  <div className="p-6 bg-white border border-gray-200 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-4">Typical Deal Terms</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-livmo-navy">Valuation Multiple:</strong>
                        <p className="text-gray-700">5-10x EBITDA (or 3-8x Revenue for strategic tech)</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Cash vs. Stock:</strong>
                        <p className="text-gray-700">40-70% cash, 30-60% stock (if public company)</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Earnout:</strong>
                        <p className="text-gray-700">10-30% in earnout over 1-3 years</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Seller Involvement:</strong>
                        <p className="text-gray-700">1-3 years transition period</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Timeline:</strong>
                        <p className="text-gray-700">120-300 days to close</p>
                      </div>
                      <div>
                        <strong className="text-livmo-navy">Retention Bonuses:</strong>
                        <p className="text-gray-700">Key employees receive retention packages</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Comparison Table Section */}
                <div id="comparison-table" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Side-by-Side Comparison</h2>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white border border-gray-200 rounded-md text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-livmo-navy">Criteria</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-livmo-navy">Strategic Buyers</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-livmo-navy">Financial Buyers (PE)</th>
                          <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-livmo-navy">Corporate Acquirers</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-700">
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Typical Valuation</td>
                          <td className="border border-gray-200 px-4 py-3">4-8x EBITDA</td>
                          <td className="border border-gray-200 px-4 py-3">3-6x EBITDA</td>
                          <td className="border border-gray-200 px-4 py-3">5-10x EBITDA</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Cash at Close</td>
                          <td className="border border-gray-200 px-4 py-3">60-100%</td>
                          <td className="border border-gray-200 px-4 py-3">60-70%</td>
                          <td className="border border-gray-200 px-4 py-3">40-70%</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Earnout %</td>
                          <td className="border border-gray-200 px-4 py-3">10-30%</td>
                          <td className="border border-gray-200 px-4 py-3">20-30%</td>
                          <td className="border border-gray-200 px-4 py-3">10-30%</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Seller Employment</td>
                          <td className="border border-gray-200 px-4 py-3">6-24 months</td>
                          <td className="border border-gray-200 px-4 py-3">3-5 years</td>
                          <td className="border border-gray-200 px-4 py-3">1-3 years</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Timeline to Close</td>
                          <td className="border border-gray-200 px-4 py-3">60-120 days</td>
                          <td className="border border-gray-200 px-4 py-3">90-150 days</td>
                          <td className="border border-gray-200 px-4 py-3">120-300 days</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Integration Risk</td>
                          <td className="border border-gray-200 px-4 py-3">High</td>
                          <td className="border border-gray-200 px-4 py-3">Low</td>
                          <td className="border border-gray-200 px-4 py-3">Very High</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Operational Autonomy</td>
                          <td className="border border-gray-200 px-4 py-3">Low</td>
                          <td className="border border-gray-200 px-4 py-3">High</td>
                          <td className="border border-gray-200 px-4 py-3">Very Low</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-200 px-4 py-3 font-semibold">Team Retention</td>
                          <td className="border border-gray-200 px-4 py-3">Mixed</td>
                          <td className="border border-gray-200 px-4 py-3">High</td>
                          <td className="border border-gray-200 px-4 py-3">High (key talent)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Decision Framework Section */}
                <div id="decision-framework" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Decision Framework</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Use these questions to guide your buyer selection process.
                  </p>

                  <div className="space-y-6">
                    <div className="p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-3">Choose Strategic Buyers If:</h4>
                      <ul className="space-y-2 text-gray-700 list-disc ml-5">
                        <li>You want maximum upfront cash and are willing to accept integration risk</li>
                        <li>You're ready for a clean exit with minimal post-close involvement (6-12 months)</li>
                        <li>Your business has clear synergies with larger players in your industry</li>
                        <li>You're comfortable with potential team disruption and role redundancies</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-purple-50 border-l-4 border-purple-500 rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-3">Choose Financial Buyers (PE) If:</h4>
                      <ul className="space-y-2 text-gray-700 list-disc ml-5">
                        <li>You want to participate in future upside through rollover equity (10-30%)</li>
                        <li>You're willing to stay on for 3-5 years to build the business further</li>
                        <li>You value operational independence and want to preserve your team/culture</li>
                        <li>You have a clear growth plan and can hit aggressive targets</li>
                      </ul>
                    </div>

                    <div className="p-6 bg-orange-50 border-l-4 border-orange-500 rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-3">Choose Corporate Acquirers If:</h4>
                      <ul className="space-y-2 text-gray-700 list-disc ml-5">
                        <li>You want to take your product to global scale with massive resources</li>
                        <li>You're comfortable with a slower, more bureaucratic process (6-12 months)</li>
                        <li>Brand association with a major player matters to you and your team</li>
                        <li>You're building something strategically valuable to large enterprises</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Common Pitfalls Section */}
                <div id="common-pitfalls" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Common Pitfalls by Buyer Type</h2>

                  <div className="space-y-6">
                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Strategic Buyers: Culture Clash</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Your scrappy startup culture clashes with their corporate bureaucracy, causing key employees to leave.
                      </p>
                      <p className="text-gray-700">
                        <strong>Mitigation:</strong> Negotiate for operational independence during earnout period. Retain autonomy over hiring, product roadmap, and culture for at least 12-24 months.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Financial Buyers (PE): Earnout Disputes</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Earnout targets are missed due to market changes, PE-imposed cost cuts, or disputes over EBITDA calculations.
                      </p>
                      <p className="text-gray-700">
                        <strong>Mitigation:</strong> Negotiate crystal-clear earnout definitions with objective, auditable metrics. Include protections for "ordinary course" business decisions.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Corporate Acquirers: Deal Falls Apart</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> After 6 months of diligence, the deal is killed due to internal politics, budget cuts, or shifting priorities.
                      </p>
                      <p className="text-gray-700">
                        <strong>Mitigation:</strong> Negotiate a break-up fee or expense reimbursement clause. Continue running parallel buyer processes until you have a signed LOI with deposit.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">All Buyer Types: Over-Optimized for One Buyer</h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> You fall in love with one buyer and stop running a competitive process, losing negotiating leverage.
                      </p>
                      <p className="text-gray-700">
                        <strong>Mitigation:</strong> Always maintain competitive tension with at least 2-3 interested buyers through LOI stage. Leverage creates better deal terms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                  <h2 className="text-2xl font-bold mb-4">Need Help Evaluating Buyer Options?</h2>
                  <p className="text-gray-200 mb-6">
                    Choosing the right buyer is one of the most critical decisions in your exit journey. Our team can help you evaluate options and navigate buyer conversations strategically.
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

              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}
