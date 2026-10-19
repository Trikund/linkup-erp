import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Receipt, CreditCard, ShieldCheck, Download, 
  Calendar, CheckCircle2, UserCheck, Mail, ArrowUpRight, X
} from 'lucide-react';

interface BillingInvoice {
  id: string;
  invoiceNumber: string;
  cycle: string;
  issueDate: string;
  paidDate: string;
  amount: string;
  currency: string;
  status: 'Paid in Full' | 'Processing';
  pdfSize: string;
}

export function AdminBilling() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const invoices: BillingInvoice[] = [
    { id: 'INV-01', invoiceNumber: 'LUK-INV-2026-10', cycle: 'Annual Enterprise SaaS (Tier 1)', issueDate: 'Oct 01, 2026', paidDate: 'Oct 05, 2026', amount: '₹48,00,000 + GST', currency: 'INR (₹)', status: 'Paid in Full', pdfSize: '240 KB' },
    { id: 'INV-02', invoiceNumber: 'LUK-INV-2025-10', cycle: 'Annual Enterprise SaaS (Tier 1)', issueDate: 'Oct 01, 2025', paidDate: 'Oct 03, 2025', amount: '₹42,00,000 + GST', currency: 'INR (₹)', status: 'Paid in Full', pdfSize: '228 KB' },
    { id: 'INV-03', invoiceNumber: 'LUK-INV-2024-10', cycle: 'Annual Enterprise SaaS (Tier 1)', issueDate: 'Oct 01, 2024', paidDate: 'Oct 04, 2024', amount: '₹36,00,000 + GST', currency: 'INR (₹)', status: 'Paid in Full', pdfSize: '215 KB' }
  ];

  const handleDownloadInvoice = (invNum: string) => {
    setDownloadNotice(`Tax invoice ${invNum} downloaded as signed PDF.`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Licenses & Billing" 
      description="Enterprise licensing tier, active seat consumption, cloud storage quota, and official tax invoices."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'System Configuration & Account' },
        { label: 'Licenses & Billing' }
      ]}
    >
      <div className="space-y-6">
        {downloadNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Current Plan Overview Card */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                ENTERPRISE TIER 1 CONTRACT
              </span>
              <span className="text-xs font-semibold text-emerald-400">● Active through Oct 2027</span>
            </div>
            <h3 className="text-2xl font-black text-white">LinkUp ERP Global Enterprise Suite</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Includes unlimited multi-entity subsidiaries, automated payroll NACH generation, 24/7 dedicated SRE support, and SOC-2 Type II audit vault.
            </p>
          </div>

          <div className="text-right shrink-0">
            <p className="text-xs text-slate-400 font-semibold uppercase">Annual License Value</p>
            <p className="text-3xl font-black text-white mt-0.5">₹48,00,000</p>
            <p className="text-[11px] text-slate-400 font-medium">Billed Annually • Paid in Full</p>
          </div>
        </div>

        {/* Quota Utilization Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-slate-900 text-sm">Workforce Seat Allocation</h4>
              <span className="font-mono text-xs font-bold text-blue-600">72.5% Utilized</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Licensed user seats assigned across global legal entities.</p>

            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-blue-600 rounded-full" style={{ width: '72.5%' }} />
            </div>

            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Active Seats: <strong className="text-slate-900 font-bold">1,450</strong></span>
              <span>Total Contracted: <strong className="text-slate-900 font-bold">2,000</strong></span>
            </div>
            <p className="text-[11px] text-emerald-600 font-medium mt-2">550 spare seats available for immediate provisioning</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <h4 className="font-bold text-slate-900 text-sm">Enterprise Storage Quota</h4>
              <span className="font-mono text-xs font-bold text-emerald-600">24.0% Utilized</span>
            </div>
            <p className="text-xs text-slate-500 mb-4">Encrypted document vaults, resumes, payslips, and backup snapshots.</p>

            <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden mb-3">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: '24%' }} />
            </div>

            <div className="flex justify-between text-xs font-semibold text-slate-700">
              <span>Used Storage: <strong className="text-slate-900 font-bold">2.4 TB</strong></span>
              <span>Provisioned Cap: <strong className="text-slate-900 font-bold">10.0 TB</strong></span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium mt-2">7.6 TB high-performance NVMe cloud storage remaining</p>
          </div>
        </div>

        {/* Dedicated Account Manager */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
              AM
            </div>
            <div>
              <p className="font-bold text-slate-900 text-sm">Aakash Mukherjee</p>
              <p className="text-xs text-slate-500">Dedicated Enterprise Account Director • LinkUp Technologies</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg font-mono">15-Min Response SLA</span>
            <button className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-colors">
              Contact Account Team
            </button>
          </div>
        </div>

        {/* Invoices Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Contract Invoices & Payment Ledger</h3>
            <p className="text-xs text-slate-500">Download official GST-compliant tax invoices and receipts</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Invoice #</th>
                  <th className="py-3 px-4">Contract Cycle</th>
                  <th className="py-3 px-4">Issue Date</th>
                  <th className="py-3 px-4">Paid Date</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">{inv.invoiceNumber}</td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800">{inv.cycle}</td>
                    <td className="py-3.5 px-4 text-slate-600">{inv.issueDate}</td>
                    <td className="py-3.5 px-4 text-slate-600">{inv.paidDate}</td>
                    <td className="py-3.5 px-4 font-black text-slate-900">{inv.amount}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button 
                        onClick={() => handleDownloadInvoice(inv.invoiceNumber)}
                        className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors inline-flex items-center gap-1"
                      >
                        <Download size={12} /> PDF
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
