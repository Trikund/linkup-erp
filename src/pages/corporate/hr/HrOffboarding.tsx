import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  UserCheck, ShieldCheck, CheckCircle2, Clock, 
  Calendar, FileText, AlertTriangle, Check, X, 
  Laptop, IndianRupee, Download, ChevronRight
} from 'lucide-react';

interface ExitCase {
  id: string;
  name: string;
  role: string;
  dept: string;
  manager: string;
  resignedDate: string;
  lwd: string; // Last Working Day
  reason: string;
  clearanceProgress: number;
  avatar: string;
  gates: { dept: string; label: string; passed: boolean }[];
}

export function HrOffboarding() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  
  const [exitCases, setExitCases] = useState<ExitCase[]>([
    {
      id: 'EXIT-081',
      name: 'Suresh Pillai',
      role: 'Senior DevOps Engineer',
      dept: 'Engineering & Cloud',
      manager: 'Priya Mehta',
      resignedDate: 'Sep 05, 2026',
      lwd: 'Nov 05, 2026',
      reason: 'Relocating to Europe for international postgraduate research.',
      clearanceProgress: 75,
      avatar: 'SP',
      gates: [
        { dept: 'Manager', label: 'Terraform & Kubernetes Runbooks Knowledge Transfer signed by Priya Mehta', passed: true },
        { dept: 'IT Ops', label: 'Company MacBook Pro 16" & YubiKey hardware returned to IT Helpdesk', passed: false },
        { dept: 'Finance', label: 'Corporate AMEX card cancelled & zero pending travel claims verified', passed: true },
        { dept: 'HR & People', label: 'Exit interview conducted & Full and Final (FnF) statement prepared', passed: true }
      ]
    },
    {
      id: 'EXIT-082',
      name: 'Megha Saxena',
      role: 'Senior Financial Analyst',
      dept: 'Finance & Accounts',
      manager: 'Alok Gupta',
      resignedDate: 'Sep 01, 2026',
      lwd: 'Oct 31, 2026',
      reason: 'Pursuing leadership opportunity at an investment venture firm.',
      clearanceProgress: 90,
      avatar: 'MS',
      gates: [
        { dept: 'Manager', label: 'Q3 Financial close ledger and FP&A models transferred to Alok Gupta', passed: true },
        { dept: 'IT Ops', label: 'Dell Workstation returned and NetSuite financial permissions revoked', passed: true },
        { dept: 'Finance', label: 'Clearance certificate issued for zero outstanding departmental advances', passed: true },
        { dept: 'HR & People', label: 'Relieving Letter & Form 16 dispatch scheduled for last day', passed: false }
      ]
    }
  ]);

  const toggleGate = (exitId: string, gateIdx: number) => {
    setExitCases(prev => prev.map(c => {
      if (c.id !== exitId) return c;
      const updatedGates = [...c.gates];
      updatedGates[gateIdx].passed = !updatedGates[gateIdx].passed;
      const passedCount = updatedGates.filter(g => g.passed).length;
      const progress = Math.round((passedCount / updatedGates.length) * 100);
      return { ...c, gates: updatedGates, clearanceProgress: progress };
    }));
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Offboarding & Exit Clearance Operations"
      description="Manage resignations, 4-gate department exit clearances, asset recovery, and Full & Final settlements."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Talent Acquisition & Onboarding' },
        { label: 'Offboarding & Clearance' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Serving Notice</p>
              <h3 className="text-2xl font-bold text-slate-900">2 Employees</h3>
              <p className="text-xs text-amber-600 font-medium">Standard 60-day notice</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Clearance Velocity</p>
              <h3 className="text-2xl font-bold text-slate-900">82.5%</h3>
              <p className="text-xs text-emerald-600 font-medium">Average gate completion</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Annual Attrition</p>
              <h3 className="text-2xl font-bold text-slate-900">4.2%</h3>
              <p className="text-xs text-blue-600 font-medium">Industry leading retention</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">FnF Settlement SLA</p>
              <h3 className="text-2xl font-bold text-slate-900">&lt; 7 Days</h3>
              <p className="text-xs text-purple-600 font-medium">From last working day</p>
            </div>
          </div>
        </div>

        {/* Exit Cases List */}
        <div className="space-y-6">
          {exitCases.map(exit => (
            <div key={exit.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    {exit.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{exit.name}</h4>
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{exit.id}</span>
                      <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                        Notice Period
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{exit.role} • {exit.dept}</p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Reporting Manager: <strong className="text-slate-800">{exit.manager}</strong> • Last Working Day: <strong className="text-rose-600 font-bold">{exit.lwd}</strong>
                    </p>
                    <p className="text-xs text-slate-500 mt-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <strong className="text-slate-700">Exit Rationale: </strong> {exit.reason}
                    </p>
                  </div>
                </div>

                <div className="lg:w-48 text-right flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Clearance Status</span>
                    <span className="text-2xl font-black text-slate-900">{exit.clearanceProgress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        exit.clearanceProgress === 100 ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${exit.clearanceProgress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* 4 Clearance Gates */}
              <div className="mt-4 pt-2">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-3">Department Clearance Signoff Gates</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exit.gates.map((gate, idx) => (
                    <div 
                      key={idx}
                      onClick={() => toggleGate(exit.id, idx)}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                        gate.passed ? 'bg-emerald-50/40 border-emerald-200 text-slate-800' : 'bg-slate-50 border-slate-200 text-slate-600'
                      }`}
                    >
                      <input 
                        type="checkbox"
                        checked={gate.passed}
                        onChange={() => {}}
                        className="mt-0.5 text-emerald-600 rounded focus:ring-emerald-500 cursor-pointer"
                      />
                      <div className="text-xs">
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-white border border-slate-200 mr-1.5">
                          {gate.dept}
                        </span>
                        <span className={gate.passed ? 'font-semibold text-slate-900' : 'text-slate-600'}>
                          {gate.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button 
                  onClick={() => alert(`Full and Final calculation sheet generated for ${exit.name}`)}
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                >
                  Generate FnF Slip
                </button>
                <button 
                  onClick={() => alert(`Exit Interview transcript opened for ${exit.name}`)}
                  className="px-4 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                >
                  Conduct Exit Interview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
