import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  TrendingUp, Award, BarChart3, Star, CheckCircle2, 
  User, Code, ArrowUpRight, ShieldCheck, Sparkles
} from 'lucide-react';

export function StudentPerformance() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  const skills = [
    { name: 'Data Structures & Algorithms', level: 94, category: 'Core CS', tag: 'Expert' },
    { name: 'Machine Learning & Neural Nets', level: 91, category: 'AI Specialization', tag: 'Advanced' },
    { name: 'Cloud Architecture (AWS & Docker)', level: 88, category: 'Systems', tag: 'Proficient' },
    { name: 'Computer Networks & Security', level: 84, category: 'Infrastructure', tag: 'Proficient' },
    { name: 'Database Systems & SQL Optimization', level: 90, category: 'Databases', tag: 'Advanced' },
    { name: 'Discrete Math & Automata Theory', level: 78, category: 'Foundations', tag: 'Competent' },
  ];

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Academic Performance & Analytics" 
      description="Departmental Rank • Domain Competency Analysis • Faculty Mentor Assessment"
    >
      {/* Top Ranking & Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Department Rank</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-4xl font-black text-[#7c3aed]">#18</h2>
            <span className="text-xs text-slate-500 font-bold">out of 142</span>
          </div>
          <p className="text-xs text-emerald-600 mt-2 font-bold flex items-center gap-1">
            <TrendingUp size={14} /> Top 12.6% in B.Tech CSE Batch
          </p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Competitive Coding</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-4xl font-black text-slate-900">420+</h2>
            <span className="text-xs text-slate-500 font-bold">Solved</span>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">LeetCode Rating: 1845 (Knight)</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">GitHub Contributions</p>
          <div className="flex items-baseline gap-2 mt-1">
            <h2 className="text-4xl font-black text-blue-600">840</h2>
            <span className="text-xs text-slate-500 font-bold">Commits</span>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">48 Public Repositories</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Academic Standing</p>
          <h2 className="text-2xl font-black text-emerald-600 mt-2">Honor Roll</h2>
          <p className="text-xs text-slate-500 mt-2 font-medium">Dean's List for Sem 4 & Sem 6</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column (2 Cols): Domain Mastery */}
        <div className="lg:col-span-2 space-y-8">
          
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900">Subject Mastery & Domain Competencies</h3>
                <p className="text-xs text-slate-500 font-medium">Aggregated across Internal Tests, End-Sem Exams & Lab Practicals</p>
              </div>
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
                AICTE Benchmark
              </span>
            </div>

            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">{skill.category}</span>
                      <h4 className="text-sm font-bold text-slate-800">{skill.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900">{skill.level}%</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ml-2 ${
                        skill.tag === 'Expert' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        skill.tag === 'Advanced' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {skill.tag}
                      </span>
                    </div>
                  </div>

                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden mt-2">
                    <div 
                      className={`h-full rounded-full ${
                        skill.level >= 90 ? 'bg-gradient-to-r from-emerald-500 to-[#7c3aed]' :
                        skill.level >= 80 ? 'bg-gradient-to-r from-blue-500 to-indigo-600' :
                        'bg-amber-500'
                      }`} 
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (1 Col): Mentor Evaluation */}
        <div className="space-y-8">
          
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Faculty Advisor Evaluation</h3>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-base border border-purple-200">
                AS
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Dr. Ankit Sharma</h4>
                <p className="text-xs text-slate-500">HOD & Senior Professor, CSE</p>
              </div>
            </div>

            <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 text-xs text-slate-700 leading-relaxed mb-4">
              <p className="italic">
                "Shivam demonstrates strong analytical rigor in distributed systems and algorithms. His capstone work on enterprise ERP architectures is commendable. Recommended to pursue Tier-1 placement opportunities and GATE/research pathways."
              </p>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Problem Solving:</span>
                <span className="font-bold text-slate-800">Outstanding (9.5/10)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Lab & Code Quality:</span>
                <span className="font-bold text-slate-800">Excellent (9.0/10)</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-100">
                <span className="text-slate-500">Seminar Presentation:</span>
                <span className="font-bold text-slate-800">Very Good (8.5/10)</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-slate-500">Attendance & Conduct:</span>
                <span className="font-bold text-emerald-600">Exemplary (9.2/10)</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles size={16} className="text-amber-400" />
              <h4 className="text-sm font-bold">Placement Readiness Index</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Your profile is verified for Tier-1 Super Dream Recruitment Drives (CTC ₹18 LPA+).
            </p>
            <div className="bg-white/10 rounded-2xl p-3 border border-white/10 text-xs flex justify-between items-center">
              <span>Readiness Score:</span>
              <strong className="text-emerald-400 text-sm">92 / 100 (Tier-1)</strong>
            </div>
          </div>

        </div>
      </div>
    </CollegeLayout>
  );
}
