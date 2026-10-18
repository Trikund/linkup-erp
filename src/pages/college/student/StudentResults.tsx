import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Award, TrendingUp, Download, CheckCircle2, ChevronRight, 
  FileText, ShieldCheck, Printer, BarChart3
} from 'lucide-react';

export function StudentResults() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [selectedSem, setSelectedSem] = useState('Sem 6');

  const semesterHistory = [
    { sem: 'Sem 1', sgpa: 8.12, credits: 22, status: 'Passed', year: 'Dec 2023', remarks: 'First Class with Distinction' },
    { sem: 'Sem 2', sgpa: 8.25, credits: 22, status: 'Passed', year: 'May 2024', remarks: 'First Class with Distinction' },
    { sem: 'Sem 3', sgpa: 8.40, credits: 24, status: 'Passed', year: 'Dec 2024', remarks: 'First Class with Distinction' },
    { sem: 'Sem 4', sgpa: 8.55, credits: 24, status: 'Passed', year: 'May 2025', remarks: 'First Class with Distinction' },
    { sem: 'Sem 5', sgpa: 8.46, credits: 24, status: 'Passed', year: 'Dec 2025', remarks: 'First Class with Distinction' },
    { sem: 'Sem 6', sgpa: 8.61, credits: 24, status: 'Passed', year: 'May 2026', remarks: 'Top 10% in Department' },
  ];

  const sem6Grades = [
    { code: 'CS601', title: 'Compiler Design', credits: 4, internal: 27, external: 64, total: 91, grade: 'O', points: 10, status: 'Cleared' },
    { code: 'CS602', title: 'Computer Networks', credits: 4, internal: 26, external: 58, total: 84, grade: 'A+', points: 9, status: 'Cleared' },
    { code: 'CS603', title: 'Software Engineering & Agile', credits: 4, internal: 28, external: 62, total: 90, grade: 'O', points: 10, status: 'Cleared' },
    { code: 'CS604', title: 'Web Technologies & Full Stack', credits: 3, internal: 25, external: 56, total: 81, grade: 'A', points: 8, status: 'Cleared' },
    { code: 'CS605E', title: 'Distributed Systems & Microservices', credits: 3, internal: 26, external: 57, total: 83, grade: 'A', points: 8, status: 'Cleared' },
    { code: 'CS606L', title: 'Networks & Security Lab', credits: 2, internal: 48, external: 46, total: 94, grade: 'O', points: 10, status: 'Cleared' },
    { code: 'CS607L', title: 'Full Stack Development Lab', credits: 2, internal: 46, external: 47, total: 93, grade: 'O', points: 10, status: 'Cleared' },
    { code: 'CS608P', title: 'Mini Project Phase-II', credits: 2, internal: 47, external: 48, total: 95, grade: 'O', points: 10, status: 'Cleared' },
  ];

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Results & Academic Transcripts" 
      description="Official University Grade Cards • Cumulative Grade Point Average (CGPA) Ledger"
    >
      {/* Top Banner KPI Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-3xl p-6 text-white shadow-xl shadow-purple-900/10">
          <p className="text-xs font-bold uppercase tracking-wider text-white/80">Cumulative CGPA</p>
          <h2 className="text-4xl font-black mt-2">8.42</h2>
          <div className="mt-2 flex items-center gap-1.5 text-xs text-white/90 font-medium">
            <ShieldCheck size={14} className="text-emerald-300" />
            <span>Top 15% of Batch (Zero Backlogs)</span>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Last Semester (Sem 6)</p>
          <h2 className="text-4xl font-black text-slate-900 mt-2">8.61 SGPA</h2>
          <p className="text-xs text-emerald-600 mt-2 font-bold flex items-center gap-1">
            <TrendingUp size={14} /> +0.15 points increase from Sem 5
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Credits Completed</p>
          <h2 className="text-4xl font-black text-blue-600 mt-2">140 / 180</h2>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            21 credits enrolled in Sem 7 • 19 credits in Sem 8
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Degree Classification</p>
          <h2 className="text-2xl font-black text-emerald-600 mt-2">Distinction</h2>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            On track for First Class with Honors
          </p>
        </div>
      </div>

      {/* Historical SGPA Progression Ledger */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">Semester-wise Grade Ledger (Sem 1 to Sem 6)</h3>
            <p className="text-xs text-slate-500 font-medium">Click any semester to view detailed breakdown</p>
          </div>

          <button 
            onClick={() => alert('Downloading official Consolidated University Transcript PDF signed by Controller of Examinations...')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
          >
            <Download size={14} />
            <span>Download Official Transcript PDF</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {semesterHistory.map((s) => (
            <button
              key={s.sem}
              onClick={() => setSelectedSem(s.sem)}
              className={`p-4 rounded-2xl border text-left transition-all ${
                selectedSem === s.sem 
                  ? 'bg-purple-50 border-purple-300 ring-2 ring-[#7c3aed]/20' 
                  : 'bg-slate-50/70 border-slate-100 hover:bg-slate-50'
              }`}
            >
              <div className="flex justify-between items-center text-xs font-bold text-slate-500 mb-1">
                <span>{s.sem}</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Pass</span>
              </div>
              <h4 className="text-xl font-black text-slate-900">{s.sgpa}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">{s.credits} Credits</p>
            </button>
          ))}
        </div>
      </div>

      {/* Semester 6 Detailed Grade Card Breakdown */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              {selectedSem} Detailed Marksheet & Grade Statement
            </h3>
            <p className="text-xs text-slate-500 font-medium">Examination Session: May 2026 • Published on 28 June 2026</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            SGPA: 8.61 • Total Marks: 641/700 (91.5%)
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3 px-4">Course Code & Title</th>
                <th className="py-3 px-3 text-center">Credits</th>
                <th className="py-3 px-3 text-center">Internal (30)</th>
                <th className="py-3 px-3 text-center">External (70)</th>
                <th className="py-3 px-3 text-center">Total (100)</th>
                <th className="py-3 px-3 text-center">Letter Grade</th>
                <th className="py-3 px-3 text-center">Grade Point</th>
                <th className="py-3 px-4 text-center">Result</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sem6Grades.map((g, idx) => (
                <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <span className="font-mono font-bold text-[#7c3aed] mr-2">{g.code}</span>
                    <span className="font-bold text-slate-800">{g.title}</span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-medium text-slate-600">{g.credits}</td>
                  <td className="py-3.5 px-3 text-center text-slate-700">{g.internal}</td>
                  <td className="py-3.5 px-3 text-center text-slate-700">{g.external}</td>
                  <td className="py-3.5 px-3 text-center font-bold text-slate-900">{g.total}</td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="inline-block font-black text-xs text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                      {g.grade}
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-center font-bold text-slate-800">{g.points}</td>
                  <td className="py-3.5 px-4 text-center">
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      {g.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>Grading System: O (Outstanding = 10), A+ (Excellent = 9), A (Very Good = 8), B+ (Good = 7)</span>
          <span className="font-mono text-[#7c3aed] font-semibold">Controller of Exams Seal: Verified</span>
        </div>
      </div>
    </CollegeLayout>
  );
}