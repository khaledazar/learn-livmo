import React from 'react';
import { Container } from '@/components/layout/Container';
import { LucideIcon } from 'lucide-react';

interface ContentSectionProps {
  title?: string;
  description?: string;
  background?: 'white' | 'gray' | 'navy';
  children: React.ReactNode;
  className?: string;
}

export const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  description,
  background = 'white',
  children,
  className = '',
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    navy: 'bg-livmo-navy text-white',
  };

  const textColor = background === 'navy' ? 'text-white' : 'text-livmo-navy';
  const descColor = background === 'navy' ? 'text-gray-300' : 'text-gray-600';

  return (
    <section className={`py-16 lg:py-20 ${bgClasses[background]} ${className}`}>
      <Container>
        {(title || description) && (
          <div className="max-w-3xl mb-12">
            {title && (
              <h2 className={`text-3xl sm:text-4xl font-bold font-headline ${textColor} mb-4 tracking-tight`}>
                {title}
              </h2>
            )}
            {description && (
              <p className={`text-lg ${descColor} leading-relaxed`}>
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
};

interface FeatureCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  badge?: string;
  href?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  badge,
  href,
}) => {
  const CardWrapper = href ? 'a' : 'div';
  const linkProps = href ? { href, className: 'group block' } : {};

  return (
    <CardWrapper {...linkProps}>
      <div className="h-full p-6 bg-white border border-gray-200 rounded-md hover:border-livmo-primary hover:shadow-md transition-all duration-150">
        {badge && (
          <span className="inline-flex items-center px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded mb-4">
            {badge}
          </span>
        )}
        
        {Icon && (
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-livmo-navy text-white">
              <Icon className="h-6 w-6" />
            </div>
          </div>
        )}

        <h3 className="text-xl font-semibold text-livmo-navy mb-3 group-hover:text-livmo-primary transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </CardWrapper>
  );
};

