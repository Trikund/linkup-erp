import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { DataTable } from '../../../components/corporate/common/DataTable';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { CheckCircle2, Clock, AlertTriangle, CalendarDays } from 'lucide-react';

export function EmployeeAttendance() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Frontend Developer' };

  return (
    <CorporateLayout role="employee" user={user} title="My Attendance" description="Track your work hours and attendance history.">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard title="Avg. Work Hours" value="8h 15m" icon={Clock} color="navy" />
        <KpiCard title="This Month" value="94%" icon={CheckCircle2} color="green" subtitle="Present: 18 days" />
        <KpiCard title="Late Arrivals" value="1" icon={AlertTriangle} color="amber" subtitle="Oct 04" />
        <KpiCard title="WFH Days" value="3" icon={CalendarDays} color="blue" subtitle="Used this month" />
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6 mb-6">
        <h3 className="text-base font-bold text-slate-800 mb-4">October 2026</h3>
        
        <DataTable columns={['Date', 'Check In', 'Check Out', 'Hours', 'Status']}>
          {[
            { date: 'Oct 07, Wed', in: '09:18 AM', out: '--', hrs: '5h 42m', status: 'Present' },
            { date: 'Oct 06, Tue', in: '09:05 AM', out: '06:15 PM', hrs: '8h 10m', status: 'Present' },
            { date: 'Oct 05, Mon', in: '09:00 AM', out: '05:30 PM', hrs: '8h 30m', status: 'WFH' },
            { date: 'Oct 04, Fri', in: '09:45 AM', out: '06:30 PM', hrs: '7h 45m', status: 'Late' },
            { date: 'Oct 03, Thu', in: '--', out: '--', hrs: '--', status: 'Absent' }
          ].map((r, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="px-5 py-3 text-sm font-semibold text-slate-700">{r.date}</td>
              <td className="px-5 py-3 text-sm text-slate-600">{r.in}</td>
              <td className="px-5 py-3 text-sm text-slate-600">{r.out}</td>
              <td className="px-5 py-3 text-sm font-medium text-slate-700">{r.hrs}</td>
              <td className="px-5 py-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${
                  r.status === 'Present' ? 'bg-green-50 text-green-700 border-green-200' :
                  r.status === 'WFH' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  r.status === 'Late' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>
    </CorporateLayout>
  );
}