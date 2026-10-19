import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Users, Search, Filter, Download, Plus, ShieldCheck, 
  Key, RefreshCw, MoreVertical, CheckCircle2, AlertTriangle, 
  Lock, Laptop, Building2, Mail, ExternalLink, X, Check
} from 'lucide-react';

interface EmployeeProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  costCenter: string;
  entity: string;
  location: string;
  status: 'Active' | 'Suspended' | 'Provisioning';
  mfaEnforced: boolean;
  ssoId: string;
  deviceEnrolled: boolean;
  joinDate: string;
}

export function AdminEmployees() {
  const user = { name: 'Rajesh Varma', roleLabel: 'Super Administrator & CISO • Platform Governance' };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntity, setSelectedEntity] = useState('All');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [selectedEmployee, setSelectedEmployee] = useState<EmployeeProfile | null>(null);
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  const [employees, setEmployees] = useState<EmployeeProfile[]>([
    {
      id: 'EMP-0001',
      name: 'Rajesh Varma',
      email: 'rajesh.varma@linkupcorp.internal',
      role: 'Super Administrator & CISO',
      department: 'Platform Governance',
      costCenter: 'CC-105',
      entity: 'India Pvt Ltd',
      location: 'Bengaluru HQ',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-8812',
      deviceEnrolled: true,
      joinDate: 'Oct 2020'
    },
    {
      id: 'EMP-0102',
      name: 'Priya Mehta',
      email: 'priya.mehta@linkupcorp.internal',
      role: 'Engineering Manager (Pod 4)',
      department: 'Engineering',
      costCenter: 'CC-101',
      entity: 'India Pvt Ltd',
      location: 'Bengaluru HQ',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9102',
      deviceEnrolled: true,
      joinDate: 'Feb 2021'
    },
    {
      id: 'EMP-0104',
      name: 'Anita Desai',
      email: 'anita.desai@linkupcorp.internal',
      role: 'Lead HR Business Partner',
      department: 'Human Resources',
      costCenter: 'CC-104',
      entity: 'India Pvt Ltd',
      location: 'Bengaluru HQ',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9104',
      deviceEnrolled: true,
      joinDate: 'Jan 2022'
    },
    {
      id: 'EMP-0428',
      name: 'Rahul Sharma',
      email: 'rahul.sharma@linkupcorp.internal',
      role: 'Senior Frontend Developer',
      department: 'Engineering',
      costCenter: 'CC-101',
      entity: 'India Pvt Ltd',
      location: 'Bengaluru HQ',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9428',
      deviceEnrolled: true,
      joinDate: 'Aug 2023'
    },
    {
      id: 'EMP-0441',
      name: 'Vikram Malhotra',
      email: 'vikram.m@linkupcorp.internal',
      role: 'Senior Backend Engineer',
      department: 'Engineering',
      costCenter: 'CC-101',
      entity: 'India Pvt Ltd',
      location: 'Gurugram',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9441',
      deviceEnrolled: true,
      joinDate: 'Nov 2022'
    },
    {
      id: 'EMP-0512',
      name: 'Sneha Roy',
      email: 'sneha.roy@linkupcorp.internal',
      role: 'Senior Product Designer',
      department: 'Product Design',
      costCenter: 'CC-101',
      entity: 'India Pvt Ltd',
      location: 'Bengaluru HQ',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9512',
      deviceEnrolled: true,
      joinDate: 'May 2024'
    },
    {
      id: 'EMP-0881',
      name: 'David Chen',
      email: 'david.chen@linkupcorp.us',
      role: 'VP Global Architecture',
      department: 'Engineering',
      costCenter: 'CC-101',
      entity: 'US Inc',
      location: 'Sunnyvale, CA',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'azure-usr-1092',
      deviceEnrolled: true,
      joinDate: 'Apr 2021'
    },
    {
      id: 'EMP-0920',
      name: 'Clara Oswald',
      email: 'clara.oswald@linkupcorp.co.uk',
      role: 'Enterprise Accounts Director',
      department: 'Sales & Marketing',
      costCenter: 'CC-102',
      entity: 'UK Ltd',
      location: 'London',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'azure-usr-1188',
      deviceEnrolled: true,
      joinDate: 'Sep 2022'
    },
    {
      id: 'EMP-0945',
      name: 'Tan Wei Ming',
      email: 'weiming.tan@linkupcorp.sg',
      role: 'Regional Head APAC Operations',
      department: 'Operations',
      costCenter: 'CC-103',
      entity: 'APAC Pte Ltd',
      location: 'Singapore',
      status: 'Active',
      mfaEnforced: true,
      ssoId: 'okta-usr-9945',
      deviceEnrolled: true,
      joinDate: 'Jan 2023'
    },
    {
      id: 'EMP-1102',
      name: 'Marcus Vance',
      email: 'marcus.v@linkupcorp.us',
      role: 'Senior Cloud SRE',
      department: 'Engineering',
      costCenter: 'CC-101',
      entity: 'US Inc',
      location: 'Seattle Remote',
      status: 'Provisioning',
      mfaEnforced: false,
      ssoId: 'azure-usr-pending',
      deviceEnrolled: false,
      joinDate: 'Oct 2026'
    }
  ]);

  const handleResetMfa = (empId: string) => {
    setActionNotice(`MFA challenge reset token generated for ${empId}. Sent to employee corporate email.`);
    setTimeout(() => setActionNotice(null), 4000);
  };

  const handleToggleStatus = (empId: string) => {
    setEmployees(prev => prev.map(e => {
      if (e.id === empId) {
        const nextStatus = e.status === 'Active' ? 'Suspended' : 'Active';
        setActionNotice(`Employee ${e.name} (${e.id}) access status changed to ${nextStatus}.`);
        setTimeout(() => setActionNotice(null), 4000);
        return { ...e, status: nextStatus };
      }
      return e;
    }));
  };

  const filteredEmployees = employees.filter(e => {
    const matchesSearch = e.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          e.role.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesEntity = selectedEntity === 'All' || e.entity === selectedEntity;
    const matchesDept = selectedDept === 'All' || e.department === selectedDept;
    const matchesStatus = selectedStatus === 'All' || e.status === selectedStatus;
    return matchesSearch && matchesEntity && matchesDept && matchesStatus;
  });

  return (
    <CorporateLayout 
      role="admin" 
      user={user} 
      title="Workforce Master" 
      description="Enterprise workforce directory, Okta/Azure SSO accounts, hardware MDM enrollments, and access suspension."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Platform Overview & Organization' },
        { label: 'Workforce Master' }
      ]}
    >
      <div className="space-y-6">
        {actionNotice && (
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-xl text-xs text-blue-900 flex items-center justify-between font-semibold animate-fadeIn">
            <span>{actionNotice}</span>
            <button onClick={() => setActionNotice(null)}><X size={14} /></button>
          </div>
        )}

        {/* Top Summary Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Total Headcount</p>
            <p className="text-2xl font-black text-slate-900 mt-1">1,450</p>
            <p className="text-[11px] text-blue-600 font-medium mt-0.5">Across 4 Legal Entities</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">MFA Enforced</p>
            <p className="text-2xl font-black text-emerald-600 mt-1">99.8%</p>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">FIDO2 & Hardware Passkeys</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">MDM Jamf Enrolled</p>
            <p className="text-2xl font-black text-indigo-600 mt-1">1,448</p>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">2 New Joiners in Transit</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs">
            <p className="text-xs font-semibold text-slate-500 uppercase">Provisioning Queue</p>
            <p className="text-2xl font-black text-amber-600 mt-1">14</p>
            <p className="text-[11px] text-slate-500 font-medium mt-0.5">Starting Next Monday</p>
          </div>
        </div>

        {/* Filter and Action Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between">
          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto flex-1">
            <div className="relative flex-1 min-w-[220px]">
              <Search size={16} className="text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text" 
                placeholder="Search by name, ID, email or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:bg-white focus:border-blue-600 outline-none"
              />
            </div>

            <select 
              value={selectedEntity}
              onChange={(e) => setSelectedEntity(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Legal Entities</option>
              <option value="India Pvt Ltd">India Pvt Ltd</option>
              <option value="US Inc">US Inc</option>
              <option value="UK Ltd">UK Ltd</option>
              <option value="APAC Pte Ltd">APAC Pte Ltd</option>
            </select>

            <select 
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product Design">Product Design</option>
              <option value="Sales & Marketing">Sales & Marketing</option>
              <option value="Human Resources">Human Resources</option>
              <option value="Operations">Operations</option>
              <option value="Platform Governance">Platform Governance</option>
            </select>

            <select 
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium outline-none"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Suspended">Suspended</option>
              <option value="Provisioning">Provisioning</option>
            </select>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto justify-end">
            <button 
              onClick={() => {
                setActionNotice("Exporting complete 1,450 employee CSV master formatted for SOC-2 audit...");
                setTimeout(() => setActionNotice(null), 3000);
              }}
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold border border-slate-200 transition-colors"
            >
              <Download size={14} />
              Export SOC-2 CSV
            </button>
            <button 
              onClick={() => {
                setActionNotice("Opening SCIM automated provisioning wizard. Syncing with Okta / Entra ID.");
                setTimeout(() => setActionNotice(null), 3000);
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold shadow-md shadow-blue-600/20 transition-colors"
            >
              <Plus size={14} />
              Add User
            </button>
          </div>
        </div>

        {/* Master Table */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-4">Employee</th>
                  <th className="py-3 px-4">Department & Role</th>
                  <th className="py-3 px-4">Entity & Hub</th>
                  <th className="py-3 px-4">Identity & MFA</th>
                  <th className="py-3 px-4">MDM Device</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs">
                {filteredEmployees.map((emp) => (
                  <tr key={emp.id} className="hover:bg-slate-50/70 transition-colors group">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                          {emp.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{emp.name}</p>
                          <p className="text-[10px] text-slate-400 font-mono">{emp.id} • {emp.email}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <p className="font-semibold text-slate-800">{emp.role}</p>
                      <p className="text-[11px] text-slate-500">{emp.department} <span className="font-mono text-[10px] text-slate-400">({emp.costCenter})</span></p>
                    </td>

                    <td className="py-3 px-4">
                      <p className="font-semibold text-slate-800">{emp.entity}</p>
                      <p className="text-[11px] text-slate-500">{emp.location}</p>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        {emp.mfaEnforced ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                            <ShieldCheck size={11} /> FIDO2 OK
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                            <AlertTriangle size={11} /> Missing
                          </span>
                        )}
                        <span className="text-[10px] font-mono text-slate-400">{emp.ssoId}</span>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      {emp.deviceEnrolled ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-700">
                          <Laptop size={12} className="text-blue-600" /> Jamf Encrypted
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">Pending Setup</span>
                      )}
                    </td>

                    <td className="py-3 px-4">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                        emp.status === 'Active' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : emp.status === 'Suspended' 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {emp.status}
                      </span>
                    </td>

                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-1.5">
                        <button 
                          onClick={() => handleResetMfa(emp.id)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          title="Reset MFA Challenge"
                        >
                          <Key size={14} />
                        </button>
                        <button 
                          onClick={() => handleToggleStatus(emp.id)}
                          className={`px-2 py-1 rounded text-[10px] font-bold transition-colors ${
                            emp.status === 'Active'
                              ? 'text-rose-600 hover:bg-rose-50 border border-rose-200'
                              : 'text-emerald-600 hover:bg-emerald-50 border border-emerald-200'
                          }`}
                        >
                          {emp.status === 'Active' ? 'Suspend' : 'Activate'}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
            <span>Showing <strong>{filteredEmployees.length}</strong> of <strong>1,450</strong> total platform users</span>
            <span className="font-mono text-[11px]">SCIM DIRECTORY SYNC: ACTIVE (OKTA & ENTRA ID)</span>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
