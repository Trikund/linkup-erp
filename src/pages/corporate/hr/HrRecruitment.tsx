import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  Briefcase, Users, Plus, Search, Filter, 
  CheckCircle2, Clock, Calendar, Star, ChevronRight, 
  ArrowUpRight, FileText, Check, X, ExternalLink
} from 'lucide-react';

interface JobRequisition {
  id: string;
  title: string;
  dept: string;
  location: string;
  type: string;
  openings: number;
  applicants: number;
  stageCounts: { screening: number; technical: number; manager: number; offer: number };
  status: 'Active' | 'Offer Stage' | 'Paused';
  hiringManager: string;
}

interface CandidateItem {
  id: string;
  name: string;
  role: string;
  experience: string;
  currentCompany: string;
  stage: 'Screening' | 'Technical Round' | 'Manager Round' | 'Offer Extended';
  score: string;
  interviewDate: string;
  avatar: string;
}

export function HrRecruitment() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [activeTab, setActiveTab] = useState<'requisitions' | 'candidates'>('requisitions');
  const [selectedJob, setSelectedJob] = useState('All');

  const requisitions: JobRequisition[] = [
    {
      id: 'REQ-101',
      title: 'Senior React & Web Developer',
      dept: 'Engineering (Pod 4)',
      location: 'Bengaluru HQ',
      type: 'Full-time',
      openings: 2,
      applicants: 42,
      stageCounts: { screening: 14, technical: 5, manager: 4, offer: 0 },
      status: 'Active',
      hiringManager: 'Priya Mehta'
    },
    {
      id: 'REQ-102',
      title: 'Enterprise Product Manager',
      dept: 'Product',
      location: 'Bengaluru HQ',
      type: 'Full-time',
      openings: 1,
      applicants: 54,
      stageCounts: { screening: 18, technical: 6, manager: 2, offer: 0 },
      status: 'Active',
      hiringManager: 'Aruna Roy'
    },
    {
      id: 'REQ-103',
      title: 'Senior Product Designer (Design Tokens)',
      dept: 'Product Design',
      location: 'Remote (India)',
      type: 'Full-time',
      openings: 1,
      applicants: 31,
      stageCounts: { screening: 8, technical: 4, manager: 2, offer: 1 },
      status: 'Offer Stage',
      hiringManager: 'Sneha Roy / Priya Mehta'
    },
    {
      id: 'REQ-104',
      title: 'Go Microservices Backend Lead',
      dept: 'Engineering',
      location: 'Gurugram Tech Center',
      type: 'Full-time',
      openings: 1,
      applicants: 38,
      stageCounts: { screening: 11, technical: 5, manager: 3, offer: 0 },
      status: 'Active',
      hiringManager: 'Priya Mehta'
    },
    {
      id: 'REQ-105',
      title: 'DevOps & Site Reliability Lead',
      dept: 'Engineering & Cloud',
      location: 'Bengaluru / Pune',
      type: 'Full-time',
      openings: 1,
      applicants: 29,
      stageCounts: { screening: 6, technical: 3, manager: 1, offer: 1 },
      status: 'Offer Stage',
      hiringManager: 'Priya Mehta'
    },
    {
      id: 'REQ-106',
      title: 'Enterprise Account Executive (SaaS)',
      dept: 'Sales & BD',
      location: 'Delhi NCR Office',
      type: 'Full-time',
      openings: 2,
      applicants: 24,
      stageCounts: { screening: 7, technical: 3, manager: 2, offer: 0 },
      status: 'Active',
      hiringManager: 'Rajeev Nambiar'
    }
  ];

  const candidates: CandidateItem[] = [
    { id: 'CAN-801', name: 'Tanmay Kashyap', role: 'Senior React Developer', experience: '6.5 Yrs', currentCompany: 'Ex-Swiggy Tech', stage: 'Manager Round', score: '4.6 / 5.0', interviewDate: 'Oct 20, 11:30 AM', avatar: 'TK' },
    { id: 'CAN-802', name: 'Meera Nair', role: 'DevOps & SRE Lead', experience: '5.2 Yrs', currentCompany: 'Ex-Razorpay', stage: 'Offer Extended', score: '4.8 / 5.0', interviewDate: 'Completed', avatar: 'MN' },
    { id: 'CAN-803', name: 'Deepak Joshi', role: 'Senior React Developer', experience: '7.0 Yrs', currentCompany: 'Ex-InMobi', stage: 'Technical Round', score: '4.2 / 5.0', interviewDate: 'Oct 22, 04:00 PM', avatar: 'DJ' },
    { id: 'CAN-804', name: 'Aakash Verma', role: 'Enterprise Product Manager', experience: '6.0 Yrs', currentCompany: 'Ex-Paytm', stage: 'Screening', score: 'Under Review', interviewDate: 'Oct 21, 02:00 PM', avatar: 'AV' },
    { id: 'CAN-805', name: 'Shreya Kulkarni', role: 'Senior Product Designer', experience: '5.5 Yrs', currentCompany: 'Ex-CRED Design', stage: 'Offer Extended', score: '4.9 / 5.0', interviewDate: 'Completed', avatar: 'SK' }
  ];

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Recruitment & Applicant Tracking System (ATS)"
      description="Monitor 8 active corporate job openings, candidate assessment pipelines, and hiring manager feedback."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Talent Acquisition & Onboarding' },
        { label: 'Recruitment & ATS' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Open Requisitions</p>
              <h3 className="text-2xl font-bold text-slate-900">8 Roles</h3>
              <p className="text-xs text-blue-600 font-medium">Approved headcount plan</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <Users size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Candidates</p>
              <h3 className="text-2xl font-bold text-slate-900">218 Applicants</h3>
              <p className="text-xs text-purple-600 font-medium">LinkedIn & Greenhouse</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Offers In Progress</p>
              <h3 className="text-2xl font-bold text-slate-900">2 Offers</h3>
              <p className="text-xs text-emerald-600 font-medium">Meera Nair & Shreya Kulkarni</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Avg Time-to-Hire</p>
              <h3 className="text-2xl font-bold text-slate-900">24 Days</h3>
              <p className="text-xs text-amber-600 font-medium">Target &lt; 30 days</p>
            </div>
          </div>
        </div>

        {/* View Switcher and Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('requisitions')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'requisitions' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Job Openings ({requisitions.length})
            </button>
            <button
              onClick={() => setActiveTab('candidates')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'candidates' 
                  ? 'bg-blue-600 text-white shadow-sm' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Candidate Pipeline ({candidates.length})
            </button>
          </div>

          <button 
            onClick={() => alert('New Job Requisition creation form opened.')}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition self-start sm:self-center"
          >
            <Plus size={15} /> Create Job Requisition
          </button>
        </div>

        {/* Requisitions View */}
        {activeTab === 'requisitions' && (
          <div className="space-y-4">
            {requisitions.map(job => (
              <div key={job.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 hover:shadow-md transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{job.id}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        job.status === 'Offer Stage' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      }`}>
                        {job.status}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                        {job.location}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">{job.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {job.dept} • Hiring Manager: <strong className="text-slate-800">{job.hiringManager}</strong> • <strong className="text-blue-600">{job.openings} Openings</strong>
                    </p>
                  </div>

                  {/* Funnel Pipeline */}
                  <div className="flex items-center gap-2 text-center">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Screening</span>
                      <span className="text-sm font-bold text-slate-800">{job.stageCounts.screening}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Technical</span>
                      <span className="text-sm font-bold text-blue-600">{job.stageCounts.technical}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Manager</span>
                      <span className="text-sm font-bold text-purple-600">{job.stageCounts.manager}</span>
                    </div>
                    <span className="text-slate-300">➔</span>
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 w-16">
                      <span className="text-[10px] text-slate-400 font-bold uppercase block">Offer</span>
                      <span className="text-sm font-bold text-emerald-600">{job.stageCounts.offer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Candidates View */}
        {activeTab === 'candidates' && (
          <div className="space-y-4">
            {candidates.map(can => (
              <div key={can.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                      {can.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-slate-900">{can.name}</h4>
                        <span className="text-xs text-slate-500">({can.currentCompany} • {can.experience})</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{can.role}</p>

                      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
                        <span className="text-purple-700 font-semibold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                          🎯 {can.stage}
                        </span>
                        <span className="text-slate-600">
                          📅 {can.interviewDate}
                        </span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                          Rating: {can.score}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => alert(`Opening interview assessment form for ${can.name}...`)}
                      className="px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
                    >
                      View Notes
                    </button>
                    <button 
                      onClick={() => alert(`Offer creation modal opened for ${can.name}...`)}
                      className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
                    >
                      Release Offer
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </CorporateLayout>
  );
}
