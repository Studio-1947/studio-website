import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface TypographyProps {
  as?: React.ElementType;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'subtext' | 'label' | 'small';
  gradient?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variants = {
  h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mt-1',
  h2: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight',
  h3: 'text-2xl sm:text-3xl md:text-4xl font-bold leading-snug tracking-tight',
  h4: 'text-xl sm:text-2xl font-semibold leading-snug',
  body: 'text-base sm:text-lg text-foreground/90 font-medium leading-relaxed',
  subtext: 'text-sm sm:text-base text-foreground/70 leading-relaxed',
  label: 'text-xs sm:text-sm font-semibold uppercase tracking-widest text-foreground/60',
  small: 'text-xs text-foreground/60',
};

export const Typography: React.FC<TypographyProps> = ({
  as: Component = 'p',
  variant = 'body',
  gradient = false,
  className,
  children,
}) => {
  const gradientStyles = gradient 
    ? 'bg-gradient-to-r from-primary via-primary to-purple-600 bg-clip-text text-transparent'
    : '';

  return (
    <Component
      className={cn(
        variants[variant],
        gradientStyles,
        className
      )}
    >
      {children}
    </Component>
  );
};
