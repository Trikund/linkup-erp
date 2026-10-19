import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CreditCard, ShieldCheck, Lock, CheckCircle2, Download, 
  AlertTriangle, DollarSign, ArrowUpRight, Check, X, Building2
} from 'lucide-react';

interface EntityDisbursement {
  entity: string;
  currency: string;
  headcount: number;
  grossSalary: string;
  statutoryTaxes: string;
  netPayout: string;
  bankPartner: string;
  status: 'Audit Approved' | 'Pending Dual Sign-off' | 'Locked for NACH';
}

export function AdminPayroll() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [dualSignoffDone, setDualSignoffDone] = useState(false);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const entities: EntityDisbursement[] = [
    {
      entity: 'LinkUp Technologies India Pvt Ltd',
      currency: 'INR (₹)',
      headcount: 980,
      grossSalary: '₹12,85,40,000',
      statutoryTaxes: '₹1,92,40,000 (PF, ESIC, TDS)',
      netPayout: '₹10,93,00,000',
      bankPartner: 'ICICI Corporate NACH (Direct Credit)',
      status: 'Locked for NACH'
    },
    {
      entity: 'LinkUp Technologies Inc. (US)',
      currency: 'USD ($)',
      headcount: 220,
      grossSalary: '$440,000',
      statutoryTaxes: '$88,000 (IRS 941, State, 401k)',
      netPayout: '$352,000',
      bankPartner: 'First Republic / SVB ACH Direct',
      status: 'Audit Approved'
    },
    {
      entity: 'LinkUp Tech APAC Pte Ltd (Singapore)',
      currency: 'SGD (S$)',
      headcount: 140,
      grossSalary: 'S$195,000',
      statutoryTaxes: 'S$33,000 (CPF Statutory)',
      netPayout: 'S$162,000',
      bankPartner: 'DBS IDEAL Corporate Gateway',
      status: 'Audit Approved'
    },
    {
      entity: 'LinkUp Tech UK Limited (London)',
      currency: 'GBP (£)',
      headcount: 110,
      grossSalary: '£105,000',
      statutoryTaxes: '£26,000 (HMRC PAYE & NI)',
      netPayout: '£79,000',
      bankPartner: 'Barclays BACS Automated Clearing',
      status: 'Audit Approved'
    }
  ];

  const handleDualSignoff = () => {
    setDualSignoffDone(true);
    setActionNotice('CISO & Super Admin cryptographic sign-off applied (Key: RSA-4096-ADM-0001). Batch dispatched to bank gateway.');
    setTimeout(() => setActionNotice(null), 5000);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Enterprise Payroll" 
      description="Multi-entity global payroll governance, 4-eye release authorizations, bank NACH clearing locks, and statutory tax compliance."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Operations & Payroll Governance' },
        { label: 'Enterprise Payroll' }
      ]}
    >
      <div className="space-y-6">
        {actionNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{actionNotice}</span>
            </div>
            <button onClick={() => setActionNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Top Summary Banner */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-lg border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
              <CreditCard size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base">October 2026 Global Payroll Release Cycle</h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                  DUE OCT 31, 2026
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Total Authorized Gross: <strong className="text-white">₹18,42,80,000 Eqv.</strong> across 1,450 employee salary accounts worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={() => {
                setActionNotice('Exporting signed bank payment manifests (XML + CSV) for NACH clearing...');
                setTimeout(() => setActionNotice(null), 3000);
              }}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5"
            >
              <Download size={14} /> Download NACH Manifest
            </button>
            <button 
              onClick={handleDualSignoff}
              disabled={dualSignoffDone}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 shadow-md ${
                dualSignoffDone 
                  ? 'bg-emerald-600 text-white cursor-default'
                  : 'bg-amber-500 hover:bg-amber-400 text-slate-950 font-black shadow-amber-500/20'
              }`}
            >
              <ShieldCheck size={14} />
              {dualSignoffDone ? 'Dual Authorization Locked' : 'Authorize Release Gate'}
            </button>
          </div>
        </div>

        {/* Statutory Compliance Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">EPF & ESIC Return</p>
            <p className="text-xl font-black text-emerald-600 mt-1">ECR Locked</p>
            <p className="text-[11px] text-slate-500 mt-0.5">₹88.4L Prov. Fund Deposited</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Section 192 TDS</p>
            <p className="text-xl font-black text-emerald-600 mt-1">Form 24Q Ready</p>
            <p className="text-[11px] text-slate-500 mt-0.5">₹1.04 Cr Tax Deducted at Source</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">US 401(k) / IRS 941</p>
            <p className="text-xl font-black text-emerald-600 mt-1">Pre-validated</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Fidelity & ADP Direct Fed</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Dual Release Gate</p>
            <p className="text-xl font-black text-blue-600 mt-1">{dualSignoffDone ? 'Approved' : 'CFO Signed (1/2)'}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Super Admin Signature {dualSignoffDone ? 'Done' : 'Awaited'}</p>
          </div>
        </div>

        {/* Entity Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Multi-Entity Payroll Disbursement Ledger</h3>
            <p className="text-xs text-slate-500">Gross salaries, statutory withholdings, and bank settlement routing</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Corporate Legal Entity</th>
                  <th className="py-3 px-4">Headcount</th>
                  <th className="py-3 px-4">Gross Allocation</th>
                  <th className="py-3 px-4">Statutory Withholdings</th>
                  <th className="py-3 px-4">Net Bank Payout</th>
                  <th className="py-3 px-4">Clearing Gateway</th>
                  <th className="py-3 px-4 text-right">Gate Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {entities.map((ent, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4">
                      <p className="font-bold text-slate-900">{ent.entity}</p>
                      <p className="text-[11px] text-slate-400 font-mono">Currency: {ent.currency}</p>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-slate-700">{ent.headcount} staff</td>
                    <td className="py-3.5 px-4 font-bold text-slate-900">{ent.grossSalary}</td>
                    <td className="py-3.5 px-4 text-slate-600">{ent.statutoryTaxes}</td>
                    <td className="py-3.5 px-4 font-black text-emerald-600">{ent.netPayout}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{ent.bankPartner}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ent.status === 'Locked for NACH' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                      }`}>
                        {ent.status}
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
