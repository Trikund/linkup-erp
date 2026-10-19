import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  TrendingUp, Award, Users, CheckCircle2, 
  Star, AlertCircle, Sparkles, ChevronRight, 
  BarChart3, FileText, Check, ArrowUpRight
} from 'lucide-react';

export function HrPerformance() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [promotions, setPromotions] = useState([
    {
      id: 'PROM-ENG-01',
      candidate: 'Rahul Sharma',
      current: 'Senior Frontend Developer (IC3)',
      proposed: 'Staff Frontend Engineer (IC4)',
      dept: 'Engineering (Pod 4)',
      sponsor: 'Priya Mehta & Siddharth Mehta',
      justification: 'Architected WebAuthn 2FA, 40% reduction in Core Web Vitals LCP, mentored 2 junior engineers.',
      ctcImpact: '+18.5% (to ₹33,80,000)',
      status: 'Awaiting HRBP Final Signoff',
      avatar: 'RS'
    },
    {
      id: 'PROM-PRD-02',
      candidate: 'Sneha Roy',
      current: 'Senior Product Designer (IC3)',
      proposed: 'Lead Product Designer (IC4)',
      dept: 'Product Design',
      sponsor: 'Aruna Roy',
      justification: 'Authored multi-brand Figma token library, unified mobile/web UI components across 4 apps.',
      ctcImpact: '+16.0% (to ₹31,50,000)',
      status: 'Awaiting HRBP Final Signoff',
      avatar: 'SR'
    }
  ]);

  const nineBoxSummary = [
    { name: 'Top Stars (High Perf / High Pot)', count: 22, percent: '14.8%', color: 'bg-emerald-50 text-emerald-800 border-emerald-300' },
    { name: 'High Performers (High Perf / Med Pot)', count: 42, percent: '28.2%', color: 'bg-blue-50 text-blue-800 border-blue-300' },
    { name: 'Core Contributors (Med Perf / Med Pot)', count: 67, percent: '45.0%', color: 'bg-slate-50 text-slate-800 border-slate-300' },
    { name: 'High Potential / Enigmas (Med Perf / High Pot)', count: 12, percent: '8.0%', color: 'bg-purple-50 text-purple-800 border-purple-300' },
    { name: 'Performance Coaching (Low Perf)', count: 6, percent: '4.0%', color: 'bg-amber-50 text-amber-800 border-amber-300' }
  ];

  const handleApprovePromotion = (id: string) => {
    setPromotions(prev => prev.map(p => p.id === id ? { ...p, status: 'Sanctioned & Sent to Payroll' } : p));
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Performance Appraisals & 9-Box Talent Calibration"
      description="Conduct company-wide appraisal normalizations, review 9-box talent grids, and authorize staff promotion dossiers."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Culture' },
        { label: 'Performance Appraisals' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Star size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Talent / Stars</p>
              <h3 className="text-2xl font-bold text-slate-900">22 Leaders</h3>
              <p className="text-xs text-purple-600 font-medium">14.8% of workforce</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Promotion Nominations</p>
              <h3 className="text-2xl font-bold text-slate-900">2 Staff Dossiers</h3>
              <p className="text-xs text-blue-600 font-medium">Rahul Sharma & Sneha Roy</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Review Completion</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Submissions</h3>
              <p className="text-xs text-emerald-600 font-medium">149 reviews completed</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Org Mean Rating</p>
              <h3 className="text-2xl font-bold text-slate-900">3.94 / 5.0</h3>
              <p className="text-xs text-amber-600 font-medium">Balanced normal bell curve</p>
            </div>
          </div>
        </div>

        {/* 9-Box Grid Talent Distribution */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Organization-Wide 9-Box Talent Calibration</h3>
              <p className="text-xs text-slate-500">Normal distribution bell curve across 149 evaluated employees.</p>
            </div>
            <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              Q3-Q4 FY26 Normalization
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {nineBoxSummary.map((box, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${box.color} flex flex-col justify-between`}>
                <div>
                  <h4 className="text-xs font-bold leading-snug">{box.name}</h4>
                  <p className="text-2xl font-black mt-2">{box.count} <span className="text-xs font-semibold">Employees</span></p>
                </div>
                <div className="mt-3 pt-2 border-t border-black/10 text-xs font-bold flex justify-between">
                  <span>Distribution Share:</span>
                  <span>{box.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Dossiers Authorization Desk */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-1">Executive Promotion Dossiers</h3>
          <p className="text-xs text-slate-500 mb-4">Requires HRBP final approval to update official job grading and payroll compensation.</p>

          <div className="space-y-4">
            {promotions.map(promo => (
              <div key={promo.id} className="p-5 rounded-2xl border border-blue-200 bg-blue-50/20">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {promo.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{promo.candidate}</h4>
                        <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{promo.id}</span>
                        <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">{promo.dept}</span>
                      </div>
                      <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                        <span className="text-slate-500">{promo.current}</span>
                        <span className="text-blue-600 font-bold">➔</span>
                        <span className="text-blue-700 font-bold bg-blue-100 px-2.5 py-0.5 rounded-full">
                          {promo.proposed}
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          {promo.ctcImpact}
                        </span>
                      </div>

                      <p className="text-xs text-slate-700 mt-2.5 bg-white p-3 rounded-xl border border-slate-200">
                        <strong className="text-slate-900">Sponsorship Endorsement ({promo.sponsor}): </strong>
                        {promo.justification}
                      </p>
                    </div>
                  </div>

                  <div className="lg:self-center">
                    {promo.status === 'Awaiting HRBP Final Signoff' ? (
                      <button 
                        onClick={() => handleApprovePromotion(promo.id)}
                        className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                      >
                        <Check size={14} /> Authorize Promotion
                      </button>
                    ) : (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ✓ Sanctioned & Dispatched
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
