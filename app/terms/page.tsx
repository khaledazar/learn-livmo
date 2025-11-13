import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | Learn Livmo - Legal Terms & Conditions',
  description: 'Learn Livmo terms of service. Usage guidelines, disclaimers, educational content policies, and legal terms for using our exit readiness academy.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://learn.livmo.com/terms',
  },
};

export default function TermsOfServicePage() {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-livmo-light-neutral">
        <Container size="md">
          <Link
            href="/"
            className="inline-flex items-center text-livmo-primary hover:text-livmo-navy transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 lg:p-12">
            <h1 className="text-4xl font-bold font-headline text-livmo-navy mb-4">
              Terms of Service
            </h1>
            <p className="text-sm text-livmo-body mb-8">
              Last Updated: November 13, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-livmo-body mb-4">
                  By accessing and using Learn.Livmo.com (the "Website"), you accept and agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  2. Description of Service
                </h2>
                <p className="text-livmo-body mb-4">
                  Learn.Livmo.com provides educational resources, guides, tools, and information related to business exit planning, M&A processes, financial reporting, and related topics (the "Service"). The Service is provided for informational and educational purposes only.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  3. Use of the Website
                </h2>
                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Permitted Use
                </h3>
                <p className="text-livmo-body mb-4">
                  You may use the Website for lawful purposes only and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>Use the Website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any portion of the Website</li>
                  <li>Interfere with or disrupt the Website or servers</li>
                  <li>Use automated systems (bots, scrapers) without our permission</li>
                  <li>Reproduce, modify, or distribute Website content without authorization</li>
                  <li>Use the Website for commercial purposes without our consent</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  4. Intellectual Property Rights
                </h2>
                <p className="text-livmo-body mb-4">
                  The Website and its entire contents, features, and functionality (including but not limited to information, software, text, displays, images, video, and audio) are owned by Livmo, its licensors, or other providers and are protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-livmo-body mb-4">
                  You may download and print materials from the Website for your personal, non-commercial use only, provided you do not modify or remove any copyright, trademark, or other proprietary notices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  5. Educational Content and Disclaimers
                </h2>
                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  No Professional Advice
                </h3>
                <p className="text-livmo-body mb-4">
                  The content on this Website is for informational and educational purposes only and does not constitute professional financial, legal, tax, or business advice. You should consult with qualified professionals before making any business decisions.
                </p>
                
                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Accuracy of Information
                </h3>
                <p className="text-livmo-body mb-4">
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties about the completeness, accuracy, reliability, or suitability of any content on the Website.
                </p>

                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Tools and Calculators
                </h3>
                <p className="text-livmo-body mb-4">
                  Any calculators, tools, or interactive features are provided as educational aids only. Results should not be relied upon for actual business valuations or financial decisions without professional consultation.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  6. Third-Party Links and Content
                </h2>
                <p className="text-livmo-body mb-4">
                  The Website may contain links to third-party websites or resources. We provide these links for your convenience but do not endorse and are not responsible for the content, products, or services on or available from those sites or resources.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  7. User-Generated Content
                </h2>
                <p className="text-livmo-body mb-4">
                  If you submit content, feedback, or suggestions to us, you grant Livmo a non-exclusive, worldwide, royalty-free, perpetual license to use, reproduce, modify, and distribute such content for any purpose.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="text-livmo-body mb-4 font-semibold">
                  TO THE FULLEST EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>THE WEBSITE AND SERVICE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND</li>
                  <li>WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                  <li>OUR TOTAL LIABILITY SHALL NOT EXCEED $100 OR THE AMOUNT YOU PAID US (IF ANY)</li>
                  <li>WE ARE NOT LIABLE FOR ANY BUSINESS DECISIONS YOU MAKE BASED ON WEBSITE CONTENT</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  9. Indemnification
                </h2>
                <p className="text-livmo-body mb-4">
                  You agree to indemnify, defend, and hold harmless Livmo and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising from your use of the Website or violation of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  10. Modifications to Terms
                </h2>
                <p className="text-livmo-body mb-4">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Website after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  11. Termination
                </h2>
                <p className="text-livmo-body mb-4">
                  We may terminate or suspend your access to the Website immediately, without prior notice, for any reason, including breach of these Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  12. Governing Law and Dispute Resolution
                </h2>
                <p className="text-livmo-body mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, United States, without regard to conflict of law principles.
                </p>
                <p className="text-livmo-body mb-4">
                  Any disputes arising from these Terms or use of the Website shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  13. Severability
                </h2>
                <p className="text-livmo-body mb-4">
                  If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  14. Contact Information
                </h2>
                <p className="text-livmo-body mb-4">
                  If you have questions about these Terms, please contact us:
                </p>
                <div className="bg-livmo-light-neutral p-6 rounded-lg">
                  <p className="text-livmo-body mb-2">
                    <strong>Livmo</strong>
                  </p>
                  <p className="text-livmo-body mb-2">
                    Email: <a href="mailto:go@livmo.com" className="text-livmo-primary hover:underline">go@livmo.com</a>
                  </p>
                  <p className="text-livmo-body">
                    Phone: <a href="tel:+16196391414" className="text-livmo-primary hover:underline">(619) 639-1414</a>
                  </p>
                </div>
              </section>

              <section>
                <div className="bg-livmo-light-gold p-6 rounded-lg border-l-4 border-livmo-gold">
                  <p className="text-sm text-livmo-navy">
                    <strong>Note:</strong> By using Learn.Livmo.com, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

