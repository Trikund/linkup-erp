import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  CalendarDays, Clock, CheckCircle2, AlertTriangle, 
  Download, Plus, Search, Filter, ShieldCheck, MapPin
} from 'lucide-react';

interface SwipeLog {
  date: string;
  day: string;
  firstIn: string;
  lastOut: string;
  totalHours: string;
  overtime: string;
  gateLocation: string;
  status: 'Present' | 'WFH' | 'Late In' | 'Weekly Off';
}

export function EmployeeAttendance() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [filterMonth, setFilterMonth] = useState('October 2026');

  const logs: SwipeLog[] = [
    { date: 'Oct 19, 2026', day: 'Monday', firstIn: '09:18 AM', lastOut: '-- (Active)', totalHours: '5h 42m', overtime: '--', gateLocation: 'Main Turnstile East (Bengaluru HQ)', status: 'Present' },
    { date: 'Oct 16, 2026', day: 'Friday', firstIn: '09:25 AM', lastOut: '06:45 PM', totalHours: '8h 20m', overtime: '+0h 20m', gateLocation: 'Main Turnstile East (Bengaluru HQ)', status: 'Present' },
    { date: 'Oct 15, 2026', day: 'Thursday', firstIn: '09:05 AM', lastOut: '06:35 PM', totalHours: '8h 30m', overtime: '+0h 30m', gateLocation: 'Remote IP (VPN Secure)', status: 'WFH' },
    { date: 'Oct 14, 2026', day: 'Wednesday', firstIn: '09:52 AM', lastOut: '07:05 PM', totalHours: '8h 13m', overtime: '--', gateLocation: 'Main Turnstile East (Bengaluru HQ)', status: 'Late In' },
    { date: 'Oct 13, 2026', day: 'Tuesday', firstIn: '09:10 AM', lastOut: '06:40 PM', totalHours: '8h 30m', overtime: '+0h 30m', gateLocation: 'Main Turnstile East (Bengaluru HQ)', status: 'Present' },
    { date: 'Oct 12, 2026', day: 'Monday', firstIn: '09:15 AM', lastOut: '06:30 PM', totalHours: '8h 15m', overtime: '--', gateLocation: 'Remote IP (VPN Secure)', status: 'WFH' },
    { date: 'Oct 11, 2026', day: 'Sunday', firstIn: '--', lastOut: '--', totalHours: '--', overtime: '--', gateLocation: 'Weekend', status: 'Weekly Off' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Attendance & Biometric Logs"
      description="Track your daily turnstile swipes, work shifts, overtime, and attendance regularizations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Time & Attendance' },
        { label: 'Attendance & Swipes' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <CalendarDays size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Biometric Attendance & Work Shifts</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                General Shift: 09:30 AM - 06:30 PM
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Synchronized turnstile biometric access logs and corporate VPN work hours.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Monthly Attendance PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Plus size={14} />
              Regularize Swipe
            </button>
          </div>
        </div>

        {/* Attendance KPI Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Avg Work Hours</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">8h 18m</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Compliant with 8h standard shift</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Attendance Rate</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">94.2%</div>
            <div className="mt-1 text-xs text-slate-500">18 Present, 2 WFH, 1 Late</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Late Arrivals</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><AlertTriangle size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">1 Incident</div>
            <div className="mt-1 text-xs text-slate-500">Grace buffer: 15 mins (09:45 AM)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Overtime Accrued</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">+1h 20m</div>
            <div className="mt-1 text-xs text-slate-500">Eligible for compensatory off</div>
          </div>
        </div>

        {/* Swipes Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-slate-800">Turnstile Swipe Log ({filterMonth})</h2>
            <span className="text-xs text-slate-500">Showing {logs.length} entries</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-[11px] font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <th className="py-3 px-4">Date & Day</th>
                  <th className="py-3 px-4">First In</th>
                  <th className="py-3 px-4">Last Out</th>
                  <th className="py-3 px-4">Net Hours</th>
                  <th className="py-3 px-4">Overtime</th>
                  <th className="py-3 px-4">Gate Location</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {logs.map((log, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-800">
                      <div>{log.date}</div>
                      <div className="text-[11px] text-slate-400 font-normal">{log.day}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">
                      {log.firstIn}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-700">
                      {log.lastOut}
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                      {log.totalHours}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-emerald-600 font-medium">
                      {log.overtime}
                    </td>
                    <td className="py-3.5 px-4 text-slate-500 flex items-center gap-1.5 pt-4">
                      <MapPin size={12} className="text-slate-400 shrink-0" />
                      <span className="truncate max-w-[200px]">{log.gateLocation}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        log.status === 'Present'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : log.status === 'WFH'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : log.status === 'Late In'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      {log.status === 'Late In' ? (
                        <button className="px-2 py-1 text-xs font-semibold text-amber-600 hover:bg-amber-50 rounded transition">
                          Regularize
                        </button>
                      ) : (
                        <span className="text-slate-400 text-[11px]">—</span>
                      )}
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