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