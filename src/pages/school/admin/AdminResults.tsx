import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  ChartNoAxesCombined, Award, Download, CheckCircle2, 
  Search, Filter, ChevronRight, TrendingUp, Sparkles, BookOpen
} from 'lucide-react';

interface ClassResultSummary {
  section: string;
  mentor: string;
  appeared: number;
  passed: number;
  passPct: number;
  distinctions: number;
  averageScore: number;
  topperName: string;
  topperScore: number;
}

const mockClassResults: ClassResultSummary[] = [
  { section: 'Class 10-A', mentor: 'Mrs. Ananya Sharma', appeared: 42, passed: 42, passPct: 100.0, distinctions: 34, averageScore: 84.6, topperName: 'Aarav Gupta', topperScore: 97.4 },
  { section: 'Class 10-B', mentor: 'Mrs. Kavita Roy', appeared: 41, passed: 40, passPct: 97.5, distinctions: 28, averageScore: 81.2, topperName: 'Sneha Roy', topperScore: 95.0 },
  { section: 'Class 7-B', mentor: 'Mrs. Neha Batra', appeared: 38, passed: 38, passPct: 100.0, distinctions: 32, averageScore: 88.2, topperName: 'Ananya Sharma', topperScore: 98.2 },
  { section: 'Class 11-PCM', mentor: 'Dr. Rajesh Sen', appeared: 44, passed: 43, passPct: 97.7, distinctions: 29, averageScore: 82.0, topperName: 'Tanya Ghosh', topperScore: 96.8 },
  { section: 'Class 9-C', mentor: 'Ms. Pooja Nair', appeared: 40, passed: 39, passPct: 97.5, distinctions: 26, averageScore: 80.5, topperName: 'Ishita Sen', topperScore: 94.6 },
  { section: 'Class 8-A', mentor: 'Mr. Vivek Saxena', appeared: 39, passed: 39, passPct: 100.0, distinctions: 30, averageScore: 85.0, topperName: 'Rohan Mehra', topperScore: 96.0 },
];

export function AdminResults() {
  const user = USERS.admin;
  const [selectedTerm, setSelectedTerm] = useState('term1');

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Institutional Examination Results & Analytics" 
      description="School-wide academic evaluation, pass percentages, topper leaderboards, and CBSE LOC result publishing."
    >
      <div className="space-y-6">
        {/* KPI Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">School Pass Percentage</span>
            <div className="text-2xl font-extrabold text-emerald-600 mt-1">98.4%</div>
            <div className="text-xs text-emerald-700 font-medium mt-0.5">Top 5% in District</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Distinction Holders (≥ 80%)</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">412 Students</div>
            <div className="text-xs text-indigo-600 mt-0.5">64.8% of Total Candidates</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">School Highest Aggregate</span>
            <div className="text-2xl font-extrabold text-amber-700 mt-1">98.2%</div>
            <div className="text-xs text-amber-700 mt-0.5">Ananya Sharma (Class 7-B)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">School Average CGPA</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">8.4 / 10.0</div>
            <div className="text-xs text-purple-600 mt-0.5">+0.3 Growth vs 2025-26</div>
          </div>
        </div>

        {/* Action & Term Selector */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-gray-700">Exam Session:</span>
            <select
              value={selectedTerm}
              onChange={(e) => setSelectedTerm(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-bold text-indigo-700 bg-indigo-50/50"
            >
              <option value="term1">Term 1 Half-Yearly Evaluation (Sep 2026)</option>
              <option value="unit1">Periodic Assessment 1 (Jul 2026)</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Publishing Official Verified Marksheets to all Parent & Student Portals')}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <CheckCircle2 className="w-3.5 h-3.5" /> Publish to Parent Portals
            </button>
            <button
              onClick={() => alert('Downloading Institutional Results Summary Sheet (Excel)')}
              className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Excel
            </button>
          </div>
        </div>

        {/* Class-wise Performance Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Class & Section</th>
                  <th className="py-3 px-4">Class Mentor</th>
                  <th className="py-3 px-4">Appeared</th>
                  <th className="py-3 px-4">Passed</th>
                  <th className="py-3 px-4">Pass Rate</th>
                  <th className="py-3 px-4">Distinctions (≥ 80%)</th>
                  <th className="py-3 px-4">Class Average</th>
                  <th className="py-3 px-4">Section Topper</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {mockClassResults.map((res, idx) => (
                  <tr key={idx} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-gray-900">{res.section}</td>
                    <td className="py-3.5 px-4 font-medium text-gray-700">{res.mentor}</td>
                    <td className="py-3.5 px-4 font-bold text-gray-800">{res.appeared}</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-700">{res.passed}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded font-bold text-[10px] ${
                        res.passPct === 100 ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {res.passPct}%
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-indigo-700">{res.distinctions} Students</td>
                    <td className="py-3.5 px-4 font-semibold text-gray-800">{res.averageScore}%</td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-amber-700">{res.topperName}</div>
                      <div className="text-[10px] text-gray-500 font-semibold">{res.topperScore}% Aggregate</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
