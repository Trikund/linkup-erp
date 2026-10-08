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
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${kpi.bg} ${kpi.color}`}>
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
               <div key={i} className="w-8 bg-blue-500 rounded-t-md hover:bg-blue-600 transition-colors" style={{ height: `${h}%` }}></div>
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
                 <div className={`w-12 h-12 flex flex-col items-center justify-center rounded-xl border ${e.color}`}>
                   <span className="text-sm font-black leading-none">{e.date}</span>
                   <span className="text-[9px] font-bold mt-0.5">{e.month}</span>
                 </div>
                 <div>
                   <h4 className={`text-sm font-bold ${e.titleCls || 'text-slate-800'}`}>{e.title}</h4>
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