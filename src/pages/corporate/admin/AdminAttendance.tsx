import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Clock, CheckCircle2, AlertTriangle, RefreshCw, 
  Building2, Laptop, Calendar, Download, Server, Cpu
} from 'lucide-react';

interface TurnstileHub {
  id: string;
  name: string;
  location: string;
  turnstilesCount: number;
  onlineCount: number;
  expectedHeadcount: number;
  punchedInToday: number;
  wfhApproved: number;
  adherenceRate: string;
  firmwareVersion: string;
  lastHeartbeat: string;
}

export function AdminAttendance() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [isResyncing, setIsResyncing] = useState(false);
  const [syncNotice, setSyncNotice] = useState<string | null>(null);

  const [hubs, setHubs] = useState<TurnstileHub[]>([
    {
      id: 'HUB-BLR',
      name: 'Bengaluru Bellandur Tech Park (Campus Gates 1-4)',
      location: 'Bengaluru, India',
      turnstilesCount: 8,
      onlineCount: 8,
      expectedHeadcount: 850,
      punchedInToday: 824,
      wfhApproved: 18,
      adherenceRate: '96.9%',
      firmwareVersion: 'v4.12.0-ST',
      lastHeartbeat: '4 seconds ago'
    },
    {
      id: 'HUB-GGN',
      name: 'Gurugram Cyber City Tower B',
      location: 'Gurugram, India',
      turnstilesCount: 4,
      onlineCount: 4,
      expectedHeadcount: 280,
      punchedInToday: 271,
      wfhApproved: 7,
      adherenceRate: '96.8%',
      firmwareVersion: 'v4.12.0-ST',
      lastHeartbeat: '6 seconds ago'
    },
    {
      id: 'HUB-MUM',
      name: 'Mumbai BKC Financial Hub',
      location: 'Mumbai, India',
      turnstilesCount: 2,
      onlineCount: 2,
      expectedHeadcount: 120,
      punchedInToday: 116,
      wfhApproved: 3,
      adherenceRate: '96.7%',
      firmwareVersion: 'v4.11.8-ST',
      lastHeartbeat: '10 seconds ago'
    },
    {
      id: 'HUB-SGP',
      name: 'Singapore Marina One East Tower',
      location: 'Singapore',
      turnstilesCount: 4,
      onlineCount: 4,
      expectedHeadcount: 140,
      punchedInToday: 136,
      wfhApproved: 4,
      adherenceRate: '97.1%',
      firmwareVersion: 'v4.12.0-ST',
      lastHeartbeat: '8 seconds ago'
    },
    {
      id: 'HUB-REM',
      name: 'Global Remote Workforce (GPS & Zero-Trust Check-in)',
      location: 'US, UK & Remote',
      turnstilesCount: 0,
      onlineCount: 0,
      expectedHeadcount: 60,
      punchedInToday: 55,
      wfhApproved: 0,
      adherenceRate: '91.7%',
      firmwareVersion: 'Cloud-Agent',
      lastHeartbeat: 'Real-time'
    }
  ]);

  const handleResyncAll = () => {
    setIsResyncing(true);
    setTimeout(() => {
      setIsResyncing(false);
      setSyncNotice('Telemetry resynchronized across all 18 biometric optical turnstiles. 0 packet drops.');
      setTimeout(() => setSyncNotice(null), 3500);
    }, 1200);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Attendance Telemetry" 
      description="Multi-campus biometric turnstile synchronization, IoT reader hardware health, and global shift adherence."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Operations & Payroll Governance' },
        { label: 'Attendance Telemetry' }
      ]}
    >
      <div className="space-y-6">
        {syncNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>{syncNotice}</span>
          </div>
        )}

        {/* Global Attendance KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Today's Presence</p>
            <p className="text-2xl font-black text-slate-900 mt-1">1,402 / 1,450</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">96.8% Global Shift Adherence</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Physical Turnstiles</p>
            <p className="text-2xl font-black text-blue-600 mt-1">18 / 18 Online</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">0 Defective Optical Gates</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Approved WFH Today</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">32 Staff</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Pre-authorized in HR System</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Planned Absences</p>
            <p className="text-2xl font-black text-amber-600 mt-1">16 on Leave</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Annual, Casual & Sick Leaves</p>
          </div>
        </div>

        {/* Control Strip */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">Campus Hardware Terminals & Turnstile Telemetry</h3>
            <p className="text-xs text-slate-500">Sub-second biometric ingestion pipeline into central payroll attendance engine</p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handleResyncAll}
              disabled={isResyncing}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors"
            >
              <RefreshCw size={14} className={isResyncing ? 'animate-spin' : ''} />
              {isResyncing ? 'Resyncing Readers...' : 'Force Gateway Heartbeat'}
            </button>
          </div>
        </div>

        {/* Hubs Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {hubs.map((hub) => (
            <div key={hub.id} className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-800">
                      {hub.id}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {hub.turnstilesCount > 0 ? `${hub.onlineCount}/${hub.turnstilesCount} Gates Online` : 'Cloud Agent'}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm mt-2">{hub.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{hub.location}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-black text-slate-900">{hub.adherenceRate}</p>
                  <p className="text-[11px] text-slate-500 font-semibold">Adherence</p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700 mb-1.5">
                  <span>Punched In: {hub.punchedInToday} / {hub.expectedHeadcount}</span>
                  <span className="text-blue-600 font-medium">{hub.wfhApproved} WFH</span>
                </div>
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 rounded-full" 
                    style={{ width: `${(hub.punchedInToday / hub.expectedHeadcount) * 100}%` }} 
                  />
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Firmware: <strong className="font-mono text-slate-700">{hub.firmwareVersion}</strong></span>
                <span className="font-mono text-[11px] text-emerald-600 font-semibold">Heartbeat: {hub.lastHeartbeat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
