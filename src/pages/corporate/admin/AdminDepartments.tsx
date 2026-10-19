import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Building2, Users, CreditCard, ChevronRight, Plus, 
  Download, Globe, CheckCircle2, TrendingUp, Sparkles, Edit3
} from 'lucide-react';

interface EntityGroup {
  id: string;
  name: string;
  jurisdiction: string;
  currency: string;
  totalHeadcount: number;
  activeCostCenters: number;
  totalAnnualBudget: string;
}

interface Department {
  id: string;
  code: string;
  name: string;
  entity: string;
  head: string;
  headcount: number;
  budgetAllocated: string;
  budgetSpent: string;
  spentPct: string;
  status: 'Operational' | 'Scaling' | 'Restructuring';
  subTeams: string[];
}

export function AdminDepartments() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const entities: EntityGroup[] = [
    { id: 'ENT-IN', name: 'LinkUp Technologies India Pvt Ltd', jurisdiction: 'Bengaluru & Gurugram, India', currency: 'INR (₹)', totalHeadcount: 980, activeCostCenters: 5, totalAnnualBudget: '₹42.5 Cr' },
    { id: 'ENT-US', name: 'LinkUp Technologies Inc.', jurisdiction: 'Sunnyvale, CA, United States', currency: 'USD ($)', totalHeadcount: 220, activeCostCenters: 3, totalAnnualBudget: '$18.2M' },
    { id: 'ENT-SG', name: 'LinkUp Tech APAC Pte Ltd', jurisdiction: 'Marina One, Singapore', currency: 'SGD (S$)', totalHeadcount: 140, activeCostCenters: 2, totalAnnualBudget: 'S$6.8M' },
    { id: 'ENT-UK', name: 'LinkUp Tech UK Limited', jurisdiction: 'London EC2, United Kingdom', currency: 'GBP (£)', totalHeadcount: 110, activeCostCenters: 2, totalAnnualBudget: '£4.2M' }
  ];

  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 'DEP-01',
      code: 'CC-101',
      name: 'Engineering & Technology',
      entity: 'LinkUp Technologies India Pvt Ltd',
      head: 'Siddharth Mehta (VP Engineering)',
      headcount: 450,
      budgetAllocated: '₹14.20 Cr',
      budgetSpent: '₹10.93 Cr',
      spentPct: '77%',
      status: 'Scaling',
      subTeams: ['Frontend Core', 'Platform Services', 'Mobile iOS/Android', 'Cloud Infrastructure', 'SecOps']
    },
    {
      id: 'DEP-02',
      code: 'CC-102',
      name: 'Sales & Global Marketing',
      entity: 'LinkUp Technologies Inc. (US)',
      head: 'Kavita Chawla (Chief Revenue Officer)',
      headcount: 300,
      budgetAllocated: '₹8.60 Cr',
      budgetSpent: '₹6.45 Cr',
      spentPct: '75%',
      status: 'Operational',
      subTeams: ['Enterprise Mid-Market', 'Field Sales US', 'Growth Marketing', 'Product Marketing']
    },
    {
      id: 'DEP-03',
      code: 'CC-103',
      name: 'Global Operations & Facilities',
      entity: 'LinkUp Technologies India Pvt Ltd',
      head: 'Vikram Singh (VP Workplace & Ops)',
      headcount: 200,
      budgetAllocated: '₹4.10 Cr',
      budgetSpent: '₹3.28 Cr',
      spentPct: '80%',
      status: 'Operational',
      subTeams: ['Campus Security', 'Turnstile Hardware Ops', 'Workplace Experience', 'Logistics']
    },
    {
      id: 'DEP-04',
      code: 'CC-104',
      name: 'Human Resources & People Culture',
      entity: 'LinkUp Technologies India Pvt Ltd',
      head: 'Anita Desai (Lead HRBP & People)',
      headcount: 100,
      budgetAllocated: '₹2.80 Cr',
      budgetSpent: '₹2.18 Cr',
      spentPct: '78%',
      status: 'Operational',
      subTeams: ['Talent Acquisition', 'L&D Academy', 'Total Rewards & Payroll', 'Employee Relations']
    },
    {
      id: 'DEP-05',
      code: 'CC-105',
      name: 'Platform Governance & CISO',
      entity: 'LinkUp Technologies India Pvt Ltd',
      head: 'Rajesh Varma (Principal Admin & CISO)',
      headcount: 80,
      budgetAllocated: '₹2.20 Cr',
      budgetSpent: '₹1.58 Cr',
      spentPct: '72%',
      status: 'Scaling',
      subTeams: ['Identity & Access (IAM)', 'SOC-2 Compliance', 'Zero-Trust Network', 'Audit Assurance']
    },
    {
      id: 'DEP-06',
      code: 'CC-106',
      name: 'Finance & Corporate Accounts',
      entity: 'LinkUp Technologies India Pvt Ltd',
      head: 'Ramesh Sundaram (Chief Financial Officer)',
      headcount: 60,
      budgetAllocated: '₹1.80 Cr',
      budgetSpent: '₹1.35 Cr',
      spentPct: '75%',
      status: 'Operational',
      subTeams: ['Statutory Tax & PF', 'Treasury & Forex', 'Accounts Payable', 'Vendor Reconciliations']
    },
    {
      id: 'DEP-07',
      code: 'CC-107',
      name: 'Legal, Patents & Compliance',
      entity: 'LinkUp Technologies Inc. (US)',
      head: 'Eleanor Vance (General Counsel)',
      headcount: 40,
      budgetAllocated: '₹1.60 Cr',
      budgetSpent: '₹1.12 Cr',
      spentPct: '70%',
      status: 'Operational',
      subTeams: ['IP & Patents', 'SaaS Licensing & MSAs', 'Labor Law Counsel', 'Data Privacy (GDPR/DPDPA)']
    },
    {
      id: 'DEP-08',
      code: 'CC-108',
      name: 'APAC & EMEA Regional Outposts',
      entity: 'LinkUp Tech APAC Pte Ltd',
      head: 'Tan Wei Ming & Clara Oswald',
      headcount: 220,
      budgetAllocated: '₹6.50 Cr',
      budgetSpent: '₹4.81 Cr',
      spentPct: '74%',
      status: 'Scaling',
      subTeams: ['Singapore Regional Hub', 'London Financial Hub', 'Tokyo Advisory Pod']
    }
  ]);

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Departments & Entities" 
      description="Legal entity structures, multi-currency cost centers, department heads, and budget utilization."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Platform Overview & Organization' },
        { label: 'Departments & Entities' }
      ]}
    >
      <div className="space-y-6">
        {/* Global Legal Entities Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {entities.map(ent => (
            <div key={ent.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 transition-colors">
              <div className="flex items-center justify-between text-xs text-slate-500 font-semibold mb-2">
                <span>{ent.id}</span>
                <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 font-bold">{ent.currency}</span>
              </div>
              <h4 className="font-bold text-slate-900 text-sm leading-snug">{ent.name}</h4>
              <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
                <Globe size={11} className="text-slate-400" /> {ent.jurisdiction}
              </p>
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                <span>{ent.totalHeadcount} Headcount</span>
                <span className="text-blue-600">{ent.totalAnnualBudget}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Departments Grid */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-bold text-slate-900">8 Active Functional Cost Centers</h3>
            <p className="text-xs text-slate-500">Departmental breakdown with allocated headcount and spend burn-rates</p>
          </div>
          <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 transition-colors">
            <Plus size={14} /> Add Cost Center
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-900 text-white">
                      {dept.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">{dept.id}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {dept.status}
                    </span>
                  </div>
                  <h4 className="text-base font-black text-slate-900 mt-2">{dept.name}</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">{dept.entity}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">{dept.headcount}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Employees</p>
                </div>
              </div>

              {/* Budget Progress Bar */}
              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>Budget Utilization ({dept.spentPct})</span>
                  <span>{dept.budgetSpent} / {dept.budgetAllocated}</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 rounded-full" style={{ width: dept.spentPct }} />
                </div>
              </div>

              {/* Subteams */}
              <div className="mt-4">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Sub-teams & Pods</p>
                <div className="flex flex-wrap gap-1.5">
                  {dept.subTeams.map((sub, sIdx) => (
                    <span key={sIdx} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Head: <strong className="text-slate-800">{dept.head}</strong></span>
                <button className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1">
                  Edit Allocations <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
