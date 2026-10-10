import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, BookOpen, ClipboardList, FileCheck, ArrowRight, TrendingUp 
} from 'lucide-react';

export function StudentDashboard() {
  const user = USERS.student;

  const timetableItems = [
    { time: '09:00 AM', subject: 'Mathematics', room: 'Ananya Sharma • Room 204' },
    { time: '10:30 AM', subject: 'Computer Science', room: 'Vikram Singh • Lab 2' },
    { time: '01:30 PM', subject: 'English', room: 'Priya Patel • Room 106' },
  ];

  const pendingAssignments = [
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Algebra Worksheet',
      due: 'Due: Oct 12',
      status: 'Pending',
      statusType: 'pending',
      action: 'Submit →',
      actionHref: '/school/student/assignments'
    },
    {
      id: 2,
      subject: 'Computer Science',
      title: 'React Basics',
      due: 'Due: Oct 14',
      status: 'Submitted',
      statusType: 'submitted',
      action: 'View →',
      actionHref: '/school/student/assignments'
    }
  ];

  const attendanceSubjects = [
    { name: 'Mathematics', value: 94 },
    { name: 'Science', value: 91 },
    { name: 'Computer Science', value: 96 },
    { name: 'English', value: 88 }
  ];

  const upcomingExams = [
    {
      subject: 'Mathematics',
      type: 'Mid Term',
      date: '18 Oct • 10:00 AM • Room 204'
    },
    {
      subject: 'Science',
      type: 'Mid Term',
      date: '20 Oct • 10:00 AM • Lab 1'
    }
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's what's happening with your learning today."
    >
      <div className="space-y-6">

        {/* 1. TOP ROW: 4 STATISTIC / KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Attendance */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <CalendarCheck size={19} />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                <TrendingUp size={13} /> +3.2% this month
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">92%</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">Attendance</p>
            </div>
          </div>

          {/* Card 2: Course Progress */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <BookOpen size={19} />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                <TrendingUp size={13} /> On track
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">78%</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">Course Progress</p>
            </div>
          </div>

          {/* Card 3: Assignments */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-500">
                <ClipboardList size={19} />
              </div>
              <span className="text-xs font-medium text-slate-500">
                2 Pending
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">8 / 10</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">Assignments</p>
            </div>
          </div>

          {/* Card 4: Upcoming Exams */}
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <FileCheck size={19} />
              </div>
              <span className="flex items-center gap-1 text-xs font-semibold text-emerald-500">
                <TrendingUp size={13} /> Next: 18 Oct
              </span>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">2</h3>
              <p className="text-xs font-medium text-slate-500 mt-1">Upcoming Exams</p>
            </div>
          </div>
        </div>

        {/* 2. MAIN 2-COLUMN SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT 2 COLUMNS: Today's Schedule & Pending Assignments */}
          <div className="lg:col-span-2 space-y-6">

            {/* Today's Schedule */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-bold text-slate-900">Today's Schedule</h2>
                <a href="/school/student/timetable" className="text-xs font-medium text-blue-600 hover:underline">
                  View Timetable
                </a>
              </div>

              <div className="space-y-4">
                {timetableItems.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-5 p-3.5 rounded-xl border border-slate-50 bg-slate-50/40 hover:bg-white hover:border-slate-100 hover:shadow-xs transition-all duration-150"
                  >
                    <div className="w-20 text-xs font-bold text-slate-800 shrink-0">
                      {item.time}
                    </div>

                    <div className="w-0.5 h-7 bg-blue-500 rounded-full shrink-0" />

                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 truncate">{item.subject}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{item.room}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pending Assignments */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-base font-bold text-slate-900">Pending Assignments</h2>
                <a href="/school/student/assignments" className="text-xs font-medium text-blue-600 hover:underline">
                  View All
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pendingAssignments.map((a) => (
                  <div key={a.id} className="p-4 rounded-xl border border-slate-100 bg-slate-50/30 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-blue-50 text-blue-600 border border-blue-100/60">
                          {a.subject}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          a.statusType === 'pending'
                            ? 'bg-amber-50 text-amber-600 border border-amber-100/80'
                            : 'bg-emerald-50 text-emerald-600 border border-emerald-100/80'
                        }`}>
                          {a.status}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-slate-900">{a.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{a.due}</p>
                    </div>

                    <div className="mt-4 pt-2">
                      <a 
                        href={a.actionHref} 
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                      >
                        {a.action}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 1 COLUMN: Attendance Overview & Upcoming Exams */}
          <div className="space-y-6">

            {/* Attendance Overview */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h2 className="text-base font-bold text-slate-900 mb-6">Attendance Overview</h2>

              {/* Exact Circular Ring Chart */}
              <div className="flex items-center justify-center my-4">
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#eff6ff"
                      strokeWidth="9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#2563eb"
                      strokeWidth="9"
                      strokeDasharray="251.32"
                      strokeDashoffset="20.1"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-3xl font-black text-slate-900">92%</span>
                  </div>
                </div>
              </div>

              {/* Breakdown Subjects List */}
              <div className="space-y-3 pt-4 border-t border-slate-50 text-xs">
                {attendanceSubjects.map((sub, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-600 font-medium">{sub.name}</span>
                    <span className="font-semibold text-slate-900">{sub.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Exams */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h2 className="text-base font-bold text-slate-900 mb-4">Upcoming Exams</h2>

              <div className="space-y-3">
                {upcomingExams.map((exam, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/40">
                    <h4 className="text-xs font-bold text-slate-900">
                      {exam.subject} <span className="text-slate-400 font-normal">({exam.type})</span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">{exam.date}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
