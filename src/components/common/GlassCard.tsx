import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  intensity?: 'light' | 'medium' | 'dark';
  children: React.ReactNode;
}

export function GlassCard({ className, intensity = 'medium', children, ...props }: GlassCardProps) {
  const intensities = {
    light: "bg-white/80 backdrop-blur-md border-slate-200/60 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_4px_16px_rgba(0,0,0,0.03)]",
    medium: "bg-white border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.02),0_10px_28px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-200",
    dark: "bg-slate-900 border-slate-800 text-white shadow-xl"
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl border",
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
