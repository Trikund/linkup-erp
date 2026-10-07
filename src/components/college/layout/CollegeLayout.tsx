import React, { useState } from 'react';
import { CollegeSidebar } from './CollegeSidebar';
import { CollegeTopbar } from './CollegeTopbar';
import { CollegeRole } from '../../../types/college';

interface CollegeLayoutProps {
  role: CollegeRole;
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function CollegeLayout({ role, user, title, description, children }: CollegeLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex selection:bg-[#7c3aed]/20">
      <CollegeSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <CollegeTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#7c3aed]/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}