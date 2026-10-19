import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  ShieldCheck, Download, FileText, CheckCircle2, 
  ExternalLink, Lock, AlertCircle, Eye
} from 'lucide-react';

interface PolicyDoc {
  id: string;
  title: string;
  category: string;
  version: string;
  effectiveDate: string;
  signedStatus: 'Signed & Acknowledged' | 'Action Required' | 'Informational';
  description: string;
}

export function EmployeePolicies() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const policies: PolicyDoc[] = [
    { id: 'POL-01', title: 'Global Code of Business Conduct & Ethics', category: 'Governance & Ethics', version: 'v4.2', effectiveDate: 'Jan 01, 2026', signedStatus: 'Signed & Acknowledged', description: 'Enterprise integrity principles, conflicts of interest, anti-bribery, and fair workplace standards.' },
    { id: 'POL-02', title: 'Prevention of Sexual Harassment (POSH) Policy', category: 'People & Culture', version: 'v3.0', effectiveDate: 'Mar 15, 2026', signedStatus: 'Signed & Acknowledged', description: 'Zero-tolerance policy against sexual harassment, internal complaints committee (ICC) contacts and guidelines.' },
    { id: 'POL-03', title: 'Information Security & Data Protection (ISO 27001 / SOC-2)', category: 'IT & Security', version: 'v5.1', effectiveDate: 'Jul 01, 2026', signedStatus: 'Signed & Acknowledged', description: 'Mandatory device encryption, clean desk guidelines, password rotation, and customer PII handling protocols.' },
    { id: 'POL-04', title: 'Business Travel, Meals & Entertainment Expense Policy', category: 'Finance', version: 'v2.8', effectiveDate: 'Aug 01, 2026', signedStatus: 'Signed & Acknowledged', description: 'Per diem caps, flight booking tiers via Corporate Amex, and client dinner reimbursement rules.' },
    { id: 'POL-05', title: 'Intellectual Property (IP) Assignment & Non-Disclosure Agreement', category: 'Legal & IP', version: 'v2.0', effectiveDate: 'Aug 14, 2023', signedStatus: 'Signed & Acknowledged', description: 'Proprietary code assignment, open source contribution guidelines, and strict NDA obligations.' },
    { id: 'POL-06', title: 'Hybrid Office & Flexible Remote Work Policy', category: 'Workplace Operations', version: 'v3.4', effectiveDate: 'Sep 01, 2026', signedStatus: 'Signed & Acknowledged', description: 'Expectations for 3 days in office, core collaboration hours (11:00 AM - 05:00 PM), and ergonomic support.' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Policies & Handbook"
      description="Official LinkUp Technologies employee handbook, legal compliance guidelines, and code of conduct."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Organization & Culture' },
        { label: 'Policies & Handbook' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ShieldCheck size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Corporate Governance & Compliance Handbook</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                100% Policy Compliance
              </span>
            </div>
            <p className="text-xs text-slate-500">
              All mandatory annual compliance acknowledgments are up-to-date for Rahul Sharma.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Download size={14} />
            Download Complete Handbook PDF
          </button>
        </div>

        {/* Policies Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Active Company Policies (FY 2026-27)</h2>
            <span className="text-xs text-slate-500">6 Documents</span>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {policies.map((p) => (
              <div key={p.id} className="p-5 hover:bg-slate-50/70 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] font-bold text-slate-400">{p.id}</span>
                      <h4 className="font-bold text-slate-800 text-sm">{p.title}</h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">
                        {p.version}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-400 pt-1">
                      <span>Category: <strong className="text-slate-600">{p.category}</strong></span>
                      <span>•</span>
                      <span>Effective: {p.effectiveDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 self-end md:self-center">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {p.signedStatus}
                    </span>
                    <button className="px-3 py-1.5 text-xs font-bold text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-lg transition flex items-center gap-1.5">
                      <Download size={12} /> PDF
                    </button>
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
