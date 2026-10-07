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
    <div className="min-h-screen w-full relative flex selection:bg-linkup-blue/20">
      
      {/* Full Screen Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-slate-100">
        <img 
          src={image} 
          alt="Organization Campus" 
          className="absolute inset-0 w-full h-full object-cover brightness-[1.1] contrast-[1.15] saturate-[1.2]"
        />
        {/* Soft white gradient on the left so the glass panel stays bright and clean! */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/20 to-transparent w-[60%]" />
        
        {/* Subtle dark gradient overlay for text readability on the right */}
        <div className="absolute inset-0 bg-gradient-to-l from-black/50 via-black/10 to-transparent w-[60%] right-0 ml-auto" />
        <div className={cn("absolute inset-0 bg-gradient-to-t opacity-70", accentGradients[accent])} />
      </div>

      {/* Left Panel - Auth Form (Premium Floating Glass) */}
      <div className="w-full lg:w-[45%] xl:w-[40%] flex flex-col relative z-10 lg:m-6 xl:m-8 lg:rounded-[2.5rem] bg-white/80 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-6 md:p-10 lg:p-12 overflow-y-auto">
        
        <div className="flex items-center justify-between mb-16">
          <Logo />
          <Link 
            to="/" 
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors bg-white/80 hover:bg-white shadow-sm border border-slate-200 px-4 py-2 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft size={14} strokeWidth={2.5} />
            Back to home
          </Link>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-sm w-full mx-auto">
          <div className="mb-4">
            <span className="text-[11px] font-black uppercase tracking-[0.2em] text-linkup-blue mb-2 block drop-shadow-sm">
              {label}
            </span>
          </div>
          {children}
        </div>
      </div>

      {/* Right Panel - Visual Text & Features */}
      <div className="hidden lg:flex lg:w-[55%] xl:w-[60%] relative z-10 flex-col justify-end p-12 lg:p-20">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mb-10"
        >
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-[1.05] drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            {visualHeadline.split(' ').map((word, i) => (
              <React.Fragment key={i}>
                {word}
                {(i === 1 || i === 3) ? <br /> : ' '}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-xl text-white/90 font-medium drop-shadow-md">
            {visualSubheadline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Restored Frosted Glass Pills with Enhanced Text Visibility */}
          <div className="flex flex-col gap-4 max-w-sm mt-4">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className="group flex items-center gap-5 p-3 pr-6 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.1)]"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={20} strokeWidth={2.5} className="drop-shadow-md" />
                </div>
                <span 
                  className="text-[16px] font-bold text-white tracking-wide group-hover:text-white transition-colors"
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
  );
}
