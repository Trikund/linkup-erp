import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Receipt, Plus, Download, CheckCircle2, Clock, 
  AlertCircle, DollarSign, FileText, ChevronRight, Upload
} from 'lucide-react';

interface ClaimItem {
  id: string;
  category: string;
  description: string;
  billDate: string;
  amount: string;
  merchant: string;
  approver: string;
  status: 'Reimbursed' | 'Pending Approval' | 'Under Review';
}

export function EmployeeReimbursements() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const claims: ClaimItem[] = [
    { id: 'CLM-2026-104', category: 'Team Events & Refreshments', description: 'Sprint 42 Retrospective pizza & team celebratory snacks', billDate: 'Oct 14, 2026', amount: '₹4,850', merchant: 'Domino’s Pizza India', approver: 'Siddharth Mehta (VP Engineering)', status: 'Pending Approval' },
    { id: 'CLM-2026-098', category: 'Broadband / Internet Allowance', description: 'Monthly high-speed fiber internet reimbursement (Sep 2026)', billDate: 'Oct 02, 2026', amount: '₹2,499', merchant: 'Airtel Xstream Fiber', approver: 'Finance Payroll Bot', status: 'Reimbursed' },
    { id: 'CLM-2026-085', category: 'Learning & Certifications', description: 'AWS Certified Solutions Architect Associate exam voucher', billDate: 'Sep 12, 2026', amount: '₹12,400', merchant: 'Pearson VUE', approver: 'Engineering L&D Cell', status: 'Reimbursed' },
    { id: 'CLM-2026-072', category: 'Client Hospitality & Meals', description: 'Dinner with CloudScale enterprise customer engineering leads', billDate: 'Aug 24, 2026', amount: '₹8,920', merchant: 'The Oberoi Bengaluru', approver: 'Siddharth Mehta', status: 'Reimbursed' },
    { id: 'CLM-2026-061', category: 'Broadband / Internet Allowance', description: 'Monthly high-speed fiber internet reimbursement (Aug 2026)', billDate: 'Aug 04, 2026', amount: '₹2,499', merchant: 'Airtel Xstream Fiber', approver: 'Finance Payroll Bot', status: 'Reimbursed' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Expense Claims & Reimbursements"
      description="Submit enterprise business expense claims, broadband allowances, and travel vouchers."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Finance' },
        { label: 'Expense Claims' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <Receipt size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Employee Expense Claims & Settlement</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Direct Credit to Salary A/C
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Claims submitted before the 20th are settled in the current month’s payroll cycle.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Plus size={14} />
            Submit New Expense Claim
          </button>
        </div>

        {/* Claim Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Claimed YTD</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Receipt size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹31,168</div>
            <div className="mt-1 text-xs text-slate-500">Across 5 expense submissions</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Settled & Paid</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">₹26,318</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">100% credited to HDFC bank</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pending Finance Approval</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹4,850</div>
            <div className="mt-1 text-xs text-slate-500">CLM-2026-104 (Sprint Pizza)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Broadband Quota</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><DollarSign size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹2,500 / mo</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Auto-approved every month</div>
          </div>
        </div>

        {/* Claims Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Expense Claim History (FY 2026-27)</h2>
            <span className="text-xs text-slate-500">Showing {claims.length} claims</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Claim ID</th>
                  <th className="py-3 px-4">Category & Purpose</th>
                  <th className="py-3 px-4">Merchant / Vendor</th>
                  <th className="py-3 px-4">Bill Date</th>
                  <th className="py-3 px-4">Claim Amount</th>
                  <th className="py-3 px-4">Approver</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {claims.map((c) => (
                  <tr key={c.id} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-blue-600">
                      {c.id}
                    </td>
                    <td className="py-3.5 px-4 max-w-sm">
                      <div className="font-semibold text-slate-800">{c.category}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{c.description}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">
                      {c.merchant}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-mono">
                      {c.billDate}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-black text-slate-900">
                      {c.amount}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">
                      {c.approver}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        c.status === 'Reimbursed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2 py-1 text-xs font-semibold text-blue-600 hover:bg-blue-50 rounded transition">
                        Receipt PDF
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
