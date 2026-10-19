import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  PieChart, HeartHandshake, ShieldCheck, Download, 
  TrendingUp, Award, CheckCircle2, ChevronRight, FileText, ExternalLink
} from 'lucide-react';

export function EmployeeBenefits() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="ESOPs & Benefits"
      description="Equity stock option grants, group health insurance, and corporate wellness benefits."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Finance' },
        { label: 'ESOPs & Benefits' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-violet-50 text-violet-600 rounded-lg">
                <PieChart size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">ESOP Equity & Corporate Benefits</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-violet-50 text-violet-700 border border-violet-200">
                ESOP Scheme 2023
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Vesting progress, current share valuation, and comprehensive family health coverage.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Download Grant Letter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Download size={14} />
              Download TPA Health e-Card
            </button>
          </div>
        </div>

        {/* 4 ESOP & Benefits KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total Options Granted</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><PieChart size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">4,000 Units</div>
            <div className="mt-1 text-xs text-slate-500">Strike Price: ₹120.00 / share</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Vested Options</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">1,500 Vested</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">37.5% exercisable equity</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Current Portfolio FMV</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><TrendingUp size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹19,20,000</div>
            <div className="mt-1 text-xs text-slate-500">Latest 409A Fair Market Value: ₹480</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Health Insurance Cover</span>
              <span className="p-2 bg-rose-50 text-rose-600 rounded-lg"><HeartHandshake size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹10,00,000</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">HDFC ERGO 100% Cashless</div>
          </div>
        </div>

        {/* ESOP Vesting Progress Bar Card */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800">4-Year ESOP Vesting Schedule (1-Year Cliff)</h3>
              <p className="text-xs text-slate-500 mt-0.5">Grant Date: August 14, 2023 • Scheme: LinkUp Technologies ESOP 2023</p>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
              Next Tranche: 1,000 units on Aug 14, 2027
            </span>
          </div>

          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden flex">
            <div className="bg-emerald-500 h-full" style={{ width: '37.5%' }} title="Vested: 1,500 (37.5%)" />
            <div className="bg-blue-300 h-full" style={{ width: '62.5%' }} title="Unvested: 2,500 (62.5%)" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-500 text-[11px]">Tranche 1 (Aug 2024)</span>
              <div className="font-bold text-slate-800 mt-1">1,000 Units • Vested</div>
              <span className="text-[10px] text-emerald-600 font-semibold">1-Year Cliff Satisfied</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl">
              <span className="text-slate-500 text-[11px]">Tranche 2 (Aug 2025)</span>
              <div className="font-bold text-slate-800 mt-1">500 Units • Vested</div>
              <span className="text-[10px] text-emerald-600 font-semibold">Vested on Schedule</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl opacity-70">
              <span className="text-slate-500 text-[11px]">Tranche 3 (Aug 2027)</span>
              <div className="font-bold text-slate-800 mt-1">1,000 Units • Unvested</div>
              <span className="text-[10px] text-slate-400 font-medium">Pending 3rd Year tenure</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl opacity-70">
              <span className="text-slate-500 text-[11px]">Tranche 4 (Aug 2028)</span>
              <div className="font-bold text-slate-800 mt-1">1,500 Units • Unvested</div>
              <span className="text-[10px] text-slate-400 font-medium">Final Vesting Tranche</span>
            </div>
          </div>
        </div>

        {/* Group Health Insurance Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-slate-100 gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-rose-50 text-rose-600 rounded-md">
                  <HeartHandshake size={18} />
                </span>
                <h3 className="text-sm font-bold text-slate-800">Corporate Group Medical Insurance (GMC)</h3>
              </div>
              <p className="text-xs text-slate-500 mt-1">HDFC ERGO General Insurance • Policy ID: <strong>POL-LINKUP-2026-0941</strong></p>
            </div>
            <button className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition flex items-center gap-1.5 self-start md:self-auto">
              <Download size={14} /> Download Policy e-Card
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-xs">
            <div className="space-y-2">
              <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">Covered Beneficiaries</span>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1.5">
                <div className="flex justify-between"><strong className="text-slate-800">Rahul Sharma</strong> <span className="text-slate-500">Self (Employee)</span></div>
                <div className="flex justify-between"><strong className="text-slate-800">Neha Sharma</strong> <span className="text-slate-500">Spouse</span></div>
                <div className="flex justify-between"><strong className="text-slate-800">Kavita Sharma</strong> <span className="text-slate-500">Mother (Dependent)</span></div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">Key Policy Features</span>
              <div className="p-3 bg-slate-50 rounded-xl space-y-1 text-slate-600">
                <div>• ₹10,00,000 Total Sum Insured</div>
                <div>• Zero Waiting Period for Pre-existing conditions</div>
                <div>• Maternity Cover up to ₹75,000</div>
                <div>• OPD Doctor Consultation Reimbursement (₹10k/yr)</div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-slate-500 font-semibold uppercase text-[10px] tracking-wider">TPA Emergency Helpline</span>
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1">
                <div className="font-bold text-emerald-900">MediAssist TPA 24x7 Desk</div>
                <div className="font-mono text-emerald-700 font-semibold">Toll-free: 1800-425-9449</div>
                <div className="text-[11px] text-emerald-800">Cashless desk available at Manipal, Fortis & Apollo</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
