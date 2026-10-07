import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Users, Building, GraduationCap, Briefcase, Building2, Monitor, BarChart3 } from 'lucide-react';
import { Navbar } from '../components/navigation/Navbar';
import { cn } from '../lib/utils';
import { LinkUpAssistant } from '../components/chatbot/LinkUpAssistant';

export function Landing() {
  return (
    <div className="min-h-screen bg-[#cce3f9] selection:bg-linkup-blue/20 flex flex-col font-sans relative overflow-hidden">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#eaf4fb]">
        {/* Full Widescreen Campus Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" 
          style={{ backgroundImage: 'url(/assets/bg_campus_wide.jpg)' }} 
        />
        
        {/* Subtle white gradient overlay on the left so text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
        
        {/* The clean white wave on the right */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] lg:w-[60%] z-0">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-white/95 filter drop-shadow-[0_0_40px_rgba(255,255,255,0.6)]">
            <path fill="currentColor" d="M100,0 H40 C50,40 20,70 0,100 H100 Z" />
          </svg>
        </div>
      </div>

      <Navbar />
      
      <main className="flex-grow flex items-center pt-24 pb-12 relative z-10">
        <div className="container mx-auto px-4 md:px-8 xl:px-12 w-full flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          
          {/* Left Section - Copy & Stats */}
          <div className="w-full lg:w-[45%] text-left pt-12 lg:pt-0">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50/90 text-linkup-blue text-xs font-bold mb-6 tracking-wide shadow-md shadow-blue-900/5 border border-white"
            >
              All in One Management Platform
            </motion.div>

            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-[4rem] font-black tracking-tight text-[#0a192f] mb-6 leading-[1.1] drop-shadow-sm"
            >
              One Platform<br />
              <span className="text-linkup-blue">
                Every Organization
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-700 mb-8 max-w-md leading-relaxed font-medium drop-shadow-sm"
            >
              Manage students, teachers, parents, employees teams and operations — in one unified platform.
            </motion.p>

            {/* Trust Chips */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-12"
            >
              {[
                { icon: Zap, text: "Easy to Use", color: "text-blue-500", bg: "bg-blue-100" },
                { icon: ShieldCheck, text: "Secure & Reliable", color: "text-green-500", bg: "bg-green-100" },
                { icon: Users, text: "Scalable for Everyone", color: "text-blue-500", bg: "bg-blue-100" }
              ].map((chip, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 shadow-md shadow-slate-200/50 text-xs font-bold text-slate-700 border border-white">
                  <div className={`p-1 rounded-full ${chip.bg} ${chip.color}`}>
                    <chip.icon size={12} strokeWidth={3} />
                  </div>
                  {chip.text}
                </div>
              ))}
            </motion.div>

            {/* Feature Stat Box */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.4 }}
               className="bg-white/95 backdrop-blur-xl border border-white rounded-[2rem] shadow-2xl shadow-blue-900/10 p-5 flex items-center justify-between gap-2 relative z-20"
            >
              <StatItem icon={Building2} line1="Multi-Organization" line2="Support" color="text-linkup-blue" />
              <div className="w-px h-12 bg-slate-200" />
              <StatItem icon={Users} line1="Role-Based" line2="Access" color="text-linkup-blue" />
              <div className="w-px h-12 bg-slate-200" />
              <StatItem icon={Monitor} line1="Responsive" line2="on All Devices" color="text-linkup-blue" />
              <div className="w-px h-12 bg-slate-200" />
              <StatItem icon={BarChart3} line1="Future-Ready" line2="& Scalable" color="text-linkup-blue" />
            </motion.div>
          </div>

          {/* Right Section - Organization Cards */}
          <div className="w-full lg:w-[55%] relative z-20">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0a192f] mb-2 drop-shadow-sm">
                Choose Your Organization
              </h2>
              <p className="text-sm font-medium text-slate-600 drop-shadow-sm">
                Get started by selecting the type of organization you want to manage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 relative">
              <OrgCard 
                title="School"
                description="Manage students, teachers, parents, classes, exams and more."
                icon={Building}
                image="/assets/card_school.jpg"
                href="/school/login"
                accentColor="blue"
              />
              <OrgCard 
                title="College"
                description="Manage students, faculty, courses, departments, exams and more."
                icon={GraduationCap}
                image="/assets/card_college.jpg"
                href="/college/login"
                accentColor="violet"
              />
              <OrgCard 
                title="Corporate"
                description="Manage employees, teams, projects, HR, finance and more."
                icon={Briefcase}
                image="/assets/card_corporate.jpg"
                href="/corporate/login"
                accentColor="blue"
              />
            </div>
          </div>
        </div>
      </main>
      
      {/* Public Landing-Page Chatbot */}
      <LinkUpAssistant />
    </div>
  );
}

function StatItem({ icon: Icon, line1, line2, color }: any) {
  return (
    <div className="flex flex-col items-center text-center flex-1">
      <Icon size={20} strokeWidth={2.5} className={`${color} mb-2`} />
      <span className="text-[10px] sm:text-xs font-bold text-[#0a192f] leading-tight">{line1}<br/>{line2}</span>
    </div>
  );
}

function OrgCard({ title, description, icon: Icon, image, href, accentColor }: any) {
  const textAccents: Record<string, string> = {
    blue: "text-linkup-blue",
    violet: "text-[#7c3aed]"
  };
  
  const bgColors: Record<string, string> = {
    blue: "bg-linkup-blue",
    violet: "bg-[#7c3aed]"
  };

  const ringColors: Record<string, string> = {
    blue: "group-hover:ring-linkup-blue/40 group-hover:border-linkup-blue shadow-[0_20px_50px_-12px_rgba(0,82,255,0.25)] group-hover:shadow-[0_30px_60px_-15px_rgba(0,82,255,0.45)]",
    violet: "group-hover:ring-[#7c3aed]/40 group-hover:border-[#7c3aed] shadow-[0_20px_50px_-12px_rgba(124,58,237,0.25)] group-hover:shadow-[0_30px_60px_-15px_rgba(124,58,237,0.45)]"
  };

  const bgTints: Record<string, string> = {
    blue: "bg-gradient-to-b from-white to-[#f0f6ff]",
    violet: "bg-gradient-to-b from-white to-[#f6f2fe]"
  };

  return (
    <Link to={href} className="block group h-full">
      <div 
        className={cn(
          "relative overflow-hidden h-full flex flex-col transition-all duration-300",
          "hover:-translate-y-2 bg-white rounded-2xl shadow-xl shadow-blue-900/10",
          "border-[2px] border-white/90 ring-4 ring-transparent",
          ringColors[accentColor]
        )}
      >
        <div className="relative">
          <div className="relative h-44 overflow-hidden rounded-t-[14px]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${title}&background=e2e8f0&color=94a3b8&size=512`;
              }}
            />
          </div>
          
          {/* Floating Icon perfectly aligned on the left with glowing shadow */}
          <div className="absolute -bottom-6 left-6 z-20">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center border-[2px] border-white transition-transform duration-300 group-hover:scale-110 bg-white",
              textAccents[accentColor],
              accentColor === 'blue' ? 'shadow-[0_4px_12px_rgba(0,82,255,0.2)]' : 'shadow-[0_4px_12px_rgba(124,58,237,0.2)]'
            )}>
              <Icon size={20} strokeWidth={2.5} />
            </div>
          </div>
        </div>
        
        <div className={cn("px-6 pt-10 pb-6 flex-grow flex flex-col text-left relative z-10", bgTints[accentColor])}>
          <h3 className="text-[1.15rem] font-black text-[#0a192f] mb-2">{title}</h3>
          <p className="text-slate-500 text-[13px] leading-[1.6] flex-grow font-medium">
            {description}
          </p>
          
          <div className="mt-4 flex items-center justify-end">
            <div className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center text-white transition-all duration-300",
              bgColors[accentColor],
              accentColor === 'blue' ? 'shadow-[0_4px_15px_rgba(0,82,255,0.4)] group-hover:shadow-[0_6px_25px_rgba(0,82,255,0.6)]' : 'shadow-[0_4px_15px_rgba(124,58,237,0.4)] group-hover:shadow-[0_6px_25px_rgba(124,58,237,0.6)]',
              "group-hover:scale-110"
            )}>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
