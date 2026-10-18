import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CheckSquare, Calendar, Clock, Users, Check, X, AlertCircle, 
  Download, Save, RefreshCw, ChevronDown, CheckCircle2, ShieldAlert
} from 'lucide-react';

interface StudentAttendanceRecord {
  rollNo: string;
  name: string;
  currentAtt: number;
  status: 'P' | 'A' | 'OD' | 'L';
}

export function FacultyAttendance() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [selectedCourse, setSelectedCourse] = useState('CS701');
  const [selectedSection, setSelectedSection] = useState('Sec B');
  const [selectedPeriod, setSelectedPeriod] = useState('Period 3 (11:15 AM - 12:15 PM)');
  const [attendanceDate, setAttendanceDate] = useState('2026-10-19');
  const [isSaved, setIsSaved] = useState(false);

  const initialStudents: StudentAttendanceRecord[] = [
    { rollNo: '21CS1001', name: 'Aarav Gupta', currentAtt: 88.0, status: 'P' },
    { rollNo: '21CS1012', name: 'Priya Sundaram', currentAtt: 94.2, status: 'P' },
    { rollNo: '21CS1019', name: 'Aditya Kashyap', currentAtt: 69.0, status: 'A' },
    { rollNo: '21CS1034', name: 'Ananya Roy', currentAtt: 88.5, status: 'P' },
    { rollNo: '21CS1045', name: 'Rahul Verma', currentAtt: 68.2, status: 'A' },
    { rollNo: '21CS1048', name: 'Shivam Sharma', currentAtt: 86.4, status: 'P' },
    { rollNo: '21CS1066', name: 'Vikramaditya Rao', currentAtt: 78.0, status: 'P' },
    { rollNo: '21CS1088', name: 'Amit Patel', currentAtt: 64.0, status: 'A' },
    { rollNo: '21CS1092', name: 'Divya Khurana', currentAtt: 91.0, status: 'P' },
    { rollNo: '21CS1102', name: 'Neha Singh', currentAtt: 71.4, status: 'P' },
    { rollNo: '21CS1108', name: 'Kunal Singhal', currentAtt: 82.5, status: 'P' },
    { rollNo: '21CS1115', name: 'Megha Nair', currentAtt: 85.0, status: 'OD' }
  ];

  const [students, setStudents] = useState<StudentAttendanceRecord[]>(initialStudents);

  const markAll = (status: 'P' | 'A') => {
    setStudents(students.map(s => ({ ...s, status })));
    setIsSaved(false);
  };

  const toggleStatus = (rollNo: string, nextStatus: 'P' | 'A' | 'OD' | 'L') => {
    setStudents(students.map(s => s.rollNo === rollNo ? { ...s, status: nextStatus } : s));
    setIsSaved(false);
  };

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 4000);
  };

  const presentCount = students.filter(s => s.status === 'P').length;
  const absentCount = students.filter(s => s.status === 'A').length;
  const odCount = students.filter(s => s.status === 'OD').length;
  const lateCount = students.filter(s => s.status === 'L').length;
  const percentage = Math.round((presentCount / students.length) * 100);

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Attendance Register" 
      description="Record subject-wise daily lecture & practical attendance, calculate shortage lists, and sync with college ERP."
    >
      {/* Save Success Banner */}
      {isSaved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-6 flex items-center justify-between shadow-sm animate-fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-600" />
            <span className="text-xs font-bold">
              Attendance for {selectedCourse} ({selectedPeriod}) successfully committed and locked to ERP.
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-700 font-semibold">Timestamp: {new Date().toLocaleTimeString()}</span>
        </div>
      )}

      {/* Control Panel Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-6">
        <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-4">Lecture Configuration</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Subject</label>
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7c3aed]"
            >
              <option value="CS701">CS701 - Machine Learning (Sec B)</option>
              <option value="CS703">CS703 - Adv DBMS (Sec A)</option>
              <option value="CS706P">CS706P - Capstone Project Lab</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Date</label>
            <input
              type="date"
              value={attendanceDate}
              onChange={(e) => setAttendanceDate(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7c3aed]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Period Slot</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full text-xs font-semibold px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7c3aed]"
            >
              <option>Period 1 (09:00 AM - 10:00 AM)</option>
              <option>Period 2 (10:15 AM - 11:15 AM)</option>
              <option>Period 3 (11:15 AM - 12:15 PM)</option>
              <option>Period 4 (02:00 PM - 04:00 PM)</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-slate-500 uppercase mb-1">Lecture Topic / Unit</label>
            <input
              type="text"
              defaultValue="Unit 3: Ensemble Methods & Random Forest Regressors"
              className="w-full text-xs font-semibold px-3.5 py-2 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-[#7c3aed]"
            />
          </div>
        </div>
      </div>

      {/* Live Headcount Tally */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Marked</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">{students.length} Students</p>
          <p className="text-[10px] text-slate-500">Roll call complete</p>
        </div>
        <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-emerald-700 uppercase">Present (P)</p>
          <p className="text-xl font-black text-emerald-700 mt-0.5">{presentCount} Students</p>
          <p className="text-[10px] text-emerald-600 font-semibold">{percentage}% Attendance</p>
        </div>
        <div className="bg-red-50/70 border border-red-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-red-700 uppercase">Absent (A)</p>
          <p className="text-xl font-black text-red-700 mt-0.5">{absentCount} Students</p>
          <p className="text-[10px] text-red-600 font-semibold">SMS Alert Triggered</p>
        </div>
        <div className="bg-blue-50/70 border border-blue-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-blue-700 uppercase">On-Duty (OD)</p>
          <p className="text-xl font-black text-blue-700 mt-0.5">{odCount} Student</p>
          <p className="text-[10px] text-blue-600">Tech Fest Co-ordinator</p>
        </div>
        <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 shadow-sm col-span-2 sm:col-span-1">
          <p className="text-[10px] font-bold text-amber-700 uppercase">Late (L)</p>
          <p className="text-xl font-black text-amber-700 mt-0.5">{lateCount} Students</p>
          <p className="text-[10px] text-amber-600">Permitted with note</p>
        </div>
      </div>

      {/* Attendance Register Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden mb-6">
        {/* Table Toolbar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Quick Actions:</span>
            <button
              onClick={() => markAll('P')}
              className="px-3 py-1.5 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-200 text-xs font-bold transition-all"
            >
              Mark All Present
            </button>
            <button
              onClick={() => markAll('A')}
              className="px-3 py-1.5 rounded-lg bg-red-100 text-red-800 hover:bg-red-200 text-xs font-bold transition-all"
            >
              Clear All (Absent)
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button 
              onClick={handleSave}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all"
            >
              <Save size={14} />
              <span>Submit & Lock to ERP</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Roll Number</th>
                <th className="py-3 px-4">Student Name</th>
                <th className="py-3 px-4">Aggregate Attendance</th>
                <th className="py-3 px-4 text-center">Status (Click to Toggle)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {students.map((s) => (
                <tr key={s.rollNo} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-3 px-4 font-mono font-bold text-slate-900">{s.rollNo}</td>
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-800">{s.name}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`font-bold ${s.currentAtt < 75 ? 'text-red-600' : 'text-slate-800'}`}>
                        {s.currentAtt}%
                      </span>
                      {s.currentAtt < 75 && (
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded border border-red-100">
                          Critical
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <div className="inline-flex rounded-xl p-1 bg-slate-100 gap-1">
                      <button
                        onClick={() => toggleStatus(s.rollNo, 'P')}
                        className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                          s.status === 'P'
                            ? 'bg-emerald-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-white/80'
                        }`}
                      >
                        P
                      </button>
                      <button
                        onClick={() => toggleStatus(s.rollNo, 'A')}
                        className={`px-3 py-1 rounded-lg text-xs font-black transition-all ${
                          s.status === 'A'
                            ? 'bg-red-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-white/80'
                        }`}
                      >
                        A
                      </button>
                      <button
                        onClick={() => toggleStatus(s.rollNo, 'OD')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                          s.status === 'OD'
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-white/80'
                        }`}
                      >
                        OD
                      </button>
                      <button
                        onClick={() => toggleStatus(s.rollNo, 'L')}
                        className={`px-2.5 py-1 rounded-lg text-xs font-black transition-all ${
                          s.status === 'L'
                            ? 'bg-amber-500 text-white shadow-sm'
                            : 'text-slate-600 hover:bg-white/80'
                        }`}
                      >
                        L
                      </button>
                    </div>
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
