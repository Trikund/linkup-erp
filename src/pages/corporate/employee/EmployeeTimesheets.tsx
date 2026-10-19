import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Clock, Calendar, CheckCircle2, AlertTriangle, 
  Download, Plus, Send, ChevronLeft, ChevronRight, FileSpreadsheet
} from 'lucide-react';

interface DayEntry {
  day: string;
  date: string;
  project: string;
  task: string;
  hours: number;
  type: 'Billable' | 'Internal';
}

export function EmployeeTimesheets() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [selectedWeek, setSelectedWeek] = useState('Week 42: Oct 12 - Oct 18, 2026');

  const entries: DayEntry[] = [
    { day: 'Mon', date: 'Oct 12', project: 'Website Revamp v3', task: 'Component virtualized table implementation', hours: 8.0, type: 'Billable' },
    { day: 'Tue', date: 'Oct 13', project: 'Website Revamp v3', task: 'WebAuthn 2FA modal & biometric API binding', hours: 7.5, type: 'Billable' },
    { day: 'Tue', date: 'Oct 13', project: 'Internal Engineering', task: 'Sprint 42 Architecture review & tech sync', hours: 1.0, type: 'Internal' },
    { day: 'Wed', date: 'Oct 14', project: 'Internal Admin Suite', task: 'Financial ledger reconciliation data grid', hours: 8.0, type: 'Billable' },
    { day: 'Thu', date: 'Oct 15', project: 'Website Revamp v3', task: 'Core Web Vitals profiling & asset minification', hours: 6.5, type: 'Billable' },
    { day: 'Thu', date: 'Oct 15', project: 'Internal Engineering', task: 'Code review PR #412 & PR #398', hours: 1.5, type: 'Internal' },
    { day: 'Fri', date: 'Oct 16', project: 'Website Revamp v3', task: 'Integration testing on Mobile Safari & Chrome', hours: 6.0, type: 'Billable' }
  ];

  const totalBillable = entries.filter(e => e.type === 'Billable').reduce((acc, curr) => acc + curr.hours, 0);
  const totalInternal = entries.filter(e => e.type === 'Internal').reduce((acc, curr) => acc + curr.hours, 0);
  const grandTotal = totalBillable + totalInternal;

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Timesheets & Work Logs"
      description="Record and submit your project hours, client allocations, and manager approvals."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Workspace' },
        { label: 'Timesheets' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Clock size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Weekly Project Timesheet</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Submitted • Awaiting Approval
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Timesheet for Siddharth Mehta (VP Engineering) • 40h standard work week.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Export Timesheet CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Plus size={14} />
              Add Time Entry
            </button>
          </div>
        </div>

        {/* Weekly Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Logged</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">{grandTotal} hrs</div>
            <div className="mt-1 text-xs text-slate-500">Target: 40.0 hrs (96.25% filled)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Client Billable</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">{totalBillable} hrs</div>
            <div className="mt-1 text-xs text-slate-500">89.6% billable utilization</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Internal / R&D</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><FileSpreadsheet size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">{totalInternal} hrs</div>
            <div className="mt-1 text-xs text-slate-500">Standups & code reviews</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Approver</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Send size={16} /></span>
            </div>
            <div className="mt-2 text-sm font-bold text-slate-900">Siddharth Mehta</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">SLA: Auto-signs in 24 hrs</div>
          </div>
        </div>

        {/* Timesheet Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-slate-100 rounded text-slate-500">
                <ChevronLeft size={16} />
              </button>
              <h2 className="text-sm font-bold text-slate-800">{selectedWeek}</h2>
              <button className="p-1 hover:bg-slate-100 rounded text-slate-500">
                <ChevronRight size={16} />
              </button>
            </div>
            <span className="text-xs font-semibold text-blue-600">Total: {grandTotal} Hours</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Day & Date</th>
                  <th className="py-3 px-4">Project Allocation</th>
                  <th className="py-3 px-4">Work / Task Description</th>
                  <th className="py-3 px-4">Classification</th>
                  <th className="py-3 px-4 text-right">Hours Logged</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {entries.map((e, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-mono mr-2">{e.day}</span>
                      {e.date}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-blue-600">
                      {e.project}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {e.task}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        e.type === 'Billable' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                          : 'bg-slate-100 text-slate-700'
                      }`}>
                        {e.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right font-mono font-bold text-slate-900">
                      {e.hours.toFixed(1)} hrs
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
