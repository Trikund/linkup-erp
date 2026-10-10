import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS, MOCK_CHILDREN } from '../../../data/mockData';
import { GlassCard } from '../../../components/common/GlassCard';
import { CalendarCheck, ClipboardList, FileCheck, WalletCards, ArrowRight, TrendingUp } from 'lucide-react';
import { cn } from '../../../lib/utils';

export function ParentDashboard() {
  const user = USERS.parent;
  const [activeChildId, setActiveChildId] = useState(MOCK_CHILDREN[0].id);

  const activeChild = MOCK_CHILDREN.find(c => c.id === activeChildId) || MOCK_CHILDREN[0];

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Here's how your child is doing this week."
    >
      {/* Child Switcher */}
      <div className="mb-8">
        <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">My Children</h3>
        <div className="flex flex-wrap gap-4">
          {MOCK_CHILDREN.map((child) => (
            <button
              key={child.id}
              onClick={() => setActiveChildId(child.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl transition-all duration-200 border text-left",
                activeChildId === child.id 
                  ? "bg-white border-linkup-blue shadow-md ring-1 ring-linkup-blue/20" 
                  : "bg-white/50 border-slate-200 hover:bg-white hover:border-slate-300"
              )}
            >
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600">
                {child.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-slate-900">{child.name}</p>
                <p className="text-sm text-slate-500">Class {child.class} • Attendance {child.attendance}%</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard icon={CalendarCheck} label="Attendance" value={`${activeChild.attendance}%`} />
        <KPICard icon={TrendingUp} label="Academic Performance" value={`${activeChild.performance}%`} />
        <KPICard icon={ClipboardList} label="Assignments" value="8/10" />
        <KPICard icon={WalletCards} label="Fees" value="Paid" success />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <GlassCard className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Teacher Remarks</h2>
            <button className="text-sm font-medium text-linkup-blue hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-slate-100 bg-white/50">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs font-semibold px-2 py-1 bg-linkup-blue/10 text-linkup-blue rounded-md">Mathematics</span>
                <span className="text-xs text-slate-500">12 Oct</span>
              </div>
              <p className="text-slate-700 text-sm mb-3">"{activeChild.name} is performing well in Mathematics and has shown improvement in problem solving."</p>
              <p className="text-xs font-medium text-slate-500">- Ananya Sharma</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-slate-900">Upcoming Events</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg border border-slate-100 bg-white/50 hover:bg-white/80 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-linkup-blue/10 flex flex-col items-center justify-center text-linkup-blue">
                <span className="text-xs font-bold uppercase">Oct</span>
                <span className="text-lg font-bold leading-none">20</span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Parent-Teacher Meeting</h4>
                <p className="text-sm text-slate-500">10:00 AM • Main Hall</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </SchoolLayout>
  );
}

function KPICard({ icon: Icon, label, value, success }: any) {
  return (
    <GlassCard className="p-5 flex flex-col group hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-2 rounded-lg ${success ? 'bg-green-100 text-green-600' : 'bg-linkup-blue/10 text-linkup-blue'}`}>
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
