import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_ATTENDANCE } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { Calendar, AlertTriangle } from 'lucide-react';

export function ParentAttendance() {
  const user = USERS.parent;

  return (
    <SchoolLayout role="parent" user={user} title="Attendance Report" description="Track your child's attendance and presence trends.">
      <div className="grid lg:grid-cols-3 gap-8">
        
        <div className="space-y-8">
          <GlassCard className="p-8 text-center flex flex-col items-center">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Overall Attendance</h2>
            <div className="relative w-40 h-40 flex items-center justify-center rounded-full border-[10px] border-linkup-blue/10 mb-4">
              <div className="absolute inset-0 rounded-full border-[10px] border-linkup-blue border-r-transparent border-b-transparent -rotate-45" />
              <div className="text-center">
                <span className="text-4xl font-bold text-slate-900">{MOCK_ATTENDANCE.overall}%</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 font-medium">Rahul is maintaining good attendance.</p>
          </GlassCard>

          <GlassCard className="p-6 bg-amber-50/50 border-amber-100">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-600 mt-1">
                <AlertTriangle size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-amber-900">Attendance Alert</h3>
                <p className="text-sm text-amber-700 mt-1">English attendance has dropped below 90% this month. Please monitor this subject.</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-6">Subject Breakdown</h2>
            <div className="space-y-6">
              {MOCK_ATTENDANCE.subjects.map((sub, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium text-slate-700">{sub.name}</span>
                    <span className="text-slate-900 font-bold">{sub.value}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${sub.value < 90 ? 'bg-amber-400' : 'bg-linkup-blue'}`} 
                      style={{ width: `${sub.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-slate-900">Recent Absences</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-white/50">
                <div className="p-3 rounded-lg bg-slate-100 text-slate-500">
                  <Calendar size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900">Full Day Absence</h4>
                  <p className="text-sm text-slate-500 mt-1">12 Oct 2026 • Medical Leave</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </SchoolLayout>
  );
}
