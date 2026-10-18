import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileText, Clock, CheckCircle2, Upload, ExternalLink, 
  GitBranch, AlertCircle, X, Download, Filter, MessageSquare
} from 'lucide-react';

export function StudentAssignments() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [filter, setFilter] = useState('All');
  const [selectedAssignment, setSelectedAssignment] = useState<any>(null);
  const [submitToast, setSubmitToast] = useState(false);

  const assignments = [
    {
      id: 'ASG-CS701-03',
      courseCode: 'CS701',
      courseName: 'Machine Learning & Neural Networks',
      title: 'Lab 3: CNN Implementation in PyTorch for CIFAR-10 Classification',
      deadline: '24 Oct 2026 • 11:59 PM',
      faculty: 'Dr. Ankit Sharma',
      maxMarks: 25,
      status: 'Pending',
      description: 'Implement a 5-layer Convolutional Neural Network from scratch in PyTorch. Include data augmentation, learning rate scheduler, confusion matrix and validation accuracy report.',
      rubric: 'Code Quality (10m), Validation Loss Graph (5m), Analysis Report (10m)'
    },
    {
      id: 'ASG-CS702-02',
      courseCode: 'CS702',
      courseName: 'Cloud Computing Architecture',
      title: 'Lab 2: Automated Multi-Tier Deployment using Terraform & AWS ECS',
      deadline: '26 Oct 2026 • 05:00 PM',
      faculty: 'Prof. Vikas Singh',
      maxMarks: 20,
      status: 'Pending',
      description: 'Write modular Terraform HCL scripts to provision VPC with 2 public & 2 private subnets, ALB, and an ECS Fargate cluster hosting a containerized Node.js backend.',
      rubric: 'HCL Code (8m), Architecture Diagram (4m), Live AWS URL (8m)'
    },
    {
      id: 'ASG-CS703-04',
      courseCode: 'CS703',
      courseName: 'Advanced Database Systems',
      title: 'Lab 4: Query Execution Plan & B-Tree Index Optimization',
      deadline: '28 Oct 2026 • 11:59 PM',
      faculty: 'Prof. Sunita Rao',
      maxMarks: 20,
      status: 'Pending',
      description: 'Analyze query execution plans on a 1-million row dataset in PostgreSQL. Compare sequential scans vs clustered B-tree index scans. Record execution times with EXPLAIN ANALYZE.',
      rubric: 'Benchmarking Data (10m), Query Scripts (5m), Report (5m)'
    },
    {
      id: 'ASG-CS704-03',
      courseCode: 'CS704',
      courseName: 'Information & Cyber Security',
      title: 'Lab 3: Hybrid Cryptosystem using RSA-2048 and AES-GCM',
      deadline: '02 Nov 2026 • 11:59 PM',
      faculty: 'Dr. R. K. Verma',
      maxMarks: 25,
      status: 'Pending',
      description: 'Design and simulate a secure file sharing utility. Generate 2048-bit RSA keys for session key exchange, and encrypt multi-megabyte payloads using AES-GCM 256.',
      rubric: 'Python Implementation (15m), Security Vulnerability Analysis (10m)'
    },
    {
      id: 'ASG-CS706P-01',
      courseCode: 'CS706P',
      courseName: 'Major Capstone Project Phase-I',
      title: 'Sprint 1: Software Requirements Specification (SRS) & System Architecture',
      deadline: '10 Oct 2026 (Submitted on 09 Oct)',
      faculty: 'Project Review Panel',
      maxMarks: 30,
      status: 'Graded',
      marksObtained: 28,
      feedback: 'Excellent IEEE standard formatting. Architecture diagram is comprehensive. Ensure JWT authentication flow includes token refresh rotation.',
      githubLink: 'https://github.com/shivam-ee74/linkup-erp'
    },
    {
      id: 'ASG-CS701-02',
      courseCode: 'CS701',
      courseName: 'Machine Learning',
      title: 'Lab 2: Multi-Variable Linear Regression & Gradient Descent Optimization',
      deadline: '04 Oct 2026 (Submitted on 03 Oct)',
      faculty: 'Dr. Ankit Sharma',
      maxMarks: 20,
      status: 'Graded',
      marksObtained: 19,
      feedback: 'Clean vectorization using NumPy. Good visualization of cost function convergence contour plots.',
      githubLink: 'https://github.com/shivam-ee74/ml-labs-cs701'
    },
    {
      id: 'ASG-CS702-01',
      courseCode: 'CS702',
      courseName: 'Cloud Computing',
      title: 'Lab 1: Dockerizing Microservices & Container Orchestration with Compose',
      deadline: '28 Sep 2026 (Submitted on 27 Sep)',
      faculty: 'Prof. Vikas Singh',
      maxMarks: 20,
      status: 'Graded',
      marksObtained: 20,
      feedback: 'Perfect score. Dockerfile multistage build reduced image size from 840MB to 72MB.',
      githubLink: 'https://github.com/shivam-ee74/cloud-microservices'
    }
  ];

  const filtered = assignments.filter(a => {
    if (filter === 'All') return true;
    return a.status === filter;
  });

  const handleSubmitAssignment = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedAssignment(null);
    setSubmitToast(true);
    setTimeout(() => setSubmitToast(false), 4000);
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Assignments & Lab Tasks" 
      description="Semester VII Practical Submissions • GitHub Repositories • Graded Lab Marks"
    >
      {/* Toast Notification */}
      {submitToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-2 animate-bounce">
          <CheckCircle2 size={18} />
          <span className="text-sm font-bold">Assignment submitted successfully! Notified course faculty.</span>
        </div>
      )}

      {/* Top Counters */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Pending Tasks</p>
          <h3 className="text-2xl font-black text-amber-600 mt-1">4 Submissions Due</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Nearest deadline: Oct 24 (PyTorch CNN)</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Graded Submissions</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">3 Completed</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Average Scored: 95.7% (67/70 marks)</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Coursework Weight</p>
          <h3 className="text-2xl font-black text-[#7c3aed] mt-1">25% Internal</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Counts directly into End-Semester SGPA</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mb-6">
        {['All', 'Pending', 'Graded'].map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === t 
                ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t} ({assignments.filter(a => t === 'All' ? true : a.status === t).length})
          </button>
        ))}
      </div>

      {/* Assignments List */}
      <div className="space-y-4 mb-8">
        {filtered.map((item) => (
          <div 
            key={item.id}
            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                    {item.courseCode}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{item.courseName}</span>
                </div>
                <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                  item.status === 'Pending' 
                    ? 'bg-amber-50 text-amber-700 border-amber-200' 
                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                }`}>
                  {item.status}
                </span>
                {item.status === 'Pending' ? (
                  <button 
                    onClick={() => setSelectedAssignment(item)}
                    className="px-4 py-2 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-sm"
                  >
                    Submit Work →
                  </button>
                ) : (
                  <div className="text-right">
                    <span className="text-sm font-black text-emerald-600">
                      {item.marksObtained} / {item.maxMarks}
                    </span>
                    <span className="text-[10px] text-slate-400 block font-bold">MARKS GRADED</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-rose-600 font-bold">
                  <Clock size={13} />
                  {item.deadline}
                </span>
                <span>Faculty: <strong className="text-slate-700">{item.faculty}</strong></span>
                <span>Max Marks: <strong className="text-slate-700">{item.maxMarks}</strong></span>
              </div>

              {item.githubLink && (
                <a 
                  href={item.githubLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7c3aed] hover:underline"
                >
                  <GitBranch size={13} />
                  <span>View Submitted Code Repository</span>
                  <ExternalLink size={11} />
                </a>
              )}
            </div>

            {item.feedback && (
              <div className="mt-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700">
                <MessageSquare size={15} className="text-[#7c3aed] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Faculty Review Feedback: </strong>
                  <span>{item.feedback}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submission Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
              <div>
                <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
                  {selectedAssignment.courseCode}
                </span>
                <h3 className="text-base font-bold text-slate-900 mt-1">{selectedAssignment.title}</h3>
              </div>
              <button onClick={() => setSelectedAssignment(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSubmitAssignment} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">GitHub / GitLab Repository URL</label>
                <div className="relative">
                  <GitBranch size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="url" 
                    required 
                    defaultValue="https://github.com/shivam-ee74/college-lab-submissions"
                    placeholder="https://github.com/username/project-repo" 
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Laboratory Report / Documentation PDF</label>
                <input 
                  type="file" 
                  required
                  className="w-full text-slate-500 font-medium file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-purple-50 file:text-[#7c3aed] hover:file:bg-purple-100" 
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Remarks / Key Highlights for Evaluator</label>
                <textarea 
                  rows={3} 
                  placeholder="Mention test accuracy, environment used, or special considerations..."
                  defaultValue="Completed PyTorch training script with ResNet backbone and test accuracy curves included in PDF report."
                  className="w-full p-3 rounded-xl border border-slate-200 font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
                <button 
                  type="button" 
                  onClick={() => setSelectedAssignment(null)}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:bg-slate-100 font-bold"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-5 py-2 rounded-xl bg-[#7c3aed] text-white font-bold hover:bg-purple-700 shadow-md shadow-purple-500/20"
                >
                  Confirm & Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
