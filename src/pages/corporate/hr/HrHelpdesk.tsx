import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  HelpCircle, MessageSquare, CheckCircle2, Clock, 
  AlertCircle, Send, Check, X, Filter, Search, 
  User, ShieldCheck, ChevronRight
} from 'lucide-react';

interface HrTicket {
  id: string;
  applicant: string;
  dept: string;
  category: 'Provident Fund (PF)' | 'Mediclaim & Insurance' | 'Payroll & Tax' | 'General HR';
  subject: string;
  priority: 'Urgent' | 'High' | 'Normal';
  status: 'In Progress' | 'Pending HR' | 'Resolved';
  submittedDate: string;
  avatar: string;
}

export function HrHelpdesk() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [tickets, setTickets] = useState<HrTicket[]>([
    {
      id: 'TICK-EMP-982',
      applicant: 'Rohan Das',
      dept: 'Engineering (Pod 4)',
      category: 'Provident Fund (PF)',
      subject: 'Assistance required in transferring EPF balance from previous employer (TCS) via EPFO portal.',
      priority: 'High',
      status: 'In Progress',
      submittedDate: 'Oct 17, 2026',
      avatar: 'RD'
    },
    {
      id: 'TICK-EMP-984',
      applicant: 'Neha Verma',
      dept: 'Engineering (Pod 4)',
      category: 'Mediclaim & Insurance',
      subject: 'Add newborn dependent details to HDFC ERGO Group Mediclaim cashless floater card.',
      priority: 'Normal',
      status: 'Pending HR',
      submittedDate: 'Oct 18, 2026',
      avatar: 'NV'
    },
    {
      id: 'TICK-EMP-979',
      applicant: 'Kunal Kapoor',
      dept: 'Sales & BD',
      category: 'Payroll & Tax',
      subject: 'Quarterly TDS reconciliation mismatch between Form 26AS and September salary slip.',
      priority: 'High',
      status: 'In Progress',
      submittedDate: 'Oct 15, 2026',
      avatar: 'KK'
    },
    {
      id: 'TICK-EMP-971',
      applicant: 'Vikram Malhotra',
      dept: 'Engineering',
      category: 'General HR',
      subject: 'Corporate permanent address update for Aadhaar re-verification and courier deliveries.',
      priority: 'Normal',
      status: 'Resolved',
      submittedDate: 'Oct 11, 2026',
      avatar: 'VM'
    }
  ]);

  const handleResolveTicket = (id: string) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: 'Resolved' } : t));
  };

  const pendingCount = tickets.filter(t => t.status !== 'Resolved').length;

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="HR Helpdesk & Employee Grievance Queue"
      description="Resolve employee inquiries regarding PF transfers, mediclaim dependent cards, and payroll reconciliations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compliance & Governance' },
        { label: 'HR Helpdesk & Grievance' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <HelpCircle size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Inquiries</p>
              <h3 className="text-2xl font-bold text-slate-900">{pendingCount} Tickets</h3>
              <p className="text-xs text-amber-600 font-medium">Active employee tickets</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Resolution SLA</p>
              <h3 className="text-2xl font-bold text-slate-900">98.4%</h3>
              <p className="text-xs text-emerald-600 font-medium">Closed within 24 hours</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg First Response</p>
              <h3 className="text-2xl font-bold text-slate-900">1.8 Hours</h3>
              <p className="text-xs text-blue-600 font-medium">Target &lt; 4 hours</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Confidential Grievance</p>
              <h3 className="text-2xl font-bold text-slate-900">0 Open</h3>
              <p className="text-xs text-emerald-600 font-medium">Zero escalations</p>
            </div>
          </div>
        </div>

        {/* Tickets Queue List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Active Employee Helpdesk Tickets</h3>
              <p className="text-xs text-slate-500">Provide direct resolution notes or route to specialized payroll teams.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              {pendingCount} Awaiting Action
            </span>
          </div>

          <div className="space-y-4">
            {tickets.map(t => (
              <div key={t.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{t.applicant}</h4>
                        <span className="text-[10px] font-mono text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">{t.id}</span>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">{t.category}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          t.priority === 'High' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {t.priority}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{t.dept} • Submitted on {t.submittedDate}</p>

                      <p className="text-xs text-slate-700 mt-2 bg-white p-3 rounded-xl border border-slate-100">
                        {t.subject}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 lg:self-center">
                    {t.status !== 'Resolved' ? (
                      <>
                        <button 
                          onClick={() => alert(`Reply composer opened for ${t.applicant}`)}
                          className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition flex items-center gap-1.5"
                        >
                          <MessageSquare size={14} /> Reply
                        </button>
                        <button 
                          onClick={() => handleResolveTicket(t.id)}
                          className="px-4 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                        >
                          <Check size={14} /> Resolve Ticket
                        </button>
                      </>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ Resolved
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
