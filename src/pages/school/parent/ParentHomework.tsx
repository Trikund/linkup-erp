import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  NotebookPen, 
  Clock, 
  CheckCircle2, 
  Calendar, 
  FileText, 
  AlertCircle, 
  Check, 
  ChevronRight,
  BookOpen
} from 'lucide-react';

export function ParentHomework() {
  const user = USERS.parent;
  const [selectedChildId, setSelectedChildId] = useState('1');
  const [activeTab, setActiveTab] = useState<'pending' | 'completed'>('pending');

  const homeworkData = [
    {
      id: '1',
      name: 'Rahul Sharma',
      class: 'Class 10-A',
      tasks: [
        {
          id: 1,
          subject: 'Mathematics (Standard)',
          title: 'Quadratic Equations Exercise 4.3 & Word Problems',
          chapter: 'Chapter 4: Quadratic Equations',
          assignedDate: '10 Oct 2026',
          dueDate: 'Today, 12 Oct • 05:00 PM',
          status: 'pending',
          urgency: 'high',
          teacher: 'Mrs. Ananya Sharma',
          description: 'Solve questions 1 through 9 from NCERT Textbook Page 88 in homework notebook. Show complete step-by-step discriminant calculation and verify nature of roots.',
          estimatedTime: '45 Mins'
        },
        {
          id: 2,
          subject: 'English Literature',
          title: 'Two Gentlemen of Verona Character Sketch',
          chapter: 'Prose Chapter 1',
          assignedDate: '11 Oct 2026',
          dueDate: 'Tomorrow, 13 Oct • 08:30 AM',
          status: 'pending',
          urgency: 'medium',
          teacher: 'Mrs. Sunita Roy',
          description: 'Write an analytical 200-word character sketch of Nicola and Jacopo highlighting their maturity, self-sacrifice, and fraternal devotion.',
          estimatedTime: '30 Mins'
        },
        {
          id: 3,
          subject: 'Science (Physics)',
          title: 'Ray Optics & Lens Formula Numerical Problems',
          chapter: 'Chapter 10: Light - Reflection and Refraction',
          assignedDate: '07 Oct 2026',
          dueDate: '09 Oct 2026',
          status: 'completed',
          verifiedAt: '09 Oct at 03:15 PM',
          teacher: 'Mr. Pradeep Mishra',
          teacherRemark: 'All 8 numericals solved with proper sign convention and ray diagrams. Good work.',
          description: 'Solve textbook questions 10 to 17 on convex lenses and magnification calculations.'
        },
        {
          id: 4,
          subject: 'Social Science (Geography)',
          title: 'Resources & Development Map Pointing Practice',
          chapter: 'Geography Chapter 1',
          assignedDate: '04 Oct 2026',
          dueDate: '06 Oct 2026',
          status: 'completed',
          verifiedAt: '06 Oct at 11:20 AM',
          teacher: 'Mrs. Kavita Saxena',
          teacherRemark: 'Accurate soil distribution shading on the political map of India.',
          description: 'Locate and label major soil types (Alluvial, Black, Red & Yellow) on the outline map of India.'
        }
      ]
    },
    {
      id: '2',
      name: 'Ananya Sharma',
      class: 'Class 7-B',
      tasks: [
        {
          id: 5,
          subject: 'Integrated Science',
          title: 'Nutrition in Plants Experiment Diagram',
          chapter: 'Chapter 1: Nutrition in Plants',
          assignedDate: '11 Oct 2026',
          dueDate: 'Tomorrow, 13 Oct • 09:00 AM',
          status: 'pending',
          urgency: 'medium',
          teacher: 'Mrs. Ritu Sen',
          description: 'Draw and color the diagram showing stomatal pore apparatus and starch test in leaves from textbook page 14.',
          estimatedTime: '35 Mins'
        },
        {
          id: 6,
          subject: 'General Mathematics',
          title: 'Fraction Multiplication & Reciprocal Practice Set',
          chapter: 'Chapter 2: Fractions and Decimals',
          assignedDate: '08 Oct 2026',
          dueDate: '10 Oct 2026',
          status: 'completed',
          verifiedAt: '10 Oct at 02:40 PM',
          teacher: 'Mr. Alok Verma',
          teacherRemark: 'Neat notebook submission. All cross-cancellations correct.',
          description: 'Complete questions 1 to 15 from Exercise 2.2.'
        }
      ]
    }
  ];

  const currentChild = homeworkData.find(c => c.id === selectedChildId) || homeworkData[0];
  const pendingTasks = currentChild.tasks.filter(t => t.status === 'pending');
  const completedTasks = currentChild.tasks.filter(t => t.status === 'completed');

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title="Daily Homework & Task Tracking"
      description="Supervise daily homework assigned to your child, monitor submission deadlines, and review teacher verification signatures."
    >
      <div className="space-y-8">

        {/* CHILD SWITCHER & TAB SELECTOR */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Student:</span>
            {homeworkData.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChildId(c.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
                  selectedChildId === c.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <span>{c.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${selectedChildId === c.id ? 'bg-white/20' : 'bg-slate-200 text-slate-700'}`}>
                  {c.class}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'pending'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Pending Tasks ({pendingTasks.length})
            </button>

            <button
              onClick={() => setActiveTab('completed')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                activeTab === 'completed'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Completed & Verified ({completedTasks.length})
            </button>
          </div>
        </div>

        {/* HOMEWORK LISTINGS */}
        {activeTab === 'pending' ? (
          <div className="space-y-5">
            {pendingTasks.map((task) => (
              <div 
                key={task.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                        {task.subject}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{task.chapter}</span>
                      <span className={`px-2.5 py-0.5 rounded-md text-xs font-bold ${
                        task.urgency === 'high' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700'
                      }`}>
                        {task.urgency === 'high' ? 'Due Today' : 'Due Tomorrow'}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">{task.title}</h3>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-rose-600 block">{task.dueDate}</span>
                    <span className="text-xs text-slate-400 font-medium">Est. Time: {task.estimatedTime}</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                  {task.description}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs text-slate-500">
                  <span>Assigned on: {task.assignedDate} • Faculty: <strong className="text-slate-800">{task.teacher}</strong></span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-800 font-bold border border-amber-200">
                    Awaiting Notebook Submission
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-5">
            {completedTasks.map((task) => (
              <div 
                key={task.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {task.subject}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{task.chapter}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-1">{task.title}</h3>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5 shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Verified by Teacher
                  </span>
                </div>

                <div className="p-4 bg-emerald-50/40 rounded-xl border border-emerald-100 space-y-1">
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block">Teacher Remark:</span>
                  <p className="text-sm text-slate-700 font-medium">"{task.teacherRemark}"</p>
                  <p className="text-xs text-slate-400 mt-1">— {task.teacher} • Signed on {task.verifiedAt}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
