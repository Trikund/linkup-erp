import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Activity, 
  TrendingUp, 
  Award, 
  AlertTriangle, 
  CheckCircle2, 
  BarChart3, 
  Users, 
  BookOpen, 
  ArrowUpRight, 
  ChevronRight,
  Sparkles,
  Download
} from 'lucide-react';

export function TeacherPerformance() {
  const user = USERS.teacher;
  const [selectedClass, setSelectedClass] = useState('10-A');

  const classComparison = [
    { class: 'Class 10-A', role: 'Mentor Class', strength: 42, avg: 84.6, highest: 99, passRate: '100%', syllabus: 68, trend: '+3.8%' },
    { class: 'Class 10-B', role: 'Subject Class', strength: 40, avg: 78.2, highest: 95, passRate: '97.5%', syllabus: 64, trend: '+2.1%' },
    { class: 'Class 9-B', role: 'Subject Class', strength: 40, avg: 81.4, highest: 96, passRate: '98.0%', syllabus: 72, trend: '+4.5%' },
    { class: 'Class 11-A', role: 'Subject Class', strength: 38, avg: 86.1, highest: 98, passRate: '100%', syllabus: 60, trend: '+1.9%' },
  ];

  const chapterDifficulty = [
    { name: 'Chapter 1: Real Numbers (Euclid & Fundamental Thm)', score: 92, difficulty: 'Easy', status: 'Mastered' },
    { name: 'Chapter 2: Polynomials (Zeroes & Factor Theorem)', score: 84, difficulty: 'Moderate', status: 'Proficient' },
    { name: 'Chapter 3: Linear Equations in Two Variables', score: 86, difficulty: 'Moderate', status: 'Proficient' },
    { name: 'Chapter 4: Quadratic Equations (Word Problems)', score: 74, difficulty: 'Challenging', status: 'Needs Practice' },
    { name: 'Chapter 7: Coordinate Geometry (Section Formula)', score: 81, difficulty: 'Moderate', status: 'Proficient' },
    { name: 'Chapter 6: Triangles (BPT & Similarity Proofs)', score: 62, difficulty: 'High Difficulty', status: 'Remedial Required' },
  ];

  const remedialStudents = [
    { name: 'Rohan Mehta', class: '10-A', roll: 18, score: '58%', weakAreas: 'Triangles Proofs, Quadratic Word Problems', recommended: 'Zero-period doubt clinic on Tue & Thu' },
    { name: 'Tanmay Bhatt', class: '10-A', roll: 28, score: '52%', weakAreas: 'Real numbers theorem proofs, Algebraic factoring', recommended: 'NCERT Exemplar step-by-step solved cards' },
    { name: 'Varun Grover', class: '10-B', roll: 33, score: '55%', weakAreas: 'Distance formula calculations, sign convention', recommended: 'Coordinate geometry practice drills' },
    { name: 'Mehak Gill', class: '9-B', roll: 19, score: '59%', weakAreas: 'Polynomial long division & remainder theorem', recommended: 'Weekly peer-tutoring with Class Monitor' },
  ];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Academic Analytics & Learning Outcomes"
      description="Comparative class performance analytics, chapter-wise competency diagnostics, and student remedial intervention plans."
    >
      <div className="space-y-8">

        {/* TOP KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Faculty Aggregate</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">82.8%</span>
              <span className="text-xs font-bold text-emerald-600">+3.2% YoY</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">184 students taught</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">CBSE Board Readiness</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">98.4%</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Predicted pass percentage</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Syllabus Completion</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">66.8%</span>
              <span className="text-xs font-bold text-purple-600">On Track</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">+8 days ahead of schedule</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Remedial Growth</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-amber-600">+14.2%</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Doubt clinic participants</p>
          </div>
        </div>

        {/* COMPARATIVE CLASS TABLE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Comparative Class Performance Benchmarks</h3>
              <p className="text-sm text-slate-500">Cross-sectional evaluation across all sections taught by Mrs. Ananya Sharma</p>
            </div>

            <button
              onClick={() => alert('Downloading official Department Analytical Report PDF...')}
              className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
            >
              <Download className="w-4 h-4" />
              Download Report
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="py-4 px-6 font-bold">Class Section</th>
                  <th className="py-4 px-6 font-bold">Teaching Role</th>
                  <th className="py-4 px-6 font-bold text-center">Strength</th>
                  <th className="py-4 px-6 font-bold text-center">Average Score</th>
                  <th className="py-4 px-6 font-bold text-center">Top Score</th>
                  <th className="py-4 px-6 font-bold text-center">Pass Rate</th>
                  <th className="py-4 px-6 font-bold text-center">Syllabus Done</th>
                  <th className="py-4 px-6 font-bold text-right">Trend</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {classComparison.map((cls, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="py-4 px-6 font-bold text-slate-900 text-base">{cls.class}</td>
                    <td className="py-4 px-6">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        cls.role.includes('Mentor') ? 'bg-purple-50 text-purple-700 border border-purple-200' : 'bg-blue-50 text-blue-700'
                      }`}>
                        {cls.role}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-slate-700">{cls.strength} Students</td>
                    <td className="py-4 px-6 text-center font-black text-slate-900 text-base">{cls.avg}%</td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-600">{cls.highest}%</td>
                    <td className="py-4 px-6 text-center font-bold text-slate-800">{cls.passRate}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700">
                        {cls.syllabus}%
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-extrabold text-emerald-600 font-mono">{cls.trend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 2-COLUMN SECTION: CHAPTER DIFFICULTY & REMEDIAL PLAN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Chapter-wise Difficulty Breakdown */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Chapter-wise Competency Diagnostics</h3>
              <p className="text-xs text-slate-500 mt-0.5">Identifies topics where students faced highest difficulty in unit tests</p>
            </div>

            <div className="space-y-4">
              {chapterDifficulty.map((ch, i) => (
                <div key={i} className="p-4 bg-slate-50/70 rounded-xl border border-slate-100 space-y-2">
                  <div className="flex justify-between items-start text-sm">
                    <span className="font-bold text-slate-900">{ch.name}</span>
                    <span className="font-black text-slate-900 shrink-0 ml-2">{ch.score}% Avg</span>
                  </div>

                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                    <div 
                      className={`h-2 rounded-full ${
                        ch.score >= 85 ? 'bg-emerald-500' :
                        ch.score >= 70 ? 'bg-blue-600' :
                        'bg-rose-500'
                      }`}
                      style={{ width: `${ch.score}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-medium">Difficulty Level: <strong className="text-slate-700">{ch.difficulty}</strong></span>
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                      ch.status === 'Mastered' ? 'bg-emerald-100 text-emerald-800' :
                      ch.status === 'Proficient' ? 'bg-blue-100 text-blue-800' :
                      ch.status === 'Needs Practice' ? 'bg-amber-100 text-amber-800' :
                      'bg-rose-100 text-rose-800'
                    }`}>
                      {ch.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Targeted Remedial Intervention Plan */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Remedial Mentorship Cohort</h3>
                <p className="text-xs text-slate-500 mt-0.5">Students enrolled in doubt clearing sessions (&lt;65% average)</p>
              </div>
              <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-xl text-xs font-bold">
                Priority Coaching
              </span>
            </div>

            <div className="space-y-4">
              {remedialStudents.map((st, i) => (
                <div key={i} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-900 text-base">{st.name}</span>
                      <span className="text-xs text-slate-400 font-mono ml-2">Class {st.class} (Roll #{st.roll})</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-extrabold bg-rose-50 text-rose-700 border border-rose-200">
                      Score: {st.score}
                    </span>
                  </div>

                  <div className="text-xs text-slate-600">
                    <span className="font-bold text-slate-700">Specific Weak Areas:</span> {st.weakAreas}
                  </div>

                  <div className="text-xs text-blue-700 bg-blue-50/80 p-2.5 rounded-lg border border-blue-100 font-semibold">
                    Plan: {st.recommended}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Next Doubt Clinic: Today at 02:35 PM in Room 204</span>
              <button 
                onClick={() => alert('Dispatched remedial progress reports to respective student parents.')}
                className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition"
              >
                Send Parents Update
              </button>
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
