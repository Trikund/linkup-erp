import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Settings, Bell, Shield, Smartphone, Mail, Lock, 
  CheckCircle2, Globe, Laptop, LogOut
} from 'lucide-react';

export const ParentSettings: React.FC = () => {
  const [prefs, setPrefs] = useState({
    attendanceSms: true,
    busGpsAlert: true,
    whatsappHomework: true,
    examEmailDigest: true,
    feeReminders: true,
    twoFactorOtp: true,
  });

  const [language, setLanguage] = useState('en-IN');
  const [savedBanner, setSavedBanner] = useState(false);

  const togglePref = (key: keyof typeof prefs) => {
    setPrefs(prev => ({ ...prev, [key]: !prev[key] }));
    setSavedBanner(false);
  };

  const handleSave = () => {
    setSavedBanner(true);
    setTimeout(() => setSavedBanner(false), 4000);
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Portal Settings & Alert Preferences"
      description="Configure instant SMS alerts, WhatsApp homework digests, GPS bus proximity triggers, and account security."
    >
      <div className="space-y-6">
        {/* Action Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-slate-900">Communication & Privacy Gateways</h2>
              <p className="text-xs text-slate-500">Session 2026-27 Active Profiles: Rahul Sharma & Ananya Sharma</p>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="flex items-center justify-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-colors shadow-sm self-start sm:self-auto"
          >
            <CheckCircle2 className="w-4 h-4" /> Save Preferences
          </button>
        </div>

        {savedBanner && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-emerald-900 text-xs font-semibold animate-in fade-in duration-150">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Your parent communication and security preferences have been updated across SMS, WhatsApp, and Email gateways.</span>
          </div>
        )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Notification Toggles */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-5">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <Bell className="w-5 h-5 text-indigo-600" />
              <div>
                <h3 className="text-base font-bold text-gray-900">SMS, WhatsApp & Push Notification Rules</h3>
                <p className="text-xs text-gray-500">Registered Number: <strong>+91 98765 43210</strong> (Mrs. Priya Sharma)</p>
              </div>
            </div>

            <div className="divide-y divide-gray-100 space-y-4">
              {/* Toggle 1 */}
              <div className="pt-2 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-gray-900">Instant Gate RFID Attendance & Absence SMS</div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Receive an immediate SMS when Rahul or Ananya taps their RFID card at School Gate 3 or is marked absent in 1st period.
                  </p>
                </div>
                <button
                  onClick={() => togglePref('attendanceSms')}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                    prefs.attendanceSms ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                    prefs.attendanceSms ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Toggle 2 */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-gray-900">School Bus Route #14 Proximity Geofence Alert</div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Automated notification 5 minutes before Bus #14 reaches Green Meadows Gate 1 during morning pickup and afternoon drop.
                  </p>
                </div>
                <button
                  onClick={() => togglePref('busGpsAlert')}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                    prefs.busGpsAlert ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                    prefs.busGpsAlert ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Toggle 3 */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-gray-900">Daily Evening WhatsApp Homework & Diary Digest</div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Receive a consolidated 04:00 PM WhatsApp message listing daily homework for both Class 10-A and Class 7-B.
                  </p>
                </div>
                <button
                  onClick={() => togglePref('whatsappHomework')}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                    prefs.whatsappHomework ? 'bg-emerald-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                    prefs.whatsappHomework ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Toggle 4 */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-gray-900">Exam Marksheet & Teacher Remarks Email Broadcast</div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Send PDF report cards and teacher diary observations directly to <strong>priya.sharma@example.com</strong>.
                  </p>
                </div>
                <button
                  onClick={() => togglePref('examEmailDigest')}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                    prefs.examEmailDigest ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                    prefs.examEmailDigest ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>

              {/* Toggle 5 */}
              <div className="pt-4 flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-gray-900">Quarterly Fee Due & Receipt Alerts</div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Gentle SMS reminders 7 days before quarterly fee due dates and instant confirmation upon payment.
                  </p>
                </div>
                <button
                  onClick={() => togglePref('feeReminders')}
                  className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                    prefs.feeReminders ? 'bg-indigo-600' : 'bg-gray-300'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                    prefs.feeReminders ? 'translate-x-5' : 'translate-x-0'
                  }`} />
                </button>
              </div>
            </div>
          </div>

          {/* Regional & Language Preference */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-bold text-gray-900">Portal Language & Circular Translation</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => setLanguage('en-IN')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  language === 'en-IN' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-sm font-bold text-gray-900">English (India — CBSE Standard)</div>
                <div className="text-xs text-gray-500 mt-0.5">Default language for all circulars and marksheets</div>
              </button>
              <button
                onClick={() => setLanguage('hi-IN')}
                className={`p-3.5 rounded-xl border text-left transition-all ${
                  language === 'hi-IN' ? 'border-indigo-600 bg-indigo-50/50' : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="text-sm font-bold text-gray-900">हिन्दी (Hindi — Bilingual SMS)</div>
                <div className="text-xs text-gray-500 mt-0.5">Receive SMS circulars in both English and Hindi</div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Security & Active Sessions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center gap-2 border-b border-gray-100 pb-3">
              <Lock className="w-5 h-5 text-indigo-600" />
              <h3 className="text-base font-bold text-gray-900">Password & 2FA Authentication</h3>
            </div>

            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border border-gray-200">
              <div>
                <div className="text-xs font-bold text-gray-900">Two-Factor SMS OTP Verification</div>
                <div className="text-[11px] text-gray-500">Require OTP when logging in from a new browser</div>
              </div>
              <button
                onClick={() => togglePref('twoFactorOtp')}
                className={`w-11 h-6 rounded-full transition-colors p-0.5 flex-shrink-0 ${
                  prefs.twoFactorOtp ? 'bg-emerald-600' : 'bg-gray-300'
                }`}
              >
                <div className={`w-5 h-5 rounded-full bg-white shadow-xs transform transition-transform ${
                  prefs.twoFactorOtp ? 'translate-x-5' : 'translate-x-0'
                }`} />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Password updated successfully!');
              }}
              className="space-y-3 pt-2"
            >
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Current Portal Password</label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">New Password</label>
                <input
                  type="password"
                  placeholder="Enter minimum 8 characters"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-gray-900 text-white rounded-xl text-xs font-bold hover:bg-gray-800 transition-colors"
              >
                Update Security Password
              </button>
            </form>
          </div>

          {/* Active Logged-In Devices */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Laptop className="w-4 h-4 text-indigo-600" /> Active Guardian Sessions
              </h3>
              <span className="text-xs text-emerald-600 font-semibold">2 Devices</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-indigo-50/40 border border-indigo-100 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Windows 11 Desktop • Google Chrome</div>
                  <div className="text-gray-500 mt-0.5">Gurugram, IN • Active Now (Current Session)</div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">
                  THIS PC
                </span>
              </div>

              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">iPhone 15 Pro • LinkUp Parent iOS App</div>
                  <div className="text-gray-500 mt-0.5">Gurugram, IN • Last active 2 hours ago</div>
                </div>
                <button
                  onClick={() => alert('Revoked mobile app session')}
                  className="text-rose-600 hover:text-rose-800 font-semibold flex items-center gap-1"
                >
                  <LogOut className="w-3.5 h-3.5" /> Revoke
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
