import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Briefcase, CheckCircle2, Award, Download, Building, 
  ExternalLink, Sparkles, ShieldCheck, ArrowRight, FileCheck
} from 'lucide-react';

export function ParentPlacements() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Placements & Internships" 
      description="Campus recruitment results, corporate offer verification, and industry internship NOC."
    >
      {/* Placed Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-emerald-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                T&P Dream Offer Confirmed
              </span>
              <span className="bg-emerald-400/30 text-emerald-100 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-300/30 flex items-center gap-1">
                <CheckCircle2 size={12} /> Institutional Offer Letter Issued
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">CloudScale Technologies • ₹14.5 LPA</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              Shivam Sharma has successfully secured a campus placement offer as an Associate Cloud Architect • Joining: July 2027.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-slate-50 transition-all shadow-md">
              <Download size={14} />
              <span>Offer Letter (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Offer Details & Internship NOC */}
        <div className="lg:col-span-2 space-y-8">
          {/* Corporate Offer Breakdown */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">Campus Recruitment Offer Breakdown</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Recruiting Company</span>
                <span className="text-base font-bold text-slate-900 mt-0.5 block">CloudScale Technologies Ltd.</span>
                <span className="text-purple-700 font-semibold text-[11px]">Enterprise Cloud Infrastructure Division</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Job Designation</span>
                <span className="text-base font-bold text-slate-900 mt-0.5 block">Associate Cloud Architect</span>
                <span className="text-slate-500 text-[11px]">Primary Location: Bangalore / Hybrid</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Compensation Package</span>
                <span className="text-base font-black text-emerald-600 mt-0.5 block">₹14,50,000 CTC per annum</span>
                <span className="text-slate-500 text-[11px]">Base: ₹12.0L + Performance Bonus: ₹2.5L</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Joining Schedule</span>
                <span className="text-base font-bold text-slate-900 mt-0.5 block">July 2027</span>
                <span className="text-slate-500 text-[11px]">Following B.Tech degree completion</span>
              </div>
            </div>
          </div>

          {/* 8th Semester Industry Internship NOC */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">8th Semester Full-Time Industry Internship</h3>
                  <p className="text-xs text-slate-400">Institutional clearance and university No Objection Certificate (NOC)</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
                NOC Approved
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 text-xs text-slate-600 space-y-2">
              <p className="leading-relaxed">
                As per university academic regulations, Shivam is permitted to undergo a 6-month full-time internship at CloudScale Technologies starting January 2027. Capstone project viva will be evaluated via corporate sponsorship review.
              </p>
              <div className="pt-2 flex items-center justify-between font-medium text-slate-500 text-[11px]">
                <span>Approved by: <strong>Dean of Academic Affairs</strong></span>
                <span>Document Ref: <strong>AIT/NOC/2026/782</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: T&P Cell Policy */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-3">T&P One-Offer Upgrade Policy</h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Students securing Dream Offers (₹10L - ₹15L) remain eligible to appear for <strong>Super-Dream Tier-1</strong> drives offering packages above <strong>₹20.0 LPA</strong>.
            </p>
            <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
              <span className="font-bold block text-slate-900 mb-1">Upcoming Super-Dream Drives:</span>
              <p className="text-[11px] text-slate-600">• Microsoft IDC (₹38.5 LPA) - Nov 2026</p>
              <p className="text-[11px] text-slate-600">• Amazon AWS (₹32.0 LPA) - Dec 2026</p>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
