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
            <div className={`w-2 h-2 rounded-full ${isCheckedIn ? 'bg-green-500 animate-pulse' : 'bg-slate-300'}`}></div>
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
            className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${
              isCheckedIn 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : 'bg-linkup-navy text-white hover:bg-slate-800 shadow-md shadow-slate-800/20'
            }`}
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
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                      t.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                    }`}>
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