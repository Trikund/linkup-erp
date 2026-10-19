import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Landmark, Download, CheckCircle2, AlertCircle, 
  FileText, ShieldCheck, ChevronRight, Upload, Plus
} from 'lucide-react';

interface TaxProof {
  section: string;
  name: string;
  maxLimit: string;
  declaredAmount: string;
  verifiedAmount: string;
  status: 'Verified' | 'Pending Verification';
}

export function EmployeeTax() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [selectedRegime, setSelectedRegime] = useState<'New' | 'Old'>('New');

  const proofs: TaxProof[] = [
    { section: 'Section 80C', name: 'Public Provident Fund (PPF), ELSS & Life Insurance', maxLimit: '₹1,50,000', declaredAmount: '₹1,50,000', verifiedAmount: '₹1,50,000', status: 'Verified' },
    { section: 'Section 80D', name: 'Health Insurance Premium (Self, Spouse & Parents)', maxLimit: '₹75,000', declaredAmount: '₹25,000', verifiedAmount: '₹25,000', status: 'Verified' },
    { section: 'Section 80CCD(1B)', name: 'National Pension System (NPS Tier-1 Voluntary)', maxLimit: '₹50,000', declaredAmount: '₹50,000', verifiedAmount: '₹50,000', status: 'Verified' },
    { section: 'Section 24(b)', name: 'Interest on Housing Loan for Self-Occupied Property', maxLimit: '₹2,00,000', declaredAmount: '₹1,80,000', verifiedAmount: '₹1,80,000', status: 'Verified' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Tax & Form 16"
      description="Tax regime elections, Chapter VI-A investment proofs, and Form 16 certificates."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Finance' },
        { label: 'Tax & Form 16' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Landmark size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Income Tax & Form 16 Portal</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                AY 2027-28 (FY 2026-27)
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Tax deductions calculated as per Section 192 of the Income Tax Act, 1961.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Tax Computation Sheet
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Upload size={14} />
              Submit Investment Proof
            </button>
          </div>
        </div>

        {/* Regime Selection Banner */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Active Tax Regime Selection</h3>
              <p className="text-xs text-slate-500 mt-0.5">You can switch between New and Old Tax Regimes once per financial year before Dec 31.</p>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setSelectedRegime('New')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedRegime === 'New' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                New Tax Regime (Sec 115BAC) ★ Selected
              </button>
              <button 
                onClick={() => setSelectedRegime('Old')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
                  selectedRegime === 'Old' 
                    ? 'bg-blue-600 text-white shadow-xs' 
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Old Tax Regime (With Deductions)
              </button>
            </div>
          </div>
        </div>

        {/* Tax Metric Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Gross Annual CTC</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Landmark size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹18,50,000</div>
            <div className="mt-1 text-xs text-slate-500">Standard Deduction: ₹75,000</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Net Taxable Income</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><ShieldCheck size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹17,75,000</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">After Sec 115BAC standard relief</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Estimated Annual Tax</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><FileText size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹2,19,200</div>
            <div className="mt-1 text-xs text-slate-500">Monthly TDS deduction: ₹18,266</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">TDS Realized YTD</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">₹1,09,596</div>
            <div className="mt-1 text-xs text-slate-500">6 of 12 installments credited</div>
          </div>
        </div>

        {/* Investment Declarations Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Declared Tax Saving Investments (Chapter VI-A)</h2>
            <span className="text-xs text-slate-500">Status: All Proofs Verified</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Section</th>
                  <th className="py-3 px-4">Investment Category</th>
                  <th className="py-3 px-4">Max Eligible Limit</th>
                  <th className="py-3 px-4">Declared Amount</th>
                  <th className="py-3 px-4">Verified By Finance</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {proofs.map((p, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                      {p.section}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-800 max-w-sm">
                      {p.name}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-600">
                      {p.maxLimit}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                      {p.declaredAmount}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-emerald-600">
                      {p.verifiedAmount}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Form 16 Download Center */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-800 mb-1">Form 16 Annual Certificates (TRACES TRN Verified)</h3>
          <p className="text-xs text-slate-500 mb-4">Official digital certificates signed by LinkUp Technologies Principal Officer.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800">Form 16 (Part A & Part B) • AY 2026-27</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Assessment Year: 2026-27 (Financial Year 2025-26)</p>
              </div>
              <button className="px-3 py-1.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition flex items-center gap-1.5 shadow-sm">
                <Download size={12} /> Download PDF
              </button>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-800">Form 16 (Part A & Part B) • AY 2025-26</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Assessment Year: 2025-26 (Financial Year 2024-25)</p>
              </div>
              <button className="px-3 py-1.5 bg-slate-200 text-slate-700 font-bold rounded-lg hover:bg-slate-300 transition flex items-center gap-1.5">
                <Download size={12} /> Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
