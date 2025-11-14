import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { Scale, FileText, Shield, AlertTriangle, CheckCircle2, Building2, Briefcase } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal Due Diligence Audit Kit | M&A Document Preparation Checklist',
  description: 'Complete legal due diligence toolkit for business exits. Checklists for corporate docs, IP filings, key contracts, NDAs, vendor agreements, and clean-up workflows to prepare for M&A.',
  keywords: [
    'legal due diligence checklist',
    'M&A legal preparation',
    'corporate documents audit',
    'IP filings checklist',
    'contract review M&A',
    'business sale legal prep',
    'due diligence audit kit',
    'legal readiness exit'
  ],
  openGraph: {
    title: 'Legal Due Diligence Audit Kit - M&A Document Prep',
    description: 'Complete toolkit with checklists and trackers for legal due diligence readiness.',
    url: 'https://learn.livmo.com/legal-due-diligence',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/legal-due-diligence',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'Legal Due Diligence Audit Kit', url: 'https://learn.livmo.com/legal-due-diligence' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'Legal Due Diligence Audit Kit',
  description: 'Comprehensive legal due diligence toolkit including checklists for corporate documents, IP filings, contracts, and common gap clean-up workflows',
  url: 'https://learn.livmo.com/legal-due-diligence',
  keywords: ['legal due diligence', 'M&A preparation', 'corporate documents', 'IP audit', 'contract review']
});

const tocItems = [
  {
    id: 'introduction',
    title: 'Introduction',
  },
  {
    id: 'corporate-documents',
    title: 'Corporate Documents',
  },
  {
    id: 'ip-filings',
    title: 'Intellectual Property',
  },
  {
    id: 'key-contracts',
    title: 'Key Contracts',
  },
  {
    id: 'employment-agreements',
    title: 'Employment & HR',
  },
  {
    id: 'common-gaps',
    title: 'Common Legal Gaps',
  },
  {
    id: 'cleanup-workflows',
    title: 'Clean-Up Workflows',
  },
  {
    id: 'timeline',
    title: 'Preparation Timeline',
  },
];

export default function LegalDueDiligencePage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'Legal Readiness' }}
          title="Legal Due Diligence Audit Kit"
          subtitle="Be Prepared for Buyer Scrutiny"
          description="Comprehensive checklists and trackers for corporate docs, IP filings, key contracts, and common gap clean-up workflows. Avoid deal-killing legal surprises before buyers arrive."
          icon={Scale}
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
                      Legal due diligence is where deals die. Missing documents, unclear IP ownership, problematic contract clauses—these issues can derail an otherwise perfect transaction or severely discount your valuation.
                    </p>
                    <p className="mb-4">
                      This audit kit helps you identify and resolve legal gaps <strong>before</strong> buyers start asking questions. Being proactive with legal readiness demonstrates operational maturity and significantly accelerates the deal timeline.
                    </p>

                    <div className="my-6 p-6 bg-gray-50 border-l-4 border-livmo-primary rounded-md">
                      <h4 className="font-semibold text-livmo-navy mb-2">
                        Why Legal Readiness Matters
                      </h4>
                      <ul className="text-gray-700 space-y-2 list-disc ml-5 mb-0">
                        <li><strong>Speed:</strong> Clean legal documentation can reduce due diligence from 90 days to 30 days</li>
                        <li><strong>Confidence:</strong> Organized legal files signal a well-run business to buyers</li>
                        <li><strong>Valuation Protection:</strong> Legal issues discovered late can result in price reductions or deal termination</li>
                        <li><strong>Negotiating Power:</strong> Being prepared gives you leverage in negotiations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Corporate Documents Section */}
                <div id="corporate-documents" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Corporate Documents Checklist</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Buyers will request these corporate formation and governance documents immediately. Having them organized and accessible is table stakes.
                  </p>

                  {/* Formation Documents */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. Formation Documents
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Certificate of Incorporation</strong>
                          <p className="text-sm text-gray-600">Original filing with the state, including all amendments</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Bylaws (C-Corp) or Operating Agreement (LLC)</strong>
                          <p className="text-sm text-gray-600">Current version with all amendments documented</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Good Standing Certificate</strong>
                          <p className="text-sm text-gray-600">Recent certificate from the state (within last 30 days)</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Foreign Qualification Documents</strong>
                          <p className="text-sm text-gray-600">If operating in multiple states</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Governance Documents */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. Governance & Meeting Records
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Board of Directors Minutes</strong>
                          <p className="text-sm text-gray-600">Complete minutes from all board meetings since inception</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Shareholder/Member Meeting Minutes</strong>
                          <p className="text-sm text-gray-600">All formal shareholder meetings and written consents</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Board Resolutions</strong>
                          <p className="text-sm text-gray-600">Major decisions: financing, acquisitions, officer appointments</p>
                        </div>
                      </label>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Common Gap:</strong> Many small companies have informal governance. If minutes are missing, create retroactive minutes documenting major decisions with board/shareholder approval now.
                      </p>
                    </div>
                  </div>

                  {/* Cap Table */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Capitalization Table (Cap Table)
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Current Cap Table</strong>
                          <p className="text-sm text-gray-600">Detailed breakdown of all equity ownership (common, preferred, options, warrants)</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Stock Certificates</strong>
                          <p className="text-sm text-gray-600">All issued stock certificates or electronic records</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Stock Purchase Agreements</strong>
                          <p className="text-sm text-gray-600">All agreements for issuance of equity</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Stock Option Plan & Grants</strong>
                          <p className="text-sm text-gray-600">Option plan document, board approvals, individual option grants</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Vesting Schedules</strong>
                          <p className="text-sm text-gray-600">Documentation of vesting for founders and employees</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Shareholder Agreements */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      4. Shareholder/Investor Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Shareholders Agreement</strong>
                          <p className="text-sm text-gray-600">Buy-sell provisions, drag-along, tag-along rights</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Investors' Rights Agreement</strong>
                          <p className="text-sm text-gray-600">Board seats, information rights, registration rights</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Right of First Refusal/Co-Sale Agreement</strong>
                          <p className="text-sm text-gray-600">ROFR and co-sale provisions</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Voting Agreements</strong>
                          <p className="text-sm text-gray-600">Any agreements affecting voting rights</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* IP Section */}
                <div id="ip-filings" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Intellectual Property Filings</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Clear IP ownership is critical. Buyers need proof that your company owns all the IP necessary to operate the business.
                  </p>

                  {/* Patents & Trademarks */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. Patents, Trademarks & Copyrights
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Patent List</strong>
                          <p className="text-sm text-gray-600">All issued patents and pending applications with filing/registration numbers</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Trademark Registrations</strong>
                          <p className="text-sm text-gray-600">Registered trademarks (USPTO and international)</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Copyright Registrations</strong>
                          <p className="text-sm text-gray-600">Registered copyrights for software, content, designs</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Domain Names</strong>
                          <p className="text-sm text-gray-600">List of all owned domains with registrar information</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* IP Assignments */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. IP Assignment Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Founder IP Assignments</strong>
                          <p className="text-sm text-gray-600">All founders must have signed IP assignment agreements</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Employee IP Assignments</strong>
                          <p className="text-sm text-gray-600">IP assignment provisions in all employment agreements or separate assignment agreements</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Contractor IP Assignments</strong>
                          <p className="text-sm text-gray-600">Work-for-hire or assignment provisions for all contractors and consultants</p>
                        </div>
                      </label>
                    </div>

                    <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 rounded">
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Critical Issue:</strong> Missing IP assignments are a deal killer. Buyers will not close without clear IP ownership.
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Fix:</strong> If you have contractors or employees without IP assignments, get them signed immediately. For departed employees/contractors, track them down and obtain retroactive assignments.
                      </p>
                    </div>
                  </div>

                  {/* Open Source */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Open Source Software Audit
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Open Source Component List</strong>
                          <p className="text-sm text-gray-600">Inventory of all open source software used in your products</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">License Compliance Documentation</strong>
                          <p className="text-sm text-gray-600">Verify compliance with open source licenses (MIT, Apache, GPL, etc.)</p>
                        </div>
                      </label>
                    </div>

                    <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <p className="text-sm text-gray-700">
                        <strong>Warning:</strong> Copyleft licenses (GPL, AGPL) may require you to open source your code. Buyers will audit this carefully.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Contracts Section */}
                <div id="key-contracts" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Key Contracts Review</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Buyers will review all material contracts to understand obligations, liabilities, and change-of-control provisions.
                  </p>

                  {/* Customer Contracts */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. Customer Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Standard Terms of Service</strong>
                          <p className="text-sm text-gray-600">Current version and history of changes</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Top 10 Customer Contracts</strong>
                          <p className="text-sm text-gray-600">All agreements with your largest customers</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Long-Term Contracts</strong>
                          <p className="text-sm text-gray-600">Any multi-year agreements or commitments</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Change of Control Provisions</strong>
                          <p className="text-sm text-gray-600">Identify which contracts have change-of-control clauses that could require customer consent</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Vendor Contracts */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. Vendor & Supplier Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Critical Vendor Contracts</strong>
                          <p className="text-sm text-gray-600">Hosting, infrastructure, SaaS tools essential to operations</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Exclusive Agreements</strong>
                          <p className="text-sm text-gray-600">Any agreements granting exclusivity to vendors or suppliers</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Service Level Agreements (SLAs)</strong>
                          <p className="text-sm text-gray-600">Agreements with performance guarantees or penalties</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Partnership Agreements */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Partnership & Channel Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Reseller Agreements</strong>
                          <p className="text-sm text-gray-600">All agreements with resellers or distributors</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Referral/Affiliate Agreements</strong>
                          <p className="text-sm text-gray-600">Commission structures and payment terms</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Strategic Partnership Agreements</strong>
                          <p className="text-sm text-gray-600">Joint ventures, co-marketing, integration partnerships</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Real Estate & Leases */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      4. Real Estate & Lease Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Office Lease</strong>
                          <p className="text-sm text-gray-600">Lease term, renewal options, assignment provisions</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Equipment Leases</strong>
                          <p className="text-sm text-gray-600">Servers, furniture, vehicles, etc.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Employment & HR Section */}
                <div id="employment-agreements" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Employment & HR Documentation</h2>

                  {/* Employment Agreements */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      1. Employment Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Executive Employment Agreements</strong>
                          <p className="text-sm text-gray-600">CEO, founders, C-suite agreements with terms, compensation, change-of-control provisions</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Offer Letters</strong>
                          <p className="text-sm text-gray-600">All employee offer letters</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Confidentiality & Invention Assignment Agreements (CIIA)</strong>
                          <p className="text-sm text-gray-600">Every employee must have signed CIIA with IP assignment provisions</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Non-Compete/Non-Solicit Agreements</strong>
                          <p className="text-sm text-gray-600">If applicable and enforceable in your jurisdiction</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Contractor Agreements */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      2. Contractor & Consultant Agreements
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Independent Contractor Agreements</strong>
                          <p className="text-sm text-gray-600">All contractor agreements with work-for-hire or IP assignment provisions</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Consulting Agreements</strong>
                          <p className="text-sm text-gray-600">Scope, deliverables, IP ownership</p>
                        </div>
                      </label>
                    </div>
                  </div>

                  {/* Employee Benefits */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      3. Employee Benefit Plans
                    </h3>
                    <div className="space-y-3">
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">401(k) Plan Documents</strong>
                          <p className="text-sm text-gray-600">If applicable</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Health Insurance Policies</strong>
                          <p className="text-sm text-gray-600">Current coverage and provider agreements</p>
                        </div>
                      </label>
                      <label className="flex items-start gap-3">
                        <input type="checkbox" className="mt-1" disabled />
                        <div>
                          <strong className="text-livmo-navy">Stock Option Plan</strong>
                          <p className="text-sm text-gray-600">Already covered in cap table section</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Common Legal Gaps Section */}
                <div id="common-gaps" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Common Legal Gaps</h2>
                  
                  <div className="grid gap-6">
                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        1. Missing Founder IP Assignments
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Founders created IP before the company was incorporated and never formally assigned it to the company.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Execute retroactive IP assignment agreements from all founders transferring all pre-incorporation work to the company.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        2. Contractor Work Without IP Assignments
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Early contractors or freelancers built parts of the product without signed IP assignment agreements.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Track down all contractors and obtain retroactive IP assignment agreements. For unavailable contractors, document work-for-hire arrangements and payment records.
                      </p>
                    </div>

                    <div className="p-6 bg-red-50 border-l-4 border-red-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        3. Incomplete Corporate Records
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Missing board minutes for major decisions (funding, acquisitions, option grants).
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Work with your attorney to create retroactive minutes and board resolutions documenting historical decisions.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        4. Change-of-Control Consent Requirements
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Key customer or vendor contracts require consent before a sale can close.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Identify all contracts with change-of-control provisions early. Approach customers/vendors proactively once you have a signed LOI.
                      </p>
                    </div>

                    <div className="p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-md">
                      <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                        5. Unclear Equity Ownership
                      </h3>
                      <p className="text-gray-700 mb-2">
                        <strong>Issue:</strong> Cap table discrepancies or missing stock issuance paperwork.
                      </p>
                      <p className="text-gray-700">
                        <strong>Fix:</strong> Reconcile all equity issuances with supporting documentation. Correct any discrepancies with board approval and updated certificates.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Clean-Up Workflows Section */}
                <div id="cleanup-workflows" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Clean-Up Workflows</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Step-by-step processes to address the most common legal gaps.
                  </p>

                  {/* Workflow 1 */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      Workflow 1: IP Assignment Clean-Up
                    </h3>
                    <ol className="space-y-3 list-decimal ml-5 text-gray-700">
                      <li>
                        <strong>Create a list</strong> of all employees, contractors, and consultants who contributed to IP
                      </li>
                      <li>
                        <strong>Review files</strong> to identify who has signed IP assignment agreements
                      </li>
                      <li>
                        <strong>Draft retroactive IP assignment agreements</strong> for anyone missing proper documentation
                      </li>
                      <li>
                        <strong>Track down individuals</strong> and request signatures (offer nominal consideration like $100)
                      </li>
                      <li>
                        <strong>For unavailable individuals:</strong> Gather evidence of work-for-hire relationship (contracts, invoices, emails)
                      </li>
                      <li>
                        <strong>Document everything</strong> in a centralized IP assignment tracker
                      </li>
                    </ol>
                  </div>

                  {/* Workflow 2 */}
                  <div className="mb-10 p-6 bg-gray-50 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      Workflow 2: Corporate Governance Clean-Up
                    </h3>
                    <ol className="space-y-3 list-decimal ml-5 text-gray-700">
                      <li>
                        <strong>Audit major decisions</strong> since inception (funding, acquisitions, option grants, officer appointments)
                      </li>
                      <li>
                        <strong>Identify missing documentation</strong> (board minutes, shareholder consents)
                      </li>
                      <li>
                        <strong>Work with counsel</strong> to draft retroactive minutes and resolutions
                      </li>
                      <li>
                        <strong>Hold a board meeting</strong> to ratify all historical decisions
                      </li>
                      <li>
                        <strong>Update corporate record books</strong> with complete historical documentation
                      </li>
                      <li>
                        <strong>Obtain a good standing certificate</strong> from your state
                      </li>
                    </ol>
                  </div>

                  {/* Workflow 3 */}
                  <div className="mb-10 p-6 bg-white border border-gray-200 rounded-md">
                    <h3 className="text-xl font-semibold text-livmo-navy mb-4">
                      Workflow 3: Contract Review & Organization
                    </h3>
                    <ol className="space-y-3 list-decimal ml-5 text-gray-700">
                      <li>
                        <strong>Gather all contracts</strong> (customer, vendor, partner, employment)
                      </li>
                      <li>
                        <strong>Create a contract database</strong> with key terms (term, value, renewal, change-of-control clauses)
                      </li>
                      <li>
                        <strong>Identify material contracts</strong> (top customers, critical vendors, long-term commitments)
                      </li>
                      <li>
                        <strong>Flag change-of-control provisions</strong> that require consent
                      </li>
                      <li>
                        <strong>Review for problematic terms</strong> (unlimited liability, unfavorable indemnities)
                      </li>
                      <li>
                        <strong>Organize in a data room structure</strong> for easy buyer access
                      </li>
                    </ol>
                  </div>
                </div>

                {/* Timeline Section */}
                <div id="timeline" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">Preparation Timeline</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Recommended timeline to get legally ready before starting your exit process.
                  </p>

                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-primary text-white text-sm font-semibold rounded">6-12 Months Out</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Initial Audit</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5">
                          <li>Complete the checklists in this guide</li>
                          <li>Identify all missing documents and agreements</li>
                          <li>Hire legal counsel experienced in M&A</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-livmo-gold text-livmo-navy text-sm font-semibold rounded">4-6 Months Out</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Gap Remediation</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5">
                          <li>Execute missing IP assignments</li>
                          <li>Clean up corporate governance records</li>
                          <li>Update employment agreements</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded border border-green-300">2-3 Months Out</span>
                      </div>
                      <div className="flex-1 pb-6 border-l-2 border-gray-300 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Data Room Preparation</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5">
                          <li>Organize all documents into a virtual data room structure</li>
                          <li>Create contract database and summaries</li>
                          <li>Prepare Q&A responses for common legal questions</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-32 text-right">
                        <span className="inline-block px-3 py-1 bg-gray-200 text-gray-800 text-sm font-semibold rounded">1 Month Out</span>
                      </div>
                      <div className="flex-1 pl-6">
                        <h4 className="text-lg font-semibold text-livmo-navy mb-2">Final Review</h4>
                        <ul className="text-gray-700 space-y-1 list-disc ml-5">
                          <li>Attorney final review of all documentation</li>
                          <li>Mock due diligence exercise</li>
                          <li>Ready to engage with buyers</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="mt-16 p-8 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white rounded-md">
                  <h2 className="text-2xl font-bold mb-4">Need Help With Legal Due Diligence?</h2>
                  <p className="text-gray-200 mb-6">
                    Legal readiness is complex. Our team can connect you with experienced M&A counsel and help you navigate the preparation process.
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
