import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  ClipboardList, Search, Filter, Download, Plus, 
  CheckCircle2, Clock, Award, BookOpen, ChevronRight, X
} from 'lucide-react';

interface AssignmentRecord {
  id: string;
  classSection: string;
  subject: string;
  title: string;
  teacher: string;
  dueDate: string;
  maxMarks: number;
  weightage: string;
  gradedCount: number;
  totalStudents: number;
  status: 'Evaluated' | 'In Progress' | 'Assigned';
}

const mockAssignmentsList: AssignmentRecord[] = [
  {
    id: 'ASG-101',
    classSection: 'Class 10-A',
    subject: 'Mathematics',
    title: 'Linear Programming & Quadratic Optimization Model',
    teacher: 'Mrs. Ananya Sharma',
    dueDate: '08 Oct 2026',
    maxMarks: 25,
    weightage: 'CBSE Internal 20%',
    gradedCount: 42,
    totalStudents: 42,
    status: 'Evaluated',
  },
  {
    id: 'ASG-102',
    classSection: 'Class 10-A',
    subject: 'Science (Physics)',
    title: 'Ohm’s Law Verification & Resistivity Lab Report',
    teacher: 'Dr. Rajesh Sen',
    dueDate: '10 Oct 2026',
    maxMarks: 20,
    weightage: 'Practical Exam 20%',
    gradedCount: 40,
    totalStudents: 42,
    status: 'Evaluated',
  },
  {
    id: 'ASG-103',
    classSection: 'Class 10-A',
    subject: 'Information Tech',
    title: 'DBMS Schema Design for School Library Management',
    teacher: 'Mr. Amit Verma',
    dueDate: '14 Oct 2026',
    maxMarks: 30,
    weightage: 'CBSE Practical 50%',
    gradedCount: 28,
    totalStudents: 42,
    status: 'In Progress',
  },
  {
    id: 'ASG-104',
    classSection: 'Class 7-B',
    subject: 'General Science',
    title: '3D Plant vs Animal Cell Clay Model Presentation',
    teacher: 'Mrs. Neha Batra',
    dueDate: '07 Oct 2026',
    maxMarks: 20,
    weightage: 'Term 1 Project',
    gradedCount: 38,
    totalStudents: 38,
    status: 'Evaluated',
  },
  {
    id: 'ASG-105',
    classSection: 'Class 11-PCM',
    subject: 'Chemistry',
    title: 'Qualitative Salt Analysis (Cation & Anion Separation)',
    teacher: 'Mrs. Sunita Verma',
    dueDate: '18 Oct 2026',
    maxMarks: 30,
    weightage: 'CBSE Lab File 30%',
    gradedCount: 12,
    totalStudents: 44,
    status: 'In Progress',
  },
];

export function AdminAssignments() {
  const user = USERS.admin;
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filtered = mockAssignmentsList.filter(a => {
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.classSection.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || a.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Term Projects & Practical Lab Assessments" 
      description="Track CBSE internal assessment files, subject-wise rubric standards, submission deadlines, and departmental grading."
    >
      <div className="space-y-6">
        {/* KPI Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Term Projects</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">48 Projects</div>
            <div className="text-xs text-gray-500 mt-0.5">Across All Departments</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Evaluated & Graded</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">2,180 / 2,480</div>
            <div className="text-xs text-emerald-600 mt-0.5">87.9% Evaluation Complete</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Average Internal Score</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">89.4%</div>
            <div className="text-xs text-indigo-600 mt-0.5">High Performance Index</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">CBSE Weightage Pool</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">20 - 30 Marks</div>
            <div className="text-xs text-purple-600 mt-0.5">Synced with LOC Portal</div>
          </div>
        </div>

        {/* Search & Actions Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search assignment title, subject, mentor or class..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
            >
              <option value="all">All Status</option>
              <option value="Evaluated">Evaluated</option>
              <option value="In Progress">In Progress</option>
            </select>

            <button
              onClick={() => alert('Exporting Term 1 Practical Assessment Marks in CBSE LOC format (CSV)')}
              className="px-3.5 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export CBSE File
            </button>
          </div>
        </div>

        {/* Assignments Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Class & Subject</th>
                  <th className="py-3 px-4">Practical / Project Title</th>
                  <th className="py-3 px-4">Evaluating Mentor</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Max Marks</th>
                  <th className="py-3 px-4">Grading Progress</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filtered.map((asg) => {
                  const pct = Math.round((asg.gradedCount / asg.totalStudents) * 100);
                  return (
                    <tr key={asg.id} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-gray-900">{asg.classSection}</div>
                        <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                          {asg.subject}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-gray-900 max-w-sm">
                        {asg.title}
                        <div className="text-[10px] text-gray-400 mt-0.5">{asg.weightage}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-gray-700">
                        {asg.teacher}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-rose-600">
                        {asg.dueDate}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-gray-900">
                        {asg.maxMarks} Marks
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{asg.gradedCount}/{asg.totalStudents}</span>
                          <div className="w-16 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-emerald-600 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          asg.status === 'Evaluated' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {asg.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </SchoolLayout>
  );
}
