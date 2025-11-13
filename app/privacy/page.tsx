import React from 'react';
import Link from 'next/link';
import { Layout } from '@/components/layout/Layout';
import { Container } from '@/components/layout/Container';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Privacy Policy | Learn Livmo',
  description: 'Privacy Policy for Learn.Livmo.com',
};

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </h1>
            <p className="text-sm text-livmo-body mb-8">
              Last Updated: November 13, 2025
            </p>

            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  1. Introduction
                </h2>
                <p className="text-livmo-body mb-4">
                  Welcome to Learn.Livmo.com ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  2. Information We Collect
                </h2>
                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Information You Provide
                </h3>
                <p className="text-livmo-body mb-4">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>Book a consultation through our website</li>
                  <li>Contact us with inquiries</li>
                  <li>Use interactive tools and calculators</li>
                  <li>Download resources or templates</li>
                </ul>

                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Automatically Collected Information
                </h3>
                <p className="text-livmo-body mb-4">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>IP address</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                </ul>

                <h3 className="text-xl font-semibold text-livmo-navy mb-3">
                  Local Storage
                </h3>
                <p className="text-livmo-body mb-4">
                  We use browser local storage to save your progress on learning resources. This information is stored locally on your device and is not transmitted to our servers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="text-livmo-body mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>Provide, operate, and maintain our website</li>
                  <li>Improve and personalize your experience</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Schedule and manage consultation appointments</li>
                  <li>Send you educational content and updates (with your consent)</li>
                  <li>Analyze usage patterns and improve our services</li>
                  <li>Detect and prevent fraud or unauthorized access</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  4. Sharing Your Information
                </h2>
                <p className="text-livmo-body mb-4">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information with:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who help us operate our website (e.g., hosting providers, analytics services)</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  5. Cookies and Tracking Technologies
                </h2>
                <p className="text-livmo-body mb-4">
                  We use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings, though some features may not function properly if cookies are disabled.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  6. Third-Party Links
                </h2>
                <p className="text-livmo-body mb-4">
                  Our website may contain links to third-party websites (e.g., SaaS Valuation Calculator, external PDFs). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  7. Data Security
                </h2>
                <p className="text-livmo-body mb-4">
                  We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  8. Your Rights
                </h2>
                <p className="text-livmo-body mb-4">
                  Depending on your location, you may have the following rights:
                </p>
                <ul className="list-disc pl-6 mb-4 text-livmo-body space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>Withdraw consent (where processing is based on consent)</li>
                </ul>
                <p className="text-livmo-body mb-4">
                  To exercise these rights, please contact us at the information provided below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  9. Children's Privacy
                </h2>
                <p className="text-livmo-body mb-4">
                  Our website is not intended for children under 18 years of age. We do not knowingly collect personal information from children.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  10. Changes to This Privacy Policy
                </h2>
                <p className="text-livmo-body mb-4">
                  We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold font-headline text-livmo-navy mb-4">
                  11. Contact Us
                </h2>
                <p className="text-livmo-body mb-4">
                  If you have questions or concerns about this Privacy Policy, please contact us:
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
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

