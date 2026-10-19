import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  UserPlus, Users, CheckCircle2, Clock, 
  Calendar, Star, FileText, ChevronRight, 
  ExternalLink, Search, Filter, Plus, ArrowUpRight
} from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  currentCompany: string;
  experience: string;
  stage: 'Manager Round' | 'Tech Round 2' | 'Offer Extended' | 'Screening';
  interviewDate: string;
  interviewerScore: string;
  recommendation: 'Strong Hire' | 'Hire' | 'Under Evaluation';
  avatar: string;
}

export function ManagerHiring() {
  const user = { name: 'Priya Mehta', roleLabel: 'Engineering Manager • Web & Platform' };
  
  const [openRequisitions] = useState([
    {
      id: 'REQ-ENG-082',
      title: 'Senior Full-Stack Engineer (React 18 & Go)',
      department: 'Engineering • Pod 4',
      openings: 2,
      applied: 42,
      pipeline: { screening: 14, technical: 5, manager: 2, offer: 1 },
      priority: 'High Priority',
      status: 'Actively Interviewing'
    },
    {
      id: 'REQ-ENG-089',
      title: 'DevOps & Site Reliability Engineer (Kubernetes)',
      department: 'Cloud Platform • Pod 4',
      openings: 1,
      applied: 28,
      pipeline: { screening: 8, technical: 3, manager: 1, offer: 0 },
      priority: 'Normal Priority',
      status: 'Actively Interviewing'
    }
  ]);

  const [candidates, setCandidates] = useState<Candidate[]>([
    {
      id: 'CAN-902',
      name: 'Tanmay Kashyap',
      role: 'Senior Full-Stack Engineer',
      currentCompany: 'Ex-Swiggy Tech',
      experience: '6.5 Years',
      stage: 'Manager Round',
      interviewDate: 'Tomorrow, Oct 20 at 11:30 AM',
      interviewerScore: '4.6 / 5.0 (Tech Round 1)',
      recommendation: 'Strong Hire',
      avatar: 'TK'
    },
    {
      id: 'CAN-905',
      name: 'Meera Nair',
      role: 'DevOps & Site Reliability Engineer',
      currentCompany: 'Ex-Razorpay',
      experience: '5.0 Years',
      stage: 'Offer Extended',
      interviewDate: 'Completed on Oct 16',
      interviewerScore: '4.8 / 5.0 (System Design)',
      recommendation: 'Strong Hire',
      avatar: 'MN'
    },
    {
      id: 'CAN-912',
      name: 'Deepak Joshi',
      role: 'Senior Full-Stack Engineer',
      currentCompany: 'Ex-InMobi',
      experience: '7.2 Years',
      stage: 'Tech Round 2',
      interviewDate: 'Oct 22 at 04:00 PM',
      interviewerScore: '4.2 / 5.0 (Coding Live)',
      recommendation: 'Hire',
      avatar: 'DJ'
    }
  ]);

  return (
    <CorporateLayout
      role="manager"
      user={user}
      title="Hiring & Interview Pipeline"
      description="Manage Pod 4 open engineering requisitions, review candidate feedback scorecards, and conduct hiring rounds."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Talent' },
        { label: 'Hiring & Interviews' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <UserPlus size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Positions</p>
              <h3 className="text-2xl font-bold text-slate-900">3 Headcounts</h3>
              <p className="text-xs text-blue-600 font-medium">Approved for Q4 FY26</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">In Active Pipeline</p>
              <h3 className="text-2xl font-bold text-slate-900">11 Candidates</h3>
              <p className="text-xs text-purple-600 font-medium">Beyond resume screening</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Offers Extended</p>
              <h3 className="text-2xl font-bold text-slate-900">1 Offer</h3>
              <p className="text-xs text-emerald-600 font-medium">Meera Nair (DevOps Lead)</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upcoming Interviews</p>
              <h3 className="text-2xl font-bold text-slate-900">2 Interviews</h3>
              <p className="text-xs text-amber-600 font-medium">This week (Manager round)</p>
            </div>
          </div>
        </div>

        {/* Requisitions Overview */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900">Open Headcount Requisitions</h3>
              <p className="text-xs text-slate-500">Recruitment partner: Greenhouse ATS synced with LinkedIn Recruiter.</p>
            </div>
            <button 
              onClick={() => alert('New headcount requisition request submitted to Talent Acquisition.')}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
            >
              <Plus size={15} /> Raise New Requisition
            </button>
          </div>

          <div className="space-y-4">
            {openRequisitions.map(req => (
              <div key={req.id} className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-slate-50 transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">{req.id}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">{req.status}</span>
                      <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full">{req.priority}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{req.title}</h4>
                    <p className="text-xs text-slate-500">{req.department} • <strong className="text-slate-700">{req.openings} Openings</strong></p>
                  </div>

                  {/* Funnel Pipeline */}
                  <div className="flex items-center gap-3 text-center">
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Screening</span>
                      <span className="text-sm font-bold text-slate-800">{req.pipeline.screening}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Tech</span>
                      <span className="text-sm font-bold text-blue-600">{req.pipeline.technical}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Manager</span>
                      <span className="text-sm font-bold text-purple-600">{req.pipeline.manager}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-white p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Offer</span>
                      <span className="text-sm font-bold text-emerald-600">{req.pipeline.offer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shortlisted Candidates Cards */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-4">Candidates in Your Decision Queue</h3>
          <div className="space-y-4">
            {candidates.map(can => (
              <div key={can.id} className="p-5 rounded-2xl border border-slate-200 hover:shadow-sm transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {can.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{can.name}</h4>
                        <span className="text-xs text-slate-500 font-medium">({can.currentCompany} • {can.experience})</span>
                      </div>
                      <p className="text-xs text-slate-500">{can.role}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-4 text-xs">
                        <span className="text-purple-700 font-semibold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                          🎯 {can.stage}
                        </span>
                        <span className="text-slate-600">
                          📅 {can.interviewDate}
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full">
                          ★ {can.recommendation} ({can.interviewerScore})
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 lg:self-center">
                    <button 
                      onClick={() => alert(`Scorecard view loaded for ${can.name}`)}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                    >
                      View Rubric
                    </button>
                    <button 
                      onClick={() => alert(`Conduct interview screen opened for ${can.name}`)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                    >
                      Conduct Interview
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
