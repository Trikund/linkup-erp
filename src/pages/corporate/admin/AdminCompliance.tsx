import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FileBox, ShieldCheck, CheckCircle2, Download, 
  ExternalLink, Calendar, AlertCircle, FileText, Lock
} from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  authority: string;
  status: 'Certified & Active' | 'Audit Underway' | 'Renewed';
  validUntil: string;
  auditor: string;
}

interface StatutoryFiling {
  id: string;
  title: string;
  authority: string;
  frequency: string;
  period: string;
  status: 'Filed & Acknowledged' | 'Due Soon' | 'Ready for Signoff';
  ackNumber: string;
}

export function AdminCompliance() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const certs: Certification[] = [
    { id: 'SOC2-T2', name: 'SOC-2 Type II Security, Availability & Confidentiality', authority: 'AICPA / Trust Services Criteria', status: 'Certified & Active', validUntil: 'Aug 2027', auditor: 'Ernst & Young LLP' },
    { id: 'ISO-27001', name: 'ISO/IEC 27001:2022 Information Security Management', authority: 'International Organization for Standardization', status: 'Certified & Active', validUntil: 'Nov 2028', auditor: 'BSI Assurance UK' },
    { id: 'GDPR-DPDPA', name: 'EU GDPR & India Digital Personal Data Protection Act (DPDPA 2023)', authority: 'Data Protection Officer (DPO)', status: 'Certified & Active', validUntil: 'Continuous', auditor: 'Internal Legal & Trust' },
    { id: 'HIPAA-BAA', name: 'HIPAA Security Rule Compliance (Healthcare Tenants)', authority: 'U.S. Department of HHS', status: 'Certified & Active', validUntil: 'Oct 2027', auditor: 'Coalfire Security Labs' }
  ];

  const filings: StatutoryFiling[] = [
    { id: 'FIL-01', title: 'Monthly EPF ECR Electronic Challan (September 2026)', authority: 'EPFO (Ministry of Labour)', frequency: 'Monthly', period: 'Sep 2026', status: 'Filed & Acknowledged', ackNumber: 'ECR-992014881' },
    { id: 'FIL-02', title: 'ESI Contribution Monthly Return (September 2026)', authority: 'ESIC India', frequency: 'Monthly', period: 'Sep 2026', status: 'Filed & Acknowledged', ackNumber: 'ESI-440188219' },
    { id: 'FIL-03', title: 'Form 24Q Quarterly TDS on Salaries (Q2 FY27)', authority: 'Income Tax Department (TRACES)', frequency: 'Quarterly', period: 'Jul - Sep 2026', status: 'Filed & Acknowledged', ackNumber: 'TDS-24Q-77810' },
    { id: 'FIL-04', title: 'Annual Financial Statements Form AOC-4 (FY26)', authority: 'Ministry of Corporate Affairs (MCA)', frequency: 'Annual', period: 'FY 2025-26', status: 'Filed & Acknowledged', ackNumber: 'MCA-SRN-T88192' },
    { id: 'FIL-05', title: 'Annual Return Form MGT-7 / MGT-7A', authority: 'Registrar of Companies (RoC)', frequency: 'Annual', period: 'FY 2025-26', status: 'Filed & Acknowledged', ackNumber: 'MCA-SRN-T88193' }
  ];

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Compliance & Legal Vault" 
      description="Global regulatory certifications, statutory filings archive, DPDPA/GDPR compliance, and external auditor attestations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics, Audit & Compliance' },
        { label: 'Compliance & Legal Vault' }
      ]}
    >
      <div className="space-y-6">
        {/* Compliance Posture Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Compliance Score</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">100%</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">0 Non-Compliances</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Certifications</p>
            <p className="text-2xl font-black text-slate-900 mt-1">4 Active</p>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">SOC-2, ISO, GDPR, HIPAA</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Statutory Filings</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">100% On-Time</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">PF, ESIC, Form 24Q, MCA</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">DSAR Turnaround</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">&lt; 48 Hours</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">0 Pending Data Subject Requests</p>
          </div>
        </div>

        {/* Certifications Grid */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3">Enterprise Regulatory Certifications</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certs.map(c => (
              <div key={c.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-900 text-white">
                      {c.id}
                    </span>
                    <h4 className="font-bold text-slate-900 text-base mt-2">{c.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{c.authority}</p>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    {c.status}
                  </span>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Auditor: <strong className="text-slate-700">{c.auditor}</strong></span>
                  <span>Valid: <strong className="text-slate-800">{c.validUntil}</strong></span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory Filings Vault */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Government & Statutory Filings Archive</h3>
              <p className="text-xs text-slate-500">Acknowledged challans with SRN reference numbers</p>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors">
              <Download size={14} /> Download Vault ZIP
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Statutory Document</th>
                  <th className="py-3 px-4">Authority</th>
                  <th className="py-3 px-4">Frequency</th>
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4">Acknowledgment SRN</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filings.map((f) => (
                  <tr key={f.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{f.title}</td>
                    <td className="py-3.5 px-4 text-slate-600">{f.authority}</td>
                    <td className="py-3.5 px-4 font-medium text-slate-700">{f.frequency}</td>
                    <td className="py-3.5 px-4 font-mono text-slate-500">{f.period}</td>
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">{f.ackNumber}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {f.status}
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
