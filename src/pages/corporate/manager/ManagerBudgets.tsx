import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CreditCard, Cloud, Cpu, IndianRupee, 
  TrendingUp, AlertCircle, ArrowUpRight, CheckCircle2, 
  PieChart, Download, Plus, Sparkles, Layers
} from 'lucide-react';

interface BudgetItem {
  category: string;
  allocated: number;
  spent: number;
  icon: any;
  color: string;
  description: string;
}

export function ManagerBudgets() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const budgetItems: BudgetItem[] = [
    {
      category: 'AWS Cloud & Infrastructure',
      allocated: 2250000,
      spent: 1820000,
      icon: Cloud,
      color: 'blue',
      description: 'EKS Clusters, RDS Postgres Aurora, CloudFront CDN, and S3 data lake storage.'
    },
    {
      category: 'SaaS Developer Tooling',
      allocated: 900000,
      spent: 780000,
      icon: Cpu,
      color: 'purple',
      description: 'GitHub Enterprise, Datadog APM, Jira Software, Figma Org, and Snyk Security.'
    },
    {
      category: 'Certifications & Upskilling',
      allocated: 450000,
      spent: 210000,
      icon: Sparkles,
      color: 'emerald',
      description: 'Cloud architect exams, O’Reilly learning subscriptions, and tech workshops.'
    },
    {
      category: 'Team Offsites & Culture',
      allocated: 400000,
      spent: 240000,
      icon: Layers,
      color: 'amber',
      description: 'Quarterly team dinner, sprint retros, hackathons, and remote pod meetups.'
    },
    {
      category: 'Hardware & Workstation Upgrades',
      allocated: 500000,
      spent: 390000,
      icon: CreditCard,
      color: 'slate',
      description: 'MacBook Pro M3 Max RAM upgrades, 4K USB-C monitors, and ergonomics.'
    }
  ];

  const totalAllocated = budgetItems.reduce((acc, item) => acc + item.allocated, 0);
  const totalSpent = budgetItems.reduce((acc, item) => acc + item.spent, 0);
  const remainingBudget = totalAllocated - totalSpent;
  const burnPercent = Math.round((totalSpent / totalAllocated) * 100);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Team Budgets & Cloud Cost"
      description="Monitor Q4 department allocations, cloud infrastructure burn rates, and developer tooling ROI."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Financials & Approvals' },
        { label: 'Team Budgets & Cloud' }
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
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Q4 Budget Pool</p>
              <h3 className="text-2xl font-bold text-slate-900">₹45.0 Lakhs</h3>
              <p className="text-xs text-blue-600 font-medium">Pod 4 allocation</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <TrendingUp size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Spent to Date</p>
              <h3 className="text-2xl font-bold text-slate-900">₹34.4 Lakhs</h3>
              <p className="text-xs text-emerald-600 font-medium">{burnPercent}% of budget consumed</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Remaining Buffer</p>
              <h3 className="text-2xl font-bold text-slate-900">₹10.6 Lakhs</h3>
              <p className="text-xs text-purple-600 font-medium">Safe buffer for Nov-Dec</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Cloud size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">AWS Run Rate</p>
              <h3 className="text-2xl font-bold text-slate-900">₹6.05L /mo</h3>
              <p className="text-xs text-amber-600 font-medium">Under ₹6.5L threshold</p>
            </div>
          </div>
        </div>

        {/* Budget Breakdown Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-slate-900">Q4 Cost Center Breakdown (CC-ENG-402)</h3>
              <p className="text-xs text-slate-500">Authorized spend across infrastructure, software licenses, and team enablement.</p>
            </div>
            <button 
              onClick={() => alert('Additional budget increase request form submitted to Finance Director.')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Plus size={15} /> Request Budget Variation
            </button>
          </div>

          <div className="space-y-5">
            {budgetItems.map((item, idx) => {
              const Icon = item.icon;
              const percent = Math.round((item.spent / item.allocated) * 100);
              const remaining = item.allocated - item.spent;

              return (
                <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-800 shadow-sm">
                        <Icon size={22} className="text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{item.category}</h4>
                        <p className="text-xs text-slate-500 mt-0.5">{item.description}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 lg:justify-end">
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Spent</span>
                        <span className="text-sm font-bold text-slate-900">₹{(item.spent / 100000).toFixed(2)}L</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Allocated</span>
                        <span className="text-sm font-bold text-slate-600">₹{(item.allocated / 100000).toFixed(2)}L</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-400 font-bold uppercase block">Remaining</span>
                        <span className="text-sm font-bold text-emerald-600">₹{(remaining / 100000).toFixed(2)}L</span>
                      </div>
                      <div className="w-20 text-right">
                        <span className="text-xs font-bold text-slate-800">{percent}%</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        percent > 90 ? 'bg-amber-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
