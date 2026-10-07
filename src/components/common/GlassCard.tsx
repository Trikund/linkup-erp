import React from 'react';
import { cn } from '../../lib/utils';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<"div"> {
  intensity?: 'light' | 'medium' | 'dark';
  children: React.ReactNode;
}

export function GlassCard({ className, intensity = 'medium', children, ...props }: GlassCardProps) {
  const intensities = {
    light: "bg-white/40 backdrop-blur-md border-white/50",
    medium: "bg-white/60 backdrop-blur-xl border-white/70",
    dark: "bg-slate-900/60 backdrop-blur-xl border-white/10 text-white"
  };

  return (
    <motion.div
      className={cn(
        "rounded-2xl border shadow-[0_8px_32px_0_rgba(31,38,135,0.07)]",
        intensities[intensity],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
