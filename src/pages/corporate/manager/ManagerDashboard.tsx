import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { KpiCard } from '../../../components/corporate/common/KpiCard';
import { 
  Users, CheckCircle2, Calendar, Briefcase, Clock, 
  AlertCircle, ChevronRight, CheckSquare, Search, 
  TrendingUp, Award, ArrowUpRight, Zap, Filter
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function ManagerDashboard() {
  const navigate = useNavigate();
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  const [searchTeam, setSearchTeam] = useState('');

  const [pendingLeaves, setPendingLeaves] = useState([
    { id: 'LEV-01', name: 'Rahul Sharma', role: 'Senior Frontend Developer', type: 'Annual Leave', duration: 'Oct 20 - Oct 22 (3 days)', reason: 'Family festival break & travel', avatar: 'RS' },
    { id: 'LEV-02', name: 'Vikram Malhotra', role: 'Senior Backend Engineer', type: 'Sick Leave', duration: 'Oct 08 (1 day)', reason: 'Doctor consultation & viral rest', avatar: 'VM' }
  ]);

  const teamMembers = [
    { name: 'Rahul Sharma', designation: 'Senior Frontend Developer', status: 'Active', points: '38 pts', sprintTask: 'WebAuthn 2FA Flow' },
    { name: 'Vikram Malhotra', designation: 'Senior Backend Engineer', status: 'Active', points: '42 pts', sprintTask: 'Go Microservice API' },
    { name: 'Sneha Roy', designation: 'Senior Product Designer', status: 'WFH Today', points: '24 pts', sprintTask: 'Design System Tokens' },
    { name: 'Amit Kumar', designation: 'Lead QA Automation', status: 'Active', points: '32 pts', sprintTask: 'Playwright CI Suite' }
  ];

  const handleApprove = (id: string) => {
    setPendingLeaves(prev => prev.filter(item => item.id !== id));
  };

  const handleReject = (id: string) => {
    setPendingLeaves(prev => prev.filter(item => item.id !== id));
  };

  const filteredTeam = teamMembers.filter(m => 
    m.name.toLowerCase().includes(searchTeam.toLowerCase()) ||
    m.designation.toLowerCase().includes(searchTeam.toLowerCase())
  );

  return (
    <CorporateLayout 
      role="manager" 
      user={user} 
      title="Manager Dashboard" 
      description="Overview of your team's performance, sprint velocity, and approvals."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Manager Dashboard' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header / Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Users size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Engineering Pod 4 Operations Center</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Sprint 42 Active (88% Velocity)
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Welcome back, Priya. Here is your team’s headcount, delivery streams, and pending actions today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/corporate/manager/tasks')}
              className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 shadow-sm transition"
            >
              Sprint Backlog
            </button>
            <button 
              onClick={() => navigate('/corporate/manager/team')}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              Manage Pod Headcount
            </button>
          </div>
        </div>

        {/* 4 Core Manager KPIs (Matching Screenshot) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <KpiCard 
            title="Team Members" 
            value="8 Engineers" 
            icon={Users} 
            color="blue" 
            subtitle="Pod 4 Frontend & Core" 
          />
          <KpiCard 
            title="Present Today" 
            value="7 Active" 
            icon={CheckCircle2} 
            color="green" 
            subtitle="1 WFH • 0 Absent" 
          />
          <KpiCard 
            title="Leave Requests" 
            value={pendingLeaves.length} 
            icon={Calendar} 
            color="amber" 
            subtitle="Action Required" 
          />
          <KpiCard 
            title="Active Projects" 
            value="4 Streams" 
            icon={Briefcase} 
            color="navy" 
            subtitle="All Milestones On Track" 
          />
        </div>

        {/* Main Grid: Pending Approvals & My Team */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pending Leave Approvals (Matching Screenshot) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                  <Calendar className="text-amber-500" size={18} /> Pending Leave Approvals
                </h3>
                <span className="text-xs font-semibold text-slate-500">{pendingLeaves.length} Pending</span>
              </div>

              {pendingLeaves.length === 0 ? (
                <div className="text-center py-8 text-slate-400 text-xs">
                  <CheckCircle2 size={32} className="mx-auto text-emerald-500 mb-2 opacity-80" />
                  All team leave requests have been reviewed!
                </div>
              ) : (
                <div className="space-y-3">
                  {pendingLeaves.map((req) => (
                    <div key={req.id} className="p-3.5 border border-slate-100 rounded-xl hover:border-slate-200 hover:bg-slate-50/50 transition bg-white shadow-xs">
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-full bg-slate-900 text-white font-bold text-xs flex items-center justify-center">
                            {req.avatar}
                          </div>
                          <div>
                            <p className="text-xs font-bold text-slate-800">{req.name}</p>
                            <p className="text-[11px] text-slate-500">{req.type} • {req.duration}</p>
                            <p className="text-[10px] text-slate-400 italic mt-0.5">"{req.reason}"</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button 
                            onClick={() => handleReject(req.id)}
                            className="px-2.5 py-1 text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 rounded-lg transition"
                          >
                            Reject
                          </button>
                          <button 
                            onClick={() => handleApprove(req.id)}
                            className="px-2.5 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-lg transition"
                          >
                            Approve
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <button 
                onClick={() => navigate('/corporate/manager/leave')}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                Open Full Leave Desk <ChevronRight size={14} />
              </button>
              <span className="text-[11px] text-slate-400">Auto-delegation active</span>
            </div>
          </div>

          {/* My Team Overview (Matching Screenshot) */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col justify-between">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Users size={16} className="text-blue-600" /> Direct Reports (Pod 4)
              </h3>
              <span className="text-xs font-semibold text-slate-400">8 Engineers total</span>
            </div>

            <div className="p-3 border-b border-slate-100 bg-slate-50/50">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search team member or designation..." 
                  value={searchTeam}
                  onChange={(e) => setSearchTeam(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-[10px] uppercase font-bold text-slate-400">
                    <th className="px-4 py-2.5">Name</th>
                    <th className="px-4 py-2.5">Designation</th>
                    <th className="px-4 py-2.5">Sprint Allocation</th>
                    <th className="px-4 py-2.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredTeam.map((e, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3 font-bold text-slate-800">{e.name}</td>
                      <td className="px-4 py-3 text-slate-600">{e.designation}</td>
                      <td className="px-4 py-3">
                        <span className="font-mono font-semibold text-blue-600">{e.points}</span>
                        <span className="text-slate-400 text-[10px] block">{e.sprintTask}</span>
                      </td>
                      <td className="px-4 py-3 text-right">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                          e.status === 'Active' 
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                            : 'bg-blue-50 text-blue-700 border-blue-200'
                        }`}>
                          {e.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/50">
              <button 
                onClick={() => navigate('/corporate/manager/team')}
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                View Full Team Directory <ChevronRight size={14} />
              </button>
              <span className="text-[11px] text-slate-400">100% On-Call Coverage</span>
            </div>
          </div>
        </div>

        {/* Sprint 42 Velocity & Quick Launchpad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sprint Velocity</span>
              <h4 className="text-lg font-bold text-slate-800 mt-1">128 / 160 Story Pts</h4>
              <p className="text-xs text-emerald-600 font-medium mt-0.5">80% Delivered • 5 Days Left</p>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <Zap size={22} />
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Timesheet Signoffs</span>
              <h4 className="text-lg font-bold text-slate-800 mt-1">5 Submissions Due</h4>
              <p className="text-xs text-amber-600 font-medium mt-0.5">Week 42 Client Allocations</p>
            </div>
            <button 
              onClick={() => navigate('/corporate/manager/timesheets')}
              className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition"
            >
              Signoff All
            </button>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">1-on-1s This Week</span>
              <h4 className="text-lg font-bold text-slate-800 mt-1">3 Sessions Scheduled</h4>
              <p className="text-xs text-purple-600 font-medium mt-0.5">Rahul Sharma (Today 11 AM)</p>
            </div>
            <button 
              onClick={() => navigate('/corporate/manager/one-on-one')}
              className="px-3 py-1.5 text-xs font-bold text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition"
            >
              View Agenda
            </button>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
