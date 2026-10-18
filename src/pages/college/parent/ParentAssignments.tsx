import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileText, CheckCircle2, Clock, Award, 
  ExternalLink, Download, AlertCircle, Sparkles
} from 'lucide-react';

export function ParentAssignments() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const assignments = [
    {
      course: 'CS706P • Major Capstone Project',
      title: 'Capstone Sprint 2: Architecture & DB Normalization',
      dueDate: '24 Oct 2026',
      submittedDate: '18 Oct 2026',
      status: 'Graded',
      score: '46 / 50',
      feedback: 'Excellent modular structure and microservices architecture. Sprint approved by Guide Dr. Ankit Sharma.'
    },
    {
      course: 'CS701 • Machine Learning',
      title: 'Lab Practical 3: Convolutional Neural Networks on CIFAR-10',
      dueDate: '22 Oct 2026',
      submittedDate: 'Today, 09:15 AM',
      status: 'Under Evaluation',
      score: 'Pending',
      feedback: 'Code submitted via GitHub repository with 94.2% test accuracy report.'
    },
    {
      course: 'CS703 • Advanced DBMS',
      title: 'Assignment 2: Distributed Query Optimization & 2PC',
      dueDate: '16 Oct 2026',
      submittedDate: '15 Oct 2026',
      status: 'Graded',
      score: '18 / 20',
      feedback: 'Accurate cost calculation equations for semi-join algorithms.'
    },
    {
      course: 'CS702 • Cloud Computing',
      title: 'Lab Experiment 4: Kubernetes Cluster & Helm Deployment',
      dueDate: '12 Oct 2026',
      submittedDate: '11 Oct 2026',
      status: 'Graded',
      score: '28 / 30',
      feedback: 'Cluster ingress configuration working seamlessly.'
    }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Assignments & Labs" 
      description="Continuous internal assessment submissions, lab practical manuals, and capstone project progress."
    >
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Total Submissions</p>
          <p className="text-2xl font-black text-slate-800 mt-1">12 / 12 Delivered</p>
          <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">100% On-time submission record</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Average Continuous Score</p>
          <p className="text-2xl font-black text-[#7c3aed] mt-1">91.4%</p>
          <p className="text-[11px] text-purple-700 font-semibold mt-0.5">Top decile in CSE Department</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Capstone Project Lab</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">Sprint 3 Active</p>
          <p className="text-[11px] text-slate-500 mt-0.5">LinkUp ERP Enterprise Architecture</p>
        </div>
      </div>

      {/* Task List Cards */}
      <div className="space-y-4">
        {assignments.map((item, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full mb-1 inline-block">
                  {item.course}
                </span>
                <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
                <p className="text-xs text-slate-400 mt-0.5">Submitted: {item.submittedDate} • Due Date: {item.dueDate}</p>
              </div>

              <div className="text-right">
                <span className={`px-3 py-1 rounded-full text-xs font-bold inline-block ${
                  item.status === 'Graded' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                }`}>
                  {item.status}
                </span>
                {item.score !== 'Pending' && (
                  <p className="text-base font-black text-slate-900 mt-1">Score: {item.score}</p>
                )}
              </div>
            </div>

            <div className="pt-3 text-xs text-slate-600 bg-slate-50/50 p-3 rounded-2xl border border-slate-100 mt-3">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Instructor Rubric Evaluation</span>
              <p className="italic text-slate-700 leading-relaxed">"{item.feedback}"</p>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
