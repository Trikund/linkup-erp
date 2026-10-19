import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Settings, Building2, Globe, Mail, ShieldCheck, 
  Save, Check, AlertCircle, RefreshCw, Bell, Laptop, Palette
} from 'lucide-react';

export function AdminSettings() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [savedNotice, setSavedNotice] = useState<string | null>(null);

  const [orgProfile, setOrgProfile] = useState({
    legalName: 'LinkUp Technologies India Private Limited',
    brandName: 'LinkUpCorp',
    hqAddress: 'Prestige Tech Park, Outer Ring Road, Bellandur, Bengaluru 560103',
    cinNumber: 'U72900KA2020PTC139810',
    primaryDomain: 'erp.linkupcorp.internal',
    supportEmail: 'corp-governance@linkupcorp.internal',
    defaultTimezone: 'Asia/Kolkata (IST UTC+05:30)',
    baseCurrency: 'INR (₹)'
  });

  const [smtpConfig, setSmtpConfig] = useState({
    provider: 'Amazon SES (Production us-east-1)',
    senderEmail: 'no-reply@linkupcorp.internal',
    dkimStatus: '100% Verified (2048-bit RSA)',
    spfStatus: 'Pass (v=spf1 include:amazonses.com ~all)',
    dmarcStatus: 'Enforced (p=reject)'
  });

  const [maintenanceBanner, setMaintenanceBanner] = useState({
    enabled: false,
    message: 'Scheduled Maintenance: Sunday Oct 25, 2026, 02:00 - 03:00 UTC (Estimated 15 mins downtime).'
  });

  const handleSave = () => {
    setSavedNotice('Platform settings updated and broadcasted across enterprise clusters.');
    setTimeout(() => setSavedNotice(null), 3500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Platform Settings" 
      description="Enterprise legal entity settings, custom domains, corporate SMTP email relays, and platform white-labeling."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'System Configuration & Account' },
        { label: 'Platform Settings' }
      ]}
    >
      <div className="space-y-6">
        {savedNotice && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <Check size={16} className="text-emerald-600" />
            <span>{savedNotice}</span>
          </div>
        )}

        {/* Form Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Org Profile */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <Building2 className="text-blue-600" size={20} />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Enterprise Organization Profile</h3>
                <p className="text-xs text-slate-500">Legal entity name, headquarters, and base currency</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Legal Entity Name</label>
                <input 
                  type="text" 
                  value={orgProfile.legalName}
                  onChange={(e) => setOrgProfile({ ...orgProfile, legalName: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:bg-white focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Corporate CIN / Reg Number</label>
                <input 
                  type="text" 
                  value={orgProfile.cinNumber}
                  onChange={(e) => setOrgProfile({ ...orgProfile, cinNumber: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-mono text-slate-800 focus:bg-white focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Corporate Headquarters Address</label>
                <textarea 
                  rows={2}
                  value={orgProfile.hqAddress}
                  onChange={(e) => setOrgProfile({ ...orgProfile, hqAddress: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:bg-white focus:border-blue-600 outline-none resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Default Timezone</label>
                  <input 
                    type="text" 
                    value={orgProfile.defaultTimezone}
                    readOnly
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-medium cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Base Currency</label>
                  <input 
                    type="text" 
                    value={orgProfile.baseCurrency}
                    readOnly
                    className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-medium cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Email and Gateway */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
              <Mail className="text-blue-600" size={20} />
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Transactional Email & SMTP Gateway</h3>
                <p className="text-xs text-slate-500">DKIM, SPF, and DMARC delivery security settings</p>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              <div>
                <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">SMTP Relay Provider</label>
                <input 
                  type="text" 
                  value={smtpConfig.provider}
                  readOnly
                  className="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-lg text-slate-700 font-medium cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-slate-500 font-bold uppercase text-[10px] mb-1">Sender Email Address</label>
                <input 
                  type="text" 
                  value={smtpConfig.senderEmail}
                  onChange={(e) => setSmtpConfig({ ...smtpConfig, senderEmail: e.target.value })}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg font-medium text-slate-800 focus:bg-white focus:border-blue-600 outline-none"
                />
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700">DKIM Signature:</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {smtpConfig.dkimStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700">SPF Record:</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {smtpConfig.spfStatus}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-700">DMARC Policy:</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {smtpConfig.dmarcStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Broadcast Banner Config */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Bell className="text-amber-500" size={18} />
              <h3 className="font-bold text-slate-900 text-sm">Global Maintenance Broadcast Banner</h3>
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                checked={maintenanceBanner.enabled}
                onChange={(e) => setMaintenanceBanner({ ...maintenanceBanner, enabled: e.target.checked })}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span className="text-xs font-bold text-slate-700">Broadcast to all 1,450 users</span>
            </label>
          </div>
          <input 
            type="text"
            value={maintenanceBanner.message}
            onChange={(e) => setMaintenanceBanner({ ...maintenanceBanner, message: e.target.value })}
            className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:bg-white focus:border-blue-600 outline-none"
          />
        </div>

        {/* Save Bar */}
        <div className="flex justify-end">
          <button 
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-600/30 transition-colors"
          >
            <Save size={16} /> Save Configuration
          </button>
        </div>
      </div>
    </CorporateLayout>
  );
}
