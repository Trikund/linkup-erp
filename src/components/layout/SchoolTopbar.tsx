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
    <header className="sticky top-0 z-30 bg-white/60 backdrop-blur-xl border-b border-slate-200/60 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center justify-between px-4 sm:px-6 py-4 gap-4">
        
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenSidebar}
            className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
          >
            <Menu size={24} />
          </button>
          
          <div>
            <h1 className="text-xl font-bold text-slate-900">{title || 'Dashboard'}</h1>
            {description && <p className="text-sm text-slate-500 hidden sm:block">{description}</p>}
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Global Search */}
          <div className="relative hidden sm:block w-64 lg:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search..."
              className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg bg-white/50 focus:outline-none focus:ring-2 focus:ring-linkup-blue/50 focus:border-linkup-blue sm:text-sm transition-colors"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Notifications */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-full text-slate-500 hover:bg-slate-100 relative transition-colors"
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 rounded-xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl overflow-hidden z-50"
                  >
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                      <h3 className="font-semibold text-slate-900">Notifications</h3>
                      <button className="text-xs font-medium text-linkup-blue hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-[300px] overflow-y-auto p-2">
                      <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                        <p className="text-sm text-slate-800 font-medium">New homework posted</p>
                        <p className="text-xs text-slate-500 mt-1">Mathematics • 2 hours ago</p>
                      </div>
                      <div className="p-3 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
                        <p className="text-sm text-slate-800 font-medium">System maintenance</p>
                        <p className="text-xs text-slate-500 mt-1">System • 1 day ago</p>
                      </div>
                    </div>
                    <div className="p-3 border-t border-slate-100 text-center bg-slate-50/50">
                      <button className="text-sm font-medium text-slate-600 hover:text-slate-900">View all notifications</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Profile Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 p-1.5 rounded-lg hover:bg-slate-100 transition-colors text-left"
              >
                <div className="w-9 h-9 rounded-full bg-linkup-blue/10 flex items-center justify-center text-linkup-blue font-bold shadow-sm border border-linkup-blue/20">
                  {user.avatar ? <img src={user.avatar} alt={user.name} className="w-full h-full rounded-full object-cover" /> : user.name.charAt(0)}
                </div>
                <div className="hidden md:block">
                  <p className="text-sm font-semibold text-slate-900 leading-none">{user.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{user.roleLabel}</p>
                </div>
                <ChevronDown size={16} className="text-slate-400 hidden md:block" />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-56 rounded-xl bg-white/90 backdrop-blur-xl border border-slate-200 shadow-xl overflow-hidden z-50 py-2"
                  >
                    <div className="px-4 py-2 border-b border-slate-100 md:hidden">
                      <p className="text-sm font-semibold text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-500">{user.roleLabel}</p>
                    </div>
                    <a href={`/school/${role}/profile`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Profile</a>
                    <a href={`/school/${role}/settings`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Settings</a>
                    <a href={`/school/${role}/help`} className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50">Help</a>
                    <div className="border-t border-slate-100 my-1"></div>
                    <a href="/" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50">Logout</a>
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
