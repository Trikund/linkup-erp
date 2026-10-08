import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { getNavigationForRole } from '../../config/schoolNavigation';
import { LogOut, Link as LinkIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SchoolSidebarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  isOpen: boolean;
  onClose: () => void;
}

export function SchoolSidebar({ role, isOpen, onClose }: SchoolSidebarProps) {
  const location = useLocation();
  const navigation = getNavigationForRole(role);

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
          "fixed top-0 bottom-0 left-0 z-50 w-[260px] bg-gradient-to-b from-[#11244e] to-[#0a1128] border-r border-white/10 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col shadow-2xl overflow-hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Background glow effects */}
        <div className="absolute top-0 left-0 w-full h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-full h-64 bg-purple-500/10 blur-[80px] pointer-events-none" />

        <div className="p-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <LinkIcon size={20} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">LinkUp</span>
          </div>
          <div className="px-2">
            <h2 className="text-[13px] font-bold text-white mb-0.5">School Management</h2>
            <p className="text-[11px] text-blue-200/70">Greenfield Academy</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 pb-4 scrollbar-hide space-y-6 relative z-10">
          {navigation.map((group, groupIdx) => (
            <div key={groupIdx}>
              {group.groupName && (
                <h3 className="px-4 mb-3 text-[10px] font-bold uppercase tracking-widest text-blue-200/50">
                  {group.groupName}
                </h3>
              )}
              <div className="space-y-1.5">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href || location.pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => onClose()}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-semibold transition-all duration-300 relative overflow-hidden group",
                        isActive
                          ? "text-white bg-gradient-to-r from-blue-600/90 to-blue-400/40 shadow-[0_4px_20px_rgba(37,99,235,0.2)] border border-blue-400/30"
                          : "text-blue-100/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] rounded-r-full" />
                      )}
                      <item.icon
                        size={18}
                        className={cn(
                          "transition-colors z-10",
                          isActive ? "text-white" : "text-blue-200/60 group-hover:text-blue-200"
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
      </aside>
    </>
  );
}