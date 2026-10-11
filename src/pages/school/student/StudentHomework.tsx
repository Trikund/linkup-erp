import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { NotebookPen, Clock, CheckCircle2, AlertCircle, ArrowUpRight, FileText, Check } from 'lucide-react';

export function StudentHomework() {
  const user = USERS.student;
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all');

  const homeworkList = [
    {
      id: 1,
      subject: 'Mathematics',
      title: 'Calculus Exercise 5.2 - Questions 1 to 15',
      teacher: 'Dr. Priya Patel',
      assignedDate: '10 Oct 2026',
      dueDate: '13 Oct 2026',
      status: 'pending',
      instructions: 'Complete exercises on graph plotting and derivative tangent calculations. Show all intermediate steps in your homework notebook.',
      pageRef: 'NCERT Textbook Page 142'
    },
    {
      id: 2,
      subject: 'Physics',
      title: 'Numerical Problems on Magnetic Flux',
      teacher: 'Mr. Amit Verma',
      assignedDate: '09 Oct 2026',
      dueDate: '12 Oct 2026',
      status: 'pending',
      instructions: 'Solve the 5 numerical problems distributed in yesterday’s worksheet. Draw circuit diagrams where applicable.',
      pageRef: 'Worksheet #3'
    },
    {
      id: 3,
      subject: 'English Literature',
      title: 'Character Analysis: Lady Macbeth’s Soliloquy',
      teacher: 'Ms. Neha Singh',
      assignedDate: '08 Oct 2026',
      dueDate: '10 Oct 2026',
      status: 'completed',
      instructions: 'Write a 300-word paragraph detailing the dramatic irony and metaphors used in Act 1 Scene 5.',
      pageRef: 'English Notebook Vol 2'
    },
    {
      id: 4,
      subject: 'Computer Science',
      title: 'Practice HTML & CSS Layouts (Flexbox)',
      teacher: 'Mr. Vikram Singh',
      assignedDate: '07 Oct 2026',
      dueDate: '09 Oct 2026',
      status: 'completed',
      instructions: 'Build a 3-column responsive pricing card using pure CSS flexbox and test it on mobile viewports.',
      pageRef: 'Lab Exercise 4'
    },
    {
      id: 5,
      subject: 'Chemistry',
      title: 'Balance Chemical Equations & Stoichiometry',
      teacher: 'Dr. Sunita Rao',
      assignedDate: '06 Oct 2026',
      dueDate: '08 Oct 2026',
      status: 'completed',
      instructions: 'Balance 10 redox equations and calculate molecular weights for assigned compounds.',
      pageRef: 'Chemistry Workbook Page 64'
    }
  ];

  const filtered = homeworkList.filter(item => {
    if (filter === 'pending') return item.status === 'pending';
    if (filter === 'completed') return item.status === 'completed';
    return true;
  });

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Daily Homework"
      description="Track and submit daily assigned homework tasks, teacher instructions, and notebook references."
    >
      <div className="space-y-6">

        {/* Top Controls: Filter Pills */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'all' ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Homework ({homeworkList.length})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'pending' ? 'bg-amber-500 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Pending ({homeworkList.filter(h => h.status === 'pending').length})
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                filter === 'completed' ? 'bg-emerald-600 text-white shadow-xs' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Completed ({homeworkList.filter(h => h.status === 'completed').length})
            </button>
          </div>

          <div className="text-xs text-slate-500 font-medium">
            Weekly Completion Rate: <strong className="text-emerald-600">88%</strong>
          </div>
        </div>

        {/* Homework List */}
        <div className="space-y-4">
          {filtered.map((item) => (
            <div 
              key={item.id} 
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-200 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
                      {item.subject}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      item.status === 'pending'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {item.status === 'pending' ? '● Action Required' : '✓ Completed'}
                    </span>
                    <span className="text-xs text-slate-400">• Assigned by {item.teacher}</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">{item.instructions}</p>

                  <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                    <span className="bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg font-mono text-[11px] text-slate-600">
                      📖 {item.pageRef}
                    </span>
                    <span>Assigned: {item.assignedDate}</span>
                    <span className="font-semibold text-slate-800 flex items-center gap-1">
                      <Clock size={12} className={item.status === 'pending' ? 'text-amber-500' : 'text-slate-400'} /> Due: {item.dueDate}
                    </span>
                  </div>
                </div>

                <div className="shrink-0 pt-2 md:pt-0">
                  {item.status === 'pending' ? (
                    <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition-all flex items-center gap-1.5">
                      Mark as Done <Check size={14} />
                    </button>
                  ) : (
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                      <CheckCircle2 size={16} /> Verified by Teacher
                    </span>
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
