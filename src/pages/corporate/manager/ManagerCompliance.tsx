import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  ShieldCheck, Lock, CheckCircle2, AlertTriangle, 
  Laptop, Key, FileCheck, ExternalLink, RefreshCw, 
  ChevronRight, ArrowUpRight
} from 'lucide-react';

export function ManagerCompliance() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const complianceChecklist = [
    {
      category: 'SOC-2 Type II & ISO 27001 Audit',
      status: '100% Compliant',
      items: [
        { label: 'Enforce GPG Commit Signing on main and release branches', value: 'Enforced on 4/4 repos', passed: true },
        { label: 'Mandatory 2-Peer Review Approvals before merging PRs', value: 'Active on all branches', passed: true },
        { label: 'Automated Snyk & Dependabot Vulnerability Scanning', value: 'Zero Critical / High CVEs', passed: true }
      ]
    },
    {
      category: 'Jamf MDM Workstation Security',
      status: '8/8 Laptops Enrolled',
      items: [
        { label: 'FileVault Full Disk Encryption', value: '100% (8/8 Devices Active)', passed: true },
        { label: 'CrowdStrike Falcon Endpoint Detection & Response', value: '100% Online & Shielded', passed: true },
        { label: 'Operating System Security Patch Version', value: 'All devices running latest patch', passed: true }
      ]
    },
    {
      category: 'Annual Mandatory Policy Certifications',
      status: 'All Completed',
      items: [
        { label: 'POSH (Prevention of Sexual Harassment) FY26', value: '8/8 Certified', passed: true },
        { label: 'Enterprise Information Security & Phishing Defense', value: '8/8 Passed simulation', passed: true },
        { label: 'Data Privacy & GDPR Zero-Trust Architecture', value: '8/8 Certified', passed: true }
      ]
    }
  ];

  const devices = [
    { id: 'LAP-0428', owner: 'Rahul Sharma', model: 'MacBook Pro 16" M3 Max', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0441', owner: 'Vikram Malhotra', model: 'Dell Precision 5570', os: 'Ubuntu 24.04 LTS (LUKS)', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0512', owner: 'Sneha Roy', model: 'MacBook Pro 14" M3 Pro', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0589', owner: 'Amit Kumar', model: 'MacBook Pro 16" M2 Max', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0612', owner: 'Rohan Das', model: 'MacBook Pro 14" M3', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0720', owner: 'Neha Verma', model: 'MacBook Air 15" M3', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0640', owner: 'Siddharth Rao', model: 'ThinkPad P1 Gen 6', os: 'Ubuntu 24.04 LTS (LUKS)', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' },
    { id: 'LAP-0688', owner: 'Ananya Sen', model: 'MacBook Pro 14" M3 Pro', os: 'macOS 15.0.1 Sequoia', encryption: 'Encrypted', edr: 'Active', compliance: 'Compliant' }
  ];

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Security, Audit & Governance"
      description="Inspect team SOC-2 Type II audit readiness, workstation encryption, and mandatory certifications."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Analytics & Governance' },
        { label: 'Security & Compliance' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overall Compliance</p>
              <h3 className="text-2xl font-bold text-slate-900">100%</h3>
              <p className="text-xs text-emerald-600 font-medium">SOC-2 Type II ready</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Laptop size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Jamf MDM Workstations</p>
              <h3 className="text-2xl font-bold text-slate-900">8 / 8 Active</h3>
              <p className="text-xs text-blue-600 font-medium">100% disk encryption</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <FileCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">POSH & InfoSec</p>
              <h3 className="text-2xl font-bold text-slate-900">8 / 8 Certified</h3>
              <p className="text-xs text-purple-600 font-medium">Annual training completed</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Key size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Branch Protections</p>
              <h3 className="text-2xl font-bold text-slate-900">4 / 4 Repos</h3>
              <p className="text-xs text-amber-600 font-medium">Signed commits required</p>
            </div>
          </div>
        </div>

        {/* Audit Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {complianceChecklist.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100">
                  <h4 className="text-xs font-bold text-slate-800">{sec.category}</h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    {sec.status}
                  </span>
                </div>

                <div className="space-y-3">
                  {sec.items.map((item, iIdx) => (
                    <div key={iIdx} className="text-xs">
                      <div className="flex items-center gap-1.5 text-slate-700 font-semibold mb-0.5">
                        <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
                        <span>{item.label}</span>
                      </div>
                      <p className="text-[11px] text-slate-500 pl-5">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workstation Inventory Table */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Pod 4 Hardware Asset & Security Registry</h3>
              <p className="text-xs text-slate-500">Live heartbeat telemetry from corporate MDM server.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Asset Tag</th>
                  <th className="py-3 px-5">Assigned Engineer</th>
                  <th className="py-3 px-5">Workstation Model</th>
                  <th className="py-3 px-5">OS Version</th>
                  <th className="py-3 px-5">Disk Encryption</th>
                  <th className="py-3 px-5">CrowdStrike EDR</th>
                  <th className="py-3 px-5">Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {devices.map((dev) => (
                  <tr key={dev.id} className="hover:bg-slate-50 transition">
                    <td className="py-3 px-5 font-mono font-bold text-slate-900">{dev.id}</td>
                    <td className="py-3 px-5 font-bold text-slate-800">{dev.owner}</td>
                    <td className="py-3 px-5 text-slate-600">{dev.model}</td>
                    <td className="py-3 px-5 font-mono text-[11px] text-slate-500">{dev.os}</td>
                    <td className="py-3 px-5">
                      <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                        ✓ {dev.encryption}
                      </span>
                    </td>
                    <td className="py-3 px-5">
                      <span className="text-blue-700 font-semibold bg-blue-50 px-2 py-0.5 rounded text-[11px]">
                        ● {dev.edr}
                      </span>
                    </td>
                    <td className="py-3 px-5">
                      <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 text-[11px]">
                        {dev.compliance}
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
