import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  BookOpen, Award, CheckCircle2, Users, 
  Sparkles, IndianRupee, Clock, ShieldCheck, 
  ExternalLink, Download, ChevronRight
} from 'lucide-react';

export function HrLearning() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };

  const courses = [
    {
      title: 'POSH (Prevention of Sexual Harassment) FY26 Annual Refresher',
      type: 'Mandatory Statutory',
      enrolled: 149,
      completed: 149,
      complianceRate: '100% Compliant',
      avgScore: '96%',
      status: 'Mandatory Complete'
    },
    {
      title: 'Enterprise Information Security, Phishing Defense & Zero-Trust',
      type: 'Mandatory Compliance',
      enrolled: 149,
      completed: 149,
      complianceRate: '100% Compliant',
      avgScore: '94%',
      status: 'Mandatory Complete'
    },
    {
      title: 'Managerial Effectiveness: Coaching, 1-on-1s & OKR Calibration',
      type: 'Leadership Track',
      enrolled: 12,
      completed: 11,
      complianceRate: '91.6%',
      avgScore: '92%',
      status: 'Active Track'
    },
    {
      title: 'Advanced Kubernetes Architecture & Go Microservices Masterclass',
      type: 'Technical Upskilling',
      enrolled: 42,
      completed: 36,
      complianceRate: '85.7%',
      avgScore: '89%',
      status: 'Active Track'
    }
  ];

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Learning & Development (LMS) Governance"
      description="Track statutory POSH compliance certifications, engineering upskilling roadmaps, and education stipends."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Culture' },
        { label: 'Learning & Development' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">POSH Compliance</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Certified</h3>
              <p className="text-xs text-emerald-600 font-medium">149 / 149 staff completed</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <BookOpen size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">LMS Course Completion</p>
              <h3 className="text-2xl font-bold text-slate-900">94.2%</h3>
              <p className="text-xs text-blue-600 font-medium">Across all tracks</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Certs Achieved</p>
              <h3 className="text-2xl font-bold text-slate-900">38 Vouchers</h3>
              <p className="text-xs text-purple-600 font-medium">AWS, CKA, Figma Config</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upskilling Budget Pool</p>
              <h3 className="text-2xl font-bold text-slate-900">₹35,000</h3>
              <p className="text-xs text-amber-600 font-medium">Per employee annual allowance</p>
            </div>
          </div>
        </div>

        {/* LMS Courses Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Active Organization Learning Tracks</h3>
              <p className="text-xs text-slate-500">Statutory certifications and technical capability cohorts.</p>
            </div>
            <button 
              onClick={() => alert('Exporting statutory compliance certificate registry...')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Download size={14} /> Export Audit Log
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Course Title</th>
                  <th className="py-3 px-5">Cohort Type</th>
                  <th className="py-3 px-5">Enrolled</th>
                  <th className="py-3 px-5">Completed</th>
                  <th className="py-3 px-5">Average Score</th>
                  <th className="py-3 px-5">Compliance State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {courses.map((c, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-bold text-slate-900">{c.title}</td>
                    <td className="py-3.5 px-5">
                      <span className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                        {c.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-slate-800">{c.enrolled} Staff</td>
                    <td className="py-3.5 px-5 font-bold text-emerald-600">{c.completed} Staff</td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">{c.avgScore}</td>
                    <td className="py-3.5 px-5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ {c.complianceRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
