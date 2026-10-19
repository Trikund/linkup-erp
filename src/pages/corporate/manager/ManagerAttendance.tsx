import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Clock, CheckCircle2, AlertTriangle, XCircle, 
  Calendar, Search, Filter, ShieldCheck, MapPin, 
  ArrowUpRight, Download, Check, X, RefreshCw
} from 'lucide-react';

interface AttendanceRecord {
  id: string;
  name: string;
  role: string;
  swipeIn: string;
  swipeOut: string;
  totalHours: string;
  status: 'On Time' | 'Slight Delay' | 'WFH Approved' | 'On Leave' | 'Regularization Requested';
  deviceLocation: string;
  avatar: string;
}

interface RegularizationRequest {
  id: string;
  name: string;
  date: string;
  reason: string;
  requestedHours: string;
  badge: string;
}

export function ManagerAttendance() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  const [selectedDate, setSelectedDate] = useState('2026-10-19');
  
  const [regularizations, setRegularizations] = useState<RegularizationRequest[]>([
    {
      id: 'REG-1092',
      name: 'Rohan Das',
      date: 'Oct 17, 2026',
      reason: 'Biometric gate reader failed on Floor 4 entrance at 09:12 AM',
      requestedHours: '09:15 AM - 06:45 PM (9h 30m)',
      badge: 'RD'
    },
    {
      id: 'REG-1093',
      name: 'Neha Verma',
      date: 'Oct 16, 2026',
      reason: 'Network disconnect during emergency on-call prod incident',
      requestedHours: '10:00 AM - 07:30 PM (9h 30m)',
      badge: 'NV'
    }
  ]);

  const [attendanceRecords, setAttendanceRecords] = useState<AttendanceRecord[]>([
    { id: 'EMP-0428', name: 'Rahul Sharma', role: 'Senior Frontend Dev', swipeIn: '09:22 AM', swipeOut: 'In Office', totalHours: '6h 40m', status: 'On Time', deviceLocation: 'Turnstile A4 - Floor 4', avatar: 'RS' },
    { id: 'EMP-0441', name: 'Vikram Malhotra', role: 'Senior Backend Eng', swipeIn: '09:05 AM', swipeOut: 'In Office', totalHours: '6h 57m', status: 'On Time', deviceLocation: 'Turnstile B2 - Gurugram', avatar: 'VM' },
    { id: 'EMP-0512', name: 'Sneha Roy', role: 'Senior Product Designer', swipeIn: '09:30 AM', swipeOut: 'Online (WFH)', totalHours: '6h 32m', status: 'WFH Approved', deviceLocation: 'Pulse VPN Gateway (BLR)', avatar: 'SR' },
    { id: 'EMP-0589', name: 'Amit Kumar', role: 'Lead QA Automation', swipeIn: '08:58 AM', swipeOut: 'In Office', totalHours: '7h 04m', status: 'On Time', deviceLocation: 'Turnstile A2 - Floor 4', avatar: 'AK' },
    { id: 'EMP-0612', name: 'Rohan Das', role: 'Frontend Eng II', swipeIn: '09:48 AM', swipeOut: 'In Office', totalHours: '6h 14m', status: 'Slight Delay', deviceLocation: 'Turnstile A4 - Floor 4', avatar: 'RD' },
    { id: 'EMP-0720', name: 'Neha Verma', role: 'Associate Software Eng', swipeIn: '09:15 AM', swipeOut: 'In Office', totalHours: '6h 47m', status: 'On Time', deviceLocation: 'Turnstile A1 - Floor 4', avatar: 'NV' },
    { id: 'EMP-0640', name: 'Siddharth Rao', role: 'DevOps & SRE', swipeIn: '09:10 AM', swipeOut: 'Online (Remote)', totalHours: '6h 52m', status: 'WFH Approved', deviceLocation: 'Pulse VPN Gateway (PUN)', avatar: 'SR' },
    { id: 'EMP-0688', name: 'Ananya Sen', role: 'Backend Eng II', swipeIn: '-', swipeOut: '-', totalHours: '0h 00m', status: 'On Leave', deviceLocation: 'Leave Approved (Casual)', avatar: 'AS' }
  ]);

  const handleApproveReg = (id: string) => {
    setRegularizations(prev => prev.filter(r => r.id !== id));
  };

  const handleRejectReg = (id: string) => {
    setRegularizations(prev => prev.filter(r => r.id !== id));
  };

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Attendance & Swipes"
      description="Monitor biometric turnstile check-ins, remote VPN logs, and review team attendance regularizations."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Team & Operations' },
        { label: 'Attendance & Swipes' }
      ]}
    >
      <div className="space-y-6">
        {/* KPI Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Shift Adherence</p>
              <h3 className="text-2xl font-bold text-slate-900">96.4%</h3>
              <p className="text-xs text-emerald-600 font-medium">+1.8% vs last month</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Present In-Office</p>
              <h3 className="text-2xl font-bold text-slate-900">5 Eng</h3>
              <p className="text-xs text-slate-500 font-medium">Floor 4 Bengaluru & GGN</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Remote / WFH</p>
              <h3 className="text-2xl font-bold text-slate-900">2 Eng</h3>
              <p className="text-xs text-purple-600 font-medium">VPN active & secured</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <AlertTriangle size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Regularizations</p>
              <h3 className="text-2xl font-bold text-slate-900">{regularizations.length} Pending</h3>
              <p className="text-xs text-amber-600 font-medium">Action needed</p>
            </div>
          </div>
        </div>

        {/* Regularization Approvals Card */}
        {regularizations.length > 0 && (
          <div className="bg-white rounded-2xl border border-amber-200 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                  <AlertTriangle size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Pending Attendance Regularization Requests</h3>
                  <p className="text-xs text-slate-500">Employees requesting manual swipe correction due to reader delays or client on-site work.</p>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                {regularizations.length} Awaiting Approval
              </span>
            </div>

            <div className="space-y-3">
              {regularizations.map(req => (
                <div key={req.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {req.badge}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{req.name}</span>
                        <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {req.date}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 mt-1">{req.reason}</p>
                      <p className="text-[11px] font-semibold text-blue-600 mt-0.5">Requested: {req.requestedHours}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:self-center">
                    <button 
                      onClick={() => handleRejectReg(req.id)}
                      className="px-3 py-1.5 text-xs font-semibold text-rose-600 bg-white hover:bg-rose-50 border border-rose-200 rounded-xl transition flex items-center gap-1.5"
                    >
                      <X size={14} /> Reject
                    </button>
                    <button 
                      onClick={() => handleApproveReg(req.id)}
                      className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition flex items-center gap-1.5"
                    >
                      <Check size={14} /> Approve Swipe
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Live Swipes Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">Today's Pod 4 Attendance Log</h3>
              <p className="text-xs text-slate-500">Live biometric turnstile swipes and Zero-Trust VPN session status.</p>
            </div>
            <div className="flex items-center gap-2">
              <input 
                type="date" 
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-1.5 text-xs rounded-xl border border-slate-200 text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition">
                <Download size={14} /> Export CSV
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Employee</th>
                  <th className="py-3 px-5">First In</th>
                  <th className="py-3 px-5">Last Out / State</th>
                  <th className="py-3 px-5">Total Tracked</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5">Access Terminal</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs text-slate-700 font-medium">
                {attendanceRecords.map((rec) => (
                  <tr key={rec.id} className="hover:bg-slate-50/70 transition">
                    <td className="py-3.5 px-5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                          {rec.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{rec.name}</p>
                          <p className="text-[11px] text-slate-400">{rec.role}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 font-semibold text-slate-800">{rec.swipeIn}</td>
                    <td className="py-3.5 px-5">{rec.swipeOut}</td>
                    <td className="py-3.5 px-5 font-bold text-slate-900">{rec.totalHours}</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        rec.status === 'On Time' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        rec.status === 'WFH Approved' ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        rec.status === 'Slight Delay' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}>
                        {rec.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-slate-500 font-mono text-[11px]">{rec.deviceLocation}</td>
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
