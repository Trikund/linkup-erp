import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Cpu, Key, ExternalLink, RefreshCw, CheckCircle2, 
  AlertCircle, Copy, Plus, Lock, Check, X, ShieldCheck
} from 'lucide-react';

interface IntegrationApp {
  id: string;
  name: string;
  category: string;
  authType: 'OAuth 2.0' | 'API Token' | 'Webhook Push';
  status: 'Connected & Active' | 'Needs Re-auth' | 'Paused';
  syncCadence: string;
  lastEvent: string;
  eventsCount: string;
  iconInitials: string;
}

export function AdminIntegrations() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [activeTab, setActiveTab] = useState<'connectors' | 'keys' | 'webhooks'>('connectors');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const apps: IntegrationApp[] = [
    { id: 'APP-01', name: 'Slack Enterprise Grid', category: 'Team Communications & Alerts', authType: 'OAuth 2.0', status: 'Connected & Active', syncCadence: 'Real-time WebSocket', lastEvent: '12 seconds ago', eventsCount: '142k events/mo', iconInitials: 'SL' },
    { id: 'APP-02', name: 'GitHub Enterprise Cloud', category: 'Developer Tooling & Commits', authType: 'OAuth 2.0', status: 'Connected & Active', syncCadence: 'Webhook Dispatches', lastEvent: '1 min ago', eventsCount: '89k events/mo', iconInitials: 'GH' },
    { id: 'APP-03', name: 'Jira Software Cloud', category: 'Sprint Tasks & Issue Tracking', authType: 'API Token', status: 'Connected & Active', syncCadence: 'Hourly Delta Sync', lastEvent: '8 mins ago', eventsCount: '45k events/mo', iconInitials: 'JR' },
    { id: 'APP-04', name: 'Greenhouse ATS', category: 'Recruitment & Candidate Pipeline', authType: 'API Token', status: 'Connected & Active', syncCadence: 'Every 15 mins', lastEvent: '14 mins ago', eventsCount: '12k events/mo', iconInitials: 'GH' },
    { id: 'APP-05', name: 'DocuSign e-Signature', category: 'Legal Contracts & Offer Letters', authType: 'OAuth 2.0', status: 'Connected & Active', syncCadence: 'Webhook Callbacks', lastEvent: '2 hours ago', eventsCount: '2.4k events/mo', iconInitials: 'DS' },
    { id: 'APP-06', name: 'RazorpayX & Stripe Corporate', category: 'Payroll & Customer Billings', authType: 'API Token', status: 'Connected & Active', syncCadence: 'Transaction Hooks', lastEvent: '3 hours ago', eventsCount: '34k events/mo', iconInitials: 'RZ' },
    { id: 'APP-07', name: 'Jamf Pro MDM Fleet', category: 'Laptop Encryption & Device Health', authType: 'API Token', status: 'Connected & Active', syncCadence: 'Hourly Telemetry', lastEvent: '5 mins ago', eventsCount: '98k events/mo', iconInitials: 'JM' },
    { id: 'APP-08', name: 'NetSuite OneWorld ERP', category: 'General Ledger & Financial Accounting', authType: 'OAuth 2.0', status: 'Connected & Active', syncCadence: 'Nightly Batch GL', lastEvent: '12 hours ago', eventsCount: '18k events/mo', iconInitials: 'NS' },
    { id: 'APP-09', name: 'Datadog APM & Logs', category: 'Observability & Metrics Aggregator', authType: 'API Token', status: 'Connected & Active', syncCadence: 'Stream (UDP/HTTPS)', lastEvent: 'Sub-second', eventsCount: '1.8M events/mo', iconInitials: 'DD' }
  ];

  const handleCopy = (keyText: string, keyId: string) => {
    navigator.clipboard?.writeText(keyText);
    setCopiedKey(keyId);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleRotateKey = (keyId: string) => {
    setToastMessage(`API Secret for ${keyId} rotated. Old secret will expire in 24 hours.`);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="API & Integrations" 
      description="Enterprise connector hub, OAuth 2.0 integrations, developer API gateway keys, and outbound webhooks."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Cloud Infrastructure & Data' },
        { label: 'API & Integrations' }
      ]}
    >
      <div className="space-y-6">
        {toastMessage && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>{toastMessage}</span>
            </div>
            <button onClick={() => setToastMessage(null)}><X size={14} /></button>
          </div>
        )}

        {/* Global Integrations Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Active Connectors</p>
            <p className="text-2xl font-black text-slate-900 mt-1">12 Apps</p>
            <p className="text-xs text-blue-600 font-semibold mt-0.5">Enterprise SaaS & Infra</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Monthly API Events</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">2.2M</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">99.992% Dispatch Reliability</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Developer API Keys</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">8 Scoped Keys</p>
            <p className="text-xs text-slate-500 font-medium mt-0.5">90-Day Auto-Rotation</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Webhook Failures</p>
            <p className="text-2xl font-black text-slate-900 mt-1">0 Backpressure</p>
            <p className="text-xs text-emerald-600 font-semibold mt-0.5">Dead-letter queue empty</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-slate-200 text-xs font-bold gap-6">
          <button 
            onClick={() => setActiveTab('connectors')}
            className={`pb-3 transition-colors ${
              activeTab === 'connectors' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Connected SaaS Applications ({apps.length})
          </button>
          <button 
            onClick={() => setActiveTab('keys')}
            className={`pb-3 transition-colors ${
              activeTab === 'keys' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Developer API Gateway Keys (8)
          </button>
        </div>

        {/* Tab 1: Connectors Grid */}
        {activeTab === 'connectors' && (
          <div className="grid md:grid-cols-3 gap-4">
            {apps.map((app) => (
              <div key={app.id} className="bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                      {app.iconInitials}
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                      {app.status}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-sm leading-snug">{app.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{app.category}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Protocol:</span>
                      <strong className="text-slate-800">{app.authType}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Cadence:</span>
                      <strong className="text-slate-800">{app.syncCadence}</strong>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Volume:</span>
                      <strong className="font-mono text-blue-600">{app.eventsCount}</strong>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Last: {app.lastEvent}</span>
                  <button className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1">
                    Settings <ExternalLink size={10} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: API Keys */}
        {activeTab === 'keys' && (
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">Platform Gateway Secret Tokens</h3>
                <p className="text-xs text-slate-500">Fine-grained bearer tokens restricted to specific CIDR subnets</p>
              </div>
              <button className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition-colors">
                <Plus size={14} /> Generate Scoped Key
              </button>
            </div>

            <div className="divide-y divide-slate-100 text-xs">
              {[
                { id: 'KEY-PROD-BI', name: 'Enterprise PowerBI Analytics Ingest Key', scope: 'read:attendance, read:headcount', created: 'Aug 12, 2026', expires: 'Nov 12, 2026', keyPrefix: 'lk_live_sec_88f912********************' },
                { id: 'KEY-PROD-HRIS', name: 'Workday HRIS Synchronizer Webhook Token', scope: 'write:employees, read:org', created: 'Sep 01, 2026', expires: 'Dec 01, 2026', keyPrefix: 'lk_live_sec_10b441********************' },
                { id: 'KEY-PROD-TURNT', name: 'Campus IoT Optical Turnstiles Stream Key', scope: 'write:attendance_telemetry', created: 'Jul 15, 2026', expires: 'Oct 28, 2026 (7 days left)', keyPrefix: 'lk_live_sec_4488aa********************' }
              ].map(k => (
                <div key={k.id} className="p-4 hover:bg-slate-50/70 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-100 text-slate-800">
                        {k.id}
                      </span>
                      <h4 className="font-bold text-slate-900">{k.name}</h4>
                    </div>
                    <p className="text-[11px] font-mono text-slate-500 mt-1">
                      Token: <strong className="text-slate-700">{k.keyPrefix}</strong>
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Scope: <strong className="text-blue-600">{k.scope}</strong> • Expires: {k.expires}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleCopy(k.keyPrefix, k.id)}
                      className="px-2.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      {copiedKey === k.id ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
                      {copiedKey === k.id ? 'Copied' : 'Copy'}
                    </button>
                    <button 
                      onClick={() => handleRotateKey(k.id)}
                      className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1"
                    >
                      <RefreshCw size={12} /> Rotate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </CorporateLayout>
  );
}
