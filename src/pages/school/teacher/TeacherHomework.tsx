import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  NotebookPen, 
  Plus, 
  Clock, 
  CheckCircle2, 
  Users, 
  Calendar, 
  FileText, 
  Send, 
  AlertCircle, 
  Check, 
  ChevronRight,
  X,
  Upload,
  BookOpen
} from 'lucide-react';

interface HomeworkItem {
  id: number;
  class: string;
  title: string;
  chapter: string;
  assignedDate: string;
  dueDate: string;
  dueTime: string;
  submittedCount: number;
  totalStudents: number;
  reviewedCount: number;
  status: 'active' | 'due-today' | 'graded';
  description: string;
  estimatedTime: string;
}

export function TeacherHomework() {
  const user = USERS.teacher;
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [createdSuccess, setCreatedSuccess] = useState(false);
  const [reminderSuccess, setReminderSuccess] = useState(false);
  const [reviewModalItem, setReviewModalItem] = useState<HomeworkItem | null>(null);

  // Form states for Create Modal
  const [newClass, setNewClass] = useState('10-A');
  const [newTitle, setNewTitle] = useState('');
  const [newChapter, setNewChapter] = useState('');
  const [newDueDate, setNewDueDate] = useState('2026-10-14');
  const [newDesc, setNewDesc] = useState('');
  const [newEstTime, setNewEstTime] = useState('45 Mins');

  const homeworkList: HomeworkItem[] = [
    {
      id: 1,
      class: '10-A',
      title: 'Quadratic Equations Exercise 4.3 & Word Problems',
      chapter: 'Chapter 4: Quadratic Equations',
      assignedDate: '10 Oct 2026',
      dueDate: '12 Oct 2026',
      dueTime: '05:00 PM',
      submittedCount: 38,
      totalStudents: 42,
      reviewedCount: 32,
      status: 'due-today',
      description: 'Solve questions 1 through 9 from NCERT Textbook Page 88. Show complete step-by-step discriminant calculation and root verification.',
      estimatedTime: '45 Mins'
    },
    {
      id: 2,
      class: '10-A',
      title: 'Roots of Quadratic Equation by Factorization (Worksheet 4)',
      chapter: 'Chapter 4: Quadratic Equations',
      assignedDate: '08 Oct 2026',
      dueDate: '10 Oct 2026',
      dueTime: '06:00 PM',
      submittedCount: 42,
      totalStudents: 42,
      reviewedCount: 42,
      status: 'graded',
      description: 'Splitting the middle term method for 15 quadratic equations containing radical coefficients.',
      estimatedTime: '40 Mins'
    },
    {
      id: 3,
      class: '10-B',
      title: 'Coordinate Geometry: Distance Formula Practice Set',
      chapter: 'Chapter 7: Coordinate Geometry',
      assignedDate: '11 Oct 2026',
      dueDate: '13 Oct 2026',
      dueTime: '08:00 PM',
      submittedCount: 28,
      totalStudents: 40,
      reviewedCount: 14,
      status: 'active',
      description: 'NCERT Exemplar Exercise 7.1 Questions 4 to 12. Determine collinearity and vertices of isosceles right triangles.',
      estimatedTime: '50 Mins'
    },
    {
      id: 4,
      class: '9-B',
      title: 'Polynomial Division & Factor Theorem Proofs',
      chapter: 'Chapter 2: Polynomials',
      assignedDate: '11 Oct 2026',
      dueDate: '12 Oct 2026',
      dueTime: '04:00 PM',
      submittedCount: 36,
      totalStudents: 40,
      reviewedCount: 20,
      status: 'due-today',
      description: 'Long division method for cubic polynomials and proving factor theorem without actual division for questions 1 to 6.',
      estimatedTime: '35 Mins'
    },
    {
      id: 5,
      class: '11-A',
      title: 'Trigonometric Identities & Multiple Angle Derivations',
      chapter: 'Chapter 3: Trigonometric Functions',
      assignedDate: '09 Oct 2026',
      dueDate: '14 Oct 2026',
      dueTime: '09:00 PM',
      submittedCount: 22,
      totalStudents: 38,
      reviewedCount: 12,
      status: 'active',
      description: 'Prove sin(3x), cos(3x) identities and solve conditional trigonometric equations from R.D. Sharma Exercise 3.6.',
      estimatedTime: '60 Mins'
    }
  ];

  const handleCreateHomework = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCreateModal(false);
    setCreatedSuccess(true);
    setTimeout(() => setCreatedSuccess(false), 3000);
    setNewTitle('');
    setNewChapter('');
    setNewDesc('');
  };

  const handleSendReminder = (hw: HomeworkItem) => {
    setReminderSuccess(true);
    setTimeout(() => setReminderSuccess(false), 3000);
  };

  const filteredList = homeworkList.filter(h => 
    selectedClass === 'all' || h.class === selectedClass
  );

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Homework & Daily Assignments"
      description="Create daily homework tasks, monitor class submission status, review student notebooks, and send reminders to defaulters."
    >
      <div className="space-y-8">

        {/* FEEDBACK BANNERS */}
        {createdSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>New homework assignment has been published and broadcast to students and parents!</span>
          </div>
        )}

        {reminderSuccess && (
          <div className="p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <Send className="w-5 h-5 text-blue-600 shrink-0" />
            <span>Automated portal reminder & parent notification dispatched to defaulters!</span>
          </div>
        )}

        {/* TOP METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Tasks</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">5 Tasks</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Across 4 teaching sections</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Due Today</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-amber-600">2 Homeworks</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Class 10-A & Class 9-B</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Overall Submission</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">89.5%</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">166 submissions received</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Pending Evaluation</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">46 Submissions</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Awaiting teacher verification</p>
          </div>
        </div>

        {/* HEADER CONTROLS & NEW HOMEWORK BUTTON */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Classes' },
              { id: '10-A', label: 'Class 10-A (Mentor)' },
              { id: '10-B', label: 'Class 10-B' },
              { id: '9-B', label: 'Class 9-B' },
              { id: '11-A', label: 'Class 11-A' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedClass(tab.id)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  selectedClass === tab.id
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowCreateModal(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-sm flex items-center justify-center gap-2 shrink-0"
          >
            <Plus className="w-4 h-4" />
            Assign New Homework
          </button>
        </div>

        {/* HOMEWORK LISTING CARDS */}
        <div className="space-y-5">
          {filteredList.map((hw) => {
            const submissionPercentage = Math.round((hw.submittedCount / hw.totalStudents) * 100);
            const pendingCount = hw.totalStudents - hw.submittedCount;

            return (
              <div 
                key={hw.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition space-y-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                        Class {hw.class}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        {hw.chapter}
                      </span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        hw.status === 'due-today' ? 'bg-amber-50 text-amber-700 border border-amber-200' :
                        hw.status === 'graded' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-blue-50 text-blue-700 border border-blue-200'
                      }`}>
                        {hw.status === 'due-today' ? 'Due Today' : hw.status === 'graded' ? 'Fully Graded' : 'Active'}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">
                      {hw.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-medium">
                      Assigned: {hw.assignedDate} • Due: <strong className="text-slate-800 font-bold">{hw.dueDate} at {hw.dueTime}</strong> • Estimated Time: {hw.estimatedTime}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-2xl font-black text-slate-900">{hw.submittedCount} / {hw.totalStudents}</span>
                    <span className="text-xs text-slate-400 block font-medium">Submissions Received</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 bg-slate-50/70 p-4 rounded-xl border border-slate-100 leading-relaxed font-normal">
                  {hw.description}
                </p>

                {/* Progress Bar & Review Stats */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-600">Submission Progress: {submissionPercentage}%</span>
                    <span className="text-slate-500">Teacher Evaluated: {hw.reviewedCount} / {hw.submittedCount}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        submissionPercentage >= 90 ? 'bg-emerald-500' : 'bg-blue-600'
                      }`}
                      style={{ width: `${submissionPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Action Bar */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 text-xs">
                  <div className="text-slate-500 font-medium">
                    {pendingCount > 0 ? (
                      <span className="text-amber-600 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" /> {pendingCount} students have not yet submitted
                      </span>
                    ) : (
                      <span className="text-emerald-600 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> 100% full class submission achieved
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    {pendingCount > 0 && (
                      <button
                        onClick={() => handleSendReminder(hw)}
                        className="px-3.5 py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200 font-bold transition flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Remind {pendingCount} Defaulters
                      </button>
                    )}

                    <button
                      onClick={() => setReviewModalItem(hw)}
                      className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition shadow-sm"
                    >
                      Review Submissions ({hw.submittedCount})
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL: CREATE HOMEWORK */}
        {showCreateModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Assign New Homework</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Published tasks appear immediately on student & parent portals.</p>
                </div>
                <button onClick={() => setShowCreateModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleCreateHomework} className="space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Target Class</label>
                    <select 
                      value={newClass}
                      onChange={(e) => setNewClass(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                    >
                      <option value="10-A">Class 10-A (Mentor)</option>
                      <option value="10-B">Class 10-B</option>
                      <option value="9-B">Class 9-B</option>
                      <option value="11-A">Class 11-A</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Chapter Title</label>
                    <input 
                      type="text"
                      required
                      value={newChapter}
                      onChange={(e) => setNewChapter(e.target.value)}
                      placeholder="e.g. Chapter 4: Quadratic Equations"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Homework Topic / Title</label>
                  <input 
                    type="text"
                    required
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    placeholder="e.g. Exercise 4.3 Word Problems & Discriminant Proofs"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Submission Deadline</label>
                    <input 
                      type="date"
                      value={newDueDate}
                      onChange={(e) => setNewDueDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Estimated Duration</label>
                    <input 
                      type="text"
                      value={newEstTime}
                      onChange={(e) => setNewEstTime(e.target.value)}
                      placeholder="e.g. 45 Mins"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Detailed Question Set & Instructions</label>
                  <textarea 
                    rows={4}
                    required
                    value={newDesc}
                    onChange={(e) => setNewDesc(e.target.value)}
                    placeholder="Specify NCERT textbook page number, exercise questions, required steps, and submission format..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowCreateModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm"
                  >
                    Publish to Portal
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* MODAL: REVIEW SUBMISSIONS DRAWER */}
        {reviewModalItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-6 max-h-[85vh] flex flex-col">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100 shrink-0">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{reviewModalItem.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    Class {reviewModalItem.class} • {reviewModalItem.submittedCount} Submissions Received
                  </p>
                </div>
                <button onClick={() => setReviewModalItem(null)} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Student Submission List */}
              <div className="overflow-y-auto space-y-3.5 flex-1 pr-1">
                {[
                  { name: 'Aarav Gupta', roll: 1, time: '11 Oct, 06:30 PM', file: 'Aarav_Ex4.3_Math.pdf', status: 'Verified' },
                  { name: 'Ananya Joshi', roll: 2, time: '11 Oct, 07:15 PM', file: 'Ananya_Quadratic.pdf', status: 'Verified' },
                  { name: 'Aryan Kapoor', roll: 3, time: '12 Oct, 07:45 AM', file: 'Aryan_Homework_Scan.jpg', status: 'Pending Review' },
                  { name: 'Diya Sen', roll: 4, time: '11 Oct, 05:20 PM', file: 'Diya_Math_Notebook.pdf', status: 'Verified' },
                  { name: 'Rahul Sharma', roll: 14, time: '12 Oct, 08:10 AM', file: 'Rahul_Algebra_HW.pdf', status: 'Pending Review' },
                  { name: 'Priya Sen', roll: 22, time: '11 Oct, 09:00 PM', file: 'Priya_Sen_Ex4.3.pdf', status: 'Verified' },
                ].map((st, i) => (
                  <div key={i} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{st.name}</span>
                        <span className="text-xs text-slate-400 font-mono">(Roll #{st.roll})</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          st.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {st.status}
                        </span>
                      </div>
                      <div className="text-xs text-slate-500 mt-1">
                        Submitted: {st.time} • File: <span className="font-semibold text-blue-600 underline cursor-pointer">{st.file}</span>
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Marked ${st.name}'s notebook as verified & feedback saved.`)}
                      className="px-3.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shrink-0"
                    >
                      {st.status === 'Verified' ? 'Update Grade' : 'Verify & Sign'}
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end shrink-0">
                <button
                  onClick={() => setReviewModalItem(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                >
                  Close Reviewer
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
