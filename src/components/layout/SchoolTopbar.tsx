import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface SchoolTopbarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
}

export function SchoolTopbar({ user, onOpenSidebar, title }: SchoolTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#f0f4f8]/80 backdrop-blur-xl border-b border-white shadow-sm h-16 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-white rounded-xl lg:hidden transition-colors">
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex relative group items-center">
            <Search className="absolute left-3 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search classes, subjects, assignments..." 
              className="w-72 pl-9 pr-4 py-2 bg-white border-none rounded-full text-[13px] font-medium shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full transition-colors shadow-sm bg-white/50">
            <Bell size={18} strokeWidth={2.5} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#f0f4f8]"></span>
          </button>

          <div className="flex items-center gap-3 p-1 pr-3 bg-white rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all border border-slate-100">
            <img src={user.avatar || `https://ui-avatars.com/api/?name=${user.name}&background=f1f5f9&color=0f172a`} alt={user.name} className="w-8 h-8 rounded-full" />
            <div className="hidden sm:block text-left mr-1">
              <p className="text-[12px] font-bold text-slate-800 leading-none">{user.name}</p>
              <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}