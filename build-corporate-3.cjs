const fs = require('fs');
const path = require('path');

const files = {
  'src/pages/corporate/manager/ManagerDashboard.tsx': `
import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { Users, AlertCircle, Briefcase, Calendar } from 'lucide-react';
import { DataTable } from '../../../components/corporate/common/DataTable';
import { mockEmployees } from '../../../data/corporate/mockData';

export function ManagerDashboard() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager' };
  const teamMembers = mockEmployees.filter(e => e.manager === user.name);

  return (
    <CorporateLayout role="manager" user={user} title="Manager Dashboard" description="Overview of your team's performance and activities.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard title="Team Members" value={teamMembers.length} icon={Users} color="blue" />
        <KpiCard title="Present Today" value={teamMembers.length - 1} icon={CheckCircle2} color="green" />
        <KpiCard title="Leave Requests" value="2" icon={Calendar} color="amber" subtitle="Action Required" />
        <KpiCard title="Active Projects" value="4" icon={Briefcase} color="navy" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
          <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Calendar className="text-amber-500" size={18} /> Pending Leave Approvals
          </h3>
          <div className="space-y-3">
            {[
              { name: 'Rahul Sharma', type: 'Annual Leave', duration: 'Oct 20 - Oct 22', days: 3 },
              { name: 'Vikram Singh', type: 'Sick Leave', duration: 'Oct 08', days: 1 }
            ].map((req, i) => (
              <div key={i} className="p-3 border border-slate-100 rounded-lg flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{req.name}</p>
                  <p className="text-xs text-slate-500">{req.type} • {req.duration} ({req.days} days)</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 text-xs font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded">Reject</button>
                  <button className="px-2 py-1 text-xs font-semibold text-green-600 bg-green-50 hover:bg-green-100 rounded">Approve</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100">
             <h3 className="text-base font-bold text-slate-800">My Team</h3>
          </div>
          <DataTable columns={['Name', 'Designation', 'Status']} searchPlaceholder="Search team...">
            {teamMembers.map((e, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 text-sm font-semibold text-slate-800">{e.name}</td>
                <td className="px-5 py-3 text-sm text-slate-600">{e.designation}</td>
                <td className="px-5 py-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border bg-green-50 text-green-700 border-green-200">
                    Active
                  </span>
                </td>
              </tr>
            ))}
          </DataTable>
        </div>
      </div>
    </CorporateLayout>
  );
}
// Needed imports
import { CheckCircle2 } from 'lucide-react';
  `,

  'src/pages/corporate/hr/HrDashboard.tsx': `
import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { Users, HeartHandshake, Briefcase, FileText } from 'lucide-react';
import { DataTable } from '../../../components/corporate/common/DataTable';
import { mockEmployees } from '../../../data/corporate/mockData';

export function HrDashboard() {
  const user = { name: 'Anita Desai', roleLabel: 'HR Business Partner' };

  return (
    <CorporateLayout role="hr" user={user} title="HR Dashboard" description="Workforce management and recruitment overview.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard title="Total Employees" value={mockEmployees.length + 145} icon={Users} color="navy" />
        <KpiCard title="Open Positions" value="8" icon={Briefcase} color="blue" />
        <KpiCard title="New Joiners" value="3" icon={HeartHandshake} color="cyan" subtitle="This month" />
        <KpiCard title="Pending Approvals" value="12" icon={FileText} color="amber" subtitle="Payroll & Leave" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 border-b border-slate-100 flex justify-between items-center">
            <h3 className="text-base font-bold text-slate-800">Recent Employee Records</h3>
            <button className="text-xs font-semibold text-linkup-navy hover:underline">View All Directory</button>
          </div>
          <DataTable columns={['Employee', 'Department', 'Manager', 'Status']}>
            {mockEmployees.map((e, i) => (
              <tr key={i} className="hover:bg-slate-50 transition-colors">
                <td className="px-5 py-3 text-sm font-semibold text-slate-800">{e.name}</td>
                <td className="px-5 py-3 text-sm text-slate-600">{e.department}</td>
                <td className="px-5 py-3 text-sm text-slate-600">{e.manager}</td>
                <td className="px-5 py-3">
                  <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded border bg-green-50 text-green-700 border-green-200">
                    {e.status}
                  </span>
                </td>
              </tr>
            ))}
          </DataTable>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4">Recruitment Pipeline</h3>
            <div className="space-y-4">
              {[
                { title: 'Senior React Developer', stage: 'Interviews', count: 4 },
                { title: 'Product Manager', stage: 'Screening', count: 12 },
                { title: 'UX Designer', stage: 'Offers', count: 1 }
              ].map((job, i) => (
                <div key={i} className="flex justify-between items-center pb-3 border-b border-slate-50 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{job.title}</p>
                    <p className="text-xs text-slate-500">{job.stage}</p>
                  </div>
                  <span className="w-6 h-6 flex items-center justify-center bg-blue-50 text-blue-700 font-bold text-xs rounded-full">
                    {job.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
  `,

  'src/pages/corporate/admin/AdminDashboard.tsx': `
import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { Users, Briefcase, Building, CreditCard } from 'lucide-react';

export function AdminDashboard() {
  const user = { name: 'System Admin', roleLabel: 'Platform Administrator' };

  return (
    <CorporateLayout role="admin" user={user} title="Admin Dashboard" description="Organization-level configuration and monitoring.">
      <div className="bg-linkup-navy text-white rounded-lg p-3 text-center text-sm font-bold shadow-md shadow-linkup-navy/20 mb-6 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        Organization: LinkUp Technologies (Demo)
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard title="Total Workforce" value="1,450" icon={Users} color="navy" />
        <KpiCard title="Departments" value="8" icon={Building} color="blue" />
        <KpiCard title="Active Projects" value="42" icon={Briefcase} color="cyan" />
        <KpiCard title="Payroll Status" value="Pending" icon={CreditCard} color="amber" subtitle="Oct 2026 Cycle" />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-800 mb-4">Department Distribution</h3>
          <div className="space-y-4">
            {[
              { dept: 'Engineering', count: '450', pct: '40%' },
              { dept: 'Sales & Marketing', count: '300', pct: '25%' },
              { dept: 'Operations', count: '200', pct: '20%' },
              { dept: 'HR & Finance', count: '100', pct: '15%' }
            ].map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1.5">
                  <span>{d.dept}</span>
                  <span>{d.count} employees</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-linkup-blue rounded-full" style={{ width: d.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-800 mb-4">System Audit Logs</h3>
          <div className="space-y-4">
            {[
              { user: 'Anita Desai (HR)', action: 'Published Remote Work Policy', time: '10 mins ago', status: 'Success' },
              { user: 'Priya Mehta (Manager)', action: 'Approved Leave for Rahul Sharma', time: '1 hour ago', status: 'Success' },
              { user: 'System', action: 'Payroll pre-calculation completed', time: '3 hours ago', status: 'Success' }
            ].map((log, i) => (
              <div key={i} className="flex gap-4 p-3 border border-slate-100 rounded-lg bg-slate-50">
                <div>
                  <p className="text-sm font-semibold text-slate-800">{log.action}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{log.user} • {log.time}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-4 py-2 text-sm font-medium text-linkup-navy hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
            View All Audit Logs
          </button>
        </div>
      </div>
    </CorporateLayout>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Manager, HR, and Admin Dashboard files created successfully!');
