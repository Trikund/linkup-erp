import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  HeartHandshake, Users, CheckCircle2, Clock, 
  Calendar, Laptop, ShieldCheck, Mail, Plus, 
  ChevronRight, ArrowUpRight, Check, X, FileText
} from 'lucide-react';

interface OnboardingJoiner {
  id: string;
  name: string;
  role: string;
  dept: string;
  manager: string;
  buddy: string;
  joinDate: string;
  progress: number;
  avatar: string;
  checklist: { task: string; done: boolean; category: 'HR' | 'IT' | 'Manager' }[];
}

export function HrOnboarding() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [joiners, setJoiners] = useState<OnboardingJoiner[]>([
    {
      id: 'EMP-0612',
      name: 'Rohan Das',
      role: 'Frontend Engineer II',
      dept: 'Engineering (Pod 4)',
      manager: 'Priya Mehta',
      buddy: 'Rahul Sharma',
      joinDate: 'Oct 02, 2026',
      progress: 90,
      avatar: 'RD',
      checklist: [
        { task: 'Employee Form 11, KYC & Bank Details verification', done: true, category: 'HR' },
        { task: 'Jamf MDM MacBook M3 provisioning & BitLocker/FileVault', done: true, category: 'IT' },
        { task: 'Google Workspace, Slack & GitHub Enterprise SSO provisioned', done: true, category: 'IT' },
        { task: 'Group Health Mediclaim policy (₹10L Cover) enrollment', done: true, category: 'HR' },
        { task: 'POSH & Information Security compliance certification', done: true, category: 'HR' },
        { task: 'Engineering Pod 4 codebase walk-through with Buddy', done: true, category: 'Manager' },
        { task: '30-Day probation review milestone scheduled with Priya Mehta', done: false, category: 'Manager' }
      ]
    },
    {
      id: 'EMP-0720',
      name: 'Neha Verma',
      role: 'Associate Software Engineer',
      dept: 'Engineering (Pod 4)',
      manager: 'Priya Mehta',
      buddy: 'Sneha Roy',
      joinDate: 'Oct 08, 2026',
      progress: 85,
      avatar: 'NV',
      checklist: [
        { task: 'Employee Form 11, KYC & Bank Details verification', done: true, category: 'HR' },
        { task: 'Jamf MDM MacBook M3 provisioning & BitLocker/FileVault', done: true, category: 'IT' },
        { task: 'Google Workspace, Slack & GitHub Enterprise SSO provisioned', done: true, category: 'IT' },
        { task: 'Group Health Mediclaim policy (₹10L Cover) enrollment', done: true, category: 'HR' },
        { task: 'POSH & Information Security compliance certification', done: true, category: 'HR' },
        { task: 'Design tokens & storybook repo setup with Buddy', done: true, category: 'Manager' },
        { task: '30-Day probation review milestone scheduled with Priya Mehta', done: false, category: 'Manager' }
      ]
    },
    {
      id: 'EMP-0688',
      name: 'Ananya Sen',
      role: 'Backend Engineer II',
      dept: 'Engineering (Pod 4)',
      manager: 'Priya Mehta',
      buddy: 'Vikram Malhotra',
      joinDate: 'Oct 15, 2026',
      progress: 70,
      avatar: 'AS',
      checklist: [
        { task: 'Employee Form 11, KYC & Bank Details verification', done: true, category: 'HR' },
        { task: 'Jamf MDM MacBook M3 provisioning & BitLocker/FileVault', done: true, category: 'IT' },
        { task: 'Google Workspace, Slack & GitHub Enterprise SSO provisioned', done: true, category: 'IT' },
        { task: 'Group Health Mediclaim policy (₹10L Cover) enrollment', done: true, category: 'HR' },
        { task: 'POSH & Information Security compliance certification', done: false, category: 'HR' },
        { task: 'Go microservices local Docker environment setup', done: false, category: 'Manager' },
        { task: '30-Day probation review milestone scheduled with Priya Mehta', done: false, category: 'Manager' }
      ]
    }
  ]);

  const toggleTask = (joinerId: string, taskIdx: number) => {
    setJoiners(prev => prev.map(j => {
      if (j.id !== joinerId) return j;
      const updated = [...j.checklist];
      updated[taskIdx].done = !updated[taskIdx].done;
      const doneCount = updated.filter(t => t.done).length;
      const newProgress = Math.round((doneCount / updated.length) * 100);
      return { ...j, checklist: updated, progress: newProgress };
    }));
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="New Hire Onboarding Operations"
      description="Track Day-1 induction workflows, IT hardware provisioning, statutory KYC submissions, and buddy pairings."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Talent Acquisition & Onboarding' },
        { label: 'New Hire Onboarding' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <HeartHandshake size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">New Joiners (Oct)</p>
              <h3 className="text-2xl font-bold text-slate-900">3 Employees</h3>
              <p className="text-xs text-purple-600 font-medium">100% Day-1 ready</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Hardware Deployed</p>
              <h3 className="text-2xl font-bold text-slate-900">3 Workstations</h3>
              <p className="text-xs text-blue-600 font-medium">MacBook M3 Pro with MDM</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">KYC Compliance</p>
              <h3 className="text-2xl font-bold text-slate-900">100% Passed</h3>
              <p className="text-xs text-emerald-600 font-medium">Form 11 & PAN verified</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Completion</p>
              <h3 className="text-2xl font-bold text-slate-900">82%</h3>
              <p className="text-xs text-amber-600 font-medium">Across all 7 steps</p>
            </div>
          </div>
        </div>

        {/* Action Header */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-slate-900">Active Cohort: October 2026 Intakes</h3>
            <p className="text-xs text-slate-500">Coordinate cross-functional tasks between HR, IT Facilities, and Engineering Managers.</p>
          </div>

          <button 
            onClick={() => alert('Initiate new onboarding intake workflow modal opened.')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition self-start sm:self-center"
          >
            <Plus size={15} /> Add New Joiner Intake
          </button>
        </div>

        {/* Joiners Checklist Cards */}
        <div className="space-y-6">
          {joiners.map(j => (
            <div key={j.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white font-bold text-base flex items-center justify-center shadow-md p-3">
                    {j.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{j.name}</h4>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">{j.id}</span>
                      <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">{j.dept}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{j.role} • Joined on {j.joinDate}</p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Manager: <strong className="text-slate-800">{j.manager}</strong> • Onboarding Buddy: <strong className="text-slate-800">{j.buddy}</strong>
                    </p>
                  </div>
                </div>

                <div className="lg:w-48 text-right flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Induction Progress</span>
                    <span className="text-2xl font-black text-slate-900">{j.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        j.progress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${j.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Checklist Items */}
              <div className="mt-4 pt-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Onboarding Action Items</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {j.checklist.map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => toggleTask(j.id, idx)}
                      className="flex items-start gap-2.5 p-2.5 rounded-xl border border-slate-100 bg-slate-50 hover:bg-slate-100/80 cursor-pointer transition"
                    >
                      <input 
                        type="checkbox"
                        checked={item.done}
                        onChange={() => {}}
                        className="mt-0.5 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
                      />
                      <div className="flex-1 text-xs">
                        <span className={`${item.done ? 'line-through text-slate-400' : 'text-slate-800 font-semibold'}`}>
                          {item.task}
                        </span>
                        <span className={`ml-2 text-[10px] font-bold px-1.5 py-0.2 rounded ${
                          item.category === 'HR' ? 'bg-purple-100 text-purple-700' :
                          item.category === 'IT' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'
                        }`}>
                          {item.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
