import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  BarChart3, TrendingUp, Users, DollarSign, Download, 
  Calendar, FileSpreadsheet, FileText, CheckCircle2, ChevronRight, X
} from 'lucide-react';

export function AdminReports() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = (format: string, reportName: string) => {
    setDownloadNotice(`Generated ${reportName} in ${format} format. Packaging file...`);
    setTimeout(() => setDownloadNotice(null), 3500);
  };

  const reportsList = [
    { id: 'REP-01', title: 'Q3 2026 Board of Directors Executive Deck', category: 'Executive Governance', period: 'Jul - Sep 2026', size: '18.4 MB (PDF)', updated: 'Oct 05, 2026' },
    { id: 'REP-02', title: 'FY2026 Headcount Trajectory & Attrition Analysis', category: 'People & Talent BI', period: 'Annual 2026', size: '4.2 MB (XLSX)', updated: 'Oct 14, 2026' },
    { id: 'REP-03', title: 'Enterprise Cloud FinOps & Department Cost Allocation', category: 'Infrastructure & Finance', period: 'Monthly Sep 2026', size: '2.8 MB (CSV)', updated: 'Oct 10, 2026' },
    { id: 'REP-04', title: 'SOC-2 Type II Annual Evidence Package & Attestation', category: 'Compliance & Audit', period: 'Annual 2026', size: '42.0 MB (ZIP)', updated: 'Aug 22, 2026' },
    { id: 'REP-05', title: 'Global Multi-Entity Payroll Reconciliation Ledger', category: 'Treasury & Accounts', period: 'Sep 2026 Cycle', size: '6.1 MB (XLSX)', updated: 'Oct 02, 2026' }
  ];

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Executive BI Reports" 
      description="C-Suite business intelligence, board deck telemetry, headcount growth metrics, and cloud FinOps allocations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics, Audit & Compliance' },
        { label: 'Executive BI Reports' }
      ]}
    >
      <div className="space-y-6">
        {downloadNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{downloadNotice}</span>
            </div>
            <button onClick={() => setDownloadNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Executive Metrics Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Headcount Growth</p>
            <p className="text-2xl font-black text-slate-900 mt-1">+31.8% YoY</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">1,100 ➔ 1,450 FTE</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Annual Attrition</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">7.4%</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Tech Industry Bench: 14.2%</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Revenue Per Head</p>
            <p className="text-2xl font-black text-blue-600 mt-1">₹92.4 L</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">+14% Productivity Surge</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Cloud FinOps Ratio</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">4.2%</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Cloud spend as % of gross rev</p>
          </div>
        </div>

        {/* Headcount YoY Breakdown Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Quarterly Workforce Expansion (FY25 - FY26)</h3>
              <p className="text-xs text-slate-500">Net talent addition across Bengaluru, Gurugram, US, UK and Singapore entities</p>
            </div>
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200 font-bold">
              CAGR: 28.4%
            </span>
          </div>

          <div className="grid grid-cols-4 gap-3 text-center">
            {[
              { quarter: 'Q1 FY26', count: '1,220 staff', growth: '+8.2%', bar: '65%' },
              { quarter: 'Q2 FY26', count: '1,310 staff', growth: '+7.4%', bar: '78%' },
              { quarter: 'Q3 FY26', count: '1,390 staff', growth: '+6.1%', bar: '88%' },
              { quarter: 'Q4 FY26 (Live)', count: '1,450 staff', growth: '+4.3%', bar: '100%' }
            ].map((q, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-end">
                <div className="w-full bg-slate-200 h-24 rounded-lg overflow-hidden flex flex-col justify-end p-1 mb-2">
                  <div className="bg-blue-600 rounded-md w-full transition-all duration-700" style={{ height: q.bar }} />
                </div>
                <p className="text-xs font-bold text-slate-800">{q.quarter}</p>
                <p className="text-sm font-black text-slate-900 mt-0.5">{q.count}</p>
                <p className="text-[10px] text-emerald-600 font-semibold mt-0.5">{q.growth}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Available Executive Reports Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Pre-Compiled Executive Reporting Vault</h3>
              <p className="text-xs text-slate-500">Board-ready PDF decks, raw financial Excel sheets, and audit packages</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {reportsList.map((r) => (
              <div key={r.id} className="p-4 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-800">
                      {r.id}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                      {r.category}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-1.5">{r.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Cadence: {r.period} • Size: {r.size} • Last compiled: {r.updated}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => handleDownload('PDF', r.title)}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-lg text-xs transition-colors flex items-center gap-1.5"
                  >
                    <Download size={12} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
