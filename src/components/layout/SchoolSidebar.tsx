import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { getNavigationForRole } from '../../config/schoolNavigation';
import { LogOut, Link as LinkIcon, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SchoolSidebarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  isOpen: boolean;
  onClose: () => void;
}

export function SchoolSidebar({ role, isOpen, onClose }: SchoolSidebarProps) {
  const location = useLocation();
  const navigation = getNavigationForRole(role);

  // Role-based gradient accents
  const roleGradients = {
    student: "from-blue-500 to-cyan-400",
    teacher: "from-violet-500 to-indigo-500",
    parent: "from-teal-400 to-blue-500",
    admin: "from-orange-400 to-rose-400"
  };

  const roleTextActive = {
    student: "text-blue-400",
    teacher: "text-violet-400",
    parent: "text-teal-400",
    admin: "text-orange-400"
  };

  const roleBgActive = {
    student: "bg-blue-500/10",
    teacher: "bg-violet-500/10",
    parent: "bg-teal-500/10",
    admin: "bg-orange-500/10"
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-[260px] bg-[#0B1121]/95 backdrop-blur-2xl border-r border-white/5 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="p-6">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-slate-300 flex items-center justify-center">
              <LinkIcon size={18} className="text-[#0B1121]" strokeWidth={3} />
            </div>
            <span className="text-xl font-black text-white tracking-tight">LinkUp</span>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <h2 className="text-[13px] font-bold text-white mb-0.5">School Management</h2>
            <p className="text-[11px] text-slate-400">Greenfield Academy</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide space-y-6">
          {navigation.map((group, groupIdx) => (
            <div key={groupIdx}>
              {group.groupName && (
                <h3 className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {group.groupName}
                </h3>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => onClose()}
                      className={cn(
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-300 relative overflow-hidden group",
                        isActive
                          ? cn("text-white", roleBgActive[role])
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <div className={cn("absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b", roleGradients[role])} />
                      )}
                      <item.icon
                        size={18}
                        className={cn(
                          "transition-colors z-10",
                          isActive ? roleTextActive[role] : "text-slate-500 group-hover:text-slate-300"
                        )}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="z-10">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-white/5">
          <Link
            to="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-[13px] font-semibold text-slate-400 hover:text-white hover:bg-white/5 transition-all"
          >
            <LogOut size={18} className="text-slate-500" />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}