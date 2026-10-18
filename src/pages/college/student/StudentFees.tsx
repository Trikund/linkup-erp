import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CreditCard, CheckCircle2, Download, Receipt, ArrowRight, 
  ShieldCheck, AlertCircle, Clock, X, DollarSign, QrCode
} from 'lucide-react';

export function StudentFees() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [payModal, setPayModal] = useState(false);
  const [paymentDone, setPaymentDone] = useState(false);

  const payments = [
    { receiptNo: 'COL-2026-7842', sem: 'Semester VII', date: '15 Jul 2026', mode: 'HDFC NetBanking (Ref: #9842109)', amount: '₹85,000', status: 'Paid', taxExempt: 'Eligible (80C)' },
    { receiptNo: 'COL-2026-2104', sem: 'Semester VI', date: '12 Jan 2026', mode: 'UPI (shivam@okhdfcbank)', amount: '₹85,000', status: 'Paid', taxExempt: 'Eligible (80C)' },
    { receiptNo: 'COL-2025-8941', sem: 'Semester V', date: '18 Jul 2025', mode: 'HDFC NetBanking', amount: '₹80,000', status: 'Paid', taxExempt: 'Eligible (80C)' },
    { receiptNo: 'COL-2025-1192', sem: 'Semester IV', date: '10 Jan 2025', mode: 'Credit Card', amount: '₹80,000', status: 'Paid', taxExempt: 'Eligible (80C)' },
  ];

  const handlePay = (e: React.FormEvent) => {
    e.preventDefault();
    setPayModal(false);
    setPaymentDone(true);
    setTimeout(() => setPaymentDone(false), 5000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Fees & Online Payments" 
      description="Official Tuition Ledger • Downloadable GST Receipts • Online Payment Gateway"
    >
      {/* Toast Alert */}
      {paymentDone && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">Payment of ₹85,000 processed! Receipt #COL-2027-0194 generated.</span>
        </div>
      )}

      {/* Top Ledger Summary Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> Current Semester (Sem VII) Cleared
              </span>
              <span className="text-xs text-slate-400 font-medium">B.Tech CSE • Batch 2023-2027</span>
            </div>
            <h2 className="text-3xl font-black text-slate-900">₹0 Pending Dues</h2>
            <p className="text-xs text-slate-500 mt-1">
              Receipt #COL-2026-7842 • Paid on 15 July 2026 • Validated by Accounts Branch
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setPayModal(true)}
              className="px-5 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
            >
              Pay Semester VIII Advance
            </button>
            <button 
              onClick={() => alert('Downloading Annual Section 80C Consolidated Tuition Tax Certificate PDF...')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <Download size={14} />
              <span>Tax Certificate (80C)</span>
            </button>
          </div>
        </div>

        {/* Breakdown Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Academic Tuition Fee</span>
            <span className="font-black text-slate-800 text-base">₹65,000</span>
            <span className="text-[11px] text-emerald-600 block mt-0.5">Paid & Verified</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Lab, Internet & Cloud Infra</span>
            <span className="font-black text-slate-800 text-base">₹12,000</span>
            <span className="text-[11px] text-emerald-600 block mt-0.5">Paid & Verified</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">University Library & Exam Fund</span>
            <span className="font-black text-slate-800 text-base">₹8,000</span>
            <span className="text-[11px] text-emerald-600 block mt-0.5">Paid & Verified</span>
          </div>
        </div>
      </div>

      {/* Payment Receipts History */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7 mb-8">
        <h3 className="text-base font-bold text-slate-900 mb-4">Official Payment Receipts Register</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-3.5 px-4">Receipt Number</th>
                <th className="py-3.5 px-3">Semester</th>
                <th className="py-3.5 px-3">Date</th>
                <th className="py-3.5 px-4">Payment Method / Ref</th>
                <th className="py-3.5 px-3 text-right">Amount</th>
                <th className="py-3.5 px-3 text-center">Status</th>
                <th className="py-3.5 px-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {payments.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-[#7c3aed]">{p.receiptNo}</td>
                  <td className="py-3.5 px-3 font-semibold text-slate-800">{p.sem}</td>
                  <td className="py-3.5 px-3 text-slate-500 font-medium">{p.date}</td>
                  <td className="py-3.5 px-4 text-slate-600">{p.mode}</td>
                  <td className="py-3.5 px-3 text-right font-black text-slate-900">{p.amount}</td>
                  <td className="py-3.5 px-3 text-center">
                    <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {p.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <button 
                      onClick={() => alert(`Downloading verified GST invoice for ${p.receiptNo} (${p.sem})...`)}
                      className="inline-flex items-center gap-1 text-[#7c3aed] font-bold hover:underline"
                    >
                      <Download size={13} />
                      <span>PDF Receipt</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Gateway Modal */}
      {payModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-xs">
            <div className="flex justify-between items-center pb-3 border-b mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Apex University Fee Portal</h3>
                <p className="text-slate-500">Semester VIII Advance Fee Clearance</p>
              </div>
              <button onClick={() => setPayModal(false)} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                <X size={18} />
              </button>
            </div>

            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-4 mb-4">
              <span className="text-[10px] uppercase font-bold text-purple-700 block">Total Payable Amount</span>
              <span className="text-2xl font-black text-[#7c3aed]">₹85,000.00</span>
              <p className="text-slate-500 mt-1 text-[11px]">Includes Tuition, Lab, and Final Convocation Certification fee.</p>
            </div>

            <form onSubmit={handlePay} className="space-y-3.5">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Select Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {['UPI / QR', 'NetBanking', 'Debit/Credit'].map((m) => (
                    <button 
                      key={m} 
                      type="button" 
                      className="p-2 border rounded-xl font-bold text-center bg-slate-50 hover:bg-purple-50 hover:text-[#7c3aed] border-slate-200"
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">UPI ID or Virtual Payment Address (VPA)</label>
                <input 
                  type="text" 
                  defaultValue="shivam@okhdfcbank" 
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" 
                />
              </div>

              <div className="pt-3 border-t flex justify-end gap-2">
                <button 
                  type="button" 
                  onClick={() => setPayModal(false)} 
                  className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 font-bold bg-[#7c3aed] text-white hover:bg-purple-700 rounded-xl shadow-md"
                >
                  Confirm & Pay ₹85,000
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
