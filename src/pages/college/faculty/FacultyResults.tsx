import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Award, TrendingUp, Download, Lock, CheckCircle2, 
  AlertCircle, BarChart3, Filter, Search, ArrowRight, ShieldCheck
} from 'lucide-react';

interface StudentGradeRecord {
  rollNo: string;
  name: string;
  test1: number; // /15
  assignments: number; // /10
  attendanceMarks: number; // /5
  ciaTotal: number; // /30
  endSem: number; // /70
  total: number; // /100
  grade: string;
  status: 'Pass' | 'Fail';
}

export function FacultyResults() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [selectedCourse, setSelectedCourse] = useState('CS701');
  const [isLocked, setIsLocked] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const initialGrades: StudentGradeRecord[] = [
    { rollNo: '21CS1012', name: 'Priya Sundaram', test1: 14.5, assignments: 9.5, attendanceMarks: 5.0, ciaTotal: 29.0, endSem: 67.0, total: 96.0, grade: 'O', status: 'Pass' },
    { rollNo: '21CS1048', name: 'Shivam Sharma', test1: 13.0, assignments: 9.0, attendanceMarks: 4.5, ciaTotal: 26.5, endSem: 60.5, total: 87.0, grade: 'A+', status: 'Pass' },
    { rollNo: '21CS1092', name: 'Divya Khurana', test1: 13.5, assignments: 9.0, attendanceMarks: 5.0, ciaTotal: 27.5, endSem: 61.5, total: 89.0, grade: 'A+', status: 'Pass' },
    { rollNo: '21CS1034', name: 'Ananya Roy', test1: 12.5, assignments: 8.5, attendanceMarks: 4.5, ciaTotal: 25.5, endSem: 58.5, total: 84.0, grade: 'A+', status: 'Pass' },
    { rollNo: '21CS1066', name: 'Vikramaditya Rao', test1: 11.5, assignments: 8.0, attendanceMarks: 4.0, ciaTotal: 23.5, endSem: 53.5, total: 77.0, grade: 'A', status: 'Pass' },
    { rollNo: '21CS1102', name: 'Neha Singh', test1: 10.5, assignments: 7.5, attendanceMarks: 3.5, ciaTotal: 21.5, endSem: 50.5, total: 72.0, grade: 'A', status: 'Pass' },
    { rollNo: '21CS1045', name: 'Rahul Verma', test1: 9.0, assignments: 7.0, attendanceMarks: 3.0, ciaTotal: 19.0, endSem: 45.0, total: 64.0, grade: 'B+', status: 'Pass' },
    { rollNo: '21CS1088', name: 'Amit Patel', test1: 8.0, assignments: 6.5, attendanceMarks: 2.5, ciaTotal: 17.0, endSem: 38.0, total: 55.0, grade: 'B', status: 'Pass' },
    { rollNo: '21CS1019', name: 'Aditya Kashyap', test1: 8.5, assignments: 6.5, attendanceMarks: 3.0, ciaTotal: 18.0, endSem: 41.0, total: 59.0, grade: 'B', status: 'Pass' }
  ];

  const filtered = initialGrades.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    s.rollNo.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Grading & Results" 
      description="Continuous Internal Assessment (CIA) marks entry, rubric aggregation, and COE grade lock."
    >
      {/* Top Banner with Lock Status */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-purple-50 text-[#7c3aed] rounded-lg">
              {selectedCourse}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
              isLocked ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
            }`}>
              {isLocked ? 'Marks Locked & Verified' : 'Draft Mode (Editable)'}
            </span>
          </div>
          <h3 className="text-base font-bold text-slate-800">CIA & End-Sem Assessment Sheet</h3>
          <p className="text-xs text-slate-500">Weightage: Mid-Sem (15) + Assignments (10) + Attendance (5) = CIA (30) | End Sem (70)</p>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
            <Download size={14} />
            <span>Export to Excel</span>
          </button>
          <button 
            onClick={() => setIsLocked(!isLocked)}
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all shadow-sm ${
              isLocked ? 'bg-slate-700 hover:bg-slate-800' : 'bg-[#7c3aed] hover:bg-purple-700'
            }`}
          >
            {isLocked ? <Lock size={14} /> : <ShieldCheck size={14} />}
            <span>{isLocked ? 'Unlock for Edits' : 'Lock & Submit to COE'}</span>
          </button>
        </div>
      </div>

      {/* Grade Statistics Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Class Average</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">75.9 / 100</p>
          <p className="text-[10px] text-emerald-600 font-semibold">+4.2% vs previous batch</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Highest Score</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">96.0 / 100</p>
          <p className="text-[10px] text-purple-700 font-medium">Priya Sundaram (O Grade)</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Pass Percentage</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">100.0%</p>
          <p className="text-[10px] text-slate-500">Min 40% threshold passed</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">O & A+ Distinction</p>
          <p className="text-xl font-black text-indigo-600 mt-0.5">44.4%</p>
          <p className="text-[10px] text-slate-500">Top quartile performance</p>
        </div>
      </div>

      {/* Results Spreadsheet Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="p-4 sm:p-5 border-b border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/40">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">Course Selection:</span>
            {['CS701', 'CS703'].map(c => (
              <button
                key={c}
                onClick={() => setSelectedCourse(c)}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedCourse === c ? 'bg-[#7c3aed] text-white' : 'bg-slate-200/70 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search student..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Roll No & Student</th>
                <th className="py-3 px-3 text-center">Mid-Sem (15)</th>
                <th className="py-3 px-3 text-center">Assign (10)</th>
                <th className="py-3 px-3 text-center">Att (5)</th>
                <th className="py-3 px-3 text-center bg-purple-50/50 font-black text-[#7c3aed]">CIA (30)</th>
                <th className="py-3 px-3 text-center">End Sem (70)</th>
                <th className="py-3 px-3 text-center bg-slate-100/70 font-black text-slate-900">Total (100)</th>
                <th className="py-3 px-3 text-center">Letter Grade</th>
                <th className="py-3 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filtered.map((s) => (
                <tr key={s.rollNo} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-900 block">{s.name}</span>
                    <span className="text-[11px] font-mono text-slate-400">{s.rollNo}</span>
                  </td>
                  <td className="py-3 px-3 text-center font-mono">{s.test1.toFixed(1)}</td>
                  <td className="py-3 px-3 text-center font-mono">{s.assignments.toFixed(1)}</td>
                  <td className="py-3 px-3 text-center font-mono">{s.attendanceMarks.toFixed(1)}</td>
                  <td className="py-3 px-3 text-center font-mono font-bold text-[#7c3aed] bg-purple-50/30">
                    {s.ciaTotal.toFixed(1)}
                  </td>
                  <td className="py-3 px-3 text-center font-mono">{s.endSem.toFixed(1)}</td>
                  <td className="py-3 px-3 text-center font-mono font-black text-slate-900 bg-slate-50">
                    {s.total.toFixed(1)}
                  </td>
                  <td className="py-3 px-3 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-md text-xs font-black ${
                      s.grade === 'O' ? 'bg-purple-100 text-[#7c3aed]' :
                      s.grade === 'A+' ? 'bg-emerald-100 text-emerald-800' :
                      s.grade === 'A' ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {s.grade}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-emerald-600 font-bold text-[11px] flex items-center justify-center gap-1">
                      <CheckCircle2 size={12} /> Pass
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
