import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CheckSquare, CheckCircle2, AlertTriangle, Download, 
  Calendar, ShieldCheck, Clock, ArrowUpRight, Filter
} from 'lucide-react';

export function ParentAttendance() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const subjectAttendance = [
    { code: 'CS701', name: 'Machine Learning', conducted: 25, attended: 22, percentage: 88.0, faculty: 'Dr. Ankit Sharma', status: 'Satisfactory' },
    { code: 'CS703', name: 'Advanced Database Management Systems', conducted: 28, attended: 24, percentage: 85.7, faculty: 'Dr. Ankit Sharma', status: 'Satisfactory' },
    { code: 'CS706P', name: 'Major Capstone Project Lab', conducted: 24, attended: 22, percentage: 91.6, faculty: 'Dr. Ankit Sharma (Guide)', status: 'Excellent' },
    { code: 'CS702', name: 'Cloud Computing Architectures', conducted: 24, attended: 20, percentage: 83.3, faculty: 'Prof. Sneha Kulkarni', status: 'Satisfactory' },
    { code: 'CS704', name: 'Information Security & Cryptography', conducted: 23, attended: 19, percentage: 82.6, faculty: 'Dr. Rajeshwar Iyer', status: 'Satisfactory' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Attendance Tracking" 
      description="Real-time lecture and laboratory attendance records of Shivam Sharma against University 75% examination threshold."
    >
      {/* Attendance Summary Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-emerald-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Odd Semester 2026-27
              </span>
              <span className="bg-emerald-400/30 text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-300/30 flex items-center gap-1">
                <CheckCircle2 size={12} /> University Eligible
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">86.4% Aggregate Attendance</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              168 attended out of 194 conducted academic hours • Safe by <span className="font-bold text-white">+11.4%</span> above the mandatory 75% examination eligibility cutoff.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-slate-50 transition-all shadow-md">
              <Download size={14} />
              <span>Attendance Certificate (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Hours Held</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">194 Hours</p>
          <p className="text-[10px] text-slate-500">Since 01 Aug 2026</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Hours Present</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">168 Hours</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Verified via Biometric ERP</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Approved Leaves / OD</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">6 Hours</p>
          <p className="text-[10px] text-purple-700 font-semibold">Hackathon Participation</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Buffer Before Debarment</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">22 Hours</p>
          <p className="text-[10px] text-slate-500">Can miss without risk</p>
        </div>
      </div>

      {/* Subject-Wise Attendance Breakdown Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden mb-8">
        <div className="p-5 sm:p-6 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Subject-Wise Attendance Breakdown</h3>
          <p className="text-xs text-slate-500">Individual subject attendance must remain above 75% to appear in respective end-semester theory papers.</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Subject Code & Title</th>
                <th className="py-3.5 px-4">Faculty In-charge</th>
                <th className="py-3.5 px-4 text-center">Conducted</th>
                <th className="py-3.5 px-4 text-center">Attended</th>
                <th className="py-3.5 px-4 text-center">Percentage</th>
                <th className="py-3.5 px-4 text-center">Eligibility Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {subjectAttendance.map((s) => (
                <tr key={s.code} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-4 px-4">
                    <span className="font-mono text-xs font-black px-2 py-0.5 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded mr-2">
                      {s.code}
                    </span>
                    <strong className="text-slate-800 text-xs sm:text-sm">{s.name}</strong>
                  </td>
                  <td className="py-4 px-4 text-slate-600 font-semibold">{s.faculty}</td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-slate-800">{s.conducted} Hrs</td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-emerald-600">{s.attended} Hrs</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-sm font-black text-slate-900">{s.percentage}%</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                      s.percentage >= 85 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-purple-50 text-[#7c3aed]'
                    }`}>
                      <CheckCircle2 size={13} /> {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}
