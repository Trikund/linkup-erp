import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  PieChart, IndianRupee, TrendingUp, Award, 
  ShieldCheck, AlertCircle, Users, Sparkles, 
  ChevronRight, ArrowUpRight, BarChart2
} from 'lucide-react';

interface CompensationBand {
  level: string;
  title: string;
  minCTC: number;
  medianCTC: number;
  maxCTC: number;
  membersInBand: number;
}

export function ManagerCompensation() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const bands: CompensationBand[] = [
    { level: 'IC1', title: 'Associate Software Engineer', minCTC: 800000, medianCTC: 1100000, maxCTC: 1400000, membersInBand: 1 },
    { level: 'IC2', title: 'Software Engineer II', minCTC: 1400000, medianCTC: 1800000, maxCTC: 2300000, membersInBand: 2 },
    { level: 'IC3', title: 'Senior Software Engineer', minCTC: 2300000, medianCTC: 2950000, maxCTC: 3800000, membersInBand: 4 },
    { level: 'IC4', title: 'Staff Engineer / Tech Lead', minCTC: 3800000, medianCTC: 4600000, maxCTC: 5800000, membersInBand: 1 }
  ];

  const teamComp = [
    { name: 'Rahul Sharma', role: 'Senior Frontend Developer', level: 'IC3', ctc: '₹28,50,000', compaRatio: '0.97', esopUnits: '1,800 units', lastHike: '14.5% (Apr 2026)', perf: 'Exceeds Expectations' },
    { name: 'Vikram Malhotra', role: 'Senior Backend Engineer', level: 'IC3', ctc: '₹31,00,000', compaRatio: '1.05', esopUnits: '2,200 units', lastHike: '16.0% (Apr 2026)', perf: 'Outstanding' },
    { name: 'Sneha Roy', role: 'Senior Product Designer', level: 'IC3', ctc: '₹27,00,000', compaRatio: '0.92', esopUnits: '1,500 units', lastHike: '12.0% (Apr 2026)', perf: 'Meets Expectations' },
    { name: 'Amit Kumar', role: 'Lead QA Automation', level: 'IC4', ctc: '₹42,00,000', compaRatio: '0.91', esopUnits: '3,500 units', lastHike: '13.0% (Apr 2026)', perf: 'Exceeds Expectations' },
    { name: 'Rohan Das', role: 'Frontend Engineer II', level: 'IC2', ctc: '₹17,50,000', compaRatio: '0.97', esopUnits: '800 units', lastHike: '15.0% (Apr 2026)', perf: 'Meets Expectations' },
    { name: 'Neha Verma', role: 'Associate Software Engineer', level: 'IC1', ctc: '₹10,50,000', compaRatio: '0.95', esopUnits: '400 units', lastHike: 'First Year', perf: 'Fast Learner' },
    { name: 'Siddharth Rao', role: 'DevOps & SRE', level: 'IC3', ctc: '₹29,00,000', compaRatio: '0.98', esopUnits: '2,000 units', lastHike: '15.0% (Apr 2026)', perf: 'Exceeds Expectations' },
    { name: 'Ananya Sen', role: 'Backend Engineer II', level: 'IC2', ctc: '₹16,80,000', compaRatio: '0.93', esopUnits: '750 units', lastHike: '12.5% (Apr 2026)', perf: 'Meets Expectations' }
  ];

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Salary & Compensation Calibration"
      description="View engineering band benchmarks, market parity compa-ratios, and merit increment planning."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Financials & Approvals' },
        { label: 'Salary & Compensation' }
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
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Annual Payroll</p>
              <h3 className="text-2xl font-bold text-slate-900">₹2.02 Cr</h3>
              <p className="text-xs text-blue-600 font-medium">8 Engineers (Pod 4)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Average Compa-Ratio</p>
              <h3 className="text-2xl font-bold text-slate-900">0.96</h3>
              <p className="text-xs text-emerald-600 font-medium">Healthy market parity (0.95 - 1.05)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Merit Pool FY27</p>
              <h3 className="text-2xl font-bold text-slate-900">₹26.5 Lakhs</h3>
              <p className="text-xs text-purple-600 font-medium">13.1% discretionary budget</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total ESOP Pool</p>
              <h3 className="text-2xl font-bold text-slate-900">12,950</h3>
              <p className="text-xs text-amber-600 font-medium">Vesting over 4 years</p>
            </div>
          </div>
        </div>

        {/* Salary Bands Benchmarks */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Engineering Level Salary Bands (Bengaluru Market Benchmark)</h3>
              <p className="text-xs text-slate-500">Based on Mercer & Radford 2026 Tech Salary Survey.</p>
            </div>
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Updated Q3 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {bands.map((b) => (
              <div key={b.level} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-slate-900 text-white">{b.level}</span>
                    <span className="text-[11px] font-semibold text-blue-600">{b.membersInBand} engineers</span>
                  </div>
                  <h4 className="text-xs font-bold text-slate-800 leading-snug">{b.title}</h4>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Min:</span>
                    <span className="font-semibold text-slate-800">₹{(b.minCTC / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex justify-between text-blue-600 font-bold">
                    <span>Median:</span>
                    <span>₹{(b.medianCTC / 100000).toFixed(1)}L</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Max:</span>
                    <span className="font-semibold text-slate-800">₹{(b.maxCTC / 100000).toFixed(1)}L</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pod 4 Compensation Roster */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Direct Reports Compensation Table</h3>
              <p className="text-xs text-slate-500">Confidential manager view for merit calibration and retention management.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Engineer</th>
                  <th className="py-3 px-5">Level</th>
                  <th className="py-3 px-5">Current Base CTC</th>
                  <th className="py-3 px-5">Compa-Ratio</th>
                  <th className="py-3 px-5">ESOP Equity</th>
                  <th className="py-3 px-5">Last Increment</th>
                  <th className="py-3 px-5">Performance Tier</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {teamComp.map((tc, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5">
                      <p className="font-bold text-slate-900">{tc.name}</p>
                      <p className="text-[11px] text-slate-400">{tc.role}</p>
                    </td>
                    <td className="py-3.5 px-5 font-bold text-slate-800">{tc.level}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">{tc.ctc}</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        Number(tc.compaRatio) >= 1.0 ? 'bg-purple-50 text-purple-700' :
                        Number(tc.compaRatio) >= 0.95 ? 'bg-emerald-50 text-emerald-700' :
                        'bg-amber-50 text-amber-700'
                      }`}>
                        {tc.compaRatio}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-slate-700">{tc.esopUnits}</td>
                    <td className="py-3.5 px-5 text-slate-600">{tc.lastHike}</td>
                    <td className="py-3.5 px-5">
                      <span className="font-semibold text-blue-600">{tc.perf}</span>
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
