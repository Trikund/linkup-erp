import React from 'react';
import { Link } from 'react-router-dom';
import { Link2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function Logo({ className, isDark = false }: LogoProps) {
  return (
    <Link to="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="relative flex h-8 w-8 items-center justify-center text-linkup-blue">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
      </div>
      <span className={cn(
        "text-2xl font-black tracking-tight",
        isDark ? "text-white" : "text-[#0a192f]"
      )}>
        LinkUp
      </span>
    </Link>
  );
}
