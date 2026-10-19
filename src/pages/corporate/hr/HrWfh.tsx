import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Laptop, CheckCircle2, Clock, Calendar, 
  AlertTriangle, Users, MapPin, ShieldCheck, 
  Check, X, Building2, IndianRupee, ArrowUpRight
} from 'lucide-react';

interface RemoteException {
  id: string;
  applicant: string;
  role: string;
  dept: string;
  manager: string;
  duration: string;
  reason: string;
  managerEndorsed: boolean;
  status: 'Pending Review' | 'Approved' | 'Declined';
  avatar: string;
}

export function HrWfh() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [exceptions, setExceptions] = useState<RemoteException[]>([
    {
      id: 'WFH-REQ-401',
      applicant: 'Sneha Roy',
      role: 'Senior Product Designer',
      dept: 'Product & Design',
      manager: 'Priya Mehta',
      duration: 'Full-Remote (Q4 Oct - Dec 2026)',
      reason: 'Home ergonomic setup & temporary medical care for elderly parent in Kolkata.',
      managerEndorsed: true,
      status: 'Pending Review',
      avatar: 'SR'
    },
    {
      id: 'WFH-REQ-402',
      applicant: 'Siddharth Rao',
      role: 'DevOps & SRE Lead',
      dept: 'Engineering & Cloud',
      manager: 'Priya Mehta',
      duration: 'Hybrid 1-day office (Pune)',
      reason: 'US time-zone shift rotation for 24x7 cluster coverage.',
      managerEndorsed: true,
      status: 'Pending Review',
      avatar: 'SR'
    }
  ]);

  const handleApprove = (id: string) => {
    setExceptions(prev => prev.map(e => e.id === id ? { ...e, status: 'Approved' } : e));
  };

  const handleDecline = (id: string) => {
    setExceptions(prev => prev.map(e => e.id === id ? { ...e, status: 'Declined' } : e));
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="WFH & Hybrid Work Governance"
      description="Monitor 3-Days In-Office hybrid compliance, authorize long-term remote exceptions, and audit home office stipends."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time, Attendance & Leaves' },
        { label: 'WFH & Hybrid Work' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hybrid Policy Model</p>
              <h3 className="text-2xl font-bold text-slate-900">3 Days Office</h3>
              <p className="text-xs text-blue-600 font-medium">Tue, Wed, Thu core days</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Compliance</p>
              <h3 className="text-2xl font-bold text-slate-900">94.6%</h3>
              <p className="text-xs text-emerald-600 font-medium">Exceeds 90% company SLA</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved Remote Staff</p>
              <h3 className="text-2xl font-bold text-slate-900">9 Full-Remote</h3>
              <p className="text-xs text-purple-600 font-medium">Field sales & specialized SREs</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Ergonomic Stipend</p>
              <h3 className="text-2xl font-bold text-slate-900">₹25,000</h3>
              <p className="text-xs text-amber-600 font-medium">Per employee desk allowance</p>
            </div>
          </div>
        </div>

        {/* Remote Exceptions Desk */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Remote Work Exception Applications</h3>
              <p className="text-xs text-slate-500">Requires People Operations endorsement along with Department Head signoff.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              {exceptions.filter(e => e.status === 'Pending Review').length} Actions Required
            </span>
          </div>

          <div className="space-y-4">
            {exceptions.map(exc => (
              <div key={exc.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {exc.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{exc.applicant}</h4>
                        <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">{exc.id}</span>
                        <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">
                          {exc.dept}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{exc.role} • Manager: {exc.manager}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="font-semibold text-slate-800 bg-white px-2.5 py-1 rounded-lg border border-slate-200">
                          ⏱ {exc.duration}
                        </span>
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          ✓ Endorsed by {exc.manager}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mt-2 bg-white p-2.5 rounded-xl border border-slate-100">
                        <strong className="text-slate-700">Reason: </strong> {exc.reason}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:self-center">
                    {exc.status === 'Pending Review' ? (
                      <>
                        <button 
                          onClick={() => handleDecline(exc.id)}
                          className="px-3.5 py-2 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition"
                        >
                          Decline
                        </button>
                        <button 
                          onClick={() => handleApprove(exc.id)}
                          className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                        >
                          <Check size={14} /> Authorize Exception
                        </button>
                      </>
                    ) : (
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        exc.status === 'Approved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700'
                      }`}>
                        {exc.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
