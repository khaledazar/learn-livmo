'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, ExternalLink, Calculator, ClipboardCheck, FileText, Scale, Users, Target, TrendingUp, Lightbulb, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MenuItem {
  name: string;
  href: string;
  icon?: React.ElementType;
  isExternal?: boolean;
}

interface NavSection {
  name: string;
  items: MenuItem[];
}

const toolsMenu: MenuItem[] = [
  { name: 'SaaS Valuation Calculator', href: 'https://saasvaluation.livmo.com/', icon: Calculator, isExternal: true },
  { name: 'Sellability Checklist', href: '/sellability-checklist', icon: ClipboardCheck },
];

const guidesMenu: MenuItem[] = [
  { name: 'Financial Reporting Best Practices', href: '/financial-reporting', icon: FileText },
  { name: 'Legal Due Diligence Audit Kit', href: '/legal-due-diligence', icon: Scale },
  { name: 'Hiring & Operational Maturity', href: '/hiring-operations', icon: Users },
  { name: 'Buyer Profile & Comparison Guide', href: '/buyer-profile', icon: Target },
  { name: 'M&A Process Roadmap', href: '/ma-process', icon: TrendingUp },
  { name: 'Cash Cow to Sellable Asset', href: '/cash-cow-hacks', icon: Lightbulb },
];

const resourcesMenu: MenuItem[] = [
  { name: 'SaaS Metrics Guide (PDF)', href: 'https://go.livmo.com/hubfs/The_SaaS_Exit_Valuation_Guide-Fundamentals_Metrics_and_Drivers.pdf', icon: FileText, isExternal: true },
  { name: 'Sellability Checklist (PDF)', href: 'https://go.livmo.com/hubfs/Livmo%20-%20Business%20Owner%20Sellability%20Checklist%20-%20Regular%20Business.pdf', icon: ClipboardCheck, isExternal: true },
  { name: 'Financial Templates', href: 'https://drive.google.com/drive/folders/1FnPdg_vm5QT98_kiJlrvT4YmZsve0y9z', icon: FolderOpen, isExternal: true },
  { name: 'About Livmo', href: 'https://livmo.com', icon: ExternalLink, isExternal: true },
];

const menuSections: NavSection[] = [
  { name: 'Tools', items: toolsMenu },
  { name: 'Guides', items: guidesMenu },
  { name: 'Resources', items: resourcesMenu },
];

// Desktop Dropdown Component
const DesktopDropdown: React.FC<{ section: NavSection }> = ({ section }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="inline-flex items-center text-livmo-body hover:text-livmo-primary transition-colors duration-200 text-sm font-medium"
        aria-expanded={isOpen}
      >
        {section.name}
        <ChevronDown className={cn(
          "ml-1 h-4 w-4 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
          >
            {section.items.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="flex items-center px-4 py-3 text-sm text-livmo-body hover:bg-gray-50 hover:text-livmo-primary transition-colors duration-150"
                >
                  {Icon && <Icon className="h-4 w-4 mr-3 flex-shrink-0" />}
                  <span className="flex-1">{item.name}</span>
                  {item.isExternal && <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0 text-gray-400" />}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Mobile Accordion Component
const MobileAccordion: React.FC<{ section: NavSection; onItemClick: () => void }> = ({ section, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-3 text-base font-medium text-livmo-body hover:text-livmo-primary hover:bg-gray-50 transition-colors duration-200"
      >
        <span>{section.name}</span>
        <ChevronDown className={cn(
          "h-5 w-5 transition-transform duration-200",
          isOpen && "rotate-180"
        )} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-2">
              {section.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    {...(item.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={onItemClick}
                    className="flex items-center pl-6 pr-3 py-2 text-sm text-livmo-body hover:text-livmo-primary hover:bg-gray-50 transition-colors duration-200"
                  >
                    {Icon && <Icon className="h-4 w-4 mr-3 flex-shrink-0" />}
                    <span className="flex-1">{item.name}</span>
                    {item.isExternal && <ExternalLink className="h-3 w-3 ml-2 flex-shrink-0 text-gray-400" />}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white shadow-md'
          : 'bg-white/95 backdrop-blur-sm'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-40 h-10">
              <Image
                src="/universal-assets/images/livmo-logo-light-bg.png"
                alt="Livmo - Learn"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {menuSections.map((section) => (
              <DesktopDropdown key={section.name} section={section} />
            ))}
            
            {/* CTA Button */}
            <Link
              href="https://go.livmo.com/meetings/go-livmo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-2.5 bg-livmo-gold text-livmo-navy font-semibold rounded-lg hover:bg-livmo-gold/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ml-2"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-livmo-body hover:text-livmo-primary hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 pt-2 pb-6 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {/* Home Link */}
              <Link
                href="/"
                className="block px-3 py-3 rounded-md text-base font-medium text-livmo-body hover:text-livmo-primary hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Accordion Sections */}
              {menuSections.map((section) => (
                <MobileAccordion
                  key={section.name}
                  section={section}
                  onItemClick={() => setMobileMenuOpen(false)}
                />
              ))}

              {/* CTA Button */}
              <Link
                href="https://go.livmo.com/meetings/go-livmo"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full mt-4 px-3 py-3 text-center bg-livmo-gold text-livmo-navy font-semibold rounded-lg hover:bg-livmo-gold/90 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
