import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CreditCard, IndianRupee, CheckCircle2, Clock, 
  Download, FileText, Send, AlertCircle, Building2, 
  ArrowUpRight, Users, Sparkles, ShieldCheck
} from 'lucide-react';

export function HrPayroll() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [payrollDispatched, setPayrollDispatched] = useState(false);

  const deptPayroll = [
    { name: 'Engineering & Technology', employees: 68, grossPay: '₹98,40,000', netPay: '₹78,20,000', tds: '₹14,50,000', pf: '₹5,70,000', status: 'Verified' },
    { name: 'Sales & Business Development', employees: 28, grossPay: '₹38,20,000', netPay: '₹30,80,000', tds: '₹5,10,000', pf: '₹2,30,000', status: 'Verified' },
    { name: 'Operations & Facilities', employees: 20, grossPay: '₹22,50,000', netPay: '₹18,40,000', tds: '₹2,60,000', pf: '₹1,50,000', status: 'Verified' },
    { name: 'Product & Design', employees: 16, grossPay: '₹24,80,000', netPay: '₹19,90,000', tds: '₹3,40,000', pf: '₹1,50,000', status: 'Verified' },
    { name: 'Human Resources & Talent', employees: 9, grossPay: '₹12,40,000', netPay: '₹10,10,000', tds: '₹1,40,000', pf: '₹90,000', status: 'Verified' },
    { name: 'Finance & Accounts', employees: 8, grossPay: '₹11,80,000', netPay: '₹9,60,000', tds: '₹1,40,000', pf: '₹80,000', status: 'Verified' }
  ];

  const handleDispatch = () => {
    setPayrollDispatched(true);
    setTimeout(() => alert('HDFC Corporate Banking NACH/NEFT Batch Dispatched successfully. All 149 payslips encrypted and emailed.'), 500);
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Monthly Payroll Operations & Statutory Compliance"
      description="Review monthly salary registers, tax TDS deductions, statutory PF/ESI remittances, and batch dispatches."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Payroll' },
        { label: 'Payroll Processing' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Gross Payroll</p>
              <h3 className="text-2xl font-bold text-slate-900">₹2.08 Cr</h3>
              <p className="text-xs text-blue-600 font-medium">October 2026 Run</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Net Bank Payout</p>
              <h3 className="text-2xl font-bold text-slate-900">₹1.67 Cr</h3>
              <p className="text-xs text-emerald-600 font-medium">149 employees covered</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">TDS Withheld (IT Dept)</p>
              <h3 className="text-2xl font-bold text-slate-900">₹28.4 Lakhs</h3>
              <p className="text-xs text-purple-600 font-medium">Challan 281 scheduled</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Payday Cutoff</p>
              <h3 className="text-2xl font-bold text-slate-900">Oct 30</h3>
              <p className="text-xs text-amber-600 font-medium">Bank clearance on time</p>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                payrollDispatched ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-blue-50 text-blue-700 border border-blue-200'
              }`}>
                {payrollDispatched ? 'Dispatched to Corporate Bank' : 'October 2026 Run Ready'}
              </span>
              <span className="text-xs text-slate-400 font-mono">CYCLE-2026-10</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900">October 2026 Salary Register & Banking NACH File</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Verified with attendance biometric swipes, approved manager leaves, and tax declarations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => alert('Downloading master salary register CSV...')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Download size={14} /> Download Register
            </button>
            <button 
              onClick={handleDispatch}
              disabled={payrollDispatched}
              className="flex items-center gap-2 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl shadow-sm transition"
            >
              <Send size={14} /> {payrollDispatched ? 'Payroll Dispatched ✓' : 'Authorize & Dispatch Batch'}
            </button>
          </div>
        </div>

        {/* Department-wise Payroll Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Department Payroll Distribution</h3>
              <p className="text-xs text-slate-500">Breakdown of gross, statutory withholdings, and net salary credit.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Department</th>
                  <th className="py-3 px-5">Employees</th>
                  <th className="py-3 px-5">Gross Pay</th>
                  <th className="py-3 px-5">TDS Withheld</th>
                  <th className="py-3 px-5">PF Contribution</th>
                  <th className="py-3 px-5">Net Bank Disbursement</th>
                  <th className="py-3 px-5">Audit State</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {deptPayroll.map((dp, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5 font-bold text-slate-900">{dp.name}</td>
                    <td className="py-3.5 px-5 font-semibold text-slate-700">{dp.employees} Staff</td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">{dp.grossPay}</td>
                    <td className="py-3.5 px-5 text-rose-600 font-semibold">{dp.tds}</td>
                    <td className="py-3.5 px-5 text-slate-600">{dp.pf}</td>
                    <td className="py-3.5 px-5 font-black text-blue-600">{dp.netPay}</td>
                    <td className="py-3.5 px-5">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ {dp.status}
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
