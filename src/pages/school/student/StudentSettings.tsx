import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Settings, 
  Lock, 
  Bell, 
  ShieldCheck, 
  Smartphone, 
  Laptop, 
  Globe, 
  CheckCircle2, 
  KeyRound, 
  LogOut 
} from 'lucide-react';

export function StudentSettings() {
  const user = USERS.student;
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Notification toggles
  const [notifications, setNotifications] = useState({
    examAlerts: true,
    homeworkReminders: true,
    feeReceipts: true,
    circularUpdates: true,
    smsAlerts: true,
  });

  const [passwordState, setPasswordState] = useState({
    current: '',
    newPass: '',
    confirm: ''
  });

  const handleToggle = (key: keyof typeof notifications) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      setPasswordState({ current: '', newPass: '', confirm: '' });
    }, 2500);
  };

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Settings & Security"
      description="Configure your portal notification preferences, security credentials, active sessions, and system display options."
    >
      <div className="space-y-6 max-w-5xl">

        {saveSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-xs font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600" />
            <span>Your settings and security preferences have been updated successfully.</span>
          </div>
        )}

        {/* NOTIFICATION PREFERENCES */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Notification Preferences</h3>
              <p className="text-xs text-slate-500">Choose which institutional alerts you wish to receive on the web portal and registered mobile.</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 mt-2 text-xs">
            <div className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 text-sm">Examinations & Datesheet Alerts</p>
                <p className="text-slate-500 mt-0.5">Receive prompt notifications when midterm datesheets, room seating plans, or results are published.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('examAlerts')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.examAlerts ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.examAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 text-sm">Homework & Daily Assignment Reminders</p>
                <p className="text-slate-500 mt-0.5">Daily reminder at 6:00 PM for pending homework submissions due the following day.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('homeworkReminders')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.homeworkReminders ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.homeworkReminders ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 text-sm">Institutional Circulars & School Holidays</p>
                <p className="text-slate-500 mt-0.5">Official circulars, weather advisories, and school reopening notifications.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('circularUpdates')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.circularUpdates ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.circularUpdates ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-slate-800 text-sm">Parent SMS Broadcasts</p>
                <p className="text-slate-500 mt-0.5">Send urgent SMS alerts directly to parent registered contact (+91 98112 45890).</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('smsAlerts')}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications.smsAlerts ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications.smsAlerts ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* SECURITY & PASSWORD */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900">Login Password & Credentials</h3>
              <p className="text-xs text-slate-500">Ensure your student account uses a strong, private password.</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="mt-5 space-y-4 max-w-lg text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1.5">Current Password</label>
              <input 
                type="password"
                value={passwordState.current}
                onChange={(e) => setPasswordState({ ...passwordState, current: e.target.value })}
                placeholder="••••••••••••"
                className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">New Password</label>
                <input 
                  type="password"
                  value={passwordState.newPass}
                  onChange={(e) => setPasswordState({ ...passwordState, newPass: e.target.value })}
                  placeholder="Min 8 characters"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1.5">Confirm New Password</label>
                <input 
                  type="password"
                  value={passwordState.confirm}
                  onChange={(e) => setPasswordState({ ...passwordState, confirm: e.target.value })}
                  placeholder="Re-enter password"
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition shadow-sm"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* ACTIVE SESSIONS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Active Authorized Sessions</h3>
                <p className="text-xs text-slate-500">Devices currently logged into this student account.</p>
              </div>
            </div>

            <button 
              onClick={() => alert('Logged out of all other secondary sessions.')}
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Revoke Other Sessions
            </button>
          </div>

          <div className="divide-y divide-slate-100 mt-2 text-xs">
            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-slate-900">Chrome on Windows 11 (Current Device)</p>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">This Session</span>
                  </div>
                  <p className="text-slate-400 mt-0.5">IP: 103.21.144.12 • New Delhi, India • Active now</p>
                </div>
              </div>
            </div>

            <div className="py-4 flex items-center justify-between">
              <div className="flex items-center gap-3.5">
                <div className="p-2 bg-slate-100 rounded-xl text-slate-600">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">LinkUp ERP Parent Mobile App (Android 14)</p>
                  <p className="text-slate-400 mt-0.5">Samsung Galaxy S23 • Last active: Yesterday at 8:14 PM</p>
                </div>
              </div>
              <span className="text-slate-400 font-medium">Auto-renewed</span>
            </div>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
