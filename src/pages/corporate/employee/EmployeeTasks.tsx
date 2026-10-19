import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CheckSquare, Plus, Search, Filter, Download, 
  GitPullRequest, Clock, AlertTriangle, CheckCircle2, ChevronRight, Layers
} from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  project: string;
  storyPoints: number;
  priority: 'P0 - High' | 'P1 - Medium' | 'P2 - Low';
  status: 'In Progress' | 'To Do' | 'In Code Review' | 'Done';
  prUrl?: string;
  dueDate: string;
}

export function EmployeeTasks() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [activeTab, setActiveTab] = useState<'All' | 'In Progress' | 'In Review' | 'Done'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const tasks: TaskItem[] = [
    {
      id: 'ENG-1082',
      title: 'Update Authentication Flow & Biometric WebAuthn support',
      project: 'Website Revamp v3',
      storyPoints: 5,
      priority: 'P0 - High',
      status: 'In Progress',
      prUrl: '#419',
      dueDate: 'Oct 21, 2026'
    },
    {
      id: 'ENG-1074',
      title: 'Fix Navigation Drawer Z-Index conflict on Mobile Safari',
      project: 'Internal Dashboard',
      storyPoints: 3,
      priority: 'P1 - Medium',
      status: 'In Code Review',
      prUrl: '#412',
      dueDate: 'Oct 22, 2026'
    },
    {
      id: 'ENG-1065',
      title: 'Code Review: Analytics PR & DataDog Telemetry integration',
      project: 'Website Revamp v3',
      storyPoints: 2,
      priority: 'P1 - Medium',
      status: 'To Do',
      dueDate: 'Oct 23, 2026'
    },
    {
      id: 'ENG-1049',
      title: 'Core Web Vitals Optimization on Checkout & Payment Flow',
      project: 'E-Commerce Gateway',
      storyPoints: 8,
      priority: 'P0 - High',
      status: 'Done',
      prUrl: '#398',
      dueDate: 'Oct 18, 2026'
    },
    {
      id: 'ENG-1033',
      title: 'Design System Token Synchronization with Figma Variables',
      project: 'Design System UI',
      storyPoints: 3,
      priority: 'P2 - Low',
      status: 'To Do',
      dueDate: 'Oct 25, 2026'
    },
    {
      id: 'ENG-1028',
      title: 'Virtual Table Performance Profiling for 10k rows datasets',
      project: 'Internal Dashboard',
      storyPoints: 5,
      priority: 'P1 - Medium',
      status: 'Done',
      prUrl: '#385',
      dueDate: 'Oct 15, 2026'
    }
  ];

  const filteredTasks = tasks.filter(t => {
    const matchesTab = activeTab === 'All' 
      ? true 
      : activeTab === 'In Progress' 
      ? t.status === 'In Progress'
      : activeTab === 'In Review'
      ? t.status === 'In Code Review'
      : t.status === 'Done';
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.project.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Tasks & Sprints"
      description="Manage your Jira/Linear engineering backlog, active sprint items, and PR reviews."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Workspace' },
        { label: 'Tasks & Sprints' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <CheckSquare size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Sprint 42 Engineering Board</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Oct 12 - Oct 26, 2026
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Assigned engineering deliverables for Rahul Sharma • Pod 4 Frontend Core.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Sprint Burndown PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Plus size={14} />
              Create Engineering Ticket
            </button>
          </div>
        </div>

        {/* Sprint Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Story Points</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Layers size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">28 / 36</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">78% Sprint Velocity on track</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">In Progress</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">1 Active</div>
            <div className="mt-1 text-xs text-slate-500">ENG-1082 (WebAuthn 2FA)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">In Code Review</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><GitPullRequest size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">1 PR Open</div>
            <div className="mt-1 text-xs text-slate-500">PR #412 awaiting QA lead</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sprint Deadline</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">7 Days Left</div>
            <div className="mt-1 text-xs text-slate-500">Sprint Demo on Oct 26</div>
          </div>
        </div>

        {/* Filter Bar & Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg w-full sm:w-auto">
            {(['All', 'In Progress', 'In Review', 'Done'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition ${
                  activeTab === tab
                    ? 'bg-white text-slate-800 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-80">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by ticket ID, title, project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
        </div>

        {/* Tasks Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Assigned Sprint Tickets</h2>
            <span className="text-xs text-slate-500">Showing {filteredTasks.length} tasks</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Ticket ID</th>
                  <th className="py-3 px-4">Task Description & Project</th>
                  <th className="py-3 px-4">Story Pts</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4">Pull Request</th>
                  <th className="py-3 px-4">Target Date</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredTasks.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                      {t.id}
                    </td>
                    <td className="py-3.5 px-4 max-w-md">
                      <div className="font-semibold text-slate-800">{t.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{t.project}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-700">
                      {t.storyPoints} pts
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.priority.includes('High')
                          ? 'bg-rose-50 text-rose-700 border border-rose-200'
                          : t.priority.includes('Medium')
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        t.status === 'Done'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : t.status === 'In Progress'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : t.status === 'In Code Review'
                          ? 'bg-purple-50 text-purple-700 border border-purple-200'
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      {t.prUrl ? (
                        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                          <GitPullRequest size={12} /> {t.prUrl}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-[11px]">—</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      {t.dueDate}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded-lg transition">
                        Edit
                      </button>
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
