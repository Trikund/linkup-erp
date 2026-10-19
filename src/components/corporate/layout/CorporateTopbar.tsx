import React from 'react';
import { Bell, Menu, Search, HelpCircle, ChevronRight } from 'lucide-react';
import { CorporateRole } from '../../../types/corporate';
import { Link, useNavigate } from 'react-router-dom';

interface CorporateTopbarProps {
  role: CorporateRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
  breadcrumbs?: { label: string; path?: string }[];
}

export function CorporateTopbar({ role, user, onOpenSidebar, title, description, breadcrumbs }: CorporateTopbarProps) {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all h-16">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden">
            <Menu size={20} />
          </button>
          
          <div className="hidden sm:block">
            {breadcrumbs && breadcrumbs.length > 0 ? (
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    {crumb.path ? (
                      <Link to={crumb.path} className="hover:text-blue-600 transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="font-semibold text-slate-800">{crumb.label}</span>
                    )}
                    {idx < breadcrumbs.length - 1 && (
                      <ChevronRight size={12} className="text-slate-400" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            ) : (
              <>
                {title && <h1 className="text-xl font-bold text-slate-800 leading-tight">{title}</h1>}
                {description && <p className="text-xs text-slate-500 font-medium">{description}</p>}
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden md:flex relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search directory, documents, tasks..." 
              className="w-64 pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none transition-all"
            />
          </div>
          
          <button 
            onClick={() => navigate('/corporate/employee/help')}
            className="hidden sm:block relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
            title="Helpdesk & Support"
          >
            <HelpCircle size={18} />
          </button>
          
          <button 
            onClick={() => navigate('/corporate/employee/dashboard')}
            className="relative p-2 text-slate-500 hover:bg-slate-100 rounded-full transition-colors"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 border-2 border-white rounded-full"></span>
          </button>

          <div className="h-8 w-px bg-slate-200 mx-1"></div>

          <div 
            onClick={() => navigate('/corporate/employee/profile')}
            className="flex items-center gap-2.5 p-1 pr-3 rounded-full hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center shadow-sm border border-slate-200">
              RS
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-xs font-bold text-slate-800 leading-none">{user.name}</p>
              <p className="text-[10px] font-medium text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}