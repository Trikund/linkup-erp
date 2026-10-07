const fs = require('fs');
const path = require('path');

const files = {
  'src/components/college/common/StatCard.tsx': `
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'blue' | 'violet' | 'cyan' | 'red' | 'green' | 'amber';
}

export function StatCard({ title, value, icon: Icon, subtitle, trend, color = 'blue' }: StatCardProps) {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    violet: 'bg-violet-50 text-violet-600 border-violet-100',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500 mb-1">{title}</p>
          <h3 className="text-2xl font-black text-slate-800">{value}</h3>
          {subtitle && (
            <p className={cn("text-xs font-medium mt-1", trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-400')}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn("p-3 rounded-xl border", colorMap[color])}>
          <Icon size={20} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
  `,

  'src/components/college/common/DataTable.tsx': `
import React from 'react';
import { Search } from 'lucide-react';

interface DataTableProps {
  columns: string[];
  children: React.ReactNode;
  searchPlaceholder?: string;
}

export function DataTable({ columns, children, searchPlaceholder = "Search records..." }: DataTableProps) {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:border-[#7c3aed] focus:ring-2 focus:ring-[#7c3aed]/20 outline-none transition-all"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-100">
              {columns.map((col, i) => (
                <th key={i} className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {children}
          </tbody>
        </table>
      </div>
    </div>
  );
}
  `,

  'src/pages/college/student/StudentDashboard.tsx': `
import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { CheckCircle2, TrendingUp, BookOpen, Clock, AlertCircle, CreditCard } from 'lucide-react';

export function StudentDashboard() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="Dashboard" description="Welcome back to LinkUp University.">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-800">Good morning, {user.name.split(' ')[0]} 👋</h2>
        <p className="text-slate-500 font-medium mt-1">Here's your academic overview for Semester 7.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Overall Attendance" value="86%" icon={CheckCircle2} subtitle="Looking good!" trend="neutral" color="green" />
        <StatCard title="Current CGPA" value="8.42" icon={TrendingUp} subtitle="Top 15% of Batch" trend="up" color="violet" />
        <StatCard title="Pending Assignments" value="4" icon={BookOpen} subtitle="2 due this week" trend="down" color="amber" />
        <StatCard title="Fee Status" value="Pending" icon={CreditCard} subtitle="Due in 15 days" trend="down" color="red" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Timetable */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="text-[#7c3aed]" size={20} /> Today's Schedule
            </h3>
            <div className="space-y-4">
              {[
                { time: '09:00 AM - 10:00 AM', subject: 'Machine Learning', room: 'Room 302', type: 'Lecture' },
                { time: '10:00 AM - 11:30 AM', subject: 'Cloud Computing', room: 'Lab 4', type: 'Practical' },
                { time: '12:00 PM - 01:00 PM', subject: 'Advanced Database', room: 'Room 305', type: 'Lecture' }
              ].map((s, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-32 flex-shrink-0 text-sm font-bold text-[#7c3aed]">{s.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{s.subject}</p>
                    <p className="text-xs font-medium text-slate-500">{s.room} • {s.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-[#7c3aed] text-white rounded-2xl shadow-lg shadow-[#7c3aed]/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Submit Assignment</button>
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Check Exam Schedule</button>
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Pay Semester Fees</button>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertCircle className="text-blue-500" size={20} /> Latest Announcements
            </h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <p className="text-xs font-bold text-blue-600 mb-1">PLACEMENT CELL</p>
                <p className="text-sm font-bold text-slate-800">Mock Interview Drive Registration</p>
                <p className="text-xs text-slate-500 mt-1">Register by Friday for the upcoming mock interviews.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-600 mb-1">ACADEMIC</p>
                <p className="text-sm font-bold text-slate-800">Mid-Sem Results Published</p>
                <p className="text-xs text-slate-500 mt-1">Check the results portal for your marks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
  `,

  'src/pages/college/student/StudentCourses.tsx': `
import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { DataTable } from '../../../components/college/common/DataTable';
import { mockSubjects } from '../../../data/college/mockData';

export function StudentCourses() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="My Courses" description="Semester 7 Registered Courses">
      <DataTable columns={['Course Code', 'Course Name', 'Credits', 'Faculty', 'Status']}>
        {mockSubjects.map((sub, i) => (
          <tr key={i} className="hover:bg-slate-50 transition-colors">
            <td className="px-6 py-4 text-sm font-bold text-slate-700">{sub.code}</td>
            <td className="px-6 py-4 text-sm font-semibold text-slate-800">{sub.name}</td>
            <td className="px-6 py-4 text-sm text-slate-500 font-medium">{sub.credits} Credits</td>
            <td className="px-6 py-4 text-sm text-slate-600">{sub.faculty}</td>
            <td className="px-6 py-4">
              <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700 bg-green-100 rounded-full border border-green-200">
                Registered
              </span>
            </td>
          </tr>
        ))}
      </DataTable>
    </CollegeLayout>
  );
}
  `,

  'src/pages/college/student/StudentResults.tsx': `
import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';

export function StudentResults() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="Academic Results" description="View SGPA, CGPA and subject-wise grades">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#7c3aed] to-[#5b21b6] rounded-2xl p-6 text-white shadow-xl shadow-[#7c3aed]/20">
          <p className="text-sm font-medium text-white/80">Overall CGPA</p>
          <h2 className="text-4xl font-black mt-2">8.42</h2>
          <p className="text-xs font-medium text-white/80 mt-2">Top 15% of Batch</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Last Semester SGPA (Sem 6)</p>
          <h2 className="text-4xl font-black text-slate-800 mt-2">8.61</h2>
          <p className="text-xs font-medium text-green-600 mt-2 flex items-center gap-1">
            ↑ +0.15 from Semester 5
          </p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Semester 6 Detailed Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-y border-slate-100">
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase">Subject</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Credits</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Grade</th>
                <th className="px-4 py-3 text-xs font-bold text-slate-500 uppercase text-center">Points</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { sub: 'Computer Networks', cred: 4, grade: 'A', points: 9 },
                { sub: 'Software Engineering', cred: 4, grade: 'A+', points: 10 },
                { sub: 'Operating Systems', cred: 4, grade: 'B+', points: 8 },
                { sub: 'Lab: Networks', cred: 2, grade: 'A+', points: 10 }
              ].map((r, i) => (
                <tr key={i} className="hover:bg-slate-50">
                  <td className="px-4 py-4 text-sm font-bold text-slate-800">{r.sub}</td>
                  <td className="px-4 py-4 text-sm font-medium text-slate-500 text-center">{r.cred}</td>
                  <td className="px-4 py-4 text-center">
                    <span className="font-bold text-green-600">{r.grade}</span>
                  </td>
                  <td className="px-4 py-4 text-sm font-bold text-slate-700 text-center">{r.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}
  `,

  'src/pages/college/PlaceholderCollege.tsx': `
import React from 'react';
import { CollegeLayout } from '../../components/college/layout/CollegeLayout';
import { CollegeRole } from '../../types/college';
import { Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export function PlaceholderCollege({ role }: { role: CollegeRole }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/');
  const moduleName = pathParts[pathParts.length - 1];
  const title = moduleName.charAt(0).toUpperCase() + moduleName.slice(1);

  return (
    <CollegeLayout 
      role={role} 
      user={{ name: role === 'student' ? 'Shivam Sharma' : role === 'faculty' ? 'Dr. Sharma' : role === 'parent' ? 'Rajesh Kumar' : 'Admin User', roleLabel: \`\${role.toUpperCase()} PORTAL\` }} 
      title={title} 
      description={\`Manage your \${title.toLowerCase()} securely.\`}
    >
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white border border-slate-100 rounded-3xl shadow-sm">
        <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6">
          <Clock size={32} className="text-[#7c3aed]" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">{title} Module</h2>
        <p className="text-slate-500 max-w-md">
          This module is part of the College ERP system and is currently being configured for your institution's specific requirements.
        </p>
      </div>
    </CollegeLayout>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('College Student files created successfully!');
