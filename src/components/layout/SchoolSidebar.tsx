import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { Logo } from '../brand/Logo';
import { getNavigationForRole } from '../../config/schoolNavigation';
import { LogOut } from 'lucide-react';
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
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-200/80 shadow-[1px_0_12px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col font-sans",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100">
          <Logo />
          <div className="mt-3.5 px-0.5 flex items-center justify-between">
            <div>
              <h2 className="text-xs font-bold text-slate-800 tracking-tight">School Management</h2>
              <p className="text-[11px] font-medium text-slate-400">Greenfield Academy</p>
            </div>
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-100 uppercase tracking-wider">
              {role}
            </span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-5 scrollbar-thin scrollbar-thumb-slate-200">
          {navigation.map((group, groupIdx) => (
            <div key={groupIdx}>
              {group.groupName && (
                <h3 className="px-3 mb-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
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
                        "flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group relative",
                        isActive
                          ? "text-blue-600 bg-blue-50/80 font-bold border-l-4 border-blue-600 rounded-l-none pl-2.5 shadow-sm shadow-blue-500/5"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-50/80"
                      )}
                    >
                      <item.icon
                        size={17}
                        className={cn(
                          "transition-colors shrink-0",
                          isActive ? "text-blue-600" : "text-slate-400 group-hover:text-slate-600"
                        )}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Logout */}
        <div className="p-3 border-t border-slate-100">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-rose-600 hover:bg-rose-50/80 transition-colors group"
          >
            <LogOut size={16} className="text-slate-400 group-hover:text-rose-600 transition-colors" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
