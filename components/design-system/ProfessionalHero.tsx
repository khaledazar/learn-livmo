import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface ProfessionalHeroProps {
  badge?: {
    icon?: string;
    text: string;
  };
  title: string;
  subtitle?: string;
  description: string;
  icon?: LucideIcon;
  backLink?: {
    href: string;
    text: string;
  };
  gradient?: 'navy' | 'primary' | 'gold' | 'green' | 'blue';
  actions?: React.ReactNode;
}

const gradientClasses = {
  navy: 'from-livmo-navy via-livmo-navy to-livmo-primary',
  primary: 'from-livmo-primary to-livmo-navy',
  gold: 'from-livmo-gold/20 via-livmo-gold/10 to-white',
  green: 'from-green-600 to-livmo-primary',
  blue: 'from-blue-600 to-livmo-primary',
};

export const ProfessionalHero: React.FC<ProfessionalHeroProps> = ({
  badge,
  title,
  subtitle,
  description,
  icon: Icon,
  backLink,
  gradient = 'navy',
  actions,
}) => {
  const isLightGradient = gradient === 'gold';
  const textColor = isLightGradient ? 'text-livmo-navy' : 'text-white';
  const subtitleColor = isLightGradient ? 'text-gray-600' : 'text-gray-300';

  return (
    <section className={`relative ${isLightGradient ? 'bg-white' : 'bg-livmo-navy'} py-16 lg:py-24 overflow-hidden`}>
      {/* Grid Pattern Background */}
      {!isLightGradient && (
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      )}
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradientClasses[gradient]} ${isLightGradient ? 'opacity-100' : 'opacity-90'}`}></div>

      <Container className="relative z-10">
        <div className="max-w-4xl">
          {backLink && (
            <div className="mb-8">
              <Link
                href={backLink.href}
                className={`inline-flex items-center gap-2 ${isLightGradient ? 'text-gray-600 hover:text-livmo-navy' : 'text-gray-400 hover:text-white'} transition-colors text-sm font-medium group`}
              >
                <div className={`w-6 h-6 rounded flex items-center justify-center ${isLightGradient ? 'bg-gray-200 group-hover:bg-gray-300' : 'bg-white/10 group-hover:bg-white/20'} transition-colors`}>
                  <ArrowLeft className="h-3.5 w-3.5" />
                </div>
                <span>{backLink.text}</span>
              </Link>
            </div>
          )}

          {badge && (
            <div className={`inline-flex items-center px-3 py-1 ${isLightGradient ? 'bg-livmo-navy/10 border-livmo-navy/20 text-livmo-navy' : 'bg-white/10 border-white/20 text-white'} border rounded-md text-sm font-medium mb-6`}>
              {badge.icon && <span className="text-livmo-gold mr-2">{badge.icon}</span>}
              <span>{badge.text}</span>
            </div>
          )}
          
          <div className="flex items-start gap-6 mb-6">
            {Icon && (
              <div className={`w-16 h-16 rounded-md ${isLightGradient ? 'bg-livmo-navy' : 'bg-white/10'} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`h-8 w-8 ${isLightGradient ? 'text-white' : 'text-livmo-gold'}`} />
              </div>
            )}
            <div className="flex-1">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-headline mb-4 tracking-tight ${textColor}`}>
                {title}
              </h1>
              {subtitle && (
                <p className={`text-xl sm:text-2xl ${subtitleColor} mb-2`}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
          
          <p className={`text-lg sm:text-xl ${subtitleColor} max-w-3xl leading-relaxed`}>
            {description}
          </p>

          {actions && (
            <div className="mt-8">
              {actions}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

