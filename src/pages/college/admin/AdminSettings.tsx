import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Settings, Building, ShieldCheck, Database, Save, 
  RefreshCw, CheckCircle2, Lock, Bell, Mail, Key
} from 'lucide-react';

export function AdminSettings() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [activeTab, setActiveTab] = useState<'general' | 'academic' | 'security' | 'backup'>('general');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Institution Settings' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <Settings className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Institution Configuration & Master Controls</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ERP Enterprise v4.8
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Manage collegiate institutional metadata, academic term calendars, security access roles, and automated disaster recovery.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {savedNotice && (
              <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1 animate-pulse">
                <CheckCircle2 className="w-4 h-4" /> Settings Saved!
              </span>
            )}
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition"
            >
              <Save className="w-4 h-4" />
              Save Configuration
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 bg-white px-6 rounded-t-2xl">
          <button
            onClick={() => setActiveTab('general')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'general'
                ? 'border-[#7c3aed] text-[#7c3aed]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Building className="w-4 h-4" /> Institution Profile
          </button>
          <button
            onClick={() => setActiveTab('academic')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'academic'
                ? 'border-[#7c3aed] text-[#7c3aed]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Settings className="w-4 h-4" /> Academic Terms
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'security'
                ? 'border-[#7c3aed] text-[#7c3aed]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <ShieldCheck className="w-4 h-4" /> Security & 2FA
          </button>
          <button
            onClick={() => setActiveTab('backup')}
            className={`py-3.5 px-4 text-xs font-semibold border-b-2 transition flex items-center gap-2 ${
              activeTab === 'backup'
                ? 'border-[#7c3aed] text-[#7c3aed]'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <Database className="w-4 h-4" /> Database & Backups
          </button>
        </div>

        {/* Tab Contents */}
        <div className="bg-white rounded-b-2xl border border-gray-100 shadow-sm p-6 -mt-6">
          {activeTab === 'general' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Institutional Identity & Registry</h3>
                <p className="text-xs text-gray-500 mt-0.5">Primary college information displayed on all reports, transcripts and receipts.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">University / Institute Name</label>
                  <input
                    type="text"
                    defaultValue="Apex Institute of Technology"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Institutional Code / AICTE Permanent ID</label>
                  <input
                    type="text"
                    defaultValue="1-492019481 / AIT-DELHI-NCR"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Affiliating University</label>
                  <input
                    type="text"
                    defaultValue="Dr. A.P.J. Abdul Kalam Technical University (AKTU)"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Official Contact Email</label>
                  <input
                    type="email"
                    defaultValue="registrar@apex.edu.in"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block font-semibold text-gray-700 mb-1">Campus Address</label>
                  <input
                    type="text"
                    defaultValue="Knowledge Park III, Greater Noida, Uttar Pradesh 201310, India"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'academic' && (
            <div className="space-y-6 max-w-4xl text-xs">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Academic Calendar & Cutoff Rules</h3>
                <p className="text-xs text-gray-500 mt-0.5">Configure semester dates, minimum attendance cutoff for hall tickets.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Active Academic Session</label>
                  <input
                    type="text"
                    defaultValue="2026 - 2027 (Odd Semester)"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Mandatory Exam Attendance Cutoff (%)</label>
                  <input
                    type="number"
                    defaultValue={75}
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Term Start Date</label>
                  <input
                    type="date"
                    defaultValue="2026-08-01"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-1">Term End Date</label>
                  <input
                    type="date"
                    defaultValue="2026-12-31"
                    className="w-full px-3.5 py-2 border border-gray-200 rounded-lg text-gray-800 font-medium focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
                  />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="space-y-6 max-w-4xl text-xs">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Security, 2FA & Multi-Tenant Privileges</h3>
                <p className="text-xs text-gray-500 mt-0.5">Enforce hardware keys, TOTP 2FA, and strict role permissions.</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-900">Enforce Two-Factor Authentication (2FA) for Faculty & Staff</div>
                    <div className="text-[11px] text-gray-500">Requires Google Authenticator or SMS OTP on every login</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#7c3aed] rounded border-gray-300 focus:ring-[#7c3aed]" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-900">COE Question Paper Dual-Token Authentication</div>
                    <div className="text-[11px] text-gray-500">Requires approval from both Controller of Exams and Principal to unlock vault</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#7c3aed] rounded border-gray-300 focus:ring-[#7c3aed]" />
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div>
                    <div className="font-semibold text-gray-900">Automated Session Timeout</div>
                    <div className="text-[11px] text-gray-500">Logs out idle administrative sessions after 15 minutes of inactivity</div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 text-[#7c3aed] rounded border-gray-300 focus:ring-[#7c3aed]" />
                </div>
              </div>
            </div>
          )}

          {activeTab === 'backup' && (
            <div className="space-y-6 max-w-4xl text-xs">
              <div>
                <h3 className="text-sm font-bold text-gray-900">Enterprise Disaster Recovery & Cloud Backups</h3>
                <p className="text-xs text-gray-500 mt-0.5">Automatic hourly incremental snapshots and cold storage replication.</p>
              </div>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-emerald-900">Last Backup Successful: Today at 18:00 IST</div>
                  <div className="text-[11px] text-emerald-700">Encrypted AES-256 snapshot saved to AWS S3 (ap-south-1 Mumbai)</div>
                </div>
                <button className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition">
                  Trigger Manual Backup
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </CollegeLayout>
  );
}
