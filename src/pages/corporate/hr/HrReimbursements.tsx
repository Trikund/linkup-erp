import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Receipt, IndianRupee, CheckCircle2, Clock, 
  FileText, Check, X, Download, Filter, 
  Eye, ExternalLink, ShieldCheck
} from 'lucide-react';

interface ClaimItem {
  id: string;
  claimant: string;
  dept: string;
  manager: string;
  category: string;
  amount: number;
  date: string;
  invoiceNo: string;
  status: 'Pending HR Audit' | 'Passed to Finance' | 'Rejected';
  avatar: string;
}

export function HrReimbursements() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [claims, setClaims] = useState<ClaimItem[]>([
    { id: 'CLM-401', claimant: 'Rahul Sharma', dept: 'Engineering', manager: 'Priya Mehta', category: 'Team Engagement', amount: 4850, date: 'Oct 14, 2026', invoiceNo: 'INV-DOM-87912', status: 'Pending HR Audit', avatar: 'RS' },
    { id: 'CLM-402', claimant: 'Vikram Malhotra', dept: 'Engineering', manager: 'Priya Mehta', category: 'Training & Certification', amount: 14200, date: 'Oct 12, 2026', invoiceNo: 'VUE-AWS-9021', status: 'Pending HR Audit', avatar: 'VM' },
    { id: 'CLM-403', claimant: 'Sneha Roy', dept: 'Product Design', manager: 'Priya Mehta', category: 'Software Tools', amount: 8990, date: 'Oct 09, 2026', invoiceNo: 'FIG-2026-781', status: 'Pending HR Audit', avatar: 'SR' },
    { id: 'CLM-404', claimant: 'Kunal Kapoor', dept: 'Sales & BD', manager: 'Rajeev Nambiar', category: 'Client Travel', amount: 18400, date: 'Oct 15, 2026', invoiceNo: 'AIR-IX-9921', status: 'Pending HR Audit', avatar: 'KK' },
    { id: 'CLM-405', claimant: 'Amit Kumar', dept: 'Engineering', manager: 'Priya Mehta', category: 'Hardware Peripherals', amount: 3200, date: 'Oct 11, 2026', invoiceNo: 'AMZ-99120', status: 'Pending HR Audit', avatar: 'AK' }
  ]);

  const handleAuditApprove = (id: string) => {
    setClaims(prev => prev.map(c => c.id === id ? { ...c, status: 'Passed to Finance' } : c));
  };

  const handleAuditReject = (id: string) => {
    setClaims(prev => prev.map(c => c.id === id ? { ...c, status: 'Rejected' } : c));
  };

  const pendingClaims = claims.filter(c => c.status === 'Pending HR Audit');
  const totalPendingAmount = pendingClaims.reduce((sum, c) => sum + c.amount, 0);

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Expense Claims & Reimbursement Audit"
      description="Perform central HR compliance audit on manager-approved employee expense claims before finance payout."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Payroll' },
        { label: 'Reimbursements Audit' }
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
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Awaiting HR Audit</p>
              <h3 className="text-2xl font-bold text-slate-900">{pendingClaims.length} Claims</h3>
              <p className="text-xs text-amber-600 font-medium">₹{totalPendingAmount.toLocaleString()} total value</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Audit Pass Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">98.1%</h3>
              <p className="text-xs text-emerald-600 font-medium">GST invoices compliant</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Reimbursed in Oct</p>
              <h3 className="text-2xl font-bold text-slate-900">₹1,84,500</h3>
              <p className="text-xs text-blue-600 font-medium">Processed via payroll</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Audit SLA</p>
              <h3 className="text-2xl font-bold text-slate-900">&lt; 48 Hours</h3>
              <p className="text-xs text-purple-600 font-medium">From manager approval</p>
            </div>
          </div>
        </div>

        {/* Claims Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Submitted Employee Expense Claims</h3>
              <p className="text-xs text-slate-500">All claims are endorsed by Department Managers and include GST tax invoices.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Claim ID & Employee</th>
                  <th className="py-3 px-5">Department</th>
                  <th className="py-3 px-5">Endorsing Manager</th>
                  <th className="py-3 px-5">Category</th>
                  <th className="py-3 px-5">Invoice Reference</th>
                  <th className="py-3 px-5">Claim Amount</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-right">Audit Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {claims.map((claim) => (
                  <tr key={claim.id} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                          {claim.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{claim.claimant}</p>
                          <p className="text-[11px] font-mono text-slate-400">{claim.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-5">{claim.dept}</td>
                    <td className="py-3.5 px-5 text-slate-600">{claim.manager}</td>
                    <td className="py-3.5 px-5">
                      <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-semibold">
                        {claim.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-mono text-slate-500">{claim.invoiceNo}</td>
                    <td className="py-3.5 px-5 font-black text-slate-900 text-sm">₹{claim.amount.toLocaleString()}</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        claim.status === 'Passed to Finance' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        claim.status === 'Pending HR Audit' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {claim.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      {claim.status === 'Pending HR Audit' ? (
                        <div className="flex items-center justify-end gap-1.5">
                          <button 
                            onClick={() => handleAuditReject(claim.id)}
                            className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            title="Reject"
                          >
                            <X size={15} />
                          </button>
                          <button 
                            onClick={() => handleAuditApprove(claim.id)}
                            className="px-2.5 py-1 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg shadow-xs transition flex items-center gap-1"
                          >
                            <Check size={13} /> Pass
                          </button>
                        </div>
                      ) : (
                        <span className="text-slate-400 text-xs">Logged</span>
                      )}
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
