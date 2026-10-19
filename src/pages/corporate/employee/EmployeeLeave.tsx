import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Calendar, CheckCircle2, Clock, AlertCircle, Plus, 
  Download, Send, X, CalendarDays, ShieldCheck
} from 'lucide-react';

interface LeaveRecord {
  id: string;
  type: string;
  duration: string;
  dates: string;
  reason: string;
  approver: string;
  appliedOn: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

interface Holiday {
  date: string;
  day: string;
  name: string;
  type: 'Mandatory' | 'Optional';
}

export function EmployeeLeave() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [leaveSubmitted, setLeaveSubmitted] = useState(false);

  const leaveRecords: LeaveRecord[] = [
    {
      id: 'LEV-2026-081',
      type: 'Annual Leave (Privilege)',
      duration: '2 Days',
      dates: 'Nov 02 - Nov 03, 2026',
      reason: 'Post-Diwali family travel and festival break',
      approver: 'Siddharth Mehta (VP Engineering)',
      appliedOn: 'Oct 10, 2026',
      status: 'Approved'
    },
    {
      id: 'LEV-2026-074',
      type: 'Casual Leave (CL)',
      duration: '1 Day',
      dates: 'Sep 18, 2026',
      reason: 'Personal banking and government passport renewal appointment',
      approver: 'Siddharth Mehta (VP Engineering)',
      appliedOn: 'Sep 12, 2026',
      status: 'Approved'
    },
    {
      id: 'LEV-2026-052',
      type: 'Sick / Medical Leave (SL)',
      duration: '1 Day',
      dates: 'Aug 04, 2026',
      reason: 'Viral fever and doctor consultation',
      approver: 'Siddharth Mehta (VP Engineering)',
      appliedOn: 'Aug 04, 2026',
      status: 'Approved'
    }
  ];

  const upcomingHolidays: Holiday[] = [
    { date: 'Oct 31, 2026', day: 'Saturday', name: 'Diwali (Deepavali)', type: 'Mandatory' },
    { date: 'Nov 15, 2026', day: 'Sunday', name: 'Guru Nanak Jayanti', type: 'Mandatory' },
    { date: 'Dec 25, 2026', day: 'Friday', name: 'Christmas Day', type: 'Mandatory' },
    { date: 'Jan 01, 2027', day: 'Friday', name: 'New Year Day', type: 'Optional' },
    { date: 'Jan 26, 2027', day: 'Tuesday', name: 'Republic Day', type: 'Mandatory' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Leave & Holidays"
      description="View your accrued paid leave balances, apply for time off, and check company holidays."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time & Attendance' },
        { label: 'Leave & Holidays' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Calendar size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Leave Management & Balances</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                FY 2026-27 Active
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Total 24 Paid Time-Off days per annum accrued on a monthly pro-rata basis.
            </p>
          </div>
          <button 
            onClick={() => setShowApplyModal(true)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
          >
            <Plus size={14} />
            Apply For Leave
          </button>
        </div>

        {/* 4 Balance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Annual / Earned Leave</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Calendar size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">12.0 Days</div>
            <div className="mt-1 text-xs text-slate-500">Encashable up to 30 days</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Casual Leave (CL)</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">4.0 Days</div>
            <div className="mt-1 text-xs text-slate-500">Lapses on Dec 31, 2026</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Sick / Medical (SL)</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><ShieldCheck size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">6.0 Days</div>
            <div className="mt-1 text-xs text-slate-500">Requires medical certificate if &gt;2d</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Compensatory Off</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">2.0 Days</div>
            <div className="mt-1 text-xs text-slate-500">Earned for production release shift</div>
          </div>
        </div>

        {/* Leave History & Holiday Calendar Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Leave History */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-sm font-bold text-slate-800">Leave Applications & Approvals</h2>
              <span className="text-xs text-slate-500">Past 12 months</span>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {leaveRecords.map((rec) => (
                <div key={rec.id} className="p-5 hover:bg-slate-50/70 transition-colors">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-slate-400">{rec.id}</span>
                        <h4 className="font-bold text-slate-800">{rec.type}</h4>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 font-mono">
                          {rec.duration}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium mt-1">Period: {rec.dates}</p>
                      <p className="text-xs text-slate-500 mt-1">Reason: "{rec.reason}"</p>
                    </div>

                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {rec.status}
                    </span>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Approver: <strong className="text-slate-600">{rec.approver}</strong></span>
                    <span>Applied on: {rec.appliedOn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Holiday Calendar */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CalendarDays size={16} className="text-blue-600" /> 2026-27 Company Holidays
            </h3>

            <div className="space-y-3">
              {upcomingHolidays.map((h, i) => (
                <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-bold text-slate-800">{h.name}</h5>
                    <p className="text-[11px] text-slate-500 mt-0.5">{h.day} • {h.date}</p>
                  </div>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    h.type === 'Mandatory' 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-purple-50 text-purple-700 border border-purple-200'
                  }`}>
                    {h.type}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 text-xs font-bold text-blue-600 hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded-xl transition">
              Download Full 2027 Calendar PDF
            </button>
          </div>
        </div>
      </div>

      {/* Apply Leave Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="text-sm font-bold text-slate-800">Apply for Time Off</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-slate-400 hover:text-slate-600">
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 mt-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Leave Type</label>
                <select className="w-full p-2 border border-slate-200 rounded-lg text-slate-800 bg-white focus:outline-none focus:border-blue-500">
                  <option>Annual / Earned Leave (12.0 Available)</option>
                  <option>Casual Leave (4.0 Available)</option>
                  <option>Sick Leave (6.0 Available)</option>
                  <option>Compensatory Off (2.0 Available)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Start Date</label>
                  <input type="date" defaultValue="2026-11-02" className="w-full p-2 border border-slate-200 rounded-lg text-slate-800" />
                </div>
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">End Date</label>
                  <input type="date" defaultValue="2026-11-03" className="w-full p-2 border border-slate-200 rounded-lg text-slate-800" />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Reason for Leave</label>
                <textarea rows={3} placeholder="Please provide details for manager review..." className="w-full p-2 border border-slate-200 rounded-lg text-slate-800" defaultValue="Festival holidays and family travel." />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Handover Colleague</label>
                <input type="text" defaultValue="Priya Venkatesh (Tech Lead Frontend)" className="w-full p-2 border border-slate-200 rounded-lg text-slate-800" />
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg">
                Cancel
              </button>
              <button 
                onClick={() => {
                  setShowApplyModal(false);
                  alert('Leave request submitted to Siddharth Mehta successfully!');
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              >
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </CorporateLayout>
  );
}