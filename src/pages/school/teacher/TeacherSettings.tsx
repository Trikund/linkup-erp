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
  CheckCircle2, 
  KeyRound, 
  LogOut 
} from 'lucide-react';

export function TeacherSettings() {
  const user = USERS.teacher;
  const [saveSuccess, setSaveSuccess] = useState(false);

  const [notifications, setNotifications] = useState({
    parentMessages: true,
    homeworkSubmissions: true,
    examDuties: true,
    staffCirculars: true,
    twoFactorGradebook: true,
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
      role="teacher" 
      user={user} 
      title="Settings & Portal Security"
      description="Configure faculty notifications, gradebook security credentials, and active authorized sessions."
    >
      <div className="space-y-8 max-w-5xl">

        {saveSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Faculty settings and security credentials updated successfully.</span>
          </div>
        )}

        {/* NOTIFICATION PREFERENCES */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Bell className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Faculty Notification Preferences</h3>
              <p className="text-sm text-slate-500 mt-0.5">Control email and mobile alerts for submissions, parent inquiries, and duties.</p>
            </div>
          </div>

          <div className="divide-y divide-slate-100 mt-2">
            <div className="py-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-base">Parent Inquiries & Homeroom Messages</p>
                <p className="text-sm text-slate-500 mt-1">Receive notifications when parents send messages regarding Class 10-A student leaves or PTM slots.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('parentMessages')}
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${notifications.parentMessages ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${notifications.parentMessages ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-base">Student Homework & Project Submissions</p>
                <p className="text-sm text-slate-500 mt-1">Instant alert when a student uploads an assignment or homework solution to the portal.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('homeworkSubmissions')}
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${notifications.homeworkSubmissions ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${notifications.homeworkSubmissions ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-base">Examination Duty & Invigilation Reminders</p>
                <p className="text-sm text-slate-500 mt-1">24-hour reminder before scheduled exam invigilation sessions and question paper submission cutoffs.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('examDuties')}
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${notifications.examDuties ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${notifications.examDuties ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>

            <div className="py-5 flex items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-base">Gradebook 2-Factor Authentication (2FA)</p>
                <p className="text-sm text-slate-500 mt-1">Require an OTP sent to your registered mobile before locking and publishing CBSE examination marks.</p>
              </div>
              <button 
                type="button"
                onClick={() => handleToggle('twoFactorGradebook')}
                className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full transition-colors ${notifications.twoFactorGradebook ? 'bg-blue-600' : 'bg-slate-200'}`}
              >
                <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${notifications.twoFactorGradebook ? 'translate-x-6' : 'translate-x-1'}`} />
              </button>
            </div>
          </div>
        </div>

        {/* SECURITY & PASSWORD */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-3 pb-5 border-b border-slate-100">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl">
              <KeyRound className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Faculty Credentials & Login Password</h3>
              <p className="text-sm text-slate-500 mt-0.5">Ensure your account uses a complex password to protect institutional records.</p>
            </div>
          </div>

          <form onSubmit={handleSave} className="mt-6 space-y-5 max-w-lg">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Current Password</label>
              <input 
                type="password"
                value={passwordState.current}
                onChange={(e) => setPasswordState({ ...passwordState, current: e.target.value })}
                placeholder="••••••••••••"
                className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">New Password</label>
                <input 
                  type="password"
                  value={passwordState.newPass}
                  onChange={(e) => setPasswordState({ ...passwordState, newPass: e.target.value })}
                  placeholder="Min 8 characters"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Confirm New Password</label>
                <input 
                  type="password"
                  value={passwordState.confirm}
                  onChange={(e) => setPasswordState({ ...passwordState, confirm: e.target.value })}
                  placeholder="Re-enter password"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="pt-2">
              <button 
                type="submit"
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition shadow-sm"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>

        {/* ACTIVE AUTHORIZED SESSIONS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between pb-5 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">Active Authorized Sessions</h3>
                <p className="text-sm text-slate-500 mt-0.5">Devices currently authenticated to Mrs. Ananya Sharma's account.</p>
              </div>
            </div>

            <button 
              onClick={() => alert('Logged out of all other devices.')}
              className="text-sm font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1.5 transition"
            >
              <LogOut className="w-4 h-4" />
              Revoke Other Devices
            </button>
          </div>

          <div className="divide-y divide-slate-100 mt-2">
            <div className="py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                  <Laptop className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2.5">
                    <p className="font-bold text-slate-900 text-base">Faculty Workstation • Staff Room 2</p>
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">Current Session</span>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">IP: 192.168.10.45 • Campus Intranet • Active now</p>
                </div>
              </div>
            </div>

            <div className="py-5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-100 rounded-xl text-slate-600">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-base">Teacher Portal App • iOS 18 (iPhone 15 Pro)</p>
                  <p className="text-sm text-slate-500 mt-1">Last active: Today at 07:45 AM • New Delhi, India</p>
                </div>
              </div>
              <span className="text-sm text-slate-400 font-semibold">Active</span>
            </div>
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
