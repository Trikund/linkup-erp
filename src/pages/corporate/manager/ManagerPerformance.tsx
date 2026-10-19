import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  TrendingUp, Award, Users, CheckCircle2, 
  ArrowUpRight, Star, AlertCircle, Sparkles, 
  ChevronRight, BarChart3, FileText, Check
} from 'lucide-react';

export function ManagerPerformance() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [promotions, setPromotions] = useState([
    {
      id: 'PROM-01',
      candidate: 'Rahul Sharma',
      currentTitle: 'Senior Frontend Developer (IC3)',
      proposedTitle: 'Staff Frontend Engineer (IC4)',
      justification: 'Successfully architected WebAuthn 2FA suite, mentored 2 mid-level devs, reduced Core Web Vitals LCP by 40%, and acts as technical domain owner for web clients.',
      readiness: 'High Readiness (Immediate Q4 Promotion)',
      status: 'Submitted to VP Engineering (Siddharth Mehta)',
      avatar: 'RS'
    }
  ]);

  const [nineBoxData] = useState([
    {
      box: 'Star (High Perf / High Pot)',
      color: 'bg-emerald-50 border-emerald-300 text-emerald-800',
      members: ['Vikram Malhotra', 'Rahul Sharma']
    },
    {
      box: 'High Performer (High Perf / Med Pot)',
      color: 'bg-blue-50 border-blue-300 text-blue-800',
      members: ['Amit Kumar', 'Siddharth Rao']
    },
    {
      box: 'Core Performer (Med Perf / Med Pot)',
      color: 'bg-indigo-50 border-indigo-300 text-indigo-800',
      members: ['Sneha Roy', 'Rohan Das']
    },
    {
      box: 'High Potential (Med Perf / High Pot)',
      color: 'bg-purple-50 border-purple-300 text-purple-800',
      members: ['Neha Verma']
    },
    {
      box: 'Solid Contributor (Med Perf / Low Pot)',
      color: 'bg-slate-50 border-slate-300 text-slate-800',
      members: ['Ananya Sen']
    },
    {
      box: 'Action Required (Low Perf)',
      color: 'bg-amber-50 border-amber-300 text-amber-800',
      members: []
    }
  ]);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Performance Reviews & 9-Box Calibration"
      description="Calibrate talent potential, assess annual performance ratings, and sponsor promotion dossiers."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Talent' },
        { label: 'Reviews & Calibration' }
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
              <h3 className="text-2xl font-bold text-slate-900">2 Engineers</h3>
              <p className="text-xs text-purple-600 font-medium">Vikram & Rahul (Top 25%)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Promotions Nominated</p>
              <h3 className="text-2xl font-bold text-slate-900">1 Dossier</h3>
              <p className="text-xs text-blue-600 font-medium">Rahul Sharma to IC4</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Calibration Status</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Complete</h3>
              <p className="text-xs text-emerald-600 font-medium">All 8 reviews submitted</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Team Rating</p>
              <h3 className="text-2xl font-bold text-slate-900">4.1 / 5.0</h3>
              <p className="text-xs text-amber-600 font-medium">High performing pod</p>
            </div>
          </div>
        </div>

        {/* 9-Box Grid Matrix */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Engineering Talent 9-Box Grid Assessment</h3>
              <p className="text-xs text-slate-500">Mapping current performance against future leadership and technical growth potential.</p>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
              Q3-Q4 Calibration
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nineBoxData.map((box, idx) => (
              <div key={idx} className={`p-4 rounded-xl border ${box.color} flex flex-col justify-between min-h-[140px]`}>
                <div>
                  <h4 className="text-xs font-bold mb-2">{box.box}</h4>
                  <div className="space-y-1.5">
                    {box.members.length > 0 ? (
                      box.members.map((m, mIdx) => (
                        <div key={mIdx} className="bg-white/80 backdrop-blur-sm p-2 rounded-lg border border-black/5 text-xs font-bold text-slate-800 flex items-center gap-2 shadow-sm">
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                          {m}
                        </div>
                      ))
                    ) : (
                      <p className="text-[11px] text-slate-400 italic">No engineers in this quadrant</p>
                    )}
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 mt-3 pt-2 border-t border-black/5">
                  {box.members.length} {box.members.length === 1 ? 'member' : 'members'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promotion Nomination Dossier */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Active Promotion Nomination Dossiers</h3>
              <p className="text-xs text-slate-500">Formal sponsorship for promotion to Staff & Principal levels.</p>
            </div>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
              1 Active Dossier
            </span>
          </div>

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
                      <span className="text-xs font-mono text-slate-400">({promo.id})</span>
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                      <span className="text-slate-500">{promo.currentTitle}</span>
                      <span className="text-blue-600 font-bold">➔</span>
                      <span className="text-blue-700 font-bold bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        {promo.proposedTitle}
                      </span>
                    </div>

                    <p className="text-xs text-slate-700 mt-3 bg-white p-3 rounded-xl border border-slate-200">
                      <strong className="text-slate-900 block mb-1">Executive Impact Justification:</strong>
                      {promo.justification}
                    </p>

                    <div className="mt-3 flex items-center gap-4 text-xs">
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                        ✓ {promo.readiness}
                      </span>
                      <span className="text-slate-500">
                        Review Stage: <strong className="text-slate-800">{promo.status}</strong>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="lg:self-center">
                  <button 
                    onClick={() => alert('Full promotion portfolio dossier PDF generated.')}
                    className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl shadow-sm transition"
                  >
                    <FileText size={15} /> View Full Committee Dossier
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
