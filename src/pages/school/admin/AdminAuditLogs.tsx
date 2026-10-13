import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  History, ShieldCheck, Download, Search, Filter, 
  AlertTriangle, CheckCircle2, User, Clock, Terminal, Globe, X
} from 'lucide-react';

interface AuditLogEntry {
  id: string;
  timestamp: string;
  actor: string;
  role: 'Super Admin' | 'Teacher' | 'Accounts Officer' | 'Exam Controller' | 'System';
  action: string;
  module: 'Academics' | 'Finance' | 'People' | 'Security' | 'System';
  severity: 'Info' | 'Warning' | 'Critical';
  ipAddress: string;
  details: string;
}

const mockAuditLogs: AuditLogEntry[] = [
  {
    id: 'LOG-9401',
    timestamp: '13 Oct 2026, 01:45 PM',
    actor: 'Amit Verma (Admin)',
    role: 'Super Admin',
    action: 'Student Admission Onboarding',
    module: 'People',
    severity: 'Info',
    ipAddress: '192.168.1.45 (Campus Admin WiFi)',
    details: 'Enrolled new student GF-2026-0481 into Class 10-A. Generated roll number and linked parent guardian KYC.',
  },
  {
    id: 'LOG-9402',
    timestamp: '13 Oct 2026, 12:30 PM',
    actor: 'Mrs. Ananya Sharma',
    role: 'Teacher',
    action: 'Mid-Term Marks Modification Override',
    module: 'Academics',
    severity: 'Warning',
    ipAddress: '192.168.2.112 (Math Faculty Lab)',
    details: 'Updated Class 10-A Mathematics Mid-Term score for Rahul Sharma from 47/50 to 49/50 following re-verification of Answer Sheet #AS-104.',
  },
  {
    id: 'LOG-9403',
    timestamp: '13 Oct 2026, 11:15 AM',
    actor: 'R.K. Gupta (Accounts)',
    role: 'Accounts Officer',
    action: 'Fee Receipt Issued & Reconciled',
    module: 'Finance',
    severity: 'Info',
    ipAddress: '192.168.1.80 (Fee Counter 1)',
    details: 'Generated Fee Receipt #REC-2026-0891 for ₹14,500 via UPI QR Code for student Rahul Sharma (Class 10-A).',
  },
  {
    id: 'LOG-9404',
    timestamp: '13 Oct 2026, 10:00 AM',
    actor: 'Dr. Rajesh Sen',
    role: 'Exam Controller',
    action: 'CBSE Pre-Board Datesheet Published',
    module: 'Academics',
    severity: 'Info',
    ipAddress: '192.168.2.15 (Senior Exam Cell)',
    details: 'Composed and uploaded official CBSE Pre-Board 1 timetable for Classes 10 and 12 with invigilator rosters.',
  },
  {
    id: 'LOG-9405',
    timestamp: '12 Oct 2026, 06:00 PM',
    actor: 'Greenfield Automated Daemon',
    role: 'System',
    action: 'Daily Cloud Database Snapshot Backup',
    module: 'System',
    severity: 'Info',
    ipAddress: '127.0.0.1 (Local Daemon)',
    details: 'Completed encrypted AES-256 cloud backup of all student, faculty and fee records to AWS Mumbai Region (ap-south-1).',
  },
  {
    id: 'LOG-9406',
    timestamp: '12 Oct 2026, 04:12 PM',
    actor: 'Amit Verma (Admin)',
    role: 'Super Admin',
    action: 'Bulk WhatsApp Fee Reminder Broadcast',
    module: 'Finance',
    severity: 'Info',
    ipAddress: '192.168.1.45 (Campus Admin WiFi)',
    details: 'Triggered automated Quarter 3 payment alert to 360 pending guardian phone numbers via Meta Business API.',
  },
];

export function AdminAuditLogs() {
  const user = USERS.admin;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModule, setSelectedModule] = useState('All');
  const [selectedLog, setSelectedLog] = useState<AuditLogEntry | null>(null);

  const filteredLogs = mockAuditLogs.filter((log) => {
    const matchesSearch = log.actor.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          log.details.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesModule = selectedModule === 'All' || log.module === selectedModule;
    return matchesSearch && matchesModule;
  });

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="System Security, DPDP & Audit Trail" 
      description="Greenfield Senior Secondary School • Digital Personal Data Protection Act 2023 Compliance"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Security Audit Trail</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <History size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">14,820</span>
              <span className="text-xs font-semibold text-emerald-600">Events (30d)</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Immutable write-once cryptographic ledger</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">DPDP Act Compliance</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">Compliant</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Aadhaar, PEN & Guardian Data Masked in REST payloads</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Security Anomalies</span>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <AlertTriangle size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">0 Breaches</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Zero unauthorized privilege escalations</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Automated Backup</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-600">Hourly Active</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">AWS ap-south-1 encrypted off-site replication</p>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search audit trail by actor, action or IP..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Module:</span>
              <select
                value={selectedModule}
                onChange={(e) => setSelectedModule(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Modules</option>
                <option value="Academics">Academics</option>
                <option value="Finance">Finance</option>
                <option value="People">People</option>
                <option value="Security">Security</option>
                <option value="System">System</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => alert('Exporting complete tamper-proof Audit Trail (CSV & JSON)...')}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-all"
          >
            <Download size={15} /> Export Cryptographic Log
          </button>
        </div>

        {/* Audit Log Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                <tr>
                  <th className="py-3 px-4">Log ID & Time</th>
                  <th className="py-3 px-4">Actor & Role</th>
                  <th className="py-3 px-4">Action Executed</th>
                  <th className="py-3 px-4">Module</th>
                  <th className="py-3 px-4">Severity</th>
                  <th className="py-3 px-4">Origin IP & Network</th>
                  <th className="py-3 px-4 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono text-xs font-bold text-slate-900">{log.id}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                        <Clock size={11} /> {log.timestamp}
                      </div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-slate-800 text-xs">{log.actor}</div>
                      <div className="text-[11px] text-slate-500">{log.role}</div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-900 text-xs">
                      {log.action}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700">
                        {log.module}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        log.severity === 'Warning' ? 'bg-amber-100 text-amber-800' :
                        log.severity === 'Critical' ? 'bg-rose-100 text-rose-800' :
                        'bg-blue-50 text-blue-700'
                      }`}>
                        {log.severity}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-slate-500">
                      {log.ipAddress}
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedLog(log)}
                        className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal: Inspect Log Entry */}
        {selectedLog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 space-y-4">
              <button 
                onClick={() => setSelectedLog(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="border-b pb-3">
                <span className="text-xs font-mono font-bold text-blue-600">{selectedLog.id}</span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedLog.action}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                  <span>Actor: {selectedLog.actor} ({selectedLog.role})</span>
                  <span>Time: {selectedLog.timestamp}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl space-y-2 text-xs">
                <div className="font-semibold text-slate-700">Audit Detail & Payload:</div>
                <p className="text-slate-600 leading-relaxed">{selectedLog.details}</p>
                <div className="pt-2 text-[11px] text-slate-400 font-mono">
                  Origin: {selectedLog.ipAddress} • Protocol: HTTPS/TLS 1.3
                </div>
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedLog(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
                >
                  Close Inspector
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
