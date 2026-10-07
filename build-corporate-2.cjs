const fs = require('fs');
const path = require('path');

const files = {
  'src/components/corporate/common/KpiCard.tsx': `
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface KpiCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: 'navy' | 'blue' | 'cyan' | 'red' | 'green' | 'amber';
}

export function KpiCard({ title, value, icon: Icon, subtitle, trend, color = 'navy' }: KpiCardProps) {
  const colorMap = {
    navy: 'bg-slate-50 text-slate-700 border-slate-200',
    blue: 'bg-blue-50 text-blue-600 border-blue-100',
    cyan: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    red: 'bg-red-50 text-red-600 border-red-100',
    green: 'bg-green-50 text-green-600 border-green-100',
    amber: 'bg-amber-50 text-amber-600 border-amber-100'
  };

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">{title}</p>
          <h3 className="text-2xl font-bold text-slate-800">{value}</h3>
          {subtitle && (
            <p className={cn("text-xs font-medium mt-1.5", trend === 'up' ? 'text-green-600' : trend === 'down' ? 'text-red-600' : 'text-slate-500')}>
              {subtitle}
            </p>
          )}
        </div>
        <div className={cn("p-2.5 rounded-lg border", colorMap[color])}>
          <Icon size={18} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
}
  `,

  'src/components/corporate/common/DataTable.tsx': `
import React from 'react';
import { Search } from 'lucide-react';

interface DataTableProps {
  columns: string[];
  children: React.ReactNode;
  searchPlaceholder?: string;
}

export function DataTable({ columns, children, searchPlaceholder = "Search..." }: DataTableProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
          <input 
            type="text" 
            placeholder={searchPlaceholder}
            className="w-full pl-8 pr-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-sm focus:bg-white focus:border-linkup-navy focus:ring-1 focus:ring-linkup-navy outline-none transition-all"
          />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {columns.map((col, i) => (
                <th key={i} className="px-5 py-3 text-xs font-semibold text-slate-600 tracking-wide">{col}</th>
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

  'src/pages/corporate/employee/EmployeeDashboard.tsx': `
import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { CheckCircle2, Clock, Briefcase, Calendar, AlertCircle, Fingerprint } from 'lucide-react';
import { motion } from 'framer-motion';

export function EmployeeDashboard() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Frontend Developer' };
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  return (
    <CorporateLayout role="employee" user={user} title="Dashboard" description="Here's your work overview for today.">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-800">Good morning, {user.name.split(' ')[0]}</h2>
          <p className="text-slate-500 text-sm mt-1">Ready to tackle today's challenges?</p>
        </div>
        
        {/* Check-in Widget */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex items-center gap-4">
          <div className="flex items-center gap-3 px-3">
            <div className={\`w-2 h-2 rounded-full \${isCheckedIn ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}\`}></div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {isCheckedIn ? 'Working' : 'Status'}
              </p>
              <p className="text-sm font-bold text-slate-800">
                {isCheckedIn ? '5h 42m' : 'Not Checked In'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsCheckedIn(!isCheckedIn)}
            className={\`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 \${
              isCheckedIn 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : 'bg-linkup-navy text-white hover:bg-slate-800 shadow-md shadow-slate-800/20'
            }\`}
          >
            <Fingerprint size={16} />
            {isCheckedIn ? 'Check Out' : 'Check In'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard title="Today's Status" value="Present" icon={CheckCircle2} subtitle="09:18 AM Check-in" color="green" />
        <KpiCard title="Pending Tasks" value="5" icon={CheckSquare} subtitle="2 High Priority" color="amber" trend="up" />
        <KpiCard title="Active Projects" value="3" icon={Briefcase} subtitle="On track" color="blue" />
        <KpiCard title="Leave Balance" value="12 Days" icon={Calendar} subtitle="Annual Leave" color="navy" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Ongoing Tasks */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <CheckSquare className="text-linkup-navy" size={18} /> Current Tasks
            </h3>
            <div className="space-y-3">
              {[
                { title: 'Update Authentication Flow', project: 'Website Revamp', status: 'In Progress', priority: 'High' },
                { title: 'Fix Navigation Bug on Mobile', project: 'Internal Dashboard', status: 'To Do', priority: 'Medium' },
                { title: 'Code Review: Analytics PR', project: 'Website Revamp', status: 'To Do', priority: 'Medium' }
              ].map((t, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-slate-100 rounded-lg hover:border-slate-200 transition-colors bg-slate-50/50">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1 border-slate-300 rounded text-linkup-navy focus:ring-linkup-navy/50 cursor-pointer" />
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{t.title}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{t.project}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className={\`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider \${
                      t.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }\`}>
                      {t.priority}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">{t.status}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 text-sm font-medium text-linkup-navy hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
              View All Tasks
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {/* Upcoming Events */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="text-linkup-blue" size={18} /> Upcoming
            </h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-slate-50 rounded-lg border border-slate-100 flex-shrink-0">
                  <span className="text-xs font-bold text-slate-500 uppercase">Oct</span>
                  <span className="text-base font-black text-linkup-navy">12</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Sprint Planning</p>
                  <p className="text-xs text-slate-500 mt-0.5">Engineering Team • 11:00 AM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col items-center justify-center w-12 h-12 bg-red-50 rounded-lg border border-red-100 flex-shrink-0">
                  <span className="text-xs font-bold text-red-500 uppercase">Oct</span>
                  <span className="text-base font-black text-red-700">15</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Company Townhall</p>
                  <p className="text-xs text-slate-500 mt-0.5">All Hands • 03:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-gradient-to-br from-linkup-navy to-slate-800 rounded-xl shadow-lg p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle size={64} />
            </div>
            <h3 className="text-sm font-bold mb-3 text-white/90">HR Announcement</h3>
            <p className="text-base font-bold mb-1">Open Enrollment 2027</p>
            <p className="text-xs text-white/70 mb-4 leading-relaxed">
              Benefits enrollment is now open. Please submit your preferences by Oct 20th.
            </p>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-xs font-bold transition-colors backdrop-blur-sm">
              Read Details
            </button>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}

// Needed for the dashboard icons
import { CheckSquare } from 'lucide-react';
  `,

  'src/pages/corporate/employee/EmployeeAttendance.tsx': `
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
                <span className={\`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border \${
                  r.status === 'Present' ? 'bg-green-50 text-green-700 border-green-200' :
                  r.status === 'WFH' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  r.status === 'Late' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-red-50 text-red-700 border-red-200'
                }\`}>
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
  `,

  'src/pages/corporate/employee/EmployeeLeave.tsx': `
import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { DataTable } from '../../../components/corporate/common/DataTable';

export function EmployeeLeave() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Frontend Developer' };
  const [showApplyModal, setShowApplyModal] = useState(false);

  return (
    <CorporateLayout role="employee" user={user} title="Leave Management" description="View balance and apply for time off.">
      
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-slate-800">Leave Balance</h3>
        <button 
          onClick={() => setShowApplyModal(true)}
          className="px-4 py-2 bg-linkup-navy hover:bg-slate-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors"
        >
          Apply Leave
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { type: 'Annual Leave', available: 12, total: 21, color: 'bg-blue-500' },
          { type: 'Sick Leave', available: 4, total: 10, color: 'bg-red-500' },
          { type: 'Casual Leave', available: 2, total: 7, color: 'bg-amber-500' },
          { type: 'Optional Leave', available: 1, total: 2, color: 'bg-violet-500' }
        ].map((l, i) => (
          <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className={\`w-2 h-2 rounded-full \${l.color}\`}></div>
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{l.type}</p>
            </div>
            <div className="flex items-baseline gap-2">
              <h4 className="text-2xl font-bold text-slate-800">{l.available}</h4>
              <span className="text-xs text-slate-500 font-medium">/ {l.total} days</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl shadow-sm mb-6">
        <div className="p-4 border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">Leave History</h3>
        </div>
        <DataTable columns={['Leave Type', 'Duration', 'Days', 'Reason', 'Status']}>
          {[
            { type: 'Annual Leave', duration: 'Oct 20 - Oct 22, 2026', days: 3, reason: 'Family trip', status: 'Pending' },
            { type: 'Sick Leave', duration: 'Sep 14, 2026', days: 1, reason: 'Fever', status: 'Approved' },
            { type: 'Casual Leave', duration: 'Aug 05, 2026', days: 1, reason: 'Personal work', status: 'Approved' }
          ].map((r, i) => (
            <tr key={i} className="hover:bg-slate-50 transition-colors">
              <td className="px-5 py-3 text-sm font-semibold text-slate-700">{r.type}</td>
              <td className="px-5 py-3 text-sm text-slate-600">{r.duration}</td>
              <td className="px-5 py-3 text-sm font-medium text-slate-700">{r.days}</td>
              <td className="px-5 py-3 text-sm text-slate-500">{r.reason}</td>
              <td className="px-5 py-3">
                <span className={\`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border \${
                  r.status === 'Approved' ? 'bg-green-50 text-green-700 border-green-200' :
                  'bg-amber-50 text-amber-700 border-amber-200'
                }\`}>
                  {r.status}
                </span>
              </td>
            </tr>
          ))}
        </DataTable>
      </div>

      {/* Mock Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">Apply for Leave</h3>
              <button onClick={() => setShowApplyModal(false)} className="text-slate-400 hover:text-slate-600">×</button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Leave Type</label>
                <select className="w-full p-2 border border-slate-200 rounded-md text-sm focus:ring-1 focus:ring-linkup-navy outline-none">
                  <option>Annual Leave</option>
                  <option>Sick Leave</option>
                  <option>Casual Leave</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Start Date</label>
                  <input type="date" className="w-full p-2 border border-slate-200 rounded-md text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1">End Date</label>
                  <input type="date" className="w-full p-2 border border-slate-200 rounded-md text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Reason</label>
                <textarea rows={3} className="w-full p-2 border border-slate-200 rounded-md text-sm resize-none"></textarea>
              </div>
            </div>
            <div className="p-4 bg-slate-50 flex justify-end gap-3 border-t border-slate-100">
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 rounded-lg">Cancel</button>
              <button onClick={() => setShowApplyModal(false)} className="px-4 py-2 text-sm font-semibold text-white bg-linkup-navy hover:bg-slate-800 rounded-lg">Submit Request</button>
            </div>
          </div>
        </div>
      )}
    </CorporateLayout>
  );
}
  `
};

Object.entries(files).forEach(([filePath, content]) => {
  fs.writeFileSync(path.join(__dirname, filePath), content.trim());
});

console.log('Employee Dashboard, Attendance, and Leave files created successfully!');
