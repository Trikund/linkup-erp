import React from 'react';
import { Bell, Menu, Search } from 'lucide-react';
import { CollegeRole } from '../../../types/college';

interface CollegeTopbarProps {
  role: CollegeRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function CollegeTopbar({ role, user, onOpenSidebar, title, description }: CollegeTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
            {title && <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>}
            {description && <p className="text-xs text-slate-500 font-medium">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-64 pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-linkup-blue focus:ring-2 focus:ring-linkup-blue/20 transition-all"
            />
          </div>
          
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <button className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all">
            <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=f1f5f9&color=64748b`} alt={user.name} className="w-8 h-8 rounded-full" />
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-slate-700 leading-none">{user.name}</p>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}