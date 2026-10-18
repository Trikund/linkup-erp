import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Building, Clock, CheckCircle2, ShieldCheck, 
  Phone, Utensils, Calendar, Send, AlertCircle
} from 'lucide-react';

export function ParentHostel() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };
  const [outpassSubmitted, setOutpassSubmitted] = useState(false);
  const [outpassDate, setOutpassDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [reason, setReason] = useState('');

  const handleApplyOutpass = (e: React.FormEvent) => {
    e.preventDefault();
    setOutpassSubmitted(true);
    setTimeout(() => {
      setOutpassSubmitted(false);
      setReason('');
    }, 3000);
  };

  const curfewLogs = [
    { date: '18 Oct 2026', inTime: '08:42 PM', status: 'On Time (Pass)' },
    { date: '17 Oct 2026', inTime: '09:05 PM', status: 'On Time (Pass)' },
    { date: '16 Oct 2026', inTime: '08:30 PM', status: 'On Time (Pass)' },
    { date: '15 Oct 2026', inTime: '08:50 PM', status: 'On Time (Pass)' },
    { date: '14 Oct 2026', inTime: '09:12 PM', status: 'On Time (Pass)' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Hostel & Mess Facility" 
      description="Campus residential allotment, night curfew biometric logs, mess meal account, and parent out-pass approval."
    >
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Residence Allotment</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">Hostel 3 • Room 204</p>
          <p className="text-[10px] text-purple-700 font-semibold">Double Occupancy (AC)</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Night Curfew Rule</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">09:30 PM Gate In</p>
          <p className="text-[10px] text-emerald-600 font-semibold">100% Punctuality Score</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Mess Account</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">Dues Cleared (₹0)</p>
          <p className="text-[10px] text-slate-500">4 Meals / Day Included</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Chief Warden Contact</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">Dr. K. P. Singh</p>
          <p className="text-[10px] text-slate-500">+91 98112 44556</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Curfew logs & Mess */}
        <div className="lg:col-span-2 space-y-8">
          {/* Biometric Curfew Logs */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-800">Biometric Gate Entry Logs</h3>
                <p className="text-xs text-slate-500">Hostel main gate turnstile records verified by RFID biometric reader.</p>
              </div>
              <span className="px-2.5 py-0.5 text-[10px] font-bold bg-emerald-100 text-emerald-800 rounded-full">
                Zero Violations
              </span>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {curfewLogs.map((log, i) => (
                <div key={i} className="py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Calendar size={14} className="text-slate-400" />
                    <span className="font-semibold text-slate-800">{log.date}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-slate-600 flex items-center gap-1">
                      <Clock size={12} className="text-[#7c3aed]" />
                      Entry: <strong>{log.inTime}</strong>
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                      {log.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Apply Parent Home Leave Out-Pass */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-1">Parental Out-Pass Authorization</h3>
            <p className="text-xs text-slate-500 mb-5">Authorize weekend or festival home visit leave for your ward to exit campus premises.</p>

            {outpassSubmitted && (
              <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600" />
                <span>Out-pass permission approved and forwarded to Chief Warden's terminal!</span>
              </div>
            )}

            <form onSubmit={handleApplyOutpass} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-600 mb-1">Departure Date</label>
                  <input
                    type="date"
                    required
                    value={outpassDate}
                    onChange={(e) => setOutpassDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-600 mb-1">Expected Return Date</label>
                  <input
                    type="date"
                    required
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1">Destination & Purpose</label>
                <textarea
                  required
                  rows={2}
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="e.g. Visiting residence for Diwali festival family celebration..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white font-bold shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Send size={13} />
                  <span>Authorize & Issue Digital Gate Pass</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Column: Mess Menu & Facility Details */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Utensils size={18} className="text-[#7c3aed]" />
              <h4 className="text-sm font-bold text-slate-800">Dining Mess & Nutrition</h4>
            </div>
            <p className="text-xs text-slate-500 mb-4">Central Dining Facility 3 • Clean hygienic vegetarian & egg meal subscription.</p>

            <div className="space-y-2.5 text-xs text-slate-600">
              <div className="p-2.5 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-800 block">Breakfast (07:30 - 09:00 AM)</span>
                <span className="text-slate-500">Poha, Idli Sambhar, Boiled Eggs, Fresh Fruits, Tea</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-800 block">Lunch (12:30 - 02:00 PM)</span>
                <span className="text-slate-500">Dal Tadka, Paneer Butter Masala, Roti, Rice, Curd</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-50">
                <span className="font-bold text-slate-800 block">Dinner (07:30 - 09:30 PM)</span>
                <span className="text-slate-500">Mix Veg, Chana Masala, Jeera Rice, Gulab Jamun</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
