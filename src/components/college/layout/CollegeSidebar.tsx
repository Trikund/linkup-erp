import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { collegeNavigation } from '../../../config/college/navigation';
import { CollegeRole } from '../../../types/college';

interface CollegeSidebarProps {
  role: CollegeRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CollegeSidebar({ role, isOpen, onClose }: CollegeSidebarProps) {
  const navigate = useNavigate();
  const navItems = collegeNavigation[role];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 lg:translate-x-0 shadow-2xl lg:shadow-none border-r border-slate-800",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800/50">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-linkup-blue to-[#7c3aed] flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <GraduationCap size={20} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">LinkUp<span className="text-[#7c3aed]">College</span></span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <div className="px-3 mb-4">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Menu</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-[#7c3aed]/10 text-white shadow-[inset_0_0_0_1px_rgba(124,58,237,0.2)]" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              )}
            >
              <item.icon size={18} className={cn("transition-colors")} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-slate-800/50">
          <button 
            onClick={() => navigate(`/college/login`)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-red-500/10 hover:shadow-[inset_0_0_0_1px_rgba(239,68,68,0.2)] transition-all duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}