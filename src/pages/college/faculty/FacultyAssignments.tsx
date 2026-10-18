import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileText, Clock, Users, CheckCircle2, AlertCircle, 
  Download, Plus, Search, Filter, ExternalLink, Code, 
  GitBranch, Check, Save, ArrowRight
} from 'lucide-react';

interface SubmissionItem {
  id: string;
  studentName: string;
  rollNo: string;
  submittedAt: string;
  status: 'Submitted' | 'Graded' | 'Late';
  repoUrl?: string;
  fileSize: string;
  similarity: number;
  score: number | null;
  maxScore: number;
  remarks: string;
}

export function FacultyAssignments() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [activeCourse, setActiveCourse] = useState('CS701');
  const [selectedSub, setSelectedSub] = useState<SubmissionItem | null>(null);
  const [gradeInput, setGradeInput] = useState<string>('');
  const [remarksInput, setRemarksInput] = useState<string>('');
  const [gradedSuccess, setGradedSuccess] = useState(false);

  const assignmentsList = [
    {
      id: 'A1',
      courseCode: 'CS701',
      title: 'Lab Practical 3: Convolutional Neural Networks (CNN) on CIFAR-10',
      type: 'Lab Implementation',
      deadline: '22 Oct 2026, 11:59 PM',
      totalSubmitted: 68,
      totalExpected: 72,
      pendingGrading: 45,
      maxMarks: 30
    },
    {
      id: 'A2',
      courseCode: 'CS703',
      title: 'Assignment 2: Distributed Query Optimization & 2PC Protocols',
      type: 'Theory & Problem Set',
      deadline: '26 Oct 2026, 11:59 PM',
      totalSubmitted: 52,
      totalExpected: 70,
      pendingGrading: 18,
      maxMarks: 20
    },
    {
      id: 'A3',
      courseCode: 'CS706P',
      title: 'Capstone Sprint 2: System Architecture & DB Normalization',
      type: 'Project Milestone',
      deadline: '24 Oct 2026, 05:00 PM',
      totalSubmitted: 6,
      totalExpected: 6,
      pendingGrading: 6,
      maxMarks: 50
    }
  ];

  const initialSubmissions: SubmissionItem[] = [
    {
      id: 'SUB-101',
      studentName: 'Shivam Sharma',
      rollNo: '21CS1048',
      submittedAt: 'Today, 09:15 AM',
      status: 'Submitted',
      repoUrl: 'https://github.com/shivam/cifar10-cnn-classifier',
      fileSize: '3.4 MB (Jupyter + PDF)',
      similarity: 6,
      score: null,
      maxScore: 30,
      remarks: ''
    },
    {
      id: 'SUB-102',
      studentName: 'Priya Sundaram',
      rollNo: '21CS1012',
      submittedAt: 'Yesterday, 11:40 PM',
      status: 'Graded',
      repoUrl: 'https://github.com/priya/ml-cnn-experiments',
      fileSize: '2.8 MB (ZIP)',
      similarity: 4,
      score: 29,
      maxScore: 30,
      remarks: 'Excellent architecture design and hyperparameter tuning analysis.'
    },
    {
      id: 'SUB-103',
      studentName: 'Rahul Verma',
      rollNo: '21CS1045',
      submittedAt: '18 Oct 2026, 06:20 PM',
      status: 'Submitted',
      repoUrl: 'https://github.com/rahulv/cnn-submission',
      fileSize: '4.1 MB (PDF)',
      similarity: 12,
      score: null,
      maxScore: 30,
      remarks: ''
    },
    {
      id: 'SUB-104',
      studentName: 'Ananya Roy',
      rollNo: '21CS1034',
      submittedAt: '18 Oct 2026, 04:10 PM',
      status: 'Graded',
      repoUrl: 'https://github.com/ananya/cifar10-resnet',
      fileSize: '1.9 MB (PDF)',
      similarity: 5,
      score: 28,
      maxScore: 30,
      remarks: 'Very neat test accuracy graphs.'
    }
  ];

  const [submissions, setSubmissions] = useState<SubmissionItem[]>(initialSubmissions);

  const handleOpenGradeModal = (sub: SubmissionItem) => {
    setSelectedSub(sub);
    setGradeInput(sub.score !== null ? String(sub.score) : '');
    setRemarksInput(sub.remarks || '');
    setGradedSuccess(false);
  };

  const handleSaveGrade = () => {
    if (!selectedSub) return;
    const num = Number(gradeInput);
    if (isNaN(num) || num < 0 || num > selectedSub.maxScore) {
      alert(`Please enter a valid mark between 0 and ${selectedSub.maxScore}`);
      return;
    }

    setSubmissions(submissions.map(s => 
      s.id === selectedSub.id 
        ? { ...s, score: num, remarks: remarksInput, status: 'Graded' } 
        : s
    ));
    setGradedSuccess(true);
    setTimeout(() => {
      setSelectedSub(null);
      setGradedSuccess(false);
    }, 1500);
  };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Assignments & Labs" 
      description="Manage assignments, grade student code and lab manuals, evaluate plagiarism reports, and enter rubric marks."
    >
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Pending Evaluations</p>
          <p className="text-2xl font-black text-amber-600 mt-1">45 Submissions</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Across CS701, CS703 & CS706P</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Active Tasks</p>
          <p className="text-2xl font-black text-[#7c3aed] mt-1">3 Tasks Published</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Odd Sem 2026-27 Continuous Assessment</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase">Average Batch Turnitin Score</p>
          <p className="text-2xl font-black text-emerald-600 mt-1">7.2%</p>
          <p className="text-[11px] text-slate-500 mt-0.5">Well within 15% academic threshold</p>
        </div>
      </div>

      {/* Course Assignments List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-8">
        {assignmentsList.map((a) => (
          <div
            key={a.id}
            onClick={() => setActiveCourse(a.courseCode)}
            className={`cursor-pointer rounded-3xl p-5 border transition-all ${
              activeCourse === a.courseCode
                ? 'bg-purple-50/50 border-[#7c3aed] shadow-sm ring-1 ring-[#7c3aed]'
                : 'bg-white border-slate-100 hover:border-slate-200 shadow-sm'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs font-black px-2 py-0.5 bg-white text-[#7c3aed] border border-purple-200 rounded-lg">
                {a.courseCode}
              </span>
              <span className="text-[11px] font-bold text-slate-500">
                Max: {a.maxMarks} Marks
              </span>
            </div>
            <h4 className="text-sm font-bold text-slate-800 line-clamp-2">{a.title}</h4>
            <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-600">
              <span>Submitted: <strong className="text-slate-800">{a.totalSubmitted}/{a.totalExpected}</strong></span>
              <span className="font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded-full text-[10px]">
                {a.pendingGrading} to grade
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Submissions Inbox for Selected Assignment */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <h3 className="text-base font-bold text-slate-800">
              Student Submissions Inbox • {activeCourse}
            </h3>
            <p className="text-xs text-slate-500">Review code files, run automated plagiarism checks, and assign continuous assessment marks.</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
              <Download size={14} />
              <span>Download All (ZIP)</span>
            </button>
            <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm">
              <Plus size={14} />
              <span>New Assignment</span>
            </button>
          </div>
        </div>

        {/* Submissions Table */}
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Submitted File / Repo</th>
                <th className="py-3 px-4">Submission Time</th>
                <th className="py-3 px-4">Plagiarism</th>
                <th className="py-3 px-4">Score</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {submissions.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-3 px-4">
                    <span className="font-bold text-slate-800 block">{s.studentName}</span>
                    <span className="text-slate-400 font-mono text-[11px]">{s.rollNo}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[11px] text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {s.fileSize}
                      </span>
                      {s.repoUrl && (
                        <a 
                          href={s.repoUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[#7c3aed] hover:text-purple-800 inline-flex items-center gap-1 font-bold text-[11px]"
                        >
                          <GitBranch size={13} />
                          <span>Code</span>
                        </a>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4 text-slate-500">{s.submittedAt}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-bold ${
                      s.similarity <= 10 ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                    }`}>
                      {s.similarity}% match
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {s.score !== null ? (
                      <span className="font-black text-slate-800 text-sm">
                        {s.score} <span className="text-xs text-slate-400">/ {s.maxScore}</span>
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleOpenGradeModal(s)}
                      className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-[#7c3aed] hover:text-white text-slate-700 text-xs font-bold transition-all"
                    >
                      {s.score !== null ? 'Re-grade' : 'Grade'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Grading Modal */}
      {selectedSub && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-800">Grade Submission</h4>
                <p className="text-xs text-slate-500">{selectedSub.studentName} ({selectedSub.rollNo})</p>
              </div>
              <button onClick={() => setSelectedSub(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            {gradedSuccess ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check size={24} />
                </div>
                <h5 className="font-bold text-slate-800">Marks Saved!</h5>
                <p className="text-xs text-slate-500 mt-1">Grade and feedback committed successfully.</p>
              </div>
            ) : (
              <div className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Marks Awarded (Out of {selectedSub.maxScore})
                  </label>
                  <input
                    type="number"
                    max={selectedSub.maxScore}
                    min={0}
                    value={gradeInput}
                    onChange={(e) => setGradeInput(e.target.value)}
                    placeholder={`e.g. ${selectedSub.maxScore - 2}`}
                    className="w-full text-base font-bold px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">
                    Rubric Evaluation Remarks & Feedback
                  </label>
                  <textarea
                    rows={3}
                    value={remarksInput}
                    onChange={(e) => setRemarksInput(e.target.value)}
                    placeholder="Provide constructive feedback regarding code quality, modularity, edge cases..."
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setSelectedSub(null)}
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveGrade}
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Save size={14} />
                    <span>Save Marks</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
