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

export function SchoolLayout({ role, user, title, description, children }: SchoolLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50/50 flex">
      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64 transition-all duration-300">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
