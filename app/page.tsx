'use client';

import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { 
  Calculator, 
  LineChart, 
  ClipboardCheck, 
  FileText,
  Scale,
  Users,
  Target,
  TrendingUp,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  isExternal?: boolean;
  category: 'Tools' | 'Guides' | 'Resources';
}

const resources: Resource[] = [
  {
    id: 'saas-valuation',
    title: 'SaaS Valuation Calculator',
    description: 'Calculate your SaaS business value with our interactive calculator. Get instant estimates based on key metrics.',
    icon: Calculator,
    href: 'https://saasvaluation.livmo.com/',
    isExternal: true,
    category: 'Tools',
  },
  {
    id: 'sellability-checklist',
    title: 'Sellability Checklist',
    description: 'Comprehensive assessment tool to evaluate your business readiness for a successful exit across all critical areas.',
    icon: ClipboardCheck,
    href: '/sellability-checklist',
    category: 'Tools',
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting Best Practices',
    description: 'Boost your valuation with accurate financial statements. Templates, checklists, and workflows included.',
    icon: FileText,
    href: '/financial-reporting',
    category: 'Guides',
  },
  {
    id: 'legal-due-diligence',
    title: 'Legal Due-Diligence Audit Kit',
    description: 'Checklists and trackers for corporate docs, IP filings, contracts, and common gap clean-up workflows.',
    icon: Scale,
    href: '/legal-due-diligence',
    category: 'Guides',
  },
  {
    id: 'hiring-operations',
    title: 'Hiring & Operational Maturity',
    description: 'Gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies.',
    icon: Users,
    href: '/hiring-operations',
    category: 'Guides',
  },
  {
    id: 'buyer-profile',
    title: 'Buyer-Profile & Pros-Cons Guide',
    description: 'Understand strategic buyers, PE firms, and corporate acquirers—what they value and typical pitfalls.',
    icon: Target,
    href: '/buyer-profile',
    category: 'Guides',
  },
  {
    id: 'ma-process',
    title: 'M&A Process Roadmap',
    description: 'Stage-by-stage guide from teaser to close, with common deal-killer traps and momentum tips.',
    icon: TrendingUp,
    href: '/ma-process',
    category: 'Guides',
  },
  {
    id: 'cash-cow-hacks',
    title: 'Turn Your Cash Cow Into a Sellable Asset',
    description: 'Practical strategies to transform your lifestyle business into an attractive acquisition target.',
    icon: Lightbulb,
    href: '/cash-cow-hacks',
    category: 'Guides',
  },
  {
    id: 'saas-metrics',
    title: 'SaaS Metrics Guide',
    description: 'Master the fundamentals, metrics, and drivers that impact your SaaS exit valuation.',
    icon: LineChart,
    href: 'https://go.livmo.com/hubfs/The_SaaS_Exit_Valuation_Guide-Fundamentals_Metrics_and_Drivers.pdf',
    isExternal: true,
    category: 'Resources',
  },
];

const categoryColors = {
  Tools: 'bg-blue-100 text-blue-700 border-blue-200',
  Guides: 'bg-purple-100 text-purple-700 border-purple-200',
  Resources: 'bg-green-100 text-green-700 border-green-200',
};

export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Corporate Fintech Style */}
      <section className="relative bg-livmo-navy text-white py-24 lg:py-32 overflow-hidden">
        {/* Grid Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-livmo-navy via-livmo-navy to-livmo-primary opacity-90"></div>

        <Container className="relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center px-3 py-1 bg-white/10 border border-white/20 rounded-md text-sm font-medium mb-6">
              <span className="text-livmo-gold">●</span>
              <span className="ml-2">Exit Education Center</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-headline mb-6 tracking-tight">
              Build Value.
              <br />
              <span className="text-livmo-gold">Exit Smart.</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Whether you're planning an exit now or building long-term value, 
              get the tools, frameworks, and insights used by top M&A advisors.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#resources"
                className="inline-flex items-center justify-center px-6 py-3 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-all duration-150"
              >
                Explore Resources
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="https://go.livmo.com/meetings/go-livmo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-md hover:bg-white/5 transition-all duration-150"
              >
                Book Consultation
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-livmo-gold mb-1">9</div>
                <div className="text-sm text-gray-400">Expert Resources</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-livmo-gold mb-1">2</div>
                <div className="text-sm text-gray-400">Interactive Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-livmo-gold mb-1">100%</div>
                <div className="text-sm text-gray-400">Free Access</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section id="resources" className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-headline text-livmo-navy mb-4 tracking-tight">
              Exit Readiness Resources
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive guides, interactive tools, and proven frameworks to prepare your business for a successful exit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <Link
                  key={resource.id}
                  href={resource.href}
                  {...(resource.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group block h-full"
                >
                  <div className="h-full p-6 bg-white border border-gray-200 rounded-md hover:border-livmo-primary hover:shadow-lg transition-all duration-150">
                    {/* Category Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded border ${categoryColors[resource.category]}`}>
                        {resource.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-livmo-navy text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-livmo-navy mb-3 group-hover:text-livmo-primary transition-colors">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {resource.description}
                    </p>

                    {/* Link Indicator */}
                    <div className="inline-flex items-center text-sm font-semibold text-livmo-primary group-hover:text-livmo-navy transition-colors duration-150">
                      {resource.isExternal ? 'Access Resource' : 'View Guide'}
                      {resource.isExternal ? (
                        <ExternalLink className="ml-1.5 h-4 w-4" />
                      ) : (
                        <ArrowRight className="ml-1.5 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-br from-livmo-navy to-livmo-primary text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-4 tracking-tight">
              Ready to Maximize Your Exit Value?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Get personalized guidance from our M&A advisors. Schedule a free consultation to discuss your exit strategy.
            </p>
            <Link
              href="https://go.livmo.com/meetings/go-livmo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-all duration-150 text-lg shadow-lg"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            <p className="mt-6 text-sm text-gray-400">
              No sales pitch. Just actionable insights for your business.
            </p>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
