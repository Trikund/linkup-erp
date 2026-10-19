import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Receipt, CheckCircle2, Clock, Check, X, 
  FileText, IndianRupee, AlertCircle, ExternalLink, 
  Download, Eye, Filter, ArrowUpRight
} from 'lucide-react';

interface ExpenseClaim {
  id: string;
  claimant: string;
  claimantRole: string;
  category: 'Team Engagement' | 'Certifications & Training' | 'Travel & Subsistence' | 'Software & Subscriptions';
  amount: number;
  date: string;
  description: string;
  vendor: string;
  invoiceNumber: string;
  receiptStatus: 'Verified Tax Invoice' | 'GST Compliance Passed';
  status: 'Pending Manager Approval' | 'Approved & Sent to Finance' | 'Rejected';
  avatar: string;
}

export function ManagerExpenses() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [claims, setClaims] = useState<ExpenseClaim[]>([
    {
      id: 'EXP-2026-401',
      claimant: 'Rahul Sharma',
      claimantRole: 'Senior Frontend Developer',
      category: 'Team Engagement',
      amount: 4850,
      date: 'Oct 14, 2026',
      description: 'Sprint 42 Mid-Sprint Retro celebration pizza & refreshments for Pod 4 engineers.',
      vendor: 'Domino’s Pizza India Ltd',
      invoiceNumber: 'INV-DOM-87912',
      receiptStatus: 'GST Compliance Passed',
      status: 'Pending Manager Approval',
      avatar: 'RS'
    },
    {
      id: 'EXP-2026-402',
      claimant: 'Vikram Malhotra',
      claimantRole: 'Senior Backend Engineer',
      category: 'Certifications & Training',
      amount: 14200,
      date: 'Oct 12, 2026',
      description: 'AWS Certified Solutions Architect Professional certification exam registration voucher.',
      vendor: 'Pearson VUE / Amazon Web Services',
      invoiceNumber: 'VUE-AWS-9021',
      receiptStatus: 'Verified Tax Invoice',
      status: 'Pending Manager Approval',
      avatar: 'VM'
    },
    {
      id: 'EXP-2026-403',
      claimant: 'Sneha Roy',
      claimantRole: 'Senior Product Designer',
      category: 'Software & Subscriptions',
      amount: 8990,
      date: 'Oct 09, 2026',
      description: 'Figma Config 2026 Virtual pass & interactive prototyping plugin annual seat.',
      vendor: 'Figma Inc.',
      invoiceNumber: 'FIG-2026-781',
      receiptStatus: 'Verified Tax Invoice',
      status: 'Pending Manager Approval',
      avatar: 'SR'
    }
  ]);

  const [approvedHistory, setApprovedHistory] = useState([
    { id: 'EXP-OLD-11', claimant: 'Amit Kumar', category: 'Hardware', amount: 3200, date: 'Sep 29, 2026', status: 'Reimbursed' },
    { id: 'EXP-OLD-12', claimant: 'Siddharth Rao', category: 'Training', amount: 9500, date: 'Sep 15, 2026', status: 'Reimbursed' }
  ]);

  const handleApprove = (id: string) => {
    setClaims(prev => prev.map(c => c.id === id ? { ...c, status: 'Approved & Sent to Finance' } : c));
  };

  const handleReject = (id: string) => {
    setClaims(prev => prev.map(c => c.id === id ? { ...c, status: 'Rejected' } : c));
  };

  const pendingClaims = claims.filter(c => c.status === 'Pending Manager Approval');
  const pendingTotal = pendingClaims.reduce((sum, c) => sum + c.amount, 0);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Team Expense Claims & Approvals"
      description="Authorize team operational expenses, certification reimbursements, and client meal claims within policy limits."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Financials & Approvals' },
        { label: 'Expense Claims' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Receipt size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Awaiting Authorization</p>
              <h3 className="text-2xl font-bold text-slate-900">₹{pendingTotal.toLocaleString()}</h3>
              <p className="text-xs text-amber-600 font-medium">{pendingClaims.length} claims pending</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Signing Authority Limit</p>
              <h3 className="text-2xl font-bold text-slate-900">₹2,50,000</h3>
              <p className="text-xs text-emerald-600 font-medium">Per claim limit (Level M1)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Q4 Team Spend</p>
              <h3 className="text-2xl font-bold text-slate-900">₹58,400</h3>
              <p className="text-xs text-blue-600 font-medium">Out of ₹1,50,000 team budget</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Finance Run</p>
              <h3 className="text-2xl font-bold text-slate-900">Oct 25</h3>
              <p className="text-xs text-purple-600 font-medium">Direct deposit to payroll</p>
            </div>
          </div>
        </div>

        {/* Claims Approval List */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Pending Expense Submissions</h3>
              <p className="text-xs text-slate-500">Every reimbursement is verified with Attached GST Tax Invoices.</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
              {pendingClaims.length} Actions Required
            </span>
          </div>

          <div className="space-y-4">
            {claims.map(claim => (
              <div key={claim.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {claim.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{claim.claimant}</h4>
                        <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {claim.id}
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                          {claim.category}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{claim.claimantRole} • Submitted on {claim.date}</p>

                      <p className="text-xs text-slate-700 mt-2 bg-white p-3 rounded-xl border border-slate-100">
                        {claim.description}
                      </p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-slate-500">Vendor: <strong className="text-slate-800">{claim.vendor}</strong></span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-500">Inv #: <strong className="font-mono text-slate-800">{claim.invoiceNumber}</strong></span>
                        <span className="text-slate-400">•</span>
                        <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                          ✓ {claim.receiptStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col lg:items-end justify-between gap-3">
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Claim Amount</span>
                      <span className="text-2xl font-black text-slate-900">₹{claim.amount.toLocaleString()}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      {claim.status === 'Pending Manager Approval' ? (
                        <>
                          <button 
                            onClick={() => handleReject(claim.id)}
                            className="px-3.5 py-1.5 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition"
                          >
                            Reject
                          </button>
                          <button 
                            onClick={() => handleApprove(claim.id)}
                            className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                          >
                            <Check size={14} /> Authorize Claim
                          </button>
                        </>
                      ) : (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          claim.status.includes('Approved') ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
                        }`}>
                          {claim.status}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Log */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-900 mb-3">Reimbursement History & Corporate Ledger</h3>
          <div className="divide-y divide-slate-100 text-xs">
            {approvedHistory.map(item => (
              <div key={item.id} className="py-3 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800">{item.claimant}</span>
                  <span className="text-slate-500 ml-2">({item.category})</span>
                  <p className="text-[11px] text-slate-400">Processed on {item.date}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-slate-900">₹{item.amount.toLocaleString()}</span>
                  <span className="text-[10px] font-bold text-emerald-600 block bg-emerald-50 px-2 py-0.5 rounded mt-0.5">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
