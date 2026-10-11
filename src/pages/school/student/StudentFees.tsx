import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { WalletCards, CheckCircle2, Clock, Download, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function StudentFees() {
  const user = USERS.student;

  const quarters = [
    { quarter: 'Quarter 1 (Apr - Jun)', amount: '₹22,500', status: 'Paid', date: '08 Apr 2026', receiptNo: 'REC-2026-0842' },
    { quarter: 'Quarter 2 (Jul - Sep)', amount: '₹22,500', status: 'Paid', date: '05 Jul 2026', receiptNo: 'REC-2026-1930' },
    { quarter: 'Quarter 3 (Oct - Dec)', amount: '₹22,500', status: 'Upcoming', dueDate: 'Due by 15 Nov 2026', receiptNo: '-' },
    { quarter: 'Quarter 4 (Jan - Mar)', amount: '₹22,500', status: 'Pending', dueDate: 'Due by 15 Feb 2027', receiptNo: '-' },
  ];

  const breakdown = [
    { head: 'Tuition & Academic Instruction Fee', annual: '₹60,000', perQtr: '₹15,000' },
    { head: 'Science & Computer Lab Maintenance', annual: '₹14,000', perQtr: '₹3,500' },
    { head: 'Library & Digital Learning Resources', annual: '₹8,000', perQtr: '₹2,000' },
    { head: 'Sports Complex & Development Fund', annual: '₹8,000', perQtr: '₹2,000' },
  ];

  const transactions = [
    { id: 'TXN-902184', date: '05 Jul 2026', quarter: 'Quarter 2 Fee', amount: '₹22,500', mode: 'Net Banking (HDFC)', status: 'Success', receipt: 'REC-2026-1930.pdf' },
    { id: 'TXN-881023', date: '08 Apr 2026', quarter: 'Quarter 1 Fee', amount: '₹22,500', mode: 'UPI (Razorpay)', status: 'Success', receipt: 'REC-2026-0842.pdf' },
    { id: 'TXN-764910', date: '15 Mar 2026', quarter: 'Annual Registration & Admission', amount: '₹10,000', mode: 'Card Payment', status: 'Success', receipt: 'REC-2026-0012.pdf' },
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Fees & Invoices"
      description="View quarterly institutional fee breakdown, payment receipts, and upcoming due dates."
    >
      <div className="space-y-6">

        {/* Top 3 Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="text-xs text-slate-500 font-semibold uppercase">Total Annual Fee</span>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">₹90,000</p>
            <p className="text-xs text-slate-500 mt-1">Academic Session 2026 - 2027</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <span className="text-xs text-slate-500 font-semibold uppercase">Total Paid to Date</span>
            <p className="text-3xl font-extrabold text-emerald-600 mt-2">₹45,000</p>
            <p className="text-xs text-slate-500 mt-1">Quarters 1 & 2 fully settled</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-semibold uppercase">Next Installment</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-50 text-amber-700">Due Nov 15</span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 mt-2">₹22,500</p>
            <p className="text-xs text-slate-500 mt-1">Quarter 3 (Oct - Dec 2026)</p>
          </div>
        </div>

        {/* Quarterly Installment Status */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h2 className="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">
            Quarterly Payment Schedule
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quarters.map((q, i) => {
              const isPaid = q.status === 'Paid';
              const isUpcoming = q.status === 'Upcoming';
              return (
                <div key={i} className={`p-4 rounded-xl border flex flex-col justify-between ${
                  isPaid ? 'bg-emerald-50/30 border-emerald-100' :
                  isUpcoming ? 'bg-amber-50/30 border-amber-200' : 'bg-slate-50/50 border-slate-100'
                }`}>
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        isPaid ? 'bg-emerald-100 text-emerald-800' :
                        isUpcoming ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {q.status}
                      </span>
                      {isPaid && <CheckCircle2 size={15} className="text-emerald-600" />}
                    </div>
                    <h4 className="text-xs font-bold text-slate-800">{q.quarter}</h4>
                    <p className="text-xl font-extrabold text-slate-900 mt-1">{q.amount}</p>
                    <p className="text-[11px] text-slate-500 mt-1">
                      {isPaid ? `Paid on ${q.date}` : q.dueDate}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-slate-100/80">
                    {isPaid ? (
                      <span className="text-[11px] font-mono text-slate-400">
                        Receipt: {q.receiptNo}
                      </span>
                    ) : isUpcoming ? (
                      <button className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors">
                        Pay Online Now
                      </button>
                    ) : (
                      <span className="text-[11px] text-slate-400">Opens Jan 2027</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Fee Structure & History Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Fee Heads Breakdown (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Institutional Fee Structure
            </h3>
            <div className="space-y-3 text-xs">
              {breakdown.map((item, i) => (
                <div key={i} className="p-3 rounded-xl border border-slate-100 bg-slate-50/40 flex justify-between items-center">
                  <div>
                    <p className="font-bold text-slate-800">{item.head}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{item.perQtr} / Quarter</p>
                  </div>
                  <span className="font-mono font-bold text-slate-900">{item.annual}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Transaction History (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <h3 className="text-sm font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
              Payment & Receipt History
            </h3>

            <div className="space-y-3 text-xs">
              {transactions.map((txn, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-100 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{txn.quarter}</span>
                      <span className="font-mono text-[10px] text-slate-400">{txn.id}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      {txn.date} • {txn.mode}
                    </p>
                  </div>

                  <div className="text-right flex items-center gap-3">
                    <div>
                      <p className="font-mono font-bold text-slate-900 text-sm">{txn.amount}</p>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                        Settled
                      </span>
                    </div>
                    <button className="p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors" title="Download Receipt">
                      <Download size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
