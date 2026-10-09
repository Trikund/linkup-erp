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
    <div className="min-h-screen bg-slate-50 flex font-sans relative overflow-hidden">
      {/* Soft Aurora Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-20%] w-[30%] h-[30%] bg-cyan-400/5 rounded-full blur-[100px]"></div>
      </div>

      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[238px] transition-all duration-300 relative z-10">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
        />
        
        <main className="flex-1 p-5 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="max-w-[1500px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}