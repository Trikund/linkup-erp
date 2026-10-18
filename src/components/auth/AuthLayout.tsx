import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Logo } from '../brand/Logo';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface AuthLayoutProps {
  children: React.ReactNode;
  image: string;
  label: string;
  accent: 'blue' | 'violet' | 'navy';
  visualHeadline: string;
  visualSubheadline: string;
  features: { icon: React.ElementType; text: string }[];
}

export function AuthLayout({
  children,
  image,
  label,
  accent,
  visualHeadline,
  visualSubheadline,
  features
}: AuthLayoutProps) {
  
  const accentGradients = {
    blue: "from-blue-900/40 via-blue-900/10 to-transparent",
    violet: "from-purple-900/40 via-purple-900/10 to-transparent",
    navy: "from-slate-900/40 via-slate-900/10 to-transparent"
  };

  return (
    <div className="min-h-[100dvh] lg:h-[100dvh] w-full relative flex flex-col lg:flex-row lg:overflow-hidden selection:bg-linkup-blue/20">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900 pointer-events-none">
        <img 
          src={image} 
          alt="Organization Campus" 
          className="absolute inset-0 w-full h-full object-cover brightness-[1.08] contrast-[1.12] saturate-[1.15]"
        />
        {/* Soft white gradient on the left so the glass panel stays bright and clean */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent lg:w-[55%]" />
        
        {/* Subtle dark gradient overlay for text readability on the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent lg:w-[60%] right-0 ml-auto" />
        <div className={cn("absolute inset-0 bg-gradient-to-t opacity-70", accentGradients[accent])} />
      </div>

      {/* Left Panel - Auth Form (Premium Floating Glass) */}
      <div className="w-full lg:w-[460px] xl:w-[500px] 2xl:w-[540px] flex-shrink-0 flex flex-col relative z-10 m-0 lg:my-auto lg:ml-6 xl:ml-10 2xl:ml-14 lg:max-h-[calc(100dvh-2.5rem)] xl:max-h-[calc(100dvh-3.5rem)] lg:rounded-[2rem] xl:rounded-[2.5rem] bg-white/85 backdrop-blur-2xl border border-white/90 shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-5 sm:p-7 md:p-8 lg:p-6 xl:p-8 overflow-y-auto">
        
        {/* Card Header: Logo & Back Link */}
        <div className="flex items-center justify-between mb-3.5 xl:mb-5 flex-shrink-0">
          <Logo />
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors bg-white/90 hover:bg-white shadow-sm border border-slate-200/80 px-3.5 py-1.5 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={13} strokeWidth={2.5} />
            Back to home
          </Link>
        </div>

        {/* Form Body */}
        <div className="flex-1 flex flex-col justify-center max-w-sm w-full mx-auto my-auto">
          <div className="mb-1.5">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-linkup-blue block drop-shadow-sm">
              {label}
            </span>
          </div>
          {children}
        </div>
      </div>

      {/* Right Panel - Visual Text & Features */}
      <div className="hidden lg:flex flex-1 relative z-10 flex-col justify-center p-8 lg:p-10 xl:p-14 2xl:p-18 overflow-hidden">
        <div className="max-w-xl my-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mb-5 xl:mb-7"
          >
            <h2 className="text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black text-white mb-2.5 xl:mb-3.5 leading-[1.08] drop-shadow-[0_4px_14px_rgba(0,0,0,0.4)]">
              {visualHeadline.split(' ').map((word, i) => (
                <React.Fragment key={i}>
                  {word}
                  {(i === 1 || i === 3) ? <br /> : ' '}
                </React.Fragment>
              ))}
            </h2>
            <p className="text-sm xl:text-base 2xl:text-lg text-white/90 font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {visualSubheadline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {/* Frosted Glass Pills with Responsive Fit */}
            <div className="flex flex-col gap-2.5 xl:gap-3 max-w-md">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center gap-3.5 xl:gap-4 p-2 xl:p-2.5 pr-5 xl:pr-6 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 rounded-full bg-white/25 text-white shadow-inner group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                    <feature.icon size={17} strokeWidth={2.5} className="drop-shadow-md" />
                  </div>
                  <span 
                    className="text-xs sm:text-sm xl:text-[15px] font-bold text-white tracking-wide group-hover:text-white transition-colors"
                    style={{ textShadow: '0px 2px 8px rgba(0,0,0,0.8), 0px 1px 3px rgba(0,0,0,0.6)' }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
    </div>
  );
}
