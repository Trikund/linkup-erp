import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, ...props }, ref) => {
    
    const variants = {
      primary: "bg-linkup-blue text-white shadow-md hover:shadow-lg hover:-translate-y-0.5",
      secondary: "bg-white text-slate-900 border border-slate-200 shadow-sm hover:bg-slate-50",
      glass: "bg-white/70 backdrop-blur-md border border-white/80 text-slate-900 shadow-sm hover:bg-white/80",
      ghost: "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-5 py-2.5 text-sm font-medium",
      lg: "px-6 py-3 text-base font-medium"
    };

    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
