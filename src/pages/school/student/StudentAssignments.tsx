import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { ClipboardList, Upload, CheckCircle2, Clock, FileText, ArrowRight, Star } from 'lucide-react';

export function StudentAssignments() {
  const user = USERS.student;
  const [activeTab, setActiveTab] = useState<'pending' | 'submitted' | 'graded'>('pending');

  const assignments = [
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Algebra & Matrices Case Study Worksheet',
      due: '12 Oct 2026',
      daysLeft: '2 days left',
      totalMarks: 25,
      weightage: '10% of Term Grade',
      status: 'pending',
      description: 'Comprehensive problem set covering determinants, matrix multiplication, and system of linear equations in three variables.'
    },
    {
      id: 2,
      subject: 'Physics',
      title: 'Laboratory Term Report: Optics & Focal Length',
      due: '14 Oct 2026',
      daysLeft: '4 days left',
      totalMarks: 20,
      weightage: '15% Practical Weightage',
      status: 'pending',
      description: 'Document experimental findings from convex lens bench experiments, calculating mean focal lengths and error percentage.'
    },
    {
      id: 3,
      subject: 'Computer Science',
      title: 'Frontend Basics: Interactive Responsive Calculator',
      due: '08 Oct 2026',
      submittedDate: '07 Oct 2026',
      totalMarks: 20,
      status: 'submitted',
      description: 'Build an accessible web calculator supporting keyboard shortcuts, scientific functions, and light/dark theme toggle.'
    },
    {
      id: 4,
      subject: 'English Literature',
      title: 'Comparative Essay: Themes of Ambition in Shakespeare',
      due: '04 Oct 2026',
      submittedDate: '03 Oct 2026',
      totalMarks: 30,
      score: '28 / 30',
      grade: 'A+',
      status: 'graded',
      teacherFeedback: 'Exceptional analytical depth. Excellent citation of primary dramatic text. Minor punctuation corrections noted in margin.',
      description: '1500-word critical evaluation comparing Macbeth with classical Greek tragic heroes.'
    },
    {
      id: 5,
      subject: 'Social Sciences',
      title: 'Research Project: United Nations Peacekeeping Missions',
      due: '28 Sep 2026',
      submittedDate: '27 Sep 2026',
      totalMarks: 25,
      score: '24 / 25',
      grade: 'A',
      status: 'graded',
      teacherFeedback: 'Well structured research paper with accurate timeline maps and statistical case studies.',
      description: 'Detailed analysis of post-1990 UN peacekeeping operations in Africa and Southeast Asia.'
    }
  ];

  const currentList = assignments.filter(a => a.status === activeTab);

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Course Assignments"
      description="View project briefs, submit assignment files, track deadlines, and review teacher grades."
    >
      <div className="space-y-6">

        {/* Top Tab Bar & Stats */}
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'pending'
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Pending ({assignments.filter(a => a.status === 'pending').length})
            </button>
            <button
              onClick={() => setActiveTab('submitted')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'submitted'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Under Review ({assignments.filter(a => a.status === 'submitted').length})
            </button>
            <button
              onClick={() => setActiveTab('graded')}
              className={`px-5 py-2.5 rounded-xl text-sm font-bold transition-all ${
                activeTab === 'graded'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Graded & Scored ({assignments.filter(a => a.status === 'graded').length})
            </button>
          </div>

          <div className="text-sm text-slate-500">
            Average Score: <strong className="text-slate-900 font-bold text-base">94.5% (A+)</strong>
          </div>
        </div>

        {/* Assignments Cards */}
        <div className="space-y-4">
          {currentList.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-200 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="space-y-2.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      {item.subject}
                    </span>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                      Total: {item.totalMarks} Marks
                    </span>
                    {item.weightage && (
                      <span className="text-sm text-slate-400">• {item.weightage}</span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">{item.description}</p>

                  {/* If Graded: Show teacher remarks */}
                  {item.teacherFeedback && (
                    <div className="p-4 bg-emerald-50/70 border border-emerald-200/80 rounded-2xl my-2 text-sm">
                      <p className="font-bold text-emerald-900 flex items-center gap-2 mb-1">
                        <Star size={16} className="text-emerald-600" /> Teacher Evaluation & Feedback:
                      </p>
                      <p className="text-emerald-800 italic">"{item.teacherFeedback}"</p>
                    </div>
                  )}

                  <div className="pt-2 flex flex-wrap items-center gap-5 text-sm text-slate-500">
                    {item.status === 'pending' ? (
                      <span className="font-bold text-amber-600 flex items-center gap-1.5">
                        <Clock size={16} /> Deadline: {item.due} ({item.daysLeft})
                      </span>
                    ) : item.status === 'submitted' ? (
                      <span className="text-blue-600 font-semibold flex items-center gap-1.5">
                        <Clock size={16} /> Submitted on {item.submittedDate} • Evaluation in progress
                      </span>
                    ) : (
                      <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 size={16} /> Evaluated & Verified on portal
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Action / Score Column */}
                <div className="shrink-0 flex flex-col items-end justify-between self-stretch">
                  {item.status === 'pending' ? (
                    <button className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold shadow-sm shadow-blue-500/20 transition-all flex items-center gap-2">
                      <Upload size={16} /> Submit Solution
                    </button>
                  ) : item.status === 'submitted' ? (
                    <span className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 text-sm font-semibold flex items-center gap-2">
                      <Clock size={16} /> In Review
                    </span>
                  ) : (
                    <div className="text-right">
                      <span className="text-3xl font-black text-emerald-600">{item.score}</span>
                      <p className="text-sm font-bold text-slate-500 mt-0.5">Grade: {item.grade}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SchoolLayout>
  );
}
