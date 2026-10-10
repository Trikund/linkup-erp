import React, { useState } from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SchoolTopbarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function SchoolTopbar({ role, user, onOpenSidebar, title, description }: SchoolTopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between px-6 lg:px-8 py-4 gap-4 max-w-[1600px] mx-auto w-full">
        
        {/* Left: Page Title & Greeting */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSidebar}
            className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-100 lg:hidden transition-colors"
          >
            <Menu size={22} />
          </button>
          
          <div>
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              {title || 'Dashboard'}
            </h1>
            {description && (
              <p className="text-xs font-medium text-slate-500 mt-0.5 hidden sm:block">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Search, Notifications & Profile */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* Global Search with shortcut badge */}
          <div className="relative hidden sm:flex items-center w-64 lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search size={15} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-12 py-2 text-xs font-medium border border-slate-200/90 rounded-full bg-slate-50/70 hover:bg-white focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400 shadow-inner"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[9px] font-bold text-slate-400 bg-white border border-slate-200 rounded shadow-xs">
                Ctrl K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 relative transition-colors"
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/70">
                      <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Notifications</h3>
                      <button className="text-[11px] font-semibold text-blue-600 hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
                      <div className="p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                        <p className="text-xs text-slate-800 font-bold">New homework posted</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Mathematics • 2 hours ago</p>
                      </div>
                      <div className="p-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer">
                        <p className="text-xs text-slate-800 font-bold">Attendance summary updated</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Weekly attendance is 92% • Yesterday</p>
                      </div>
                    </div>
                    <div className="p-3 border-t border-slate-100 text-center bg-slate-50/70">
                      <button className="text-xs font-bold text-slate-700 hover:text-blue-600">View all notifications</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Card */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2.5 p-1.5 pl-2 pr-3 rounded-full hover:bg-slate-100/80 border border-slate-200/70 transition-all text-left bg-white shadow-xs"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-extrabold text-xs shadow-xs border border-blue-200/60 overflow-hidden shrink-0">
                  {user.avatar ? (
                    <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                  ) : (
                    user.name.charAt(0)
                  )}
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 leading-tight">{user.name}</p>
                  <p className="text-[10px] font-medium text-slate-500 leading-tight">{user.roleLabel}</p>
                </div>
                <ChevronDown size={14} className="text-slate-400 hidden sm:block ml-0.5" />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50 py-2 text-xs"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 sm:hidden">
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-slate-500 text-[11px]">{user.roleLabel}</p>
                    </div>
                    <a href={`/school/${role}/profile`} className="block px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">Profile</a>
                    <a href={`/school/${role}/settings`} className="block px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">Settings</a>
                    <a href={`/school/${role}/help`} className="block px-4 py-2 font-medium text-slate-700 hover:bg-slate-50">Help & Support</a>
                    <div className="border-t border-slate-100 my-1"></div>
                    <a href="/" className="block px-4 py-2 font-medium text-rose-600 hover:bg-rose-50">Logout</a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
