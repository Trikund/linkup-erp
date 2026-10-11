import React, { useState } from 'react';
import { Menu, Search, Bell, ChevronDown } from 'lucide-react';
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
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center justify-between px-6 lg:px-8 py-4 gap-4 max-w-[1600px] mx-auto w-full">
        
        {/* Left: Greeting & Subtitle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSidebar}
            className="p-2 -ml-2 rounded-lg text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={22} />
          </button>
          
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {title || 'Good Morning, Rahul 👋'}
            </h1>
            {description && (
              <p className="text-sm text-slate-500 font-medium mt-1 hidden sm:block">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Search, Notifications & User Profile */}
        <div className="flex items-center gap-4 sm:gap-6 shrink-0">
          
          {/* Search Input */}
          <div className="relative hidden md:flex items-center w-60 lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search courses, exams, circulars..."
              className="block w-full pl-10 pr-4 py-2 text-sm rounded-full border border-slate-200 bg-white placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3.5">
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-500 hover:text-slate-700 relative transition-colors rounded-xl hover:bg-slate-50"
                aria-label="Notifications"
              >
                <Bell size={20} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
              </button>

              <AnimatePresence>
                {showNotifications && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50 text-xs"
                  >
                    <div className="p-3.5 border-b border-slate-100 flex justify-between items-center bg-slate-50/60 font-semibold">
                      <span className="text-sm text-slate-900 font-bold">Notifications</span>
                      <button className="text-xs text-blue-600 hover:underline">Mark all read</button>
                    </div>
                    <div className="max-h-[260px] overflow-y-auto p-2 space-y-1">
                      <div className="p-3 hover:bg-slate-50 rounded-xl cursor-pointer">
                        <p className="font-bold text-slate-800 text-sm">New homework posted</p>
                        <p className="text-xs text-slate-500 mt-0.5">Mathematics • 2 hours ago</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Profile Menu */}
            <div className="relative">
              <button 
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 hover:opacity-90 transition-opacity text-left p-1 rounded-xl hover:bg-slate-50"
              >
                <img 
                  src={user.avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80`} 
                  alt={user.name} 
                  className="w-9 h-9 rounded-full object-cover border border-slate-200" 
                />
                <div className="hidden sm:block">
                  <p className="text-sm font-bold text-slate-900 leading-tight">{user.name}</p>
                  <p className="text-xs text-slate-500 leading-tight mt-0.5">{user.roleLabel}</p>
                </div>
                <ChevronDown size={15} className="text-slate-400 hidden sm:block ml-0.5" />
              </button>

              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-slate-200 shadow-lg overflow-hidden z-50 py-1.5 text-xs"
                  >
                    <a href={`/school/${role}/profile`} className="block px-3.5 py-1.5 hover:bg-slate-50 text-slate-700">Profile</a>
                    <a href={`/school/${role}/settings`} className="block px-3.5 py-1.5 hover:bg-slate-50 text-slate-700">Settings</a>
                    <a href={`/school/${role}/help`} className="block px-3.5 py-1.5 hover:bg-slate-50 text-slate-700">Help & Support</a>
                    <div className="border-t border-slate-100 my-1"></div>
                    <a href="/" className="block px-3.5 py-1.5 hover:bg-rose-50 text-rose-600">Logout</a>
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
