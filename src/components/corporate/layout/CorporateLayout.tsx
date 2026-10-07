import React, { useState } from 'react';
import { CorporateSidebar } from './CorporateSidebar';
import { CorporateTopbar } from './CorporateTopbar';
import { CorporateRole } from '../../../types/corporate';

interface CorporateLayoutProps {
  role: CorporateRole;
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function CorporateLayout({ role, user, title, description, children }: CorporateLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex selection:bg-linkup-blue/20">
      <CorporateSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <CorporateTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          {/* Subtle Aurora Effect specific to Corporate (Deep Navy/Blue) */}
          <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-linkup-navy/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}