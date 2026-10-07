import React from 'react';
import { Navbar } from '../components/navigation/Navbar';
import { Building, GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

export function SelectOrganization() {
  return (
    <div className="min-h-screen bg-[#cce3f9] selection:bg-linkup-blue/20 flex flex-col relative overflow-hidden">
      {/* Background Graphic Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-[#eaf4fb]">
        {/* Full Widescreen Campus Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100" 
          style={{ backgroundImage: 'url(/assets/bg_campus_wide.jpg)' }} 
        />
        
        {/* Glass overlay to make the centered cards stand out */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/70" />
      </div>

      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden flex items-center z-10">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-[#0a192f] mb-4 drop-shadow-sm"
            >
              Choose Your Organization
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-700 font-medium"
            >
              Get started by selecting the type of organization you want to manage.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          >
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
          </motion.div>
        </div>
      </main>
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
    blue: "group-hover:ring-linkup-blue/30 group-hover:border-linkup-blue",
    violet: "group-hover:ring-[#7c3aed]/30 group-hover:border-[#7c3aed]"
  };

  return (
    <Link to={href} className="block group h-full">
      <div 
        className={cn(
          "relative overflow-hidden h-full flex flex-col transition-all duration-300",
          "hover:-translate-y-2 bg-white rounded-2xl shadow-2xl shadow-blue-900/10",
          "border-[2px] border-white/90 ring-4 ring-transparent",
          ringColors[accentColor]
        )}
      >
        <div className="relative">
          <div className="relative h-48 overflow-hidden rounded-t-[14px]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${title}&background=e2e8f0&color=94a3b8&size=512`;
              }}
            />
          </div>
          
          {/* Floating Icon perfectly aligned on the left */}
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
        
        <div className="px-6 pt-10 pb-6 flex-grow flex flex-col text-left relative z-10 bg-white">
          <h3 className="text-xl font-black text-[#0a192f] mb-2">{title}</h3>
          <p className="text-slate-500 text-[14px] leading-[1.6] flex-grow font-medium">
            {description}
          </p>
          
          <div className="mt-4 flex items-center justify-end">
            <div className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-md",
              bgColors[accentColor],
              "group-hover:shadow-lg group-hover:scale-110"
            )}>
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
