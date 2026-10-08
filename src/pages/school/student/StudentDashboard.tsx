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
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${kpi.bg} ${kpi.color}`}>
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
                  <div className={`absolute inset-x-0 top-0 h-1/2 rounded-full ${c.status ? 'bg-blue-500' : ''}`} />
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
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${a.color}`}>
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