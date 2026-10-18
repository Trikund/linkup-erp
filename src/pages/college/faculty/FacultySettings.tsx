import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Settings, Shield, Bell, Key, Smartphone, 
  CheckCircle2, Laptop, Clock, Save, Lock
} from 'lucide-react';

export function FacultySettings() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [attendanceThreshold, setAttendanceThreshold] = useState('75');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Settings & Security" 
      description="Faculty portal preferences, authentication security, and student alert thresholds."
    >
      {isSaved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-6 flex items-center gap-2 shadow-sm">
          <CheckCircle2 size={18} className="text-emerald-600" />
          <span className="text-xs font-bold">Preferences and security settings saved successfully!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Form Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notification Thresholds */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                <Bell size={16} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Automated Student Alerts</h3>
            </div>
            <p className="text-xs text-slate-500 mb-5">Configure automated parent and student notifications triggered by ERP attendance registers.</p>

            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Low Attendance Warning Cutoff (%)
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    min="50"
                    max="85"
                    value={attendanceThreshold}
                    onChange={(e) => setAttendanceThreshold(e.target.value)}
                    className="w-24 text-sm font-bold px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                  <span className="text-xs text-slate-500">Students below this threshold appear in your critical dashboard widget.</span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={emailAlerts}
                    onChange={(e) => setEmailAlerts(e.target.checked)}
                    className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Daily Student Submission Digest</span>
                    <span className="text-[11px] text-slate-500">Receive evening email summary when students submit labs or capstone deliverables.</span>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={smsAlerts}
                    onChange={(e) => setSmsAlerts(e.target.checked)}
                    className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                  />
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Instant SMS on Shortage Escalation</span>
                    <span className="text-[11px] text-slate-500">Auto-dispatch SMS to guardian when a ward falls below 65% critical debarment cutoff.</span>
                  </div>
                </label>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5"
                >
                  <Save size={14} />
                  <span>Save Preferences</span>
                </button>
              </div>
            </form>
          </div>

          {/* Password & Security */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Key size={16} />
              </div>
              <h3 className="text-base font-bold text-slate-800">Change ERP Access Password</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">Password must be at least 10 characters and contain alphanumeric symbols.</p>

            <div className="space-y-3 max-w-md">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">New Password</label>
                <input
                  type="password"
                  placeholder="••••••••••••"
                  className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>
              <button className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all">
                Update Password
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: 2FA & Active Sessions */}
        <div className="space-y-6">
          {/* Two-Factor Authentication (2FA) */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Smartphone size={18} className="text-[#7c3aed]" />
                <h4 className="text-sm font-bold text-slate-800">Two-Factor Authentication</h4>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase bg-emerald-100 text-emerald-800">
                Active
              </span>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Your account is protected with Google Authenticator TOTP token verification for confidential exam marks entry.
            </p>
            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-mono">
              Device: iPhone 15 Pro • Registered Oct 2024
            </div>
          </div>

          {/* Active Sessions */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-3">Active Device Sessions</h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                <div className="flex items-center gap-2.5">
                  <Laptop size={16} className="text-[#7c3aed]" />
                  <div>
                    <p className="font-bold text-slate-800">Apple Silicon MacBook Pro</p>
                    <p className="text-[10px] text-slate-400">Campus Wi-Fi • Tech Block 3</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Current</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-2.5">
                  <Smartphone size={16} className="text-slate-400" />
                  <div>
                    <p className="font-bold text-slate-800">Safari on iOS</p>
                    <p className="text-[10px] text-slate-400">Logged in 2 days ago</p>
                  </div>
                </div>
                <button className="text-[11px] font-bold text-red-600 hover:underline">Revoke</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
