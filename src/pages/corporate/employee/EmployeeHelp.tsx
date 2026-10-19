import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  HelpCircle, Plus, Search, MessageSquare, Phone, 
  Mail, CheckCircle2, Clock, AlertTriangle, ShieldCheck
} from 'lucide-react';

interface Ticket {
  id: string;
  subject: string;
  category: 'IT Hardware & Access' | 'HR & Benefits' | 'Finance & Payroll' | 'Facilities';
  priority: 'High' | 'Medium' | 'Low';
  assignedTo: string;
  createdDate: string;
  slaStatus: string;
  status: 'Resolved' | 'In Progress' | 'Open';
}

export function EmployeeHelp() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const tickets: Ticket[] = [
    {
      id: 'TICK-2026-4402',
      subject: 'HRA Rent Receipt Verification query for FY 2026-27 tax declaration',
      category: 'Finance & Payroll',
      priority: 'Medium',
      assignedTo: 'Finance Payroll Desk (Pooja Rao)',
      createdDate: 'Oct 16, 2026',
      slaStatus: 'Within SLA (4 hrs left)',
      status: 'In Progress'
    },
    {
      id: 'TICK-2026-4401',
      subject: 'Request for JetBrains WebStorm IDE Enterprise Annual License',
      category: 'IT Hardware & Access',
      priority: 'High',
      assignedTo: 'IT Systems Admin (Deepak Verma)',
      createdDate: 'Oct 04, 2026',
      slaStatus: 'Resolved in 2.5 hrs',
      status: 'Resolved'
    },
    {
      id: 'TICK-2026-4389',
      subject: 'Standing Desk Converter & Cable Management Setup at Desk 42',
      category: 'Facilities',
      priority: 'Low',
      assignedTo: 'Facilities Desk',
      createdDate: 'Sep 22, 2026',
      slaStatus: 'Resolved in 24 hrs',
      status: 'Resolved'
    }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Helpdesk & Grievance"
      description="Raise internal IT tickets, HR support inquiries, payroll disputes, and workplace requests."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Account & Support' },
        { label: 'Helpdesk & Grievance' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <HelpCircle size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Enterprise Service Desk & Support Portal</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Avg Response Time: &lt; 2 Hours
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Centralized ticketing for IT Systems, HR Operations, Facilities, and Workplace Services.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Plus size={14} />
            Raise Support Ticket
          </button>
        </div>

        {/* 3 Department Help Channels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Clock size={18} />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">IT & Infrastructure Desk</h4>
                <p className="text-[11px] text-slate-400">Hardware, VPN & Software Licenses</p>
              </div>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div>Email: <strong className="text-blue-600">it-helpdesk@linkupcorp.com</strong></div>
              <div>Internal Extension: <strong className="font-mono text-slate-800">#4400</strong></div>
              <div>SLA: 2 Hours (P1 Critical) / 8 Hours (P2 Normal)</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Mail size={18} />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">People & HR Operations</h4>
                <p className="text-[11px] text-slate-400">Leaves, Insurance & General Queries</p>
              </div>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div>Email: <strong className="text-purple-600">people-ops@linkupcorp.com</strong></div>
              <div>Internal Extension: <strong className="font-mono text-slate-800">#2100</strong></div>
              <div>SLA: 24 Hours turnaround</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-rose-50 text-rose-600 rounded-lg">
                <ShieldCheck size={18} />
              </span>
              <div>
                <h4 className="text-xs font-bold text-slate-800">Confidential Grievance Cell</h4>
                <p className="text-[11px] text-slate-400">Ethics, POSH & Compliance Officer</p>
              </div>
            </div>
            <div className="mt-3 text-xs space-y-1 text-slate-600">
              <div>Email: <strong className="text-rose-600">icc-posh@linkupcorp.com</strong></div>
              <div>Presiding Officer: <strong className="text-slate-800">Tanya Kapoor</strong></div>
              <div>100% Confidential & Anonymous hotline</div>
            </div>
          </div>
        </div>

        {/* Tickets Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">My Support Tickets (Past 90 Days)</h2>
            <span className="text-xs text-slate-500">Showing {tickets.length} tickets</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Ticket ID</th>
                  <th className="py-3 px-4">Subject & Summary</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Assigned Agent</th>
                  <th className="py-3 px-4">SLA Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {tickets.map((t) => (
                  <tr key={t.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                      {t.id}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800 max-w-sm">
                      {t.subject}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {t.category}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        t.priority === 'High' 
                          ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                          : 'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">
                      {t.assignedTo}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-500 text-[11px]">
                      {t.slaStatus}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        t.status === 'Resolved'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded transition">
                        View Thread
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
