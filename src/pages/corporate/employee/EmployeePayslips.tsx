import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CreditCard, Download, TrendingUp, DollarSign, 
  Landmark, FileText, CheckCircle2, ChevronRight, Eye, ShieldCheck
} from 'lucide-react';

interface MonthlySlip {
  month: string;
  gross: string;
  deductions: string;
  netPay: string;
  disbursedDate: string;
  utrNo: string;
  status: 'Credited';
}

export function EmployeePayslips() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const pastSlips: MonthlySlip[] = [
    { month: 'September 2026', gross: '₹1,54,166', deductions: '₹27,716', netPay: '₹1,26,450', disbursedDate: 'Sep 30, 2026', utrNo: 'HDFC90281472', status: 'Credited' },
    { month: 'August 2026', gross: '₹1,54,166', deductions: '₹27,716', netPay: '₹1,26,450', disbursedDate: 'Aug 31, 2026', utrNo: 'HDFC89124019', status: 'Credited' },
    { month: 'July 2026', gross: '₹1,54,166', deductions: '₹27,716', netPay: '₹1,26,450', disbursedDate: 'Jul 31, 2026', utrNo: 'HDFC88410294', status: 'Credited' },
    { month: 'June 2026', gross: '₹1,54,166', deductions: '₹27,716', netPay: '₹1,26,450', disbursedDate: 'Jun 30, 2026', utrNo: 'HDFC87192841', status: 'Credited' },
    { month: 'May 2026', gross: '₹1,54,166', deductions: '₹27,716', netPay: '₹1,26,450', disbursedDate: 'May 31, 2026', utrNo: 'HDFC86019284', status: 'Credited' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Payroll & Payslips"
      description="View detailed monthly salary statements, CTC breakdown, and tax withholding slips."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Finance' },
        { label: 'Payroll & Payslips' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <CreditCard size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Monthly Compensation & Payslip Ledger</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                FY 2026-27 Active
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Salary credited to HDFC Bank A/C ending with ••••4092 on the last working day of each month.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Annual CTC Annexure PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Download size={14} />
              Download Latest Slip (Sep 2026)
            </button>
          </div>
        </div>

        {/* 4 Salary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Annual CTC</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹18,50,000</div>
            <div className="mt-1 text-xs text-slate-500">Fixed: ₹16.5L + Variable: ₹2.0L</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Monthly Gross Pay</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><DollarSign size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹1,54,166</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">100% attendance credited</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Monthly Deductions</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Landmark size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹27,716</div>
            <div className="mt-1 text-xs text-slate-500">TDS: ₹18.2k | EPF: ₹9.2k | PT: ₹200</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Net Take-Home Pay</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><CreditCard size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">₹1,26,450</div>
            <div className="mt-1 text-xs text-slate-500">Credited to HDFC Bank</div>
          </div>
        </div>

        {/* Detailed Earnings vs Deductions Breakdown Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-sm font-bold text-slate-800">Current Month Salary Breakdown (September 2026)</h2>
              <p className="text-xs text-slate-500 mt-0.5">Pay Slip Ref: PAY-2026-09-0428 • PAN: ABCPS1234F • UAN: 100928374102</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
              Disbursed on Sep 30
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            {/* Earnings Column */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Earnings (Gross)</span>
                <span className="text-emerald-600 font-mono font-bold">₹1,54,166</span>
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Basic Salary</span>
                  <span className="font-mono font-bold text-slate-800">₹77,083</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">House Rent Allowance (HRA)</span>
                  <span className="font-mono font-bold text-slate-800">₹38,541</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Special Allowance</span>
                  <span className="font-mono font-bold text-slate-800">₹28,542</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Leave Travel Allowance (LTA)</span>
                  <span className="font-mono font-bold text-slate-800">₹10,000</span>
                </div>
              </div>
            </div>

            {/* Deductions Column */}
            <div>
              <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center justify-between">
                <span>Deductions & Taxes</span>
                <span className="text-rose-600 font-mono font-bold">₹27,716</span>
              </h3>
              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Provident Fund (Employee EPF)</span>
                  <span className="font-mono font-bold text-slate-800">₹9,250</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Income Tax (TDS Section 192)</span>
                  <span className="font-mono font-bold text-slate-800">₹18,266</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-50 rounded-lg">
                  <span className="text-slate-600 font-medium">Professional Tax (Karnataka)</span>
                  <span className="font-mono font-bold text-slate-800">₹200</span>
                </div>
                <div className="flex justify-between p-2.5 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-800 font-bold">Net Salary Payable</span>
                  <span className="font-mono font-black text-emerald-700">₹1,26,450</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Slips Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Historical Monthly Payslips (FY 2026-27)</h2>
            <span className="text-xs text-slate-500">Past 5 months</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Pay Period</th>
                  <th className="py-3 px-4">Gross Earnings</th>
                  <th className="py-3 px-4">Total Deductions</th>
                  <th className="py-3 px-4">Net Take-Home</th>
                  <th className="py-3 px-4">Bank UTR / Disbursed</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {pastSlips.map((slip, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-800">
                      {slip.month}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-slate-800">
                      {slip.gross}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-semibold text-rose-600">
                      {slip.deductions}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-black text-emerald-600">
                      {slip.netPay}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500">
                      <div>{slip.utrNo}</div>
                      <div className="text-[10px] text-slate-400">{slip.disbursedDate}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {slip.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-3 py-1 text-xs font-bold text-blue-600 hover:bg-blue-50 border border-blue-200 rounded-lg transition flex items-center gap-1.5 ml-auto">
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
