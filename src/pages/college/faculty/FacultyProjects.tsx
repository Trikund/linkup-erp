import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  GraduationCap, Users, Clock, CheckCircle2, Code, 
  ExternalLink, Download, FileText, Check, Award, 
  FolderGit2, Sparkles, AlertCircle
} from 'lucide-react';

export function FacultyProjects() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);

  const capstoneProjects = [
    {
      teamId: 'TEAM-04',
      title: 'LinkUp ERP: AI-Driven Multi-Tenant Campus Management System',
      leader: 'Shivam Sharma (21CS1048)',
      members: ['Shivam Sharma', 'Priya Sundaram', 'Kunal Singhal', 'Megha Nair'],
      domain: 'Cloud Architecture & Enterprise AI',
      techStack: 'React 18, TypeScript, TailwindCSS, FastAPI, PostgreSQL, Docker',
      progress: 75,
      currentMilestone: 'Sprint 3: Role-based Access Control & Exam Engine Integration',
      nextReview: '24 Oct 2026, 02:30 PM',
      guideRemarks: 'Exceptional UI UX execution with clean enterprise architecture. Ready for internal hackathon showcase.'
    },
    {
      teamId: 'TEAM-01',
      title: 'Autonomous Drone Fleet Path Planning via Deep Q-Learning (DQL)',
      leader: 'Divya Khurana (21CS1092)',
      members: ['Divya Khurana', 'Aarav Gupta', 'Tarun Sethi', 'Ritu Mehra'],
      domain: 'Autonomous Robotics & Reinforcement Learning',
      techStack: 'PyTorch, ROS 2, Gazebo Simulation, Python, OpenCV',
      progress: 70,
      currentMilestone: 'Obstacle avoidance in dynamic urban environments',
      nextReview: '25 Oct 2026, 03:00 PM',
      guideRemarks: 'Simulation models validated. Suggested testing under high wind velocity simulations.'
    },
    {
      teamId: 'TEAM-12',
      title: 'Transformer-based Multimodal Misinformation Detection in Indic Languages',
      leader: 'Ananya Roy (21CS1034)',
      members: ['Ananya Roy', 'Pooja Bhat', 'Samar Verma', 'Gaurav Sen'],
      domain: 'Natural Language Processing & Computer Vision',
      techStack: 'HuggingFace, BERT, CLIP, FastAPI, Next.js',
      progress: 80,
      currentMilestone: 'IEEE conference draft manuscript under peer review',
      nextReview: '27 Oct 2026, 11:00 AM',
      guideRemarks: 'Paper draft accepted at IEEE INDICON 2026. Advised to complete ablation experiments.'
    },
    {
      teamId: 'TEAM-08',
      title: 'Decentralized Electronic Health Records via IPFS & Smart Contracts',
      leader: 'Vikramaditya Rao (21CS1066)',
      members: ['Vikramaditya Rao', 'Neha Singh', 'Arjun Saxena', 'Kavita Jha'],
      domain: 'Blockchain & Cryptography',
      techStack: 'Solidity, Ethereum, IPFS, Web3.js, React',
      progress: 65,
      currentMilestone: 'Gas optimization and zero-knowledge proof verification',
      nextReview: '29 Oct 2026, 02:00 PM',
      guideRemarks: 'Gas fees in testnet are high. Re-architect contract struct packing.'
    },
    {
      teamId: 'TEAM-15',
      title: 'Edge TPU Powered Agricultural Plant Disease Classification',
      leader: 'Aditya Kashyap (21CS1019)',
      members: ['Aditya Kashyap', 'Siddharth Jain', 'Mansi Sharma', 'Deepak Goyal'],
      domain: 'Embedded IoT & Edge AI',
      techStack: 'TensorFlow Lite, Coral Edge TPU, Raspberry Pi 4, Python',
      progress: 60,
      currentMilestone: 'Hardware bench testing and model quantization',
      nextReview: '30 Oct 2026, 10:30 AM',
      guideRemarks: 'Model accuracy drops after 8-bit integer quantization. Retrain with QAT.'
    },
    {
      teamId: 'TEAM-19',
      title: 'Federated Learning for Privacy-Preserving Traffic Flow Optimization',
      leader: 'Rahul Verma (21CS1045)',
      members: ['Rahul Verma', 'Amit Patel', 'Naveen Reddy', 'Preeti Rao'],
      domain: 'Distributed Machine Learning & Smart Cities',
      techStack: 'Flower FL Framework, PyTorch, SUMO Simulator',
      progress: 55,
      currentMilestone: 'Client-server aggregation latency benchmarking',
      nextReview: '31 Oct 2026, 04:00 PM',
      guideRemarks: 'Team lagging slightly in milestone submission. Weekly check-in mandated.'
    }
  ];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Major Capstone Projects" 
      description="CS706P Major Project Guideship • 6 project batches • Industry 4.0 & Research Projects."
    >
      {/* Top Banner Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Guided Teams</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">6 Batches</p>
          <p className="text-[10px] text-[#7c3aed] font-semibold">24 Final Year Engineers</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Average Completion</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">67.5%</p>
          <p className="text-[10px] text-slate-500">Sprint 3 Phase Active</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Target Publications</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">3 Papers</p>
          <p className="text-[10px] text-purple-700 font-semibold">IEEE / Scopus Indexed</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Next Review Jury</p>
          <p className="text-xl font-black text-amber-600 mt-0.5">24 Oct</p>
          <p className="text-[10px] text-amber-700 font-semibold">Mid-Term External Evaluation</p>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {capstoneProjects.map((p) => (
          <div key={p.teamId} className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                    {p.teamId}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {p.domain}
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
                    Guide: Dr. Ankit Sharma
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-800">{p.title}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Team Leader: <strong className="text-slate-800">{p.leader}</strong> • Members: {p.members.join(', ')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
                  <FileText size={14} />
                  <span>Synopsis PDF</span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition-all">
                  <CheckCircle2 size={14} />
                  <span>Sprint Review Marks</span>
                </button>
              </div>
            </div>

            {/* Progress & Tech Stack Details */}
            <div className="py-4 grid grid-cols-1 md:grid-cols-3 gap-5 border-b border-slate-100">
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-slate-600">Sprint Progress</span>
                  <span className="text-[#7c3aed]">{p.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#7c3aed] h-full rounded-full transition-all" style={{ width: `${p.progress}%` }} />
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">Next Demo: {p.nextReview}</p>
              </div>

              <div className="md:col-span-2">
                <p className="text-[10px] font-bold uppercase text-slate-400 mb-1">Architecture & Tech Stack</p>
                <p className="text-xs font-mono font-medium text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  {p.techStack}
                </p>
              </div>
            </div>

            {/* Milestone & Guide Feedback */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Current Sprint:</span>
                <span className="font-semibold text-slate-800">{p.currentMilestone}</span>
              </div>
              <div className="italic text-slate-500 bg-purple-50/50 px-3 py-1.5 rounded-xl border border-purple-100 text-[11px]">
                "{p.guideRemarks}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
