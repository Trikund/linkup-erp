import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CheckCircle2, AlertTriangle, Clock, Calendar, FileText, 
  Send, ShieldCheck, X, Download, UserCheck
} from 'lucide-react';

export function StudentAttendance() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveType, setLeaveType] = useState('On-Duty (OD)');
  const [submittedToast, setSubmittedToast] = useState(false);

  const subjectAttendance = [
    { code: 'CS701', name: 'Machine Learning & Neural Networks', held: 48, attended: 43, missed: 5, pct: 89.6, safeBunk: 4 },
    { code: 'CS702', name: 'Cloud Computing Architecture', held: 39, attended: 33, missed: 6, pct: 84.6, safeBunk: 3 },
    { code: 'CS703', name: 'Advanced Database Systems', held: 40, attended: 37, missed: 3, pct: 92.5, safeBunk: 7 },
    { code: 'CS704', name: 'Information & Cyber Security', held: 33, attended: 27, missed: 6, pct: 81.8, safeBunk: 2 },
    { code: 'CS705E', name: 'Deep Learning & Computer Vision', held: 32, attended: 28, missed: 4, pct: 87.5, safeBunk: 4 },
    { code: 'CS706P', name: 'Major Project Phase-I Lab', held: 32, attended: 32, missed: 0, pct: 100.0, safeBunk: 8 },
  ];

  const biometricLogs = [
    { date: '18 Oct 2026', inTime: '08:52 AM', outTime: '04:55 PM', gate: 'Gate 2 (Academic Block)', status: 'Valid', hours: '8h 03m' },
    { date: '17 Oct 2026', inTime: '08:48 AM', outTime: '05:02 PM', gate: 'Gate 2 (Academic Block)', status: 'Valid', hours: '8h 14m' },
    { date: '16 Oct 2026', inTime: '09:05 AM', outTime: '04:45 PM', gate: 'Gate 1 (Main Entrance)', status: 'Valid', hours: '7h 40m' },
    { date: '15 Oct 2026', inTime: '08:50 AM', outTime: '05:10 PM', gate: 'Gate 2 (Academic Block)', status: 'Valid', hours: '8h 20m' },
    { date: '14 Oct 2026', inTime: '08:55 AM', outTime: '04:50 PM', gate: 'Gate 2 (Academic Block)', status: 'Valid', hours: '7h 55m' },
    { date: '13 Oct 2026', inTime: '08:45 AM', outTime: '04:58 PM', gate: 'Gate 1 (Main Entrance)', status: 'Valid', hours: '8h 13m' },
    { date: '12 Oct 2026', inTime: '08:50 AM', outTime: '05:00 PM', gate: 'Gate 2 (Academic Block)', status: 'Valid', hours: '8h 10m' },
  ];

  const handleApplyLeave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLeaveModal(false);
    setSubmittedToast(true);
    setTimeout(() => setSubmittedToast(false), 4000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Attendance & Biometrics" 
      description="Biometric RFID Tracking • Minimum 75% University Eligibility Requirement"
    >
      {/* Toast Alert */}
      {submittedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">Leave / OD application submitted to HOD Dr. Ankit Sharma!</span>
        </div>
      )}

      {/* Top Eligibility Status Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <ShieldCheck size={14} /> Exam Eligible (Above 75%)
              </span>
              <span className="text-xs text-slate-500 font-medium">B.Tech CSE Semester VII</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">86.4% Overall Attendance</h2>
            <p className="text-xs text-slate-500 mt-1">
              Attended <span className="font-bold text-slate-800">198</span> out of <span className="font-bold text-slate-800">224</span> total contact lecture & lab hours.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setShowLeaveModal(true)}
              className="px-4 py-2.5 rounded-2xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
            >
              Apply for OD / Medical Leave
            </button>
            <button 
              onClick={() => alert('Downloading official attendance certificate signed by Dean Academics...')}
              className="px-4 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <Download size={14} />
              <span>Download Record</span>
            </button>
          </div>
        </div>

        {/* Visual Progress Bar */}
        <div className="mt-6">
          <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
            <span>0%</span>
            <span className="text-amber-600 font-extrabold">75% Mandatory Cutoff</span>
            <span className="text-[#7c3aed]">Current: 86.4%</span>
            <span>100%</span>
          </div>
          <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-emerald-500 to-[#7c3aed] rounded-full" style={{ width: '86.4%' }} />
            {/* 75% Threshold Marker */}
            <div className="absolute top-0 bottom-0 left-[75%] w-0.5 bg-rose-500 z-10" />
          </div>
        </div>
      </div>

      {/* Subject-wise Attendance Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-4">Subject-wise Attendance Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Subject Code & Name</th>
                <th className="py-3.5 px-3 text-center">Classes Held</th>
                <th className="py-3.5 px-3 text-center">Attended</th>
                <th className="py-3.5 px-3 text-center">Absent</th>
                <th className="py-3.5 px-3 text-center">Attendance %</th>
                <th className="py-3.5 px-4 text-center">Safe Bunk Margin</th>
                <th className="py-3.5 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-xs">
              {subjectAttendance.map((sub, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-mono font-bold text-[#7c3aed] mr-2">{sub.code}</span>
                    <span className="font-semibold text-slate-800">{sub.name}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-medium text-slate-600">{sub.held}</td>
                  <td className="py-3.5 px-3 text-center font-bold text-emerald-600">{sub.attended}</td>
                  <td className="py-3.5 px-3 text-center font-bold text-rose-500">{sub.missed}</td>
                  <td className="py-3.5 px-3 text-center">
                    <span className={`font-black ${sub.pct >= 85 ? 'text-emerald-600' : 'text-amber-600'}`}>
                      {sub.pct}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center font-medium text-slate-600">
                    <span className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full text-[11px]">
                      Can miss <strong className="text-[#7c3aed]">{sub.safeBunk}</strong> more
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="inline-block bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      Eligible
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Biometric Punch In/Out Logs */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Recent Biometric Access Logs</h3>
            <p className="text-xs text-slate-500 font-medium">RFID Smart Card In/Out Scans at University Turnstiles</p>
          </div>
          <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Smart Card ID: 21CS-RFID-094
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Punch In</th>
                <th className="py-3 px-4">Punch Out</th>
                <th className="py-3 px-4">Location Gate</th>
                <th className="py-3 px-4">Duration</th>
                <th className="py-3 px-4 text-center">Validation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {biometricLogs.map((log, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-800">{log.date}</td>
                  <td className="py-3 px-4 font-mono text-emerald-600 font-semibold">{log.inTime}</td>
                  <td className="py-3 px-4 font-mono text-slate-600">{log.outTime}</td>
                  <td className="py-3 px-4 text-slate-600">{log.gate}</td>
                  <td className="py-3 px-4 font-semibold text-slate-700">{log.hours}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Leave Application Modal */}
      {showLeaveModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Apply for Student Leave / OD</h3>
                <p className="text-xs text-slate-500">Subject to approval by HOD & Faculty Advisor</p>
              </div>
              <button onClick={() => setShowLeaveModal(false)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleApplyLeave} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Leave Category</label>
                <div className="grid grid-cols-2 gap-2">
                  {['On-Duty (OD)', 'Medical Leave', 'Placement Interview', 'Conference / Hackathon'].map((t) => (
                    <button
                      type="button"
                      key={t}
                      onClick={() => setLeaveType(t)}
                      className={`p-2.5 rounded-xl font-bold border transition-all text-left ${
                        leaveType === t 
                          ? 'bg-purple-50 text-[#7c3aed] border-purple-200' 
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">From Date</label>
                  <input type="date" required defaultValue="2026-10-22" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">To Date</label>
                  <input type="date" required defaultValue="2026-10-23" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Reason / Purpose</label>
                <textarea 
                  rows={3} 
                  required 
                  placeholder="Provide detailed justification or event invitation details..."
                  className="w-full p-3 rounded-xl border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Attachment (Medical Certificate / OD Letter)</label>
                <input type="file" className="w-full text-slate-500 font-medium file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-purple-50 file:text-[#7c3aed] hover:file:bg-purple-100" />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setShowLeaveModal(false)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 rounded-xl bg-[#7c3aed] text-white font-bold hover:bg-purple-700 shadow-md shadow-purple-500/20"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
