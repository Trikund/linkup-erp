import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  User, ShieldCheck, Mail, Phone, MapPin, 
  Building, Calendar, Clock, Key, Award, CheckCircle2, 
  Users, Briefcase, Save, HeartHandshake
} from 'lucide-react';

export function HrProfile() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [delegationActive, setDelegationActive] = useState(false);
  const [delegateTo, setDelegateTo] = useState('Pooja Saxena (Associate HRBP)');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSaveDelegation = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="HRBP Executive Profile & Operations Settings"
      description="View executive credentials, organizational reporting line, HRIS administrative access, and delegation parameters."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compliance & Governance' },
        { label: 'HRBP Profile & Settings' }
      ]}
    >
      <div className="space-y-6">
        {/* Executive Header Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-800 text-white font-bold text-2xl flex items-center justify-center shadow-lg border-2 border-white">
                AD
              </div>
              <div>
                <div className="flex items-center gap-2.5">
                  <h2 className="text-xl font-bold text-slate-900">Anita Desai</h2>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    HR-0104
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-500 mt-1">
                  Lead HR Business Partner • People Operations & Talent Development
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2">
                  <span className="flex items-center gap-1">
                    <Building size={13} className="text-slate-400" />
                    Bengaluru HQ (Floor 2, HR Suite)
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Mail size={13} className="text-slate-400" />
                    anita.desai@linkupcorp.com
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right sm:border-l sm:border-slate-100 sm:pl-6">
              <span className="text-[10px] text-slate-400 font-bold uppercase block">Reports Directly To</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">Suresh Kumar</p>
              <p className="text-xs text-blue-600 font-medium">Chief Human Resources Officer</p>
            </div>
          </div>
        </div>

        {/* HR Mandate & Authority Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Workforce Scope</p>
              <h3 className="text-2xl font-bold text-slate-900">149 Staff</h3>
              <p className="text-xs text-blue-600 font-medium">8 Departments covered</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Dedicated Pod</p>
              <h3 className="text-2xl font-bold text-slate-900">Engineering & Tech</h3>
              <p className="text-xs text-purple-600 font-medium">Partner to Priya Mehta</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Compliance Clearance</p>
              <h3 className="text-2xl font-bold text-slate-900">Level 4</h3>
              <p className="text-xs text-emerald-600 font-medium">Full HRIS administrative rights</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Key size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">2FA Security</p>
              <h3 className="text-2xl font-bold text-slate-900">FIDO2 Active</h3>
              <p className="text-xs text-emerald-600 font-medium">Hardware YubiKey verified</p>
            </div>
          </div>
        </div>

        {/* Temporary Delegation Desk */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Temporary HR Approval Delegation</h3>
              <p className="text-xs text-slate-500">Route employee leave approvals and onboarding checklists to secondary HRBP during leaves.</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
              delegationActive ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-slate-100 text-slate-600 border-slate-200'
            }`}>
              {delegationActive ? 'Delegation Active' : 'Delegation Inactive'}
            </span>
          </div>

          {savedSuccess && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} /> Delegation settings saved to corporate governance ledger.
            </div>
          )}

          <form onSubmit={handleSaveDelegation} className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
              <input 
                type="checkbox"
                id="toggleHrDoa"
                checked={delegationActive}
                onChange={(e) => setDelegationActive(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 cursor-pointer"
              />
              <label htmlFor="toggleHrDoa" className="text-xs font-bold text-slate-800 cursor-pointer">
                Enable out-of-office delegation to secondary HRBP
              </label>
            </div>

            {delegationActive && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Designated Backup HRBP</label>
                  <select 
                    value={delegateTo}
                    onChange={(e) => setDelegateTo(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  >
                    <option value="Pooja Saxena (Associate HRBP)">Pooja Saxena (Associate HRBP • Engineering)</option>
                    <option value="Suresh Kumar (CHRO)">Suresh Kumar (Chief Human Resources Officer)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Delegation Period</label>
                  <input 
                    type="text"
                    defaultValue="Oct 24 - Oct 28, 2026 (Annual Leave)"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>
              </div>
            )}

            <button 
              type="submit"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Save size={14} /> Save Profile Settings
            </button>
          </form>
        </div>
      </div>
    </CorporateLayout>
  );
}
