import React from 'react';
import {
  CircleArrowPattern,
  CircleSwirlPattern,
  ScatteredDotsPattern,
  GridDotsPattern,
  DotWavePattern
} from './BackgroundPatterns';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'navy' | 'gold' | 'blue' | 'light';
  pattern?: 'arrow' | 'swirl' | 'dots' | 'grid' | 'wave' | 'none';
  patternOpacity?: number;
  fullWidth?: boolean;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  pattern = 'none',
  patternOpacity = 0.1,
  fullWidth = false,
  noPadding = false,
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-livmo-gray-50',
    light: 'bg-livmo-light-neutral',
    navy: 'bg-livmo-navy text-white',
    gold: 'bg-livmo-gold text-livmo-navy',
    blue: 'bg-livmo-primary text-white',
  };

  const renderPattern = () => {
    switch (pattern) {
      case 'arrow':
        return <CircleArrowPattern opacity={patternOpacity} />;
      case 'swirl':
        return <CircleSwirlPattern opacity={patternOpacity} />;
      case 'dots':
        return <ScatteredDotsPattern opacity={patternOpacity} />;
      case 'grid':
        return <GridDotsPattern opacity={patternOpacity} />;
      case 'wave':
        return <DotWavePattern opacity={patternOpacity} />;
      default:
        return null;
    }
  };

  return (
    <section
      id={id}
      className={`${noPadding ? '' : 'section'} ${bgClasses[background]} relative ${className}`}
    >
      {renderPattern()}
      <div className={`relative z-10 ${fullWidth ? 'w-full' : 'container-custom'}`}>
        {children}
      </div>
    </section>
  );
};

