import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  PieChart, IndianRupee, TrendingUp, Award, 
  Users, CheckCircle2, AlertCircle, ArrowUpRight, 
  Download, Sparkles, ShieldCheck
} from 'lucide-react';

export function HrCompensation() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };

  const compensationBands = [
    { level: 'IC1', title: 'Associate Engineer / Analyst', min: '₹7.5L', median: '₹10.5L', max: '₹13.5L', headcount: 22, avgCompa: '0.96' },
    { level: 'IC2', title: 'Software Engineer II / Specialist', min: '₹14.0L', median: '₹18.0L', max: '₹22.0L', headcount: 44, avgCompa: '0.98' },
    { level: 'IC3', title: 'Senior Software Engineer / Senior Designer', min: '₹23.0L', median: '₹29.5L', max: '₹37.0L', headcount: 48, avgCompa: '0.97' },
    { level: 'IC4', title: 'Staff Engineer / Lead Specialist', min: '₹38.0L', median: '₹46.0L', max: '₹56.0L', headcount: 18, avgCompa: '1.02' },
    { level: 'IC5', title: 'Principal Engineer / Architect', min: '₹58.0L', median: '₹70.0L', max: '₹85.0L', headcount: 6, avgCompa: '1.04' },
    { level: 'M1', title: 'Engineering / Functional Manager', min: '₹38.0L', median: '₹48.0L', max: '₹60.0L', headcount: 8, avgCompa: '0.99' },
    { level: 'M2', title: 'Director / Group Lead', min: '₹65.0L', median: '₹82.0L', max: '₹1.05 Cr', headcount: 3, avgCompa: '1.01' }
  ];

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Salary Bands & Equity Compensation Benchmarks"
      description="Monitor market parity compa-ratios, ESOP equity reserves, and annual merit review allocations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Payroll' },
        { label: 'Salary Bands & Equity' }
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
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Annual Payroll Base</p>
              <h3 className="text-2xl font-bold text-slate-900">₹24.96 Cr</h3>
              <p className="text-xs text-blue-600 font-medium">149 employees total</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Org Compa-Ratio</p>
              <h3 className="text-2xl font-bold text-slate-900">0.98</h3>
              <p className="text-xs text-emerald-600 font-medium">96% market parity target</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">ESOP Pool Granted</p>
              <h3 className="text-2xl font-bold text-slate-900">54,200</h3>
              <p className="text-xs text-purple-600 font-medium">30,800 units reserve</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Merit Review Pool</p>
              <h3 className="text-2xl font-bold text-slate-900">₹1.80 Cr</h3>
              <p className="text-xs text-amber-600 font-medium">FY27 increment budget</p>
            </div>
          </div>
        </div>

        {/* Salary Bands Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Level Salary Bands & Market Medians (Bengaluru / NCR)</h3>
              <p className="text-xs text-slate-500">Radford & Aon Hewitt tech industry benchmark data.</p>
            </div>
            <button 
              onClick={() => alert('Salary band survey benchmark report exported.')}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
            >
              <Download size={14} /> Export Bands
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Level Code</th>
                  <th className="py-3 px-5">Corporate Role Benchmark</th>
                  <th className="py-3 px-5">Min Base CTC</th>
                  <th className="py-3 px-5">Market Median</th>
                  <th className="py-3 px-5">Max Base CTC</th>
                  <th className="py-3 px-5">Headcount</th>
                  <th className="py-3 px-5">Compa-Ratio</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {compensationBands.map((band) => (
                  <tr key={band.level} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5">
                      <span className="px-2 py-0.5 rounded text-xs font-mono font-bold bg-slate-900 text-white">
                        {band.level}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">{band.title}</td>
                    <td className="py-3.5 px-5 text-slate-600">{band.min}</td>
                    <td className="py-3.5 px-5 font-bold text-blue-600">{band.median}</td>
                    <td className="py-3.5 px-5 text-slate-600">{band.max}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{band.headcount} Staff</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        Number(band.avgCompa) >= 1.0 ? 'bg-purple-50 text-purple-700' : 'bg-emerald-50 text-emerald-700'
                      }`}>
                        {band.avgCompa}
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
