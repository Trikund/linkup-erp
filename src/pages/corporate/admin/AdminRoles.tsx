import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Key, ShieldCheck, Users, Lock, Check, X, 
  Plus, Edit2, AlertCircle, Save, RefreshCw
} from 'lucide-react';

interface PermissionModule {
  category: string;
  permissions: {
    key: string;
    label: string;
    description: string;
    roles: Record<string, boolean>;
  }[];
}

export function AdminRoles() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const roles = [
    { id: 'super_admin', label: 'Super Admin', usersCount: 3, badge: 'Root Access', color: 'rose' },
    { id: 'platform_admin', label: 'Platform Admin', usersCount: 8, badge: 'Governance', color: 'blue' },
    { id: 'hrbp', label: 'HRBP Lead', usersCount: 14, badge: 'People Ops', color: 'violet' },
    { id: 'manager', label: 'Eng Manager', usersCount: 42, badge: 'Team Lead', color: 'indigo' },
    { id: 'finance', label: 'Finance & Payroll', usersCount: 12, badge: 'Treasury', color: 'amber' },
    { id: 'employee', label: 'Standard Employee', usersCount: 1371, badge: 'Self Service', color: 'slate' }
  ];

  const [activeTab, setActiveTab] = useState('super_admin');
  const [saveStatus, setSaveStatus] = useState<string | null>(null);

  const [modules, setModules] = useState<PermissionModule[]>([
    {
      category: 'Workforce & Identity (IAM)',
      permissions: [
        { key: 'user.view', label: 'View Employee Directory', description: 'Can search and view corporate staff directory', roles: { super_admin: true, platform_admin: true, hrbp: true, manager: true, finance: true, employee: true } },
        { key: 'user.create', label: 'Provision New Employees', description: 'Can onboard new hires and assign work pods', roles: { super_admin: true, platform_admin: true, hrbp: true, manager: false, finance: false, employee: false } },
        { key: 'user.suspend', label: 'Suspend & Terminate Accounts', description: 'Can immediately revoke SSO and session tokens', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: false, finance: false, employee: false } },
        { key: 'user.mfa_reset', label: 'Reset MFA / Passkeys', description: 'Can issue temporary bypass codes for login lockout', roles: { super_admin: true, platform_admin: true, hrbp: true, manager: false, finance: false, employee: false } }
      ]
    },
    {
      category: 'Payroll, Tax & Financial Approvals',
      permissions: [
        { key: 'payroll.run', label: 'Execute Monthly Payroll Cycle', description: 'Authorize gross disbursement and bank NACH file', roles: { super_admin: true, platform_admin: false, hrbp: false, manager: false, finance: true, employee: false } },
        { key: 'payroll.view_all', label: 'View Organization Compensation', description: 'Access CTC bands and equity grants company-wide', roles: { super_admin: true, platform_admin: false, hrbp: true, manager: false, finance: true, employee: false } },
        { key: 'expenses.approve_pod', label: 'Approve Pod Reimbursements', description: 'Sign off travel and cloud software expense claims', roles: { super_admin: true, platform_admin: true, hrbp: true, manager: true, finance: true, employee: false } },
        { key: 'tax.statutory_lock', label: 'File PF & Form 24Q TDS', description: 'Generate signed government compliance returns', roles: { super_admin: true, platform_admin: false, hrbp: false, manager: false, finance: true, employee: false } }
      ]
    },
    {
      category: 'Projects, Deliverables & Sprints',
      permissions: [
        { key: 'project.create', label: 'Create Projects & Repositories', description: 'Initiate enterprise sprints and resource budgets', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: true, finance: false, employee: false } },
        { key: 'project.signoff', label: 'Milestone Delivery Sign-off', description: 'Authorize sprint completion and client billing', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: true, finance: false, employee: false } },
        { key: 'timesheet.approve', label: 'Approve Engineering Timesheets', description: 'Lock billing hours for client projects', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: true, finance: false, employee: false } }
      ]
    },
    {
      category: 'Cloud Infrastructure & Security Vault',
      permissions: [
        { key: 'infra.view', label: 'View Cluster Telemetry', description: 'Inspect Kubernetes nodes, latency and error rates', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: false, finance: false, employee: false } },
        { key: 'infra.modify', label: 'Deploy & Modify Cloud Services', description: 'Scale pods, rotate TLS certs and alter DNS records', roles: { super_admin: true, platform_admin: false, hrbp: false, manager: false, finance: false, employee: false } },
        { key: 'audit.view_immutable', label: 'Inspect Global Audit Trail', description: 'Access tamper-proof cryptographic event logs', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: false, finance: false, employee: false } },
        { key: 'security.zero_trust', label: 'Configure Zero-Trust & IP Policies', description: 'Manage firewall, VPN and Jamf MDM compliance rules', roles: { super_admin: true, platform_admin: true, hrbp: false, manager: false, finance: false, employee: false } }
      ]
    }
  ]);

  const handleTogglePermission = (catIdx: number, permIdx: number, roleId: string) => {
    setModules(prev => {
      const copy = [...prev];
      const target = copy[catIdx].permissions[permIdx];
      target.roles[roleId] = !target.roles[roleId];
      return copy;
    });
  };

  const handleSave = () => {
    setSaveStatus('RBAC Security Policy updated successfully. Synchronized across API gateways.');
    setTimeout(() => setSaveStatus(null), 3500);
  };

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Roles & RBAC Access" 
      description="Role-based access control matrix, granular endpoint permission scoping, and security privilege levels."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Identity, Access & Security' },
        { label: 'Roles & RBAC Access' }
      ]}
    >
      <div className="space-y-6">
        {saveStatus && (
          <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <Check size={16} className="text-emerald-600" />
            <span>{saveStatus}</span>
          </div>
        )}

        {/* Roles Quick Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {roles.map(r => (
            <div 
              key={r.id}
              onClick={() => setActiveTab(r.id)}
              className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                activeTab === r.id 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                  activeTab === r.id ? 'bg-slate-800 text-slate-200' : 'bg-slate-100 text-slate-600'
                }`}>
                  {r.badge}
                </span>
                <span className={`text-[11px] font-mono ${activeTab === r.id ? 'text-slate-300' : 'text-slate-400'}`}>
                  {r.usersCount} users
                </span>
              </div>
              <h4 className="font-bold text-xs mt-2 truncate">{r.label}</h4>
            </div>
          ))}
        </div>

        {/* Permission Matrix Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-base font-bold text-slate-900">Enterprise RBAC Permission Matrix</h3>
              <p className="text-xs text-slate-500">Fine-grained capabilities mapped across functional corporate modules</p>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={handleSave}
                className="flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 transition-colors"
              >
                <Save size={14} />
                Deploy RBAC Matrix
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-4 w-2/5">Permission Capability</th>
                  {roles.map(r => (
                    <th key={r.id} className="py-3 px-3 text-center">
                      <span className={activeTab === r.id ? 'text-blue-600 font-black' : ''}>{r.label}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {modules.map((cat, catIdx) => (
                  <React.Fragment key={catIdx}>
                    <tr className="bg-slate-100/60 font-bold text-[11px] text-slate-700 uppercase tracking-wider">
                      <td colSpan={roles.length + 1} className="py-2 px-4 bg-slate-100/80">
                        {cat.category}
                      </td>
                    </tr>
                    {cat.permissions.map((perm, permIdx) => (
                      <tr key={perm.key} className="hover:bg-slate-50/60 transition-colors">
                        <td className="py-3 px-4">
                          <p className="font-bold text-slate-800">{perm.label}</p>
                          <p className="text-[11px] text-slate-500 mt-0.5">{perm.description}</p>
                          <span className="font-mono text-[9px] text-slate-400">id: {perm.key}</span>
                        </td>
                        {roles.map(r => {
                          const isEnabled = perm.roles[r.id];
                          return (
                            <td key={r.id} className="py-3 px-3 text-center">
                              <button 
                                onClick={() => handleTogglePermission(catIdx, permIdx, r.id)}
                                className={`w-7 h-7 rounded-lg inline-flex items-center justify-center transition-all ${
                                  isEnabled 
                                    ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' 
                                    : 'bg-slate-100 text-slate-300 hover:bg-slate-200'
                                }`}
                                title={`${isEnabled ? 'Revoke' : 'Grant'} ${perm.label} for ${r.label}`}
                              >
                                {isEnabled ? <Check size={14} strokeWidth={2.5} /> : <X size={14} />}
                              </button>
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Privileges enforced at REST & GraphQL middleware gateway</span>
            <span className="font-mono text-[11px]">SOC-2 TYPE II ACCESS CONTROL AUDIT: PASS</span>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
