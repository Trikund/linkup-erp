import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  ShieldCheck, Key, Lock, CheckCircle2, RefreshCw, 
  Copy, ExternalLink, Download, AlertCircle, Laptop, Check, X
} from 'lucide-react';

interface IdPConfig {
  id: string;
  name: string;
  provider: 'Okta' | 'Microsoft Entra ID' | 'Google Workspace';
  protocol: 'SAML 2.0' | 'OIDC / SCIM';
  status: 'Active & Enforced' | 'Standby' | 'Configuring';
  issuerUrl: string;
  ssoUrl: string;
  certExpiry: string;
  syncedUsers: number;
  lastSync: string;
}

export function AdminSso() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [syncStatus, setSyncStatus] = useState<string | null>(null);
  const [selectedIdp, setSelectedIdp] = useState('idp-01');

  const [idpList, setIdpList] = useState<IdPConfig[]>([
    {
      id: 'idp-01',
      name: 'Okta Universal Directory (Primary Corporate IdP)',
      provider: 'Okta',
      protocol: 'SAML 2.0',
      status: 'Active & Enforced',
      issuerUrl: 'https://linkupcorp.okta.com/app/linkup-prod-erp/exk8812/sso/saml',
      ssoUrl: 'https://linkupcorp.okta.com/app/linkup-prod-erp/exk8812/sso/saml/login',
      certExpiry: 'Nov 14, 2027 (Valid)',
      syncedUsers: 1450,
      lastSync: '4 minutes ago'
    },
    {
      id: 'idp-02',
      name: 'Microsoft Entra ID (Azure AD - Global Subsidiaries)',
      provider: 'Microsoft Entra ID',
      protocol: 'OIDC / SCIM',
      status: 'Active & Enforced',
      issuerUrl: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/v2.0',
      ssoUrl: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47/saml2',
      certExpiry: 'Aug 22, 2028 (Valid)',
      syncedUsers: 330,
      lastSync: '12 minutes ago'
    },
    {
      id: 'idp-03',
      name: 'Google Workspace Enterprise (Contractor SSO)',
      provider: 'Google Workspace',
      protocol: 'SAML 2.0',
      status: 'Standby',
      issuerUrl: 'https://accounts.google.com/o/saml2?idpid=C0237xk',
      ssoUrl: 'https://accounts.google.com/o/saml2/idp?idpid=C0237xk',
      certExpiry: 'Jan 10, 2027 (Valid)',
      syncedUsers: 85,
      lastSync: '1 hour ago'
    }
  ]);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleTriggerSync = () => {
    setSyncStatus('Initiated SCIM full sync across 1,450 employee records...');
    setTimeout(() => {
      setSyncStatus('SCIM Sync completed: 1,450 accounts in sync. 0 errors.');
      setTimeout(() => setSyncStatus(null), 3500);
    }, 1500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Single Sign-On (SSO)" 
      description="SAML 2.0 Identity Providers, SCIM user provisioning, certificate renewals, and WebAuthn hardware passkeys."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Identity, Access & Security' },
        { label: 'Single Sign-On (SSO)' }
      ]}
    >
      <div className="space-y-6">
        {syncStatus && (
          <div className="p-3 bg-blue-50 border border-blue-200 text-blue-900 rounded-xl text-xs font-semibold flex items-center justify-between animate-fadeIn">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-600" />
              <span>{syncStatus}</span>
            </div>
            <button onClick={() => setSyncStatus(null)}><X size={14} /></button>
          </div>
        )}

        {/* Top Summary Banner */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <ShieldCheck size={26} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 text-base">SSO & SCIM Provisioning Engine</h3>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                  ENFORCED ACROSS ALL WORKFORCE
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Password logins disabled for staff. All authentications routed via Okta SAML 2.0 or Entra ID SCIM v2.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={handleTriggerSync}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold shadow-md shadow-slate-900/20 transition-colors"
            >
              <RefreshCw size={14} />
              Trigger SCIM Resync
            </button>
          </div>
        </div>

        {/* IdP Cards */}
        <div className="space-y-4">
          {idpList.map((idp) => (
            <div 
              key={idp.id}
              className={`bg-white border rounded-2xl p-5 shadow-sm transition-all ${
                selectedIdp === idp.id ? 'border-blue-500 ring-2 ring-blue-500/10' : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center font-bold text-xs">
                    {idp.provider === 'Okta' ? 'OKTA' : idp.provider === 'Microsoft Entra ID' ? 'MSFT' : 'GOOG'}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{idp.name}</h4>
                    <p className="text-xs text-slate-500">{idp.protocol} • Last Synced: {idp.lastSync}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {idp.status}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-semibold px-2 py-1 bg-slate-100 rounded-lg">
                    {idp.syncedUsers} Synced Staff
                  </span>
                </div>
              </div>

              {/* Endpoint URLs */}
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">SAML Entity ID / Issuer</span>
                    <button 
                      onClick={() => handleCopy(idp.issuerUrl, `${idp.id}-issuer`)}
                      className="text-[10px] text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      {copiedKey === `${idp.id}-issuer` ? <Check size={10} /> : <Copy size={10} />}
                      {copiedKey === `${idp.id}-issuer` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-slate-800 truncate">{idp.issuerUrl}</p>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Single Sign-On (SSO) URL</span>
                    <button 
                      onClick={() => handleCopy(idp.ssoUrl, `${idp.id}-sso`)}
                      className="text-[10px] text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1"
                    >
                      {copiedKey === `${idp.id}-sso` ? <Check size={10} /> : <Copy size={10} />}
                      {copiedKey === `${idp.id}-sso` ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-xs font-mono text-slate-800 truncate">{idp.ssoUrl}</p>
                </div>
              </div>

              {/* Certificate and Security Policy */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-4">
                  <span>X.509 Certificate: <strong className="text-slate-800">{idp.certExpiry}</strong></span>
                  <span>Algorithm: <strong className="font-mono text-slate-700">SHA-256 with RSA</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 text-xs">
                    <Download size={12} /> Download SAML Metadata XML
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SP Details Box */}
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-sm text-white">LinkUp ERP Service Provider (SP) Credentials</h4>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
              SP METADATA
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 text-xs font-mono text-slate-300">
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Assertion Consumer Service (ACS) URL</span>
              <span className="text-white bg-slate-800 px-2 py-1 rounded block mt-1 truncate">
                https://erp.linkupcorp.internal/api/v1/auth/saml/callback
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[10px] uppercase font-bold">Entity ID / Audience URI</span>
              <span className="text-white bg-slate-800 px-2 py-1 rounded block mt-1 truncate">
                urn:linkup:corporate:erp:production
              </span>
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
