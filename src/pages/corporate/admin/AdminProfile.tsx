import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  UserCheck, ShieldCheck, Key, Lock, Laptop, 
  Smartphone, Clock, CheckCircle2, AlertTriangle, Copy, Check, X
} from 'lucide-react';

export function AdminProfile() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const profileData = {
    employeeId: 'ADM-0001',
    fullName: 'Rajesh Varma',
    email: 'rajesh.varma@linkupcorp.internal',
    designation: 'Principal Enterprise Platform Administrator & Chief Information Security Officer (CISO)',
    department: 'Platform Governance & Security Architecture',
    securityClearance: 'Tier 1 Root Authority (Full Break-Glass Privileges)',
    location: 'Bengaluru Global HQ (Executive Wing)',
    hardwareKey: 'YubiKey 5C NFC (Serial #21998401) - Enforced FIDO2',
    lastPasswordChange: 'Aug 14, 2026 (90-Day Policy Compliant)',
    activeSessionIp: '103.21.244.18 (Bengaluru Corporate Subnet)',
    sessionExpiresIn: '7 hours 14 mins'
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleRegenerateBreakGlass = () => {
    setToastMessage('Emergency Break-Glass root keypair regenerated and stored in hardware vault.');
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Super Admin Profile" 
      description="Super Administrator credentials, hardware security keys, root access authority, and break-glass recovery."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'System Configuration & Account' },
        { label: 'Super Admin Profile' }
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

        {/* Profile Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white font-black text-xl flex items-center justify-center shadow-md">
              RV
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900">{profileData.fullName}</h3>
                <span className="font-mono text-xs px-2 py-0.5 rounded font-bold bg-slate-900 text-white">
                  {profileData.employeeId}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ROOT PRIVILEGES
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium mt-1">{profileData.designation}</p>
              <p className="text-[11px] text-blue-600 font-semibold mt-0.5">{profileData.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleRegenerateBreakGlass}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <Key size={14} /> Rotate Break-Glass Key
            </button>
          </div>
        </div>

        {/* Credentials and Security Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Platform IAM Authority */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <ShieldCheck className="text-blue-600" size={20} />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Platform Authority & Clearance</h3>
                <p className="text-xs text-slate-500">IAM clearance level and organizational scope</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Security Clearance</span>
                <span className="font-bold text-slate-800 text-xs mt-0.5 block">{profileData.securityClearance}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Primary Department</span>
                <span className="font-semibold text-slate-800 text-xs mt-0.5 block">{profileData.department}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Physical Location</span>
                <span className="font-semibold text-slate-800 text-xs mt-0.5 block">{profileData.location}</span>
              </div>
            </div>
          </div>

          {/* Hardware Security & Session Telemetry */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <Lock className="text-blue-600" size={20} />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Hardware Token & Live Session</h3>
                <p className="text-xs text-slate-500">FIDO2 passkey and current cryptographic login</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Hardware Security Key</span>
                <div className="flex items-center justify-between mt-0.5">
                  <span className="font-bold text-slate-800 text-xs">{profileData.hardwareKey}</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded">ENFORCED</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="text-[10px] uppercase font-bold text-slate-500 block">Active Source IP</span>
                <span className="font-mono font-bold text-blue-600 text-xs mt-0.5 block">{profileData.activeSessionIp}</span>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Session Expiry</span>
                  <span className="font-mono text-slate-800 text-xs mt-0.5 block">{profileData.sessionExpiresIn}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-200 text-slate-700 rounded font-bold">
                  IDLE TIMEOUT: 15m
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Disaster Recovery Root Key Box */}
        <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-md border border-slate-800">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Key className="text-amber-400" size={18} />
              <h4 className="font-bold text-sm text-white">Emergency Break-Glass Recovery Protocol</h4>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
              SHAMIR 3-OF-5 SECRET SHARING
            </span>
          </div>
          <p className="text-xs text-slate-400 mb-4">
            In the event of total Identity Provider (Okta / Entra ID) outage, root platform access requires 3 of 5 executive key custodians to sign an emergency offline payload.
          </p>

          <div className="p-3 bg-slate-800 rounded-xl border border-slate-700 flex items-center justify-between font-mono text-xs">
            <span className="text-slate-300 truncate">
              pgp:4096R/ADM0001-BREAKGLASS-FINGERPRINT-8812A9B4C201FF09
            </span>
            <button 
              onClick={() => handleCopy('pgp:4096R/ADM0001-BREAKGLASS-FINGERPRINT-8812A9B4C201FF09', 'breakglass')}
              className="text-xs text-blue-400 hover:text-blue-300 font-bold ml-2 shrink-0 flex items-center gap-1"
            >
              {copiedKey === 'breakglass' ? <Check size={12} /> : <Copy size={12} />}
              {copiedKey === 'breakglass' ? 'Copied' : 'Copy Public Key'}
            </button>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
