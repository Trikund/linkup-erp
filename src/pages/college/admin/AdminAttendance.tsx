import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CheckSquare, ShieldAlert, Download, Search, 
  Send, Users, CheckCircle2, Clock
} from 'lucide-react';

export function AdminAttendance() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [noticeDispatched, setNoticeDispatched] = useState(false);

  const debarredStudents = [
    { rollNo: '21CS1045', name: 'Rahul Verma', dept: 'CSE (Sem 7)', att: '68.2%', conducted: '15/22 Hrs', guardian: '+91 98112 34567', status: 'Notice Sent' },
    { rollNo: '21CS1088', name: 'Amit Patel', dept: 'CSE (Sem 7)', att: '64.0%', conducted: '14/22 Hrs', guardian: '+91 98223 45678', status: 'Notice Sent' },
    { rollNo: '22EC1040', name: 'Rohan Deshmukh', dept: 'ECE (Sem 5)', att: '62.5%', conducted: '15/24 Hrs', guardian: '+91 98334 56789', status: 'Hearing Pending' },
    { rollNo: '23ME1015', name: 'Vivek Chawla', dept: 'MECH (Sem 3)', att: '59.0%', conducted: '13/22 Hrs', guardian: '+91 98445 67890', status: 'Parent Called' }
  ];

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Campus Attendance Central" 
      description="University-wide biometric turnstile synchronization, 75% examination eligibility audits, and debarment notices."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Campus Aggregate</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">88.2%</p>
          <p className="text-[10px] text-slate-500">Across 12,450 candidates</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Eligible (&gt;75%)</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">12,308 Students</p>
          <p className="text-[10px] text-emerald-700 font-semibold">98.8% Eligible for Exams</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Debarred Watchlist</p>
          <p className="text-xl font-black text-rose-600 mt-0.5">142 Flagged</p>
          <p className="text-[10px] text-rose-700 font-semibold">&lt;75% Shortage Risk</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Biometric Turnstiles</p>
          <p className="text-xl font-black text-purple-700 mt-0.5">18 Scanners</p>
          <p className="text-[10px] text-slate-500">Real-time DB Sync</p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">142 Students Below 75% Attendance Threshold</h3>
          <p className="text-xs text-slate-500 mt-0.5">As per University Ordinance 14.2, students with shortage are debarred from End-Semester papers.</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => {
              setNoticeDispatched(true);
              setTimeout(() => setNoticeDispatched(false), 3000);
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-sm transition-all"
          >
            <Send size={14} />
            <span>Dispatch Debarment Warnings (SMS)</span>
          </button>
        </div>
      </div>

      {noticeDispatched && (
        <div className="p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-xs font-bold mb-6 flex items-center gap-2">
          <CheckCircle2 size={16} className="text-rose-600" />
          <span>Statutory warning SMS and registered emails dispatched to guardians of 142 flagged students!</span>
        </div>
      )}

      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100">
          <h4 className="text-sm font-bold text-slate-800">Debarred Candidates Roster (Sample CSE & ECE)</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Roll No & Name</th>
                <th className="py-3 px-4">Department & Class</th>
                <th className="py-3 px-4 text-center">Attendance Ratio</th>
                <th className="py-3 px-4 text-center">Percentage</th>
                <th className="py-3 px-4">Guardian Phone</th>
                <th className="py-3 px-4 text-right">Escalation Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {debarredStudents.map((s, i) => (
                <tr key={i} className="hover:bg-slate-50/70">
                  <td className="py-3.5 px-4">
                    <strong className="text-slate-900 block">{s.name}</strong>
                    <span className="text-[11px] font-mono text-slate-400">{s.rollNo}</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 font-medium">{s.dept}</td>
                  <td className="py-3.5 px-4 text-center font-mono text-slate-800">{s.conducted}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                      {s.att}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono text-slate-700">{s.guardian}</td>
                  <td className="py-3.5 px-4 text-right">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                      {s.status}
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
