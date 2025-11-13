import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { Card } from '@/components/design-system/Card';
import { Target, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Buyer-Profile & Pros-Cons Guide | Learn Livmo',
  description: 'Understand strategic buyers, PE firms, and corporate acquirers—what they value and typical pitfalls.',
};

export default function BuyerProfilePage() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-gradient-to-br from-livmo-border to-livmo-primary text-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center mr-6">
                <Target className="h-8 w-8" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold font-headline">
                Buyer-Profile & Pros-Cons Guide
              </h1>
            </div>
            
            <p className="text-xl text-blue-100">
              Understand different buyer types, what they value most, deal timelines, and potential pitfalls with each.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Card variant="hero" className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-4">
                <Target className="h-10 w-10 text-livmo-border" />
              </div>
              <h2 className="text-3xl font-bold font-headline text-livmo-navy mb-4">
                Coming Soon
              </h2>
              <p className="text-lg text-livmo-body mb-6">
                We're creating a comprehensive buyer comparison guide covering:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 text-left mb-8">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🏢 Strategic Buyers</h3>
                <p className="text-xs text-livmo-body">
                  Synergy-focused, longer timelines, cultural fit important
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">💼 PE Firms</h3>
                <p className="text-xs text-livmo-body">
                  Financial engineering, growth potential, operational improvements
                </p>
              </div>
              
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-livmo-navy mb-2">🏛️ Corporate Acquirers</h3>
                <p className="text-xs text-livmo-body">
                  Market expansion, technology acquisition, talent acquisition
                </p>
              </div>
            </div>

            <div className="bg-livmo-light-gold p-4 rounded-lg mb-8 text-left">
              <h3 className="font-semibold text-livmo-navy mb-2">📋 Included Content:</h3>
              <ul className="text-sm text-livmo-body space-y-1">
                <li>• Typical term sheet structures</li>
                <li>• Deal timeline comparisons</li>
                <li>• Common pitfalls and red flags</li>
                <li>• Valuation methodology preferences</li>
              </ul>
            </div>

            <Link
              href="/"
              className="inline-flex items-center px-6 py-3 bg-livmo-primary text-white font-semibold rounded-lg hover:bg-livmo-navy transition-colors"
            >
              Return to Learning Hub
            </Link>
          </Card>
        </Container>
      </section>
    </Layout>
  );
}

