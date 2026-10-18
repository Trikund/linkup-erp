import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  ShieldCheck, AlertTriangle, Download, Search, Filter, 
  CheckCircle2, Clock, Lock, Terminal, User
} from 'lucide-react';

interface AuditEntry {
  id: string;
  timestamp: string;
  actor: string;
  role: string;
  ipAddress: string;
  action: string;
  category: 'Security' | 'Academic' | 'Financial' | 'System';
  status: 'Success' | 'Warning' | 'Failed';
  details: string;
}

export function AdminAuditLogs() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const logs: AuditEntry[] = [
    {
      id: 'LOG-94812',
      timestamp: 'Oct 18, 2026 • 19:42:10 IST',
      actor: 'Admin User',
      role: 'Super Administrator',
      ipAddress: '192.168.1.10 (Admin LAN)',
      action: 'Updated University Master Timetable for Hall LH-101',
      category: 'Academic',
      status: 'Success',
      details: 'Shifted CS701 lecture slot from Monday 09:00 AM to Tuesday 10:00 AM'
    },
    {
      id: 'LOG-94811',
      timestamp: 'Oct 18, 2026 • 18:20:45 IST',
      actor: 'Razorpay Webhook',
      role: 'Payment Gateway Daemon',
      ipAddress: '52.76.241.18 (Cloud API)',
      action: 'Automated Fee Reconciliation TXN-2026-9041',
      category: 'Financial',
      status: 'Success',
      details: 'Credited ₹85,000 for student Shivam Sharma (21CS1048)'
    },
    {
      id: 'LOG-94810',
      timestamp: 'Oct 18, 2026 • 16:15:02 IST',
      actor: 'Dr. Ankit Sharma',
      role: 'Professor & HOD CSE',
      ipAddress: '192.168.4.52 (CSE Dept LAN)',
      action: 'Grade Entry Moderation for CS701 Lab Component',
      category: 'Academic',
      status: 'Success',
      details: 'Finalized internal marks submission for 142 B.Tech CSE students'
    },
    {
      id: 'LOG-94809',
      timestamp: 'Oct 18, 2026 • 14:02:18 IST',
      actor: 'SecOps Sentinel',
      role: 'System Security Daemon',
      ipAddress: '103.21.244.0 (External)',
      action: 'Blocked 3 Failed Password Attempts for faculty FAC-2019-11',
      category: 'Security',
      status: 'Warning',
      details: 'Temporary lockout enforced for 30 minutes. 2FA notification dispatched.'
    },
    {
      id: 'LOG-94808',
      timestamp: 'Oct 18, 2026 • 11:30:00 IST',
      actor: 'Dr. K. N. Murthy',
      role: 'Controller of Exams',
      ipAddress: '192.168.1.5 (COE Vault LAN)',
      action: 'Question Paper Vault Key Sealed (Dual-Token HMAC)',
      category: 'Academic',
      status: 'Success',
      details: 'Sealed Odd Sem Dec 2026 end-term question papers in tamper-evident store'
    }
  ];

  const filteredLogs = logs.filter(l => {
    const matchesCat = filterCategory === 'All' || l.category === filterCategory;
    const matchesSearch = l.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.actor.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          l.ipAddress.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'System Audit Logs' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Security Audit Trails & Governance Logs</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                SHA-256 Tamper-Proof
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Immutable forensic audit records of all administrative, grade modifications, financial collections, and user privileges.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              Export Audit Ledger CSV
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Lock className="w-4 h-4" />
              Verify Cryptographic Chain
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Recorded Events</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Terminal className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">41,200</div>
            <div className="mt-1 text-xs text-gray-500">Past 30 days rolling audit</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Security Alerts</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">0 Critical</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">3 low-priority warnings resolved</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Admin Sessions</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><User className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">4 Active</div>
            <div className="mt-1 text-xs text-gray-500">Authenticated via FIDO2 / 2FA</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Ledger Integrity</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Lock className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">100% Intact</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Hash chained every 15 minutes</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by action, actor, IP, log ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Category:</span>
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Categories</option>
              <option value="Security">Security</option>
              <option value="Academic">Academic</option>
              <option value="Financial">Financial</option>
              <option value="System">System</option>
            </select>
          </div>
        </div>

        {/* Logs Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Live System Forensics & Audit Timeline</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredLogs.length} events</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Event Ref / Time</th>
                  <th className="py-3 px-4">Actor & Role</th>
                  <th className="py-3 px-4">IP & Network</th>
                  <th className="py-3 px-4">Action Summary</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-semibold text-gray-900">{log.id}</div>
                      <div className="text-[11px] text-gray-500">{log.timestamp}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{log.actor}</div>
                      <div className="text-[11px] text-gray-500">{log.role}</div>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-gray-600">
                      {log.ipAddress}
                    </td>
                    <td className="py-3.5 px-4 max-w-sm">
                      <div className="font-medium text-gray-900">{log.action}</div>
                      <div className="text-[11px] text-gray-500 mt-0.5">{log.details}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                        {log.category}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        log.status === 'Success'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
