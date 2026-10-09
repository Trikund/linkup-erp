const fs = require('fs');
const path = require('path');

const files = {
  'src/components/layout/SchoolSidebar.tsx': `
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
                  const isActive = location.pathname === item.href || location.pathname.startsWith(\`\${item.href}/\`);
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
                { name: 'Profile', icon: User, href: \`/school/\${role}/profile\` },
                { name: 'Settings', icon: Settings, href: \`/school/\${role}/settings\` },
                { name: 'Help & Support', icon: HelpCircle, href: \`/school/\${role}/help\` },
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
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md border-b border-white/50 h-[76px] transition-all shadow-[0_4px_24px_rgba(149,157,165,0.05)]">
      <div className="flex items-center justify-between px-6 lg:px-8 h-full gap-4">
        <div className="flex items-center gap-4 flex-1">
          <button onClick={onOpenSidebar} className="p-2 -ml-2 text-slate-500 hover:bg-white rounded-xl lg:hidden transition-colors shadow-sm bg-white/50 border border-slate-100">
            <Menu size={20} />
          </button>
          
          <div className="hidden md:flex relative group items-center bg-white/90 rounded-full border border-slate-200/60 shadow-sm shadow-slate-200/20 max-w-[480px] w-full px-4 py-2.5 transition-all hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-300">
            <Search className="text-slate-400" size={18} strokeWidth={2.5} />
            <input 
              type="text" 
              placeholder="Search classes, subjects, assignments, exams..." 
              className="bg-transparent border-none outline-none text-[13px] font-medium ml-3 w-full placeholder:text-slate-400 text-slate-700"
            />
            <div className="flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm ml-2">
              Ctrl K
            </div>
          </div>
        </div>

        <div className="flex items-center gap-5 shrink-0">
          <div className="flex items-center gap-2">
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 hover:-translate-y-[1px]">
              <Bell size={20} strokeWidth={2.5} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
            </button>
            <button className="relative p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-full transition-all duration-200 hover:-translate-y-[1px]">
              <MessageSquare size={20} strokeWidth={2.5} />
            </button>
          </div>

          <div className="w-px h-8 bg-slate-200/60 hidden sm:block"></div>

          <div className="flex items-center gap-3 p-1.5 pr-4 rounded-full cursor-pointer hover:bg-white/80 transition-all duration-200 border border-transparent hover:border-slate-200/60 hover:shadow-sm">
            <img src={user.avatar || \`https://ui-avatars.com/api/?name=\${user.name}&background=eff6ff&color=1e40af\`} alt={user.name} className="w-9 h-9 rounded-full shadow-sm object-cover" />
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
    <div className="min-h-screen bg-slate-50 flex font-sans relative overflow-hidden">
      {/* Soft Aurora Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-violet-400/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-20%] w-[30%] h-[30%] bg-cyan-400/5 rounded-full blur-[100px]"></div>
      </div>

      <SchoolSidebar 
        role={role} 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0 lg:pl-[238px] transition-all duration-300 relative z-10">
        <SchoolTopbar 
          role={role} 
          user={user} 
          onOpenSidebar={() => setSidebarOpen(true)}
          title={title}
        />
        
        <main className="flex-1 p-5 md:p-6 lg:p-8 overflow-x-hidden relative">
          <div className="max-w-[1500px] mx-auto w-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
  `,

  'src/pages/school/student/StudentDashboard.tsx': `
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, 
  TrendingUp, ChevronLeft, ChevronRight, Send, Download, MonitorPlay, 
  CheckCircle2, User, FileText, Calendar, Clock, BookMarked
} from 'lucide-react';

export function StudentDashboard() {
  const navigate = useNavigate();
  const user = USERS.student;
  
  // Custom interactive state for Calendar mock
  const [currentDate] = useState(new Date(2026, 9, 10)); // Oct 10, 2026

  // Reusable card styling for strict glassmorphism matching
  const cardClasses = "bg-white/80 backdrop-blur-md border border-white/75 rounded-2xl shadow-[0_4px_24px_rgba(149,157,165,0.08)] transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(149,157,165,0.12)] hover:border-white/95 flex flex-col";

  return (
    <SchoolLayout role="student" user={user}>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
        
        {/* LEFT & CENTER COLUMN (Spans 3) */}
        <div className="xl:col-span-3 space-y-5">
          
          {/* 8. WELCOME HERO BANNER */}
          <div className="relative h-[130px] rounded-3xl overflow-hidden shadow-lg shadow-blue-900/5 flex items-center bg-blue-900 group">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1200&q=80" 
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-700 group-hover:scale-105" 
              alt="Campus" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 via-blue-500/80 to-transparent"></div>
            
            <div className="relative z-10 px-8 w-full flex justify-between items-center h-full">
              <div className="flex flex-col justify-center">
                <h1 className="text-[28px] font-black text-white leading-tight tracking-tight drop-shadow-md">
                  Good Morning, {user.name.split(' ')[0]}! 👋
                </h1>
                <p className="text-blue-100 font-medium mb-3 text-[13px] drop-shadow-sm">
                  Here's your learning journey for today. Keep going!
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                    <BookMarked size={12} /> Class 10-A
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                    <User size={12} /> Roll No. 1024
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 inline-flex items-center gap-1.5 shadow-sm">
                    <MonitorPlay size={12} /> Greenfield Academy
                  </span>
                </div>
              </div>

              <div className="hidden lg:flex p-4 rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl max-w-[200px] items-start gap-2 h-auto mr-4 transition-all duration-300 hover:bg-white/30">
                 <span className="text-2xl font-serif text-white opacity-90 leading-none">"</span>
                 <p className="text-[12px] font-semibold text-white leading-snug drop-shadow-sm mt-1">Small steps every day lead to big results.</p>
              </div>
            </div>
          </div>

          {/* 9. FOUR STATISTIC CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: 'Attendance', value: '86%', sub: '↑ +2% from last month', subColor: 'text-emerald-500', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-100' },
              { label: 'Pending Assignments', value: '4', sub: 'Due this week', subColor: 'text-slate-500', icon: ClipboardList, color: 'text-orange-500', bg: 'bg-orange-100' },
              { label: 'Upcoming Exams', value: '2', sub: 'Next 7 days', subColor: 'text-slate-500', icon: Calendar, color: 'text-violet-500', bg: 'bg-violet-100' },
              { label: 'Overall Performance', value: '9.2', sub: 'Class Average: 8.4', subColor: 'text-slate-500', icon: TrendingUp, color: 'text-blue-500', bg: 'bg-blue-100' }
            ].map((kpi, i) => (
              <div key={i} className={\`\${cardClasses} p-5 flex-row items-center gap-4\`}>
                <div className="relative w-[50px] h-[50px] flex items-center justify-center shrink-0">
                  {/* Map Pin / Teardrop shape */}
                  <div className={\`absolute inset-0 rounded-2xl \${kpi.bg}\`}></div>
                  <div className={\`absolute -bottom-[3px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rotate-45 \${kpi.bg}\`}></div>
                  <kpi.icon size={22} className={\`relative z-10 \${kpi.color}\`} strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className={\`text-2xl font-black mb-0.5 \${kpi.color.replace('text-', 'text-').replace('500', '600')}\`}>{kpi.value}</h4>
                  <p className="text-[12px] font-bold text-slate-700 leading-tight mb-1 truncate">{kpi.label}</p>
                  <p className={\`text-[10px] font-bold truncate \${kpi.subColor}\`}>{kpi.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 10. MAIN DASHBOARD GRID (Classes, Assignments, Exams) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            
            {/* 11. TODAY'S CLASSES */}
            <div className={\`\${cardClasses} p-6\`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[14px]">Today's Classes</h3>
                <button onClick={() => navigate('/school/student/timetable')} className="text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="relative space-y-0 before:absolute before:inset-0 before:ml-[54px] before:w-[2px] before:bg-slate-100 before:h-[calc(100%-20px)] flex-1">
                {[
                  { time: '08:00 AM', subject: 'Mathematics', details: 'Room 101 • Priya Patel', icon: BookOpen, color: 'text-blue-500 bg-blue-100', status: 'Ongoing' },
                  { time: '09:00 AM', subject: 'Science', details: 'Room 102 • Amit Verma', icon: MonitorPlay, color: 'text-orange-500 bg-orange-100', status: '' },
                  { time: '10:00 AM', subject: 'English', details: 'Room 103 • Neha Singh', icon: FileText, color: 'text-violet-500 bg-violet-100', status: '' },
                  { time: '11:00 AM', subject: 'Computer Science', details: 'Lab 2 • Vikram Singh', icon: MonitorPlay, color: 'text-cyan-500 bg-cyan-100', status: '' },
                  { time: '01:30 PM', subject: 'Social Studies', details: 'Room 104 • Rohan Mehta', icon: BookMarked, color: 'text-pink-500 bg-pink-100', status: '' }
                ].map((c, i) => (
                  <div key={i} className="relative flex items-center group pb-5 last:pb-0">
                    <div className="w-[50px] shrink-0 text-right pr-3 relative z-10 bg-transparent py-1">
                       <span className="text-[10px] font-bold text-slate-500 leading-tight block">{c.time.split(' ')[0]}</span>
                       <span className="text-[9px] font-bold text-slate-400 block">{c.time.split(' ')[1]}</span>
                    </div>
                    <div className={\`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 \${c.color} border-[3px] border-white shadow-sm transition-transform duration-200 group-hover:scale-110\`}>
                       <c.icon size={11} strokeWidth={3} />
                    </div>
                    <div className="flex-1 pl-3 relative z-10 pt-1 hover:bg-slate-50/50 rounded-lg transition-colors p-1 -mt-1">
                      <div className="flex items-center gap-2">
                        <h4 className="text-[12px] font-bold text-slate-800">{c.subject}</h4>
                        {c.status && <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[9px] font-bold rounded-md">{c.status}</span>}
                      </div>
                      <p className="text-[10px] font-medium text-slate-500 mt-0.5">{c.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 12. PENDING ASSIGNMENTS */}
            <div className={\`\${cardClasses} p-6\`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[14px]">Pending Assignments</h3>
                <button onClick={() => navigate('/school/student/assignments')} className="text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="space-y-3 flex-1">
                {[
                  { tag: 'Mathematics', title: 'Algebra Worksheet', due: 'Due: Oct 12', color: 'text-blue-600 bg-blue-50 border-blue-100', icon: BookOpen },
                  { tag: 'Science', title: 'Physics Lab Report', due: 'Due: Oct 14', color: 'text-emerald-600 bg-emerald-50 border-emerald-100', icon: MonitorPlay },
                  { tag: 'English', title: 'English Essay', due: 'Due: Oct 16', color: 'text-pink-600 bg-pink-50 border-pink-100', icon: FileText },
                  { tag: 'Computer Science', title: 'React Basics', due: 'Due: Oct 18', color: 'text-violet-600 bg-violet-50 border-violet-100', icon: MonitorPlay, status: 'Not Started', noSubmit: true }
                ].map((a, i) => (
                  <div key={i} className="flex items-center gap-3 border-b border-slate-100/60 pb-3 last:border-0 last:pb-0 hover:bg-slate-50/50 rounded-lg transition-colors p-1 -mx-1">
                    <div className={\`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border \${a.color}\`}>
                       <a.icon size={12} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 mb-0.5">
                         <span className={\`text-[9px] font-bold px-1.5 py-0.5 rounded-md \${a.color}\`}>{a.tag}</span>
                      </div>
                      <h4 className="text-[12px] font-bold text-slate-800 truncate">{a.title}</h4>
                      <p className="text-[9px] font-bold text-slate-500 mt-0.5">{a.due}</p>
                    </div>
                    <div className="text-right shrink-0">
                      {a.noSubmit ? (
                        <span className="text-[9px] font-bold text-slate-400 block mb-1">Not Started</span>
                      ) : (
                        <span className="text-[9px] font-bold text-orange-500 bg-orange-50 px-1.5 py-0.5 rounded-md block mb-1">Pending</span>
                      )}
                      <button onClick={() => navigate('/school/student/assignments')} className="text-[10px] font-bold text-blue-600 hover:text-blue-700 flex items-center justify-end gap-1 w-full transition-colors group">
                        {a.noSubmit ? 'View' : 'Submit'} <ArrowRight size={10} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 13. UPCOMING EXAMS */}
            <div className={\`\${cardClasses} p-6\`}>
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-black text-slate-800 text-[14px]">Upcoming Exams</h3>
                <button onClick={() => navigate('/school/student/exams')} className="text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
              </div>
              <div className="space-y-3 flex-1">
                {[
                  { date: '18', month: 'OCT', subject: 'Mathematics', title: 'Mid Term Exam', time: '10:00 AM', room: 'Room 204', color: 'text-blue-600 bg-blue-50 border-blue-200' },
                  { date: '20', month: 'OCT', subject: 'Science', title: 'Mid Term Exam', time: '10:00 AM', room: 'Lab 1', color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
                  { date: '25', month: 'OCT', subject: 'English', title: 'Unit Test', time: '09:00 AM', room: 'Room 103', color: 'text-pink-600 bg-pink-50 border-pink-200' }
                ].map((e, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100 cursor-pointer shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-200 ease-out bg-white/50">
                    <div className={\`w-12 h-12 rounded-xl flex flex-col items-center justify-center border shrink-0 \${e.color}\`}>
                       <span className="text-lg font-black leading-none">{e.date}</span>
                       <span className="text-[9px] font-bold mt-1 tracking-wider">{e.month}</span>
                    </div>
                    <div className="pt-0.5">
                      <h4 className="text-[13px] font-black text-slate-800 leading-tight">{e.subject}</h4>
                      <p className="text-[10px] font-bold text-slate-500 mb-1.5">{e.title}</p>
                      <div className="flex items-center gap-2 text-[9px] font-bold text-slate-400">
                        <span className="flex items-center gap-1"><Clock size={10} /> {e.time}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                        <span className="flex items-center gap-1"><MonitorPlay size={10} /> {e.room}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN (Spans 1) */}
        <div className="xl:col-span-1 space-y-5">
          
          {/* 14. CALENDAR */}
          <div className={\`\${cardClasses} p-6\`}>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-black text-slate-800 text-[14px]">October 2026</h3>
              <div className="flex gap-1">
                <button className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors"><ChevronLeft size={14} /></button>
                <button className="w-6 h-6 rounded-md hover:bg-slate-100 flex items-center justify-center text-slate-400 transition-colors"><ChevronRight size={14} /></button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-y-3 gap-x-1 text-center text-[11px]">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="font-bold text-slate-400 mb-1">{d}</div>
              ))}
              {/* Offset for Oct 2026 (Starts on Thursday) */}
              {Array.from({length: 4}).map((_, i) => <div key={\`e-\${i}\`}></div>)}
              {Array.from({length: 31}).map((_, i) => {
                const day = i + 1;
                const isToday = day === 10;
                const hasEvent = [12, 14, 18, 20, 25].includes(day);
                return (
                  <div key={day} className="flex justify-center relative">
                    <span className={\`w-7 h-7 flex items-center justify-center rounded-full font-bold transition-colors cursor-pointer \${isToday ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30' : 'text-slate-700 hover:bg-slate-100 hover:text-blue-600'}\`}>
                      {day}
                    </span>
                    {hasEvent && !isToday && (
                      <span className="absolute bottom-0 w-1 h-1 bg-orange-400 rounded-full"></span>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* 15. QUICK ACTIONS */}
          <div className={\`\${cardClasses} p-6 flex-1\`}>
            <h3 className="font-black text-slate-800 text-[14px] mb-5">Quick Actions</h3>
            <div className="grid grid-cols-3 gap-3 flex-1">
              {[
                { label: 'Submit Assignment', icon: Send, color: 'text-blue-600', bg: 'bg-blue-50 hover:bg-blue-100', route: '/school/student/assignments' },
                { label: 'Check Attendance', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50 hover:bg-emerald-100', route: '/school/student/attendance' },
                { label: 'View Results', icon: TrendingUp, color: 'text-violet-600', bg: 'bg-violet-50 hover:bg-violet-100', route: '/school/student/results' },
                { label: 'Pay Fees', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-50 hover:bg-orange-100', route: '/school/student/fees' },
                { label: 'Download Certificate', icon: Download, color: 'text-cyan-600', bg: 'bg-cyan-50 hover:bg-cyan-100', route: '/school/student/certificates' },
                { label: 'View Timetable', icon: CalendarCheck, color: 'text-pink-600', bg: 'bg-pink-50 hover:bg-pink-100', route: '/school/student/timetable' }
              ].map((btn, i) => (
                <button 
                  key={i} 
                  onClick={() => navigate(btn.route)}
                  className={\`aspect-square rounded-[14px] flex flex-col items-center justify-center gap-2 p-1.5 transition-all duration-200 border border-transparent hover:-translate-y-0.5 hover:shadow-sm \${btn.bg}\`}
                >
                  <btn.icon size={20} className={btn.color} strokeWidth={2} />
                  <span className={\`text-[9px] font-bold text-center leading-tight px-1 \${btn.color}\`}>{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 16. BOTTOM ROW (Spans all 4 columns) */}
        <div className="xl:col-span-4 grid grid-cols-1 lg:grid-cols-3 gap-5">
          
          {/* A. Subject Performance */}
          <div className={\`\${cardClasses} p-6\`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[14px]">Subject Performance</h3>
              <select className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md outline-none cursor-pointer">
                <option>This Semester</option>
                <option>Last Semester</option>
              </select>
            </div>
            <div className="flex items-end justify-between h-36 w-full pt-4 pr-2 relative">
              <div className="absolute left-0 top-2 bottom-5 flex flex-col justify-between text-[9px] font-bold text-slate-400">
                <span>100</span><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span>
              </div>
              <div className="flex-1 flex justify-around ml-8 h-full items-end pb-5 border-b border-slate-100">
                {[
                  { label: 'Math', val: '94', color: 'bg-blue-400 hover:bg-blue-500' },
                  { label: 'Science', val: '91', color: 'bg-cyan-400 hover:bg-cyan-500' },
                  { label: 'English', val: '88', color: 'bg-violet-400 hover:bg-violet-500' },
                  { label: 'Comp. Sci', val: '96', color: 'bg-pink-400 hover:bg-pink-500' },
                  { label: 'Social', val: '85', color: 'bg-orange-400 hover:bg-orange-500' }
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center w-full max-w-[32px] group">
                    <span className="text-[9px] font-bold text-slate-700 mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">{b.val}</span>
                    <div className={\`w-full rounded-t-lg transition-all duration-300 shadow-sm \${b.color}\`} style={{height: \`\${b.val}%\`}}></div>
                    <span className="text-[9px] font-bold text-slate-500 absolute bottom-0">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* B. Attendance Overview */}
          <div className={\`\${cardClasses} p-6\`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[14px]">Attendance Overview</h3>
              <select className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md outline-none cursor-pointer">
                <option>This Month</option>
                <option>Last Month</option>
              </select>
            </div>
            <div className="flex items-center justify-between h-32 px-2 gap-6">
               <div className="relative w-[110px] h-[110px] rounded-full flex items-center justify-center shrink-0 shadow-inner" style={{ background: 'conic-gradient(#10b981 0% 86%, #3b82f6 86% 95%, #8b5cf6 95% 100%)' }}>
                  <div className="w-[86px] h-[86px] bg-white rounded-full flex flex-col items-center justify-center shadow-sm border border-slate-50">
                     <span className="font-black text-2xl text-slate-800 leading-none">86%</span>
                     <span className="text-[9px] font-bold text-slate-500 mt-0.5">Present</span>
                  </div>
               </div>
               <div className="flex-1 space-y-2.5">
                 <div className="flex justify-between items-center text-[11px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-emerald-500"></span> Present</span> <span className="text-slate-800">18</span></div>
                 <div className="flex justify-between items-center text-[11px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-blue-500"></span> Absent</span> <span className="text-slate-800">2</span></div>
                 <div className="flex justify-between items-center text-[11px] font-bold text-slate-600"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-violet-500"></span> Late</span> <span className="text-slate-800">1</span></div>
                 <div className="flex justify-between items-center text-[11px] font-black text-slate-800 pt-2 border-t border-slate-100"><span className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-sm bg-transparent"></span> Total</span> <span>21</span></div>
               </div>
            </div>
          </div>

          {/* C. Recent Announcements */}
          <div className={\`\${cardClasses} p-6\`}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-black text-slate-800 text-[14px]">Recent Announcements</h3>
              <button onClick={() => navigate('/school/student/notifications')} className="text-[11px] font-bold text-blue-600 hover:text-blue-700 transition-colors">View All</button>
            </div>
            <div className="space-y-4">
              {[
                { title: 'Science Exhibition', desc: 'School science exhibition on 25th October.', time: '2 hours ago', icon: MonitorPlay, color: 'text-violet-600 bg-violet-50 border-violet-100' },
                { title: 'Parent Teacher Meeting', desc: 'PTM on 28th October. All parents are requested to attend.', time: '1 day ago', icon: Calendar, color: 'text-pink-600 bg-pink-50 border-pink-100' },
                { title: 'Sports Day', desc: 'Annual sports day on 15th November.', time: '2 days ago', icon: TrendingUp, color: 'text-orange-600 bg-orange-50 border-orange-100' }
              ].map((a, i) => (
                <div key={i} className="flex gap-3 items-start group hover:bg-slate-50/50 p-1.5 -mx-1.5 rounded-lg transition-colors cursor-pointer">
                  <div className={\`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-105 \${a.color}\`}>
                    <a.icon size={14} strokeWidth={2.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-[12px] font-bold text-slate-800 truncate">{a.title}</h4>
                    <p className="text-[10px] font-medium text-slate-500 mt-0.5 leading-snug line-clamp-2">{a.desc}</p>
                  </div>
                  <span className="text-[9px] font-bold text-slate-400 shrink-0 mt-0.5">{a.time}</span>
                </div>
              ))}
            </div>
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

console.log('Recreated dashboard exactly based on prompt constraints.');
