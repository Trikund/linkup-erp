import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileBox, Award, CheckCircle2, Download, ExternalLink, 
  Search, ShieldCheck, TrendingUp, BarChart3, FileCheck
} from 'lucide-react';

interface Criterion {
  number: number;
  name: string;
  weightage: number;
  scorePct: number;
  metricsCount: number;
  verifiedFilesCount: number;
  status: 'Ready for Review' | 'Uploaded & Verified';
}

export function AdminReports() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };

  const criteria: Criterion[] = [
    { number: 1, name: 'Curricular Aspects & Academic Flexibility', weightage: 100, scorePct: 96, metricsCount: 14, verifiedFilesCount: 42, status: 'Uploaded & Verified' },
    { number: 2, name: 'Teaching-Learning & Evaluation Processes', weightage: 350, scorePct: 94, metricsCount: 32, verifiedFilesCount: 110, status: 'Uploaded & Verified' },
    { number: 3, name: 'Research, Innovations, Grants & Extension', weightage: 110, scorePct: 91, metricsCount: 22, verifiedFilesCount: 78, status: 'Uploaded & Verified' },
    { number: 4, name: 'Infrastructure, Labs & Computing Resources', weightage: 100, scorePct: 98, metricsCount: 16, verifiedFilesCount: 54, status: 'Uploaded & Verified' },
    { number: 5, name: 'Student Support, Progression & Placements', weightage: 140, scorePct: 93, metricsCount: 26, verifiedFilesCount: 88, status: 'Uploaded & Verified' },
    { number: 6, name: 'Governance, Leadership & Financial Management', weightage: 100, scorePct: 95, metricsCount: 18, verifiedFilesCount: 62, status: 'Uploaded & Verified' },
    { number: 7, name: 'Institutional Values & Environmental Practices', weightage: 100, scorePct: 97, metricsCount: 14, verifiedFilesCount: 46, status: 'Uploaded & Verified' },
  ];

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Accreditation & NAAC/NIRF' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <FileBox className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Institutional Accreditation & IQAC Quality Cell</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                NAAC A++ (CGPA 3.78)
              </span>
            </div>
            <p className="text-sm text-gray-500">
              National Assessment and Accreditation Council (NAAC) SSR documentation, NIRF rankings data capture, and AICTE mandatory disclosures.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              NIRF 2027 DCS PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Award className="w-4 h-4" />
              NAAC SSR Master Dossier
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">NAAC Accreditation</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><Award className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Grade A++</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">CGPA: 3.78 / 4.00 (Valid till 2028)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">NIRF 2026 Ranking</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Rank #42</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Top 50 Engineering in India</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">NBA Tier-1 Status</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ShieldCheck className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">8 Programs</div>
            <div className="mt-1 text-xs text-gray-500">Washington Accord recognized</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AICTE EoA Approval</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Granted 2026-27</div>
            <div className="mt-1 text-xs text-gray-500">Total approved intake: 1,450 seats</div>
          </div>
        </div>

        {/* NAAC Criterion Cards */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-5 border-b border-gray-100 gap-2">
            <div>
              <h2 className="text-sm font-bold text-gray-900">NAAC Self Study Report (SSR) - 7 Evaluative Criteria</h2>
              <p className="text-xs text-gray-500 mt-0.5">Automated metric validation against Internal Quality Assurance Cell (IQAC) data</p>
            </div>
            <span className="text-xs font-bold text-[#7c3aed] bg-purple-50 px-3 py-1 rounded-lg">
              Cumulative SSR Score: 94.6%
            </span>
          </div>

          <div className="divide-y divide-gray-100 mt-2">
            {criteria.map((crit) => (
              <div key={crit.number} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50/50 rounded-xl px-2 transition">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-xs">
                    C{crit.number}
                  </span>
                  <div>
                    <h3 className="text-xs font-bold text-gray-900">{crit.name}</h3>
                    <div className="flex items-center gap-3 text-[11px] text-gray-500 mt-0.5">
                      <span>Weightage: <strong>{crit.weightage} pts</strong></span>
                      <span>•</span>
                      <span>Metrics: <strong>{crit.metricsCount} QnM / QlM</strong></span>
                      <span>•</span>
                      <span>Evidentiary Files: <strong>{crit.verifiedFilesCount} PDFs</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-36">
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-gray-500">Preparedness</span>
                      <span className="font-bold text-[#7c3aed]">{crit.scorePct}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#7c3aed] rounded-full" style={{ width: `${crit.scorePct}%` }} />
                    </div>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
                    {crit.status}
                  </span>

                  <button className="px-2.5 py-1 text-xs font-semibold text-[#7c3aed] hover:bg-purple-50 rounded-lg transition">
                    View Evidences
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
