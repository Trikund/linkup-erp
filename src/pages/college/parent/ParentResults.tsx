import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Award, TrendingUp, Download, CheckCircle2, 
  BarChart2, FileText, ChevronRight, ShieldCheck, Sparkles
} from 'lucide-react';

export function ParentResults() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const semesterRecords = [
    { sem: 'Semester VI', session: 'Even Sem 2025-26', sgpa: 8.61, credits: 26, result: 'Pass (Distinction)', gradeCard: 'SGPA-S6-21CS1048.pdf' },
    { sem: 'Semester V', session: 'Odd Sem 2025-26', sgpa: 8.55, credits: 26, result: 'Pass (Distinction)', gradeCard: 'SGPA-S5-21CS1048.pdf' },
    { sem: 'Semester IV', session: 'Even Sem 2024-25', sgpa: 8.50, credits: 24, result: 'Pass (Distinction)', gradeCard: 'SGPA-S4-21CS1048.pdf' },
    { sem: 'Semester III', session: 'Odd Sem 2024-25', sgpa: 8.38, credits: 24, result: 'Pass (First Class)', gradeCard: 'SGPA-S3-21CS1048.pdf' },
    { sem: 'Semester II', session: 'Even Sem 2023-24', sgpa: 8.25, credits: 22, result: 'Pass (First Class)', gradeCard: 'SGPA-S2-21CS1048.pdf' },
    { sem: 'Semester I', session: 'Odd Sem 2023-24', sgpa: 8.12, credits: 20, result: 'Pass (First Class)', gradeCard: 'SGPA-S1-21CS1048.pdf' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Results & CGPA" 
      description="Official university grade cards, semester-wise SGPA progression, and provisional academic transcript."
    >
      {/* Top CGPA Hero Card */}
      <div className="bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-indigo-700 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-purple-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Graduation Credit Audit
              </span>
              <span className="bg-emerald-400/30 text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-300/30 flex items-center gap-1">
                <CheckCircle2 size={12} /> First Class with Distinction
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">8.42 Cumulative CGPA</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              142 earned credits across Semesters 1 to 6 • Zero academic backlogs • Rank: Top 15% in Department of Computer Science.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#7c3aed] text-xs font-bold hover:bg-slate-50 transition-all shadow-md">
              <Download size={14} />
              <span>Consolidated Transcript (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Historical Semesters Grade Cards */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden mb-8">
        <div className="p-5 sm:p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-800">Semester-Wise Performance Records</h3>
            <p className="text-xs text-slate-500">Official marks cards issued by Controller of Examinations (COE).</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Semester</th>
                <th className="py-3.5 px-4">Academic Session</th>
                <th className="py-3.5 px-4 text-center">Credits Completed</th>
                <th className="py-3.5 px-4 text-center">SGPA (Out of 10.0)</th>
                <th className="py-3.5 px-4 text-center">Classification</th>
                <th className="py-3.5 px-4 text-right">Download Grade Card</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {semesterRecords.map((r, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-4 px-4 font-bold text-slate-900 text-sm">{r.sem}</td>
                  <td className="py-4 px-4 text-slate-500">{r.session}</td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-slate-800">{r.credits} Credits</td>
                  <td className="py-4 px-4 text-center font-mono font-black text-base text-[#7c3aed]">{r.sgpa}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {r.result}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all">
                      <Download size={13} />
                      <span>Marksheet</span>
                    </button>
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
