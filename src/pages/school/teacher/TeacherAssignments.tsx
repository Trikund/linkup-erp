import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  ClipboardList, 
  Plus, 
  Upload, 
  Download, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Star, 
  X, 
  Edit3, 
  Award,
  ChevronRight,
  Filter
} from 'lucide-react';

interface AssignmentItem {
  id: number;
  class: string;
  title: string;
  type: string;
  totalMarks: number;
  weightage: string;
  assignedDate: string;
  dueDate: string;
  submittedCount: number;
  totalStudents: number;
  gradedCount: number;
  avgScore: number;
  rubric: string[];
  description: string;
}

export function TeacherAssignments() {
  const user = USERS.teacher;
  const [selectedClass, setSelectedClass] = useState<string>('all');
  const [gradingItem, setGradingItem] = useState<AssignmentItem | null>(null);
  const [gradeSavedToast, setGradeSavedToast] = useState(false);

  const assignments: AssignmentItem[] = [
    {
      id: 1,
      class: '10-A',
      title: 'Algebra & Matrices Real-World Case Study Worksheet',
      type: 'Term Assessment Project',
      totalMarks: 25,
      weightage: '10% of CBSE Term Internal',
      assignedDate: '04 Oct 2026',
      dueDate: '14 Oct 2026',
      submittedCount: 39,
      totalStudents: 42,
      gradedCount: 27,
      avgScore: 22.4,
      rubric: ['Matrix formulation (8 Marks)', 'Determinant calculation (7 Marks)', 'Economic case analysis (6 Marks)', 'Presentation (4 Marks)'],
      description: 'Students analyze economic production systems using 3x3 matrices and apply Cramer rule for equilibrium output calculation.'
    },
    {
      id: 2,
      class: '10-A',
      title: 'Quadratic Models in Physics & Trajectory Motion',
      type: 'Mathematics Portfolio',
      totalMarks: 20,
      weightage: '5% of CBSE Portfolio',
      assignedDate: '28 Sep 2026',
      dueDate: '08 Oct 2026',
      submittedCount: 42,
      totalStudents: 42,
      gradedCount: 42,
      avgScore: 18.2,
      rubric: ['Parabolic curve plotting (6 Marks)', 'Vertex & maximum height deduction (8 Marks)', 'Report format (6 Marks)'],
      description: 'Mathematical modeling of projectile motion using quadratic equations, graphing parabolas and finding vertex coordinates.'
    },
    {
      id: 3,
      class: '10-B',
      title: 'Coordinate Geometry Map & Navigation Project',
      type: 'Math Lab Activity',
      totalMarks: 25,
      weightage: '10% of Internal Practical',
      assignedDate: '06 Oct 2026',
      dueDate: '16 Oct 2026',
      submittedCount: 34,
      totalStudents: 40,
      gradedCount: 20,
      avgScore: 21.0,
      rubric: ['Cartesian plane mapping (7 Marks)', 'Distance & section formula (10 Marks)', 'Geometric proofs (8 Marks)'],
      description: 'Constructing a scaled coordinate map of school campus landmarks and verifying shortest paths using section formula.'
    },
    {
      id: 4,
      class: '9-B',
      title: 'Algebraic Identities Geometric Proof Model',
      type: 'Experiential Learning Task',
      totalMarks: 20,
      weightage: '5% of Subject Enrichment',
      assignedDate: '02 Oct 2026',
      dueDate: '12 Oct 2026',
      submittedCount: 38,
      totalStudents: 40,
      gradedCount: 38,
      avgScore: 17.6,
      rubric: ['Physical cardboard model (8 Marks)', 'Algebraic verification (8 Marks)', 'Viva-voce explanation (4 Marks)'],
      description: 'Geometric demonstration of (a+b)^3 and (a-b)^3 using unit wooden or acrylic cubes as mandated by CBSE math lab manual.'
    },
    {
      id: 5,
      class: '11-A',
      title: 'Applied Trigonometry & Fourier Series Investigation',
      type: 'Research Term Project',
      totalMarks: 30,
      weightage: '15% of Term 1 Marks',
      assignedDate: '01 Oct 2026',
      dueDate: '18 Oct 2026',
      submittedCount: 26,
      totalStudents: 38,
      gradedCount: 12,
      avgScore: 26.8,
      rubric: ['Theoretical depth (10 Marks)', 'Fourier decomposition graphs (10 Marks)', 'Originality & references (10 Marks)'],
      description: 'Deep dive into sound wave harmonic decomposition and representing periodic waveforms with sine & cosine sums.'
    }
  ];

  const handleSaveGrade = (e: React.FormEvent) => {
    e.preventDefault();
    setGradeSavedToast(true);
    setTimeout(() => {
      setGradeSavedToast(false);
      setGradingItem(null);
    }, 1500);
  };

  const filtered = assignments.filter(a => selectedClass === 'all' || a.class === selectedClass);

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Term Projects & Graded Assignments"
      description="Design term projects, evaluate student submissions against CBSE rubrics, and record internal continuous assessment marks."
    >
      <div className="space-y-8">

        {gradeSavedToast && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Marks and constructive feedback remarks successfully saved to CBSE Gradebook!</span>
          </div>
        )}

        {/* TOP METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Active Projects</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">5 Projects</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">CBSE Internal Assessments</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Total Submissions</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">179 Received</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Across all sections</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Awaiting Evaluation</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-amber-600">40 Papers</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Pending marks entry</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Average Class Score</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-700">86.4%</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">High standard of work</p>
          </div>
        </div>

        {/* CLASS FILTER TABS */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-4">
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
            onClick={() => alert('New Graded Assignment creator dialog opened.')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-sm flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Create Graded Assignment
          </button>
        </div>

        {/* ASSIGNMENTS LIST */}
        <div className="space-y-6">
          {filtered.map((item) => {
            const submissionPercent = Math.round((item.submittedCount / item.totalStudents) * 100);
            const pendingToGrade = item.submittedCount - item.gradedCount;

            return (
              <div 
                key={item.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition space-y-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                        Class {item.class}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        {item.type}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">
                        Weightage: <strong className="text-slate-800">{item.weightage}</strong>
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-medium">
                      Assigned: {item.assignedDate} • Deadline: <strong className="text-slate-800 font-bold">{item.dueDate}</strong> • Max Marks: {item.totalMarks}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-3xl font-black text-slate-900">{item.avgScore} <span className="text-base text-slate-400 font-medium">/ {item.totalMarks}</span></span>
                    <span className="text-xs text-slate-400 block font-medium">Class Average</span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 bg-slate-50/70 p-4 rounded-xl border border-slate-100 leading-relaxed font-normal">
                  {item.description}
                </p>

                {/* Rubric Points */}
                <div className="space-y-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Evaluation Rubric Criteria:</span>
                  <div className="flex flex-wrap gap-2">
                    {item.rubric.map((r, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-semibold text-slate-700">
                        • {r}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Submission Progress */}
                <div className="space-y-2 pt-1">
                  <div className="flex justify-between items-center text-xs font-bold">
                    <span className="text-slate-600">Submissions: {item.submittedCount} / {item.totalStudents} ({submissionPercent}%)</span>
                    <span className="text-blue-600">Evaluated: {item.gradedCount} / {item.submittedCount}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
                      style={{ width: `${submissionPercent}%` }}
                    />
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="text-slate-500 font-medium">
                    {pendingToGrade > 0 ? (
                      <span className="text-amber-600 font-bold">
                        ⚡ {pendingToGrade} submissions awaiting marks entry
                      </span>
                    ) : (
                      <span className="text-emerald-600 font-bold">
                        ✓ All submissions evaluated and graded
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => alert(`Downloading all ${item.submittedCount} PDF submissions as a ZIP archive...`)}
                      className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <Download className="w-4 h-4" />
                      Download Submissions (ZIP)
                    </button>

                    <button
                      onClick={() => setGradingItem(item)}
                      className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition shadow-sm flex items-center gap-1.5"
                    >
                      <Award className="w-4 h-4" />
                      Open Gradebook ({pendingToGrade} Pending)
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL: GRADEBOOK DRAWER */}
        {gradingItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-6 max-h-[88vh] flex flex-col">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100 shrink-0">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{gradingItem.title}</h3>
                  <p className="text-sm font-semibold text-blue-600 mt-0.5">
                    Class {gradingItem.class} • Max Marks: {gradingItem.totalMarks} • Weightage: {gradingItem.weightage}
                  </p>
                </div>
                <button onClick={() => setGradingItem(null)} className="p-1 text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Student grading roster */}
              <div className="overflow-y-auto space-y-4 flex-1 pr-1">
                {[
                  { name: 'Aarav Gupta', roll: 1, currentScore: 24, file: 'Aarav_Matrix_CaseStudy.pdf', remarks: 'Exceptional economic equilibrium formulation. Clean matrix inversion.' },
                  { name: 'Ananya Joshi', roll: 2, currentScore: 23, file: 'Ananya_Matrices_Report.pdf', remarks: 'Very thorough derivations. Minor calculation error in Q3 part b.' },
                  { name: 'Aryan Kapoor', roll: 3, currentScore: 20, file: 'Aryan_Algebra_Project.pdf', remarks: 'Good grasp of concepts. Graph plotting could be neater.' },
                  { name: 'Diya Sen', roll: 4, currentScore: 24, file: 'Diya_Math_CaseStudy.pdf', remarks: 'Immaculate presentation and step-wise reasoning.' },
                  { name: 'Rahul Sharma', roll: 14, currentScore: 22, file: 'Rahul_Sharma_Matrices.pdf', remarks: 'Solid effort. Correct Cramer rule application.' },
                  { name: 'Rohan Mehta', roll: 18, currentScore: 17, file: 'Rohan_Matrices_Worksheet.pdf', remarks: 'Missed question 4 on determinant properties. Needs revision.' },
                ].map((st, i) => (
                  <div key={i} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200/80 space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-base">{st.name}</span>
                          <span className="text-xs text-slate-400 font-mono">(Roll #{st.roll})</span>
                        </div>
                        <p className="text-xs text-blue-600 font-semibold cursor-pointer underline mt-0.5">
                          View Submission: {st.file}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-500">Awarded Marks:</span>
                        <input 
                          type="number"
                          defaultValue={st.currentScore}
                          max={gradingItem.totalMarks}
                          min={0}
                          className="w-16 px-2.5 py-1.5 bg-white border border-slate-200 rounded-lg text-sm font-extrabold text-slate-900 text-center"
                        />
                        <span className="text-xs font-bold text-slate-400">/ {gradingItem.totalMarks}</span>
                      </div>
                    </div>

                    <input 
                      type="text"
                      defaultValue={st.remarks}
                      placeholder="Add teacher feedback remark for student and parent report..."
                      className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>
                ))}
              </div>

              {/* Gradebook Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => setGradingItem(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSaveGrade}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition shadow-sm"
                >
                  Save & Lock Evaluation
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
