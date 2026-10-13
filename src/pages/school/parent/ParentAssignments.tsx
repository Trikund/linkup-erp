import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  FileText, CheckCircle2, Clock, AlertCircle, 
  Download, Calendar, Award, User, BookOpen, Filter, Search, ChevronRight
} from 'lucide-react';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  teacher: string;
  assignedDate: string;
  dueDate: string;
  submittedDate?: string;
  maxMarks: number;
  obtainedMarks?: number;
  status: 'graded' | 'submitted' | 'pending' | 'overdue';
  rubric: { parameter: string; max: number; scored?: number }[];
  teacherFeedback?: string;
  attachmentName?: string;
  childId: 'rahul' | 'ananya';
}

const mockAssignments: Assignment[] = [
  {
    id: 'ASG-101',
    title: 'Linear Programming & Quadratic Optimization File',
    subject: 'Mathematics',
    teacher: 'Mrs. Ananya Sharma',
    assignedDate: '28 Sep 2026',
    dueDate: '08 Oct 2026',
    submittedDate: '06 Oct 2026',
    maxMarks: 25,
    obtainedMarks: 23,
    status: 'graded',
    rubric: [
      { parameter: 'Mathematical Accuracy', max: 10, scored: 9 },
      { parameter: 'Graphical Representation', max: 5, scored: 5 },
      { parameter: 'Real-world Application Case', max: 5, scored: 5 },
      { parameter: 'Timely Submission', max: 5, scored: 4 },
    ],
    teacherFeedback: 'Outstanding analytical clarity. The graphical solutions for quadratic constraints are neat and properly labelled.',
    attachmentName: 'Maths_Practical_Ch4_Rahul.pdf',
    childId: 'rahul',
  },
  {
    id: 'ASG-102',
    title: 'Ohm’s Law Verification & Circuit Resistivity Lab Report',
    subject: 'Science (Physics)',
    teacher: 'Dr. Rajesh Sen',
    assignedDate: '01 Oct 2026',
    dueDate: '10 Oct 2026',
    submittedDate: '09 Oct 2026',
    maxMarks: 20,
    obtainedMarks: 18,
    status: 'graded',
    rubric: [
      { parameter: 'Experimental Observations', max: 8, scored: 7 },
      { parameter: 'Calculations & Error Analysis', max: 6, scored: 5 },
      { parameter: 'Viva Voce Readiness', max: 6, scored: 6 },
    ],
    teacherFeedback: 'Very good experimental log. Remember to specify the least count of the ammeter in your observation table next time.',
    attachmentName: 'Physics_Lab_Report_Exp3.pdf',
    childId: 'rahul',
  },
  {
    id: 'ASG-103',
    title: 'DBMS Schema Design for School Library Management',
    subject: 'Information Technology',
    teacher: 'Mr. Amit Verma',
    assignedDate: '05 Oct 2026',
    dueDate: '14 Oct 2026',
    submittedDate: '11 Oct 2026',
    maxMarks: 30,
    status: 'submitted',
    rubric: [
      { parameter: 'ER Diagram Accuracy', max: 10 },
      { parameter: 'Normalization (3NF)', max: 10 },
      { parameter: 'SQL Queries Implementation', max: 10 },
    ],
    teacherFeedback: 'Submitted on time. Review and code execution evaluation currently in progress.',
    attachmentName: 'IT_DBMS_Project_Draft.zip',
    childId: 'rahul',
  },
  {
    id: 'ASG-104',
    title: 'Nationalism in Europe & Comparative Constitutional History',
    subject: 'Social Science',
    teacher: 'Mrs. Kavita Roy',
    assignedDate: '08 Oct 2026',
    dueDate: '18 Oct 2026',
    maxMarks: 20,
    status: 'pending',
    rubric: [
      { parameter: 'Primary Source Analysis', max: 8 },
      { parameter: 'Historical Sequencing', max: 6 },
      { parameter: 'Presentation & Bibliography', max: 6 },
    ],
    attachmentName: 'SSt_Project_Guidelines_Term1.pdf',
    childId: 'rahul',
  },
  {
    id: 'ASG-105',
    title: 'Formal Letter to Municipal Commissioner (Water Conservation)',
    subject: 'English Language',
    teacher: 'Ms. Pooja Nair',
    assignedDate: '10 Oct 2026',
    dueDate: '16 Oct 2026',
    maxMarks: 15,
    status: 'pending',
    rubric: [
      { parameter: 'Format & Layout', max: 4 },
      { parameter: 'Vocabulary & Coherence', max: 6 },
      { parameter: 'Grammar & Syntax', max: 5 },
    ],
    attachmentName: 'Formal_Letter_Template_CBSE.pdf',
    childId: 'rahul',
  },
  // Ananya Assignments
  {
    id: 'ASG-201',
    title: 'Cell Structure 3D Plant vs Animal Model Presentation',
    subject: 'General Science',
    teacher: 'Mrs. Neha Batra',
    assignedDate: '29 Sep 2026',
    dueDate: '07 Oct 2026',
    submittedDate: '05 Oct 2026',
    maxMarks: 20,
    obtainedMarks: 19,
    status: 'graded',
    rubric: [
      { parameter: 'Model Accuracy & Labelling', max: 8, scored: 8 },
      { parameter: 'Classroom Explanation', max: 6, scored: 6 },
      { parameter: 'Neatness & Material Reuse', max: 6, scored: 5 },
    ],
    teacherFeedback: 'Exceptional creative initiative! Ananya used eco-friendly clay to showcase chloroplasts and mitochondria.',
    attachmentName: 'Science_Model_Ananya_7B.jpg',
    childId: 'ananya',
  },
  {
    id: 'ASG-202',
    title: 'Fractions & Decimals Real-life Grocery Budget Worksheet',
    subject: 'Mathematics',
    teacher: 'Mr. Vivek Saxena',
    assignedDate: '03 Oct 2026',
    dueDate: '11 Oct 2026',
    submittedDate: '10 Oct 2026',
    maxMarks: 20,
    obtainedMarks: 18,
    status: 'graded',
    rubric: [
      { parameter: 'Budget Calculation Accuracy', max: 10, scored: 9 },
      { parameter: 'Discount & GST Estimation', max: 6, scored: 5 },
      { parameter: 'Presentation', max: 4, scored: 4 },
    ],
    teacherFeedback: 'Well attempted! Decimal multiplications are accurate. Great neat handwriting.',
    attachmentName: 'Math_Worksheet_Ch3_Ananya.pdf',
    childId: 'ananya',
  },
  {
    id: 'ASG-203',
    title: 'The Delhi Sultanate Monuments Photo Essay',
    subject: 'Social Science',
    teacher: 'Mrs. Sunita Rao',
    assignedDate: '07 Oct 2026',
    dueDate: '17 Oct 2026',
    maxMarks: 20,
    status: 'pending',
    rubric: [
      { parameter: 'Architectural Feature Identification', max: 8 },
      { parameter: 'Historical Notes', max: 7 },
      { parameter: 'Creativity & Layout', max: 5 },
    ],
    attachmentName: 'History_Project_Delhi_Sultans.pdf',
    childId: 'ananya',
  },
];

export const ParentAssignments: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [activeTab, setActiveTab] = useState<'all' | 'graded' | 'submitted' | 'pending'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(mockAssignments[0]);

  const childAssignments = mockAssignments.filter(a => a.childId === selectedChild);

  const filteredAssignments = childAssignments.filter(a => {
    const matchesTab = activeTab === 'all' || a.status === activeTab;
    const matchesSearch = a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          a.teacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const totalAssigned = childAssignments.length;
  const gradedCount = childAssignments.filter(a => a.status === 'graded').length;
  const pendingCount = childAssignments.filter(a => a.status === 'pending').length;
  const avgScore = gradedCount > 0 
    ? (childAssignments.filter(a => a.obtainedMarks !== undefined).reduce((acc, curr) => acc + (curr.obtainedMarks! / curr.maxMarks) * 100, 0) / gradedCount).toFixed(1)
    : '0';

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Academic Project & Practical Assignments"
      description="Track term projects, practical submissions, teacher rubric evaluations, and CBSE internal assessment scores."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Academic Project & Practical Assignments</h1>
          <p className="text-sm text-gray-600 mt-1">
            Track term projects, practical submissions, teacher rubric evaluations, and CBSE internal assessment scores.
          </p>
        </div>

        {/* Child Selector Pill */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => { setSelectedChild('rahul'); setSelectedAssignment(mockAssignments[0]); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => { setSelectedChild('ananya'); setSelectedAssignment(mockAssignments[5]); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Total Assignments</span>
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><FileText className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">{totalAssigned}</span>
            <span className="text-xs text-gray-500">Term 1 Assigned</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Evaluated & Graded</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">{gradedCount}</span>
            <span className="text-xs text-emerald-700 font-medium">Marks published</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Pending / In Progress</span>
            <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-600">{pendingCount}</span>
            <span className="text-xs text-amber-700 font-medium">Due within 7 days</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Avg. Internal Score</span>
            <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><Award className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-purple-600">{avgScore}%</span>
            <span className="text-xs text-purple-700 font-medium">CBSE Weightage: 20 pts</span>
          </div>
        </div>
      </div>

      {/* Main Content: Split List and Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List Column */}
        <div className="lg:col-span-7 space-y-4">
          {/* Filters and Search Bar */}
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by assignment title, subject or teacher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All ({childAssignments.length})
              </button>
              <button
                onClick={() => setActiveTab('graded')}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'graded' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Graded ({childAssignments.filter(a => a.status === 'graded').length})
              </button>
              <button
                onClick={() => setActiveTab('submitted')}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'submitted' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Under Review ({childAssignments.filter(a => a.status === 'submitted').length})
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeTab === 'pending' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Due Soon ({childAssignments.filter(a => a.status === 'pending').length})
              </button>
            </div>
          </div>

          {/* List of Cards */}
          <div className="space-y-3">
            {filteredAssignments.map((assignment) => {
              const isSelected = selectedAssignment?.id === assignment.id;
              return (
                <div
                  key={assignment.id}
                  onClick={() => setSelectedAssignment(assignment)}
                  className={`p-4 bg-white rounded-xl border transition-all cursor-pointer ${
                    isSelected 
                      ? 'border-indigo-500 ring-2 ring-indigo-50 shadow-md' 
                      : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">
                          {assignment.subject}
                        </span>
                        {assignment.status === 'graded' && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Graded ({assignment.obtainedMarks}/{assignment.maxMarks})
                          </span>
                        )}
                        {assignment.status === 'submitted' && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> Under Review
                          </span>
                        )}
                        {assignment.status === 'pending' && (
                          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" /> Due Soon
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">{assignment.title}</h3>
                      <p className="text-xs text-gray-500 flex items-center gap-3">
                        <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {assignment.teacher}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> Due: {assignment.dueDate}</span>
                      </p>
                    </div>

                    <div className="text-right flex flex-col items-end">
                      <span className="text-sm font-bold text-gray-900">
                        {assignment.obtainedMarks !== undefined ? `${assignment.obtainedMarks} / ${assignment.maxMarks}` : `${assignment.maxMarks} Marks`}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 mt-2" />
                    </div>
                  </div>
                </div>
              );
            })}

            {filteredAssignments.length === 0 && (
              <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
                <FileText className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                <p className="text-sm font-medium">No assignments match your search filter.</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Detail Pane */}
        <div className="lg:col-span-5">
          {selectedAssignment ? (
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-5 sticky top-6">
              <div className="border-b border-gray-100 pb-4">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
                  <span>Assignment Ref: #{selectedAssignment.id}</span>
                  <span className="font-medium text-indigo-600">{selectedAssignment.subject}</span>
                </div>
                <h2 className="text-lg font-bold text-gray-900">{selectedAssignment.title}</h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs text-gray-600">Mentor: <strong>{selectedAssignment.teacher}</strong></span>
                </div>
              </div>

              {/* Due Date & Submission Timeline */}
              <div className="bg-gray-50 p-3.5 rounded-lg text-xs space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Assigned On:</span>
                  <span className="font-medium text-gray-900">{selectedAssignment.assignedDate}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Submission Deadline:</span>
                  <span className="font-semibold text-rose-600">{selectedAssignment.dueDate}</span>
                </div>
                {selectedAssignment.submittedDate && (
                  <div className="flex justify-between text-gray-600">
                    <span>Submitted By Student:</span>
                    <span className="font-semibold text-emerald-700">{selectedAssignment.submittedDate} (On-time)</span>
                  </div>
                )}
              </div>

              {/* Rubric Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-900 flex items-center justify-between">
                  <span>CBSE Evaluation Rubric</span>
                  <span className="text-xs font-medium text-gray-500">Total: {selectedAssignment.maxMarks} pts</span>
                </h4>
                <div className="space-y-2">
                  {selectedAssignment.rubric.map((r, i) => (
                    <div key={i} className="p-2.5 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex justify-between text-xs font-medium text-gray-800">
                        <span>{r.parameter}</span>
                        <span>{r.scored !== undefined ? `${r.scored} / ${r.max}` : `${r.max} max`}</span>
                      </div>
                      <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div 
                          className="bg-indigo-600 h-1.5 rounded-full" 
                          style={{ width: `${r.scored !== undefined ? (r.scored / r.max) * 100 : 0}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Teacher Remarks / Feedback */}
              {selectedAssignment.teacherFeedback && (
                <div className="p-3.5 bg-indigo-50/60 rounded-xl border border-indigo-100 space-y-1">
                  <p className="text-xs font-semibold text-indigo-900 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Teacher's Evaluation Feedback
                  </p>
                  <p className="text-xs text-indigo-800 leading-relaxed italic">
                    "{selectedAssignment.teacherFeedback}"
                  </p>
                </div>
              )}

              {/* Submitted File attachment */}
              {selectedAssignment.attachmentName && (
                <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-white">
                  <div className="flex items-center gap-2 text-xs truncate max-w-[200px]">
                    <FileText className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                    <span className="font-medium text-gray-800 truncate">{selectedAssignment.attachmentName}</span>
                  </div>
                  <button 
                    onClick={() => alert(`Downloading student practical attachment: ${selectedAssignment.attachmentName}`)}
                    className="flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-800 font-semibold px-2 py-1 rounded bg-indigo-50"
                  >
                    <Download className="w-3.5 h-3.5" /> Download
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
              Select an assignment on the left to view the rubric and evaluation.
            </div>
          )}
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
