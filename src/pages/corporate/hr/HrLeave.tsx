import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Calendar, CheckCircle2, Clock, AlertCircle, 
  Check, X, Users, Search, Filter, Download, 
  Sparkles, ChevronRight, ShieldCheck
} from 'lucide-react';

interface LeaveEscalation {
  id: string;
  applicant: string;
  role: string;
  dept: string;
  manager: string;
  type: 'Maternity Leave' | 'Paternity Leave' | 'Extended Medical' | 'Sabbatical / Study';
  dates: string;
  days: number;
  reason: string;
  managerApproved: boolean;
  status: 'Awaiting HR Sanction' | 'Approved' | 'Rejected';
  avatar: string;
}

export function HrLeave() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [escalations, setEscalations] = useState<LeaveEscalation[]>([
    {
      id: 'LEV-ESC-01',
      applicant: 'Kavita Menon',
      role: 'Senior Product Manager',
      dept: 'Product & Design',
      manager: 'Aruna Roy',
      type: 'Maternity Leave',
      dates: 'Nov 01, 2026 - Apr 30, 2027',
      days: 180,
      reason: 'Statutory 26-week paid maternity benefit under Maternity Benefit Act 2017.',
      managerApproved: true,
      status: 'Awaiting HR Sanction',
      avatar: 'KM'
    },
    {
      id: 'LEV-ESC-02',
      applicant: 'Rahul Sharma',
      role: 'Senior Frontend Developer',
      dept: 'Engineering (Pod 4)',
      manager: 'Priya Mehta',
      type: 'Extended Medical',
      dates: 'Oct 20, 2026 - Oct 22, 2026',
      days: 3,
      reason: 'Family festival break & ancestral home travel in Rajasthan.',
      managerApproved: true,
      status: 'Awaiting HR Sanction',
      avatar: 'RS'
    },
    {
      id: 'LEV-ESC-03',
      applicant: 'Rajesh K',
      role: 'Lead Cloud Infrastructure Architect',
      dept: 'Engineering & Cloud',
      manager: 'Siddharth Mehta',
      type: 'Paternity Leave',
      dates: 'Nov 10, 2026 - Nov 24, 2026',
      days: 14,
      reason: '14-day paid paternity benefit for newborn baby care.',
      managerApproved: true,
      status: 'Awaiting HR Sanction',
      avatar: 'RK'
    }
  ]);

  const holidays = [
    { name: 'Diwali (Deepavali)', date: 'Nov 01, 2026', day: 'Sunday', type: 'Mandatory Gazetted' },
    { name: 'Guru Nanak Jayanti', date: 'Nov 15, 2026', day: 'Sunday', type: 'Mandatory Gazetted' },
    { name: 'Christmas Day', date: 'Dec 25, 2026', day: 'Friday', type: 'Mandatory Gazetted' },
    { name: 'Republic Day', date: 'Jan 26, 2027', day: 'Tuesday', type: 'National Holiday' }
  ];

  const handleApprove = (id: string) => {
    setEscalations(prev => prev.map(e => e.id === id ? { ...e, status: 'Approved' } : e));
  };

  const handleReject = (id: string) => {
    setEscalations(prev => prev.map(e => e.id === id ? { ...e, status: 'Rejected' } : e));
  };

  const pendingCount = escalations.filter(e => e.status === 'Awaiting HR Sanction').length;

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Leave Management & Statutory Time-Off"
      description="Authorize long leaves, maternity/paternity claims, monitor company holiday calendars, and maintain leave accrual balances."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time, Attendance & Leaves' },
        { label: 'Leave & Absences' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Awaiting HR Sanction</p>
              <h3 className="text-2xl font-bold text-slate-900">{pendingCount} Requests</h3>
              <p className="text-xs text-amber-600 font-medium">Statutory & Long Leave</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved This Month</p>
              <h3 className="text-2xl font-bold text-slate-900">42 Leaves</h3>
              <p className="text-xs text-emerald-600 font-medium">Across all departments</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Team Coverage Limit</p>
              <h3 className="text-2xl font-bold text-slate-900">95.3%</h3>
              <p className="text-xs text-blue-600 font-medium">Safe operational buffer (&gt;80%)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Gazetted Holiday</p>
              <h3 className="text-2xl font-bold text-slate-900">Nov 01</h3>
              <p className="text-xs text-purple-600 font-medium">Diwali (Deepavali)</p>
            </div>
          </div>
        </div>

        {/* Pending HR Sanctions List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Statutory & Manager-Endorsed Leave Applications</h3>
              <p className="text-xs text-slate-500">Requires formal Human Resources compliance signoff and payroll documentation.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              {pendingCount} Pending Sanctions
            </span>
          </div>

          <div className="space-y-4">
            {escalations.map(esc => (
              <div key={esc.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {esc.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{esc.applicant}</h4>
                        <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">{esc.id}</span>
                        <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                          {esc.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{esc.role} • {esc.dept}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                          📅 {esc.dates} ({esc.days} Days)
                        </span>
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          ✓ Endorsed by Manager ({esc.manager})
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 bg-white p-2.5 rounded-xl border border-slate-100">
                        <span className="font-semibold text-slate-700">Reason: </span> {esc.reason}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:self-center">
                    {esc.status === 'Awaiting HR Sanction' ? (
                      <>
                        <button 
                          onClick={() => handleReject(esc.id)}
                          className="px-3.5 py-2 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition"
                        >
                          Reject
                        </button>
                        <button 
                          onClick={() => handleApprove(esc.id)}
                          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                        >
                          <Check size={14} /> Sanction Leave
                        </button>
                      </>
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        esc.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {esc.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate Holiday Calendar FY26 */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Corporate Gazetted Holiday Calendar FY26-27</h3>
              <p className="text-xs text-slate-500">Applicable for Pan-India offices (Bengaluru, Delhi NCR, Mumbai, Pune).</p>
            </div>
            <button 
              onClick={() => alert('Official FY26-27 holiday calendar PDF downloaded.')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Download size={14} /> Download PDF
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {holidays.map((h, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase">{h.type}</span>
                  <h4 className="text-xs font-bold text-slate-900 mt-2">{h.name}</h4>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200/70 text-xs text-slate-500 flex justify-between">
                  <span className="font-semibold text-slate-800">{h.date}</span>
                  <span>{h.day}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
