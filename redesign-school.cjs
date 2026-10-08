const fs = require('fs');
const path = require('path');

const files = {
  'src/components/layout/SchoolSidebar.tsx': `
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
                  const isActive = location.pathname === item.href || location.pathname.startsWith(\`\${item.href}/\`);
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
  `,

  'src/components/layout/SchoolTopbar.tsx': `
import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface SchoolTopbarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
}

export function SchoolTopbar({ user, onOpenSidebar, title }: SchoolTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#f0f4f8]/80 backdrop-blur-xl border-b border-white shadow-sm h-16 transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center gap-4">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-white rounded-xl lg:hidden transition-colors">
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex relative group items-center">
            <Search className="absolute left-3 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search classes, subjects, assignments..." 
              className="w-72 pl-9 pr-4 py-2 bg-white border-none rounded-full text-[13px] font-medium shadow-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-white rounded-full transition-colors shadow-sm bg-white/50">
            <Bell size={18} strokeWidth={2.5} />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-[#f0f4f8]"></span>
          </button>

          <div className="flex items-center gap-3 p-1 pr-3 bg-white rounded-full shadow-sm cursor-pointer hover:shadow-md transition-all border border-slate-100">
            <img src={user.avatar || \`https://ui-avatars.com/api/?name=\${user.name}&background=f1f5f9&color=0f172a\`} alt={user.name} className="w-8 h-8 rounded-full" />
            <div className="hidden sm:block text-left mr-1">
              <p className="text-[12px] font-bold text-slate-800 leading-none">{user.name}</p>
              <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{user.roleLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
  `,

  'src/components/layout/SchoolLayout.tsx': `
import React, { useState } from 'react';
import { SchoolSidebar } from './SchoolSidebar';
import { SchoolTopbar } from './SchoolTopbar';

interface SchoolLayoutProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: {
    name: string;
    avatar?: string;
    roleLabel: string;
  };
  title?: string;
  children: React.ReactNode;
}

export function SchoolLayout({ role, user, title, children }: SchoolLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f0f4f8] flex font-sans">
      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[260px] transition-all duration-300">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
        />
        
        <main className="flex-1 p-4 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
  `,

  'src/pages/school/student/StudentDashboard.tsx': `
import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, TrendingUp } from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  return (
    <SchoolLayout role="student" user={user}>
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch mb-2">
        <div className="flex-1 bg-gradient-to-r from-[#2563eb] to-[#38bdf8] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-blue-500/20">
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4">
              👋 Good Morning, {user.name.split(' ')[0]}!
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight text-white drop-shadow-md">
              Keep Learning,<br />Keep Growing!
            </h1>
            <p className="text-blue-100 mb-6 font-medium max-w-sm text-sm">
              Attend classes, complete assignments and stay on track for your goals.
            </p>
            <button className="bg-white text-blue-600 hover:bg-blue-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-colors inline-flex items-center gap-2">
              View My Progress <ArrowRight size={16} />
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-20"></div>
          <div className="absolute -right-4 -bottom-4 text-[140px] opacity-90 drop-shadow-2xl translate-y-8">👨‍🎓</div>
        </div>

        <div className="w-full md:w-64 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><CalendarCheck size={80} /></div>
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
            <CalendarCheck size={24} strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-black text-slate-800">Tue, 10 Oct 2026</h3>
          <p className="text-sm text-slate-500 font-medium mb-4">Day 2 • Week 5</p>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs text-slate-600 font-medium italic">"Small steps every day lead to big results."</p>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Attendance', value: '86%', sub: 'This Month', icon: CalendarCheck, color: 'text-green-600', bg: 'bg-green-100' },
          { label: 'Pending Assignments', value: '4', sub: 'Due this week', icon: ClipboardList, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Upcoming Exams', value: '2', sub: 'Next 7 days', icon: FileCheck, color: 'text-purple-600', bg: 'bg-purple-100' },
          { label: 'Overall Performance', value: '9.2', sub: 'Class Average: 8.4', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner \${kpi.bg} \${kpi.color}\`}>
              <kpi.icon size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-800">{kpi.value}</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{kpi.label}</p>
              <p className="text-[10px] font-medium text-slate-400 mt-0.5">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Classes */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Today's Classes</h3>
            <span className="text-xs font-bold text-blue-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { time: '08:00 AM', subject: 'Mathematics', room: 'Room 101', status: 'Ongoing' },
              { time: '09:00 AM', subject: 'Science', room: 'Room 102', status: '' },
              { time: '10:00 AM', subject: 'English', room: 'Room 103', status: '' },
              { time: '11:00 AM', subject: 'Computer Science', room: 'Lab 2', status: '' }
            ].map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-16 text-[11px] font-bold text-slate-400 pt-1">{c.time}</div>
                <div className="w-1 bg-slate-100 rounded-full relative">
                  <div className={\`absolute inset-x-0 top-0 h-1/2 rounded-full \${c.status ? 'bg-blue-500' : ''}\`} />
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{c.subject}</h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{c.room}</p>
                    </div>
                    {c.status && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md">
                        {c.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Assignments */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Pending Assignments</h3>
            <span className="text-xs font-bold text-blue-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3 flex-1">
            {[
              { title: 'Algebra Worksheet', sub: 'Mathematics • Due Oct 12', color: 'bg-blue-100 text-blue-600' },
              { title: 'Science Lab Report', sub: 'Science • Due Oct 14', color: 'bg-green-100 text-green-600' },
              { title: 'English Essay', sub: 'English • Due Oct 16', color: 'bg-purple-100 text-purple-600' }
            ].map((a, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
                <div className={\`w-10 h-10 rounded-xl flex items-center justify-center \${a.color}\`}>
                  <ClipboardList size={18} strokeWidth={2.5} />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{a.title}</h4>
                  <p className="text-xs font-medium text-slate-500">{a.sub}</p>
                </div>
                <span className="text-[10px] font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-md">Pending</span>
              </div>
            ))}
          </div>
        </div>

        {/* Exams */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Upcoming Exams</h3>
            <span className="text-xs font-bold text-blue-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3 flex-1">
            {[
              { title: 'Mathematics (Mid Term)', sub: '18 Oct • 10:00 AM • Room 204' },
              { title: 'Science (Mid Term)', sub: '20 Oct • 10:00 AM • Lab 1' }
            ].map((e, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <h4 className="text-sm font-bold text-slate-800 mb-1">{e.title}</h4>
                <p className="text-xs font-medium text-slate-500">{e.sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Alert Banner */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">🏆</div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">You're doing great!</h4>
            <p className="text-xs font-medium text-slate-600">Keep your attendance above 85% to maintain excellent progress.</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex flex-col items-end">
            <span className="text-[10px] font-bold text-slate-500 mb-1">Next Goal: 90%</span>
            <div className="w-32 h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <div className="w-[85%] h-full bg-green-500 rounded-full" />
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-md shadow-blue-500/20">
            View Details
          </button>
        </div>
      </div>
      
    </SchoolLayout>
  );
}
  `,

  'src/pages/school/teacher/TeacherDashboard.tsx': `
import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { Users, FileCheck, CalendarCheck, BookOpen, ArrowRight, TrendingUp } from 'lucide-react';

export function TeacherDashboard() {
  const user = USERS.teacher;

  return (
    <SchoolLayout role="teacher" user={user}>
      
      {/* Top Banner */}
      <div className="flex flex-col md:flex-row gap-6 items-stretch mb-2">
        <div className="flex-1 bg-gradient-to-r from-[#6d28d9] to-[#8b5cf6] rounded-3xl p-8 text-white relative overflow-hidden shadow-lg shadow-violet-500/20">
          <div className="relative z-10 max-w-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold mb-4">
              👋 Good Morning, {user.name.split(' ')[0]} Ma'am!
            </div>
            <h1 className="text-3xl md:text-4xl font-black mb-3 leading-tight text-white drop-shadow-md">
              Inspiring Minds,<br />Building Futures
            </h1>
            <p className="text-violet-100 mb-6 font-medium max-w-sm text-sm">
              Manage your classes, track progress and make a difference every day.
            </p>
            <button className="bg-white text-violet-700 hover:bg-violet-50 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-colors inline-flex items-center gap-2">
              View My Classes <ArrowRight size={16} />
            </button>
          </div>
          {/* Decorative Elements */}
          <div className="absolute right-0 bottom-0 top-0 w-1/2 bg-gradient-to-l from-white/10 to-transparent skew-x-12 translate-x-20"></div>
          <div className="absolute -right-4 -bottom-4 text-[140px] opacity-90 drop-shadow-2xl translate-y-8">👩‍🏫</div>
        </div>

        <div className="w-full md:w-64 bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5"><CalendarCheck size={80} /></div>
          <div className="w-12 h-12 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mb-4 shadow-inner">
            <CalendarCheck size={24} strokeWidth={2.5} />
          </div>
          <h3 className="text-lg font-black text-slate-800">Tue, 10 Oct 2026</h3>
          <p className="text-sm text-slate-500 font-medium mb-4">Day 2 • Week 5</p>
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-[11px] text-slate-600 font-medium italic">"Teaching is the profession that creates all other professions."</p>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Classes Today', value: '4', sub: 'Out of 6 total', icon: BookOpen, color: 'text-violet-600', bg: 'bg-violet-100' },
          { label: 'Total Students', value: '128', sub: 'Across all classes', icon: Users, color: 'text-teal-600', bg: 'bg-teal-100' },
          { label: 'Pending Evaluations', value: '12', sub: 'Assignments & Tests', icon: FileCheck, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Average Attendance', value: '92%', sub: 'This Week', icon: CalendarCheck, color: 'text-green-600', bg: 'bg-green-100' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner \${kpi.bg} \${kpi.color}\`}>
              <kpi.icon size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-800">{kpi.value}</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{kpi.label}</p>
              <p className="text-[10px] font-medium text-slate-400 mt-0.5">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 3 Column Layout */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Schedule */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Today's Schedule</h3>
            <span className="text-xs font-bold text-violet-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { time: '08:00 AM', subject: 'Class 10-A', room: 'Mathematics', status: 'Ongoing' },
              { time: '09:00 AM', subject: 'Class 9-B', room: 'Mathematics', status: '' },
              { time: '11:00 AM', subject: 'Class 10-C', room: 'Mathematics', status: '' },
              { time: '01:00 PM', subject: 'Class 11-A', room: 'Advanced Math', status: '' }
            ].map((c, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-16 text-[11px] font-bold text-slate-400 pt-1">{c.time}</div>
                <div className="w-1 bg-slate-100 rounded-full relative">
                  <div className={\`absolute inset-x-0 top-0 h-1/2 rounded-full \${c.status ? 'bg-green-500' : ''}\`} />
                </div>
                <div className="flex-1 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800">{c.subject}</h4>
                      <p className="text-xs font-medium text-slate-500 mt-0.5">{c.room}</p>
                    </div>
                    {c.status && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-md">
                        {c.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submissions */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Recent Submissions</h3>
            <span className="text-xs font-bold text-violet-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { name: 'Aarav Kumar', task: 'Algebra Worksheet', time: '2m ago', img: 'https://ui-avatars.com/api/?name=AK&background=e2e8f0' },
              { name: 'Riya Sharma', task: 'Maths Practice Set', time: '15m ago', img: 'https://ui-avatars.com/api/?name=RS&background=f1f5f9' },
              { name: 'Karan Mehta', task: 'Unit Test 1', time: '1h ago', img: 'https://ui-avatars.com/api/?name=KM&background=e2e8f0' },
              { name: 'Neha Singh', task: 'Lab Report', time: '3h ago', img: 'https://ui-avatars.com/api/?name=NS&background=f1f5f9' }
            ].map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <img src={a.img} alt={a.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-slate-800">{a.name}</h4>
                  <p className="text-[11px] font-medium text-slate-500">{a.task}</p>
                </div>
                <span className="text-[10px] font-bold text-slate-400">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Performance & Pending */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Class Performance</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Class 10-A</span>
          </div>
          <div className="flex items-center gap-6 mb-8">
            <div className="relative w-24 h-24 rounded-full flex items-center justify-center shadow-inner" style={{ background: 'conic-gradient(#10b981 0% 65%, #3b82f6 65% 85%, #f59e0b 85% 100%)' }}>
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="font-black text-xl text-slate-800">92%</span>
              </div>
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500"></span> Excellent</span> <span>32</span></div>
              <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Good</span> <span>18</span></div>
              <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Needs Support</span> <span>4</span></div>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-800">Pending Evaluations</h3>
            <span className="text-xs font-bold text-violet-600 cursor-pointer">View All</span>
          </div>
          <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-3">
             <div className="w-10 h-10 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
                <FileCheck size={18} strokeWidth={2.5} />
             </div>
             <div className="flex-1">
               <h4 className="text-sm font-bold text-slate-800">Unit Test 1 - Mathematics</h4>
               <p className="text-[10px] font-medium text-slate-500">28 submissions • Due Oct 12</p>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Alert Banner */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-xl">💡</div>
          <div>
            <h4 className="text-sm font-bold text-slate-800">Tip for Today</h4>
            <p className="text-xs font-medium text-slate-600">Use interactive examples to make complex concepts easier to understand.</p>
          </div>
        </div>
        <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm">
          View Resources
        </button>
      </div>
      
    </SchoolLayout>
  );
}
  `,

  'src/pages/school/parent/ParentDashboard.tsx': `
import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { CalendarCheck, LineChart, ClipboardList, FileCheck, ArrowRight, TrendingUp, Plus, LayoutDashboard, Calendar, FileText } from 'lucide-react';

export function ParentDashboard() {
  const user = USERS.parent;
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <SchoolLayout role="parent" user={user}>
      
      {/* Top Header Row (Child Selector) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2 bg-white p-4 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center text-lg">👋</div>
          <div>
            <h1 className="text-lg font-black text-slate-800">Good Morning, Mr. Sharma!</h1>
            <p className="text-xs font-medium text-slate-500">Here's your child's progress overview.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white shadow-sm rounded-xl border border-slate-100 cursor-pointer">
                <img src="https://ui-avatars.com/api/?name=Rahul+Sharma&background=e2e8f0" alt="Rahul" className="w-6 h-6 rounded-full" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-800 leading-none">Rahul Sharma</p>
                  <p className="text-[9px] font-medium text-slate-500">Class 10-A</p>
                </div>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <img src="https://ui-avatars.com/api/?name=Ananya+Sharma&background=f1f5f9" alt="Ananya" className="w-6 h-6 rounded-full" />
                <div className="text-left">
                  <p className="text-[11px] font-bold text-slate-600 leading-none">Ananya Sharma</p>
                  <p className="text-[9px] font-medium text-slate-400">Class 8-B</p>
                </div>
             </div>
           </div>
           <button className="flex items-center gap-1.5 px-3 py-2 bg-teal-50 text-teal-700 hover:bg-teal-100 rounded-xl text-[11px] font-bold transition-colors">
             <Plus size={14} strokeWidth={3} /> Add Child
           </button>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Attendance', value: '86%', sub: 'This Month', icon: CalendarCheck, color: 'text-green-600', bg: 'bg-green-100' },
          { label: 'Academic Performance', value: '9.2', sub: 'Class Average: 8.4', icon: TrendingUp, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Pending Assignments', value: '4', sub: 'Due this week', icon: ClipboardList, color: 'text-amber-600', bg: 'bg-amber-100' },
          { label: 'Upcoming Exams', value: '2', sub: 'Next 7 days', icon: FileCheck, color: 'text-purple-600', bg: 'bg-purple-100' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center gap-4 hover:-translate-y-1 transition-transform">
            <div className={\`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner \${kpi.bg} \${kpi.color}\`}>
              <kpi.icon size={24} strokeWidth={2.5} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-800">{kpi.value}</h4>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">{kpi.label}</p>
              <p className="text-[10px] font-medium text-slate-400 mt-0.5">{kpi.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-px">
        {['Overview', 'Attendance', 'Academic', 'Assignments', 'Exams', 'Fees', 'Teacher Remarks'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={\`px-4 py-2 text-[13px] font-bold rounded-t-lg transition-colors border-b-2 \${activeTab === tab.toLowerCase() ? 'border-teal-600 text-teal-700 bg-teal-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}\`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        
        {/* Line Chart Mock */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Academic Performance</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">Last 6 Months</span>
          </div>
          <div className="flex-1 relative min-h-[160px] flex items-end pb-4 pt-8">
             {/* Mock Line Chart SVG */}
             <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,80 L20,70 L40,40 L60,50 L80,30 L100,20" fill="none" stroke="#0d9488" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                <path d="M0,80 L20,70 L40,40 L60,50 L80,30 L100,20 L100,100 L0,100 Z" fill="url(#grad1)" />
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#14b8a6', stopOpacity: 0.2}} />
                    <stop offset="100%" style={{stopColor: '#14b8a6', stopOpacity: 0}} />
                  </linearGradient>
                </defs>
             </svg>
             <div className="w-full flex justify-between px-1 text-[10px] font-bold text-slate-400 z-10 relative">
               <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
             </div>
          </div>
        </div>

        {/* Bar Chart Mock (Horizontal) */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Subject-wise Performance</h3>
          </div>
          <div className="space-y-4 flex-1">
            {[
              { subject: 'Mathematics', val: '94%', w: '94%', color: 'bg-teal-500' },
              { subject: 'Science', val: '91%', w: '91%', color: 'bg-blue-500' },
              { subject: 'English', val: '88%', w: '88%', color: 'bg-violet-500' },
              { subject: 'Computer Science', val: '96%', w: '96%', color: 'bg-teal-500' },
              { subject: 'Social Studies', val: '85%', w: '85%', color: 'bg-amber-500' }
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="w-24 text-[11px] font-bold text-slate-600">{s.subject}</span>
                <div className="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                   <div className={\`h-full rounded-full \${s.color}\`} style={{ width: s.w }}></div>
                </div>
                <span className="w-8 text-right text-[11px] font-bold text-slate-800">{s.val}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Lists */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Recent Updates</h3>
            <span className="text-xs font-bold text-teal-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3">
             <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl">
               <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
                 <ClipboardList size={16} />
               </div>
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-slate-800">Mathematics Assignment</h4>
                 <p className="text-[11px] text-slate-500">New assignment posted by Priya Ma'am</p>
               </div>
               <span className="text-[10px] font-bold text-slate-400">2 hours ago</span>
             </div>
             <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-2xl">
               <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                 <FileCheck size={16} />
               </div>
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-slate-800">Science Test Result</h4>
                 <p className="text-[11px] text-slate-500">Unit Test 1 results published</p>
               </div>
               <span className="text-[10px] font-bold text-slate-400">1 day ago</span>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Upcoming Events</h3>
            <span className="text-xs font-bold text-teal-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3">
             <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                 <Calendar size={18} />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-slate-800">PTM - Parent Teacher Meeting</h4>
                 <p className="text-[11px] text-slate-500 font-medium">21 Oct • 10:00 AM</p>
               </div>
             </div>
             <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
               <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                 <Calendar size={18} />
               </div>
               <div>
                 <h4 className="text-sm font-bold text-slate-800">Science Exhibition</h4>
                 <p className="text-[11px] text-slate-500 font-medium">25 Oct • 09:00 AM</p>
               </div>
             </div>
          </div>
        </div>
      </div>
      
    </SchoolLayout>
  );
}
  `,

  'src/pages/school/admin/AdminDashboard.tsx': `
import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { Users, GraduationCap, Building2, CalendarCheck, TrendingUp, ChevronDown } from 'lucide-react';

export function AdminDashboard() {
  const user = USERS.admin;

  return (
    <SchoolLayout role="admin" user={user}>
      
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-2">
        <div>
          <h1 className="text-2xl font-black text-slate-800 inline-flex items-center gap-2">Good Morning, Admin! 👋</h1>
          <p className="text-sm font-medium text-slate-500 mt-1">Here's your school overview for today.</p>
        </div>
        <div className="hidden md:flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
            <span className="text-lg">🏫</span>
          </div>
          <div className="pr-2">
             <h3 className="text-xs font-bold text-slate-800">Greenfield Academy</h3>
             <p className="text-[10px] font-medium text-slate-500">Main Branch</p>
          </div>
        </div>
      </div>

      {/* KPI Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Students', value: '1,245', sub: '+5%', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-100' },
          { label: 'Teachers & Staff', value: '82', sub: 'Stable', icon: Users, color: 'text-violet-600', bg: 'bg-violet-100' },
          { label: 'Classes & Sections', value: '46', sub: '', icon: Building2, color: 'text-orange-600', bg: 'bg-orange-100' },
          { label: 'Overall Attendance', value: '92%', sub: '+3%', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-100' }
        ].map((kpi, i) => (
          <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-start mb-4">
              <div className={\`w-10 h-10 rounded-xl flex items-center justify-center \${kpi.bg} \${kpi.color}\`}>
                <kpi.icon size={20} strokeWidth={2.5} />
              </div>
              {kpi.sub && (
                <span className="text-[10px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{kpi.sub}</span>
              )}
            </div>
            <div>
              <h4 className="text-2xl font-black text-slate-800">{kpi.value}</h4>
              <p className="text-[11px] font-bold text-slate-500 mt-1">{kpi.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-3 gap-6">
        
        {/* Enrollment Bar Chart */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Enrollment Overview</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded flex items-center gap-1 cursor-pointer">This Year <ChevronDown size={12}/></span>
          </div>
          <div>
            <h4 className="text-3xl font-black text-slate-800">1,245</h4>
            <p className="text-xs font-medium text-slate-500 mb-6">Total Students</p>
          </div>
          <div className="flex-1 flex items-end justify-between gap-2 h-32 pt-4 border-b border-slate-100 pb-2">
            {[40, 50, 45, 70, 85, 100].map((h, i) => (
               <div key={i} className="w-8 bg-blue-500 rounded-t-md hover:bg-blue-600 transition-colors" style={{ height: \`\${h}%\` }}></div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-400">
            <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
          </div>
        </div>

        {/* Attendance Donut */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Attendance Overview</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded flex items-center gap-1 cursor-pointer">This Month <ChevronDown size={12}/></span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
             <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-inner" style={{ background: 'conic-gradient(#10b981 0% 92%, #e2e8f0 92% 100%)' }}>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-center">
                    <span className="font-black text-2xl text-slate-800 block leading-none">92%</span>
                    <span className="text-[10px] font-bold text-slate-500">Overall</span>
                  </div>
                </div>
             </div>
             <div className="w-full space-y-2">
               <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-green-500"></span> Present</span> <span>1,146</span></div>
               <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-red-500"></span> Absent</span> <span>68</span></div>
               <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Late</span> <span>31</span></div>
             </div>
          </div>
        </div>

        {/* Fee Collection Donut */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Fee Collection</h3>
            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded flex items-center gap-1 cursor-pointer">This Month <ChevronDown size={12}/></span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-6">
             <div className="relative w-32 h-32 rounded-full flex items-center justify-center shadow-inner" style={{ background: 'conic-gradient(#3b82f6 0% 78%, #f59e0b 78% 100%)' }}>
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <div className="text-center">
                    <span className="font-black text-2xl text-slate-800 block leading-none">78%</span>
                    <span className="text-[10px] font-bold text-slate-500">Collected</span>
                  </div>
                </div>
             </div>
             <div className="w-full space-y-2">
               <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Collected</span> <span>₹24,68,000</span></div>
               <div className="flex justify-between text-xs font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Pending</span> <span>₹6,82,000</span></div>
               <div className="flex justify-between text-xs font-bold text-slate-800 pt-2 border-t border-slate-100"><span>Total</span> <span>₹31,50,000</span></div>
             </div>
          </div>
        </div>

      </div>

      {/* Bottom Lists */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Recent Activities</h3>
            <span className="text-xs font-bold text-orange-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-4">
             <div className="flex items-center gap-3">
               <img src="https://ui-avatars.com/api/?name=AK&background=e2e8f0" alt="Avatar" className="w-10 h-10 rounded-full" />
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-slate-800">New student admission - Aarav Singh</h4>
                 <p className="text-[11px] text-slate-500">Class 6-A</p>
               </div>
               <span className="text-[10px] font-bold text-slate-400">2 hours ago</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                 <span className="text-lg font-black">₹</span>
               </div>
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-slate-800">Fee payment received from Riya Sharma</h4>
                 <p className="text-[11px] text-slate-500">Class 8-B</p>
               </div>
               <span className="text-[10px] font-bold text-slate-400">4 hours ago</span>
             </div>
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                 <Users size={18} />
               </div>
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-slate-800">New teacher added - Priya Patel</h4>
                 <p className="text-[11px] text-slate-500">Mathematics</p>
               </div>
               <span className="text-[10px] font-bold text-slate-400">1 day ago</span>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-800">Upcoming Events</h3>
            <span className="text-xs font-bold text-orange-600 cursor-pointer">View All</span>
          </div>
          <div className="space-y-3">
             {[
               { date: '15', month: 'OCT', title: 'Science Exhibition', time: 'All Classes • 10:00 AM', color: 'text-orange-600 bg-orange-50 border-orange-100' },
               { date: '18', month: 'OCT', title: 'Parent Teacher Meeting', time: 'Classes 6-10 • 10:00 AM', color: 'text-amber-600 bg-amber-50 border-amber-100' },
               { date: '25', month: 'OCT', title: 'Sports Day', time: 'All Classes • 09:00 AM', color: 'text-green-600 bg-green-50 border-green-100' },
               { date: '28', month: 'OCT', title: 'Annual Function', titleCls: 'text-slate-800', time: 'All Classes • 10:00 AM', color: 'text-teal-600 bg-teal-50 border-teal-100' }
             ].map((e, i) => (
               <div key={i} className="flex items-center gap-4">
                 <div className={\`w-12 h-12 flex flex-col items-center justify-center rounded-xl border \${e.color}\`}>
                   <span className="text-sm font-black leading-none">{e.date}</span>
                   <span className="text-[9px] font-bold mt-0.5">{e.month}</span>
                 </div>
                 <div>
                   <h4 className={\`text-sm font-bold \${e.titleCls || 'text-slate-800'}\`}>{e.title}</h4>
                   <p className="text-[11px] font-medium text-slate-500 mt-0.5">{e.time}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
      
    </SchoolLayout>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('School portal redesign components written successfully.');
