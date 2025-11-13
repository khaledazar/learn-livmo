'use client';

import React from 'react';

// Circle Arrow Pattern (Livmo logo inspiration)
export const CircleArrowPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.1
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute top-10 right-10 w-64 h-64"
        viewBox="0 0 200 200"
        fill="none"
        style={{ opacity }}
      >
        {/* Dot pattern forming arrow shape */}
        {[0, 1, 2, 3, 4, 5, 6].map((row) => (
          <g key={row}>
            {Array.from({ length: row + 1 }).map((_, col) => {
              const x = 100 + col * 15 - (row * 7.5);
              const y = 50 + row * 15;
              const size = 2 + (row * 0.3);
              return (
                <circle
                  key={`${row}-${col}`}
                  cx={x}
                  cy={y}
                  r={size}
                  fill="currentColor"
                  className="text-livmo-border"
                />
              );
            })}
          </g>
        ))}
      </svg>
    </div>
  );
};

// Circular Swirl Pattern
export const CircleSwirlPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.08
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute bottom-0 left-0 w-96 h-96"
        viewBox="0 0 400 400"
        fill="none"
        style={{ opacity }}
      >
        {/* Circular swirl made of dots */}
        {Array.from({ length: 50 }).map((_, i) => {
          const angle = (i / 50) * Math.PI * 4; // 2 full rotations
          const radius = 50 + i * 3;
          const x = 200 + Math.cos(angle) * radius;
          const y = 200 + Math.sin(angle) * radius;
          const size = 1.5 + (i / 50) * 2;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size}
              fill="currentColor"
              className="text-livmo-border"
            />
          );
        })}
      </svg>
    </div>
  );
};

// Scattered Dots Pattern (subtle background)
export const ScatteredDotsPattern: React.FC<{ className?: string; opacity?: number; color?: string }> = ({
  className = '',
  opacity = 0.05,
  color = 'text-livmo-border'
}) => {
  // Generate random but consistent dot positions
  const dots = Array.from({ length: 40 }).map((_, i) => ({
    x: (i * 47) % 100, // Pseudo-random x
    y: (i * 73) % 100, // Pseudo-random y
    size: 0.3 + ((i * 17) % 5) * 0.1,
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        style={{ opacity }}
      >
        {dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            fill="currentColor"
            className={color}
          />
        ))}
      </svg>
    </div>
  );
};

// Grid Dots Pattern (more structured)
export const GridDotsPattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.06
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        style={{ opacity }}
      >
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 10 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={col * 10 + 5}
              cy={row * 10 + 5}
              r="0.5"
              fill="currentColor"
              className="text-livmo-border"
            />
          ))
        )}
      </svg>
    </div>
  );
};

// Wave Pattern with Dots
export const DotWavePattern: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.1
}) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute top-0 right-0 w-full h-48"
        viewBox="0 0 400 100"
        fill="none"
        style={{ opacity }}
      >
        {Array.from({ length: 40 }).map((_, i) => {
          const x = i * 10;
          const y = 50 + Math.sin(i * 0.3) * 20;
          const size = 1 + Math.abs(Math.sin(i * 0.3)) * 1.5;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={size}
              fill="currentColor"
              className="text-livmo-border"
            />
          );
        })}
      </svg>
    </div>
  );
};
