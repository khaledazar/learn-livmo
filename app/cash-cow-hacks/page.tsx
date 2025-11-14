import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { Lightbulb, DollarSign, CheckCircle2, AlertTriangle, TrendingUp } from 'lucide-react';
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

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
  },
  {
    id: 'separate-personal',
    title: 'Separate Personal Expenses',
  },
  {
    id: 'reduce-owner-dependency',
    title: 'Reduce Owner Dependency',
  },
  {
    id: 'customer-concentration',
    title: 'Fix Customer Concentration',
  },
  {
    id: 'professionalize-operations',
    title: 'Professionalize Operations',
  },
  {
    id: 'revenue-model',
    title: 'Optimize Revenue Model',
  },
  {
    id: 'growth-narrative',
    title: 'Build a Growth Narrative',
  },
  {
    id: 'timeline',
    title: 'Transformation Timeline',
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
          subtitle="From Lifestyle Business to Exit-Ready Company"
          description="Practical strategies to transform your owner-dependent, cash-flowing business into a professionally managed, attractive acquisition target. Maximize valuation by fixing the issues buyers hate."
          icon={Lightbulb}
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
                      You've built a profitable business that throws off cash and funds your lifestyle. Congratulations—that's an achievement most entrepreneurs never reach. But there's a problem: lifestyle businesses are notoriously difficult to sell.
                    </p>
                    <p className="mb-4">
                      Why? Because buyers see them as <strong>"buying a job"</strong> rather than buying a business. The good news: with strategic changes over 6-18 months, you can transform your cash cow into a sellable asset worth 2-5x what it is today.
                    </p>

                    <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">
                        Why Lifestyle Businesses Get Discounted
                      </h4>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5 mb-0">
                        <li><strong>Owner Dependency:</strong> You are the business—all relationships, decisions, and expertise live with you</li>
                        <li><strong>Personal Expenses:</strong> Personal costs buried in the P&L make true profitability unclear</li>
                        <li><strong>No Systems:</strong> Processes live in your head, not in documented playbooks</li>
                        <li><strong>Customer Concentration:</strong> A few key customers represent most of your revenue</li>
                        <li><strong>Flat Growth:</strong> Business is stable but not growing, signaling limited upside</li>
                      </ul>
                    </div>

                    <div className="my-6 p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">
                        The Good News: You Can Fix This
                      </h4>
                      <p className="text-gray-700 mb-2">
                        Lifestyle businesses are actually <strong>easier to professionalize</strong> than chaotic startups because you have:
                      </p>
                      <ul className="text-gray-700 space-y-1 list-disc ml-5 mb-0">
                        <li>Cash flow to invest in hiring and systems</li>
                        <li>Proven business model (no product-market fit risk)</li>
                        <li>Existing customer relationships to transition</li>
                        <li>Operational stability to build upon</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Separate Personal Expenses */}
                <div id="separate-personal" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">1. Separate Personal Expenses</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    The first step to sellability is cleaning up your P&L. Buyers need to see true business profitability, not a mix of business and personal expenses.
                  </p>

                  {/* Common Personal Expenses */}
                  <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Common Personal Expenses Buried in P&L</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                      <ul className="space-y-2 list-disc ml-5">
                        <li>Personal vehicle expenses</li>
                        <li>Home office beyond reasonable allocation</li>
                        <li>Family members on payroll (not working)</li>
                        <li>Personal travel disguised as business</li>
                        <li>Country club memberships</li>
                      </ul>
                      <ul className="space-y-2 list-disc ml-5">
                        <li>Personal insurance premiums</li>
                        <li>Family cell phone plans</li>
                        <li>Owner's excessive salary vs. market rate</li>
                        <li>Personal legal or tax advisory</li>
                        <li>Personal entertainment and meals</li>
                      </ul>
                    </div>
                  </div>

                  {/* 3-Step Clean-Up Process */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">3-Step Clean-Up Process</h3>
                    
                    <div className="space-y-6">
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">
                          Step 1: Audit Last 12 Months
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Go through your P&L line-by-line and identify every personal expense or above-market owner perk. Be honest—buyers will find these during diligence.
                        </p>
                        <p className="text-sm text-gray-600 italic">
                          <strong>Tool:</strong> Use the <Link href="/financial-reporting" className="text-livmo-primary hover:underline">Financial Reporting Guide</Link> to understand proper expense categorization.
                        </p>
                      </div>

                      <div className="p-6 bg-gray-50 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">
                          Step 2: Create Add-Back Schedule
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Document all personal expenses in a clear "add-back" schedule. This shows buyers what the true profit would be if you remove these items.
                        </p>
                        <div className="mt-4 p-4 bg-white rounded border border-gray-200">
                          <p className="text-sm font-semibold text-livmo-navy mb-2">Example Add-Back Schedule:</p>
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200">
                                <th className="text-left py-2">Expense Category</th>
                                <th className="text-right py-2">Annual Amount</th>
                              </tr>
                            </thead>
                            <tbody className="text-gray-700">
                              <tr className="border-b border-gray-100">
                                <td className="py-2">Owner's personal vehicle lease</td>
                                <td className="text-right py-2">$12,000</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-2">Family cell phone plan</td>
                                <td className="text-right py-2">$3,600</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-2">Personal travel (non-business)</td>
                                <td className="text-right py-2">$8,000</td>
                              </tr>
                              <tr className="border-b border-gray-100">
                                <td className="py-2">Excess owner compensation</td>
                                <td className="text-right py-2">$30,000</td>
                              </tr>
                              <tr className="font-semibold">
                                <td className="py-2">Total Add-Backs</td>
                                <td className="text-right py-2 text-green-700">$53,600</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">
                          Step 3: Implement Going Forward
                        </h4>
                        <p className="text-gray-700 mb-3">
                          Stop running personal expenses through the business. Use a separate credit card or bank account for personal items. This makes future due diligence cleaner.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Implementation Tip:</strong> If you need personal perks for tax planning, document them clearly with proper accounting treatment. Transparency is key.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Impact on Valuation */}
                  <div className="p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-2">Valuation Impact</h4>
                    <p className="text-gray-700 mb-3">
                      If you have $50K in annual add-backs and buyers are willing to pay 4x EBITDA, that's <strong>$200K in additional valuation</strong> by simply cleaning up your P&L.
                    </p>
                    <p className="text-sm text-gray-700 italic">
                      And that's assuming buyers believe your add-back schedule. Documenting it properly eliminates negotiation friction.
                    </p>
                  </div>
                </div>

                {/* Reduce Owner Dependency */}
                <div id="reduce-owner-dependency" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">2. Reduce Owner Dependency</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    If you're the only person who can close deals, manage operations, or maintain customer relationships, your business isn't sellable—it's a job.
                  </p>

                  {/* Owner Dependency Self-Assessment */}
                  <div className="mb-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Owner Dependency Red Flags</h3>
                    <p className="text-gray-700 mb-4">Check all that apply to your business:</p>
                    <div className="space-y-2">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <span className="text-gray-700">All major customer relationships are personal relationships with you</span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <span className="text-gray-700">You're involved in every sales deal from start to close</span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <span className="text-gray-700">Critical processes and decisions exist only in your head</span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <span className="text-gray-700">Your team can't operate independently for more than 1-2 weeks</span>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <span className="text-gray-700">You handle all vendor relationships and negotiations</span>
                      </label>
                    </div>
                    <p className="mt-4 text-sm text-gray-700 italic">
                      <strong>If you checked 3+:</strong> You have severe owner dependency. This will dramatically reduce your valuation or make the business unsellable.
                    </p>
                  </div>

                  {/* 5 Strategies to Reduce Dependency */}
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 1: Hire a "Mini-You"
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Hire an Operations Manager, COO, or General Manager who can handle day-to-day decisions without you. This person becomes the buyer's point of contact post-close.
                      </p>
                      <p className="text-sm text-gray-600 italic">
                        See our <Link href="/hiring-operations" className="text-livmo-primary hover:underline">Hiring & Operational Maturity Guide</Link> for hiring roadmap.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 2: Transition Customer Relationships
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Systematically introduce customers to your team members (sales rep, account manager, support lead) over 6-12 months. Make them the primary contacts, not you.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Implementation:</strong> Include team members on all customer calls, cc them on emails, have them lead renewal conversations.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 3: Document Everything
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Create SOPs for every critical process. Sales playbooks, onboarding workflows, support escalation procedures, vendor management processes—everything.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Goal:</strong> Someone could step into your role with 2 weeks of training using your documentation.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 4: Empower Your Team
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Give decision-making authority to your team. Set approval thresholds (e.g., sales can approve discounts up to 15%, ops can approve expenses up to $5K without you).
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Mindset Shift:</strong> Your goal is to become unnecessary in daily operations.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 5: Test Independence
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Take a 2-week vacation and be completely unreachable. See what breaks. Fix those processes, then try again for 4 weeks. Repeat until the business runs smoothly.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Benchmark:</strong> If your business can run 30+ days without you, you've achieved exit-ready independence.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Customer Concentration */}
                <div id="customer-concentration" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">3. Fix Customer Concentration Risk</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    If your top 3 customers represent 50%+ of revenue, buyers see massive risk. Losing one customer could cripple the business.
                  </p>

                  {/* Concentration Thresholds */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Customer Concentration Risk Levels</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                        <p className="text-sm text-gray-700">
                          <strong className="text-red-700">High Risk:</strong> Top customer represents &gt;25% of revenue, or top 3 represent &gt;50%
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Valuation Impact: 30-50% discount or deal-killer</p>
                      </div>
                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                        <p className="text-sm text-gray-700">
                          <strong className="text-yellow-700">Moderate Risk:</strong> Top customer 15-25% of revenue, or top 3 represent 35-50%
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Valuation Impact: 10-20% discount</p>
                      </div>
                      <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded">
                        <p className="text-sm text-gray-700">
                          <strong className="text-green-700">Low Risk:</strong> Top customer &lt;15% of revenue, top 3 &lt;35%
                        </p>
                        <p className="text-xs text-gray-600 mt-1">Valuation Impact: No discount</p>
                      </div>
                    </div>
                  </div>

                  {/* Solutions */}
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Solution 1: Diversify Customer Base (12-24 Month Plan)
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Aggressively acquire new customers to reduce concentration over time. Invest in marketing, hire sales reps, expand channels.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Goal:</strong> Add 10-20 new customers over next 18 months to dilute top customer percentage.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Solution 2: Secure Long-Term Contracts
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Get key customers on 2-3 year contracts with auto-renewal clauses. This mitigates risk for buyers by providing revenue certainty.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Negotiation Tip:</strong> Offer a discount (5-10%) for multi-year commitments.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Solution 3: Demonstrate Low Churn
                      </h3>
                      <p className="text-gray-700 mb-3">
                        Show buyers that your customer retention is excellent (95%+ annual retention). High retention reduces perceived risk even with concentration.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Data to Prepare:</strong> 3-year customer retention cohort analysis, customer satisfaction scores, renewal rates.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Solution 4: Obtain Customer Letters of Intent
                      </h3>
                      <p className="text-gray-700 mb-3">
                        If possible, get written confirmation from top customers that they'll continue the relationship post-acquisition. This significantly reduces buyer concern.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Timing:</strong> Request these once you have a signed LOI with a buyer.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Professionalize Operations */}
                <div id="professionalize-operations" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">4. Professionalize Operations</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Buyers want to see professional management, not seat-of-the-pants operations. Small changes can dramatically improve perception.
                  </p>

                  {/* Quick Wins */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Quick Wins (30-60 Days)</h3>
                    <div className="grid gap-4">
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-livmo-navy mb-1">Create an Org Chart</p>
                            <p className="text-sm text-gray-700">Even if you only have 3-5 employees, create a formal org chart showing reporting structure.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-livmo-navy mb-1">Implement Weekly Management Meetings</p>
                            <p className="text-sm text-gray-700">Even 30-minute standups with key team members show operational discipline.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-livmo-navy mb-1">Set Up Basic KPI Dashboard</p>
                            <p className="text-sm text-gray-700">Track 5-10 key metrics (MRR, churn, CAC, LTV, gross margin) in a simple spreadsheet or tool.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-livmo-navy mb-1">Clean Up Your Website & Branding</p>
                            <p className="text-sm text-gray-700">Professional website, updated LinkedIn profiles, consistent branding—first impressions matter.</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 border border-green-200 rounded-md">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-livmo-navy mb-1">Separate Business & Personal Email</p>
                            <p className="text-sm text-gray-700">Use professional domain emails (@yourcompany.com) not Gmail/Yahoo personal accounts.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Medium-Term Improvements */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Medium-Term Improvements (3-6 Months)</h3>
                    <div className="space-y-4">
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">Implement CRM</h4>
                        <p className="text-sm text-gray-700">Move customer data from spreadsheets to a proper CRM (HubSpot, Salesforce, Pipedrive). Shows sales process maturity.</p>
                      </div>
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">Formalize Employment Agreements</h4>
                        <p className="text-sm text-gray-700">Get all employees on written offer letters or employment agreements. Document IP assignment and confidentiality clauses.</p>
                      </div>
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">Create Board of Advisors</h4>
                        <p className="text-sm text-gray-700">Even if informal, having 2-3 advisors you meet with quarterly shows strategic thinking and governance.</p>
                      </div>
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="font-semibold text-livmo-navy mb-2">Document Policies & Procedures</h4>
                        <p className="text-sm text-gray-700">Create an employee handbook with basic policies (PTO, expenses, code of conduct). Signals HR professionalism.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Model Optimization */}
                <div id="revenue-model" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">5. Optimize Your Revenue Model</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Recurring revenue is king. If you can shift to subscription or recurring models, your valuation multiple can double.
                  </p>

                  {/* Valuation Multiple Comparison */}
                  <div className="mb-10 p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Revenue Model Valuation Impact</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between items-center">
                        <span><strong>One-Time Project Revenue:</strong></span>
                        <span className="font-mono">1-2x Revenue</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>Recurring Service Contracts:</strong></span>
                        <span className="font-mono">2-4x Revenue</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span><strong>SaaS Subscription (High Retention):</strong></span>
                        <span className="font-mono text-green-700 font-semibold">4-8x Revenue</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 mt-4 italic">
                      <strong>Example:</strong> A business with $1M in revenue valued at 2x = $2M. Same business with recurring model valued at 5x = $5M.
                    </p>
                  </div>

                  {/* Strategies to Add Recurring Revenue */}
                  <div className="space-y-6">
                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 1: Convert Customers to Retainers
                      </h3>
                      <p className="text-gray-700 mb-2">
                        If you do project work, offer monthly retainer packages with guaranteed availability and priority support.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Value Prop:</strong> Predictable monthly fee in exchange for faster response times and dedicated capacity.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 2: Add Maintenance/Support Plans
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Sell ongoing maintenance, updates, monitoring, or support as a monthly/annual subscription.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> Website design agency adds $500/month maintenance plans for hosting, updates, and support.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-gray-200 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 3: Productize Your Service
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Turn custom services into standardized packages or software tools that customers can subscribe to.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Example:</strong> Marketing agency creates a "content subscription" delivering X posts/month for a fixed fee.
                      </p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-md">
                      <h3 className="text-lg font-semibold text-livmo-navy mb-3">
                        Strategy 4: Offer Annual Prepayments
                      </h3>
                      <p className="text-gray-700 mb-2">
                        Even if you can't do true subscriptions, get customers to commit to annual contracts paid upfront. This creates revenue predictability buyers value.
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Incentive:</strong> Offer 10-15% discount for annual prepayment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Growth Narrative */}
                <div id="growth-narrative" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">6. Build a Credible Growth Narrative</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Buyers pay for future potential, not just historical performance. Even stable businesses need a growth story.
                  </p>

                  {/* Growth Story Components */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">What Makes a Strong Growth Narrative</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Untapped Market Opportunities:</strong> "We currently serve X market, but adjacent market Y is 3x the size and we can expand there with minimal investment."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Product Roadmap:</strong> "We have 3 new features in development that will unlock upsell opportunities worth $X per customer."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Geographic Expansion:</strong> "Currently only operating in US, but Canada/UK/Europe are natural expansion markets."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Sales & Marketing Investment:</strong> "With proper sales team and marketing budget, we could 2x customer acquisition in 18 months."
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <strong>Operational Leverage:</strong> "Fixed costs are already in place. Incremental revenue will flow through at 80%+ margin."
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* How to Present Growth Story */}
                  <div className="p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">How to Present Your Growth Story</h3>
                    <ol className="space-y-3 list-decimal ml-5 text-gray-700">
                      <li>
                        <strong>Create a 3-Year Financial Projection</strong> showing realistic growth (15-30% annually is credible for mature businesses)
                      </li>
                      <li>
                        <strong>Document the "Why"</strong> behind each growth assumption (new product launch, sales hire, marketing spend)
                      </li>
                      <li>
                        <strong>Show Early Validation</strong> (e.g., "We tested this new product with 5 customers, 4 said they'd buy it at $X/month")
                      </li>
                      <li>
                        <strong>Be Conservative</strong> but show upside scenarios (Base Case: 20% growth, Bull Case: 40% growth)
                      </li>
                      <li>
                        <strong>Connect to Buyer's Capabilities</strong> ("With your distribution, we could accelerate this by 2x")
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Transformation Timeline */}
                <div id="timeline" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Transformation Timeline</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Realistic roadmap to transform your lifestyle business into a sellable asset.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-primary text-white text-sm font-semibold rounded">Months 1-3</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Assessment & Quick Wins</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Audit P&L and create add-back schedule</li>
                          <li>Stop running personal expenses through business</li>
                          <li>Create org chart and basic SOPs</li>
                          <li>Set up KPI dashboard</li>
                          <li>Start looking for Operations Manager hire</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-gold text-livmo-navy text-sm font-semibold rounded">Months 4-9</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Team Building & Systematization</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Hire Operations Manager and/or VP Sales</li>
                          <li>Document critical processes and playbooks</li>
                          <li>Transition customer relationships to team</li>
                          <li>Implement CRM and professional systems</li>
                          <li>Test 2-week vacation without contact</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded border border-green-300">Months 10-18</span>
                      </div>
                      <div className="flex-1 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Growth & Exit Prep</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Launch new recurring revenue initiatives</li>
                          <li>Diversify customer base to reduce concentration</li>
                          <li>Build growth narrative and 3-year projections</li>
                          <li>Get financials audit-ready</li>
                          <li>Test 4-week vacation—business runs independently</li>
                          <li>Engage M&A advisor or broker to start exit process</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                  <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
                  <p className="text-gray-200 mb-6">
                    The journey from lifestyle business to exit-ready company takes commitment, but the valuation increase makes it worth every effort. Our team can help you assess where you are and build a roadmap to get there.
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
