import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Clock, Calendar, UserCheck, CheckCircle2, AlertCircle, 
  Plus, Check, X, ArrowRight, ShieldCheck, FileText
} from 'lucide-react';

interface LeaveRequest {
  id: string;
  type: string;
  from: string;
  to: string;
  days: number;
  reason: string;
  substitute: string;
  substituteStatus: 'Accepted' | 'Pending';
  status: 'Approved' | 'Pending' | 'Rejected';
  approvedBy: string;
}

export function FacultyLeaves() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [activeTab, setActiveTab] = useState<'balance' | 'apply'>('balance');
  const [isSuccess, setIsSuccess] = useState(false);

  const [leaveType, setLeaveType] = useState('Casual Leave (CL)');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [substituteFaculty, setSubstituteFaculty] = useState('Dr. Meenakshi Sundaram (Tech Block 3 Room 303)');
  const [reason, setReason] = useState('');

  const pastLeaves: LeaveRequest[] = [
    {
      id: 'LV-2026-042',
      type: 'On-Duty (OD)',
      from: '12 Sep 2026',
      to: '14 Sep 2026',
      days: 3,
      reason: 'Keynote Speaker at IEEE International Conference on Cloud Computing (IIT Madras)',
      substitute: 'Prof. Sneha Kulkarni',
      substituteStatus: 'Accepted',
      status: 'Approved',
      approvedBy: 'Dean of Faculty Affairs'
    },
    {
      id: 'LV-2026-031',
      type: 'Casual Leave (CL)',
      from: '24 Aug 2026',
      to: '24 Aug 2026',
      days: 1,
      reason: 'Personal family engagement',
      substitute: 'Dr. Rajeshwar Iyer',
      substituteStatus: 'Accepted',
      status: 'Approved',
      approvedBy: 'Director, Apex Institute'
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setActiveTab('balance');
      setReason('');
    }, 2000);
  };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Leave & Substitution" 
      description="Faculty leave balances, mandatory lecture substitution arrangement, and Dean approval workflow."
    >
      {/* Leave Balances Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Casual Leave (CL)</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">8 Days Left</p>
          <p className="text-[10px] text-slate-500">4 utilized of 12</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Earned Leave (EL)</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">22 Days Left</p>
          <p className="text-[10px] text-purple-600 font-semibold">Accumulated from 2025</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">On-Duty (OD)</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">6 Days Left</p>
          <p className="text-[10px] text-emerald-700 font-semibold">For Conference / Viva</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Medical Leave (ML)</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">10 Days Left</p>
          <p className="text-[10px] text-slate-500">Full salary entitlement</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'balance', label: 'Leave History & Approvals' },
          { key: 'apply', label: '+ Apply for Leave' }
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === t.key
                ? 'bg-[#7c3aed] text-white shadow-md'
                : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab: Apply Leave */}
      {activeTab === 'apply' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm max-w-2xl">
          <h3 className="text-base font-bold text-slate-800 mb-1">Apply Academic Leave</h3>
          <p className="text-xs text-slate-500 mb-5">UGC compliance requires lecture substitution endorsement for every scheduled lecture day.</p>

          {isSuccess && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Leave requisition dispatched to substitute faculty and Dean of Faculty Affairs!</span>
            </div>
          )}

          <form onSubmit={handleApply} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Leave Category</label>
                <select 
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                >
                  <option>Casual Leave (CL)</option>
                  <option>Earned Leave (EL)</option>
                  <option>On-Duty (OD)</option>
                  <option>Medical Leave (ML)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">From Date</label>
                <input
                  type="date"
                  required
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">To Date</label>
                <input
                  type="date"
                  required
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>
            </div>

            <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-100">
              <label className="block text-xs font-bold text-[#7c3aed] mb-1">Mandatory Class Substitution Faculty</label>
              <select
                value={substituteFaculty}
                onChange={(e) => setSubstituteFaculty(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-purple-200 bg-white focus:outline-none focus:border-[#7c3aed]"
              >
                <option>Dr. Meenakshi Sundaram (Tech Block 3 Room 303)</option>
                <option>Dr. Rajeshwar Iyer (Tech Block 3 Room 305)</option>
                <option>Prof. Sneha Kulkarni (Tech Block 3 Room 307)</option>
                <option>Prof. Harsh Vardhan (Tech Block 3 Room 309)</option>
              </select>
              <p className="text-[11px] text-slate-500 mt-1">An approval notification will be sent to the substitute faculty to confirm period coverage.</p>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Reason for Leave</label>
              <textarea
                required
                rows={3}
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="State official reason for leave..."
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
              >
                <Calendar size={14} />
                <span>Submit Leave Application</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab: History */}
      {activeTab === 'balance' && (
        <div className="space-y-4">
          {pastLeaves.map((l) => (
            <div key={l.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {l.id}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-800">{l.type} ({l.days} {l.days === 1 ? 'Day' : 'Days'})</h4>
                    <p className="text-xs text-slate-400">{l.from} to {l.to}</p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100 flex items-center gap-1">
                  <CheckCircle2 size={13} /> {l.status}
                </span>
              </div>

              <div className="py-3 text-xs text-slate-600">
                <p className="font-medium text-slate-700 mb-2">Purpose: {l.reason}</p>
                <div className="flex flex-wrap items-center gap-4 text-slate-500">
                  <span>Substitute Faculty: <strong className="text-slate-800">{l.substitute}</strong> (Endorsed)</span>
                  <span>Approved By: <strong className="text-slate-800">{l.approvedBy}</strong></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </CollegeLayout>
  );
}
