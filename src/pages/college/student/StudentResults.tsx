import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';

export function StudentResults() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="Academic Results" description="View SGPA, CGPA and subject-wise grades">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-2xl p-6 text-white shadow-xl shadow-[#7c3aed]/20">
          <p className="text-sm font-medium text-white/80">Overall CGPA</p>
          <h2 className="text-4xl font-black mt-2">8.42</h2>
          <p className="text-xs font-medium text-white/80 mt-2">Top 15% of Batch</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Last Semester SGPA (Sem 6)</p>
          <h2 className="text-4xl font-black text-slate-800 mt-2">8.61</h2>
          <p className="text-xs font-medium text-green-600 mt-2 flex items-center gap-1">
            ↑ +0.15 from Semester 5
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Semester 6 Detailed Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100">
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Subject</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Credits</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Grade</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { sub: 'Computer Networks', cred: 4, grade: 'A', points: 9 },
                { sub: 'Software Engineering', cred: 4, grade: 'A+', points: 10 },
                { sub: 'Operating Systems', cred: 4, grade: 'B+', points: 8 },
                { sub: 'Lab: Networks', cred: 2, grade: 'A+', points: 10 }
              ].map((r, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-bold text-slate-800">{r.sub}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500 text-center">{r.cred}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="font-bold text-green-600">{r.grade}</span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700 text-center">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}