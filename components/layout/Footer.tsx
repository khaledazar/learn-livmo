import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const mainLinks = [
  { name: 'SaaS Valuation Calculator', href: '/saas-valuation' },
  { name: 'SaaS Metrics Guide', href: '/saas-metrics' },
  { name: 'Sellability Checklist', href: '/sellability-checklist' },
  { name: 'Financial Reporting', href: '/financial-reporting' },
];

const resourceLinks = [
  { name: 'Legal Due Diligence', href: '/legal-due-diligence' },
  { name: 'Hiring & Operations', href: '/hiring-operations' },
  { name: 'Buyer Profile Guide', href: '/buyer-profile' },
  { name: 'M&A Process Roadmap', href: '/ma-process' },
];

const companyLinks = [
  { name: 'About Livmo', href: 'https://livmo.com', external: true },
  { name: 'Contact Us', href: 'https://livmo.com/contact', external: true },
  { name: 'Book Consultation', href: 'https://go.livmo.com/meetings/go-livmo', external: true },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-livmo-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="relative w-40 h-10 mb-6">
              <Image
                src="/universal-assets/images/livmo-logo-dark-bg.png"
                alt="Livmo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your complete exit readiness academy. Whether you're exiting now or building value for later, everything you need is here.
            </p>
          </div>

          {/* Main Resources */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Main Resources</h3>
            <ul className="space-y-3">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-livmo-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Resources */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Additional Resources</h3>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-livmo-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-livmo-gold transition-colors duration-200 text-sm inline-flex items-center gap-1"
                    {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Livmo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-livmo-gold transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-livmo-gold transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

