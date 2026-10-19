import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FolderKanban, Briefcase, TrendingUp, CheckCircle2, AlertTriangle, 
  Search, Filter, Plus, Users, Clock, ArrowUpRight
} from 'lucide-react';

interface Project {
  id: string;
  code: string;
  name: string;
  businessUnit: string;
  lead: string;
  staffAssigned: number;
  budgetAllocated: string;
  budgetBurned: string;
  progressPct: number;
  health: 'On Track' | 'At Risk' | 'Critical Review';
  targetRelease: string;
}

export function AdminProjects() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('All');

  const projects: Project[] = [
    {
      id: 'PRJ-101',
      code: 'ERP-CORE-V5',
      name: 'LinkUp Enterprise ERP Core v5 Architecture',
      businessUnit: 'Core Platform Engineering',
      lead: 'Priya Mehta (Engineering Mgr)',
      staffAssigned: 34,
      budgetAllocated: '₹8.4 Cr',
      budgetBurned: '₹5.8 Cr',
      progressPct: 82,
      health: 'On Track',
      targetRelease: 'Q4 2026'
    },
    {
      id: 'PRJ-102',
      code: 'AI-COPILOT',
      name: 'Generative AI Workmate & Meeting Copilot',
      businessUnit: 'Applied AI & ML Labs',
      lead: 'Dr. Aris Thorne (Staff AI Scientist)',
      staffAssigned: 18,
      budgetAllocated: '₹6.2 Cr',
      budgetBurned: '₹3.9 Cr',
      progressPct: 68,
      health: 'On Track',
      targetRelease: 'Q1 2027'
    },
    {
      id: 'PRJ-103',
      code: 'MOB-NATIVE-3',
      name: 'NextGen iOS & Android Executive Suite',
      businessUnit: 'Mobile Engineering',
      lead: 'Siddharth Rao (Lead Mobile Architect)',
      staffAssigned: 14,
      budgetAllocated: '₹3.8 Cr',
      budgetBurned: '₹3.1 Cr',
      progressPct: 91,
      health: 'On Track',
      targetRelease: 'Nov 2026'
    },
    {
      id: 'PRJ-104',
      code: 'FIN-GATEWAY-IN',
      name: 'RBI Unified Payment Protocol & e-KYC Engine',
      businessUnit: 'Fintech & Payment Infra',
      lead: 'Vikram Malhotra (Staff Backend Lead)',
      staffAssigned: 12,
      budgetAllocated: '₹4.5 Cr',
      budgetBurned: '₹3.8 Cr',
      progressPct: 54,
      health: 'At Risk',
      targetRelease: 'Dec 2026'
    },
    {
      id: 'PRJ-105',
      code: 'GOV-CLOUD-DEF',
      name: 'GovCloud FedRAMP / SOC-2 Air-Gapped Stack',
      businessUnit: 'Cloud & Infrastructure',
      lead: 'David Chen (VP Architecture)',
      staffAssigned: 20,
      budgetAllocated: '₹7.8 Cr',
      budgetBurned: '₹4.2 Cr',
      progressPct: 76,
      health: 'On Track',
      targetRelease: 'Q2 2027'
    },
    {
      id: 'PRJ-106',
      code: 'HR-PEOPLE-LMS',
      name: 'Continuous Performance Calibration & LMS 360',
      businessUnit: 'Workplace Tech',
      lead: 'Anita Desai (HRBP Lead)',
      staffAssigned: 8,
      budgetAllocated: '₹1.8 Cr',
      budgetBurned: '₹1.4 Cr',
      progressPct: 94,
      health: 'On Track',
      targetRelease: 'Oct 2026'
    }
  ];

  const filtered = projects.filter(p => {
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        p.lead.toLowerCase().includes(searchTerm.toLowerCase());
    const matchUnit = selectedUnit === 'All' || p.businessUnit === selectedUnit;
    return matchSearch && matchUnit;
  });

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Project Portfolio" 
      description="Enterprise portfolio governance, engineering resource allocations, multi-crore budget tracking, and sprint health."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Operations & Payroll Governance' },
        { label: 'Project Portfolio' }
      ]}
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Active Portfolio</p>
            <p className="text-2xl font-black text-slate-900 mt-1">42 Projects</p>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">Across 4 Engineering BUs</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Total Portfolio Budget</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">₹48.5 Cr</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">₹32.8 Cr Burned (67.6%)</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Staff Assigned</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">450 Engineers</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">94% Capacity Allocated</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Portfolio Health</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">96.2%</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">34 On Track • 6 At Risk • 2 In Review</p>
          </div>
        </div>

        {/* Filter bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full md:w-auto flex-1">
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search projects by code, title or tech lead..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-blue-600 outline-none"
              />
            </div>

            <select 
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Business Units</option>
              <option value="Core Platform Engineering">Core Platform Engineering</option>
              <option value="Applied AI & ML Labs">Applied AI & ML Labs</option>
              <option value="Mobile Engineering">Mobile Engineering</option>
              <option value="Fintech & Payment Infra">Fintech & Payment Infra</option>
              <option value="Cloud & Infrastructure">Cloud & Infrastructure</option>
              <option value="Workplace Tech">Workplace Tech</option>
            </select>
          </div>

          <button className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 transition-colors">
            <Plus size={14} /> New Enterprise Project
          </button>
        </div>

        {/* Projects Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-900 text-white">
                      {p.code}
                    </span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      p.health === 'On Track' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {p.health}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-base mt-2">{p.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{p.businessUnit}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">{p.progressPct}%</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Completed</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>Burned: {p.budgetBurned} of {p.budgetAllocated}</span>
                  <span className="text-slate-500 font-mono">Target: {p.targetRelease}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full" 
                    style={{ width: `${p.progressPct}%` }} 
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Lead: <strong className="text-slate-800">{p.lead}</strong></span>
                <span className="font-semibold text-slate-700">{p.staffAssigned} Engineers Assigned</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
