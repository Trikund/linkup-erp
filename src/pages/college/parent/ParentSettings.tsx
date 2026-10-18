import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Settings, Bell, Phone, Shield, CheckCircle2, 
  Save, Smartphone, Lock, User
} from 'lucide-react';

export function ParentSettings() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const [absenceSms, setAbsenceSms] = useState(true);
  const [examAlerts, setExamAlerts] = useState(true);
  const [feeReminders, setFeeReminders] = useState(true);
  const [curfewAlerts, setCurfewAlerts] = useState(true);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Settings & Alerts" 
      description="SMS notification preferences, emergency contact synchronization, and parent portal security."
    >
      {isSaved && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl mb-6 flex items-center gap-2 shadow-sm text-xs font-bold">
          <CheckCircle2 size={16} className="text-emerald-600" />
          <span>Notification and alert preferences successfully updated!</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-1">Instant SMS & Email Notifications</h3>
            <p className="text-xs text-slate-500 mb-5">Alerts dispatched in real-time to registered mobile numbers (+91 98100 54321).</p>

            <form onSubmit={handleSave} className="space-y-4">
              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={absenceSms}
                  onChange={(e) => setAbsenceSms(e.target.checked)}
                  className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Instant Lecture Absence SMS</span>
                  <span className="text-[11px] text-slate-500">Receive an SMS notification if your ward is marked Absent during daily biometric lecture attendance.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={curfewAlerts}
                  onChange={(e) => setCurfewAlerts(e.target.checked)}
                  className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Hostel Night Curfew SMS</span>
                  <span className="text-[11px] text-slate-500">Receive an immediate notification if your ward fails to sign-in by 09:30 PM.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={examAlerts}
                  onChange={(e) => setExamAlerts(e.target.checked)}
                  className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Mid-Sem & End-Sem Result Announcements</span>
                  <span className="text-[11px] text-slate-500">Receive scorecard dispatch links directly upon publication by Controller of Exams.</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 cursor-pointer">
                <input
                  type="checkbox"
                  checked={feeReminders}
                  onChange={(e) => setFeeReminders(e.target.checked)}
                  className="w-4 h-4 text-[#7c3aed] rounded border-slate-300 focus:ring-[#7c3aed]"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">Upcoming Semester Fee Invoices</span>
                  <span className="text-[11px] text-slate-500">Reminders 15 days prior to fee due date to avoid late clearance charges.</span>
                </div>
              </label>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Save size={14} />
                  <span>Save Alert Preferences</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Verified Mobile */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-3">Registered Contact Numbers</h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-purple-50/50 border border-purple-100">
                <span className="text-[10px] font-bold uppercase text-purple-700 block">Primary Guardian (Father)</span>
                <span className="font-bold text-slate-800 text-sm">Rajesh Kumar Sharma</span>
                <span className="text-slate-500 block font-mono mt-0.5">+91 98100 54321</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Secondary Guardian (Mother)</span>
                <span className="font-bold text-slate-800 text-sm">Sunita Sharma</span>
                <span className="text-slate-500 block font-mono mt-0.5">+91 98100 54322</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
