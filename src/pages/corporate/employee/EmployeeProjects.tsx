import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FolderKanban, GitBranch, ExternalLink, Users, Clock, 
  CheckCircle2, AlertCircle, Code, Layers, Sparkles, Plus, Search
} from 'lucide-react';

interface Project {
  id: string;
  name: string;
  roleInProject: string;
  description: string;
  techStack: string[];
  progressPct: number;
  openPrs: number;
  totalCommits: number;
  teamSize: number;
  targetRelease: string;
  status: 'In Progress' | 'Beta Testing' | 'Maintenance';
}

export function EmployeeProjects() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [searchQuery, setSearchQuery] = useState('');

  const projects: Project[] = [
    {
      id: 'PRJ-REVAMP-V3',
      name: 'LinkUp Web Platform Revamp v3.0',
      roleInProject: 'Lead Frontend Engineer',
      description: 'Next-generation responsive ERP portal architecture utilizing React 19, Tailwind CSS v4, and high-performance virtualized grids.',
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Vite', 'Framer Motion'],
      progressPct: 84,
      openPrs: 4,
      totalCommits: 312,
      teamSize: 6,
      targetRelease: 'Nov 15, 2026',
      status: 'In Progress'
    },
    {
      id: 'PRJ-ADMIN-CONSOLE',
      name: 'Internal Corporate Admin Suite',
      roleInProject: 'Core UI Contributor',
      description: 'Enterprise administration cockpit for multi-tenant organizations, biometric access control, and financial ledger reconciliations.',
      techStack: ['React', 'TypeScript', 'TanStack Query', 'Chart.js', 'PostgreSQL'],
      progressPct: 65,
      openPrs: 2,
      totalCommits: 148,
      teamSize: 5,
      targetRelease: 'Dec 05, 2026',
      status: 'In Progress'
    },
    {
      id: 'PRJ-MOBILE-GATEWAY',
      name: 'Mobile Gateway API & WebAuthn Integration',
      roleInProject: 'Frontend Security Contributor',
      description: 'Zero-trust biometric WebAuthn FIDO2 authentication flow for enterprise mobile and desktop employees.',
      techStack: ['TypeScript', 'Node.js', 'WebAuthn API', 'Docker'],
      progressPct: 92,
      openPrs: 1,
      totalCommits: 84,
      teamSize: 4,
      targetRelease: 'Oct 30, 2026',
      status: 'Beta Testing'
    }
  ];

  const filteredProjects = projects.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Projects & Repositories"
      description="Overview of your active engineering projects, repositories, and delivery roadmaps."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Workspace' },
        { label: 'Projects & Repos' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <FolderKanban size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Assigned Engineering Repositories</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                3 Active Repositories
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Direct code ownership & frontend architecture oversight under Engineering Pod 4.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Plus size={14} />
            Link New Repository
          </button>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-400">{p.id}</span>
                    <h3 className="text-base font-bold text-slate-800 mt-0.5 leading-snug">{p.name}</h3>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    p.status === 'Beta Testing' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {p.status}
                  </span>
                </div>

                <div className="mt-2 text-xs font-semibold text-blue-600">
                  {p.roleInProject}
                </div>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {p.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-medium rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                {/* Progress bar */}
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500 font-medium">Milestone Delivery</span>
                    <span className="font-bold text-slate-800 font-mono">{p.progressPct}%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${p.progressPct > 90 ? 'bg-emerald-500' : 'bg-blue-600'}`}
                      style={{ width: `${p.progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Git stats */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 bg-slate-50 rounded-xl">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Commits</div>
                    <div className="font-bold text-slate-800 font-mono">{p.totalCommits}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Open PRs</div>
                    <div className="font-bold text-blue-600 font-mono">{p.openPrs}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Engineers</div>
                    <div className="font-bold text-slate-800 font-mono">{p.teamSize}</div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="text-slate-500 text-[11px]">Due: <strong className="text-slate-700">{p.targetRelease}</strong></span>
                  <button className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                    Open Repository <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
