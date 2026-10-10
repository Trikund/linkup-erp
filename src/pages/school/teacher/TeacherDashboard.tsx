import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { Button } from '../../../components/common/Button';
import { Users, ClipboardList, CheckCircle, Clock } from 'lucide-react';

export function TeacherDashboard() {
  const user = USERS.teacher;

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's your teaching overview for today."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard icon={Clock} label="Today's Classes" value="6" />
        <KPICard icon={Users} label="Total Students" value="184" />
        <KPICard icon={CheckCircle} label="Attendance Today" value="93%" />
        <KPICard icon={ClipboardList} label="Pending Assignments" value="12" alert />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Today's Classes</h2>
              <button className="text-sm font-medium text-linkup-blue hover:underline">View Timetable</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500">
                    <th className="pb-3 font-medium">Time</th>
                    <th className="pb-3 font-medium">Class</th>
                    <th className="pb-3 font-medium">Subject</th>
                    <th className="pb-3 font-medium">Room</th>
                    <th className="pb-3 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-medium text-slate-900">09:00 AM</td>
                    <td className="py-4">10-A</td>
                    <td className="py-4">Mathematics</td>
                    <td className="py-4">Room 204</td>
                    <td className="py-4">
                      <Button size="sm" variant="secondary">Take Attendance</Button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-4 font-medium text-slate-900">10:30 AM</td>
                    <td className="py-4">9-B</td>
                    <td className="py-4">Mathematics</td>
                    <td className="py-4">Room 205</td>
                    <td className="py-4">
                      <Button size="sm" variant="secondary">Take Attendance</Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-8">
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button fullWidth variant="secondary" className="justify-start">Mark Attendance</Button>
              <Button fullWidth variant="secondary" className="justify-start">Create Assignment</Button>
              <Button fullWidth variant="secondary" className="justify-start">Enter Results</Button>
              <Button fullWidth variant="secondary" className="justify-start">View Students</Button>
            </div>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4">Class Performance</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">10-A</span>
                  <span className="text-slate-900 font-bold">82%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-linkup-blue h-2 rounded-full" style={{ width: '82%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">10-B</span>
                  <span className="text-slate-900 font-bold">79%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-amber-400 h-2 rounded-full" style={{ width: '79%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700">9-A</span>
                  <span className="text-slate-900 font-bold">87%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
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
    <GlassCard className="p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${alert ? 'bg-amber-100 text-amber-600' : 'bg-linkup-blue/10 text-linkup-blue'}`}>
          <Icon size={20} />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
        <p className="text-sm font-medium text-slate-500">{label}</p>
      </div>
    </GlassCard>
  );
}
