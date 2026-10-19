import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  BarChart3, TrendingUp, Zap, Clock, 
  ShieldCheck, AlertTriangle, CheckCircle2, 
  GitCommit, GitPullRequest, ArrowUpRight, Download, Calendar
} from 'lucide-react';

export function ManagerReports() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const doraMetrics = [
    {
      title: 'Deployment Frequency',
      value: '4.8 / week',
      benchmark: 'Elite Tier (>3/wk)',
      change: '+18% vs Q3',
      color: 'blue',
      description: 'Automated continuous deployment across staging and production clusters.'
    },
    {
      title: 'Lead Time for Changes',
      value: '18.2 Hours',
      benchmark: 'Elite Tier (<24h)',
      change: '-4.1 hrs faster',
      color: 'emerald',
      description: 'Time from first commit to merged production release.'
    },
    {
      title: 'Change Failure Rate',
      value: '1.4%',
      benchmark: 'Target < 5%',
      change: 'Zero rollbacks in Oct',
      color: 'purple',
      description: 'Percentage of releases requiring hotfixes or rollbacks.'
    },
    {
      title: 'Mean Time to Restore (MTTR)',
      value: '24 Minutes',
      benchmark: 'Target < 60m',
      change: '-12m faster with K8s',
      color: 'amber',
      description: 'Automated cluster health check and container failover.'
    }
  ];

  const sprintVelocityHistory = [
    { sprint: 'Sprint 38 (Aug 2026)', committed: 140, completed: 136, velocityPercent: 97, prsMerged: 38 },
    { sprint: 'Sprint 39 (Sep 2026)', committed: 150, completed: 148, velocityPercent: 98, prsMerged: 42 },
    { sprint: 'Sprint 40 (Sep 2026)', committed: 155, completed: 150, velocityPercent: 96, prsMerged: 45 },
    { sprint: 'Sprint 41 (Oct 2026)', committed: 160, completed: 158, velocityPercent: 98, prsMerged: 49 },
    { sprint: 'Sprint 42 (Current Oct)', committed: 160, completed: 128, velocityPercent: 80, prsMerged: 36 }
  ];

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Engineering Metrics & DORA Analytics"
      description="Assess team deployment frequency, PR review turnaround, lead times, and engineering delivery velocity."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics & Governance' },
        { label: 'Engineering Metrics & DORA' }
      ]}
    >
      <div className="space-y-6">
        {/* DORA 4 Golden Signals Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {doraMetrics.map((dm, idx) => (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{dm.title}</span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    dm.color === 'emerald' ? 'bg-emerald-50 text-emerald-700' :
                    dm.color === 'purple' ? 'bg-purple-50 text-purple-700' :
                    dm.color === 'amber' ? 'bg-amber-50 text-amber-700' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    {dm.benchmark}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900">{dm.value}</h3>
                <p className="text-xs font-semibold text-emerald-600 mt-1">{dm.change}</p>
              </div>
              <p className="text-[11px] text-slate-400 mt-3 pt-2 border-t border-slate-100">{dm.description}</p>
            </div>
          ))}
        </div>

        {/* Sprint Velocity Trends */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Sprint Delivery Velocity & Commitment Ratio</h3>
              <p className="text-xs text-slate-500">Historical delivery consistency across the last 5 two-week engineering sprints.</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
              <Download size={14} /> Export DORA Report
            </button>
          </div>

          <div className="space-y-4">
            {sprintVelocityHistory.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">{s.sprint}</h4>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Committed: <strong className="text-slate-800">{s.committed} pts</strong> • Delivered: <strong className="text-blue-600">{s.completed} pts</strong> • Merged: <strong className="text-slate-700">{s.prsMerged} PRs</strong>
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-32 bg-slate-200 h-2.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${s.velocityPercent}%` }}
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-900 w-12 text-right">{s.velocityPercent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Code Quality & Pull Request Health */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h4 className="text-sm font-bold text-slate-900 mb-4">Pull Request Review SLA & Hygiene</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Avg Time to First Reviewer Response</span>
                <span className="font-bold text-slate-900">2.1 Hours</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Avg Pull Request Lifespan</span>
                <span className="font-bold text-slate-900">8.5 Hours</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Weekly Merged PR Volume</span>
                <span className="font-bold text-blue-600">28 Pull Requests</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
            <h4 className="text-sm font-bold text-slate-900 mb-4">SonarQube & Security Static Analysis</h4>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Code Reliability & Bug Rating</span>
                <span className="font-bold text-emerald-600">Grade A (0 Bugs)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Security Vulnerability Rating</span>
                <span className="font-bold text-emerald-600">Grade A (0 Vulnerabilities)</span>
              </div>
              <div className="flex justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-slate-600">Technical Debt Ratio</span>
                <span className="font-bold text-slate-900">2.1% (Low Debt)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
