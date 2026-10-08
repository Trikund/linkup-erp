import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { Users, AlertCircle, Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
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

