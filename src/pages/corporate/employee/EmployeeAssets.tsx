import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Layers, Laptop, Monitor, Key, Headphones, 
  CheckCircle2, Download, AlertTriangle, ShieldCheck, Plus
} from 'lucide-react';

interface AssetRecord {
  tag: string;
  name: string;
  model: string;
  serialNo: string;
  issuedDate: string;
  warrantyUntil: string;
  condition: string;
  status: 'In Use' | 'Under Maintenance';
  icon: any;
}

export function EmployeeAssets() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const assets: AssetRecord[] = [
    {
      tag: 'IT-LPT-2024-0428',
      name: 'Primary Workstation',
      model: 'Apple MacBook Pro 16" M3 Max (36GB Unified Memory / 1TB SSD, Space Black)',
      serialNo: 'C02G9012MD6T',
      issuedDate: 'Aug 14, 2024',
      warrantyUntil: 'Aug 13, 2027 (AppleCare+ Enterprise)',
      condition: 'Excellent (Battery Health 98%)',
      status: 'In Use',
      icon: Laptop
    },
    {
      tag: 'IT-MON-2024-0811',
      name: 'External Desktop Display',
      model: 'Dell UltraSharp 27" 4K USB-C Hub Monitor (U2723QE, IPS Black 2000:1)',
      serialNo: 'CN-098K41-744',
      issuedDate: 'Aug 16, 2024',
      warrantyUntil: 'Aug 15, 2027',
      condition: 'Excellent (Desk 42, Bengaluru HQ)',
      status: 'In Use',
      icon: Monitor
    },
    {
      tag: 'SEC-KEY-0428',
      name: 'Hardware 2FA Security Key',
      model: 'Yubico YubiKey 5C NFC (FIDO2 / WebAuthn Hardware Token)',
      serialNo: 'YK-9018241',
      issuedDate: 'Aug 14, 2024',
      warrantyUntil: 'Perpetual Enterprise Token',
      condition: 'Hardware Bound to Okta & AWS',
      status: 'In Use',
      icon: Key
    },
    {
      tag: 'IT-AUD-0428',
      name: 'Conference Headset',
      model: 'Jabra Evolve 75 Active Noise Cancelling Wireless Stereo Headset',
      serialNo: 'JB-7501928',
      issuedDate: 'Aug 14, 2024',
      warrantyUntil: 'Aug 14, 2026',
      condition: 'Good Working Condition',
      status: 'In Use',
      icon: Headphones
    }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="IT Assets & Gear"
      description="Inventory of company-issued laptops, external monitors, and hardware security tokens."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Organization & Culture' },
        { label: 'IT Assets & Gear' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Layers size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Company Hardware & IT Gear Inventory</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                4 Active Devices Assigned
              </span>
            </div>
            <p className="text-xs text-slate-500">
              All devices are enrolled in Jamf Pro MDM with FileVault full-disk AES-256 encryption.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition">
              <Download size={14} className="text-slate-500" />
              Asset Custody Form PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
              <Plus size={14} />
              Request Hardware Upgrade
            </button>
          </div>
        </div>

        {/* Asset Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {assets.map((asset) => (
            <div key={asset.tag} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-100">
                    <asset.icon size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold text-slate-400">{asset.tag}</span>
                    <h3 className="text-sm font-bold text-slate-800">{asset.name}</h3>
                  </div>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {asset.status}
                </span>
              </div>

              <p className="text-xs font-semibold text-slate-700 mt-3 leading-snug">
                {asset.model}
              </p>

              <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                <div className="flex justify-between">
                  <span className="text-slate-400">Serial Number:</span>
                  <span className="font-mono font-semibold text-slate-800">{asset.serialNo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Issued On:</span>
                  <span className="text-slate-700 font-medium">{asset.issuedDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Warranty Coverage:</span>
                  <span className="text-emerald-600 font-medium">{asset.warrantyUntil}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Diagnostics:</span>
                  <span className="text-slate-700">{asset.condition}</span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <button className="text-xs font-bold text-blue-600 hover:underline">
                  Report Hardware Issue
                </button>
                <button className="px-2.5 py-1 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg transition">
                  Device Health Specs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
