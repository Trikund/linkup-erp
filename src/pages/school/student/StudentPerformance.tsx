import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { TrendingUp, Award, Target, Zap, CheckCircle2, Star, ArrowUpRight } from 'lucide-react';

export function StudentPerformance() {
  const user = USERS.student;

  const subjectMetrics = [
    { name: 'Computer Science', score: 97, change: '+4%', level: 'Mastery', color: 'bg-emerald-500' },
    { name: 'Advanced Mathematics', score: 95, change: '+2%', level: 'Mastery', color: 'bg-blue-600' },
    { name: 'Physics & Science', score: 91, change: '+1%', level: 'Advanced', color: 'bg-indigo-600' },
    { name: 'Social Studies', score: 90, change: '+5%', level: 'Advanced', color: 'bg-cyan-600' },
    { name: 'English Literature', score: 86, change: '-1%', level: 'Proficient', color: 'bg-amber-500' },
  ];

  const strengths = [
    'Algorithmic Logic & Coding Syntax (98% accuracy in lab submissions)',
    'Algebra & Trigonometric Identity Proofs (Zero calculation errors)',
    'Consistent Class Participation and 92.4% punctual attendance record'
  ];

  const focusAreas = [
    'Formal essay thesis statement formulation in English Literature',
    'Speed in solving 5-mark long physics derivation questions'
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Performance Analytics"
      description="Holistic academic growth analytics, subject mastery metrics, and personalized learning insights."
    >
      <div className="space-y-6">

        {/* Top 3 High-Level Scorecards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic Trajectory</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Top 5th Percentile</span>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-1">+3.8%</p>
            <p className="text-sm text-slate-500 mt-1">Growth compared to previous term baseline</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Homework & Task Velocity</span>
              <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">96% On Time</span>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-blue-600 mt-1">48 of 50</p>
            <p className="text-sm text-slate-500 mt-1">Assignments submitted prior to deadline</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Institutional Rank</span>
              <Award size={22} className="text-amber-500" />
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-1">#03 <span className="text-base font-semibold text-slate-400">/ 42 Students</span></p>
            <p className="text-sm text-slate-500 mt-1">Greenfield Academy Grade 10-A Honor Roll</p>
          </div>
        </div>

        {/* Subject Mastery Breakdown */}
        <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Subject Competency & Mastery Index</h2>
              <p className="text-sm text-slate-500 mt-0.5">Based on weekly assessments, class projects, and term tests.</p>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">Updated Oct 2026</span>
          </div>

          <div className="space-y-4">
            {subjectMetrics.map((sub, i) => (
              <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2.5">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-slate-900 text-base">{sub.name}</span>
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-white border border-slate-200 text-slate-700">
                      {sub.level}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-slate-900 text-base">{sub.score}%</span>
                    <span className={`text-xs font-bold ${sub.change.startsWith('+') ? 'text-emerald-600' : 'text-slate-400'}`}>
                      {sub.change}
                    </span>
                  </div>
                </div>

                <div className="w-full bg-slate-200/80 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${sub.color} transition-all duration-700`}
                    style={{ width: `${sub.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strengths & Actionable Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] space-y-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Zap size={18} className="text-amber-500" /> Key Academic Strengths
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {strengths.map((str, i) => (
                <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span>{str}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Target size={18} className="text-blue-500" /> Recommended Focus Areas
            </h3>
            <ul className="space-y-3 text-sm text-slate-700 font-medium">
              {focusAreas.map((foc, i) => (
                <li key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/50 border border-blue-100/70">
                  <ArrowUpRight size={18} className="text-blue-600 shrink-0 mt-0.5" />
                  <span>{foc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
