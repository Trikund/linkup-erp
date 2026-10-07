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