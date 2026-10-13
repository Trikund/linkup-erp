import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Settings, Building2, Calendar, Award, Shield, 
  Smartphone, Save, CheckCircle2, Key, Database, RefreshCw
} from 'lucide-react';

export function AdminSettings() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'profile' | 'academic' | 'grading' | 'gateways' | 'security'>('profile');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Institutional Configuration & ERP Settings" 
      description="Greenfield Senior Secondary School • Affiliation #2130842 • System Parameters"
    >
      <div className="space-y-6">
        {/* Save confirmation toast */}
        {isSaved && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl flex items-center gap-2.5 text-sm font-semibold shadow-sm animate-in fade-in duration-200">
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            <span>Institutional configuration parameters updated and saved successfully!</span>
          </div>
        )}

        {/* Tab Selection */}
        <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'profile'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Building2 size={16} /> Institution & CBSE Profile
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'academic'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Calendar size={16} /> Academic Session 2026-27
          </button>
          <button
            onClick={() => setActiveTab('grading')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'grading'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Award size={16} /> CBSE Grading System
          </button>
          <button
            onClick={() => setActiveTab('gateways')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'gateways'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Smartphone size={16} /> Gateways & Integrations
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeTab === 'security'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            <Shield size={16} /> Security & Access
          </button>
        </div>

        {/* Tab 1: Institution Profile */}
        {activeTab === 'profile' && (
          <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">Institutional Identity & Statutory Registration</h3>
              <p className="text-xs text-slate-500 mt-0.5">Parameters verified with Central Board of Secondary Education (CBSE) registry</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Official Institution Name</label>
                <input 
                  type="text" 
                  defaultValue="Greenfield Senior Secondary School"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">CBSE Affiliation Number</label>
                <input 
                  type="text" 
                  defaultValue="2130842 (Senior Secondary Wing)"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">CBSE School Code</label>
                <input 
                  type="text" 
                  defaultValue="25142"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">National UDISE+ Code</label>
                <input 
                  type="text" 
                  defaultValue="07040201842"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl font-mono focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Head of Institution / Principal</label>
                <input 
                  type="text" 
                  defaultValue="Dr. V.K. Singhal (M.Sc., M.Ed., Ph.D.)"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none font-medium"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Official Administrative Email</label>
                <input 
                  type="email" 
                  defaultValue="principal@greenfieldacademy.edu.in"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Campus Postal Address</label>
                <input 
                  type="text" 
                  defaultValue="Sector 14, Institutional Area, Phase II, New Delhi – 110075"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all"
              >
                <Save size={16} /> Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Tab 2: Academic Session */}
        {activeTab === 'academic' && (
          <form onSubmit={handleSave} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h3 className="text-base font-bold text-slate-900">Academic Session & Bell Schedule Configuration</h3>
              <p className="text-xs text-slate-500 mt-0.5">Parameters governing daily periods, terms, and attendance norms</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Active Academic Session</label>
                <input 
                  type="text" 
                  defaultValue="2026-2027"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl font-bold text-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Session Start Date</label>
                <input 
                  type="date" 
                  defaultValue="2026-04-01"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Session End Date</label>
                <input 
                  type="date" 
                  defaultValue="2027-03-31"
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Daily Teaching Periods</label>
                <input 
                  type="number" 
                  defaultValue={8}
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Period Duration (Minutes)</label>
                <input 
                  type="number" 
                  defaultValue={45}
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Min. Attendance for Board Exams (%)</label>
                <input 
                  type="number" 
                  defaultValue={75}
                  className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl font-bold text-rose-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-100">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-sm transition-all"
              >
                <Save size={16} /> Save Changes
              </button>
            </div>
          </form>
        )}

        {/* Tab 3: Grading System */}
        {activeTab === 'grading' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">CBSE Continuous and Comprehensive 9-Point Grading Scale</h3>
            <p className="text-xs text-slate-500">Standard grading scale configured for report cards and Board marks submission</p>

            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Grade</th>
                    <th className="py-3 px-4">Marks Range (%)</th>
                    <th className="py-3 px-4">Grade Point</th>
                    <th className="py-3 px-4">Performance Descriptor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">A1</td>
                    <td className="py-2.5 px-4 font-semibold">91% - 100%</td>
                    <td className="py-2.5 px-4">10.0</td>
                    <td className="py-2.5 px-4 text-emerald-700 font-medium">Outstanding / Top 1/8th of passed candidates</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">A2</td>
                    <td className="py-2.5 px-4 font-semibold">81% - 90%</td>
                    <td className="py-2.5 px-4">9.0</td>
                    <td className="py-2.5 px-4 text-slate-700 font-medium">Excellent / Next 1/8th of passed candidates</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">B1</td>
                    <td className="py-2.5 px-4 font-semibold">71% - 80%</td>
                    <td className="py-2.5 px-4">8.0</td>
                    <td className="py-2.5 px-4 text-slate-700 font-medium">Very Good / Next 1/8th of passed candidates</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">B2</td>
                    <td className="py-2.5 px-4 font-semibold">61% - 70%</td>
                    <td className="py-2.5 px-4">7.0</td>
                    <td className="py-2.5 px-4 text-slate-700 font-medium">Good / Next 1/8th of passed candidates</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">C1</td>
                    <td className="py-2.5 px-4 font-semibold">51% - 60%</td>
                    <td className="py-2.5 px-4">6.0</td>
                    <td className="py-2.5 px-4 text-slate-700 font-medium">Fair / Next 1/8th of passed candidates</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-blue-600">D</td>
                    <td className="py-2.5 px-4 font-semibold">33% - 40%</td>
                    <td className="py-2.5 px-4">4.0</td>
                    <td className="py-2.5 px-4 text-amber-700 font-medium">Minimum Qualifying Pass Standard</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4 font-bold text-rose-600">E</td>
                    <td className="py-2.5 px-4 font-semibold">&lt; 33%</td>
                    <td className="py-2.5 px-4">0.0</td>
                    <td className="py-2.5 px-4 text-rose-700 font-medium">Essential Repeat (Remedial Required)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Gateways */}
        {activeTab === 'gateways' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">Third-Party Gateways & Omni-Channel Connectivity</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-800 uppercase">Meta WhatsApp Business API</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Connected</span>
                </div>
                <p className="text-xs text-slate-600">Webhook Sync: Active • Phone ID: +91 98110 02100 (Greenfield Verified)</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-800 uppercase">Govt. DLT SMS Gateway (ValueFirst)</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800">Active</span>
                </div>
                <p className="text-xs text-slate-600">Sender ID: GFASCH • Credits Remaining: 84,200 SMS</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-800 uppercase">Razorpay & HDFC SmartHub Gateway</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Production Live</span>
                </div>
                <p className="text-xs text-slate-600">Direct Fee T+1 Settlement to Greenfield Senior Sec School Account</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-800 uppercase">Biometric & RFID Attendance Server</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">Online</span>
                </div>
                <p className="text-xs text-slate-600">12 Campus Biometric Turnstiles sync every 60 seconds</p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 5: Security */}
        {activeTab === 'security' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">Security Policies & Two-Factor Authentication (2FA)</h3>
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Enforce 2-Factor Authentication (OTP / TOTP)</h4>
                  <p className="text-[11px] text-slate-500">Mandatory for all Admin, Accounts and Exam Cell staff logins</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">Session Inactivity Auto-Logout</h4>
                  <p className="text-[11px] text-slate-500">Automatically logout inactive users after 30 minutes</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </div>

              <div className="flex items-center justify-between p-3.5 bg-slate-50 rounded-xl border border-slate-200">
                <div>
                  <h4 className="text-xs font-bold text-slate-800">DPDP Act Personal Data Redaction</h4>
                  <p className="text-[11px] text-slate-500">Mask Aadhaar numbers and bank details in student lists</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded" />
              </div>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
