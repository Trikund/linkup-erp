import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CheckSquare, Plus, Filter, Search, Clock, 
  AlertCircle, CheckCircle2, MoreVertical, 
  User, ArrowRight, Zap, Flame, ShieldAlert
} from 'lucide-react';

interface SprintTask {
  id: string;
  title: string;
  assignee: string;
  assigneeAvatar: string;
  points: number;
  priority: 'P0 - Blocker' | 'P1 - High' | 'P2 - Medium';
  status: 'todo' | 'in_progress' | 'review' | 'done';
  repo: string;
}

export function ManagerTasks() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  const [filterAssignee, setFilterAssignee] = useState('all');

  const [tasks, setTasks] = useState<SprintTask[]>([
    {
      id: 'TASK-4201',
      title: 'WebAuthn 2FA Biometric Passkey support for Employee Portal',
      assignee: 'Rahul Sharma',
      assigneeAvatar: 'RS',
      points: 8,
      priority: 'P1 - High',
      status: 'in_progress',
      repo: 'web-platform-core'
    },
    {
      id: 'TASK-4202',
      title: 'High-throughput gRPC Gateway service for attendance streams',
      assignee: 'Vikram Malhotra',
      assigneeAvatar: 'VM',
      points: 13,
      priority: 'P0 - Blocker',
      status: 'in_progress',
      repo: 'microservices-gateway'
    },
    {
      id: 'TASK-4203',
      title: 'Design System Figma-to-Tailwind tokens sync pipeline',
      assignee: 'Sneha Roy',
      assigneeAvatar: 'SR',
      points: 5,
      priority: 'P2 - Medium',
      status: 'review',
      repo: 'design-tokens-v2'
    },
    {
      id: 'TASK-4204',
      title: 'Playwright E2E browser automation regression suite on CI',
      assignee: 'Amit Kumar',
      assigneeAvatar: 'AK',
      points: 8,
      priority: 'P1 - High',
      status: 'done',
      repo: 'qa-automation-hub'
    },
    {
      id: 'TASK-4205',
      title: 'Optimistic UI caching for leave balance counters',
      assignee: 'Rohan Das',
      assigneeAvatar: 'RD',
      points: 5,
      priority: 'P2 - Medium',
      status: 'review',
      repo: 'web-platform-core'
    },
    {
      id: 'TASK-4206',
      title: 'AES-256 GCM salary slip encryption key rotation mechanism',
      assignee: 'Ananya Sen',
      assigneeAvatar: 'AS',
      points: 8,
      priority: 'P1 - High',
      status: 'todo',
      repo: 'payroll-engine'
    },
    {
      id: 'TASK-4207',
      title: 'Kubernetes horizontal pod autoscaler memory threshold tuning',
      assignee: 'Siddharth Rao',
      assigneeAvatar: 'SR',
      points: 5,
      priority: 'P1 - High',
      status: 'done',
      repo: 'infra-terraform'
    },
    {
      id: 'TASK-4208',
      title: 'Mobile touch gesture support for timesheet calendar grid',
      assignee: 'Neha Verma',
      assigneeAvatar: 'NV',
      points: 3,
      priority: 'P2 - Medium',
      status: 'in_progress',
      repo: 'web-platform-core'
    }
  ]);

  const moveTask = (id: string, newStatus: SprintTask['status']) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
  };

  const filteredTasks = tasks.filter(t => 
    filterAssignee === 'all' || t.assignee === filterAssignee
  );

  const columns: { key: SprintTask['status']; title: string; color: string }[] = [
    { key: 'todo', title: 'Sprint Backlog / Ready', color: 'border-slate-300' },
    { key: 'in_progress', title: 'In Active Development', color: 'border-blue-500' },
    { key: 'review', title: 'PR / Code Review & QA', color: 'border-purple-500' },
    { key: 'done', title: 'Merged & Verified (Prod)', color: 'border-emerald-500' }
  ];

  const totalPoints = tasks.reduce((sum, t) => sum + t.points, 0);
  const donePoints = tasks.filter(t => t.status === 'done').reduce((sum, t) => sum + t.points, 0);
  const progressPercent = Math.round((donePoints / totalPoints) * 100);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Sprint Planning & Tasks"
      description="Manage Sprint 42 capacity, track story points burndown, and eliminate engineering delivery bottlenecks."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Projects & Delivery' },
        { label: 'Sprint Planning & Tasks' }
      ]}
    >
      <div className="space-y-6">
        {/* Sprint 42 Header Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                  <Flame size={20} />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-slate-900">Sprint 42 • Enterprise Platform Core</h2>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      Day 8 of 14
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Oct 12 - Oct 26, 2026 • Sprint Goal: 2FA Rollout & High-speed gRPC Gateway</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-xs text-slate-500 font-medium">Sprint Delivery Rate</p>
                <div className="flex items-baseline gap-1.5 justify-end">
                  <span className="text-2xl font-bold text-slate-900">{donePoints}</span>
                  <span className="text-xs text-slate-400 font-semibold">/ {totalPoints} Story Pts</span>
                </div>
              </div>
              <div className="w-32 bg-slate-100 h-3 rounded-full overflow-hidden">
                <div 
                  className="bg-blue-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
                <Plus size={15} /> Create Jira Ticket
              </button>
            </div>
          </div>

          {/* Engineer Filter Bar */}
          <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2">Filter by Engineer:</span>
            {['all', 'Rahul Sharma', 'Vikram Malhotra', 'Sneha Roy', 'Amit Kumar', 'Rohan Das', 'Neha Verma', 'Siddharth Rao', 'Ananya Sen'].map(eng => (
              <button
                key={eng}
                onClick={() => setFilterAssignee(eng)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition ${
                  filterAssignee === eng 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {eng === 'all' ? 'Entire Pod 4' : eng}
              </button>
            ))}
          </div>
        </div>

        {/* Kanban Board Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {columns.map(col => {
            const colTasks = filteredTasks.filter(t => t.status === col.key);
            const colPoints = colTasks.reduce((sum, t) => sum + t.points, 0);

            return (
              <div key={col.key} className="bg-slate-100/70 rounded-2xl p-4 border border-slate-200/80 flex flex-col min-h-[500px]">
                {/* Column Header */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{col.title}</h3>
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center">
                      {colTasks.length}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-500">{colPoints} pts</span>
                </div>

                {/* Column Cards */}
                <div className="space-y-3 flex-1 overflow-y-auto">
                  {colTasks.map(task => (
                    <div key={task.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow transition">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <span className="text-[10px] font-bold text-slate-500 font-mono">{task.id}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          task.priority.includes('P0') ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                          task.priority.includes('P1') ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {task.priority}
                        </span>
                      </div>

                      <h4 className="text-xs font-bold text-slate-800 leading-snug mb-3">
                        {task.title}
                      </h4>

                      <div className="text-[11px] font-mono text-slate-400 mb-3 bg-slate-50 px-2 py-0.5 rounded">
                        📦 {task.repo}
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <div className="w-6 h-6 rounded-full bg-slate-900 text-white text-[10px] font-bold flex items-center justify-center">
                            {task.assigneeAvatar}
                          </div>
                          <span className="text-[11px] font-semibold text-slate-700">{task.assignee.split(' ')[0]}</span>
                        </div>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-700">
                          {task.points} pts
                        </span>
                      </div>

                      {/* Quick Move Dropdown */}
                      <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Move:</span>
                        <select 
                          value={task.status}
                          onChange={(e) => moveTask(task.id, e.target.value as SprintTask['status'])}
                          className="text-[11px] font-semibold text-blue-600 bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5"
                        >
                          <option value="todo">Backlog</option>
                          <option value="in_progress">In Dev</option>
                          <option value="review">Review</option>
                          <option value="done">Done</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CorporateLayout>
  );
}
