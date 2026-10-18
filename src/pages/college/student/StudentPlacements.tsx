import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Briefcase, CheckCircle2, Clock, Building2, MapPin, 
  Download, ExternalLink, Calendar, Award, UserCheck, 
  FileText, ShieldCheck, Sparkles, Filter
} from 'lucide-react';

export function StudentPlacements() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [filter, setFilter] = useState('All');

  const drives = [
    {
      id: 'PL-2026-001',
      company: 'Google India',
      role: 'Software Engineer - University Graduate',
      ctc: '₹28.5 LPA',
      location: 'Bengaluru / Hyderabad',
      type: 'Super Dream (Tier-1)',
      eligibility: 'CGPA >= 8.0 • Zero Active Backlogs',
      stage: 'Technical Round 2 (System Design)',
      date: '25 Oct 2026 • 10:00 AM (Google Meet)',
      status: 'Shortlisted',
      appliedOn: '12 Sep 2026'
    },
    {
      id: 'PL-2026-002',
      company: 'Microsoft',
      role: 'Cloud Solution Architect',
      ctc: '₹24.0 LPA',
      location: 'Noida / Bengaluru',
      type: 'Super Dream (Tier-1)',
      eligibility: 'CGPA >= 8.0 • CSE/IT Only',
      stage: 'Online Assessment Cleared • Tech Round Awaited',
      date: '28 Oct 2026',
      status: 'Shortlisted',
      appliedOn: '15 Sep 2026'
    },
    {
      id: 'PL-2026-003',
      company: 'Infosys Limited',
      role: 'Specialist Programmer (Power Programmer)',
      ctc: '₹9.5 LPA',
      location: 'Pune / Mysuru',
      type: 'Dream',
      eligibility: 'CGPA >= 7.0',
      stage: 'Offer Letter Issued (Valid till 15 Nov 2026)',
      date: 'Offer Received on 05 Oct 2026',
      status: 'Selected',
      appliedOn: '20 Aug 2026',
      hasOffer: true
    },
    {
      id: 'PL-2026-004',
      company: 'Zomato',
      role: 'Backend Software Engineer',
      ctc: '₹16.0 LPA',
      location: 'Gurugram',
      type: 'Dream',
      eligibility: 'CGPA >= 7.5',
      stage: 'Applications Open • Online Test on 31 Oct',
      date: 'Deadline: 28 Oct 2026',
      status: 'Eligible',
      appliedOn: 'Not Applied'
    },
    {
      id: 'PL-2026-005',
      company: 'Cisco Systems',
      role: 'Software Development Engineer',
      ctc: '₹18.0 LPA',
      location: 'Bengaluru',
      type: 'Super Dream',
      eligibility: 'CGPA >= 8.0',
      stage: 'Pre-Placement Talk on Oct 27',
      date: 'Test: 29 Oct 2026',
      status: 'Applied',
      appliedOn: '18 Oct 2026'
    },
    {
      id: 'PL-2026-006',
      company: 'Cognizant',
      role: 'GenC Next Developer',
      ctc: '₹8.5 LPA',
      location: 'Chennai / Hyderabad',
      type: 'Core IT',
      eligibility: 'CGPA >= 6.5',
      stage: 'HR & Technical Interview Complete',
      date: 'Result Awaited',
      status: 'Under Review',
      appliedOn: '25 Aug 2026'
    }
  ];

  const filtered = drives.filter(d => {
    if (filter === 'All') return true;
    if (filter === 'Shortlisted') return d.status === 'Shortlisted';
    if (filter === 'Selected') return d.status === 'Selected';
    if (filter === 'Eligible') return d.status === 'Eligible' || d.status === 'Applied';
    return true;
  });

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Training & Placements (T&P)" 
      description="Corporate Relations Cell • On-Campus Recruitment Drives • Offer Letters"
    >
      {/* Top Banner Offer Status */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-teal-900/10 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-300" /> 1 Official Offer Secured 🎉
              </span>
              <span className="text-xs text-white/80">Batch 2023-2027</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Placement Season 2026-27</h2>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-xl">
              You are eligible for Tier-1 Super Dream Drives (CTC ₹18 LPA+). Resume verified and approved by Dean Placements.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => alert('Downloading official Infosys Power Programmer Offer Letter PDF...')}
              className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-slate-50 transition-all shadow-md flex items-center gap-2"
            >
              <Download size={14} />
              <span>Download Offer Letter</span>
            </button>
            <button 
              onClick={() => alert('Resume verified by Placement Cell: Shivam_Sharma_Resume_v4.pdf')}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all border border-white/20 flex items-center gap-1.5 backdrop-blur-md"
            >
              <FileText size={14} />
              <span>Verified Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Drives Live</p>
          <h3 className="text-2xl font-black text-slate-900 mt-1">6 Companies</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Google, Microsoft, Infosys, Cisco, Zomato</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Highest CTC Applied</p>
          <h3 className="text-2xl font-black text-[#7c3aed] mt-1">₹28.5 LPA</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Google India (Round 2 on Oct 25)</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Interviews Cleared</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">5 Rounds</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Online Tests: 4/4 Cleared</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Current Offer CTC</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">₹9.5 LPA</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Infosys (Specialist Programmer)</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {['All', 'Shortlisted', 'Selected', 'Eligible'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === tab 
                ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Recruitment Drives Grid */}
      <div className="space-y-4 mb-8">
        {filtered.map((d) => (
          <div 
            key={d.id}
            className={`bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all ${
              d.status === 'Selected' ? 'border-emerald-200 bg-emerald-50/20' :
              d.status === 'Shortlisted' ? 'border-purple-200 bg-purple-50/20' :
              'border-slate-100'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center font-black text-[#7c3aed] text-lg shrink-0">
                  {d.company.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold text-slate-900">{d.company}</h3>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                      {d.type}
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#7c3aed]">{d.role}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="text-left sm:text-right">
                  <span className="text-base font-black text-slate-900 block">{d.ctc}</span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Package (CTC)</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold border text-center ${
                  d.status === 'Selected' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' :
                  d.status === 'Shortlisted' ? 'bg-purple-100 text-purple-800 border-purple-300' :
                  d.status === 'Applied' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                  'bg-slate-100 text-slate-700 border-slate-200'
                }`}>
                  {d.status}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100 text-xs mb-3">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Current Stage</span>
                <span className="font-bold text-slate-800">{d.stage}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Location</span>
                <span className="font-medium text-slate-700">{d.location}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Interview / Deadlines</span>
                <span className="font-medium text-[#7c3aed]">{d.date}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 gap-2">
              <span>Eligibility: <strong className="text-slate-700">{d.eligibility}</strong></span>
              {d.hasOffer ? (
                <button 
                  onClick={() => alert('Viewing Letter of Intent for Infosys Power Programmer...')}
                  className="font-bold text-emerald-700 hover:underline"
                >
                  View Offer Terms & Conditions →
                </button>
              ) : d.status === 'Eligible' ? (
                <button 
                  onClick={() => alert(`Applied for ${d.company} campus drive!`)}
                  className="px-3.5 py-1.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 shadow-sm"
                >
                  Apply Now
                </button>
              ) : (
                <span className="font-medium text-slate-600">Applied on {d.appliedOn}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
