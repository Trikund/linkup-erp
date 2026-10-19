import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  UserCheck, ShieldCheck, Mail, Phone, MapPin, 
  Building, Calendar, Clock, Key, Award, CheckCircle2, 
  Users, IndianRupee, Briefcase, ChevronRight, Save
} from 'lucide-react';

export function ManagerProfile() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [delegationActive, setDelegationActive] = useState(false);
  const [delegateTo, setDelegateTo] = useState('Vikram Malhotra (Senior Backend Lead)');
  const [delegationReason, setDelegationReason] = useState('Annual Leave Coverage');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveDelegation = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Manager Profile & Delegation of Authority"
      description="View executive credentials, signing limits, organizational reporting line, and configure temporary approval delegates."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics & Governance' },
        { label: 'Manager Profile & Delegation' }
      ]}
    >
      <div className="space-y-6">
        {/* Executive Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-800 text-white font-bold text-2xl flex items-center justify-center shadow-lg border-2 border-white">
                PM
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-slate-900">Priya Mehta</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    MGR-0102
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Engineering Manager • Web & Platform Core (Pod 4)
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Building size={13} className="text-slate-400" />
                    Bengaluru HQ (Floor 4, Pod 4)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail size={13} className="text-slate-400" />
                    priya.mehta@linkupcorp.com
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Reports Directly To</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">Siddharth Mehta</p>
              <p className="text-xs text-blue-600 font-medium">VP Engineering & Architecture</p>
            </div>
          </div>
        </div>

        {/* Managerial Mandate & Authority Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Direct Reports</p>
              <h3 className="text-2xl font-bold text-slate-900">8 Engineers</h3>
              <p className="text-xs text-blue-600 font-medium">Full management scope</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <IndianRupee size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Financial Signing Limit</p>
              <h3 className="text-2xl font-bold text-slate-900">₹2,50,000</h3>
              <p className="text-xs text-emerald-600 font-medium">Tier-1 Managerial Authority</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cost Center Pool</p>
              <h3 className="text-2xl font-bold text-slate-900">CC-ENG-402</h3>
              <p className="text-xs text-purple-600 font-medium">₹45.0 Lakhs Q4 Budget</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Zero-Trust Passkey</p>
              <h3 className="text-2xl font-bold text-slate-900">Enforced</h3>
              <p className="text-xs text-emerald-600 font-medium">Hardware FIDO2 Touch ID</p>
            </div>
          </div>
        </div>

        {/* Delegation of Authority Configuration Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Delegation of Authority (DoA)</h3>
              <p className="text-xs text-slate-500">Temporarily re-route leave approvals, sprint signoffs, and expense authorizations when out of office.</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
              delegationActive ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
              {delegationActive ? 'Delegation Active' : 'Delegation Inactive'}
            </span>
          </div>

          {savedSuccess && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} /> Delegation parameters saved to corporate governance ledger.
            </div>
          )}

          <form onSubmit={handleSaveDelegation} className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <input 
                type="checkbox"
                id="toggleDoa"
                checked={delegationActive}
                onChange={(e) => setDelegationActive(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="toggleDoa" className="text-xs font-bold text-slate-800 cursor-pointer">
                Activate Temporary Delegation of Authority during out-of-office / leave period
              </label>
            </div>

            {delegationActive && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designated Acting Manager</label>
                  <select 
                    value={delegateTo}
                    onChange={(e) => setDelegateTo(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  >
                    <option value="Vikram Malhotra (Senior Backend Lead)">Vikram Malhotra (Senior Backend Lead • IC3)</option>
                    <option value="Amit Kumar (Lead QA Automation)">Amit Kumar (Lead QA Automation • IC4)</option>
                    <option value="Siddharth Mehta (VP Engineering)">Siddharth Mehta (VP Engineering & Architecture)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Reason for Delegation</label>
                  <input 
                    type="text"
                    value={delegationReason}
                    onChange={(e) => setDelegationReason(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Save size={14} /> Save Delegation Settings
            </button>
          </form>
        </div>

        {/* Direct Reports Reporting Hierarchy */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-4">Organizational Tree: Pod 4 Structure</h3>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200/70">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                PM
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Priya Mehta (You)</p>
                <p className="text-[11px] text-slate-500">Engineering Manager • Web & Platform Core</p>
              </div>
            </div>

            <div className="mt-3 pl-6 border-l-2 border-blue-400 space-y-2">
              <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Direct Reports (8)</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
                {[
                  { name: 'Rahul Sharma', role: 'Senior Frontend Dev (IC3)' },
                  { name: 'Vikram Malhotra', role: 'Senior Backend Eng (IC3)' },
                  { name: 'Sneha Roy', role: 'Senior Product Designer (IC3)' },
                  { name: 'Amit Kumar', role: 'Lead QA Automation (IC4)' },
                  { name: 'Rohan Das', role: 'Frontend Eng II (IC2)' },
                  { name: 'Neha Verma', role: 'Associate Software Eng (IC1)' },
                  { name: 'Siddharth Rao', role: 'DevOps & SRE (IC3)' },
                  { name: 'Ananya Sen', role: 'Backend Eng II (IC2)' }
                ].map((rep, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-lg border border-slate-200 shadow-xs">
                    <p className="text-xs font-bold text-slate-800">{rep.name}</p>
                    <p className="text-[10px] text-slate-500">{rep.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
