import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FileText, Search, Filter, Download, ChevronDown, 
  ChevronUp, ShieldCheck, CheckCircle2, AlertTriangle, 
  Terminal, RefreshCw, X
} from 'lucide-react';

interface AuditEvent {
  id: string;
  actor: string;
  actorRole: string;
  action: string;
  category: 'IAM & SSO' | 'Payroll & Finance' | 'Policy & Compliance' | 'Cloud Infra' | 'Turnstile IoT';
  targetResource: string;
  ipAddress: string;
  userAgent: string;
  timestamp: string;
  severity: 'Info' | 'Warning' | 'Critical';
  payloadJson: string;
}

export function AdminAuditLogs() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedLogId, setExpandedLogId] = useState<string | null>(null);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const logs: AuditEvent[] = [
    {
      id: 'EVT-90412',
      actor: 'Anita Desai (EMP-0104)',
      actorRole: 'Lead HRBP',
      action: 'Published Remote Work Policy v4.8',
      category: 'Policy & Compliance',
      targetResource: 'policy_doc:POL-REMOTE-48',
      ipAddress: '103.21.244.18 (Bengaluru HQ)',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      timestamp: 'Today at 16:32:10 UTC',
      severity: 'Info',
      payloadJson: '{\n  "version": "4.8",\n  "effective_date": "2026-11-01",\n  "affected_staff_count": 1450,\n  "author": "anita.desai@linkupcorp.internal",\n  "digital_signature": "sha256:77f12a9910d8"\n}'
    },
    {
      id: 'EVT-90411',
      actor: 'Priya Mehta (EMP-0102)',
      actorRole: 'Engineering Manager',
      action: 'Approved Leave Exception for Rahul Sharma (EMP-0428)',
      category: 'IAM & SSO',
      targetResource: 'leave_req:LR-8812',
      ipAddress: '103.21.244.22 (Bengaluru HQ)',
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)',
      timestamp: 'Today at 15:45:22 UTC',
      severity: 'Info',
      payloadJson: '{\n  "applicant_id": "EMP-0428",\n  "days": 3,\n  "type": "Annual Leave (Festival)",\n  "manager_id": "EMP-0102",\n  "status": "APPROVED"\n}'
    },
    {
      id: 'EVT-90410',
      actor: 'LinkUp Cron Daemon',
      actorRole: 'Internal Service Worker',
      action: 'October 2026 Payroll Pre-calculation locked (₹18.4 Cr)',
      category: 'Payroll & Finance',
      targetResource: 'payroll_cycle:CYCLE-2026-10',
      ipAddress: '10.0.4.12 (Internal AWS VPC)',
      userAgent: 'Go-http-client/2.0',
      timestamp: 'Today at 13:20:00 UTC',
      severity: 'Info',
      payloadJson: '{\n  "cycle": "2026-10",\n  "total_disbursement_inr": 184280000,\n  "employee_count": 1450,\n  "dual_approval_required": true\n}'
    },
    {
      id: 'EVT-90409',
      actor: 'Rajesh Varma (EMP-0001)',
      actorRole: 'Super Admin & CISO',
      action: 'Rotated AWS EKS Ingress TLS Wildcard Certificates',
      category: 'Cloud Infra',
      targetResource: 'tls_secret:k8s-wildcard-linkupcorp-internal',
      ipAddress: '14.143.42.10 (Gurugram Office)',
      userAgent: 'kubectl/v1.31.0 (darwin/arm64)',
      timestamp: 'Today at 11:15:40 UTC',
      severity: 'Warning',
      payloadJson: '{\n  "cert_fingerprint_sha256": "4b:99:a1:88:12:ef:31:0a",\n  "issuer": "DigiCert Global Root G2",\n  "expiry": "2027-10-19T00:00:00Z"\n}'
    },
    {
      id: 'EVT-90408',
      actor: 'Cloudflare Edge WAF',
      actorRole: 'Automated Edge Firewall',
      action: 'Blocked SSH Bastion brute-force dictionary attack',
      category: 'Cloud Infra',
      targetResource: 'bastion_host:ssh.linkupcorp.internal:22',
      ipAddress: '185.220.101.4 (Frankfurt Tor Node)',
      userAgent: 'libssh/0.9.5',
      timestamp: 'Today at 08:42:19 UTC',
      severity: 'Critical',
      payloadJson: '{\n  "attack_vector": "SSH Password Spraying",\n  "attempts": 420,\n  "window_seconds": 30,\n  "action_taken": "PERMANENT_IP_DROP"\n}'
    },
    {
      id: 'EVT-90407',
      actor: 'Campus Turnstile Broker',
      actorRole: 'IoT Telemetry Ingest',
      action: 'Pushed daily check-in aggregate (1,402 / 1,450 punches)',
      category: 'Turnstile IoT',
      targetResource: 'telemetry_stream:GATE-BLR-01-08',
      ipAddress: '192.168.10.45 (Local Campus Subnet)',
      userAgent: 'LinkUp-IoT-Daemon/v4.12',
      timestamp: 'Today at 07:30:00 UTC',
      severity: 'Info',
      payloadJson: '{\n  "campus": "BLR_BELLANDUR",\n  "punches": 824,\n  "offline_buffered": 0,\n  "sync_latency_ms": 4.2\n}'
    }
  ];

  const filteredLogs = logs.filter(l => {
    const matchesSearch = l.actor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.ipAddress.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSev = selectedSeverity === 'All' || l.severity === selectedSeverity;
    const matchesCat = selectedCategory === 'All' || l.category === selectedCategory;
    return matchesSearch && matchesSev && matchesCat;
  });

  const toggleExpand = (id: string) => {
    setExpandedLogId(prev => prev === id ? null : id);
  };

  const handleExport = () => {
    setExportNotice('Exported 50,000 immutable audit events in signed RFC-5424 Syslog CSV for external auditor.');
    setTimeout(() => setExportNotice(null), 4000);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Global Audit Logs" 
      description="Immutable, tamper-evident security audit trail tracking administrative actions, approvals, and infrastructure changes."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics, Audit & Compliance' },
        { label: 'Global Audit Logs' }
      ]}
    >
      <div className="space-y-6">
        {exportNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{exportNotice}</span>
            </div>
            <button onClick={() => setExportNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Audit Stats Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Retention Period</p>
            <p className="text-2xl font-black text-slate-900 mt-1">7 Years</p>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">SOC-2 & ISO 27001 Policy</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Integrity Verification</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">100% Signed</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">SHA-256 Merkle Chain</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Events Ingested Today</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">48,210</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time ElasticSearch Node</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Critical Anomalies</p>
            <p className="text-2xl font-black text-slate-900 mt-1">1 Blocked</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">Auto-Mitigated at Edge</p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto flex-1">
            <div className="relative flex-1 min-w-[240px]">
              <Search size={16} className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search audit trail by actor, IP, event ID or action..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-blue-600 outline-none"
              />
            </div>

            <select 
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Severities</option>
              <option value="Info">Info</option>
              <option value="Warning">Warning</option>
              <option value="Critical">Critical</option>
            </select>

            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Categories</option>
              <option value="IAM & SSO">IAM & SSO</option>
              <option value="Payroll & Finance">Payroll & Finance</option>
              <option value="Policy & Compliance">Policy & Compliance</option>
              <option value="Cloud Infra">Cloud Infra</option>
              <option value="Turnstile IoT">Turnstile IoT</option>
            </select>
          </div>

          <button 
            onClick={handleExport}
            className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors shrink-0"
          >
            <Download size={14} /> Export Auditor CSV
          </button>
        </div>

        {/* Audit Stream Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="divide-y divide-slate-100 text-xs">
            {filteredLogs.map((log) => {
              const isExpanded = expandedLogId === log.id;
              return (
                <div key={log.id} className="p-4 hover:bg-slate-50/60 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-800">
                          {log.id}
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          log.severity === 'Critical' 
                            ? 'bg-rose-100 text-rose-800' 
                            : log.severity === 'Warning' 
                            ? 'bg-amber-100 text-amber-800' 
                            : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {log.severity}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                          {log.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-slate-900 text-sm mt-1.5">{log.action}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Actor: <strong className="text-slate-800">{log.actor}</strong> ({log.actorRole}) • {log.timestamp}
                      </p>
                      <p className="text-[10px] font-mono text-slate-400 mt-0.5">
                        IP: {log.ipAddress} • Target: {log.targetResource}
                      </p>
                    </div>

                    <button 
                      onClick={() => toggleExpand(log.id)}
                      className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-bold self-start sm:self-center"
                    >
                      {isExpanded ? 'Hide Payload' : 'View Payload'}
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="mt-3 p-3 bg-slate-900 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto border border-slate-800">
                      <div className="flex items-center justify-between text-slate-400 text-[10px] mb-2 pb-1 border-b border-slate-800">
                        <span>RAW CRYPTOGRAPHIC EVENT PAYLOAD</span>
                        <span>SHA-256 SIGNED</span>
                      </div>
                      <pre className="text-[11px] leading-relaxed">{log.payloadJson}</pre>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong>{filteredLogs.length}</strong> event streams</span>
            <span className="font-mono text-[11px]">IMMUTABLE WORM STORAGE ENFORCED</span>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
