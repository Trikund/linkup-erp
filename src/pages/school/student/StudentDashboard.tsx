import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_ATTENDANCE, MOCK_TIMETABLE, MOCK_ASSIGNMENTS, MOCK_EXAMS } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, TrendingUp } from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  return (
    <SchoolLayout 
      role="student" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's what's happening with your learning today."
    >
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard icon={CalendarCheck} label="Attendance" value="92%" trend="+3.2% this month" />
        <KPICard icon={BookOpen} label="Course Progress" value="78%" trend="On track" />
        <KPICard icon={ClipboardList} label="Assignments" value="8 / 10" trend="2 Pending" alert />
        <KPICard icon={FileCheck} label="Upcoming Exams" value="2" trend="Next: 18 Oct" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Schedule */}
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Today's Schedule</h2>
              <button className="text-sm font-medium text-linkup-blue hover:underline">View Timetable</button>
            </div>
            <div className="space-y-4">
              {MOCK_TIMETABLE.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="w-20 text-sm font-bold text-slate-700">{item.time}</div>
                  <div className="w-1 h-12 bg-linkup-blue/20 rounded-full" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{item.subject}</h4>
                    <p className="text-sm text-slate-500">{item.teacher} • {item.room}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Pending Assignments */}
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Pending Assignments</h2>
              <button className="text-sm font-medium text-linkup-blue hover:underline">View All</button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {MOCK_ASSIGNMENTS.map((item) => (
                <div key={item.id} className="p-4 rounded-xl border border-slate-100 bg-white/50 hover:bg-white/80 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-linkup-blue/10 text-linkup-blue rounded-md">
                      {item.subject}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-1 rounded-md ${item.status === 'Submitted' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {item.status}
                    </span>
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500 mb-4">Due: {item.due}</p>
                  <button className="text-sm font-medium text-linkup-blue flex items-center gap-1 group">
                    {item.status === 'Submitted' ? 'View' : 'Submit'} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Attendance Breakdown */}
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Attendance Overview</h2>
            <div className="flex items-center justify-center mb-6">
              <div className="relative w-32 h-32 flex items-center justify-center rounded-full border-8 border-linkup-blue/10">
                <div className="absolute inset-0 rounded-full border-8 border-linkup-blue border-r-transparent border-b-transparent -rotate-45" />
                <div className="text-center">
                  <span className="text-3xl font-bold text-slate-900">{MOCK_ATTENDANCE.overall}%</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              {MOCK_ATTENDANCE.subjects.map((sub, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <span className="text-sm text-slate-600">{sub.name}</span>
                  <span className="text-sm font-semibold text-slate-900">{sub.value}%</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Upcoming Exams */}
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Upcoming Exams</h2>
            <div className="space-y-4">
              {MOCK_EXAMS.map((exam) => (
                <div key={exam.id} className="p-3 rounded-lg border border-slate-100 bg-white/50">
                  <h4 className="font-semibold text-slate-900">{exam.subject} <span className="text-xs text-slate-500 font-normal">({exam.type})</span></h4>
                  <p className="text-sm text-slate-500 mt-1">{exam.date} • {exam.time} • {exam.room}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </SchoolLayout>
  );
}

function KPICard({ icon: Icon, label, value, trend, alert }: any) {
  return (
    <GlassCard className="p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${alert ? 'bg-amber-100 text-amber-600' : 'bg-linkup-blue/10 text-linkup-blue'}`}>
          <Icon size={20} />
        </div>
        {trend && (
          <span className="flex items-center gap-1 text-xs font-medium text-slate-500">
            {alert ? null : <TrendingUp size={12} className="text-green-500" />}
            {trend}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
    </GlassCard>
  );
}
