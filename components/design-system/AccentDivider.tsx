'use client';

import React from 'react';

interface AccentDividerProps {
  variant?: 'navy' | 'white' | 'gray' | 'gold';
  className?: string;
}

export const AccentDivider: React.FC<AccentDividerProps> = ({ 
  variant = 'white', 
  className = '' 
}) => {
  const getAccentColors = (variant: string) => {
    switch (variant) {
      case 'navy': 
        return { lines: 'bg-livmo-border', dot: 'bg-livmo-gold' };
      case 'white': 
      case 'gray': 
        return { lines: 'bg-livmo-primary', dot: 'bg-livmo-gold' };
      case 'gold': 
        return { lines: 'bg-livmo-navy', dot: 'bg-livmo-primary' };
      default: 
        return { lines: 'bg-livmo-primary', dot: 'bg-livmo-gold' };
    }
  };

  const colors = getAccentColors(variant);

  return (
    <div className={`flex items-center justify-center gap-4 mb-6 ${className}`}>
      <div className={`h-px w-12 ${colors.lines}`}></div>
      <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
      <div className={`h-px w-12 ${colors.lines}`}></div>
    </div>
  );
};
