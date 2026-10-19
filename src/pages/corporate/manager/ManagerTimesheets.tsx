import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FileSpreadsheet, CheckCircle2, Clock, Check, X, 
  AlertCircle, Download, Search, Filter, Calendar, 
  ChevronRight, ArrowRight, UserCheck
} from 'lucide-react';

interface TimesheetSubmission {
  id: string;
  name: string;
  role: string;
  period: string;
  billableHours: number;
  nonBillableHours: number;
  totalHours: number;
  allocation: { project: string; hours: number }[];
  status: 'Pending Approval' | 'Approved' | 'Revision Requested';
  submittedOn: string;
  avatar: string;
}

export function ManagerTimesheets() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [timesheets, setTimesheets] = useState<TimesheetSubmission[]>([
    {
      id: 'TS-W41-01',
      name: 'Rahul Sharma',
      role: 'Senior Frontend Developer',
      period: 'Week 41 (Oct 06 - Oct 12, 2026)',
      billableHours: 36.5,
      nonBillableHours: 3.5,
      totalHours: 40.0,
      allocation: [
        { project: 'Web Platform Revamp v3', hours: 32.0 },
        { project: 'Sprint Retro & Architecture Sync', hours: 4.5 },
        { project: 'Mentoring Junior Dev', hours: 3.5 }
      ],
      status: 'Pending Approval',
      submittedOn: 'Oct 13, 2026',
      avatar: 'RS'
    },
    {
      id: 'TS-W41-02',
      name: 'Vikram Malhotra',
      role: 'Senior Backend Engineer',
      period: 'Week 41 (Oct 06 - Oct 12, 2026)',
      billableHours: 38.0,
      nonBillableHours: 2.0,
      totalHours: 40.0,
      allocation: [
        { project: 'gRPC Microservices Gateway', hours: 30.0 },
        { project: 'Corporate Admin Suite', hours: 8.0 },
        { project: 'Security Patching', hours: 2.0 }
      ],
      status: 'Pending Approval',
      submittedOn: 'Oct 13, 2026',
      avatar: 'VM'
    },
    {
      id: 'TS-W41-03',
      name: 'Sneha Roy',
      role: 'Senior Product Designer',
      period: 'Week 41 (Oct 06 - Oct 12, 2026)',
      billableHours: 35.0,
      nonBillableHours: 4.0,
      totalHours: 39.0,
      allocation: [
        { project: 'Design Tokens v2', hours: 25.0 },
        { project: 'Accessibility Audit', hours: 10.0 },
        { project: 'Design All-Hands', hours: 4.0 }
      ],
      status: 'Pending Approval',
      submittedOn: 'Oct 14, 2026',
      avatar: 'SR'
    },
    {
      id: 'TS-W41-04',
      name: 'Amit Kumar',
      role: 'Lead QA Automation',
      period: 'Week 41 (Oct 06 - Oct 12, 2026)',
      billableHours: 38.5,
      nonBillableHours: 1.5,
      totalHours: 40.0,
      allocation: [
        { project: 'Playwright E2E Suite', hours: 32.5 },
        { project: 'Release Signoff Testing', hours: 6.0 },
        { project: 'QA Documentation', hours: 1.5 }
      ],
      status: 'Pending Approval',
      submittedOn: 'Oct 13, 2026',
      avatar: 'AK'
    },
    {
      id: 'TS-W41-05',
      name: 'Rohan Das',
      role: 'Frontend Engineer II',
      period: 'Week 41 (Oct 06 - Oct 12, 2026)',
      billableHours: 34.0,
      nonBillableHours: 5.0,
      totalHours: 39.0,
      allocation: [
        { project: 'Web Platform Revamp v3', hours: 30.0 },
        { project: 'Bug Triage', hours: 4.0 },
        { project: 'Internal Training', hours: 5.0 }
      ],
      status: 'Pending Approval',
      submittedOn: 'Oct 14, 2026',
      avatar: 'RD'
    }
  ]);

  const handleApprove = (id: string) => {
    setTimesheets(prev => prev.map(ts => ts.id === id ? { ...ts, status: 'Approved' } : ts));
  };

  const handleReject = (id: string) => {
    setTimesheets(prev => prev.map(ts => ts.id === id ? { ...ts, status: 'Revision Requested' } : ts));
  };

  const handleBulkApprove = () => {
    setTimesheets(prev => prev.map(ts => ({ ...ts, status: 'Approved' })));
  };

  const pendingCount = timesheets.filter(t => t.status === 'Pending Approval').length;
  const totalTrackedHours = timesheets.reduce((sum, t) => sum + t.totalHours, 0);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Timesheet Signoffs & Billability"
      description="Review and authorize weekly billable engineering hours, project client codes, and timesheet allocations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Projects & Delivery' },
        { label: 'Timesheet Signoffs' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Overview Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pending Signoffs</p>
              <h3 className="text-2xl font-bold text-slate-900">{pendingCount} Sheets</h3>
              <p className="text-xs text-amber-600 font-medium">Week 41 submissions</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileSpreadsheet size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Hours Tracked</p>
              <h3 className="text-2xl font-bold text-slate-900">{totalTrackedHours}h</h3>
              <p className="text-xs text-blue-600 font-medium">Avg 39.6h / engineer</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Billability Ratio</p>
              <h3 className="text-2xl font-bold text-slate-900">91.2%</h3>
              <p className="text-xs text-emerald-600 font-medium">Exceeds 85% target</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <UserCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">On-Time Submissions</p>
              <h3 className="text-2xl font-bold text-slate-900">100%</h3>
              <p className="text-xs text-purple-600 font-medium">Zero compliance breaches</p>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h3 className="text-base font-bold text-slate-900">Week 41 Timesheet Submissions (Oct 06 - Oct 12, 2026)</h3>
            <p className="text-xs text-slate-500">Finance cutoff date is Wednesday, 11:59 PM IST.</p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleBulkApprove}
              disabled={pendingCount === 0}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm transition"
            >
              <Check size={15} /> Authorize All ({pendingCount})
            </button>
          </div>
        </div>

        {/* Timesheet List Cards */}
        <div className="space-y-4">
          {timesheets.map(ts => (
            <div key={ts.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {ts.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{ts.name}</h4>
                      <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {ts.id}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500">{ts.role}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Submitted on {ts.submittedOn}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-6">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Billable Hours</span>
                    <span className="text-base font-bold text-blue-600">{ts.billableHours}h</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Internal / R&D</span>
                    <span className="text-base font-bold text-slate-600">{ts.nonBillableHours}h</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Total</span>
                    <span className="text-lg font-extrabold text-slate-900">{ts.totalHours}h</span>
                  </div>

                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    ts.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                    ts.status === 'Revision Requested' ? 'bg-rose-50 text-rose-700 border-rose-200' :
                    'bg-amber-50 text-amber-700 border-amber-200'
                  }`}>
                    {ts.status}
                  </span>

                  {ts.status === 'Pending Approval' && (
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleReject(ts.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition"
                      >
                        Request Changes
                      </button>
                      <button 
                        onClick={() => handleApprove(ts.id)}
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                      >
                        <Check size={14} /> Sign Off
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Task / Project Breakdown Sub-card */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Project Allocations</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {ts.allocation.map((alloc, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-700 font-medium truncate">{alloc.project}</span>
                      <span className="text-xs font-bold text-slate-900 ml-2">{alloc.hours}h</span>
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
