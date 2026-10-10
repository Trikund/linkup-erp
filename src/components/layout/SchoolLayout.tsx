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
    <div className="min-h-screen bg-[#f8fafc] flex font-sans">
      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-60 transition-all duration-300">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
          description={description}
        />
        
        <main className="flex-1 p-5 md:p-6 lg:p-7 overflow-x-hidden">
          <div className="max-w-[1500px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
