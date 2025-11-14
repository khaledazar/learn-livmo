'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TOCItem {
  id: string;
  title: string;
  children?: TOCItem[];
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  const [activeId, setActiveId] = useState<string>('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    // Intersection Observer to track active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-80px 0px -80% 0px',
        threshold: 0,
      }
    );

    // Observe all sections
    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);

      item.children?.forEach((child) => {
        const childElement = document.getElementById(child.id);
        if (childElement) observer.observe(childElement);
      });
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setMobileOpen(false);
    }
  };

  const renderTOCItems = (tocItems: TOCItem[], level = 0) => {
    return tocItems.map((item) => (
      <div key={item.id}>
        <button
          onClick={() => scrollToSection(item.id)}
          className={cn(
            'w-full text-left text-sm transition-colors duration-150',
            level === 0 ? 'py-2 font-medium' : 'py-1.5 pl-4',
            activeId === item.id
              ? 'text-livmo-gold font-semibold'
              : 'text-gray-600 hover:text-livmo-navy'
          )}
        >
          {item.title}
        </button>
        {item.children && renderTOCItems(item.children, level + 1)}
      </div>
    ));
  };

  return (
    <>
      {/* Desktop: Sticky Sidebar */}
      <div className="hidden lg:block">
        <div className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <nav className="p-6 bg-white border border-gray-200 rounded-md shadow-sm">
            <h2 className="text-sm font-bold text-livmo-navy uppercase tracking-wide mb-4">
              On This Page
            </h2>
            <div className="space-y-1">{renderTOCItems(items)}</div>
          </nav>
        </div>
      </div>

      {/* Mobile/Tablet: Dropdown */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-full flex items-center justify-between p-4 bg-white border border-gray-200 rounded-md text-sm font-semibold text-livmo-navy"
        >
          <span>Jump to Section</span>
          <ChevronDown
            className={cn(
              'h-5 w-5 transition-transform duration-200',
              mobileOpen && 'rotate-180'
            )}
          />
        </button>
        
        {mobileOpen && (
          <nav className="mt-2 p-4 bg-white border border-gray-200 rounded-md">
            <div className="space-y-1">{renderTOCItems(items)}</div>
          </nav>
        )}
      </div>
    </>
  );
};

