import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Lock, ShieldCheck, Laptop, Globe, AlertTriangle, 
  CheckCircle2, Plus, Trash2, RefreshCw, Key, ShieldAlert,
  Terminal, ArrowUpRight
} from 'lucide-react';

interface IpRule {
  id: string;
  name: string;
  cidr: string;
  location: string;
  status: 'Active' | 'Under Review';
  allowedRoles: string;
  lastUsed: string;
}

interface ThreatEvent {
  id: string;
  type: string;
  sourceIp: string;
  geo: string;
  timestamp: string;
  severity: 'Critical' | 'High' | 'Medium';
  resolution: string;
}

export function AdminSecurity() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [activeTab, setActiveTab] = useState<'ip' | 'mdm' | 'threats'>('ip');
  const [threatActionNotice, setThreatActionNotice] = useState<string | null>(null);

  const [ipRules, setIpRules] = useState<IpRule[]>([
    { id: 'IP-01', name: 'Bengaluru Bellandur Campus Gateway', cidr: '103.21.244.0/24', location: 'Bengaluru, India', status: 'Active', allowedRoles: 'All Roles', lastUsed: 'Just now' },
    { id: 'IP-02', name: 'Gurugram Cyber Hub Gateway', cidr: '14.143.42.0/24', location: 'Gurugram, India', status: 'Active', allowedRoles: 'All Roles', lastUsed: '2 mins ago' },
    { id: 'IP-03', name: 'Palo Alto Silicon Valley Office', cidr: '198.51.100.0/23', location: 'California, US', status: 'Active', allowedRoles: 'All Roles', lastUsed: '5 mins ago' },
    { id: 'IP-04', name: 'London EC2 Financial Gateway', cidr: '185.86.151.0/24', location: 'London, UK', status: 'Active', allowedRoles: 'All Roles', lastUsed: '14 mins ago' },
    { id: 'IP-05', name: 'Corporate Cloudflare Zero-Trust WARP', cidr: '172.64.0.0/13', location: 'Global Edge VPN', status: 'Active', allowedRoles: 'Staff & Contractors', lastUsed: 'Just now' }
  ]);

  const [threats, setThreats] = useState<ThreatEvent[]>([
    { id: 'THR-9912', type: 'Anomalous SSH Bastion Brute-Force', sourceIp: '185.220.101.4', geo: 'Tor Exit Node (DE)', timestamp: '42 mins ago', severity: 'Critical', resolution: 'Auto-Blocked by Cloudflare Edge WAF' },
    { id: 'THR-9911', type: 'Impossible Travel Alert (SGP ➔ LON in 10m)', sourceIp: '82.165.197.1', geo: 'Frankfurt, Germany', timestamp: '3 hours ago', severity: 'High', resolution: 'Session Revoked • FIDO2 Re-auth Required' },
    { id: 'THR-9910', type: 'Rapid GraphQL Introspection Query', sourceIp: '45.148.10.12', geo: 'Bucharest, Romania', timestamp: '5 hours ago', severity: 'Medium', resolution: 'Rate-Limited to 0 req/sec' }
  ]);

  const handleBlockIp = (threatId: string) => {
    setThreatActionNotice(`Enforced permanent global firewall block for threat ${threatId}.`);
    setTimeout(() => setThreatActionNotice(null), 3500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Security & Zero-Trust" 
      description="Zero-Trust Network Access (ZTNA), Cloudflare edge firewall, Jamf MDM compliance, and threat mitigation."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Identity, Access & Security' },
        { label: 'Security & Zero-Trust' }
      ]}
    >
      <div className="space-y-6">
        {threatActionNotice && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-900 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <ShieldAlert size={16} className="text-rose-600" />
            <span>{threatActionNotice}</span>
          </div>
        )}

        {/* Security Posture Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Posture Score</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">98.6 / 100</p>
            <p className="text-[11px] text-slate-500 mt-0.5">SOC-2 Type II Benchmark</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Laptops Encrypted</p>
            <p className="text-2xl font-black text-slate-900 mt-1">100%</p>
            <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">1,450 / 1,450 Jamf / BitLocker</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Whitelisted Hubs</p>
            <p className="text-2xl font-black text-blue-600 mt-1">5 Subnets</p>
            <p className="text-[11px] text-slate-500 mt-0.5">Zero-Trust WARP Enforced</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Threats Mitigated</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">100%</p>
            <p className="text-[11px] text-slate-500 mt-0.5">0 Active Breaches</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-200 text-xs font-bold gap-6">
          <button 
            onClick={() => setActiveTab('ip')}
            className={`pb-3 transition-colors ${
              activeTab === 'ip' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            IP Whitelisting & Branch Subnets ({ipRules.length})
          </button>
          <button 
            onClick={() => setActiveTab('mdm')}
            className={`pb-3 transition-colors ${
              activeTab === 'mdm' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Jamf Pro & Intune MDM Health (1,450 Devices)
          </button>
          <button 
            onClick={() => setActiveTab('threats')}
            className={`pb-3 transition-colors ${
              activeTab === 'threats' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Live Threat Radar & WAF Logs ({threats.length})
          </button>
        </div>

        {/* Tab 1: IP Whitelisting */}
        {activeTab === 'ip' && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Zero-Trust Ingress CIDR Rules</h3>
                <p className="text-xs text-slate-500">Only traffic originating from verified physical offices and WARP tunnel is accepted</p>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors">
                <Plus size={14} /> Add Subnet Rule
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase">
                    <th className="py-3 px-4">Gateway Name</th>
                    <th className="py-3 px-4">CIDR Subnet</th>
                    <th className="py-3 px-4">Physical Location</th>
                    <th className="py-3 px-4">Allowed Scope</th>
                    <th className="py-3 px-4">Last Activity</th>
                    <th className="py-3 px-4 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {ipRules.map(r => (
                    <tr key={r.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">{r.name}</td>
                      <td className="py-3 px-4 font-mono text-blue-600 font-bold">{r.cidr}</td>
                      <td className="py-3 px-4 text-slate-600">{r.location}</td>
                      <td className="py-3 px-4 text-slate-700 font-medium">{r.allowedRoles}</td>
                      <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{r.lastUsed}</td>
                      <td className="py-3 px-4 text-right">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: MDM Fleet */}
        {activeTab === 'mdm' && (
          <div className="space-y-4">
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase">macOS Fleet (Jamf Pro)</p>
                <p className="text-2xl font-black text-slate-900 mt-1">1,020 Laptops</p>
                <p className="text-xs text-emerald-600 font-semibold mt-1">FileVault 2 Enforced • Sequoia 15.1</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase">Windows 11 Fleet (Intune)</p>
                <p className="text-2xl font-black text-slate-900 mt-1">380 Laptops</p>
                <p className="text-xs text-emerald-600 font-semibold mt-1">BitLocker 256-bit AES • SecureBoot</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200">
                <p className="text-xs font-bold text-slate-500 uppercase">Linux Dev Bastions</p>
                <p className="text-2xl font-black text-slate-900 mt-1">50 Workstations</p>
                <p className="text-xs text-emerald-600 font-semibold mt-1">LUKS Full Disk Encryption</p>
              </div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-slate-900">Continuous Endpoint Telemetry & Compliance</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Automated MDM policy blocks API token issuance to any jailbroken or unencrypted machine.
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg">
                100% COMPLIANT
              </span>
            </div>
          </div>
        )}

        {/* Tab 3: Threat Radar */}
        {activeTab === 'threats' && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Cloudflare Edge WAF & Threat Telemetry</h3>
                <p className="text-xs text-slate-500">Live anomalous traffic patterns intercepted by distributed honeypots</p>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                INGRESS MONITORING ACTIVE
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {threats.map(t => (
                <div key={t.id} className="p-4 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        t.severity === 'Critical' ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {t.severity}
                      </span>
                      <h4 className="font-bold text-slate-900">{t.type}</h4>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-1">
                      Source: <strong className="font-mono text-slate-800">{t.sourceIp}</strong> ({t.geo}) • {t.timestamp}
                    </p>
                    <p className="text-[11px] text-emerald-700 font-semibold mt-0.5">Mitigation: {t.resolution}</p>
                  </div>

                  <button 
                    onClick={() => handleBlockIp(t.id)}
                    className="px-3 py-1.5 bg-slate-900 hover:bg-rose-700 text-white font-bold rounded-lg text-xs transition-colors shrink-0"
                  >
                    Permanent Ban IP
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CorporateLayout>
  );
}
