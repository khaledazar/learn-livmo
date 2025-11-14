import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { Users, CheckCircle2, AlertTriangle, FileText } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hiring & Operational Maturity Roadmap | Build a Scalable Organization',
  description: 'Transform your business from founder-dependent to professionally managed. Gap-analysis worksheets, SOP templates, RACI charts, org structure best practices, and talent retention strategies for exit readiness.',
  keywords: [
    'operational maturity',
    'hiring roadmap',
    'SOP templates',
    'RACI chart',
    'organizational structure',
    'talent retention',
    'business scalability',
    'management team building',
    'operational excellence',
    'exit readiness operations'
  ],
  openGraph: {
    title: 'Hiring & Operational Maturity Roadmap',
    description: 'Build a scalable, professionally managed organization that buyers value.',
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
  description: 'Comprehensive guide to building operational maturity including gap-analysis, SOP templates, RACI charts, and talent retention strategies',
  url: 'https://learn.livmo.com/hiring-operations',
  keywords: ['operational maturity', 'hiring roadmap', 'SOP templates', 'RACI chart', 'organizational structure']
});

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
  },
  {
    id: 'maturity-assessment',
    title: 'Operational Maturity Assessment',
  },
  {
    id: 'org-structure',
    title: 'Organizational Structure',
  },
  {
    id: 'sop-documentation',
    title: 'SOP Documentation',
  },
  {
    id: 'raci-charts',
    title: 'RACI Charts & Accountability',
  },
  {
    id: 'hiring-roadmap',
    title: 'Strategic Hiring Roadmap',
  },
  {
    id: 'talent-retention',
    title: 'Talent Retention Strategies',
  },
  {
    id: 'common-gaps',
    title: 'Common Operational Gaps',
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
          subtitle="Build a Business That Runs Without You"
          description="Transform your founder-dependent operation into a professionally managed, scalable organization. Gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies to maximize exit value."
          icon={Users}
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
                      Buyers don't want to buy a job—they want to buy a business. If your company can't run without you for two weeks, it's not sellable at a premium. Operational maturity is about building systems, processes, and teams that make your business transferable and valuable.
                    </p>
                    <p className="mb-4">
                      This guide helps you identify operational gaps, build scalable processes, and create a management structure that buyers trust.
                    </p>

                    <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">
                        Why Operational Maturity Matters
                      </h4>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5 mb-0">
                        <li><strong>Valuation Multiple:</strong> Professionally managed businesses command 20-40% higher multiples</li>
                        <li><strong>Risk Reduction:</strong> Less key-person dependency = lower perceived risk for buyers</li>
                        <li><strong>Faster Close:</strong> Clean organizational structure speeds up due diligence</li>
                        <li><strong>Post-Exit Freedom:</strong> A business that runs without you gives you options (shorter transition, higher upfront cash)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Operational Maturity Assessment */}
                <div id="maturity-assessment" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Operational Maturity Assessment</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Use this self-assessment to identify where you are on the maturity curve and what needs work.
                  </p>

                  {/* Maturity Levels */}
                  <div className="space-y-6 mb-10">
                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Level 1: Founder-Dependent (Red Flag)</h3>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5">
                        <li>Founder handles all critical decisions, customer relationships, and operations</li>
                        <li>No documented processes—everything lives in the founder's head</li>
                        <li>Team can't make decisions without founder approval</li>
                        <li>Business would collapse if founder left for 30 days</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-700 italic">
                        <strong>Valuation Impact:</strong> 30-50% discount vs. mature businesses. Buyers see this as extremely high risk.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Level 2: Emerging Structure (Needs Work)</h3>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5">
                        <li>1-2 department heads in place (e.g., VP Sales, Head of Ops)</li>
                        <li>Some processes documented but not consistently followed</li>
                        <li>Founder still heavily involved in day-to-day but starting to delegate</li>
                        <li>Team can handle routine operations for 1-2 weeks without founder</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-700 italic">
                        <strong>Valuation Impact:</strong> 10-20% discount vs. mature businesses. Buyers see potential but risk remains.
                      </p>
                    </div>

                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">Level 3: Professionally Managed (Target State)</h3>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5">
                        <li>Full management team (COO, VP Sales, VP Product, VP Finance)</li>
                        <li>Documented SOPs for all critical processes</li>
                        <li>Clear RACI charts defining decision-making authority</li>
                        <li>Business runs smoothly for 30+ days without founder involvement</li>
                        <li>Established KPIs and reporting cadences</li>
                      </ul>
                      <p className="mt-3 text-sm text-gray-700 italic">
                        <strong>Valuation Impact:</strong> Premium multiples. Buyers see low risk and smooth transition.
                      </p>
                    </div>
                  </div>

                  {/* Gap Analysis Worksheet */}
                  <div className="p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Gap Analysis: Where Are You?</h3>
                    <p className="text-gray-700 mb-4">Score yourself on each dimension (1-5 scale):</p>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Leadership Team:</strong>
                          <p className="text-sm text-gray-600">1 = Founder only, 5 = Full C-suite or department heads</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Process Documentation:</strong>
                          <p className="text-sm text-gray-600">1 = Nothing documented, 5 = Comprehensive SOP library</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Decision-Making Clarity:</strong>
                          <p className="text-sm text-gray-600">1 = All decisions go through founder, 5 = Clear RACI charts and delegation</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Key Person Dependency:</strong>
                          <p className="text-sm text-gray-600">1 = Business would stop without founder, 5 = Business runs independently</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Reporting & KPIs:</strong>
                          <p className="text-sm text-gray-600">1 = No formal reporting, 5 = Weekly dashboards and metrics reviews</p>
                        </div>
                      </label>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Scoring:</strong> 20-25 = Level 3 (Premium), 10-19 = Level 2 (Work needed), 5-9 = Level 1 (High risk)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Organizational Structure */}
                <div id="org-structure" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Organizational Structure Best Practices</h2>
                  
                  {/* Org Chart for Different Stages */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Evolution of Org Structure by Company Size</h3>
                    
                    <div className="space-y-8">
                      {/* $0-$2M Revenue */}
                      <div className="p-6 bg-gray-50 border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">$0-$2M Revenue: Founder-Led</h4>
                        <p className="text-gray-700 mb-4">At this stage, founder wears many hats. Focus on hiring 1-2 critical roles to take operational load off your plate.</p>
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <p className="font-mono text-sm text-gray-700">
                            <strong>Founder/CEO</strong><br/>
                            ├─ Operations Manager (or Virtual Assistant)<br/>
                            ├─ Senior Developer/Engineer (if product company)<br/>
                            └─ Sales Rep or Customer Success Lead
                          </p>
                        </div>
                        <p className="mt-3 text-sm text-gray-700">
                          <strong>Key Hire:</strong> Operations Manager to handle admin, HR, and day-to-day coordination
                        </p>
                      </div>

                      {/* $2M-$5M Revenue */}
                      <div className="p-6 bg-gray-50 border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">$2M-$5M Revenue: Building Management Layer</h4>
                        <p className="text-gray-700 mb-4">Add department heads to own major functions. Founder transitions from doer to manager.</p>
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <p className="font-mono text-sm text-gray-700">
                            <strong>Founder/CEO</strong><br/>
                            ├─ <strong>VP Sales/Head of Revenue</strong><br/>
                            │  └─ Sales Team (2-4 reps)<br/>
                            ├─ <strong>Head of Product/Engineering</strong><br/>
                            │  └─ Engineering Team (3-6 developers)<br/>
                            ├─ <strong>Head of Customer Success</strong><br/>
                            │  └─ Support Team (2-3 people)<br/>
                            └─ <strong>Operations Manager/COO</strong><br/>
                               └─ Finance, HR, Admin
                          </p>
                        </div>
                        <p className="mt-3 text-sm text-gray-700">
                          <strong>Key Milestone:</strong> Founder no longer directly managing individual contributors
                        </p>
                      </div>

                      {/* $5M+ Revenue */}
                      <div className="p-6 bg-green-50 border border-green-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-3">$5M+ Revenue: Professional Management Team</h4>
                        <p className="text-gray-700 mb-4">Full C-suite or senior leadership team. Founder focuses on strategy, board management, and M&A.</p>
                        <div className="bg-white p-4 rounded border border-gray-200">
                          <p className="font-mono text-sm text-gray-700">
                            <strong>Founder/CEO</strong><br/>
                            ├─ <strong>COO</strong> (day-to-day operations)<br/>
                            ├─ <strong>CRO/VP Sales</strong> (revenue)<br/>
                            │  ├─ Sales Team<br/>
                            │  └─ Marketing Team<br/>
                            ├─ <strong>CTO/VP Engineering</strong> (product/tech)<br/>
                            │  ├─ Engineering<br/>
                            │  └─ Product Management<br/>
                            ├─ <strong>VP Customer Success</strong><br/>
                            │  ├─ Support<br/>
                            │  └─ Account Management<br/>
                            └─ <strong>CFO/VP Finance</strong><br/>
                               └─ Finance, Accounting, HR
                          </p>
                        </div>
                        <p className="mt-3 text-sm text-gray-700">
                          <strong>Exit Readiness:</strong> Business can run 30+ days without founder. Premium valuation territory.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Key Hiring Priorities */}
                  <div className="p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-3">Critical Hires for Exit Readiness</h4>
                    <ol className="space-y-2 list-decimal ml-5 text-gray-700">
                      <li><strong>COO or Operations Manager:</strong> Someone to run day-to-day so you can focus on growth and exit prep</li>
                      <li><strong>CFO or Finance Lead:</strong> Clean financials are table stakes—need someone to own this</li>
                      <li><strong>VP Sales/CRO:</strong> Buyers want to see repeatable sales process not dependent on founder relationships</li>
                      <li><strong>Head of Product/CTO:</strong> Product roadmap and technical decisions can't live only with founder</li>
                    </ol>
                  </div>
                </div>

                {/* SOP Documentation */}
                <div id="sop-documentation" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Standard Operating Procedures (SOPs)</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    SOPs document how your business runs. Buyers want to see that knowledge isn't trapped in people's heads.
                  </p>

                  {/* Why SOPs Matter */}
                  <div className="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                    <h4 className="font-semibold text-livmo-navy mb-2">Why SOPs Matter in M&A</h4>
                    <ul className="text-gray-700 space-y-2 list-disc ml-5">
                      <li>Buyers can understand how the business operates without relying on founder explanations</li>
                      <li>Reduces key-person dependency risk (what happens if someone leaves?)</li>
                      <li>Accelerates employee onboarding and training post-acquisition</li>
                      <li>Demonstrates operational maturity and process discipline</li>
                    </ul>
                  </div>

                  {/* SOP Templates */}
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Critical SOPs to Document</h3>
                    
                    <div className="space-y-4">
                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">1. Sales & Customer Onboarding</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Lead qualification process</li>
                          <li>Demo/discovery call script and process</li>
                          <li>Proposal and contract generation</li>
                          <li>Customer onboarding workflow (step-by-step)</li>
                          <li>Pricing and discount approval matrix</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">2. Customer Support & Success</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Ticket triage and escalation process</li>
                          <li>Response time SLAs by ticket priority</li>
                          <li>Customer health monitoring and intervention triggers</li>
                          <li>Renewal process and timeline</li>
                          <li>Churn prevention playbook</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">3. Product Development & Release</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Feature request intake and prioritization</li>
                          <li>Sprint planning and estimation process</li>
                          <li>QA and testing procedures</li>
                          <li>Deployment and rollback procedures</li>
                          <li>Incident response and on-call rotation</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">4. Finance & Accounting</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Month-end close checklist and timeline</li>
                          <li>Invoicing and collections process</li>
                          <li>Expense approval and reimbursement</li>
                          <li>Vendor payment scheduling</li>
                          <li>Revenue recognition policy (see <Link href="/financial-reporting" className="text-livmo-primary hover:underline">Financial Reporting Guide</Link>)</li>
                        </ul>
                      </div>

                      <div className="p-6 bg-white border border-gray-200 rounded-md">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">5. HR & People Operations</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5 text-sm">
                          <li>Hiring process (job posting, screening, interview, offer)</li>
                          <li>Employee onboarding checklist</li>
                          <li>Performance review cadence and format</li>
                          <li>Offboarding and exit interview process</li>
                          <li>PTO request and approval workflow</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* SOP Documentation Tips */}
                  <div className="p-6 bg-gray-50 rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-3">How to Document SOPs Efficiently</h4>
                    <ol className="space-y-2 list-decimal ml-5 text-gray-700">
                      <li><strong>Start with the most critical 5-10 processes</strong> (sales, support, product deployment, month-end close)</li>
                      <li><strong>Use simple formats:</strong> Google Docs, Notion, Confluence—don't overthink the tool</li>
                      <li><strong>Have the person doing the work document it</strong> (they know it best)</li>
                      <li><strong>Keep it simple:</strong> Step-by-step bullet points with screenshots where helpful</li>
                      <li><strong>Review & update quarterly</strong> as processes evolve</li>
                      <li><strong>Store in a centralized, searchable location</strong> (not scattered across Slack/email)</li>
                    </ol>
                  </div>
                </div>

                {/* RACI Charts */}
                <div id="raci-charts" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">RACI Charts & Accountability</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    RACI charts clarify who's Responsible, Accountable, Consulted, and Informed for each decision or process. This eliminates the "founder bottleneck" and demonstrates clear governance to buyers.
                  </p>

                  {/* RACI Definitions */}
                  <div className="mb-8 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">RACI Framework</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-livmo-navy mb-1">R = Responsible</p>
                        <p className="text-sm text-gray-700">Does the work to complete the task</p>
                      </div>
                      <div>
                        <p className="font-semibold text-livmo-navy mb-1">A = Accountable</p>
                        <p className="text-sm text-gray-700">Ultimately answerable for completion (only one "A" per task)</p>
                      </div>
                      <div>
                        <p className="font-semibold text-livmo-navy mb-1">C = Consulted</p>
                        <p className="text-sm text-gray-700">Provides input before decisions are made</p>
                      </div>
                      <div>
                        <p className="font-semibold text-livmo-navy mb-1">I = Informed</p>
                        <p className="text-sm text-gray-700">Kept in the loop after decisions are made</p>
                      </div>
                    </div>
                  </div>

                  {/* Sample RACI Chart */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">Sample RACI Chart</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white border border-gray-200 rounded-md text-sm">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-livmo-navy">Decision/Process</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-livmo-navy">CEO</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-livmo-navy">COO</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-livmo-navy">VP Sales</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-livmo-navy">CFO</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-700">
                          <tr>
                            <td className="border border-gray-200 px-4 py-3">Set Annual Strategic Plan</td>
                            <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><strong>A</strong></td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-3">Approve Major Customer Contracts (&gt;$50K)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><strong>A</strong></td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">R</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3">Hire Department Heads</td>
                            <td className="border border-gray-200 px-4 py-3 text-center bg-blue-50"><strong>A</strong></td>
                            <td className="border border-gray-200 px-4 py-3 text-center">R</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-3">Manage Day-to-Day Operations</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                            <td className="border border-gray-200 px-4 py-3 text-center bg-green-50"><strong>A/R</strong></td>
                            <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3">Monthly Financial Reporting</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                            <td className="border border-gray-200 px-4 py-3 text-center bg-purple-50"><strong>A/R</strong></td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-200 px-4 py-3">Product Roadmap Prioritization</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">I</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">C</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">-</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Key Decisions to RACI */}
                  <div className="p-6 bg-blue-50 border-l-4 border-livmo-primary rounded-md">
                    <h4 className="text-lg font-semibold text-livmo-navy mb-3">Critical Decisions to Document with RACI</h4>
                    <ul className="space-y-2 text-gray-700 list-disc ml-5">
                      <li>Annual budget approval</li>
                      <li>Major customer contract approval</li>
                      <li>Pricing and discount authority</li>
                      <li>Hiring and termination decisions</li>
                      <li>Product roadmap prioritization</li>
                      <li>Marketing campaign approval</li>
                      <li>Vendor contract negotiation and approval</li>
                      <li>Expense approval thresholds</li>
                    </ul>
                  </div>
                </div>

                {/* Strategic Hiring Roadmap */}
                <div id="hiring-roadmap" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Strategic Hiring Roadmap</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Plan your hiring strategically to build exit readiness. Here's a priority order based on typical business needs.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-primary text-white text-sm font-semibold rounded">Hire #1</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Operations Manager or Executive Assistant</h4>
                        <p className="text-gray-700 mb-2">
                          <strong>Why:</strong> Gets administrative/operational tasks off your plate so you can focus on growth and strategy.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Responsibilities:</strong> HR coordination, vendor management, meeting scheduling, project management, internal communications
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-gold text-livmo-navy text-sm font-semibold rounded">Hire #2</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Senior Sales Rep or VP Sales</h4>
                        <p className="text-gray-700 mb-2">
                          <strong>Why:</strong> Revenue growth is critical for exit valuation. Need repeatable sales process not dependent on founder.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Responsibilities:</strong> Own full sales cycle, build pipeline, close deals, document sales process, mentor junior reps
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded border border-green-300">Hire #3</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Finance/Accounting Lead or CFO</h4>
                        <p className="text-gray-700 mb-2">
                          <strong>Why:</strong> Clean financials are table stakes for M&A. Can't exit without proper financial management.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Responsibilities:</strong> Month-end close, financial reporting, budgeting, cash flow management, audit readiness (see <Link href="/financial-reporting" className="text-livmo-primary hover:underline">Financial Reporting Guide</Link>)
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded border border-purple-300">Hire #4</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Head of Customer Success</h4>
                        <p className="text-gray-700 mb-2">
                          <strong>Why:</strong> Retention is as important as acquisition. Buyers scrutinize churn heavily.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Responsibilities:</strong> Customer onboarding, health monitoring, renewals, expansion, support escalations
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-orange-100 text-orange-800 text-sm font-semibold rounded border border-orange-300">Hire #5</span>
                      </div>
                      <div className="flex-1 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">COO or General Manager</h4>
                        <p className="text-gray-700 mb-2">
                          <strong>Why:</strong> This is the "founder replacement" role that lets you step back from day-to-day operations.
                        </p>
                        <p className="text-sm text-gray-600">
                          <strong>Responsibilities:</strong> Run daily operations, coordinate across departments, execute on strategy, manage leadership team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Talent Retention */}
                <div id="talent-retention" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Talent Retention Strategies</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Buyers want to retain your key employees post-acquisition. High turnover during diligence or post-close destroys value.
                  </p>

                  {/* Retention Strategies */}
                  <div className="grid gap-6">
                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        1. Equity Incentives
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Strategy:</strong> Grant equity (stock options or RSUs) to key employees with 4-year vesting, 1-year cliff.
                      </p>
                      <p className="text-gray-700">
                        <strong>Why It Works:</strong> Aligns employee interests with long-term success. Buyers love to see vested equity keeping people motivated through acquisition.
                      </p>
                    </div>

                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        2. Transaction Bonuses
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Strategy:</strong> Set aside 5-10% of sale proceeds for key employee bonuses payable at close.
                      </p>
                      <p className="text-gray-700">
                        <strong>Why It Works:</strong> Creates excitement around the transaction and rewards loyalty through the stressful M&A process.
                      </p>
                    </div>

                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        3. Stay Bonuses (Post-Close)
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Strategy:</strong> Negotiate stay bonuses for critical employees (paid by buyer) if they remain 12-24 months post-close.
                      </p>
                      <p className="text-gray-700">
                        <strong>Why It Works:</strong> Bridges the uncertainty of new ownership and gives employees financial incentive to stick around.
                      </p>
                    </div>

                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        4. Transparent Communication
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Strategy:</strong> Be honest with key employees about M&A process timeline and what to expect (without violating NDA).
                      </p>
                      <p className="text-gray-700">
                        <strong>Why It Works:</strong> Reduces anxiety and rumors. Employees appreciate transparency and will be more likely to stay if they feel informed.
                      </p>
                    </div>

                    <div className="p-6 bg-green-50 border-l-4 border-green-600 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        5. Career Growth Opportunities
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Strategy:</strong> Frame acquisition as a career accelerator—access to larger budgets, bigger scope, new opportunities.
                      </p>
                      <p className="text-gray-700">
                        <strong>Why It Works:</strong> Ambitious employees see acquisition as upside, not risk. Helps retain top performers who might otherwise leave.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Common Operational Gaps */}
                <div id="common-gaps" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Common Operational Gaps</h2>

                  <div className="grid gap-6">
                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        1. Founder Bottleneck in Sales
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> All deals require founder involvement to close. Sales team can't operate independently.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Hire experienced VP Sales, document sales playbook, empower reps to close deals up to certain threshold without founder approval.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        2. No Documented Processes
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Critical workflows exist only in employees' heads. No SOPs documented.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Start with top 5-10 most critical processes. Have current owner document them. Review quarterly.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        3. Weak Management Layer
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Founder manages all individual contributors directly. No middle management.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Promote or hire department heads. Give them hiring/firing authority and budget ownership. Step back from day-to-day.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        4. High Employee Turnover
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Frequent departures of key employees signal cultural or compensation issues.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Conduct exit interviews, benchmark compensation, implement equity plans, improve onboarding and career development.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        5. Unclear Decision-Making Authority
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Everyone defers all decisions to founder. No empowerment.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Implement RACI charts. Set clear approval thresholds. Coach managers to make decisions independently.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                  <h2 className="text-2xl font-bold mb-4">Ready to Build a Business That Runs Without You?</h2>
                  <p className="text-gray-200 mb-6">
                    Operational maturity takes time to build. Our team can help you assess gaps, prioritize hires, and create a roadmap to exit readiness.
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
