import React from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { BriefcaseBusiness, LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { corporateNavigation } from '../../../config/corporate/navigation';
import { CorporateRole } from '../../../types/corporate';

interface CorporateSidebarProps {
  role: CorporateRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateSidebar({ role, isOpen, onClose }: CorporateSidebarProps) {
  const navigate = useNavigate();
  const navItems = corporateNavigation[role];

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
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-linkup-navy to-linkup-blue flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <BriefcaseBusiness size={18} className="text-white" />
            </div>
            <span className="text-lg font-black tracking-tight text-white">LinkUp<span className="text-linkup-blue">Corp</span></span>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-hide">
          <div className="px-3 mb-4">
            <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">Organization Menu</span>
          </div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => { if(window.innerWidth < 1024) onClose(); }}
              className={({ isActive }) => cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                isActive 
                  ? "bg-linkup-navy/20 text-white border-l-2 border-linkup-blue shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]" 
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50 border-l-2 border-transparent"
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
            onClick={() => navigate(`/corporate/login`)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:text-white hover:bg-red-500/10 transition-all duration-200"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}