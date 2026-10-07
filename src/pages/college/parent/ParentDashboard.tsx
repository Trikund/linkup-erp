import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { ChildSwitcher } from '../../../components/college/layout/ChildSwitcher';
import { StatCard } from '../../../components/college/common/StatCard';
import { mockStudents } from '../../../data/college/mockData';
import { CheckCircle2, TrendingUp, AlertTriangle } from 'lucide-react';

export function ParentDashboard() {
  const user = { name: 'Rajesh Kumar', roleLabel: 'Parent Portal' };
  
  // Using a subset of mock students to simulate children
  const myChildren = [mockStudents[0], mockStudents[2]];
  const [activeChildId, setActiveChildId] = useState(myChildren[0].id);
  
  const activeChild = myChildren.find(c => c.id === activeChildId) || myChildren[0];

  return (
    <CollegeLayout role="parent" user={user} title="Parent Dashboard" description="Monitor academic progress and attendance.">
      
      <ChildSwitcher 
        childrenList={myChildren} 
        activeChildId={activeChildId} 
        onSwitch={setActiveChildId} 
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Current CGPA" value={activeChild.cgpa} icon={TrendingUp} color="violet" trend="up" subtitle="Excellent Performance" />
        <StatCard title="Overall Attendance" value={`${activeChild.attendance}%`} icon={CheckCircle2} color={activeChild.attendance > 85 ? 'green' : 'amber'} subtitle="Updated Today" />
        <StatCard title="Fee Status" value="Paid" icon={CheckCircle2} color="green" subtitle="No pending dues" />
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 mb-8">
        <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" size={20} /> Faculty Remarks
        </h3>
        <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl">
          <p className="text-sm text-slate-700 italic">"{activeChild.name} is performing exceptionally well in laboratory sessions, but needs to focus more on theoretical assessments. Consistent participation is appreciated."</p>
          <p className="text-xs font-bold text-slate-500 mt-3">— Dr. Ankit Sharma, Computer Science Dept</p>
        </div>
      </div>
    </CollegeLayout>
  );
}