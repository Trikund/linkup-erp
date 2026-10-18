import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Settings, Bell, Lock, ShieldCheck, Smartphone, 
  CheckCircle2, Laptop, Globe, KeyRound
} from 'lucide-react';

export function StudentSettings() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [placementAlerts, setPlacementAlerts] = useState(true);
  const [attendanceAlerts, setAttendanceAlerts] = useState(true);
  const [whatsappAlerts, setWhatsappAlerts] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);
  const [savedToast, setSavedToast] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 4000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Settings & Security" 
      description="Notification Preferences • 2-Factor Authentication • Active Sessions"
    >
      {/* Toast Alert */}
      {savedToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">Account security and preferences updated successfully!</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-8">
        {/* Notification Preferences */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Bell size={18} className="text-[#7c3aed]" />
            <span>Campus Notification Preferences</span>
          </h3>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <div>
                <p className="font-bold text-slate-900">Placement Drive Instant SMS Alerts</p>
                <p className="text-slate-500 mt-0.5">Receive urgent SMS alerts whenever a new Tier-1 company shortlist is published.</p>
              </div>
              <button
                type="button"
                onClick={() => setPlacementAlerts(!placementAlerts)}
                className={`w-12 h-6 rounded-full transition-colors relative ${placementAlerts ? 'bg-[#7c3aed]' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${placementAlerts ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <div>
                <p className="font-bold text-slate-900">Daily Attendance & Biometric Summary Email</p>
                <p className="text-slate-500 mt-0.5">Automated end-of-day summary email with in/out timestamps and subject percentages.</p>
              </div>
              <button
                type="button"
                onClick={() => setAttendanceAlerts(!attendanceAlerts)}
                className={`w-12 h-6 rounded-full transition-colors relative ${attendanceAlerts ? 'bg-[#7c3aed]' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${attendanceAlerts ? 'right-1' : 'left-1'}`} />
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
              <div>
                <p className="font-bold text-slate-900">WhatsApp Circulars & Examination Alerts</p>
                <p className="text-slate-500 mt-0.5">Official datesheet updates and university circulars sent directly to +91 98765 43210.</p>
              </div>
              <button
                type="button"
                onClick={() => setWhatsappAlerts(!whatsappAlerts)}
                className={`w-12 h-6 rounded-full transition-colors relative ${whatsappAlerts ? 'bg-[#7c3aed]' : 'bg-slate-300'}`}
              >
                <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${whatsappAlerts ? 'right-1' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* Security & Password */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Lock size={18} className="text-[#7c3aed]" />
            <span>Account Security & Credentials</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs mb-6">
            <div className="space-y-3">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Current Password</label>
                <input type="password" placeholder="••••••••••••" className="w-full p-2.5 rounded-xl border border-slate-200" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">New Password</label>
                <input type="password" placeholder="Minimum 8 characters with numbers" className="w-full p-2.5 rounded-xl border border-slate-200" />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Confirm New Password</label>
                <input type="password" placeholder="Re-type new password" className="w-full p-2.5 rounded-xl border border-slate-200" />
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck size={20} className="text-[#7c3aed]" />
                  <h4 className="font-bold text-slate-900 text-sm">Two-Factor Authentication (2FA)</h4>
                </div>
                <p className="text-slate-600 leading-relaxed text-xs">
                  Secures your student portal by requiring an OTP sent via registered SMS or Authenticator App during login.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-200 flex items-center justify-between">
                <span className="font-bold text-slate-700">{twoFactor ? '2FA Enabled' : '2FA Disabled'}</span>
                <button
                  type="button"
                  onClick={() => setTwoFactor(!twoFactor)}
                  className={`w-12 h-6 rounded-full transition-colors relative ${twoFactor ? 'bg-[#7c3aed]' : 'bg-slate-300'}`}
                >
                  <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${twoFactor ? 'right-1' : 'left-1'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Sessions */}
          <div className="pt-4 border-t border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Active Login Sessions</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center gap-3">
                  <Laptop size={18} className="text-slate-600" />
                  <div>
                    <p className="font-bold text-slate-800">Chrome on Windows 11 (Current Session)</p>
                    <p className="text-[11px] text-slate-400">IP: 10.122.16.254 • Campus Wi-Fi Network</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  Active Now
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
          >
            Save Account Settings
          </button>
        </div>
      </form>
    </CollegeLayout>
  );
}
