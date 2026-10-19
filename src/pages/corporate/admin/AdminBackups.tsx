import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Database, RefreshCw, Download, CheckCircle2, AlertTriangle, 
  Clock, ShieldCheck, HardDrive, ArrowUpRight, Zap, Check, X
} from 'lucide-react';

interface BackupSnapshot {
  id: string;
  type: 'Hourly WAL' | 'Daily Full Snapshot' | 'Weekly Glacier Archive';
  timestamp: string;
  size: string;
  checksum: string;
  location: string;
  status: 'Verified & Immutable' | 'Replicating' | 'Archived';
}

export function AdminBackups() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [isTakingSnapshot, setIsTakingSnapshot] = useState(false);
  const [snapshotNotice, setSnapshotNotice] = useState<string | null>(null);

  const [snapshots, setSnapshots] = useState<BackupSnapshot[]>([
    {
      id: 'SNP-20261019-1600',
      type: 'Hourly WAL',
      timestamp: 'Today at 16:00:00 UTC (1 hour ago)',
      size: '14.2 GB',
      checksum: 'sha256:e84f...c120',
      location: 'AWS S3 (Mumbai ap-south-1)',
      status: 'Verified & Immutable'
    },
    {
      id: 'SNP-20261019-1500',
      type: 'Hourly WAL',
      timestamp: 'Today at 15:00:00 UTC (2 hours ago)',
      size: '13.8 GB',
      checksum: 'sha256:d19a...90a1',
      location: 'AWS S3 (Mumbai ap-south-1)',
      status: 'Verified & Immutable'
    },
    {
      id: 'SNP-20261019-0200',
      type: 'Daily Full Snapshot',
      timestamp: 'Today at 02:00:00 UTC (15 hours ago)',
      size: '4.21 TB',
      checksum: 'sha256:b891...771c',
      location: 'AWS S3 + GCP Cloud Storage (Dual Region)',
      status: 'Verified & Immutable'
    },
    {
      id: 'SNP-20261018-0200',
      type: 'Daily Full Snapshot',
      timestamp: 'Yesterday at 02:00:00 UTC',
      size: '4.19 TB',
      checksum: 'sha256:a123...44f2',
      location: 'AWS S3 + GCP Cloud Storage (Dual Region)',
      status: 'Verified & Immutable'
    },
    {
      id: 'SNP-20261012-GLACIER',
      type: 'Weekly Glacier Archive',
      timestamp: 'Oct 12, 2026 00:00:00 UTC',
      size: '4.15 TB (Compressed)',
      checksum: 'sha256:99f4...22bc',
      location: 'AWS S3 Glacier Deep Archive (Vault Lock)',
      status: 'Archived'
    }
  ]);

  const handleTakeSnapshot = () => {
    setIsTakingSnapshot(true);
    setTimeout(() => {
      setIsTakingSnapshot(false);
      setSnapshotNotice('On-demand production DB snapshot completed (SNP-20261019-LIVE). Replicated to secondary AZ.');
      setTimeout(() => setSnapshotNotice(null), 4000);
    }, 1500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Database & Backups" 
      description="PostgreSQL 16 multi-AZ cluster disaster recovery, continuous WAL streaming, point-in-time recovery (PITR), and Glacier cold storage."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Cloud Infrastructure & Data' },
        { label: 'Database & Backups' }
      ]}
    >
      <div className="space-y-6">
        {snapshotNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{snapshotNotice}</span>
            </div>
            <button onClick={() => setSnapshotNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Database Primary KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Primary Database</p>
            <p className="text-2xl font-black text-slate-900 mt-1">Postgres 16</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">Multi-AZ Master/Replica</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Live DB Footprint</p>
            <p className="text-2xl font-black text-blue-600 mt-1">4.21 TB</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">NVMe Provisioned IOPS</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Recovery Point (RPO)</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">&lt; 5 mins</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Continuous WAL Archiving</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Recovery Time (RTO)</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">&lt; 20 mins</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Automated Standby Promotion</p>
          </div>
        </div>

        {/* Action Header */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">Point-In-Time-Recovery (PITR) & Snapshot Archives</h3>
            <p className="text-xs text-slate-500">Roll back database state to any specific minute within the past 35 days</p>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={handleTakeSnapshot}
              disabled={isTakingSnapshot}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 transition-colors"
            >
              <RefreshCw size={14} className={isTakingSnapshot ? 'animate-spin' : ''} />
              {isTakingSnapshot ? 'Snapshot in Progress...' : 'Take Immediate Snapshot'}
            </button>
          </div>
        </div>

        {/* PITR Timeline Slider Mock */}
        <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-800">PITR Rollback Window (Past 35 Days Available)</span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold">
              CURRENT HEAD: 16:42 UTC
            </span>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Select any point on the timeline to generate an isolated clone database for forensic analysis or point restoration.
          </p>

          <div className="relative pt-1">
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 w-full rounded-full" />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-2">
              <span>35 Days Ago (Sep 14)</span>
              <span>14 Days Ago (Oct 05)</span>
              <span>7 Days Ago (Oct 12)</span>
              <span className="font-bold text-blue-600">Now (Oct 19, 2026)</span>
            </div>
          </div>
        </div>

        {/* Snapshots Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200">
            <h3 className="text-base font-bold text-slate-900">Verified Cryptographic Snapshot Archives</h3>
            <p className="text-xs text-slate-500">Immutable Amazon S3 Object Lock & Glacier Vault archives</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                  <th className="py-3 px-4">Snapshot ID</th>
                  <th className="py-3 px-4">Cadence</th>
                  <th className="py-3 px-4">Timestamp</th>
                  <th className="py-3 px-4">Compressed Size</th>
                  <th className="py-3 px-4">Storage Tier</th>
                  <th className="py-3 px-4 text-right">Verification</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {snapshots.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-900">{s.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800">
                        {s.type}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{s.timestamp}</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">{s.size}</td>
                    <td className="py-3.5 px-4 text-slate-600 font-medium">{s.location}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
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
