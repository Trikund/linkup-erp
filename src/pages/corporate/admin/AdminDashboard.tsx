import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { 
  Users, Building2, Briefcase, CreditCard, ShieldCheck, 
  Server, Database, Activity, RefreshCw, Key, AlertTriangle, 
  CheckCircle2, ArrowUpRight, Lock, Laptop, FileText, ChevronRight,
  TrendingUp, Download, Eye, ExternalLink, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function AdminDashboard() {
  const navigate = useNavigate();
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showSyncAlert, setShowSyncAlert] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      setShowSyncAlert(true);
      setTimeout(() => setShowSyncAlert(false), 4000);
    }, 600);
  };

  const departmentData = [
    { dept: 'Engineering & Technology', count: 450, pct: '31%', costCenter: 'CC-101', head: 'Siddharth Mehta', budget: '₹14.2 Cr' },
    { dept: 'Sales & Global Marketing', count: 300, pct: '21%', costCenter: 'CC-102', head: 'Kavita Chawla', budget: '₹8.6 Cr' },
    { dept: 'Operations & Facilities', count: 200, pct: '14%', costCenter: 'CC-103', head: 'Vikram Singh', budget: '₹4.1 Cr' },
    { dept: 'HR & People Operations', count: 100, pct: '7%', costCenter: 'CC-104', head: 'Anita Desai', budget: '₹2.8 Cr' },
    { dept: 'Finance & Legal Governance', count: 80, pct: '6%', costCenter: 'CC-105', head: 'Ramesh Sundaram', budget: '₹2.2 Cr' },
    { dept: 'Global Remote & Contractors', count: 320, pct: '21%', costCenter: 'CC-108', head: 'David Chen', budget: '₹6.5 Cr' }
  ];

  const recentLogs = [
    { id: 'LOG-8812', user: 'Anita Desai (HRBP)', action: 'Published Remote Work Policy v4.8 to all hubs', time: '10 mins ago', status: 'Success', ip: '103.21.244.18' },
    { id: 'LOG-8811', user: 'Priya Mehta (Engineering Mgr)', action: 'Approved Leave Exception for Rahul Sharma (EMP-0428)', time: '1 hour ago', status: 'Success', ip: '103.21.244.22' },
    { id: 'LOG-8810', user: 'LinkUp Cron Worker', action: 'October 2026 Payroll Pre-calculation locked (₹18.4 Cr)', time: '3 hours ago', status: 'Success', ip: 'internal-daemon' },
    { id: 'LOG-8809', user: 'Rajesh Varma (Admin)', action: 'Rotated AWS EKS Ingress TLS Wildcard Certificates', time: '5 hours ago', status: 'Success', ip: '14.143.42.10' },
    { id: 'LOG-8808', user: 'SecOps Automated Bot', action: 'Blocked anomalous brute-force attempt on SSH Bastion', time: '8 hours ago', status: 'Warning', ip: '185.220.101.4' }
  ];

  const cloudServices = [
    { name: 'AWS Primary EKS (Mumbai)', status: 'Operational', uptime: '99.99%', latency: '18ms', load: '64%' },
    { name: 'GCP Standby DR (Singapore)', status: 'Warm Standby', uptime: '99.98%', latency: '42ms', load: '12%' },
    { name: 'PostgreSQL 16 Multi-AZ', status: 'Optimal', uptime: '100%', latency: '6ms', load: '58%' },
    { name: 'Cloudflare Zero-Trust Edge', status: 'Active', uptime: '100%', latency: '9ms', load: '24%' }
  ];

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Admin Dashboard" 
      description="Organization-level configuration, cloud infrastructure health, identity and platform governance."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Platform Overview & Organization' },
        { label: 'Admin Dashboard' }
      ]}
    >
      <div className="space-y-6">
        {/* Sync Alert */}
        {showSyncAlert && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800 animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span className="font-semibold">Platform telemetry and directory status re-synchronized across all 8 clusters.</span>
            </div>
            <span className="font-mono text-[10px] text-emerald-600">TIMESTAMP: {new Date().toLocaleTimeString()}</span>
          </div>
        )}

        {/* Global Organization Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/20 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/30 shrink-0">
              <Building2 size={22} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="font-bold text-sm tracking-wide text-white">
                  Organization: LinkUp Technologies Inc. (Global Production Hub)
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  TENANT #LUK-8820
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Multi-Tenant Enterprise Cluster • ISO 27001 & SOC-2 Type II Certified • Active Legal Entities in BLR, GGN, SGP, LON
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full md:w-auto">
            <button 
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors"
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
              {isRefreshing ? 'Telemetry Syncing...' : 'Sync Telemetry'}
            </button>
            <button 
              onClick={() => navigate('/corporate/admin/security')}
              className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/30 transition-colors"
            >
              <ShieldCheck size={14} />
              Security Posture
            </button>
          </div>
        </div>

        {/* 4 Primary Top KPI Cards (Elevated matching original screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          <div 
            onClick={() => navigate('/corporate/admin/employees')}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Total Workforce</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">1,450</h3>
                <p className="text-xs text-blue-600 font-semibold mt-1 flex items-center gap-1">
                  <TrendingUp size={12} /> +18 Hired this Month
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Users size={22} />
              </div>
            </div>
          </div>

          <div 
            onClick={() => navigate('/corporate/admin/departments')}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Departments & Entities</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">8</h3>
                <p className="text-xs text-indigo-600 font-semibold mt-1">4 Global Regional Hubs</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Building2 size={22} />
              </div>
            </div>
          </div>

          <div 
            onClick={() => navigate('/corporate/admin/projects')}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-cyan-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Active Projects</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">42</h3>
                <p className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                  <CheckCircle2 size={12} /> 96.2% Delivery On-Time
                </p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors flex items-center justify-center">
                <Briefcase size={22} />
              </div>
            </div>
          </div>

          <div 
            onClick={() => navigate('/corporate/admin/payroll')}
            className="cursor-pointer group bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payroll Status</p>
                <div className="flex items-center gap-2 mt-1">
                  <h3 className="text-3xl font-black text-amber-600">Pending</h3>
                </div>
                <p className="text-xs text-slate-500 font-semibold mt-1">Oct 2026 Cycle • ₹18.4 Cr</p>
              </div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-colors flex items-center justify-center">
                <CreditCard size={22} />
              </div>
            </div>
          </div>
        </div>

        {/* Real-time Telemetry & Health Ribbon */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Server size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Cloud Uptime</p>
              <p className="text-sm font-black text-slate-800">99.98% <span className="text-[10px] font-normal text-emerald-600">Optimal</span></p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Laptop size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Zero-Trust Devices</p>
              <p className="text-sm font-black text-slate-800">1,450 / 1,450 <span className="text-[10px] font-normal text-blue-600">100% Jamf</span></p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-violet-50 text-violet-600 flex items-center justify-center shrink-0">
              <Key size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">Active SSO Tokens</p>
              <p className="text-sm font-black text-slate-800">1,412 <span className="text-[10px] font-normal text-violet-600">Okta / Azure</span></p>
            </div>
          </div>

          <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Activity size={16} />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 uppercase font-bold">API p99 Latency</p>
              <p className="text-sm font-black text-slate-800">84 ms <span className="text-[10px] font-normal text-amber-600">4.8M calls/d</span></p>
            </div>
          </div>
        </div>

        {/* Quick Launchpad Buttons */}
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
            <Zap size={16} className="text-amber-500" />
            <span>Admin Executive Quick Actions:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button 
              onClick={() => navigate('/corporate/admin/employees')}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs transition-colors"
            >
              + Provision Staff
            </button>
            <button 
              onClick={() => navigate('/corporate/admin/roles')}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs transition-colors"
            >
              Configure RBAC
            </button>
            <button 
              onClick={() => navigate('/corporate/admin/sso')}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs transition-colors"
            >
              Force IdP Resync
            </button>
            <button 
              onClick={() => navigate('/corporate/admin/backups')}
              className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-xs font-semibold rounded-lg border border-slate-200 shadow-2xs transition-colors"
            >
              Take DB Snapshot
            </button>
            <button 
              onClick={() => navigate('/corporate/admin/audit-logs')}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shadow-2xs transition-colors"
            >
              Audit Stream (Live)
            </button>
          </div>
        </div>

        {/* Main 2-Column Split: Department Distribution & System Audit Logs */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Department Distribution (Enhanced) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Department Distribution</h3>
                  <p className="text-xs text-slate-500">Breakdown of 1,450 full-time headcount by division & cost center</p>
                </div>
                <button 
                  onClick={() => navigate('/corporate/admin/departments')}
                  className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
                >
                  Manage <ChevronRight size={14} />
                </button>
              </div>

              <div className="space-y-4">
                {departmentData.map((d, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50/70 border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span>{d.dept}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200/80 text-slate-600 font-normal">
                          {d.costCenter}
                        </span>
                      </div>
                      <span className="text-slate-900">{d.count} employees ({d.pct})</span>
                    </div>

                    <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                        style={{ width: d.pct }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                      <span>Head: <strong className="text-slate-700">{d.head}</strong></span>
                      <span>Budget Cap: <strong className="text-slate-700">{d.budget}</strong></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Total Active Cost Centers: <strong>6 Primary</strong></span>
              <span className="font-semibold text-blue-600">Quarterly Utilization: 78.4%</span>
            </div>
          </div>

          {/* System Audit Logs (Enhanced) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-base font-bold text-slate-900">System Audit Logs</h3>
                  <p className="text-xs text-slate-500">Immutable governance trail of administrative events & approvals</p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-50 text-emerald-700 border border-emerald-200">
                  REAL-TIME STREAM
                </span>
              </div>

              <div className="space-y-3">
                {recentLogs.map((log, i) => (
                  <div key={i} className="p-3 border border-slate-100 rounded-xl bg-slate-50/80 hover:bg-slate-50 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs font-bold text-slate-800 leading-snug">{log.action}</p>
                        <p className="text-[11px] text-slate-500 font-medium mt-1">
                          <span className="text-slate-700 font-semibold">{log.user}</span> • {log.time}
                        </p>
                      </div>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded shrink-0 font-bold ${
                        log.status === 'Success' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono mt-2 pt-1.5 border-t border-slate-200/50">
                      <span>{log.id}</span>
                      <span>SRC: {log.ip}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => navigate('/corporate/admin/audit-logs')}
              className="w-full mt-4 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <FileText size={14} />
              View All Audit Logs (Live Filterable Vault)
            </button>
          </div>
        </div>

        {/* Lower Row: Cloud Infrastructure Status & Licensing Meter */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900">Cloud Infrastructure Cluster Health</h3>
                <p className="text-xs text-slate-500">Multi-region Kubernetes & microservice telemetry</p>
              </div>
              <button 
                onClick={() => navigate('/corporate/admin/infrastructure')}
                className="text-xs text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-1"
              >
                Full Metrics <ArrowUpRight size={14} />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-3.5">
              {cloudServices.map((svc, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <p className="text-xs font-bold text-slate-800">{svc.name}</p>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Uptime: <strong className="text-slate-700">{svc.uptime}</strong> • Latency: <strong className="text-slate-700">{svc.latency}</strong>
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                      {svc.status}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-1 font-mono">{svc.load} load</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-base font-bold text-slate-900">License & Quota</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                  TIER 1 ENTERPRISE
                </span>
              </div>
              <p className="text-xs text-slate-500 mb-4">Annual corporate contract renewed through Oct 2027.</p>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>Active Seats</span>
                    <span>1,450 / 2,000 (72.5%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '72.5%' }} />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">550 spare enterprise seats available</p>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-800 mb-1">
                    <span>Storage Quota</span>
                    <span>2.4 TB / 10 TB (24.0%)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '24%' }} />
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1">Encrypted NVMe S3 Object Storage</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => navigate('/corporate/admin/billing')}
              className="w-full mt-4 py-2 text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors text-center"
            >
              Manage Licensing & Invoices →
            </button>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}