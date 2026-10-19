import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { 
  CheckCircle2, Clock, Briefcase, Calendar, AlertCircle, 
  Fingerprint, CheckSquare, ArrowUpRight, TrendingUp, Users, 
  Sparkles, FileText, ChevronRight, Zap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function EmployeeDashboard() {
  const navigate = useNavigate();
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };
  const [isCheckedIn, setIsCheckedIn] = useState(true);

  const ongoingTasks = [
    { id: 'ENG-1082', title: 'Update Authentication Flow & Biometric WebAuthn', project: 'Website Revamp v3', status: 'In Progress', priority: 'High', points: '5 pts' },
    { id: 'ENG-1074', title: 'Fix Navigation Bug & Drawer Z-Index on Mobile', project: 'Internal Dashboard', status: 'In Review', priority: 'Medium', points: '3 pts' },
    { id: 'ENG-1065', title: 'Code Review: Analytics PR & DataDog Telemetry', project: 'Website Revamp v3', status: 'To Do', priority: 'Medium', points: '2 pts' },
    { id: 'ENG-1049', title: 'Core Web Vitals Optimization on Checkout Flow', project: 'E-Commerce Gateway', status: 'Done', priority: 'High', points: '8 pts' }
  ];

  const upcomingEvents = [
    { month: 'OCT', day: '19', title: 'Sprint 42 Retrospective & Demo', time: 'Today • 04:30 PM', pod: 'Engineering Pod 4' },
    { month: 'OCT', day: '21', title: '1-on-1 Sync with Siddharth Mehta', time: 'Wed • 11:00 AM', pod: 'VP Engineering' },
    { month: 'OCT', day: '24', title: 'Global Q4 Company Townhall', time: 'Fri • 03:00 PM', pod: 'All Hands • San Francisco & Bengaluru' }
  ];

  return (
    <CorporateLayout 
      role="employee" 
      user={user} 
      title="Dashboard" 
      description="Here's your work overview for today."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Employee Dashboard' }
      ]}
    >
      {/* Top Welcome Bar & Punch Widget */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Good morning, Rahul</h2>
            <span className="px-2 py-0.5 text-[11px] font-bold rounded-md bg-blue-50 text-blue-600 border border-blue-200">
              Sprint 42 Active
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">Ready to tackle today's engineering challenges?</p>
        </div>
        
        {/* Check-in Live Widget (Matching Screenshot) */}
        <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-3 flex items-center gap-4">
          <div className="flex items-center gap-3 px-3">
            <div className={`w-2.5 h-2.5 rounded-full ${isCheckedIn ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`} />
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                {isCheckedIn ? 'Working' : 'Status'}
              </p>
              <p className="text-sm font-bold text-slate-800 font-mono">
                {isCheckedIn ? '5h 42m' : 'Not Checked In'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsCheckedIn(!isCheckedIn)}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 shadow-sm ${
              isCheckedIn 
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200' 
                : 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-500/20'
            }`}
          >
            <Fingerprint size={16} />
            {isCheckedIn ? 'Check Out' : 'Check In'}
          </button>
        </div>
      </div>

      {/* 4 Primary KPI Cards (Matching Screenshot) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <KpiCard 
          title="Today's Status" 
          value="Present" 
          icon={CheckCircle2} 
          subtitle="09:18 AM Check-in" 
          color="green" 
        />
        <KpiCard 
          title="Pending Tasks" 
          value="5" 
          icon={CheckSquare} 
          subtitle="2 High Priority" 
          color="amber" 
          trend="up" 
        />
        <KpiCard 
          title="Active Projects" 
          value="3" 
          icon={Briefcase} 
          subtitle="On track • Sprint 42" 
          color="blue" 
        />
        <KpiCard 
          title="Leave Balance" 
          value="12 Days" 
          icon={Calendar} 
          subtitle="Annual Leave Available" 
          color="navy" 
        />
      </div>

      {/* Main Grid: Tasks, Calendar & HR Broadcast */}
      <div className="grid lg:grid-cols-3 gap-6 mb-8">
        {/* Left Column: Ongoing Sprint Tasks */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <CheckSquare className="text-blue-600" size={18} /> Current Sprint Tasks
              </h3>
              <span className="text-xs font-semibold text-slate-500">Sprint 42 (Oct 12 - 26)</span>
            </div>

            <div className="space-y-3">
              {ongoingTasks.map((t) => (
                <div 
                  key={t.id} 
                  className="flex items-center justify-between p-3.5 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-50/50 transition-colors bg-white shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      defaultChecked={t.status === 'Done'}
                      className="mt-1 border-slate-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" 
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-slate-400">{t.id}</span>
                        <p className={`text-xs font-semibold text-slate-800 ${t.status === 'Done' ? 'line-through text-slate-400' : ''}`}>
                          {t.title}
                        </p>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">{t.project} • <strong className="text-slate-600 font-mono">{t.points}</strong></p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded uppercase tracking-wider ${
                      t.priority === 'High' 
                        ? 'bg-rose-50 text-rose-700 border border-rose-200' 
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {t.priority}
                    </span>
                    <span className="text-[10px] font-medium text-slate-500">{t.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button 
                onClick={() => navigate('/corporate/employee/tasks')}
                className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
              >
                View All Sprint Tasks <ChevronRight size={14} />
              </button>
              <span className="text-[11px] text-slate-400">78% Story Points Delivered</span>
            </div>
          </div>

          {/* Quick Action Cards Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button 
              onClick={() => navigate('/corporate/employee/timesheets')}
              className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-xs transition text-left group"
            >
              <div className="p-2 w-fit rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition">
                <Clock size={16} />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-2">Log Timesheet</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">38.5 / 40.0 hrs</p>
            </button>

            <button 
              onClick={() => navigate('/corporate/employee/leave')}
              className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-xs transition text-left group"
            >
              <div className="p-2 w-fit rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition">
                <Calendar size={16} />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-2">Apply Leave</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">12 Days balance</p>
            </button>

            <button 
              onClick={() => navigate('/corporate/employee/reimbursements')}
              className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-xs transition text-left group"
            >
              <div className="p-2 w-fit rounded-lg bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition">
                <FileText size={16} />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-2">Claim Expense</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">Fast approval</p>
            </button>

            <button 
              onClick={() => navigate('/corporate/employee/payslips')}
              className="p-3.5 bg-white border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-xs transition text-left group"
            >
              <div className="p-2 w-fit rounded-lg bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition">
                <TrendingUp size={16} />
              </div>
              <h4 className="text-xs font-bold text-slate-800 mt-2">Latest Payslip</h4>
              <p className="text-[10px] text-slate-500 mt-0.5">₹1,26,450 net</p>
            </button>
          </div>
        </div>

        {/* Right Column: Upcoming & HR Announcement */}
        <div className="space-y-6">
          {/* Upcoming Events (Matching Screenshot) */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-5">
            <h3 className="text-sm font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Calendar className="text-blue-600" size={16} /> Upcoming Meetings
            </h3>
            <div className="space-y-3.5">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center justify-center w-11 h-11 bg-slate-50 rounded-lg border border-slate-100 flex-shrink-0">
                    <span className="text-[10px] font-bold text-slate-500 uppercase">{ev.month}</span>
                    <span className="text-sm font-black text-slate-900 leading-none">{ev.day}</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800 leading-snug">{ev.title}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{ev.time}</p>
                    <p className="text-[10px] text-blue-600 font-medium">{ev.pod}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* HR Announcement Banner Card (Matching Screenshot) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-lg p-5 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <AlertCircle size={64} />
            </div>
            <div className="flex items-center gap-1.5 text-blue-400 mb-2">
              <Sparkles size={14} />
              <span className="text-[10px] font-bold uppercase tracking-wider">HR Announcement</span>
            </div>
            <h4 className="text-base font-bold mb-1 text-white">Open Enrollment 2027</h4>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              Benefits enrollment is now open. Submit your medical floater and flex-pay preferences by Oct 20th.
            </p>
            <button 
              onClick={() => navigate('/corporate/employee/benefits')}
              className="px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors shadow-sm"
            >
              Review Benefits
            </button>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
