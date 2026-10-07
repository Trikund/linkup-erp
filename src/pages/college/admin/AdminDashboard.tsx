import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { Users, GraduationCap, Building2, CreditCard } from 'lucide-react';

export function AdminDashboard() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator' };

  return (
    <CollegeLayout role="admin" user={user} title="Institution Dashboard" description="LinkUp University Management Overview">
      <div className="bg-blue-600 text-white rounded-xl p-3 text-center text-sm font-bold shadow-md shadow-blue-500/20 mb-6 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        Viewing Demo Institution Data
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Students" value="12,450" icon={Users} color="blue" trend="up" subtitle="+450 this year" />
        <StatCard title="Total Faculty" value="842" icon={GraduationCap} color="violet" />
        <StatCard title="Departments" value="14" icon={Building2} color="cyan" />
        <StatCard title="Pending Fees" value="₹2.4M" icon={CreditCard} color="amber" subtitle="Across 4 programs" trend="down" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Enrollment Distribution</h3>
          <div className="space-y-4">
            {[
              { dept: 'Computer Science & Engg', count: '3,200', pct: '85%' },
              { dept: 'Business Administration', count: '2,800', pct: '60%' },
              { dept: 'Mechanical Engineering', count: '1,500', pct: '45%' },
              { dept: 'Information Technology', count: '1,200', pct: '35%' }
            ].map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm font-bold text-slate-700 mb-1">
                  <span>{d.dept}</span>
                  <span>{d.count}</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-[#7c3aed] rounded-full" style={{ width: d.pct }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Recent Audit Logs</h3>
          <div className="space-y-3">
            {[
              { user: 'Admin User', action: 'Created new batch 2024-2028', time: '10 mins ago' },
              { user: 'Dr. A. Sharma', action: 'Published CSE Sem 6 Results', time: '1 hour ago' },
              { user: 'System', action: 'Automated attendance sync completed', time: '3 hours ago' }
            ].map((log, i) => (
              <div key={i} className="flex gap-4 p-3 border-b border-slate-50 last:border-0">
                <div className="w-2 h-2 rounded-full bg-slate-300 mt-1.5 flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-medium text-slate-800">{log.action}</p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">{log.user} • {log.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}