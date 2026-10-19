import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FolderKanban, GitBranch, GitPullRequest, Layers, 
  CheckCircle2, Clock, Calendar, AlertTriangle, 
  ExternalLink, ArrowUpRight, ShieldCheck, Sparkles,
  Search, Filter
} from 'lucide-react';

interface ProjectStream {
  id: string;
  name: string;
  repo: string;
  lead: string;
  leadAvatar: string;
  progress: number;
  health: 'On Track' | 'At Risk' | 'Ahead of Schedule';
  targetRelease: string;
  description: string;
  milestones: { name: string; date: string; status: 'completed' | 'in_progress' | 'upcoming' }[];
  activeContributors: number;
  openPRs: number;
}

export function ManagerProjects() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [projects] = useState<ProjectStream[]>([
    {
      id: 'PRJ-101',
      name: 'LinkUp Web Revamp v3 (Tailwind SaaS)',
      repo: 'linkup-corp/web-platform-core',
      lead: 'Rahul Sharma',
      leadAvatar: 'RS',
      progress: 82,
      health: 'On Track',
      targetRelease: 'Nov 15, 2026',
      description: 'Complete overhaul of web client with modular micro-frontends, responsive 100dvh layouts, and role-based views.',
      milestones: [
        { name: 'Figma Token Handshake', date: 'Sep 25', status: 'completed' },
        { name: 'Core Dashboard & Shell', date: 'Oct 10', status: 'completed' },
        { name: 'Manager & Admin Workflows', date: 'Oct 28', status: 'in_progress' },
        { name: 'Security Pen-Testing & GA', date: 'Nov 15', status: 'upcoming' }
      ],
      activeContributors: 4,
      openPRs: 5
    },
    {
      id: 'PRJ-102',
      name: 'Corporate Admin & Tenant Suite',
      repo: 'linkup-corp/admin-console',
      lead: 'Vikram Malhotra',
      leadAvatar: 'VM',
      progress: 91,
      health: 'Ahead of Schedule',
      targetRelease: 'Oct 30, 2026',
      description: 'Multi-tenant department provisioning, granular RBAC access controls, and SOC-2 audit logging engine.',
      milestones: [
        { name: 'Database Partitioning', date: 'Aug 20', status: 'completed' },
        { name: 'OAuth2 & SAML SSO Core', date: 'Sep 15', status: 'completed' },
        { name: 'Audit Log Archival Engine', date: 'Oct 12', status: 'completed' },
        { name: 'Staging Soak Test', date: 'Oct 26', status: 'in_progress' }
      ],
      activeContributors: 3,
      openPRs: 2
    },
    {
      id: 'PRJ-103',
      name: 'High-Throughput Mobile API Gateway',
      repo: 'linkup-corp/mobile-gateway-api',
      lead: 'Vikram Malhotra',
      leadAvatar: 'VM',
      progress: 70,
      health: 'At Risk',
      targetRelease: 'Dec 01, 2026',
      description: 'Low-latency Go microservices providing real-time WebSocket push notifications and offline sync for iOS/Android.',
      milestones: [
        { name: 'Protocol Buffer Definitions', date: 'Sep 10', status: 'completed' },
        { name: 'gRPC to JSON Reverse Proxy', date: 'Oct 05', status: 'completed' },
        { name: 'Redis Pub/Sub Sync', date: 'Nov 05', status: 'in_progress' },
        { name: 'Load Testing 50k req/s', date: 'Nov 20', status: 'upcoming' }
      ],
      activeContributors: 2,
      openPRs: 4
    },
    {
      id: 'PRJ-104',
      name: 'Design System & Component Tokens v2',
      repo: 'linkup-corp/design-tokens-v2',
      lead: 'Sneha Roy',
      leadAvatar: 'SR',
      progress: 95,
      health: 'On Track',
      targetRelease: 'Oct 25, 2026',
      description: 'Unified cross-platform theme tokens, WCAG 2.1 AA accessibility compliance, and Storybook documentation.',
      milestones: [
        { name: 'Color & Typography Hierarchy', date: 'Aug 15', status: 'completed' },
        { name: 'Accessible Form Controls', date: 'Sep 18', status: 'completed' },
        { name: 'Data Grid & Table Components', date: 'Oct 08', status: 'completed' },
        { name: 'Version 2.0 NPM Publish', date: 'Oct 25', status: 'in_progress' }
      ],
      activeContributors: 3,
      openPRs: 1
    }
  ]);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Project Roadmaps & Delivery"
      description="Track technical milestones across 4 engineering streams, monitor release dates, and unblock PR bottlenecks."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Projects & Delivery' },
        { label: 'Project Roadmaps' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FolderKanban size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Repositories</p>
              <h3 className="text-2xl font-bold text-slate-900">4 Streams</h3>
              <p className="text-xs text-blue-600 font-medium">All Pod 4 deliverables</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Delivery</p>
              <h3 className="text-2xl font-bold text-slate-900">84.5%</h3>
              <p className="text-xs text-emerald-600 font-medium">Across all Q4 milestones</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <GitPullRequest size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Pull Requests</p>
              <h3 className="text-2xl font-bold text-slate-900">12 PRs</h3>
              <p className="text-xs text-purple-600 font-medium">Avg review time 3.4 hrs</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Attention Required</p>
              <h3 className="text-2xl font-bold text-slate-900">1 Stream</h3>
              <p className="text-xs text-amber-600 font-medium">Mobile Gateway at risk</p>
            </div>
          </div>
        </div>

        {/* Project Roadmaps List */}
        <div className="space-y-5">
          {projects.map(proj => (
            <div key={proj.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                    <h3 className="text-lg font-bold text-slate-900">{proj.name}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${
                      proj.health === 'Ahead of Schedule' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                      proj.health === 'On Track' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                      'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {proj.health}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 mb-3">{proj.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 font-medium">
                    <span className="font-mono bg-slate-100 px-2.5 py-1 rounded-lg text-slate-700">
                      📂 {proj.repo}
                    </span>
                    <span>👤 Tech Lead: <strong className="text-slate-900">{proj.lead}</strong></span>
                    <span>🚀 Target Release: <strong className="text-blue-600">{proj.targetRelease}</strong></span>
                    <span>🔀 {proj.openPRs} Active PRs</span>
                  </div>
                </div>

                <div className="lg:w-48 text-right flex flex-col justify-between">
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase">Sprint Progress</span>
                    <div className="flex items-baseline gap-1 justify-end">
                      <span className="text-3xl font-extrabold text-slate-900">{proj.progress}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full mt-2 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        proj.health === 'Ahead of Schedule' ? 'bg-purple-600' :
                        proj.health === 'On Track' ? 'bg-blue-600' : 'bg-amber-500'
                      }`}
                      style={{ width: `${proj.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Milestones Stepper */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">Milestone Burndown</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {proj.milestones.map((ms, idx) => (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-xl border ${
                        ms.status === 'completed' ? 'bg-emerald-50/40 border-emerald-200' :
                        ms.status === 'in_progress' ? 'bg-blue-50/50 border-blue-200' :
                        'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase">Step {idx + 1}</span>
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          ms.status === 'completed' ? 'bg-emerald-100 text-emerald-800' :
                          ms.status === 'in_progress' ? 'bg-blue-100 text-blue-800' :
                          'bg-slate-200 text-slate-600'
                        }`}>
                          {ms.status === 'completed' ? 'Completed' : ms.status === 'in_progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <p className="text-xs font-bold text-slate-800 truncate">{ms.name}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">Target: {ms.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
