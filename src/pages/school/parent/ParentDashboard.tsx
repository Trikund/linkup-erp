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

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200 pb-px">
        {['Overview', 'Attendance', 'Academic', 'Assignments', 'Exams', 'Fees', 'Teacher Remarks'].map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-4 py-2 text-[13px] font-bold rounded-t-lg transition-colors border-b-2 ${activeTab === tab.toLowerCase() ? 'border-teal-600 text-teal-700 bg-teal-50/50' : 'border-transparent text-slate-500 hover:text-slate-700 hover:bg-slate-50'}`}
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
                   <div className={`h-full rounded-full ${s.color}`} style={{ width: s.w }}></div>
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