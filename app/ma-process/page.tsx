import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ProfessionalHero } from '@/components/design-system/ProfessionalHero';
import { Card } from '@/components/design-system/Card';
import { TableOfContents } from '@/components/design-system/TableOfContents';
import { InteractiveDealTimeline } from '@/components/design-system/InteractiveDealTimeline';
import { TrendingUp } from 'lucide-react';
import { StructuredData, generateLearningResourceSchema, generateBreadcrumbSchema } from '@/components/seo/StructuredData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'M&A Process Roadmap | Complete Guide from Teaser to Close',
  description: 'Master the M&A process: teaser, NDA, LOI, due diligence, definitive agreement, and close. Learn deal-killer traps, timeline expectations, and momentum-building strategies. Interactive 5-phase roadmap for business exits.',
  keywords: [
    'M&A process steps',
    'mergers and acquisitions process',
    'LOI negotiation',
    'due diligence process',
    'definitive agreement',
    'M&A timeline',
    'deal killer mistakes',
    'business sale process',
    'M&A roadmap',
    'acquisition process guide'
  ],
  openGraph: {
    title: 'M&A Process Roadmap - Complete Guide to Business Exit',
    description: 'Interactive guide through every M&A stage from teaser to close. Avoid common pitfalls and keep momentum.',
    url: 'https://learn.livmo.com/ma-process',
  },
  alternates: {
    canonical: 'https://learn.livmo.com/ma-process',
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: 'https://learn.livmo.com' },
  { name: 'M&A Process Roadmap', url: 'https://learn.livmo.com/ma-process' }
]);

const learningResourceSchema = generateLearningResourceSchema({
  name: 'M&A Process Roadmap',
  description: 'Interactive stage-by-stage M&A process guide covering teaser, LOI, due diligence, definitive agreement, and close with deal-killer traps and momentum strategies',
  url: 'https://learn.livmo.com/ma-process',
  keywords: ['M&A process', 'LOI negotiation', 'due diligence', 'business sale', 'acquisition roadmap']
});

const tocItems = [
  {
    id: 'introduction',
    title: 'Understanding the M&A Journey',
  },
  {
    id: 'interactive-timeline',
    title: 'Interactive Timeline',
  },
  {
    id: 'deal-killer-traps',
    title: 'Common Deal-Killer Traps',
  },
  {
    id: 'timeline-expectations',
    title: 'Realistic Timeline Expectations',
  },
  {
    id: 'momentum-tips',
    title: 'How to Keep Momentum',
  },
];

export default function MAProcessPage() {
  return (
    <>
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={learningResourceSchema} />
      <Layout>
        <ProfessionalHero
          badge={{ icon: '●', text: 'M&A Process Guide' }}
          title="M&A Process Roadmap"
          subtitle="From Teaser to Close"
          description="Navigate every stage of the M&A process with confidence. Learn deal-killer traps, timeline expectations, and momentum-building strategies through our interactive 5-phase roadmap."
          icon={TrendingUp}
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
                
                {/* Introduction */}
                <div id="introduction" className="mb-16">
                  <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-6">
                    Understanding the M&A Journey
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <p className="mb-4">
                      The M&A process typically takes 6-12 months from first contact to closing. Understanding each phase helps you stay organized, avoid common pitfalls, and maintain momentum when things slow down (and they will).
                    </p>
                    <p className="mb-4">
                      Below is an interactive timeline showing all 5 phases and 14 key milestones. Click on any milestone to see detailed information, typical timelines, and what to watch out for.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>

        {/* Interactive Timeline */}
        <section id="interactive-timeline" className="py-16 bg-livmo-light-neutral">
          <Container>
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-8 text-center">
              Interactive M&A Timeline
            </h2>
            <InteractiveDealTimeline />
          </Container>
        </section>

        {/* Deal-Killer Traps */}
        <section id="deal-killer-traps" className="py-16 bg-white">
          <Container size="md">
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-8 text-center">
              Common Deal-Killer Traps
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card variant="left-accent" accentColor="red" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  Phase 1-2: Initial Engagement
                </h3>
                <ul className="space-y-2 text-livmo-body">
                  <li>• <strong>Moving too fast:</strong> Signing LOI before proper valuation analysis</li>
                  <li>• <strong>Information overload:</strong> Sharing everything before NDA is signed</li>
                  <li>• <strong>Wrong buyer type:</strong> Not qualifying if they can actually close</li>
                  <li>• <strong>Single track:</strong> Talking to only one buyer (no leverage)</li>
                </ul>
              </Card>

              <Card variant="left-accent" accentColor="red" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  Phase 3: LOI & Negotiation
                </h3>
                <ul className="space-y-2 text-livmo-body">
                  <li>• <strong>Weak LOI terms:</strong> Accepting vague language that favors buyer</li>
                  <li>• <strong>No exclusivity limit:</strong> Giving unlimited time for diligence</li>
                  <li>• <strong>Earn-out heavy:</strong> Too much value tied to future performance</li>
                  <li>• <strong>Missing break-up fees:</strong> No penalty if buyer walks away late</li>
                </ul>
              </Card>

              <Card variant="left-accent" accentColor="red" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  Phase 4: Due Diligence
                </h3>
                <ul className="space-y-2 text-livmo-body">
                  <li>• <strong>Unorganized data:</strong> Slow responses kill momentum and trust</li>
                  <li>• <strong>Surprises:</strong> Anything not disclosed upfront becomes leverage for buyer</li>
                  <li>• <strong>Over-explaining:</strong> Defensive responses to every question</li>
                  <li>• <strong>Missing documentation:</strong> Verbal agreements with no paper trail</li>
                </ul>
              </Card>

              <Card variant="left-accent" accentColor="red" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  Phase 5: Closing
                </h3>
                <ul className="space-y-2 text-livmo-body">
                  <li>• <strong>Indemnification traps:</strong> Unlimited liability after closing</li>
                  <li>• <strong>Escrow overreach:</strong> Too much held back for too long</li>
                  <li>• <strong>Employment terms:</strong> Vague expectations for post-close role</li>
                  <li>• <strong>Last-minute changes:</strong> Accepting major revisions at signing</li>
                </ul>
              </Card>
            </div>
          </Container>
        </section>

        {/* Timeline Expectations */}
        <section id="timeline-expectations" className="py-16 bg-gray-50">
          <Container size="md">
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-8 text-center">
              Realistic Timeline Expectations
            </h2>
            
            <Card variant="standard" animate={false} className="mb-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 px-4 font-headline text-livmo-navy">Phase</th>
                      <th className="text-left py-3 px-4 font-headline text-livmo-navy">Typical Duration</th>
                      <th className="text-left py-3 px-4 font-headline text-livmo-navy">What Affects Speed</th>
                    </tr>
                  </thead>
                  <tbody className="text-livmo-body">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Preparation</td>
                      <td className="py-3 px-4">4-12 weeks</td>
                      <td className="py-3 px-4">How organized your data room is</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Teaser to NDA</td>
                      <td className="py-3 px-4">1-3 weeks</td>
                      <td className="py-3 px-4">Buyer interest level and legal speed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">NDA to LOI</td>
                      <td className="py-3 px-4">2-6 weeks</td>
                      <td className="py-3 px-4">Valuation complexity and negotiations</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold">Due Diligence</td>
                      <td className="py-3 px-4">60-90 days</td>
                      <td className="py-3 px-4">Data room quality and surprises found</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold">Definitive Docs to Close</td>
                      <td className="py-3 px-4">30-60 days</td>
                      <td className="py-3 px-4">Legal complexity and final negotiations</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>

            <Card variant="alert" accentColor="gold" animate={false}>
              <p className="text-sm text-livmo-navy">
                <strong>Reality Check:</strong> Most deals take 6-12 months total. Strategic buyers tend to move slower (8-14 months) due to internal approvals. PE firms can move faster (4-8 months) if they really want the asset. Plan accordingly and don't quit your day job until the wire hits.
              </p>
            </Card>
          </Container>
        </section>

        {/* Momentum Tips */}
        <section id="momentum-tips" className="py-16 bg-white">
          <Container size="md">
            <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-8 text-center">
              How to Keep Momentum
            </h2>
            
            <div className="space-y-6">
              <Card variant="top-accent" accentColor="primary" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  1. Stay Organized from Day One
                </h3>
                <p className="text-livmo-body mb-3">
                  Build your data room before you need it. Every document request should be answered same-day. Slow responses signal either disorganization or something to hide - both kill momentum.
                </p>
                <p className="text-livmo-body text-sm italic">
                  Pro tip: Use our <Link href="/legal-due-diligence" className="text-livmo-primary hover:underline">Legal Due Diligence Checklist</Link> to organize everything upfront.
                </p>
              </Card>

              <Card variant="top-accent" accentColor="primary" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  2. Run Multiple Tracks (If Possible)
                </h3>
                <p className="text-livmo-body mb-3">
                  Talk to 3-5 buyers simultaneously. It creates urgency, gives you leverage, and ensures if one falls through you don't start from zero. Single-track deals die more often and get worse terms.
                </p>
                <p className="text-livmo-body text-sm italic">
                  Pro tip: Learn about different <Link href="/buyer-profile" className="text-livmo-primary hover:underline">buyer types</Link> to run a diverse process.
                </p>
              </Card>

              <Card variant="top-accent" accentColor="primary" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  3. Set Clear Deadlines
                </h3>
                <p className="text-livmo-body mb-3">
                  Every phase needs hard deadlines. LOI exclusivity should be 60-90 days max. Diligence should have weekly milestone check-ins. Vague timelines = stalled deals = buyer fatigue.
                </p>
              </Card>

              <Card variant="top-accent" accentColor="primary" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  4. Keep Running the Business
                </h3>
                <p className="text-livmo-body mb-3">
                  Nothing kills a deal faster than declining metrics during diligence. Buyers get nervous when revenue dips or churn spikes. Stay focused on operations even when you're drowning in document requests.
                </p>
              </Card>

              <Card variant="top-accent" accentColor="primary" animate={false}>
                <h3 className="text-xl font-bold text-livmo-navy mb-3">
                  5. Get Expert Help
                </h3>
                <p className="text-livmo-body">
                  M&A attorney and deal advisor are worth every penny. They've seen every trap, know market terms, and keep things moving when you're emotionally exhausted. First-time founders without help leave 20-30% on the table.
                </p>
              </Card>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-livmo-primary text-white">
          <Container size="sm">
            <div className="text-center">
              <h2 className="text-3xl font-bold font-headline mb-4">
                Ready to Start Your M&A Journey?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Get personalized guidance on preparing for exit, valuation optimization, and navigating the M&A process.
              </p>
              <Link
                href="https://go.livmo.com/meetings/go-livmo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-livmo-gold text-livmo-navy font-semibold rounded-md hover:bg-livmo-gold/90 transition-all duration-150 text-lg shadow-lg"
              >
                Book Your Free Strategy Call
              </Link>
            </div>
          </Container>
        </section>
      </Layout>
    </>
  );
}

