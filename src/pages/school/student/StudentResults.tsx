import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { Download, Award, TrendingUp, CheckCircle, Star } from 'lucide-react';

export function StudentResults() {
  const user = USERS.student;

  const resultTable = [
    { subject: 'Advanced Mathematics', code: 'MATH-101', theoryMax: 80, theoryObt: 76, intMax: 20, intObt: 19, total: 95, grade: 'A1', gp: 10, remarks: 'Outstanding analytical clarity' },
    { subject: 'Physics & Natural Sciences', code: 'PHYS-102', theoryMax: 80, theoryObt: 72, intMax: 20, intObt: 19, total: 91, grade: 'A1', gp: 10, remarks: 'Excellent lab report & calculations' },
    { subject: 'Computer Science & AI', code: 'CS-103', theoryMax: 70, theoryObt: 68, intMax: 30, intObt: 29, total: 97, grade: 'A1', gp: 10, remarks: 'Exemplary coding & logic structure' },
    { subject: 'English Literature', code: 'ENG-104', theoryMax: 80, theoryObt: 68, intMax: 20, intObt: 18, total: 86, grade: 'A2', gp: 9, remarks: 'Good critical comprehension' },
    { subject: 'Social Science & Civics', code: 'SOC-105', theoryMax: 80, theoryObt: 71, intMax: 20, intObt: 19, total: 90, grade: 'A1', gp: 10, remarks: 'Thorough historical facts & map work' },
  ];

  const totalMax = 500;
  const totalObtained = 459;
  const percentage = 91.8;
  const gpa = '9.2 / 10.0';

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Examination Results"
      description="Official statement of marks, CGPA report, and grading breakdown for Term 1 (2026-27)."
    >
      <div className="space-y-6">

        {/* Top Summary Card */}
        <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
              <Award size={36} />
            </div>
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <span className="px-3 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase tracking-wider">
                  PASSED WITH DISTINCTION
                </span>
                <span className="text-sm text-slate-500 font-semibold">• Class Rank: 3rd of 42</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900">Term 1 Assessment Report</h2>
              <p className="text-sm text-slate-500 mt-1 font-medium">
                Roll No: 1024 • Class 10-A • Certified by Board of Examinations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 shrink-0">
            <div className="text-right">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Cumulative GPA</p>
              <p className="text-3xl font-black text-blue-600 mt-0.5">{gpa}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Aggregate Score</p>
              <p className="text-3xl font-black text-slate-900 mt-0.5">{percentage}%</p>
            </div>
            <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm shadow-blue-500/20 transition-all shrink-0">
              <Download size={16} /> Download Marksheet (PDF)
            </button>
          </div>
        </div>

        {/* Detailed Marksheet Table */}
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-base text-slate-900">Subject-Wise Performance & Grade Points</h3>
            <span className="text-sm text-slate-600 font-semibold">Grand Total: {totalObtained} / {totalMax}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-xs">
                  <th className="p-4 pl-6">Subject</th>
                  <th className="p-4 text-center">Theory (Obt/Max)</th>
                  <th className="p-4 text-center">Internal (Obt/Max)</th>
                  <th className="p-4 text-center">Total (100)</th>
                  <th className="p-4 text-center">Grade</th>
                  <th className="p-4 text-center">Grade Point</th>
                  <th className="p-4 pr-6">Faculty Evaluation Remarks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {resultTable.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-900">
                      {row.subject}
                      <span className="block text-xs text-slate-400 font-mono font-normal mt-0.5">{row.code}</span>
                    </td>
                    <td className="p-4 text-center font-mono font-semibold text-slate-800">
                      {row.theoryObt} / {row.theoryMax}
                    </td>
                    <td className="p-4 text-center font-mono font-semibold text-slate-800">
                      {row.intObt} / {row.intMax}
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-mono font-black text-base text-slate-900">{row.total}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="px-2.5 py-1 rounded-md font-bold text-xs bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {row.grade}
                      </span>
                    </td>
                    <td className="p-4 text-center font-mono font-bold text-slate-900">
                      {row.gp}.0
                    </td>
                    <td className="p-4 pr-6 text-slate-600 italic">
                      "{row.remarks}"
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Principal Remarks & Grading Scale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-3">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Class Teacher & Principal Remarks:</h4>
            <p className="text-sm text-slate-600 leading-relaxed italic bg-slate-50 p-4 rounded-xl border border-slate-100">
              "Rahul has shown outstanding academic commitment throughout Term 1. His command in Mathematics and Computer Science is exemplary. With slightly more attention to literature essay structuring, he is on track for top-tier institutional honors."
            </p>
            <p className="text-xs text-slate-500 text-right font-medium pt-1">
              — Dr. Priya Patel (Class Teacher) & Prof. V. K. Nair (Principal)
            </p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-3">
            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Official Grading Legend:</h4>
            <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>A1 (91 - 100):</strong> GP 10.0 (Outstanding)</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>A2 (81 - 90):</strong> GP 9.0 (Excellent)</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>B1 (71 - 80):</strong> GP 8.0 (Very Good)</div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><strong>B2 (61 - 70):</strong> GP 7.0 (Good)</div>
            </div>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
