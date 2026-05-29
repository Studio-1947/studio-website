import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: React.ElementType;
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  animate?: boolean; // For that luxury slide animation
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  animate = false,
  className,
  children,
  href,
  ...props
}) => {
  const ComponentTag = Component as any;
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full select-none active:scale-95 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';
  
  const variants = {
    primary: 'bg-btn text-white hover:bg-btn/90 border-2 border-btn',
    outline: 'border-2 border-btn text-btn hover:bg-btn hover:text-white',
    secondary: 'bg-muted text-foreground hover:bg-muted/80',
    ghost: 'hover:bg-muted text-foreground/80 hover:text-foreground',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  // If animate is true, we add the sliding logic
  if (animate && variant === 'primary') {
    return (
      <ComponentTag
        className={cn(
          'group relative inline-flex items-center justify-center overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-btn rounded-full select-none active:scale-95',
          sizes[size],
          className
        )}
        href={href}
        {...(props as Record<string, unknown>)}
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full bg-btn ease group-hover:translate-x-0">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-btn transition-all duration-300 transform group-hover:translate-x-full ease">{children}</span>
        <span className="relative invisible">{children}</span>
      </ComponentTag>
    );
  }

  return (
    <ComponentTag
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading}
      href={href}
      {...(props as Record<string, unknown>)}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : null}
      {children}
    </ComponentTag>
  );
};
