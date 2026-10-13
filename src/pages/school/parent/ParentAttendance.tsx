import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus, 
  X, 
  Upload, 
  Send, 
  Download,
  Users,
  ChevronRight
} from 'lucide-react';

export function ParentAttendance() {
  const user = USERS.parent;
  const [selectedChildId, setSelectedChildId] = useState('1');
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [leaveSuccess, setLeaveSuccess] = useState(false);

  // Leave Form state
  const [leaveType, setLeaveType] = useState('Medical Leave');
  const [startDate, setStartDate] = useState('2026-10-15');
  const [endDate, setEndDate] = useState('2026-10-16');
  const [reason, setReason] = useState('');

  const childrenData = [
    {
      id: '1',
      name: 'Rahul Sharma',
      class: 'Class 10-A',
      roll: 14,
      attendanceRate: 92.4,
      totalWorkingDays: 120,
      presentDays: 111,
      approvedLeave: 7,
      absentDays: 2,
      mentor: 'Mrs. Ananya Sharma',
      logs: [
        { date: '12 Oct 2026', day: 'Monday', status: 'present', time: '07:55 AM', note: 'Marked on-time in homeroom' },
        { date: '09 Oct 2026', day: 'Friday', status: 'present', time: '07:50 AM', note: 'Regular attendance' },
        { date: '08 Oct 2026', day: 'Thursday', status: 'late', time: '08:15 AM', note: 'Bus #14 delayed due to expressway traffic' },
        { date: '07 Oct 2026', day: 'Wednesday', status: 'present', time: '07:52 AM', note: 'Regular attendance' },
        { date: '06 Oct 2026', day: 'Tuesday', status: 'leave', time: '—', note: 'Medical slip approved: Dental extraction' },
        { date: '05 Oct 2026', day: 'Monday', status: 'leave', time: '—', note: 'Medical slip approved: Dental extraction' },
        { date: '02 Oct 2026', day: 'Friday', status: 'holiday', time: '—', note: 'Gandhi Jayanti Public Holiday' },
        { date: '01 Oct 2026', day: 'Thursday', status: 'present', time: '07:58 AM', note: 'Regular attendance' },
        { date: '30 Sep 2026', day: 'Wednesday', status: 'present', time: '07:45 AM', note: 'Regular attendance' },
        { date: '29 Sep 2026', day: 'Tuesday', status: 'absent', time: '—', note: 'Unannounced absence (Fever reported later)' }
      ]
    },
    {
      id: '2',
      name: 'Ananya Sharma',
      class: 'Class 7-B',
      roll: 8,
      attendanceRate: 96.2,
      totalWorkingDays: 120,
      presentDays: 115,
      approvedLeave: 4,
      absentDays: 1,
      mentor: 'Mr. Vikram Singh',
      logs: [
        { date: '12 Oct 2026', day: 'Monday', status: 'present', time: '07:50 AM', note: 'Regular on-time arrival' },
        { date: '09 Oct 2026', day: 'Friday', status: 'present', time: '07:52 AM', note: 'Regular attendance' },
        { date: '08 Oct 2026', day: 'Thursday', status: 'late', time: '08:15 AM', note: 'Bus #14 delayed due to expressway traffic' },
        { date: '07 Oct 2026', day: 'Wednesday', status: 'present', time: '07:48 AM', note: 'Regular attendance' },
        { date: '06 Oct 2026', day: 'Tuesday', status: 'present', time: '07:55 AM', note: 'Regular attendance' },
        { date: '05 Oct 2026', day: 'Monday', status: 'present', time: '07:51 AM', note: 'Regular attendance' },
        { date: '02 Oct 2026', day: 'Friday', status: 'holiday', time: '—', note: 'Gandhi Jayanti Public Holiday' },
        { date: '01 Oct 2026', day: 'Thursday', status: 'present', time: '07:56 AM', note: 'Regular attendance' },
      ]
    }
  ];

  const currentChild = childrenData.find(c => c.id === selectedChildId) || childrenData[0];

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLeaveModal(false);
    setLeaveSuccess(true);
    setTimeout(() => {
      setLeaveSuccess(false);
      setReason('');
    }, 3000);
  };

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title="Attendance & Leave Management"
      description="Monitor daily homeroom attendance, view historical logs, and submit official leave sanction requests to the school mentor."
    >
      <div className="space-y-8">

        {leaveSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Leave sanction request for {currentChild.name} has been routed to {currentChild.mentor}!</span>
          </div>
        )}

        {/* CHILD SWITCHER & APPLY LEAVE HEADER */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Select Student:</span>
            {childrenData.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChildId(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
                  selectedChildId === c.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedChildId === c.id ? 'bg-white/20' : 'bg-slate-200 text-slate-700'}`}>
                  {c.class}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowLeaveModal(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-sm flex items-center justify-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Apply for Student Leave
          </button>
        </div>

        {/* TOP KPI METRICS */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Aggregate Attendance</span>
            <span className="text-3xl font-extrabold text-emerald-600 mt-1 block">{currentChild.attendanceRate}%</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Board Target ≥75%</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Total Working Days</span>
            <span className="text-3xl font-extrabold text-slate-900 mt-1 block">{currentChild.totalWorkingDays}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Term 1 Session</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Present Days</span>
            <span className="text-3xl font-extrabold text-blue-600 mt-1 block">{currentChild.presentDays}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Attended school</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Approved Leaves</span>
            <span className="text-3xl font-extrabold text-purple-700 mt-1 block">{currentChild.approvedLeave}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Medical / Sanctioned</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Unexcused Absence</span>
            <span className="text-3xl font-extrabold text-rose-600 mt-1 block">{currentChild.absentDays}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Needs regular tracking</span>
          </div>
        </div>

        {/* ATTENDANCE HISTORY LOG TABLE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Attendance Log Records: {currentChild.name} ({currentChild.class})
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Verified daily by Class Mentor ({currentChild.mentor})</p>
            </div>

            <button
              onClick={() => alert(`Downloading official monthly attendance certificate for ${currentChild.name}...`)}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              Download Attendance Certificate
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Date & Day</th>
                  <th className="py-4 px-6 font-bold text-center">Status</th>
                  <th className="py-4 px-6 font-bold text-center">Recorded Time</th>
                  <th className="py-4 px-6 font-bold">Teacher Remarks / Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {currentChild.logs.map((log, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-bold text-slate-900">
                      <div>{log.date}</div>
                      <span className="text-xs text-slate-400 font-normal">{log.day}</span>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-extrabold capitalize ${
                        log.status === 'present' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        log.status === 'late' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        log.status === 'leave' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        log.status === 'holiday' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {log.status === 'leave' ? 'Approved Leave' : log.status}
                      </span>
                    </td>

                    <td className="py-4 px-6 text-center font-mono font-semibold text-slate-600">
                      {log.time}
                    </td>

                    <td className="py-4 px-6 text-slate-700 font-medium">
                      {log.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL: APPLY FOR STUDENT LEAVE */}
        {showLeaveModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Apply for Student Leave</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Submit sanction request directly to Class Teacher ({currentChild.mentor}).</p>
                </div>
                <button onClick={() => setShowLeaveModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleLeaveSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Student</label>
                  <input 
                    type="text" 
                    readOnly 
                    value={`${currentChild.name} (${currentChild.class})`} 
                    className="w-full px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Leave Category</label>
                  <select 
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                  >
                    <option>Medical Leave (Illness / Doctor Consultation)</option>
                    <option>Casual Leave (Family Function / Travel)</option>
                    <option>Olympiad / Outside School Competition</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">From Date</label>
                    <input 
                      type="date"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">To Date</label>
                    <input 
                      type="date"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Detailed Reason for Absence</label>
                  <textarea 
                    rows={4}
                    required
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Specify the reason clearly for class mentor records..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowLeaveModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm"
                  >
                    Submit Sanction Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
