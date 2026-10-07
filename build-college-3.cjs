const fs = require('fs');
const path = require('path');

const files = {
  'src/pages/college/faculty/FacultyDashboard.tsx': `
import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { Users, BookOpen, Clock, AlertCircle } from 'lucide-react';

export function FacultyDashboard() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor • CSE Dept' };

  return (
    <CollegeLayout role="faculty" user={user} title="Faculty Dashboard" description="Overview of your classes, students, and schedule.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Assigned Subjects" value="2" icon={BookOpen} color="violet" />
        <StatCard title="Total Students" value="124" icon={Users} color="blue" />
        <StatCard title="Today's Classes" value="3" icon={Clock} color="cyan" />
        <StatCard title="Pending Evaluations" value="45" icon={AlertCircle} color="amber" subtitle="Mid-Sem Papers" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-slate-800">Advanced Database Management</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Sem 7 • Section A</p>
                </div>
                <span className="px-2 py-1 text-[10px] font-bold bg-[#7c3aed]/10 text-[#7c3aed] rounded-md">Lecture</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600 mt-4">
                <span className="flex items-center gap-1.5"><Clock size={16}/> 10:00 AM - 11:00 AM</span>
                <span className="flex items-center gap-1.5"><Users size={16}/> Room 302</span>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-slate-800">Machine Learning</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Sem 7 • Section B</p>
                </div>
                <span className="px-2 py-1 text-[10px] font-bold bg-[#7c3aed]/10 text-[#7c3aed] rounded-md">Lab</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600 mt-4">
                <span className="flex items-center gap-1.5"><Clock size={16}/> 02:00 PM - 04:00 PM</span>
                <span className="flex items-center gap-1.5"><Users size={16}/> ML Lab 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 text-red-600">Low Attendance Alerts</h3>
          <p className="text-sm text-slate-500 mb-4">Students below 75% attendance in your subjects.</p>
          <div className="space-y-3">
            {[
              { name: 'Rahul Verma', id: 'CSE045', sub: 'Machine Learning', att: '68%' },
              { name: 'Neha Singh', id: 'CSE102', sub: 'Advanced DBMS', att: '71%' },
              { name: 'Amit Patel', id: 'CSE088', sub: 'Machine Learning', att: '64%' }
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">{s.name.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{s.name}</p>
                    <p className="text-[10px] font-medium text-slate-500">{s.id} • {s.sub}</p>
                  </div>
                </div>
                <span className="text-sm font-black text-red-600">{s.att}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
  `,

  'src/pages/college/parent/ParentDashboard.tsx': `
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
        <StatCard title="Overall Attendance" value={\`\${activeChild.attendance}%\`} icon={CheckCircle2} color={activeChild.attendance > 85 ? 'green' : 'amber'} subtitle="Updated Today" />
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
  `,

  'src/pages/college/admin/AdminDashboard.tsx': `
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
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('College Faculty, Parent, and Admin files created successfully!');
