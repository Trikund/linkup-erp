import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookOpen, Plus, Download, Search, CheckCircle2, 
  Layers, Award, GraduationCap, ExternalLink
} from 'lucide-react';

export function AdminCourses() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [levelFilter, setLevelFilter] = useState<'all' | 'ug' | 'pg' | 'phd'>('all');

  const programs = [
    {
      code: 'BTECH-CSE',
      title: 'Bachelor of Technology in Computer Science & Engineering',
      level: 'ug',
      duration: '4 Years (8 Semesters)',
      intake: 240,
      totalCredits: 160,
      aicteApproved: true,
      nbaAccredited: true,
      dept: 'Computer Science & Engineering',
      curriculum: 'NEP 2020 Compliant (Rev. 2024)'
    },
    {
      code: 'BTECH-AIDS',
      title: 'Bachelor of Technology in Artificial Intelligence & Data Science',
      level: 'ug',
      duration: '4 Years (8 Semesters)',
      intake: 120,
      totalCredits: 160,
      aicteApproved: true,
      nbaAccredited: true,
      dept: 'Artificial Intelligence & Data Science',
      curriculum: 'NEP 2020 Compliant (Rev. 2024)'
    },
    {
      code: 'MBA-GEN',
      title: 'Master of Business Administration (Dual Specialization)',
      level: 'pg',
      duration: '2 Years (4 Semesters)',
      intake: 120,
      totalCredits: 104,
      aicteApproved: true,
      nbaAccredited: true,
      dept: 'Management Studies (DOMS)',
      curriculum: 'UGC & AICTE Model Curriculum'
    },
    {
      code: 'MTECH-CSE',
      title: 'Master of Technology in Distributed Systems & AI',
      level: 'pg',
      duration: '2 Years (4 Semesters)',
      intake: 36,
      totalCredits: 68,
      aicteApproved: true,
      nbaAccredited: false,
      dept: 'Computer Science & Engineering',
      curriculum: 'Research & Thesis Focused'
    },
    {
      code: 'PHD-ENGG',
      title: 'Doctor of Philosophy (Ph.D.) in Engineering & Tech',
      level: 'phd',
      duration: '3 - 5 Years (Doctoral)',
      intake: 24,
      totalCredits: 16,
      aicteApproved: true,
      nbaAccredited: false,
      dept: 'Interdisciplinary Research Centre',
      curriculum: 'Coursework + Peer Publication'
    }
  ];

  const filtered = programs.filter(p => levelFilter === 'all' || p.level === levelFilter);

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Programs & Courses" 
      description="University degree offerings, AICTE sanctioned intake quotas, NEP 2020 credit framework, and academic curriculum schemas."
    >
      {/* Top Banner Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Sanctioned Annual Intake</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">1,450 Seats</p>
          <p className="text-[10px] text-purple-700 font-semibold">AICTE Approved</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Degree Programs</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">18 Programs</p>
          <p className="text-[10px] text-slate-500">UG, PG & Doctoral</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Curriculum Framework</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">NEP 2020</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Multi-disciplinary Minor</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Accreditation Standing</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">Tier-1 NBA</p>
          <p className="text-[10px] text-slate-500">Washington Accord</p>
        </div>
      </div>

      {/* Filter and Action Bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: 'All Degrees (18)' },
            { key: 'ug', label: 'Undergraduate (UG)' },
            { key: 'pg', label: 'Postgraduate (PG)' },
            { key: 'phd', label: 'Doctoral (Ph.D.)' }
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setLevelFilter(f.key as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                levelFilter === f.key
                  ? 'bg-[#7c3aed] text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm">
            <Download size={14} />
            <span>AICTE Approval Order</span>
          </button>
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all">
            <Plus size={14} />
            <span>Add Program</span>
          </button>
        </div>
      </div>

      {/* Program Cards */}
      <div className="space-y-4">
        {filtered.map((p) => (
          <div key={p.code} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                    {p.code}
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                    {p.dept}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-500 mt-0.5">{p.duration} • Total Credits: <strong className="text-slate-800">{p.totalCredits}</strong></p>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-slate-900 font-mono block bg-slate-50 px-3 py-1 rounded-xl border border-slate-100">
                  Approved Intake: {p.intake} Seats
                </span>
                <span className="text-[11px] font-bold text-emerald-600 block mt-1">AICTE Sanctioned</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-2 text-xs text-slate-600">
              <span>Curriculum Scheme: <strong className="text-slate-800">{p.curriculum}</strong></span>
              <button className="text-[#7c3aed] font-bold hover:underline inline-flex items-center gap-1">
                <Download size={13} />
                <span>Download Syllabus Schema (PDF)</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
