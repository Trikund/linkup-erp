import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Award, ShieldCheck, HeartHandshake, IndianRupee, 
  CheckCircle2, Users, Download, ExternalLink, 
  Sparkles, Plus, ChevronRight
} from 'lucide-react';

export function HrBenefits() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };

  const benefitPlans = [
    {
      category: 'Group Health Mediclaim (GMC)',
      provider: 'HDFC ERGO General Insurance',
      coverage: '₹10,00,000 Sum Insured (1+5 Family Cover)',
      enrolled: '149 Employees + 286 Dependents',
      status: 'Active (Policy #GMC-LINKUP-2026)',
      features: ['Cashless at 10,000+ Network Hospitals', 'Maternity Cover up to ₹1,00,000', 'Zero Waiting Period for Pre-Existing Diseases']
    },
    {
      category: 'Group Personal Accident (GPA)',
      provider: 'Tata AIG General Insurance',
      coverage: '3x Annual Base CTC (Accidental Cover)',
      enrolled: '149 Employees (100% Staff)',
      status: 'Active (Policy #GPA-LINKUP-2026)',
      features: ['24x7 Worldwide Coverage', 'Permanent Total Disability Benefit', 'Medical Expenses Reimbursement']
    },
    {
      category: 'Group Term Life Insurance (GTL)',
      provider: 'ICICI Prudential Life',
      coverage: '4x Annual Base CTC (Life Assurance)',
      enrolled: '149 Employees (100% Staff)',
      status: 'Active (Policy #GTL-LINKUP-2026)',
      features: ['Natural & Accidental Death Benefit', 'Terminal Illness Accelerated Payout', 'Simple Paperless Claims']
    },
    {
      category: 'Corporate Wellness & Mental Health',
      provider: 'Cult.fit & YourDOST Network',
      coverage: 'Subsidized Fitness & Unlimited Counseling',
      enrolled: '112 Active Users (75% adoption)',
      status: 'Active',
      features: ['₹1,500/mo Gym & Fitness Subsidy', 'Confidential 1-on-1 Mental Wellness Sessions', 'Annual Executive Full-Body Health Checkups']
    }
  ];

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Employee Benefits & Group Medical Insurance"
      description="Manage enterprise healthcare policies, cashless hospital networks, dependent endorsements, and wellness programs."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compensation & Payroll' },
        { label: 'Benefits & Insurance' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Award size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Health Cover Limit</p>
              <h3 className="text-2xl font-bold text-slate-900">₹10 Lakhs</h3>
              <p className="text-xs text-purple-600 font-medium">Per employee family floater</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Lives Insured</p>
              <h3 className="text-2xl font-bold text-slate-900">435 Lives</h3>
              <p className="text-xs text-emerald-600 font-medium">149 staff + 286 dependents</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cashless TPA Cards</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Issued</h3>
              <p className="text-xs text-blue-600 font-medium">Medi Assist digital cards</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Wellness Engagement</p>
              <h3 className="text-2xl font-bold text-slate-900">75.1%</h3>
              <p className="text-xs text-amber-600 font-medium">112 active Cult/YourDOST users</p>
            </div>
          </div>
        </div>

        {/* Benefits Policy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {benefitPlans.map((plan, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h4 className="text-base font-bold text-slate-900">{plan.category}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{plan.provider}</p>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    Active
                  </span>
                </div>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Sum Insured / Benefit</span>
                  <p className="text-sm font-bold text-slate-900 mt-0.5">{plan.coverage}</p>
                  <p className="text-[11px] text-blue-600 mt-1">{plan.enrolled}</p>
                </div>

                <div className="mt-4 space-y-1.5 text-xs text-slate-600">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-400 font-mono text-[11px]">{plan.status}</span>
                <button 
                  onClick={() => alert(`Policy document for ${plan.category} downloaded.`)}
                  className="font-semibold text-blue-600 hover:underline flex items-center gap-1"
                >
                  Download Policy Schedule <ExternalLink size={12} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
