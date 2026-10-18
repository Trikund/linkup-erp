import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  TrendingUp, Award, BarChart3, CheckCircle2, 
  ArrowUpRight, Users, Target, Sparkles, BookOpen
} from 'lucide-react';

export function ParentPerformance() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const competencies = [
    { area: 'Cloud Architectures & Microservices', score: 92, grade: 'O', status: 'Exceptional' },
    { area: 'Database Management & Optimization', score: 88, grade: 'A+', status: 'Strong Mastery' },
    { area: 'Machine Learning & Neural Algorithms', score: 86, grade: 'A+', status: 'Proficient' },
    { area: 'Information Security & Cryptography', score: 82, grade: 'A', status: 'Good Conceptual Base' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Performance Analytics" 
      description="Comparative cohort benchmarking, competency matrix, and degree completion trajectory."
    >
      {/* Benchmark Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Shivam's Current CGPA</p>
          <p className="text-3xl font-black text-[#7c3aed] mt-1">8.42 / 10.0</p>
          <p className="text-xs text-purple-700 font-semibold mt-1">First Class with Distinction</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">CSE Batch Median CGPA</p>
          <p className="text-3xl font-black text-slate-700 mt-1">7.78 / 10.0</p>
          <p className="text-xs text-emerald-600 font-semibold mt-1">+0.64 above department median</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Department Percentile Rank</p>
          <p className="text-3xl font-black text-emerald-600 mt-1">Top 12%</p>
          <p className="text-xs text-slate-500 mt-1">Ranked 16th out of 142 students</p>
        </div>
      </div>

      {/* Competencies Breakdown */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-8">
        <h3 className="text-base font-bold text-slate-800 mb-2">Subject Competency & Domain Mastery</h3>
        <p className="text-xs text-slate-500 mb-6">Evaluated through continuous lab experiments, coding submissions, and mid-term assessments.</p>

        <div className="space-y-5">
          {competencies.map((c, i) => (
            <div key={i}>
              <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                <span className="text-slate-800 text-sm">{c.area}</span>
                <span className="text-[#7c3aed] font-mono text-sm">{c.score}% ({c.grade} Grade)</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#7c3aed] h-full rounded-full transition-all duration-500" 
                  style={{ width: `${c.score}%` }} 
                />
              </div>
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>Domain Status: <strong className="text-emerald-700">{c.status}</strong></span>
                <span>University Target: 60%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CollegeLayout>
  );
}
