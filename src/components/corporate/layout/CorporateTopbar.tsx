import React from 'react';
import { Bell, Menu, Search, HelpCircle } from 'lucide-react';
import { CorporateRole } from '../../../types/corporate';
import { useNavigate } from 'react-router-dom';

interface CorporateTopbarProps {
  role: CorporateRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function CorporateTopbar({ role, user, onOpenSidebar, title, description }: CorporateTopbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all h-16">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
            {title && <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>}
            {description && <p className="text-xs text-slate-500 font-medium">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search directory, documents, tasks..." 
              className="w-64 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:bg-white focus:border-linkup-navy focus:ring-2 focus:ring-linkup-navy/20 outline-none transition-all"
            />
          </div>
          
          <button className="hidden sm:block relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <HelpCircle size={20} />
          </button>
          
          <button className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <div className="flex items-center gap-3 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer">
            <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=f1f5f9&color=0f172a`} alt={user.name} className="w-8 h-8 rounded-full shadow-sm" />
            <div className="hidden sm:block text-left">
              <p className="text-sm font-bold text-slate-800 leading-none">{user.name}</p>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}