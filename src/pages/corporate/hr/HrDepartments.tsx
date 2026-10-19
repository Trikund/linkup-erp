import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Building2, Users, IndianRupee, Briefcase, 
  CheckCircle2, Plus, ArrowUpRight, Search, 
  ChevronRight, Sparkles, Layers, ShieldCheck
} from 'lucide-react';

interface DepartmentData {
  id: string;
  name: string;
  code: string;
  head: string;
  headTitle: string;
  headcount: number;
  capacity: number;
  openPositions: number;
  budgetQ4: string;
  location: string;
  subUnits: string[];
}

export function HrDepartments() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [searchTerm, setSearchTerm] = useState('');

  const departments: DepartmentData[] = [
    {
      id: 'DEPT-01',
      name: 'Engineering & Technology',
      code: 'CC-ENG-400',
      head: 'Siddharth Mehta',
      headTitle: 'VP Engineering & Architecture',
      headcount: 68,
      capacity: 75,
      openPositions: 3,
      budgetQ4: '₹1.85 Cr',
      location: 'Bengaluru HQ & Gurugram',
      subUnits: ['Platform Core (Pod 4)', 'Mobile Apps', 'Infra & DevOps', 'Data Platform']
    },
    {
      id: 'DEPT-02',
      name: 'Sales & Business Development',
      code: 'CC-SLS-200',
      head: 'Rajeev Nambiar',
      headTitle: 'Chief Commercial Officer',
      headcount: 28,
      capacity: 32,
      openPositions: 2,
      budgetQ4: '₹92.0 L',
      location: 'Delhi NCR, Mumbai & Bengaluru',
      subUnits: ['Enterprise Accounts', 'Mid-Market Sales', 'Solutions Engineering', 'SDR Team']
    },
    {
      id: 'DEPT-03',
      name: 'Operations & Facilities',
      code: 'CC-OPS-100',
      head: 'Vikram Singh',
      headTitle: 'VP Operations & Workplace',
      headcount: 20,
      capacity: 22,
      openPositions: 1,
      budgetQ4: '₹64.0 L',
      location: 'Pan-India Corporate Offices',
      subUnits: ['IT Infrastructure', 'Office Administration', 'Procurement & Travel', 'Security']
    },
    {
      id: 'DEPT-04',
      name: 'Product & Design',
      code: 'CC-PRD-300',
      head: 'Aruna Roy',
      headTitle: 'Head of Product & Design',
      headcount: 16,
      capacity: 18,
      openPositions: 1,
      budgetQ4: '₹55.0 L',
      location: 'Bengaluru HQ',
      subUnits: ['Product Strategy', 'UI/UX Design Systems', 'User Research', 'Product Analytics']
    },
    {
      id: 'DEPT-05',
      name: 'Human Resources & Talent',
      code: 'CC-HR-500',
      head: 'Suresh Kumar',
      headTitle: 'Chief Human Resources Officer',
      headcount: 9,
      capacity: 10,
      openPositions: 1,
      budgetQ4: '₹38.0 L',
      location: 'Bengaluru HQ',
      subUnits: ['Talent Acquisition', 'HRBP Operations', 'Payroll & Compliance', 'Learning & Culture']
    },
    {
      id: 'DEPT-06',
      name: 'Finance & Accounts',
      code: 'CC-FIN-600',
      head: 'Alok Gupta',
      headTitle: 'Director of Corporate Finance',
      headcount: 8,
      capacity: 10,
      openPositions: 0,
      budgetQ4: '₹32.0 L',
      location: 'Bengaluru HQ',
      subUnits: ['Financial Planning (FP&A)', 'Treasury & Taxation', 'Billing & Receivables', 'Audit']
    }
  ];

  const filtered = departments.filter(d => 
    d.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.head.toLowerCase().includes(searchTerm.toLowerCase()) ||
    d.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Departments & Organizational Hierarchy"
      description="Manage department cost centers, headcount budgets, leadership reporting chains, and sub-team allocations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Core Workforce & Directory' },
        { label: 'Departments & Org' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Building2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Departments</p>
              <h3 className="text-2xl font-bold text-slate-900">8 Units</h3>
              <p className="text-xs text-blue-600 font-medium">All cost centers verified</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Capacity Utilization</p>
              <h3 className="text-2xl font-bold text-slate-900">89.2%</h3>
              <p className="text-xs text-emerald-600 font-medium">149 of 167 sanctioned</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Positions</p>
              <h3 className="text-2xl font-bold text-slate-900">8 Requisitions</h3>
              <p className="text-xs text-purple-600 font-medium">Across 5 departments</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Q4 Budget</p>
              <h3 className="text-2xl font-bold text-slate-900">₹4.66 Cr</h3>
              <p className="text-xs text-amber-600 font-medium">Approved by Board</p>
            </div>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text"
              placeholder="Search department, cost center code, or HOD name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          <button 
            onClick={() => alert('Department expansion proposal modal initiated.')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
          >
            <Plus size={15} /> Add Cost Center / Unit
          </button>
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map(dept => {
            const utilizationPercent = Math.round((dept.headcount / dept.capacity) * 100);

            return (
              <div key={dept.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{dept.name}</h4>
                      <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200">
                        {dept.code}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      Department Head: <strong className="text-slate-800">{dept.head}</strong> ({dept.headTitle})
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">Base: {dept.location}</p>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    {dept.openPositions} Openings
                  </span>
                </div>

                {/* Metrics Row */}
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Headcount</span>
                    <span className="text-slate-900 font-bold text-sm">{dept.headcount}</span>
                    <span className="text-slate-400 text-[10px] ml-1">/ {dept.capacity} max</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Utilization</span>
                    <span className="text-blue-600 font-bold text-sm">{utilizationPercent}%</span>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 block font-semibold text-[10px] uppercase">Q4 Budget</span>
                    <span className="text-slate-900 font-bold text-sm">{dept.budgetQ4}</span>
                  </div>
                </div>

                {/* Sub-Units Tags */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Operational Squads / Sub-Units</p>
                  <div className="flex flex-wrap gap-1.5">
                    {dept.subUnits.map(unit => (
                      <span key={unit} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-slate-100 text-slate-700">
                        {unit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </CorporateLayout>
  );
}
