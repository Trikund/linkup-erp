import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  TrendingUp, Award, Star, MessageSquare, CheckCircle2, 
  ChevronRight, Download, Users, FileText, Sparkles
} from 'lucide-react';

export function EmployeePerformance() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Appraisal & 360°"
      description="Annual performance appraisals, 360-degree peer feedback, and career level progression."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Growth' },
        { label: 'Appraisal & 360°' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <Award size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Annual Appraisal & Career Ladder</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Performance Rating: 4.6 / 5.0 (Exceeds Expectations)
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Annual review cycle completed • Recommended for Staff Engineer (IC4) promotion panel in March 2027.
            </p>
          </div>
          <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
            <Download size={14} className="text-slate-500" />
            Appraisal Summary Dossier PDF
          </button>
        </div>

        {/* 4 Performance Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Overall Rating</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Star size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">4.6 / 5.0</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Top 10% Engineering percentile</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Current Level</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Award size={16} /></span>
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900">IC3 Senior Dev</div>
            <div className="mt-1 text-xs text-slate-500">Frontend Engineering Track</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Target Level</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><TrendingUp size={16} /></span>
            </div>
            <div className="mt-2 text-xl font-bold text-purple-700">IC4 Staff Dev</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Nominated for March 2027 Cycle</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Peer Reviews Received</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><MessageSquare size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">8 Reviews</div>
            <div className="mt-1 text-xs text-slate-500">From Pod 4 & Design Leads</div>
          </div>
        </div>

        {/* 360-Degree Competency Breakdown Grid */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-800 mb-1">Core Competency Matrix Evaluation</h3>
          <p className="text-xs text-slate-500 mb-6">Aggregated ratings from Manager, Tech Leads, and Cross-Functional Peers.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-slate-700">Technical Depth & Architecture (TypeScript, React 19)</span>
                  <span className="font-mono font-bold text-blue-600">4.8 / 5.0</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '96%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-slate-700">Sprint Delivery Velocity & Reliability</span>
                  <span className="font-mono font-bold text-blue-600">4.7 / 5.0</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '94%' }} />
                </div>
              </div>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-slate-700">Cross-Team Collaboration & Communication</span>
                  <span className="font-mono font-bold text-emerald-600">4.5 / 5.0</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="font-semibold text-slate-700">Mentorship, Code Review & Knowledge Sharing</span>
                  <span className="font-mono font-bold text-emerald-600">4.5 / 5.0</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '90%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Manager 1-on-1 Feedback Note */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center">
              SM
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-800">Siddharth Mehta</h4>
              <p className="text-[10px] text-slate-500 font-medium">VP Engineering • Direct Manager Review</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed italic bg-white p-4 rounded-xl border border-slate-200">
            "Rahul has demonstrated exceptional technical ownership across our web platform revamp. His proactive initiative in driving Core Web Vitals optimizations and mentoring two junior engineers on TypeScript clean code practices has significantly elevated our frontend quality. Highly recommended for Staff Engineer (IC4) advancement in the upcoming Q1 2027 cycle."
          </p>
        </div>
      </div>
    </CorporateLayout>
  );
}
