import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Users, Search, Filter, Mail, Phone, MapPin, 
  CheckCircle2, Clock, Calendar, ShieldCheck, 
  ExternalLink, Award, Plus, Sparkles, AlertCircle,
  Briefcase, TrendingUp, ChevronRight
} from 'lucide-react';

interface DirectReport {
  id: string;
  name: string;
  role: string;
  level: string;
  email: string;
  location: string;
  status: 'Active' | 'In Meeting' | 'WFH Today' | 'On Leave';
  sprintTask: string;
  skillTags: string[];
  lastOneOnOne: string;
  performanceRating: string;
  avatar: string;
}

export function ManagerTeam() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const directReports: DirectReport[] = [
    {
      id: 'EMP-0428',
      name: 'Rahul Sharma',
      role: 'Senior Frontend Developer',
      level: 'IC3 (Senior)',
      email: 'rahul.sharma@linkupcorp.com',
      location: 'Bengaluru HQ (Floor 4)',
      status: 'Active',
      sprintTask: 'WebAuthn 2FA Flow & Passkeys',
      skillTags: ['React 18', 'TypeScript', 'Tailwind', 'GraphQL'],
      lastOneOnOne: 'Oct 14, 2026',
      performanceRating: 'Exceeds Expectations (4.4/5)',
      avatar: 'RS'
    },
    {
      id: 'EMP-0441',
      name: 'Vikram Malhotra',
      role: 'Senior Backend Engineer',
      level: 'IC3 (Senior)',
      email: 'vikram.m@linkupcorp.com',
      location: 'Gurugram Tech Center',
      status: 'Active',
      sprintTask: 'Go Microservice gRPC Gateway',
      skillTags: ['Go', 'PostgreSQL', 'Redis', 'Kafka'],
      lastOneOnOne: 'Oct 12, 2026',
      performanceRating: 'Outstanding Performer (4.8/5)',
      avatar: 'VM'
    },
    {
      id: 'EMP-0512',
      name: 'Sneha Roy',
      role: 'Senior Product Designer',
      level: 'IC3 (Senior)',
      email: 'sneha.roy@linkupcorp.com',
      location: 'Remote (Bengaluru)',
      status: 'WFH Today',
      sprintTask: 'Design System Token Migration',
      skillTags: ['Figma', 'Design Systems', 'UX Research', 'CSS'],
      lastOneOnOne: 'Oct 16, 2026',
      performanceRating: 'Meets Expectations (3.9/5)',
      avatar: 'SR'
    },
    {
      id: 'EMP-0589',
      name: 'Amit Kumar',
      role: 'Lead QA Automation Engineer',
      level: 'IC4 (Lead)',
      email: 'amit.k@linkupcorp.com',
      location: 'Bengaluru HQ (Floor 4)',
      status: 'Active',
      sprintTask: 'Playwright End-to-End CI Pipeline',
      skillTags: ['Playwright', 'Jest', 'Docker', 'CI/CD'],
      lastOneOnOne: 'Oct 10, 2026',
      performanceRating: 'Exceeds Expectations (4.3/5)',
      avatar: 'AK'
    },
    {
      id: 'EMP-0612',
      name: 'Rohan Das',
      role: 'Frontend Engineer II',
      level: 'IC2 (Mid-Level)',
      email: 'rohan.das@linkupcorp.com',
      location: 'Bengaluru HQ (Floor 4)',
      status: 'Active',
      sprintTask: 'Attendance Biometrics Widget',
      skillTags: ['React', 'Zustand', 'HTML5 WebRTC'],
      lastOneOnOne: 'Oct 09, 2026',
      performanceRating: 'Meets Expectations (3.8/5)',
      avatar: 'RD'
    },
    {
      id: 'EMP-0720',
      name: 'Neha Verma',
      role: 'Associate Software Engineer',
      level: 'IC1 (Associate)',
      email: 'neha.v@linkupcorp.com',
      location: 'Bengaluru HQ (Floor 4)',
      status: 'In Meeting',
      sprintTask: 'Leave Approval Modal Bugs & Refactor',
      skillTags: ['TypeScript', 'React', 'Storybook'],
      lastOneOnOne: 'Oct 15, 2026',
      performanceRating: 'Fast Learner (3.9/5)',
      avatar: 'NV'
    },
    {
      id: 'EMP-0640',
      name: 'Siddharth Rao',
      role: 'DevOps & Site Reliability Engineer',
      level: 'IC3 (Senior)',
      email: 'siddharth.r@linkupcorp.com',
      location: 'Remote (Pune)',
      status: 'Active',
      sprintTask: 'EKS Kubernetes Autoscaling Policies',
      skillTags: ['Kubernetes', 'Terraform', 'AWS', 'Prometheus'],
      lastOneOnOne: 'Oct 08, 2026',
      performanceRating: 'Exceeds Expectations (4.5/5)',
      avatar: 'SR'
    },
    {
      id: 'EMP-0688',
      name: 'Ananya Sen',
      role: 'Backend Engineer II',
      level: 'IC2 (Mid-Level)',
      email: 'ananya.sen@linkupcorp.com',
      location: 'Bengaluru HQ (Floor 4)',
      status: 'On Leave',
      sprintTask: 'Salary Slip Encryption Service',
      skillTags: ['Node.js', 'PostgreSQL', 'Vault'],
      lastOneOnOne: 'Oct 05, 2026',
      performanceRating: 'Meets Expectations (3.7/5)',
      avatar: 'AS'
    }
  ];

  const filtered = directReports.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || 
                          m.role.toLowerCase().includes(search.toLowerCase()) ||
                          m.skillTags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = filterStatus === 'all' || m.status.toLowerCase().replace(' ', '') === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Direct Reports & Pod"
      description="Manage Pod 4 engineers, track sprint bandwidth, 1-on-1 schedules, and individual capability matrices."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Team & Operations' },
        { label: 'Direct Reports & Pod' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Summary Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Headcount</p>
              <h3 className="text-2xl font-bold text-slate-900">8 Engineers</h3>
              <p className="text-xs text-blue-600 font-medium">100% capacity allocated</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Available Today</p>
              <h3 className="text-2xl font-bold text-slate-900">7 Active</h3>
              <p className="text-xs text-emerald-600 font-medium">1 On Planned Leave</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Sparkles size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Sprint Velocity</p>
              <h3 className="text-2xl font-bold text-slate-900">160 Pts</h3>
              <p className="text-xs text-purple-600 font-medium">Sprint 42 on track (80%)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Calendar size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">1-on-1 Coverage</p>
              <h3 className="text-2xl font-bold text-slate-900">100%</h3>
              <p className="text-xs text-amber-600 font-medium">All completed in Oct</p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Search by engineer name, role, tech stack (e.g. React, Go, Kafka)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 placeholder-slate-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto">
            {['all', 'active', 'wfhtoday', 'inmeeting', 'onleave'].map(s => (
              <button
                key={s}
                onClick={() => setFilterStatus(s)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition ${
                  filterStatus === s 
                    ? 'bg-blue-600 text-white shadow-sm' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {s === 'all' ? 'All Statuses' : s === 'wfhtoday' ? 'WFH Today' : s === 'inmeeting' ? 'In Meeting' : s === 'onleave' ? 'On Leave' : s}
              </button>
            ))}
          </div>
        </div>

        {/* Direct Reports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {filtered.map(report => (
            <div key={report.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-slate-900 to-slate-700 text-white font-bold text-base flex items-center justify-center shadow-md p-3">
                    {report.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-slate-900">{report.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {report.id}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{report.role}</p>
                    <span className="text-[11px] font-semibold text-blue-600">{report.level}</span>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border ${
                  report.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                  report.status === 'WFH Today' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                  report.status === 'In Meeting' ? 'bg-purple-50 text-purple-700 border-purple-200' :
                  'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {report.status}
                </span>
              </div>

              {/* Current Sprint Focus */}
              <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Briefcase size={12} className="text-blue-600" />
                  Active Sprint 42 Commitment
                </p>
                <p className="text-xs font-semibold text-slate-800">{report.sprintTask}</p>
              </div>

              {/* Tech Stack Pills */}
              <div className="mt-3 flex flex-wrap gap-1.5">
                {report.skillTags.map(tag => (
                  <span key={tag} className="px-2 py-0.5 rounded-lg text-[10px] font-medium bg-slate-100 text-slate-600">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer details */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div>
                  <span className="text-[10px] text-slate-400 block">Performance Rating</span>
                  <span className="font-semibold text-slate-700">{report.performanceRating}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 block">Last 1-on-1</span>
                  <span className="font-semibold text-slate-700">{report.lastOneOnOne}</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <a 
                  href={`mailto:${report.email}`}
                  className="flex-1 text-center py-2 text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl transition"
                >
                  Send Email
                </a>
                <button 
                  onClick={() => alert(`1-on-1 booked with ${report.name} for Friday, 3:30 PM.`)}
                  className="flex-1 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                >
                  Book 1-on-1
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CorporateLayout>
  );
}
