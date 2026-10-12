import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, 
  Check, 
  X, 
  Clock, 
  UserMinus, 
  Save, 
  Send, 
  Download, 
  CheckCircle2, 
  AlertCircle,
  Users,
  Search,
  Calendar
} from 'lucide-react';

interface StudentAttendanceRecord {
  id: number;
  roll: number;
  admNo: string;
  name: string;
  avatar: string;
  prevAttendance: number;
  status: 'present' | 'absent' | 'late' | 'leave';
  remark: string;
}

export function TeacherAttendance() {
  const user = USERS.teacher;
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [selectedDate, setSelectedDate] = useState('2026-10-12');
  const [selectedPeriod, setSelectedPeriod] = useState('Morning Homeroom (Assembly)');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [smsDispatched, setSmsDispatched] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');

  const [records, setRecords] = useState<StudentAttendanceRecord[]>([
    { id: 1, roll: 1, admNo: 'DPS/2021/1001', name: 'Aarav Gupta', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop', prevAttendance: 98, status: 'present', remark: '' },
    { id: 2, roll: 2, admNo: 'DPS/2021/1008', name: 'Ananya Joshi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop', prevAttendance: 95, status: 'present', remark: '' },
    { id: 3, roll: 3, admNo: 'DPS/2021/1014', name: 'Aryan Kapoor', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop', prevAttendance: 88, status: 'present', remark: '' },
    { id: 4, roll: 4, admNo: 'DPS/2021/1020', name: 'Diya Sen', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', prevAttendance: 96, status: 'present', remark: '' },
    { id: 5, roll: 5, admNo: 'DPS/2021/1025', name: 'Eeshan Mathur', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop', prevAttendance: 92, status: 'present', remark: '' },
    { id: 6, roll: 6, admNo: 'DPS/2021/1031', name: 'Isha Singhania', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop', prevAttendance: 94, status: 'present', remark: '' },
    { id: 7, roll: 7, admNo: 'DPS/2021/1035', name: 'Kabir Chawla', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop', prevAttendance: 89, status: 'late', remark: 'School bus #14 delayed by 15 mins' },
    { id: 8, roll: 8, admNo: 'DPS/2021/1038', name: 'Meera Nambiar', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', prevAttendance: 97, status: 'present', remark: '' },
    { id: 9, roll: 14, admNo: 'DPS/2021/1042', name: 'Rahul Sharma', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop', prevAttendance: 92, status: 'present', remark: '' },
    { id: 10, roll: 18, admNo: 'DPS/2021/1055', name: 'Rohan Mehta', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop', prevAttendance: 71, status: 'absent', remark: 'Unannounced absence' },
    { id: 11, roll: 21, admNo: 'DPS/2021/1063', name: 'Pranav Nair', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150&auto=format&fit=crop', prevAttendance: 91, status: 'present', remark: '' },
    { id: 12, roll: 22, admNo: 'DPS/2021/1068', name: 'Priya Sen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop', prevAttendance: 94, status: 'present', remark: '' },
    { id: 13, roll: 25, admNo: 'DPS/2021/1077', name: 'Siddharth Rao', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=150&auto=format&fit=crop', prevAttendance: 86, status: 'leave', remark: 'Parent submitted medical slip' },
    { id: 14, roll: 28, admNo: 'DPS/2021/1089', name: 'Tanmay Bhatt', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=150&auto=format&fit=crop', prevAttendance: 73, status: 'absent', remark: 'Fever reported by parent via SMS' },
    { id: 15, roll: 30, admNo: 'DPS/2021/1094', name: 'Vaishnavi Pillai', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop', prevAttendance: 99, status: 'present', remark: '' },
  ]);

  const setStatus = (id: number, status: 'present' | 'absent' | 'late' | 'leave') => {
    setRecords(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  const setRemark = (id: number, remark: string) => {
    setRecords(prev => prev.map(r => r.id === id ? { ...r, remark } : r));
  };

  const markAll = (status: 'present' | 'absent') => {
    setRecords(prev => prev.map(r => ({ ...r, status })));
  };

  const handleSave = () => {
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleSmsAlerts = () => {
    setSmsDispatched(true);
    setTimeout(() => setSmsDispatched(false), 3000);
  };

  const total = records.length;
  const presentCount = records.filter(r => r.status === 'present').length;
  const absentCount = records.filter(r => r.status === 'absent').length;
  const lateCount = records.filter(r => r.status === 'late').length;
  const leaveCount = records.filter(r => r.status === 'leave').length;
  const attendanceRate = ((presentCount + lateCount) / total * 100).toFixed(1);

  const filteredRecords = records.filter(r => 
    r.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.admNo.toLowerCase().includes(searchFilter.toLowerCase()) ||
    r.roll.toString().includes(searchFilter)
  );

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Daily Attendance Register"
      description="Record class attendance, manage late arrivals, and dispatch automated SMS notifications to absentees' parents."
    >
      <div className="space-y-8">

        {/* FEEDBACK BANNERS */}
        {saveSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Attendance register for Class {selectedClass} on {selectedDate} has been locked and saved successfully!</span>
          </div>
        )}

        {smsDispatched && (
          <div className="p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <Send className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Automated SMS alerts have been sent to parents of {absentCount} absent students!</span>
          </div>
        )}

        {/* TOP KPI SUMMARY */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Class Strength</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1 block">{total} Students</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Class {selectedClass}</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider block">Present Today</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-emerald-600 mt-1 block">{presentCount}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">{attendanceRate}% Rate</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Absent</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-rose-600 mt-1 block">{absentCount}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Unexcused</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block">Late Arrival</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-amber-600 mt-1 block">{lateCount}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Recorded</span>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] col-span-2 sm:col-span-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">Medical Leave</span>
            <span className="text-2xl lg:text-3xl font-extrabold text-blue-600 mt-1 block">{leaveCount}</span>
            <span className="text-xs text-slate-500 font-medium mt-0.5 block">Slip approved</span>
          </div>
        </div>

        {/* REGISTER FILTER & CONTROLS CARD */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Assigned Class</label>
              <select 
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800"
              >
                <option value="10-A">Class 10-A (Mentor Class • 42 Students)</option>
                <option value="10-B">Class 10-B (40 Students)</option>
                <option value="9-B">Class 9-B (40 Students)</option>
                <option value="11-A">Class 11-A (38 Students)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Date of Attendance</label>
              <input 
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Session / Period</label>
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800"
              >
                <option>Morning Homeroom (Assembly)</option>
                <option>Period 1 (Mathematics)</option>
                <option>Period 5 (Applied Math Lab)</option>
                <option>Period 8 (Remedial Doubt Clinic)</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <div className="relative flex-1 max-w-xs">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input 
                type="text"
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                placeholder="Search student in list..."
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => markAll('present')}
                className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition"
              >
                ✓ Mark All Present
              </button>

              <button
                onClick={() => markAll('absent')}
                className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
              >
                Reset Register
              </button>

              <button
                onClick={handleSmsAlerts}
                className="px-4 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 text-xs font-bold transition flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                SMS {absentCount} Absent Parents
              </button>
            </div>
          </div>
        </div>

        {/* ATTENDANCE ROSTER TABLE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Roll / Adm</th>
                  <th className="py-4 px-6 font-bold">Student Name</th>
                  <th className="py-4 px-6 font-bold text-center">Prev Month Att.</th>
                  <th className="py-4 px-6 font-bold text-center">Today's Status</th>
                  <th className="py-4 px-6 font-bold">Observation / Reason</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-mono font-bold text-slate-800">
                      <div>#{r.roll}</div>
                      <div className="text-[11px] font-normal text-slate-400">{r.admNo}</div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={r.avatar} 
                          alt={r.name} 
                          className="w-9 h-9 rounded-full object-cover border border-slate-200"
                        />
                        <span className="font-bold text-slate-900 text-base">{r.name}</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                        r.prevAttendance >= 90 ? 'bg-emerald-50 text-emerald-700' :
                        r.prevAttendance >= 75 ? 'bg-blue-50 text-blue-700' :
                        'bg-rose-50 text-rose-700'
                      }`}>
                        {r.prevAttendance}%
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center justify-center gap-1.5">
                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'present')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                            r.status === 'present'
                              ? 'bg-emerald-600 text-white shadow-sm shadow-emerald-500/20'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <Check className="w-3.5 h-3.5" /> Present
                        </button>

                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'absent')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                            r.status === 'absent'
                              ? 'bg-rose-600 text-white shadow-sm shadow-rose-500/20'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <X className="w-3.5 h-3.5" /> Absent
                        </button>

                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'late')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                            r.status === 'late'
                              ? 'bg-amber-500 text-white shadow-sm shadow-amber-500/20'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5" /> Late
                        </button>

                        <button
                          type="button"
                          onClick={() => setStatus(r.id, 'leave')}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 ${
                            r.status === 'leave'
                              ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                              : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                          }`}
                        >
                          <UserMinus className="w-3.5 h-3.5" /> Leave
                        </button>
                      </div>
                    </td>

                    <td className="py-4 px-6">
                      <input 
                        type="text"
                        value={r.remark}
                        onChange={(e) => setRemark(r.id, e.target.value)}
                        placeholder="Add reason / note..."
                        className="w-full px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* TABLE FOOTER ACTION BAR */}
          <div className="p-6 bg-slate-50/80 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 font-medium">
              Registered by <strong className="text-slate-800">Mrs. Ananya Sharma</strong> (Senior Mathematics Faculty) • Timestamp: Today at 08:45 AM
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => alert('Exporting monthly attendance register in CBSE Excel format...')}
                className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-white transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Export Monthly Register
              </button>

              <button
                onClick={handleSave}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Lock & Save Attendance
              </button>
            </div>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
