import React from 'react';
import { Menu, Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';

interface SchoolTopbarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
}

export function SchoolTopbar({ user, onOpenSidebar }: SchoolTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-white/50 h-[76px] transition-all shadow-[0_4px_24px_rgba(149,157,165,0.05)]">
      <div className="flex items-center justify-between px-6 lg:px-8 h-full gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-white rounded-xl lg:hidden transition-colors shadow-sm bg-white/50 border border-slate-100">
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex relative group items-center bg-white/90 rounded-full border border-slate-200/60 shadow-sm shadow-slate-200/20 max-w-[480px] w-full px-4 py-2.5 transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-300">
            <Search className="text-slate-400" size={18} strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Search classes, subjects, assignments, exams..." 
              className="bg-transparent border-none outline-none text-[13px] font-medium ml-3 w-full placeholder:text-slate-400 text-slate-700"
            />
            <div className="flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm ml-2">
              Ctrl K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 hover:-translate-y-[1px]">
              <Bell size={20} strokeWidth={2.5} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 hover:-translate-y-[1px]">
              <MessageSquare size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="w-px h-8 bg-slate-200/60 hidden sm:block"></div>

          <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full cursor-pointer hover:bg-white/80 transition-all duration-200 border border-transparent hover:border-slate-200/60 hover:shadow-sm">
            <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=eff6ff&color=1e40af`} alt={user.name} className="w-9 h-9 rounded-full shadow-sm object-cover" />
            <div className="hidden sm:block text-left mr-1">
              <p className="text-[13px] font-bold text-slate-800 leading-none mb-1">{user.name}</p>
              <p className="text-[11px] font-medium text-slate-500 leading-none">{user.roleLabel}</p>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block ml-1" />
          </div>
        </div>
      </div>
    </header>
  );
}