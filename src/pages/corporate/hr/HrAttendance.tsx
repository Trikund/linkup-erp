import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Clock, CheckCircle2, AlertTriangle, Users, 
  MapPin, Calendar, Download, Search, Filter, 
  Building2, Laptop, ShieldCheck, ArrowUpRight
} from 'lucide-react';

export function HrAttendance() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [selectedHub, setSelectedHub] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const attendanceHubs = [
    { hub: 'Bengaluru HQ (Bellandur)', total: 94, present: 90, wfh: 3, onLeave: 1, compliance: '98.4%' },
    { hub: 'Gurugram Tech Center', total: 28, present: 26, wfh: 1, onLeave: 1, compliance: '96.2%' },
    { hub: 'Mumbai Corporate Office', total: 18, present: 18, wfh: 0, onLeave: 0, compliance: '100%' },
    { hub: 'Full-Remote / Field Hub', total: 9, present: 8, wfh: 8, onLeave: 1, compliance: '94.0%' }
  ];

  const liveSwipes = [
    { id: 'EMP-0428', name: 'Rahul Sharma', dept: 'Engineering', location: 'Bengaluru HQ (Floor 4)', swipeIn: '09:22 AM', shift: 'General Day', terminal: 'Turnstile A4', status: 'On Time', avatar: 'RS' },
    { id: 'EMP-0102', name: 'Priya Mehta', dept: 'Engineering', location: 'Bengaluru HQ (Floor 4)', swipeIn: '09:04 AM', shift: 'General Day', terminal: 'Turnstile A1', status: 'On Time', avatar: 'PM' },
    { id: 'EMP-0441', name: 'Vikram Malhotra', dept: 'Engineering', location: 'Gurugram Tech Center', swipeIn: '09:05 AM', shift: 'General Day', terminal: 'Turnstile B2', status: 'On Time', avatar: 'VM' },
    { id: 'EMP-0512', name: 'Sneha Roy', dept: 'Product Design', location: 'Bengaluru (Remote)', swipeIn: '09:30 AM', shift: 'General Day', terminal: 'Pulse Zero-Trust VPN', status: 'WFH Active', avatar: 'SR' },
    { id: 'EMP-0589', name: 'Amit Kumar', dept: 'Engineering', location: 'Bengaluru HQ (Floor 4)', swipeIn: '08:58 AM', shift: 'General Day', terminal: 'Turnstile A2', status: 'On Time', avatar: 'AK' },
    { id: 'EMP-0640', name: 'Siddharth Rao', dept: 'Engineering', location: 'Pune Tech Hub', swipeIn: '09:10 AM', shift: 'General Day', terminal: 'Pulse Zero-Trust VPN', status: 'WFH Active', avatar: 'SR' },
    { id: 'EMP-0612', name: 'Rohan Das', dept: 'Engineering', location: 'Bengaluru HQ (Floor 4)', swipeIn: '09:48 AM', shift: 'General Day', terminal: 'Turnstile A4', status: 'Slight Delay', avatar: 'RD' },
    { id: 'EMP-0688', name: 'Ananya Sen', dept: 'Engineering', location: 'Bengaluru HQ', swipeIn: '-', shift: 'General Day', terminal: 'Leave Desk', status: 'Approved Leave', avatar: 'AS' }
  ];

  const filteredSwipes = liveSwipes.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.dept.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesHub = selectedHub === 'All' || s.location.includes(selectedHub);
    return matchesSearch && matchesHub;
  });

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Workforce Attendance & Biometric Telemetry"
      description="Monitor organization-wide biometric turnstile check-ins, remote VPN zero-trust logins, and shift compliance."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time, Attendance & Leaves' },
        { label: 'Attendance & Biometrics' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Company-Wide Adherence</p>
              <h3 className="text-2xl font-bold text-slate-900">97.2%</h3>
              <p className="text-xs text-emerald-600 font-medium">+1.4% vs last quarter</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">In-Office Swipes</p>
              <h3 className="text-2xl font-bold text-slate-900">128 Employees</h3>
              <p className="text-xs text-slate-500 font-medium">Biometric turnstile verified</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Approved WFH / Remote</p>
              <h3 className="text-2xl font-bold text-slate-900">14 Employees</h3>
              <p className="text-xs text-purple-600 font-medium">Pulse VPN active</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">On Approved Leave</p>
              <h3 className="text-2xl font-bold text-slate-900">7 Employees</h3>
              <p className="text-xs text-amber-600 font-medium">Casual / Annual / Sick</p>
            </div>
          </div>
        </div>

        {/* Location Hubs Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {attendanceHubs.map(h => (
            <div key={h.hub} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded uppercase">Facility Hub</span>
                <h4 className="text-xs font-bold text-slate-900 mt-1.5">{h.hub}</h4>
                <div className="mt-3 space-y-1 text-xs">
                  <div className="flex justify-between text-slate-500">
                    <span>Headcount:</span>
                    <strong className="text-slate-800">{h.total}</strong>
                  </div>
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Present In-Office:</span>
                    <span>{h.present}</span>
                  </div>
                  <div className="flex justify-between text-purple-600">
                    <span>Remote / WFH:</span>
                    <span>{h.wfh}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-medium">Compliance:</span>
                <span className="text-xs font-bold text-blue-600">{h.compliance}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Swipes Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Live Organization Swipes & VPN Sessions</h3>
              <p className="text-xs text-slate-500">Real-time attendance telemetry synced with HID global turnstiles.</p>
            </div>

            <div className="flex items-center gap-2">
              <input 
                type="text"
                placeholder="Search employee or department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
              />
              <button 
                onClick={() => alert('Attendance report exported.')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                <Download size={14} /> Export
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Employee</th>
                  <th className="py-3 px-5">Department</th>
                  <th className="py-3 px-5">Location</th>
                  <th className="py-3 px-5">First Check-In</th>
                  <th className="py-3 px-5">Shift Pattern</th>
                  <th className="py-3 px-5">Terminal Gate</th>
                  <th className="py-3 px-5">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {filteredSwipes.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                          {s.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{s.name}</p>
                          <p className="text-[11px] font-mono text-slate-400">{s.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-5 font-semibold text-slate-800">{s.dept}</td>
                    <td className="py-3 px-5 text-slate-600">{s.location}</td>
                    <td className="py-3 px-5 font-bold text-slate-900">{s.swipeIn}</td>
                    <td className="py-3 px-5 text-slate-500">{s.shift}</td>
                    <td className="py-3 px-5 font-mono text-[11px] text-slate-500">{s.terminal}</td>
                    <td className="py-3 px-5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        s.status === 'On Time' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        s.status === 'WFH Active' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        s.status === 'Slight Delay' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {s.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
