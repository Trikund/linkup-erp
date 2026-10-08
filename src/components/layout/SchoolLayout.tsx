import React, { useState } from 'react';
import { SchoolSidebar } from './SchoolSidebar';
import { SchoolTopbar } from './SchoolTopbar';

interface SchoolLayoutProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  description?: string;
  children: React.ReactNode;
}

export function SchoolLayout({ role, user, title, children }: SchoolLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex font-sans">
      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[260px] transition-all duration-300">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="max-w-[1600px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}