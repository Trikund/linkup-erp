const fs = require('fs');
const path = require('path');

const files = {
  'src/components/layout/SchoolSidebar.tsx': `
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
                  const isActive = location.pathname === item.href || location.pathname.startsWith(\`\${item.href}/\`);
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
  `,

  'src/components/layout/SchoolTopbar.tsx': `
import React from 'react';
import { Menu, Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';

interface SchoolTopbarProps {
  role: 'student' | 'teacher' | 'parent' | 'admin';
  user: { name: string; avatar?: string; roleLabel: string };
  onOpenSidebar: () => void;
  title?: string;
}

export function SchoolTopbar({ user, onOpenSidebar }: SchoolTopbarProps) {
  return (
    <header className="sticky top-0 z-30 bg-[#f4f7fb]/80 backdrop-blur-2xl border-b border-white/50 h-[72px] transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-8 h-full gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-white rounded-xl lg:hidden transition-colors shadow-sm bg-white/50 border border-slate-100">
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex relative group items-center bg-white rounded-full border border-slate-200/60 shadow-sm shadow-slate-200/20 max-w-md w-full px-4 py-2.5 transition-all focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-300">
            <Search className="text-slate-400" size={16} strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Search classes, subjects, assignments, exams..." 
              className="bg-transparent border-none outline-none text-[13px] font-medium ml-3 w-full placeholder:text-slate-400 text-slate-700"
            />
            <div className="flex items-center justify-center bg-slate-100/80 border border-slate-200 text-slate-400 text-[10px] font-bold px-2 py-1 rounded-md shadow-sm ml-2">
              Ctrl K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-colors">
              <Bell size={20} strokeWidth={2.5} />
              <span className="absolute top-2 right-2.5 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#f4f7fb]"></span>
            </button>
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-colors">
              <MessageSquare size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="w-px h-8 bg-slate-200/60 hidden sm:block"></div>

          <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full cursor-pointer hover:bg-white/60 transition-all border border-transparent hover:border-slate-200/60 hover:shadow-sm">
            <img src={user.avatar || \`https://ui-avatars.com/api/?name=\${user.name}&background=eff6ff&color=1e40af\`} alt={user.name} className="w-9 h-9 rounded-full shadow-sm" />
            <div className="hidden sm:block text-left mr-1">
              <p className="text-[13px] font-bold text-slate-800 leading-none mb-1">{user.name}</p>
              <p className="text-[11px] font-medium text-slate-500 leading-none">{user.roleLabel}</p>
            </div>
            <ChevronDown size={14} className="text-slate-400 hidden sm:block ml-1" />
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
  description?: string;
  children: React.ReactNode;
}

export function SchoolLayout({ role, user, title, children }: SchoolLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fb] flex font-sans">
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
          <div className="max-w-[1600px] mx-auto w-full">
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
import { CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, TrendingUp, ChevronLeft, ChevronRight, Send, Download, MonitorPlay, CheckCircle2, User, HelpCircle, FileText, Calendar } from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  return (
    <SchoolLayout role="student" user={user}>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        
        {/* LEFT & CENTER COLUMN (Spans 3) */}
        <div className="xl:col-span-3 space-y-6">
          
          {/* Banner */}
          <div className="relative h-[220px] rounded-3xl overflow-hidden shadow-lg shadow-blue-900/10 flex items-center bg-blue-900">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60" 
              alt="Campus" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-blue-500/70 to-transparent"></div>
            
            <div className="relative z-10 px-8 lg:px-12 w-full flex justify-between items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tight drop-shadow-md">
                  Good Morning, {user.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-blue-100 font-medium mb-6 text-sm">Here's your learning journey for today. Keep going!</p>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5">
                    <BookOpen size={14} /> Class 10-A
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5">
                    <User size={14} /> Roll No. 1024
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5">
                    <MonitorPlay size={14} /> Greenfield Academy
                  </span>
                </div>
              </div>

              <div className="hidden md:flex p-5 rounded-2xl bg-white/30 backdrop-blur-xl border border-white/40 shadow-xl max-w-[220px] items-start gap-3">
                 <span className="text-3xl font-serif text-white opacity-80 leading-none">"</span>
                 <p className="text-sm font-semibold text-white leading-snug drop-shadow-sm mt-1">Small steps every day lead to big results.</p>
              </div>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Attendance', value: '86%', sub: '↑ +2% from last month', subColor: 'text-green-500', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-100' },
              { label: 'Pending Assignments', value: '4', sub: 'Due this week', subColor: 'text-slate-500', icon: ClipboardList, color: 'text-orange-500', bg: 'bg-orange-100' },
              { label: 'Upcoming Exams', value: '2', sub: 'Next 7 days', subColor: 'text-slate-500', icon: Calendar, color: 'text-purple-500', bg: 'bg-purple-100' },
              { label: 'Overall Performance', value: '9.2', sub: 'Class Average: 8.4', subColor: 'text-slate-500', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-100' }
            ].map((kpi, i) => (
              <div key={i} className="bg-white rounded-[24px] p-5 shadow-sm border border-slate-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
                <div className="relative w-[52px] h-[52px] flex items-center justify-center shrink-0">
                  <div className={\`absolute inset-0 rounded-2xl \${kpi.bg}\`}></div>
                  <div className={\`absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 \${kpi.bg}\`}></div>
                  <kpi.icon size={24} className={\`relative z-10 \${kpi.color}\`} strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className={\`text-[22px] font-black \${kpi.color.replace('text-', 'text-').replace('500', '600')}\`}>{kpi.value}</h4>
                  <p className="text-[12px] font-bold text-slate-800 leading-tight mb-1">{kpi.label}</p>
                  <p className={\`text-[10px] font-semibold \${kpi.subColor}\`}>{kpi.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mid Row (Classes, Assignments, Exams) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Today's Classes */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[15px]">Today's Classes</h3>
                <span className="text-[11px] font-bold text-blue-600 cursor-pointer">View All</span>
              </div>
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-[60px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-100">
                {[
                  { time: '08:00 AM', subject: 'Mathematics', details: 'Room 101 • Priya Patel', icon: BookOpen, color: 'text-blue-500 bg-blue-100', status: 'Ongoing' },
                  { time: '09:00 AM', subject: 'Science', details: 'Room 102 • Amit Verma', icon: HelpCircle, color: 'text-orange-500 bg-orange-100', status: '' },
                  { time: '10:00 AM', subject: 'English', details: 'Room 103 • Neha Singh', icon: FileText, color: 'text-purple-500 bg-purple-100', status: '' },
                  { time: '11:00 AM', subject: 'Computer Science', details: 'Lab 2 • Vikram Singh', icon: MonitorPlay, color: 'text-teal-500 bg-teal-100', status: '' },
                  { time: '01:30 PM', subject: 'Social Studies', details: 'Room 104 • Rohan Mehta', icon: HelpCircle, color: 'text-yellow-500 bg-yellow-100', status: '' }
                ].map((c, i) => (
                  <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group pb-6 last:pb-0">
                    {/* Time (Left side in actual image, wait, image shows time on left, icon in middle, text on right) */}
                    <div className="w-[60px] shrink-0 text-right pr-4 relative z-10 bg-white py-2">
                       <span className="text-[10px] font-bold text-slate-500">{c.time}</span>
                    </div>
                    {/* Center Icon */}
                    <div className={\`w-8 h-8 rounded-full flex items-center justify-center shrink-0 z-10 \${c.color} border-4 border-white shadow-sm\`}>
                       <c.icon size={12} strokeWidth={3} />
                    </div>
                    {/* Content Right */}
                    <div className="flex-1 pl-4 pb-2 relative z-10">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[13px] font-bold text-slate-800">{c.subject}</h4>
                        {c.status && <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-md">{c.status}</span>}
                      </div>
                      <p className="text-[11px] font-medium text-slate-500">{c.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Assignments */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[15px]">Pending Assignments</h3>
                <span className="text-[11px] font-bold text-blue-600 cursor-pointer">View All</span>
              </div>
              <div className="space-y-4 flex-1">
                {[
                  { tag: 'Mathematics', title: 'Algebra Worksheet', due: 'Due: Oct 12', color: 'text-blue-600 bg-blue-100', icon: BookOpen },
                  { tag: 'Science', title: 'Physics Lab Report', due: 'Due: Oct 14', color: 'text-emerald-600 bg-emerald-100', icon: MonitorPlay },
                  { tag: 'English', title: 'English Essay', due: 'Due: Oct 16', color: 'text-pink-600 bg-pink-100', icon: FileText },
                  { tag: 'Computer Science', title: 'React Basics', due: 'Due: Oct 18', color: 'text-purple-600 bg-purple-100', icon: MonitorPlay, status: 'Not Started', noSubmit: true }
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <div className={\`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 shrink-0 \${a.color}\`}>
                       <a.icon size={12} strokeWidth={2.5} />
                       <span className="text-[10px] font-bold">{a.tag}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-[13px] font-bold text-slate-800 truncate">{a.title}</h4>
                      <p className="text-[10px] font-medium text-slate-500">{a.due}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {a.noSubmit ? (
                        <span className="text-[10px] font-bold text-slate-400 block mb-1">Not Started</span>
                      ) : (
                        <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-md block mb-1">Pending</span>
                      )}
                      <button className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center justify-end gap-1 w-full transition-colors">
                        {a.noSubmit ? 'View' : 'Submit'} <ArrowRight size={12} strokeWidth={2.5} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[15px]">Upcoming Exams</h3>
                <span className="text-[11px] font-bold text-blue-600 cursor-pointer">View All</span>
              </div>
              <div className="space-y-4 flex-1">
                {[
                  { date: '18', month: 'OCT', subject: 'Mathematics', title: 'Mid Term Exam', time: '10:00 AM', room: 'Room 204', color: 'text-blue-600 bg-blue-50 border-blue-100' },
                  { date: '20', month: 'OCT', subject: 'Science', title: 'Mid Term Exam', time: '10:00 AM', room: 'Lab 1', color: 'text-emerald-600 bg-emerald-50 border-emerald-100' },
                  { date: '25', month: 'OCT', subject: 'English', title: 'Unit Test', time: '09:00 AM', room: 'Room 103', color: 'text-pink-600 bg-pink-50 border-pink-100' }
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer">
                    <div className={\`w-14 h-14 rounded-2xl flex flex-col items-center justify-center border shrink-0 \${e.color}\`}>
                       <span className="text-xl font-black leading-none">{e.date}</span>
                       <span className="text-[10px] font-bold mt-1">{e.month}</span>
                    </div>
                    <div>
                      <h4 className="text-[13px] font-black text-slate-800">{e.subject}</h4>
                      <p className="text-[11px] font-bold text-slate-500 mb-1">{e.title}</p>
                      <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={12} /> {e.time}</span>
                        <span className="flex items-center gap-1"><MonitorPlay size={12} /> {e.room}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Spans 1) */}
        <div className="xl:col-span-1 space-y-6">
          
          {/* Calendar */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[15px]">October 2026</h3>
              <div className="flex gap-2">
                <button className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400"><ChevronLeft size={14} /></button>
                <button className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400"><ChevronRight size={14} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-2 text-center text-[11px]">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="font-bold text-slate-400 mb-2">{d}</div>
              ))}
              {Array.from({length: 4}).map((_, i) => <div key={\`e-\${i}\`}></div>)}
              {Array.from({length: 31}).map((_, i) => {
                const day = i + 1;
                const isToday = day === 10;
                return (
                  <div key={day} className="flex justify-center">
                    <span className={\`w-7 h-7 flex items-center justify-center rounded-full font-bold transition-colors cursor-pointer \${isToday ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'text-slate-700 hover:bg-slate-100'}\`}>
                      {day}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <h3 className="font-black text-slate-800 text-[15px] mb-6">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Submit Assignment', icon: Send, color: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100' },
                { label: 'Check Attendance', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 hover:bg-emerald-100' },
                { label: 'View Results', icon: TrendingUp, color: 'text-purple-600', bg: 'bg-purple-50 hover:bg-purple-100' },
                { label: 'Pay Fees', icon: WalletCards, color: 'text-orange-600', bg: 'bg-orange-50 hover:bg-orange-100' },
                { label: 'Download Certificate', icon: Download, color: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100' },
                { label: 'View Timetable', icon: Calendar, color: 'text-pink-600', bg: 'bg-pink-50 hover:bg-pink-100' }
              ].map((btn, i) => (
                <button key={i} className={\`aspect-square rounded-2xl flex flex-col items-center justify-center gap-2 p-2 transition-colors border border-transparent \${btn.bg}\`}>
                  <btn.icon size={20} className={btn.color} strokeWidth={2} />
                  <span className={\`text-[9px] font-bold text-center leading-tight \${btn.color}\`}>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW (Spans all 4 columns) */}
        <div className="xl:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Subject Performance */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[15px]">Subject Performance</h3>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg cursor-pointer">
                This Semester <ChevronDown size={14} />
              </div>
            </div>
            <div className="flex items-end justify-between h-36 w-full pt-4 pr-4 relative">
              <div className="absolute left-0 top-4 bottom-6 flex flex-col justify-between text-[9px] font-bold text-slate-400">
                <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
              </div>
              <div className="flex-1 flex justify-around ml-6 h-full items-end pb-6 border-b border-slate-100">
                {[
                  { label: 'Math', val: '94', color: 'bg-blue-400' },
                  { label: 'Science', val: '91', color: 'bg-emerald-400' },
                  { label: 'English', val: '88', color: 'bg-pink-400' },
                  { label: 'Comp. Sci', val: '96', color: 'bg-purple-400' },
                  { label: 'Social', val: '85', color: 'bg-orange-400' }
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center w-full max-w-[36px] group">
                    <span className="text-[10px] font-bold text-slate-800 mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{b.val}</span>
                    <div className={\`w-full rounded-t-md transition-all duration-500 hover:opacity-80 \${b.color}\`} style={{height: \`\${b.val}%\`}}></div>
                    <span className="text-[11px] font-bold text-slate-500 absolute bottom-0">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attendance Overview */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[15px]">Attendance Overview</h3>
              <div className="flex items-center gap-1 text-[11px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-lg cursor-pointer">
                This Month <ChevronDown size={14} />
              </div>
            </div>
            <div className="flex items-center justify-between h-32 px-4 gap-8">
               <div className="relative w-32 h-32 rounded-full flex items-center justify-center shrink-0" style={{ background: 'conic-gradient(#10b981 0% 86%, #3b82f6 86% 95%, #8b5cf6 95% 100%)' }}>
                  <div className="w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center shadow-sm">
                     <span className="font-black text-3xl text-slate-800 leading-none">86%</span>
                     <span className="text-[10px] font-bold text-slate-500 mt-1">Present</span>
                  </div>
               </div>
               <div className="flex-1 space-y-3">
                 <div className="flex justify-between items-center text-[12px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Present</span> <span className="text-slate-800">18</span></div>
                 <div className="flex justify-between items-center text-[12px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Absent</span> <span className="text-slate-800">2</span></div>
                 <div className="flex justify-between items-center text-[12px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span> Late</span> <span className="text-slate-800">1</span></div>
                 <div className="flex justify-between items-center text-[12px] font-black text-slate-800 pt-2 border-t border-slate-100"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-transparent"></span> Total</span> <span>21</span></div>
               </div>
            </div>
          </div>

          {/* Recent Announcements */}
          <div className="bg-white rounded-[24px] p-6 shadow-sm border border-slate-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[15px]">Recent Announcements</h3>
              <span className="text-[11px] font-bold text-blue-600 cursor-pointer">View All</span>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Science Exhibition', desc: 'School science exhibition on 25th October.', time: '2 hours ago', icon: MonitorPlay, color: 'text-purple-600 bg-purple-50' },
                { title: 'Parent Teacher Meeting', desc: 'PTM on 28th October. All parents are requested to attend.', time: '1 day ago', icon: Calendar, color: 'text-pink-600 bg-pink-50' },
                { title: 'Sports Day', desc: 'Annual sports day on 15th November.', time: '2 days ago', icon: TrendingUp, color: 'text-orange-600 bg-orange-50' }
              ].map((a, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className={\`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 \${a.color}\`}>
                    <a.icon size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[13px] font-bold text-slate-800">{a.title}</h4>
                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">{a.desc}</p>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SchoolLayout>
  );
}

// Temporary WalletCards import replacement if not in lucide-react version
function WalletCards(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={props.strokeWidth || 2} strokeLinecap="round" strokeLinejoin="round" className={props.className}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Advanced Student portal redesign written successfully.');
