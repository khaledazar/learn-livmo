import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type CardVariant = 
  | 'standard'      // Standard content card with border and shadow
  | 'top-accent'    // Card with top border accent (border-t-4)
  | 'left-accent'   // Card with left border accent (border-l-4)
  | 'stat'          // Stat/metric card (centered, large numbers)
  | 'compact'       // Compact info card (tighter spacing)
  | 'hero'          // Hero/emphasis card (larger shadow, standout)
  | 'chart'         // Chart container (optimized for graphs)
  | 'alert'         // Alert/callout card (colored background)
  | 'table';        // Data table container

type AccentColor = 'primary' | 'gold' | 'navy' | 'blue' | 'red' | 'green';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: CardVariant;
  accentColor?: AccentColor;
  hover?: boolean;
  animate?: boolean;
  delay?: number;
}

const variantStyles: Record<CardVariant, string> = {
  standard: 'bg-white rounded-lg border border-gray-200 shadow-sm p-6',
  'top-accent': 'bg-white rounded-lg border border-gray-200 shadow-sm p-6',
  'left-accent': 'bg-white rounded-lg border border-gray-200 shadow-sm p-6',
  stat: 'bg-white rounded-lg border border-gray-200 shadow-md p-8 text-center',
  compact: 'bg-white rounded-lg border border-gray-200 shadow-sm p-4',
  hero: 'bg-white rounded-xl border border-gray-200 shadow-2xl p-8',
  chart: 'bg-white rounded-lg border border-gray-200 shadow-sm p-4',
  alert: 'rounded-lg border p-4',
  table: 'bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden',
};

const accentColorStyles: Record<AccentColor, { border: string; bg: string }> = {
  primary: { border: 'border-livmo-primary', bg: 'bg-livmo-primary/5' },
  gold: { border: 'border-livmo-gold', bg: 'bg-livmo-light-gold' },
  navy: { border: 'border-livmo-navy', bg: 'bg-livmo-navy/5' },
  blue: { border: 'border-livmo-border', bg: 'bg-blue-50' },
  red: { border: 'border-red-500', bg: 'bg-red-50' },
  green: { border: 'border-green-500', bg: 'bg-green-50' },
};

const hoverStyles = 'transition-all duration-300 hover:shadow-lg hover:-translate-y-1';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'standard',
  accentColor = 'primary',
  hover = true,
  animate = true,
  delay = 0,
}) => {
  const baseStyles = variantStyles[variant];
  const accentStyles = accentColorStyles[accentColor];
  
  // Build border accent classes
  let accentBorderClass = '';
  if (variant === 'top-accent') {
    accentBorderClass = `border-t-4 ${accentStyles.border}`;
  } else if (variant === 'left-accent') {
    accentBorderClass = `border-l-4 ${accentStyles.border}`;
  } else if (variant === 'alert') {
    accentBorderClass = `${accentStyles.border} ${accentStyles.bg}`;
  }

  const combinedClassName = cn(
    baseStyles,
    accentBorderClass,
    hover && variant !== 'table' && hoverStyles,
    className
  );

  if (animate) {
    return (
      <motion.div
        className={combinedClassName}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedClassName}>{children}</div>;
};

