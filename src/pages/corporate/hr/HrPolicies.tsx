import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  ShieldCheck, FileText, Download, CheckCircle2, 
  ExternalLink, Search, Clock, Users, Plus, ChevronRight
} from 'lucide-react';

export function HrPolicies() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [searchTerm, setSearchTerm] = useState('');

  const policies = [
    {
      title: 'POSH (Prevention of Sexual Harassment) & ICC Charter',
      version: 'v4.2',
      updated: 'Oct 01, 2026',
      coverage: 'All Employees & Contractors',
      acknowledgments: '149 / 149 (100%)',
      description: 'Comprehensive policy on preventing sexual harassment, Internal Complaints Committee members, and zero-tolerance grievance reporting protocols.'
    },
    {
      title: 'Enterprise Code of Business Conduct & Ethics',
      version: 'v4.8',
      updated: 'Sep 15, 2026',
      coverage: 'All Employees & Board',
      acknowledgments: '149 / 149 (100%)',
      description: 'Guidelines on conflicts of interest, anti-bribery, insider trading compliance, and ethical client interactions.'
    },
    {
      title: 'Information Security & Data Classification (SOC-2)',
      version: 'v3.9',
      updated: 'Aug 20, 2026',
      coverage: 'Engineering & All Staff',
      acknowledgments: '149 / 149 (100%)',
      description: 'Security rules on Jamf MDM device encryption, password managers, source code confidentiality, and GDPR data handling.'
    },
    {
      title: 'Hybrid 3-Days In-Office & Remote Work Governance',
      version: 'v2.1',
      updated: 'Jul 10, 2026',
      coverage: 'All Full-Time Employees',
      acknowledgments: '148 / 149 (99.3%)',
      description: 'Standards regarding core working hours, home office ergonomic stipends, and exceptional remote approval guidelines.'
    },
    {
      title: 'Travel, Meals & Business Expense Policy',
      version: 'v3.5',
      updated: 'Sep 01, 2026',
      coverage: 'All Traveling Staff',
      acknowledgments: '149 / 149 (100%)',
      description: 'Per-diem allowances, hotel tier ceilings, corporate card usage, and GST tax invoice submission timelines.'
    },
    {
      title: 'Intellectual Property Assignment & Inventions Agreement',
      version: 'v4.0',
      updated: 'Jan 05, 2026',
      coverage: 'All Engineering & Product Staff',
      acknowledgments: '149 / 149 (100%)',
      description: 'Formal assignment of all proprietary software, design artifacts, and technical inventions developed during tenure.'
    }
  ];

  const filtered = policies.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Corporate Policies & Employee Handbook (v4.8)"
      description="Maintain the enterprise policy library, monitor digital signature acknowledgments, and enforce compliance."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compliance & Governance' },
        { label: 'Policies & Handbook' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Handbook Version</p>
              <h3 className="text-2xl font-bold text-slate-900">v4.8 Release</h3>
              <p className="text-xs text-blue-600 font-medium">Updated Q3 FY26</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Acknowledgment</p>
              <h3 className="text-2xl font-bold text-slate-900">99.8%</h3>
              <p className="text-xs text-emerald-600 font-medium">Digital e-signatures verified</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Active Policies</p>
              <h3 className="text-2xl font-bold text-slate-900">6 Charters</h3>
              <p className="text-xs text-purple-600 font-medium">Audited for SOC-2 Type II</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Next Legal Audit</p>
              <h3 className="text-2xl font-bold text-slate-900">Dec 15</h3>
              <p className="text-xs text-amber-600 font-medium">Annual legal review</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text"
              placeholder="Search policy name or compliance topic..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <button 
            onClick={() => alert('Full LinkUpCorp Employee Handbook v4.8 PDF downloaded.')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
          >
            <Download size={15} /> Download Full Handbook PDF
          </button>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((pol, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {pol.version}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 mt-1">{pol.title}</h4>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    Active
                  </span>
                </div>

                <p className="text-xs text-slate-600 mt-3 leading-relaxed">{pol.description}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Applicability:</span>
                    <strong className="text-slate-800">{pol.coverage}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Signed Acknowledgment:</span>
                    <strong className="text-emerald-600">{pol.acknowledgments}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Revision Date:</span>
                    <span className="text-slate-700">{pol.updated}</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button 
                  onClick={() => alert(`Policy document for ${pol.title} downloaded.`)}
                  className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Download PDF Copy <Download size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
