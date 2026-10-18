import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, X } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Logo } from '../../brand/Logo';
import { collegeStudentNavGroups, collegeNavigation, CollegeNavGroup } from '../../../config/college/navigation';
import { CollegeRole } from '../../../types/college';
import { motion, AnimatePresence } from 'framer-motion';

interface CollegeSidebarProps {
  role: CollegeRole;
  isOpen: boolean;
  onClose: () => void;
}

export function CollegeSidebar({ role, isOpen, onClose }: CollegeSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  // If role is student, use the rich grouped navigation.
  // For other roles, construct a default group.
  const groups: CollegeNavGroup[] = role === 'student' 
    ? collegeStudentNavGroups 
    : [
        {
          groupName: 'Menu',
          items: collegeNavigation[role]
        }
      ];

  const mainGroups = groups.filter(g => g.groupName !== 'Account');
  const accountGroup = groups.find(g => g.groupName === 'Account');

  return (
    <>
      {/* Mobile Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar - Matching School White SaaS Design */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-100 shadow-[1px_0_10px_rgba(0,0,0,0.01)] transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col font-sans",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <Logo />
            <div className="mt-2.5 px-0.5">
              <h2 className="text-xs font-black uppercase tracking-wider text-[#7c3aed]">
                College Portal
              </h2>
              <p className="text-xs font-semibold text-slate-700">Apex Institute of Technology</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Groups */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-4 scrollbar-thin scrollbar-thumb-slate-200">
          {mainGroups.map((group, groupIdx) => (
            <div key={groupIdx}>
              <div className="px-3.5 mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <span>{group.groupName}</span>
              </div>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.path || 
                    (item.path !== '/college/student' && item.path !== '/college/student/dashboard' && location.pathname.startsWith(item.path));
                  
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className={cn(
                        "flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 group relative",
                        isActive
                          ? "text-[#7c3aed] bg-purple-50/80 font-bold border-l-4 border-[#7c3aed] rounded-l-none pl-2.5"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      <div className="flex items-center gap-3 truncate">
                        <item.icon
                          size={18}
                          className={cn(
                            "transition-colors shrink-0",
                            isActive ? "text-[#7c3aed]" : "text-slate-400 group-hover:text-slate-600"
                          )}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.badge && (
                        <span className={cn(
                          "text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 leading-none",
                          item.badgeColor === 'green' ? "bg-emerald-50 text-emerald-700 border border-emerald-200" :
                          item.badgeColor === 'amber' ? "bg-amber-50 text-amber-700 border border-amber-200" :
                          item.badgeColor === 'blue' ? "bg-blue-50 text-blue-700 border border-blue-200" :
                          "bg-purple-100 text-purple-700 border border-purple-200"
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Account Group */}
          {accountGroup && (
            <div className="pt-2">
              <div className="px-3.5 mb-1.5 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                <span>{accountGroup.groupName}</span>
              </div>
              <div className="space-y-0.5">
                {accountGroup.items.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={() => { if (window.innerWidth < 1024) onClose(); }}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2 rounded-xl text-sm font-medium transition-all duration-150 group relative",
                        isActive
                          ? "text-[#7c3aed] bg-purple-50/80 font-bold border-l-4 border-[#7c3aed] rounded-l-none pl-2.5"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                      )}
                    >
                      <item.icon
                        size={18}
                        className={cn(
                          "transition-colors shrink-0",
                          isActive ? "text-[#7c3aed]" : "text-slate-400 group-hover:text-slate-600"
                        )}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="truncate">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Logout Action */}
        <div className="p-3 border-t border-slate-100 mt-auto bg-slate-50/50">
          <button 
            onClick={() => navigate('/college/login')}
            className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors group"
          >
            <LogOut size={18} className="text-slate-400 group-hover:text-rose-500 transition-colors" />
            <span className="font-semibold">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}