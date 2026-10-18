import React, { useState } from 'react';
import { Bell, Menu, Search, ChevronDown, User, Settings, LogOut, CheckCircle, Clock } from 'lucide-react';
import { CollegeRole } from '../../../types/college';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

interface CollegeTopbarProps {
  role: CollegeRole;
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
  description?: string;
}

export function CollegeTopbar({ role, user, onOpenSidebar, title, description }: CollegeTopbarProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      title: 'Google Placement Drive Open',
      desc: 'Shortlisted for Round 2 Technical Assessment on Oct 25.',
      time: '1 hour ago',
      unread: true,
      category: 'Placements'
    },
    {
      id: 2,
      title: 'Machine Learning Lab Assignment 3',
      desc: 'Deadline updated to Friday, Oct 24 by Prof. Ankit Sharma.',
      time: '3 hours ago',
      unread: true,
      category: 'Academics'
    },
    {
      id: 3,
      title: 'End-Sem Hall Tickets Released',
      desc: 'Official admit cards available for download in Exams section.',
      time: '1 day ago',
      unread: false,
      category: 'Exams'
    }
  ];

  return (
    <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="flex items-center justify-between px-5 lg:px-8 py-3.5 gap-4 max-w-[1600px] mx-auto w-full">
        
        {/* Left: Hamburger & Page Title */}
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenSidebar} 
            className="p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-lg lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>
          
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-tight">
              {title || 'Dashboard'}
            </h1>
            {description && (
              <p className="text-xs text-slate-500 font-medium hidden sm:block mt-0.5">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* Right: Search, Notifications & User Pill */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Global Search Input */}
          <div className="hidden md:flex relative items-center w-60 lg:w-72">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search courses, lectures, notices..." 
              className="block w-full pl-10 pr-4 py-1.5 text-xs sm:text-sm rounded-full border border-slate-200 bg-white placeholder:text-slate-400 text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed] transition-colors"
            />
          </div>

          {/* Notifications Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 text-slate-500 hover:text-slate-700 relative transition-colors rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-200"
              aria-label="Notifications"
            >
              <Bell size={19} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#7c3aed] rounded-full ring-2 ring-white"></span>
            </button>

            <AnimatePresence>
              {showNotifications && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  className="absolute right-0 mt-2 w-80 sm:w-96 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50 text-xs"
                >
                  <div className="p-3.5 border-b border-slate-100 flex justify-between items-center bg-slate-50/70 font-semibold">
                    <span className="text-sm font-bold text-slate-900">Notifications</span>
                    <button className="text-xs text-[#7c3aed] hover:underline font-semibold">Mark all read</button>
                  </div>
                  <div className="max-h-[300px] overflow-y-auto p-2 space-y-1">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-2.5 hover:bg-purple-50/50 rounded-xl cursor-pointer transition-colors border border-transparent hover:border-purple-100">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c3aed] bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                            {n.category}
                          </span>
                          <span className="text-[11px] text-slate-400">{n.time}</span>
                        </div>
                        <p className="font-bold text-slate-800 text-xs">{n.title}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{n.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="p-2 border-t border-slate-100 bg-slate-50/50 text-center">
                    <Link to="/college/student/notifications" onClick={() => setShowNotifications(false)} className="text-xs font-bold text-[#7c3aed] hover:underline">
                      View all notice circulars →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="h-6 w-px bg-slate-200 mx-0.5"></div>

          {/* User Profile Pill */}
          <div className="relative">
            <button 
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className="flex items-center gap-2.5 p-1 pr-3 rounded-full hover:bg-slate-50 border border-slate-200 bg-white transition-all shadow-sm"
            >
              <img 
                src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=7c3aed&color=fff&bold=true`} 
                alt={user.name} 
                className="w-8 h-8 rounded-full border border-purple-200" 
              />
              <div className="hidden sm:block text-left">
                <p className="text-xs font-bold text-slate-800 leading-tight">{user.name}</p>
                <p className="text-[10px] font-semibold text-[#7c3aed]">{user.roleLabel}</p>
              </div>
              <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
            </button>

            <AnimatePresence>
              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  className="absolute right-0 mt-2 w-56 rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden z-50 p-1.5 text-xs"
                >
                  <div className="px-3 py-2.5 border-b border-slate-100 mb-1">
                    <p className="font-bold text-slate-900 text-sm">{user.name}</p>
                    <p className="text-slate-500 text-[11px] font-medium">{user.roleLabel}</p>
                    <span className="inline-block mt-1.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      Roll #21CS1048 • Active
                    </span>
                  </div>

                  <Link 
                    to="/college/student/profile" 
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-[#7c3aed] font-medium transition-colors"
                  >
                    <User size={15} />
                    <span>My Profile & ID</span>
                  </Link>

                  <Link 
                    to="/college/student/settings" 
                    onClick={() => setShowProfileMenu(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-700 hover:bg-purple-50 hover:text-[#7c3aed] font-medium transition-colors"
                  >
                    <Settings size={15} />
                    <span>Account Settings</span>
                  </Link>

                  <div className="my-1 border-t border-slate-100"></div>

                  <button 
                    onClick={() => navigate('/college/login')}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-rose-600 hover:bg-rose-50 font-semibold transition-colors"
                  >
                    <LogOut size={15} />
                    <span>Sign Out</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </header>
  );
}