import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Building, Bus, Utensils, User, Phone, MapPin, 
  CheckCircle2, Clock, QrCode, ShieldCheck, Download
} from 'lucide-react';

export function StudentHostel() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [activeTab, setActiveTab] = useState<'hostel' | 'transport'>('hostel');

  const messMenu = [
    { day: 'Monday', breakfast: 'Aloo Paratha, Curd, Butter, Tea/Coffee', lunch: 'Rajma Masala, Steamed Rice, Roti, Salad', snacks: 'Samosa, Mint Chutney, Tea', dinner: 'Paneer Butter Masala, Dal Tadka, Jeera Rice, Gulab Jamun' },
    { day: 'Tuesday', breakfast: 'Idli Sambar, Coconut Chutney, Tea/Coffee', lunch: 'Kadhi Pakoda, Rice, Aloo Gobi, Roti', snacks: 'Veg Cutlet, Coffee', dinner: 'Egg Curry / Dal Makhani, Mixed Veg, Rice, Roti, Kheer' },
    { day: 'Wednesday', breakfast: 'Poha with Peanuts, Boiled Eggs, Tea', lunch: 'Chole Bhature, Boondi Raita, Salad', snacks: 'Patties, Tea', dinner: 'Chicken Biryani / Veg Biryani, Raita, Salan, Ice Cream' },
    { day: 'Thursday', breakfast: 'Puri Bhaji, Halwa, Tea/Coffee', lunch: 'Dal Palak, Dum Aloo, Rice, Roti', snacks: 'Bhel Puri, Tea', dinner: 'Kadhai Paneer, Dal Fry, Jeera Rice, Roti, Rasgulla' },
    { day: 'Friday', breakfast: 'Masala Dosa, Sambar, Chutney, Tea', lunch: 'Black Chana Curry, Jeera Rice, Roti, Curd', snacks: 'Bread Pakoda, Coffee', dinner: 'Butter Chicken / Shahi Paneer, Naan, Rice, Sweet Boondi' },
    { day: 'Saturday', breakfast: 'Methi Paratha, Pickle, Milk/Tea', lunch: 'Veg Pulao, Dal Makhani, Papad, Roti', snacks: 'Pasta, Cold Drink', dinner: 'Dal Tadka, Bhindi Do Pyaza, Steamed Rice, Roti, Custard' },
    { day: 'Sunday', breakfast: 'Chole Kulche, Sweet Lassi / Tea', lunch: 'Special Sunday Feast: Paneer Tikka Masala, Pulao', snacks: 'Biscuits, Tea', dinner: 'Light Khichdi / Veg Noodles, Manchurian, Ice Cream' },
  ];

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Hostel & Campus Transport" 
      description="Aryabhatta Residential Hostel • Mess Timetable • University Shuttle & Bus Pass"
    >
      {/* Switcher Tabs */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setActiveTab('hostel')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'hostel' 
              ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Building size={16} />
          <span>Hostel Residence & Mess</span>
        </button>

        <button
          onClick={() => setActiveTab('transport')}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-2xl text-xs font-bold transition-all ${
            activeTab === 'transport' 
              ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
              : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Bus size={16} />
          <span>Campus Shuttle & Bus Pass</span>
        </button>
      </div>

      {activeTab === 'hostel' ? (
        <div className="space-y-8">
          {/* Hostel Room Dossier Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                    Hostel Block B • Room 314
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                    AC Double Occupancy
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  Aryabhatta Boys Hostel Residence
                </h2>
              </div>

              <button 
                onClick={() => alert('Downloading official Hostel Allotment Order & Room Inventory List...')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5 self-start md:self-auto"
              >
                <Download size={14} />
                <span>Hostel Allotment Letter</span>
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Roommate Details</span>
                <p className="font-bold text-slate-800 text-sm">Aarav Kumar</p>
                <p className="text-slate-500 font-mono text-xs mt-0.5">Roll #21CS1002 • B.Tech CSE</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Hostel Warden In-Charge</span>
                <p className="font-bold text-slate-800 text-sm">Prof. S. K. Mahajan</p>
                <p className="text-slate-500 text-xs mt-0.5">Office: Block B Ground Floor • Ext: 4120</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Night Gate Curfew Time</span>
                <p className="font-bold text-rose-600 text-sm">10:00 PM Sharp</p>
                <p className="text-slate-500 text-xs mt-0.5">Biometric Turnstile In/Out Active</p>
              </div>
            </div>
          </div>

          {/* Weekly Mess Menu Table */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Utensils size={18} className="text-[#7c3aed]" />
                  <span>Aryabhatta Mess Catering Menu (Weekly Rotation)</span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">Dietary timings: Breakfast 07:30 - 09:00 AM • Lunch 12:30 - 02:00 PM • Dinner 07:30 - 09:30 PM</p>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                FSSAI Certified
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-y border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                    <th className="py-3 px-3">Day</th>
                    <th className="py-3 px-4">Breakfast</th>
                    <th className="py-3 px-4">Lunch</th>
                    <th className="py-3 px-4">Evening Snacks</th>
                    <th className="py-3 px-4">Dinner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {messMenu.map((m, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/70">
                      <td className="py-3.5 px-3 font-bold text-[#7c3aed]">{m.day}</td>
                      <td className="py-3.5 px-4 text-slate-700 font-medium">{m.breakfast}</td>
                      <td className="py-3.5 px-4 text-slate-700">{m.lunch}</td>
                      <td className="py-3.5 px-4 text-slate-500">{m.snacks}</td>
                      <td className="py-3.5 px-4 text-slate-800 font-medium">{m.dinner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Transport Tab */
        <div className="space-y-8">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                    Bus Route #07
                  </span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-0.5 rounded-full border border-emerald-200">
                    Annual Bus Pass Active
                  </span>
                </div>
                <h2 className="text-2xl font-black text-slate-900">City Center to Campus Air-Conditioned Shuttle</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Vehicle Reg No</span>
                    <strong className="text-slate-800 font-mono">UP-16-BT-9042</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Designated Seat</span>
                    <strong className="text-purple-700 text-sm">Seat #18 (Window)</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Morning Pickup</span>
                    <strong className="text-slate-800 font-mono">07:45 AM (City Metro)</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Evening Departure</span>
                    <strong className="text-slate-800 font-mono">05:15 PM (Campus Gate)</strong>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-center text-center shrink-0">
                <QrCode size={64} className="text-[#7c3aed]" />
                <span className="text-[10px] font-mono font-bold text-slate-500 mt-1">BUS-PASS-21CS1048</span>
                <span className="text-[10px] font-bold text-emerald-600">Scan at Bus Entry</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
