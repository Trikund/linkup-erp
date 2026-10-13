import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  NotebookPen, Search, Filter, Download, CheckCircle2, 
  Clock, AlertCircle, BookOpen, User, ChevronRight, Send
} from 'lucide-react';

interface HomeworkLog {
  id: string;
  classSection: string;
  subject: string;
  teacher: string;
  title: string;
  assignedDate: string;
  dueDate: string;
  submittedCount: number;
  totalStudents: number;
  status: 'Verified' | 'Pending Review' | 'Active';
}

const mockHomeworkLogs: HomeworkLog[] = [
  {
    id: 'HW-101',
    classSection: 'Class 10-A',
    subject: 'Mathematics',
    teacher: 'Mrs. Ananya Sharma',
    title: 'NCERT Ch 4 Quadratic Equations — Exercise 4.3 (Q 1 to 8)',
    assignedDate: '12 Oct 2026',
    dueDate: '13 Oct 2026',
    submittedCount: 40,
    totalStudents: 42,
    status: 'Verified',
  },
  {
    id: 'HW-102',
    classSection: 'Class 10-A',
    subject: 'Science (Physics)',
    teacher: 'Dr. Rajesh Sen',
    title: 'Series and Parallel Resistor Equivalent Formula Proofs',
    assignedDate: '12 Oct 2026',
    dueDate: '14 Oct 2026',
    submittedCount: 38,
    totalStudents: 42,
    status: 'Active',
  },
  {
    id: 'HW-103',
    classSection: 'Class 7-B',
    subject: 'General Science',
    teacher: 'Mrs. Neha Batra',
    title: 'Draw & Label Chloroplast & Plant Cell Organelles',
    assignedDate: '11 Oct 2026',
    dueDate: '13 Oct 2026',
    submittedCount: 37,
    totalStudents: 38,
    status: 'Verified',
  },
  {
    id: 'HW-104',
    classSection: 'Class 11-PCM',
    subject: 'Physics',
    teacher: 'Dr. Rajesh Sen',
    title: 'Kinematics Projectile Motion Numerical Problem Set 2',
    assignedDate: '12 Oct 2026',
    dueDate: '14 Oct 2026',
    submittedCount: 41,
    totalStudents: 44,
    status: 'Active',
  },
  {
    id: 'HW-105',
    classSection: 'Class 9-C',
    subject: 'English',
    teacher: 'Ms. Pooja Nair',
    title: 'Formal Editorial Letter Drafting (Water Conservation)',
    assignedDate: '10 Oct 2026',
    dueDate: '12 Oct 2026',
    submittedCount: 39,
    totalStudents: 40,
    status: 'Verified',
  },
];

export function AdminHomework() {
  const user = USERS.admin;
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('all');

  const filteredLogs = mockHomeworkLogs.filter(h => {
    const matchesSearch =
      h.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.teacher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      h.classSection.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = classFilter === 'all' || h.classSection.includes(classFilter);
    return matchesSearch && matchesClass;
  });

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Daily Homework & Student Workload Compliance" 
      description="Monitor class-wise homework assignments, teacher syllabus pacing, and student submission verification rates."
    >
      <div className="space-y-6">
        {/* KPI Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Active Homework Tasks</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">184 Tasks</div>
            <div className="text-xs text-gray-500 mt-0.5">Across 64 Classrooms Today</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Submission Rate</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">94.8%</div>
            <div className="text-xs text-emerald-600 mt-0.5">High On-Time Submission</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Average Daily Load</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">1.4 Hours / Day</div>
            <div className="text-xs text-indigo-600 mt-0.5">Strict CBSE Homework Norm</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Teacher Correction Rate</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">96.2%</div>
            <div className="text-xs text-purple-600 mt-0.5">Evaluated within 48 hours</div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search homework task, subject, teacher or class..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
            >
              <option value="all">All Classes</option>
              <option value="10">Class 10</option>
              <option value="7">Class 7</option>
              <option value="11">Class 11</option>
              <option value="9">Class 9</option>
            </select>

            <button
              onClick={() => alert('Downloading Daily School Homework Digest Bulletin (PDF)')}
              className="px-3.5 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> PDF Bulletin
            </button>
          </div>
        </div>

        {/* Homework Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Class & Subject</th>
                  <th className="py-3 px-4">Homework Title & NCERT Reference</th>
                  <th className="py-3 px-4">Assigned Mentor</th>
                  <th className="py-3 px-4">Assigned Date</th>
                  <th className="py-3 px-4">Due Date</th>
                  <th className="py-3 px-4">Submission Progress</th>
                  <th className="py-3 px-4">Evaluation Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filteredLogs.map((hw) => {
                  const pct = Math.round((hw.submittedCount / hw.totalStudents) * 100);
                  return (
                    <tr key={hw.id} className="hover:bg-indigo-50/30 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-gray-900">{hw.classSection}</div>
                        <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                          {hw.subject}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-gray-900 max-w-sm">
                        {hw.title}
                      </td>
                      <td className="py-3.5 px-4 font-medium text-gray-700">
                        {hw.teacher}
                      </td>
                      <td className="py-3.5 px-4 text-gray-500">{hw.assignedDate}</td>
                      <td className="py-3.5 px-4 font-bold text-rose-600">{hw.dueDate}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{hw.submittedCount}/{hw.totalStudents}</span>
                          <div className="w-16 bg-gray-200 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          hw.status === 'Verified' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {hw.status}
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
