import React, { useState } from 'react';
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
            className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 bottom-0 left-0 z-50 w-64 bg-white/80 backdrop-blur-xl border-r border-slate-200/60 shadow-[4px_0_24px_rgba(0,0,0,0.02)] transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200/50">
          <Logo />
          <div className="mt-4">
            <h2 className="text-sm font-semibold text-slate-800">School Management</h2>
            <p className="text-xs text-slate-500">Greenfield Academy</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-slate-200">
          {navigation.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-6 px-4">
              {group.groupName && (
                <h3 className="px-3 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
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
                        "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group relative",
                        isActive
                          ? "text-linkup-blue bg-linkup-blue/10"
                          : "text-slate-600 hover:text-linkup-blue hover:bg-slate-50"
                      )}
                    >
                      <item.icon
                        size={18}
                        className={cn(
                          "transition-colors",
                          isActive ? "text-linkup-blue" : "text-slate-400 group-hover:text-linkup-blue"
                        )}
                      />
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="sidebar-active"
                          className="absolute left-0 top-1 bottom-1 w-1 bg-linkup-blue rounded-r-full"
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Logout */}
        <div className="p-4 border-t border-slate-200/50">
          <Link
            to="/"
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors group"
          >
            <LogOut size={18} className="text-slate-400 group-hover:text-red-600" />
            Logout
          </Link>
        </div>
      </aside>
    </>
  );
}
