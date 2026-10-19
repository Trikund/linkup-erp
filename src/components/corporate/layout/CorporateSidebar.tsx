import React from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { BriefcaseBusiness, LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { corporateNavigation, corporateEmployeeNavGroups, CorporateNavGroup } from '../../../config/corporate/navigation';
import { CorporateRole } from '../../../types/corporate';

interface CorporateSidebarProps {
  role: CorporateRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateSidebar({ role, isOpen, onClose }: CorporateSidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // If role is employee, use the detailed grouped sections
  const groups: CorporateNavGroup[] = role === 'employee'
    ? corporateEmployeeNavGroups
    : [
        {
          groupName: 'Organization Menu',
          items: corporateNavigation[role]
        }
      ];

  const badgeColorStyles: Record<string, string> = {
    green: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    blue: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
    amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    violet: 'bg-violet-500/15 text-violet-400 border-violet-500/30',
    rose: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - Sleek Corporate Dark Slate */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white flex flex-col transition-transform duration-300 lg:translate-x-0 shadow-2xl lg:shadow-none border-r border-slate-800 font-sans",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Area */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-slate-800">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all">
              <BriefcaseBusiness size={18} className="text-white" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white leading-none block">
                LinkUp<span className="text-blue-500">Corp</span>
              </span>
              <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block mt-0.5">
                {role === 'employee' ? 'Employee Portal' : role === 'manager' ? 'Manager Portal' : role === 'hr' ? 'HR Operations' : 'Enterprise Admin'}
              </span>
            </div>
          </Link>
          <button onClick={onClose} className="lg:hidden text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800">
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-4 scrollbar-thin scrollbar-thumb-slate-800">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1">
              <div className="px-3 mb-1.5 flex items-center justify-between">
                <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                  {group.groupName}
                </span>
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isDashboard = item.path === '/corporate/employee/dashboard' || item.path === '/corporate/manager/dashboard';
                  const isActive = location.pathname === item.path || (!isDashboard && location.pathname.startsWith(`${item.path}/`));

                  return (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-150 group",
                        isActive 
                          ? "bg-blue-600/15 text-white border-l-4 border-blue-500 rounded-l-none pl-2.5 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.1)]" 
                          : "text-slate-400 hover:text-white hover:bg-slate-800/60 border-l-4 border-transparent"
                      )}
                    >
                      <div className="flex items-center gap-2.5 truncate">
                        <item.icon 
                          size={16} 
                          className={cn(
                            "transition-colors shrink-0",
                            isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-200"
                          )} 
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className={cn(
                          "ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded border shrink-0",
                          badgeColorStyles[item.badgeColor || 'blue']
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="p-3 border-t border-slate-800 bg-slate-900/80">
          <div className="flex items-center justify-between px-2 py-1 mb-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] text-slate-400 font-medium">LinkUp Enterprise v4.8</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500">EMP-0428</span>
          </div>
          <button 
            onClick={() => navigate(`/corporate/login`)}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-bold text-rose-400 hover:text-white hover:bg-rose-500/15 border border-rose-500/20 transition-all duration-150"
          >
            <LogOut size={14} />
            Sign Out Session
          </button>
        </div>
      </aside>
    </>
  );
}