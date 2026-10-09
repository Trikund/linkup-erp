import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { getNavigationForRole } from '../../config/schoolNavigation';
import { LogOut, Link as LinkIcon, User, Settings, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SchoolSidebarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  isOpen: boolean;
  onClose: () => void;
}

export function SchoolSidebar({ role, isOpen, onClose }: SchoolSidebarProps) {
  const location = useLocation();
  const navigation = getNavigationForRole(role);
  const mainNav = navigation.filter(g => g.groupName !== 'Account');

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
          "fixed top-0 bottom-0 left-0 z-50 w-[238px] bg-gradient-to-b from-[#0a1128] to-[#121c3a] border-r border-white/5 transition-transform duration-300 ease-in-out lg:translate-x-0 flex flex-col shadow-2xl overflow-hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Subtle Inner Highlight */}
        <div className="absolute inset-0 rounded-r-2xl border-r border-white/5 pointer-events-none" />
        <div className="absolute top-0 left-0 w-full h-64 bg-blue-500/10 blur-[80px] pointer-events-none" />

        <div className="p-5 relative z-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <LinkIcon size={18} className="text-white" strokeWidth={2.5} />
            </div>
            <span className="text-xl font-black text-white tracking-tight">LinkUp</span>
          </div>
          <div className="px-1">
            <h2 className="text-[12px] font-bold text-white mb-0.5">School Management</h2>
            <p className="text-[10px] text-blue-200/70">Greenfield Academy</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 pb-4 scrollbar-hide space-y-4 relative z-10">
          {mainNav.map((group, groupIdx) => (
            <div key={groupIdx}>
              {group.groupName && (
                <h3 className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200/50">
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
                        "flex items-center gap-3 px-3 py-2.5 rounded-[14px] text-[13px] font-semibold transition-all duration-200 relative overflow-hidden group",
                        isActive
                          ? "text-white bg-blue-600/20 shadow-[0_0_15px_rgba(37,99,235,0.15)] border border-blue-400/30"
                          : "text-blue-100/70 hover:text-white hover:bg-white/5"
                      )}
                    >
                      {isActive && (
                        <div className="absolute left-0 top-1.5 bottom-1.5 w-[3px] bg-cyan-400 rounded-r-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      )}
                      <item.icon
                        size={18}
                        className={cn(
                          "transition-colors z-10 shrink-0",
                          isActive ? "text-white" : "text-blue-200/60 group-hover:text-blue-200"
                        )}
                        strokeWidth={isActive ? 2.5 : 2}
                      />
                      <span className="z-10 truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Account Section */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <h3 className="px-3 mb-2 text-[10px] font-bold uppercase tracking-widest text-blue-200/50">
              ACCOUNT
            </h3>
            <div className="space-y-1">
              {[
                { name: 'Profile', icon: User, href: `/school/${role}/profile` },
                { name: 'Settings', icon: Settings, href: `/school/${role}/settings` },
                { name: 'Help & Support', icon: HelpCircle, href: `/school/${role}/help` },
                { name: 'Logout', icon: LogOut, href: '/school/login' }
              ].map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => onClose()}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-[14px] text-[13px] font-semibold text-blue-100/70 hover:text-white hover:bg-white/5 transition-all duration-200 group"
                >
                  <item.icon size={18} className="text-blue-200/60 group-hover:text-blue-200 shrink-0 transition-colors" strokeWidth={2} />
                  <span className="truncate">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}