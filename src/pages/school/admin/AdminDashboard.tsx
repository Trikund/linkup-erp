import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_ADMIN_STATS } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { Button } from '../../../components/common/Button';
import { Users, GraduationCap, BookOpen, CalendarCheck, WalletCards, Building } from 'lucide-react';

export function AdminDashboard() {
  const user = USERS.admin;

  return (
    <SchoolLayout 
      role="admin" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's your school overview."
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
        <KPICard icon={GraduationCap} label="Students" value={MOCK_ADMIN_STATS.students} />
        <KPICard icon={BookOpen} label="Teachers" value={MOCK_ADMIN_STATS.teachers} />
        <KPICard icon={Users} label="Parents" value={MOCK_ADMIN_STATS.parents} />
        <KPICard icon={CalendarCheck} label="Attendance" value={`${MOCK_ADMIN_STATS.attendance}%`} />
        <KPICard icon={Building} label="Active Classes" value={MOCK_ADMIN_STATS.classes} />
        <KPICard icon={WalletCards} label="Pending Fees" value={`₹${MOCK_ADMIN_STATS.pendingFees}`} alert />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Student Enrollment</h2>
              <select className="text-sm border-slate-200 rounded-md bg-white">
                <option>This Year</option>
              </select>
            </div>
            {/* Mock Chart Area */}
            <div className="h-64 bg-slate-50 rounded-xl border border-slate-100 flex items-end justify-between p-6 gap-2">
              {[240, 260, 280, 300, 320].map((val, idx) => (
                <div key={idx} className="w-full flex flex-col items-center gap-2 group">
                  <div className="w-full bg-linkup-blue/20 rounded-t-sm relative group-hover:bg-linkup-blue/40 transition-colors" style={{ height: `${(val/350)*100}%` }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-slate-800 text-white text-xs px-2 py-1 rounded transition-opacity">
                      {val}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-slate-500">Class {idx + 6}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Recent Students</h2>
              <button className="text-sm font-medium text-linkup-blue hover:underline">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 font-medium">Student</th>
                    <th className="pb-3 font-medium">Class</th>
                    <th className="pb-3 font-medium">Attendance</th>
                    <th className="pb-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-medium text-slate-900">Rahul Sharma</td>
                    <td className="py-4">10-A</td>
                    <td className="py-4">92%</td>
                    <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">Active</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-medium text-slate-900">Ananya Sharma</td>
                    <td className="py-4">7-B</td>
                    <td className="py-4">96%</td>
                    <td className="py-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-md">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <Button variant="secondary" className="justify-center text-xs px-2">Add Student</Button>
              <Button variant="secondary" className="justify-center text-xs px-2">Add Teacher</Button>
              <Button variant="secondary" className="justify-center text-xs px-2">Create Class</Button>
              <Button variant="secondary" className="justify-center text-xs px-2">Announcement</Button>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Fee Collection</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Collected</span>
                  <span className="text-slate-900 font-bold">₹42.5L</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">Pending</span>
                  <span className="text-slate-900 font-bold">₹8.4L</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SchoolLayout>
  );
}

function KPICard({ icon: Icon, label, value, alert }: any) {
  return (
    <GlassCard className="p-4 flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-3 ${alert ? 'bg-amber-100 text-amber-600' : 'bg-linkup-blue/10 text-linkup-blue'}`}>
        <Icon size={16} />
      </div>
      <div>
        <h3 className="text-xl font-bold text-slate-900">{value}</h3>
        <p className="text-xs font-medium text-slate-500 truncate">{label}</p>
      </div>
    </GlassCard>
  );
}
