import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Sparkles, Target, CheckCircle2, TrendingUp, 
  Clock, Plus, Download, ChevronRight, Award
} from 'lucide-react';

interface KeyResult {
  id: string;
  description: string;
  target: string;
  current: string;
  progressPct: number;
}

interface Objective {
  id: string;
  title: string;
  overallProgress: number;
  category: string;
  confidence: 'High' | 'Medium';
  keyResults: KeyResult[];
}

export function EmployeeOkrs() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const objectives: Objective[] = [
    {
      id: 'OKR-Q4-01',
      title: 'Elevate Web Client Performance & Core Web Vitals to 99+ Lighthouse Score',
      overallProgress: 85,
      category: 'Engineering Excellence',
      confidence: 'High',
      keyResults: [
        { id: 'KR-1.1', description: 'Reduce Largest Contentful Paint (LCP) on mobile from 2.8s to under 1.2s', target: '< 1.2s', current: '1.35s', progressPct: 90 },
        { id: 'KR-1.2', description: 'Decrease initial client bundle footprint by 35% via dynamic route chunking', target: '-35%', current: '-28%', progressPct: 80 }
      ]
    },
    {
      id: 'OKR-Q4-02',
      title: 'Deliver Phase 3 Enterprise Dashboard Redesign with Zero Regression Bugs',
      overallProgress: 90,
      category: 'Product Delivery',
      confidence: 'High',
      keyResults: [
        { id: 'KR-2.1', description: 'Migrate 100% of legacy layout views to Design System v2 component tokens', target: '100% migrated', current: '95% done', progressPct: 95 },
        { id: 'KR-2.2', description: 'Maintain 90%+ unit test coverage with Vitest and Playwright e2e suites', target: '90% coverage', current: '88% coverage', progressPct: 85 }
      ]
    },
    {
      id: 'OKR-Q4-03',
      title: 'Engineering Culture, Mentorship & Talent Acquisition',
      overallProgress: 75,
      category: 'Leadership & Culture',
      confidence: 'Medium',
      keyResults: [
        { id: 'KR-3.1', description: 'Conduct 12 technical interviews for senior frontend engineering positions', target: '12 interviews', current: '10 done', progressPct: 83 },
        { id: 'KR-3.2', description: 'Mentor 2 associate software engineers through bi-weekly pair programming', target: '2 mentees', current: '2 mentees', progressPct: 70 }
      ]
    }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Quarterly OKRs"
      description="Track your Objectives and Key Results (OKRs), sprint targets, and quarterly goals."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Growth' },
        { label: 'Quarterly OKRs' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Sparkles size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Q4 2026 Engineering OKRs & Goals</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Overall Progress: 83.3%
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Aligned with VP Engineering Siddharth Mehta & Enterprise Frontend Pod 4 strategy.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Export OKR Summary PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Plus size={14} />
              Add Key Result
            </button>
          </div>
        </div>

        {/* OKR Cards */}
        <div className="space-y-5">
          {objectives.map((obj) => (
            <div key={obj.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {obj.id}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                      {obj.category}
                    </span>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {obj.confidence} Confidence
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-800 mt-2">{obj.title}</h3>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 font-medium">Completion</span>
                    <div className="font-mono text-base font-black text-slate-900">{obj.overallProgress}%</div>
                  </div>
                  <div className="w-20 bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${obj.overallProgress}%` }} />
                  </div>
                </div>
              </div>

              {/* Key Results List */}
              <div className="mt-4 space-y-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Key Results (KRs)</span>
                {obj.keyResults.map((kr) => (
                  <div key={kr.id} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="flex items-start gap-2.5">
                      <span className="font-mono text-[10px] font-bold text-slate-500 mt-0.5">{kr.id}</span>
                      <p className="font-medium text-slate-700 leading-snug">{kr.description}</p>
                    </div>

                    <div className="flex items-center gap-4 shrink-0 sm:self-center">
                      <span className="text-slate-500 text-[11px]">Target: <strong className="text-slate-800">{kr.target}</strong></span>
                      <span className="text-blue-600 font-mono font-bold text-[11px]">Current: {kr.current}</span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">
                        {kr.progressPct}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
