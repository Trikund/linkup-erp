import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Laptop, Calendar, CheckCircle2, Clock, Plus, 
  MapPin, ShieldCheck, Download, Home, AlertCircle
} from 'lucide-react';

interface WfhRecord {
  id: string;
  date: string;
  day: string;
  reason: string;
  approver: string;
  vpnIp: string;
  status: 'Approved' | 'Pending';
}

export function EmployeeWfh() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const records: WfhRecord[] = [
    { id: 'WFH-2026-19', date: 'Oct 23, 2026', day: 'Friday', reason: 'Focused code profiling on Core Web Vitals optimization', approver: 'Siddharth Mehta', vpnIp: 'Bengaluru Fiber (Static IP)', status: 'Approved' },
    { id: 'WFH-2026-18', date: 'Oct 15, 2026', day: 'Thursday', reason: 'Home utility maintenance & deliveries', approver: 'Siddharth Mehta', vpnIp: 'Bengaluru Fiber (Static IP)', status: 'Approved' },
    { id: 'WFH-2026-17', date: 'Oct 12, 2026', day: 'Monday', reason: 'Sprint 42 sprint planning focused deep work', approver: 'Siddharth Mehta', vpnIp: 'Bengaluru Fiber (Static IP)', status: 'Approved' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Remote Work & WFH"
      description="Manage your hybrid work schedule, flexible work-from-home quota, and VPN logs."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time & Attendance' },
        { label: 'Remote Work & WFH' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Laptop size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Hybrid Work & Remote Requests</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                Policy: 3 Days Office / 2 Days Remote
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Eligible for up to 6 flexible WFH days per month under Engineering Pod 4 guidelines.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Plus size={14} />
            Request Remote Shift
          </button>
        </div>

        {/* WFH Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Monthly WFH Quota</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Home size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">6 Days / mo</div>
            <div className="mt-1 text-xs text-slate-500">October 2026 allowance</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Used This Month</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Calendar size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">3 Days Used</div>
            <div className="mt-1 text-xs text-slate-500">Oct 12, Oct 15, Oct 23</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Remaining Balance</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">3 Days Left</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Valid till Oct 31, 2026</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Corporate VPN Status</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><ShieldCheck size={16} /></span>
            </div>
            <div className="mt-2 text-base font-bold text-slate-900">Connected & Safe</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">WireGuard IP: 10.140.2.88</div>
          </div>
        </div>

        {/* Home Office Allowance Banner */}
        <div className="bg-gradient-to-r from-blue-50 via-white to-slate-50 border border-blue-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-blue-600 text-white rounded-xl shadow-sm">
              <Laptop size={22} />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-900">Home Office Ergonomics Setup Allowance</h3>
              <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                Eligible employees can claim up to ₹15,000 for ergonomic office chair, standing desk converters, or high-speed Wi-Fi 6 router. Your allowance status: <strong>₹15,000 Claimed & Fully Reimbursed</strong> on Aug 2024.
              </p>
            </div>
            <button className="px-3 py-1.5 text-xs font-semibold text-blue-600 bg-blue-100/60 hover:bg-blue-100 rounded-lg transition whitespace-nowrap">
              Policy Guide PDF
            </button>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Remote Work Request History</h2>
            <span className="text-xs text-slate-500">October 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Request Ref</th>
                  <th className="py-3 px-4">Requested Date</th>
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Reason / Project Focus</th>
                  <th className="py-3 px-4">Verified Network</th>
                  <th className="py-3 px-4">Approver</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {records.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                      {r.id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      {r.date}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {r.day}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 max-w-sm">
                      {r.reason}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500">
                      {r.vpnIp}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700">
                      {r.approver}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {r.status}
                      </span>
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
