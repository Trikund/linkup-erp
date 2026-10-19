import React from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Users, Mail, MessageSquare, Phone, MapPin, 
  CheckCircle2, Clock, Calendar, ShieldCheck, ExternalLink
} from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  location: string;
  status: 'Active' | 'In Meeting' | 'WFH Today' | 'On Leave';
  avatarInitials: string;
  isManager?: boolean;
}

export function EmployeeTeam() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const members: TeamMember[] = [
    { id: 'EMP-0102', name: 'Siddharth Mehta', role: 'VP Engineering & Architecture', email: 'siddharth.m@linkupcorp.com', location: 'Bengaluru HQ (Floor 4)', status: 'Active', avatarInitials: 'SM', isManager: true },
    { id: 'EMP-0318', name: 'Priya Venkatesh', role: 'Tech Lead - Frontend Engineering', email: 'priya.v@linkupcorp.com', location: 'Bengaluru HQ (Floor 4)', status: 'In Meeting', avatarInitials: 'PV' },
    { id: 'EMP-0428', name: 'Rahul Sharma (You)', role: 'Senior Frontend Developer', email: 'rahul.sharma@linkupcorp.com', location: 'Bengaluru HQ (Floor 4)', status: 'Active', avatarInitials: 'RS' },
    { id: 'EMP-0441', name: 'Vikram Malhotra', role: 'Senior Backend & Go Engineer', email: 'vikram.m@linkupcorp.com', location: 'Gurugram Tech Center', status: 'Active', avatarInitials: 'VM' },
    { id: 'EMP-0512', name: 'Sneha Roy', role: 'Senior Product Designer (UI/UX)', email: 'sneha.roy@linkupcorp.com', location: 'Remote (Bengaluru)', status: 'WFH Today', avatarInitials: 'SR' },
    { id: 'EMP-0589', name: 'Amit Kumar', role: 'Lead QA Automation Engineer', email: 'amit.k@linkupcorp.com', location: 'Bengaluru HQ (Floor 4)', status: 'Active', avatarInitials: 'AK' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="My Team & Org Chart"
      description="View your direct engineering pod colleagues, manager reporting line, and team availability."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Organization & Culture' },
        { label: 'My Team & Org Chart' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Users size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Engineering Pod 4 • Web & Core</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                6 Active Engineers
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Reporting directly to Siddharth Mehta (VP Engineering).
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <MessageSquare size={14} />
            Start Pod Slack Huddle
          </button>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {members.map((m) => (
            <div key={m.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-slate-800 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                      {m.avatarInitials}
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-800">{m.name}</h3>
                      <p className="text-xs text-slate-500">{m.role}</p>
                    </div>
                  </div>
                  {m.isManager && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                      Manager
                    </span>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400">Employee ID:</span>
                    <span className="font-mono font-medium text-slate-700">{m.id}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400">Location:</span>
                    <span className="flex items-center gap-1 text-slate-700">
                      <MapPin size={12} className="text-slate-400" /> {m.location}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-400">Status:</span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      m.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                        : m.status === 'In Meeting'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {m.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <a href={`mailto:${m.email}`} className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1">
                  <Mail size={12} /> {m.email.split('@')[0]}
                </a>
                <button className="p-1.5 hover:bg-slate-100 rounded-lg text-slate-500 transition" title="Direct Message">
                  <MessageSquare size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
