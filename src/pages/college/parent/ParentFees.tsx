import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CreditCard, CheckCircle2, Download, ShieldCheck, 
  Receipt, ArrowRight, ExternalLink, Calendar
} from 'lucide-react';

export function ParentFees() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const paymentHistory = [
    { sem: 'Semester VII', date: '02 Aug 2026', amount: '₹85,000', txnId: 'TXN-APX-891024', status: 'Paid (Success)', receiptNo: 'REC-2026-7842' },
    { sem: 'Semester VI', date: '10 Jan 2026', amount: '₹80,000', txnId: 'TXN-APX-742190', status: 'Paid (Success)', receiptNo: 'REC-2026-5120' },
    { sem: 'Semester V', date: '04 Aug 2025', amount: '₹80,000', txnId: 'TXN-APX-609123', status: 'Paid (Success)', receiptNo: 'REC-2025-3914' },
    { sem: 'Semester IV', date: '12 Jan 2025', amount: '₹75,000', txnId: 'TXN-APX-491204', status: 'Paid (Success)', receiptNo: 'REC-2025-2109' },
    { sem: 'Semester III', date: '08 Aug 2024', amount: '₹75,000', txnId: 'TXN-APX-382901', status: 'Paid (Success)', receiptNo: 'REC-2024-1082' },
    { sem: 'Semester II', date: '15 Jan 2024', amount: '₹70,000', txnId: 'TXN-APX-204918', status: 'Paid (Success)', receiptNo: 'REC-2024-0491' },
    { sem: 'Semester I', date: '14 Aug 2023', amount: '₹70,000', txnId: 'TXN-APX-103948', status: 'Paid (Success)', receiptNo: 'REC-2023-0102' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Fee Ledger & Receipts" 
      description="Official tuition fee receipts, semester billing history, and Income Tax 80C deduction certificates."
    >
      {/* Zero Dues Ribbon */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-800 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-emerald-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Odd Semester 2026-27
              </span>
              <span className="bg-emerald-400/30 text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-300/30 flex items-center gap-1">
                <CheckCircle2 size={12} /> Accounts NOC Active
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">₹0 Pending Dues</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              Semester VII tuition and lab fees (₹85,000) cleared in full • No hold on exam hall tickets or placement interviews.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-slate-50 transition-all shadow-md">
              <Download size={14} />
              <span>Section 80C Tax Receipt (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Current Semester Fee Itemization */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-8">
        <h3 className="text-base font-bold text-slate-800 mb-4">Semester VII Fee Breakdown (Paid)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Tuition Fee</span>
            <span className="text-lg font-black text-slate-800 mt-1 block">₹65,000</span>
            <span className="text-emerald-600 font-semibold text-[11px]">Paid via HDFC NetBanking</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Lab & Computing Infrastructure</span>
            <span className="text-lg font-black text-slate-800 mt-1 block">₹12,000</span>
            <span className="text-slate-500 text-[11px]">AI Lab & Cloud Server Access</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Examination & COE Fee</span>
            <span className="text-lg font-black text-slate-800 mt-1 block">₹4,000</span>
            <span className="text-slate-500 text-[11px]">Mid-Sem & End-Sem Evaluation</span>
          </div>
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] font-bold uppercase text-slate-400 block">Library & IEEE E-Journals</span>
            <span className="text-lg font-black text-slate-800 mt-1 block">₹4,000</span>
            <span className="text-slate-500 text-[11px]">Full digital library access</span>
          </div>
        </div>
      </div>

      {/* Payment History Ledger */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden mb-8">
        <div className="p-5 sm:p-6 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Historical Fee Payment Ledger</h3>
          <p className="text-xs text-slate-500">Cumulative institutional payments made from Semester 1 to Semester 7 (Total: ₹5,35,000).</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Semester</th>
                <th className="py-3.5 px-4">Date of Payment</th>
                <th className="py-3.5 px-4">Transaction Reference</th>
                <th className="py-3.5 px-4 text-center">Amount Paid</th>
                <th className="py-3.5 px-4 text-center">Status</th>
                <th className="py-3.5 px-4 text-right">Official Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {paymentHistory.map((p, i) => (
                <tr key={i} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-4 px-4 font-bold text-slate-900">{p.sem}</td>
                  <td className="py-4 px-4 text-slate-500">{p.date}</td>
                  <td className="py-4 px-4 font-mono text-slate-600">{p.txnId}</td>
                  <td className="py-4 px-4 text-center font-mono font-bold text-slate-900">{p.amount}</td>
                  <td className="py-4 px-4 text-center">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-right">
                    <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-all">
                      <Download size={13} />
                      <span>{p.receiptNo}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}
