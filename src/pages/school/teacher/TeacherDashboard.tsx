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
                  <div className={`absolute inset-x-0 top-0 h-1/2 rounded-full ${c.status ? 'bg-green-500' : ''}`} />
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