'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
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
  CheckCircle2
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  isExternal?: boolean;
  accentColor: 'primary' | 'gold' | 'navy' | 'blue' | 'green';
  completed?: boolean;
}

const resources: Resource[] = [
  {
    id: 'saas-valuation',
    title: 'SaaS Valuation Calculator',
    description: 'Calculate your SaaS business value with our interactive calculator. Get instant estimates based on key metrics.',
    icon: Calculator,
    href: 'https://saasvaluation.livmo.com/',
    isExternal: true,
    accentColor: 'primary',
  },
  {
    id: 'saas-metrics',
    title: 'SaaS Metrics Guide',
    description: 'Master the fundamentals, metrics, and drivers that impact your SaaS exit valuation.',
    icon: LineChart,
    href: 'https://go.livmo.com/hubfs/The_SaaS_Exit_Valuation_Guide-Fundamentals_Metrics_and_Drivers.pdf',
    isExternal: true,
    accentColor: 'blue',
  },
  {
    id: 'sellability-checklist',
    title: 'Sellability Checklist',
    description: 'Comprehensive checklist to assess your business readiness for a successful exit.',
    icon: ClipboardCheck,
    href: 'https://go.livmo.com/hubfs/Livmo%20-%20Business%20Owner%20Sellability%20Checklist%20-%20Regular%20Business.pdf',
    isExternal: true,
    accentColor: 'green',
  },
  {
    id: 'financial-reporting',
    title: 'Financial Reporting Best Practices',
    description: 'Boost your valuation with accurate financial statements. Templates, checklists, and workflows included.',
    icon: FileText,
    href: '/financial-reporting',
    accentColor: 'gold',
  },
  {
    id: 'legal-due-diligence',
    title: 'Legal Due-Diligence Audit Kit',
    description: 'Checklists and trackers for corporate docs, IP filings, contracts, and common gap clean-up workflows.',
    icon: Scale,
    href: '/legal-due-diligence',
    accentColor: 'navy',
  },
  {
    id: 'hiring-operations',
    title: 'Hiring & Operational Maturity',
    description: 'Gap-analysis worksheets, SOP templates, RACI charts, and talent retention strategies.',
    icon: Users,
    href: '/hiring-operations',
    accentColor: 'primary',
  },
  {
    id: 'buyer-profile',
    title: 'Buyer-Profile & Pros-Cons Guide',
    description: 'Understand strategic buyers, PE firms, and corporate acquirers—what they value and typical pitfalls.',
    icon: Target,
    href: '/buyer-profile',
    accentColor: 'blue',
  },
  {
    id: 'ma-process',
    title: 'M&A Process Roadmap',
    description: 'Stage-by-stage guide from teaser to close, with common deal-killer traps and momentum tips.',
    icon: TrendingUp,
    href: '/ma-process',
    accentColor: 'gold',
  },
  {
    id: 'cash-cow-hacks',
    title: 'Turn Your Cash Cow Into a Sellable Asset',
    description: 'Practical strategies to transform your lifestyle business into an attractive acquisition target.',
    icon: Lightbulb,
    href: '/cash-cow-hacks',
    accentColor: 'green',
  },
];

export default function Home() {
  const [completedResources, setCompletedResources] = useState<Set<string>>(new Set());

  // Load completed resources from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('completedResources');
    if (stored) {
      setCompletedResources(new Set(JSON.parse(stored)));
    }
  }, []);

  // Toggle resource completion
  const toggleCompletion = (resourceId: string) => {
    const updated = new Set(completedResources);
    if (updated.has(resourceId)) {
      updated.delete(resourceId);
    } else {
      updated.add(resourceId);
    }
    setCompletedResources(updated);
    localStorage.setItem('completedResources', JSON.stringify([...updated]));
  };

  const completionPercentage = Math.round((completedResources.size / resources.length) * 100);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-livmo-primary to-livmo-navy text-white py-20 lg:py-28">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-headline mb-6">
              Your Complete Exit Readiness Academy
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-blue-100">
              Exit NOW or Exit LATER
            </p>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Whether you're preparing for an immediate exit or building long-term value, 
              everything you need to maximize your business valuation is here.
            </p>

            {/* Progress Bar */}
            {completedResources.size > 0 && (
              <div className="mt-10 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Your Progress</span>
                  <span className="text-sm font-bold">{completionPercentage}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div
                    className="bg-livmo-gold h-3 rounded-full transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
                <p className="text-xs text-blue-100 mt-2">
                  {completedResources.size} of {resources.length} resources completed
                </p>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Resources Grid */}
      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-livmo-navy mb-4">
              Learning Resources
            </h2>
            <p className="text-lg text-livmo-body max-w-2xl mx-auto">
              Comprehensive guides, tools, and templates to prepare your business for a successful exit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              const isCompleted = completedResources.has(resource.id);

              return (
                <div key={resource.id} className="relative group">
                  <Card
                    variant="top-accent"
                    accentColor={resource.accentColor}
                    hover={true}
                    animate={true}
                    delay={index * 0.1}
                    className="h-full flex flex-col"
                  >
                    {/* Completion Checkbox */}
                    <button
                      onClick={() => toggleCompletion(resource.id)}
                      className="absolute top-4 right-4 z-10"
                      aria-label={isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
                    >
                      <CheckCircle2
                        className={`h-6 w-6 transition-colors duration-200 ${
                          isCompleted
                            ? 'text-green-500 fill-green-500'
                            : 'text-gray-300 hover:text-green-500'
                        }`}
                      />
                    </button>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-livmo-primary/10">
                        <Icon className="h-6 w-6 text-livmo-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-headline font-bold text-livmo-navy mb-3">
                      {resource.title}
                    </h3>
                    <p className="text-livmo-body mb-6 flex-1">
                      {resource.description}
                    </p>

                    {/* Link */}
                    <Link
                      href={resource.href}
                      {...(resource.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="inline-flex items-center text-livmo-primary font-semibold hover:text-livmo-navy transition-colors duration-200"
                    >
                      {resource.isExternal ? 'Access Resource' : 'Learn More'}
                      <svg
                        className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </Card>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-livmo-gold">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-livmo-navy mb-4">
              Ready to Maximize Your Exit Value?
            </h2>
            <p className="text-lg text-livmo-navy/80 mb-8">
              Schedule a consultation with our exit planning experts to discuss your specific situation.
            </p>
            <Link
              href="https://calendly.com/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-livmo-navy text-white font-semibold rounded-lg hover:bg-livmo-navy/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-lg"
            >
              Book Your Free Consultation
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

