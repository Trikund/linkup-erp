import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  GraduationCap, Building, User, FileText, CheckCircle2, 
  Clock, Download, ExternalLink, GitBranch, Send, Sparkles
} from 'lucide-react';

export function StudentInternships() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [nocModal, setNocModal] = useState(false);
  const [toast, setToast] = useState(false);

  const teamMembers = [
    { name: 'Shivam Sharma (Lead)', roll: '21CS1048', role: 'Full Stack & Distributed System Architecture' },
    { name: 'Aarav Kumar', roll: '21CS1002', role: 'Backend API & Microservices Engineering' },
    { name: 'Priya Verma', roll: '21CS1092', role: 'AI Models & ML Pipeline Integration' },
  ];

  const sprints = [
    { sprint: 'Sprint 1', title: 'Problem Formulation & Literature Survey', status: 'Completed', date: 'Aug 2026', marks: '9.5/10' },
    { sprint: 'Sprint 2', title: 'SRS & High-Level System Architecture', status: 'Completed', date: 'Sep 2026', marks: '9.2/10' },
    { sprint: 'Sprint 3', title: 'Database Schema, Auth & Multi-Tenancy Engine', status: 'Completed', date: 'Oct 2026', marks: '9.6/10' },
    { sprint: 'Sprint 4', title: 'Module Integration & Real-Time Sync Engines', status: 'In Progress', date: 'Nov 2026', marks: 'Underway' },
    { sprint: 'Sprint 5', title: 'Final Defense, Performance Benchmarks & Viva', status: 'Pending', date: 'Dec 2026', marks: '--' },
  ];

  const handleNocSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setNocModal(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Internships & Capstone Projects" 
      description="Major Project Phase-I • Industry Internships • No Objection Certificate (NOC)"
    >
      {/* Toast Alert */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">NOC Application forwarded to Industry Collaboration Cell!</span>
        </div>
      )}

      {/* Capstone Project Overview Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                CS706P • 4 Credits
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Phase-I Active (65% Completed)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              AI-Powered Distributed ERP Architecture with Real-Time Analytics
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => setNocModal(true)}
              className="px-4 py-2 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm"
            >
              Apply for Internship NOC
            </button>
            <button 
              onClick={() => alert('Downloading official Project Approval Certificate signed by Guide...')}
              className="px-3.5 py-2 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200 transition-colors inline-flex items-center gap-1.5"
            >
              <Download size={14} />
              <span>Project Synopsis</span>
            </button>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed mb-6">
          A multi-tenant, cloud-native enterprise resource planning system with microservices architecture, featuring automated schedule conflict resolution, biometric attendance stream pipelines, and holistic student intelligence analytics.
        </p>

        {/* Guides & Mentors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Internal Faculty Guide</span>
            <p className="font-bold text-slate-800 text-sm">Dr. Ankit Sharma</p>
            <p className="text-slate-500 text-xs mt-0.5">Professor & Head, Department of Computer Science & Engineering</p>
          </div>
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
            <span className="text-[10px] text-slate-400 uppercase font-bold block mb-1">Industry Co-Mentor (TechCorp Labs)</span>
            <p className="font-bold text-slate-800 text-sm">Mr. Rajesh Nair</p>
            <p className="text-slate-500 text-xs mt-0.5">Staff Cloud Solutions Architect • Bangalore Innovation Center</p>
          </div>
        </div>
      </div>

      {/* Project Team & Sprint Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Sprint Timeline */}
        <div className="lg:col-span-2 bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-5">Sprint Evaluation & Milestone Timeline</h3>
          <div className="space-y-3.5">
            {sprints.map((s, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 text-xs"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs ${
                    s.status === 'Completed' ? 'bg-emerald-100 text-emerald-700' :
                    s.status === 'In Progress' ? 'bg-purple-100 text-[#7c3aed] animate-pulse' :
                    'bg-slate-200 text-slate-500'
                  }`}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{s.title}</h4>
                    <p className="text-slate-400 text-[11px]">{s.sprint} • {s.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-slate-700">{s.marks}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    s.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                    s.status === 'In Progress' ? 'bg-purple-50 text-[#7c3aed] border border-purple-200' :
                    'bg-slate-100 text-slate-500 border border-slate-200'
                  }`}>
                    {s.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Members */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4">Project Team Members</h3>
          <div className="space-y-3">
            {teamMembers.map((m, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <p className="font-bold text-slate-800">{m.name}</p>
                <p className="font-mono text-[#7c3aed] text-[11px]">{m.roll}</p>
                <p className="text-slate-500 text-[11px] mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NOC Modal */}
      {nocModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100 text-xs">
            <h3 className="text-base font-bold text-slate-900 mb-1">Apply for Internship NOC Certificate</h3>
            <p className="text-slate-500 mb-4">Required for 8th Semester Full-Time Industry Internships (Jan - June 2027)</p>

            <form onSubmit={handleNocSubmit} className="space-y-3.5">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Company / Organization Name</label>
                <input type="text" required defaultValue="Google India Pvt. Ltd." className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Role / Designation</label>
                  <input type="text" required defaultValue="Software Engineer Intern" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Stipend (per month)</label>
                  <input type="text" required defaultValue="₹1,25,000" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Start Date</label>
                  <input type="date" required defaultValue="2027-01-05" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">End Date</label>
                  <input type="date" required defaultValue="2027-06-30" className="w-full p-2.5 rounded-xl border border-slate-200 font-medium" />
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Offer Letter PDF Attachment</label>
                <input type="file" required className="w-full text-slate-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-xl file:border-0 file:bg-purple-50 file:text-[#7c3aed] file:font-bold" />
              </div>
              <div className="pt-3 border-t flex justify-end gap-2">
                <button type="button" onClick={() => setNocModal(false)} className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
                <button type="submit" className="px-5 py-2 font-bold bg-[#7c3aed] text-white hover:bg-purple-700 rounded-xl shadow-md">Submit Request</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
