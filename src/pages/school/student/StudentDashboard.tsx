import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_ATTENDANCE, MOCK_TIMETABLE, MOCK_ASSIGNMENTS, MOCK_EXAMS } from '../../../data/mockData';
import { CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, TrendingUp, Clock, MapPin, CheckCircle2 } from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  return (
    <SchoolLayout 
      role="student" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's what's happening with your learning today."
    >
      {/* 1. TOP 4 METRIC KPI CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KPICard 
          icon={CalendarCheck} 
          label="Attendance" 
          value="92%" 
          trend="+3.2% this month"
          trendType="positive"
          accent="blue"
        />
        <KPICard 
          icon={BookOpen} 
          label="Course Progress" 
          value="78%" 
          trend="On track"
          trendType="neutral"
          accent="indigo"
        />
        <KPICard 
          icon={ClipboardList} 
          label="Assignments" 
          value="8 / 10" 
          trend="2 Pending"
          trendType="alert"
          accent="amber"
        />
        <KPICard 
          icon={FileCheck} 
          label="Upcoming Exams" 
          value="2" 
          trend="Next: 18 Oct"
          trendType="info"
          accent="emerald"
        />
      </div>

      {/* 2. MAIN 2-COLUMN GRID (Matching exact layout from user's image) */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Schedule Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">Today's Schedule</h2>
                <p className="text-xs text-slate-500 font-medium">3 sessions scheduled for today</p>
              </div>
              <a href="/school/student/timetable" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 transition-colors">
                View Timetable <ArrowRight size={13} />
              </a>
            </div>

            <div className="space-y-3.5">
              {MOCK_TIMETABLE.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-4 rounded-xl border border-slate-100/90 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 group"
                >
                  {/* Time Badge */}
                  <div className="w-24 text-center shrink-0">
                    <span className="font-mono text-xs font-bold text-slate-700 bg-white border border-slate-200/80 px-2.5 py-1 rounded-lg inline-block shadow-2xs">
                      {item.time}
                    </span>
                  </div>

                  {/* Vertical Accent Line */}
                  <div className="w-1 h-10 bg-blue-500/80 rounded-full shrink-0 group-hover:bg-blue-600 transition-colors" />

                  {/* Subject & Teacher Info */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-slate-900 text-sm tracking-tight truncate group-hover:text-blue-600 transition-colors">
                      {item.subject}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5 flex items-center gap-3">
                      <span>{item.teacher}</span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-slate-600">
                        <MapPin size={12} className="text-slate-400" /> {item.room}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Assignments Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight">Pending Assignments</h2>
                <p className="text-xs text-slate-500 font-medium">Keep up with your coursework deadlines</p>
              </div>
              <a href="/school/student/assignments" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center gap-1 transition-colors">
                View All <ArrowRight size={13} />
              </a>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {MOCK_ASSIGNMENTS.map((item) => {
                const isPending = item.status !== 'Submitted';
                return (
                  <div 
                    key={item.id} 
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50/40 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-2.5">
                        <span className="text-[11px] font-bold px-2 py-0.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-md">
                          {item.subject}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          isPending 
                            ? 'bg-amber-50 text-amber-700 border-amber-200/80' 
                            : 'bg-emerald-50 text-emerald-700 border-emerald-200/80'
                        }`}>
                          {item.status}
                        </span>
                      </div>

                      <h4 className="font-bold text-slate-900 text-sm mb-1 line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-1.5 mb-4">
                        <Clock size={12} className="text-slate-400" /> Due: {item.due}
                      </p>
                    </div>

                    <a 
                      href="/school/student/assignments" 
                      className={`text-xs font-bold flex items-center gap-1 transition-colors ${
                        isPending ? 'text-blue-600 hover:text-blue-700' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {isPending ? 'Submit' : 'View'} <ArrowRight size={12} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (1 Col) */}
        <div className="space-y-8">
          
          {/* Attendance Overview Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)]">
            <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-5">Attendance Overview</h2>

            {/* Polished SVG Circular Progress Ring */}
            <div className="flex items-center justify-center my-4">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="8"
                  />
                  {/* Progress Circle (92% of 2 * PI * 40 ≈ 251.32 -> strokeDashoffset ≈ 20.1) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#2563eb"
                    strokeWidth="8"
                    strokeDasharray="251.32"
                    strokeDashoffset="20.1"
                    strokeLinecap="round"
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-black text-slate-900 tracking-tight leading-none">
                    {MOCK_ATTENDANCE.overall}%
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">
                    Overall
                  </span>
                </div>
              </div>
            </div>

            {/* Subject Breakdown with Micro-Progress Bars */}
            <div className="space-y-3 pt-3 border-t border-slate-100">
              {MOCK_ATTENDANCE.subjects.map((sub, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-600">{sub.name}</span>
                    <span className="font-mono font-bold text-slate-900">{sub.value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-blue-600 transition-all duration-700" 
                      style={{ width: `${sub.value}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Exams Card */}
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)]">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-lg font-bold text-slate-900 tracking-tight">Upcoming Exams</h2>
              <a href="/school/student/exams" className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline">
                View All
              </a>
            </div>

            <div className="space-y-3.5">
              {MOCK_EXAMS.map((exam) => (
                <div 
                  key={exam.id} 
                  className="p-3.5 rounded-xl border border-slate-100/90 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-sm transition-all duration-200 flex items-start gap-3.5"
                >
                  {/* Clean Date Pill */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-blue-700 shrink-0 font-sans shadow-2xs">
                    <span className="text-base font-extrabold leading-none">{exam.date.split(' ')[0]}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider mt-0.5">{exam.date.split(' ')[1] || 'OCT'}</span>
                  </div>

                  <div className="flex-1 min-w-0 pt-0.5">
                    <h4 className="font-bold text-slate-900 text-xs truncate">
                      {exam.subject} <span className="text-slate-400 font-normal">({exam.type})</span>
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium mt-1 flex items-center gap-2">
                      <span className="flex items-center gap-1"><Clock size={11} className="text-slate-400" /> {exam.time}</span>
                      <span className="text-slate-300">•</span>
                      <span>{exam.room}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}

// Reusable KPI Metric Card
interface KPICardProps {
  icon: any;
  label: string;
  value: string;
  trend: string;
  trendType?: 'positive' | 'neutral' | 'alert' | 'info';
  accent?: 'blue' | 'indigo' | 'amber' | 'emerald';
}

function KPICard({ icon: Icon, label, value, trend, trendType = 'neutral', accent = 'blue' }: KPICardProps) {
  const accentStyles = {
    blue: "bg-blue-50 text-blue-600 border-blue-100/80",
    indigo: "bg-indigo-50 text-indigo-600 border-indigo-100/80",
    amber: "bg-amber-50 text-amber-600 border-amber-100/80",
    emerald: "bg-emerald-50 text-emerald-600 border-emerald-100/80"
  };

  const trendStyles = {
    positive: "bg-emerald-50 text-emerald-700 border-emerald-200/70",
    neutral: "bg-indigo-50 text-indigo-700 border-indigo-200/70",
    alert: "bg-amber-50 text-amber-700 border-amber-200/70",
    info: "bg-blue-50 text-blue-700 border-blue-200/70"
  };

  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.02),0_6px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.02),0_10px_28px_rgba(0,0,0,0.06)] hover:border-slate-300 transition-all duration-200 group flex flex-col justify-between">
      <div className="flex justify-between items-start mb-3">
        {/* Tinted Squircle Icon */}
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${accentStyles[accent]} shadow-2xs group-hover:scale-105 transition-transform duration-200`}>
          <Icon size={20} strokeWidth={2.2} />
        </div>

        {/* Trend Pill */}
        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${trendStyles[trendType]}`}>
          {trendType === 'positive' && <TrendingUp size={11} />}
          {trend}
        </span>
      </div>

      <div>
        <h3 className="text-3xl font-black text-slate-900 tracking-tight font-sans leading-tight">
          {value}
        </h3>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
          {label}
        </p>
      </div>
    </div>
  );
}
