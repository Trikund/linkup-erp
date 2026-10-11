import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { CalendarCheck, CheckCircle, XCircle, Clock, AlertTriangle, ArrowUpRight, Filter } from 'lucide-react';

export function StudentAttendance() {
  const user = USERS.student;
  const [selectedMonth, setSelectedMonth] = useState('October 2026');

  const subjectAttendance = [
    { name: 'Mathematics', attended: 26, total: 28, pct: 93, teacher: 'Dr. Priya Patel' },
    { name: 'Physics & Natural Science', attended: 22, total: 24, pct: 91, teacher: 'Mr. Amit Verma' },
    { name: 'Computer Science & AI', attended: 19, total: 20, pct: 95, teacher: 'Mr. Vikram Singh' },
    { name: 'English Literature', attended: 23, total: 26, pct: 88, teacher: 'Ms. Neha Singh' },
    { name: 'Social Studies & Civics', attended: 21, total: 23, pct: 91, teacher: 'Mr. Rohan Mehta' },
    { name: 'Chemistry Laboratory', attended: 15, total: 16, pct: 94, teacher: 'Dr. Sunita Rao' },
  ];

  const recentRecords = [
    { date: '10 Oct 2026', day: 'Friday', status: 'Present', checkIn: '07:55 AM', remarks: 'On time' },
    { date: '09 Oct 2026', day: 'Thursday', status: 'Present', checkIn: '07:58 AM', remarks: 'On time' },
    { date: '08 Oct 2026', day: 'Wednesday', status: 'Late', checkIn: '08:15 AM', remarks: 'School bus delayed' },
    { date: '07 Oct 2026', day: 'Tuesday', status: 'Present', checkIn: '07:52 AM', remarks: 'On time' },
    { date: '06 Oct 2026', day: 'Monday', status: 'Present', checkIn: '07:50 AM', remarks: 'On time' },
    { date: '03 Oct 2026', day: 'Friday', status: 'Absent', checkIn: '-', remarks: 'Medical leave approved' },
    { date: '02 Oct 2026', day: 'Thursday', status: 'Holiday', checkIn: '-', remarks: 'Gandhi Jayanti' },
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Attendance Record"
      description="Track your daily class attendance, attendance criteria, subject-wise statistics, and leaves."
    >
      <div className="space-y-6">

        {/* Top 4 KPI Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-500 font-semibold uppercase">Overall Attendance</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                Above 75% Criteria
              </span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900">92.4%</p>
            <p className="text-xs text-slate-500 mt-1">126 of 137 sessions attended</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Days Present</span>
              <CheckCircle size={20} className="text-emerald-500" />
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900">102</p>
            <p className="text-sm text-slate-500 mt-1">Full-day attendance recorded</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Days Absent</span>
              <XCircle size={20} className="text-rose-500" />
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900">6</p>
            <p className="text-sm text-slate-500 mt-1">4 medical • 2 excused</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Late Arrivals</span>
              <Clock size={20} className="text-amber-500" />
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900">2</p>
            <p className="text-sm text-slate-500 mt-1">Bus delay transit verified</p>
          </div>
        </div>

        {/* 2-Column Split: Subject-wise Breakdown & Day-by-Day Logs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Left: Subject-wise Attendance (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
              <h2 className="text-lg font-bold text-slate-900">Subject-Wise Attendance Breakdown</h2>
              <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">Min. Required: 75%</span>
            </div>

            <div className="space-y-4">
              {subjectAttendance.map((sub, i) => (
                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/40">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{sub.name}</h4>
                      <p className="text-sm text-slate-500">{sub.teacher}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-extrabold text-slate-900">{sub.pct}%</span>
                      <p className="text-xs text-slate-500 mt-0.5">{sub.attended}/{sub.total} Classes</p>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200/70 h-2.5 rounded-full overflow-hidden mt-3">
                    <div 
                      className={`h-full rounded-full ${
                        sub.pct >= 90 ? 'bg-emerald-500' :
                        sub.pct >= 75 ? 'bg-blue-600' : 'bg-rose-500'
                      }`}
                      style={{ width: `${sub.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Daily History Logs (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                <h2 className="text-lg font-bold text-slate-900">Recent Attendance Log</h2>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">Oct 2026</span>
              </div>

              <div className="space-y-3">
                {recentRecords.map((rec, i) => (
                  <div key={i} className="p-4 rounded-xl border border-slate-100 flex items-center justify-between gap-3 text-sm">
                    <div>
                      <p className="font-bold text-slate-900">{rec.date}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{rec.day} • {rec.remarks}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        rec.status === 'Present' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                        rec.status === 'Late' ? 'bg-amber-50 text-amber-700 border border-amber-100' :
                        rec.status === 'Holiday' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                        'bg-rose-50 text-rose-700 border border-rose-100'
                      }`}>
                        {rec.status}
                      </span>
                      {rec.checkIn !== '-' && (
                        <p className="text-[10px] text-slate-400 font-mono mt-1">{rec.checkIn}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 text-center">
              <button className="text-xs font-semibold text-blue-600 hover:underline">
                Apply for Leave of Absence →
              </button>
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
