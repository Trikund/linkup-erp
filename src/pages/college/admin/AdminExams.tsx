import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileBadge, Calendar, Clock, AlertTriangle, ShieldCheck, 
  Download, Plus, Search, Filter, CheckCircle2, Lock, Eye, Users
} from 'lucide-react';

interface ExamSession {
  id: string;
  courseCode: string;
  courseTitle: string;
  department: string;
  date: string;
  timeSlot: string;
  candidatesCount: number;
  assignedHalls: string[];
  chiefSuperintendent: string;
  paperVaultStatus: 'Locked & Encrypted' | 'Unsealed' | 'Printed';
  status: 'Scheduled' | 'In Progress' | 'Completed';
}

export function AdminExams() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const examSessions: ExamSession[] = [
    {
      id: 'EXAM-2026-081',
      courseCode: 'CS701',
      courseTitle: 'Cloud Computing & Distributed Systems',
      department: 'Computer Science & Engineering',
      date: 'Dec 15, 2026',
      timeSlot: '10:00 AM - 01:00 PM (FN)',
      candidatesCount: 720,
      assignedHalls: ['LH-101', 'LH-102', 'Audi-1'],
      chiefSuperintendent: 'Dr. Ankit Sharma (HOD CSE)',
      paperVaultStatus: 'Locked & Encrypted',
      status: 'Scheduled'
    },
    {
      id: 'EXAM-2026-082',
      courseCode: 'CS702',
      courseTitle: 'Deep Learning & Neural Architectures',
      department: 'Computer Science & Engineering',
      date: 'Dec 18, 2026',
      timeSlot: '10:00 AM - 01:00 PM (FN)',
      candidatesCount: 680,
      assignedHalls: ['LH-103', 'LH-104', 'Audi-2'],
      chiefSuperintendent: 'Dr. Meenakshi Sundaram',
      paperVaultStatus: 'Locked & Encrypted',
      status: 'Scheduled'
    },
    {
      id: 'EXAM-2026-083',
      courseCode: 'MB601',
      courseTitle: 'Corporate Financial Strategy & Valuation',
      department: 'Management Studies (MBA)',
      date: 'Dec 16, 2026',
      timeSlot: '02:00 PM - 05:00 PM (AN)',
      candidatesCount: 340,
      assignedHalls: ['DOMS-Hall 1', 'DOMS-Hall 2'],
      chiefSuperintendent: 'Dr. S. K. Mittal',
      paperVaultStatus: 'Locked & Encrypted',
      status: 'Scheduled'
    },
    {
      id: 'EXAM-2026-084',
      courseCode: 'EC503',
      courseTitle: 'VLSI Design & Embedded Architecture',
      department: 'Electronics & Communication',
      date: 'Dec 19, 2026',
      timeSlot: '10:00 AM - 01:00 PM (FN)',
      candidatesCount: 420,
      assignedHalls: ['LH-201', 'LH-202'],
      chiefSuperintendent: 'Dr. R. Ramanathan',
      paperVaultStatus: 'Locked & Encrypted',
      status: 'Scheduled'
    },
    {
      id: 'EXAM-2026-085',
      courseCode: 'AI301',
      courseTitle: 'Reinforcement Learning & Robotics',
      department: 'Artificial Intelligence & DS',
      date: 'Dec 22, 2026',
      timeSlot: '02:00 PM - 05:00 PM (AN)',
      candidatesCount: 380,
      assignedHalls: ['LH-301', 'LH-302'],
      chiefSuperintendent: 'Dr. Kavita Verma',
      paperVaultStatus: 'Locked & Encrypted',
      status: 'Scheduled'
    }
  ];

  const filteredSessions = examSessions.filter(session => {
    const matchesDept = filterDepartment === 'All' || session.department.includes(filterDepartment);
    const matchesSearch = session.courseCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          session.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          session.assignedHalls.some(h => h.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Controller of Exams (COE)' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg">
                <FileBadge className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Controller of Examinations (COE) Office</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Odd Sem 2026-27 Active
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Centralized exam administration, encrypted question bank custody, seating plans, and confidential invigilation rosters.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              Master Datesheet PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Plus className="w-4 h-4" />
              Schedule Exam Session
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Registered Candidates</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">12,450</div>
            <div className="mt-1 text-xs text-gray-500">Hall tickets issued: 12,210 (98.1%)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Exam Sessions</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><Calendar className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">128 Sessions</div>
            <div className="mt-1 text-xs text-gray-500">Across 14 departments (Dec 15 - 30)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Exam Halls & Labs</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">84 Halls</div>
            <div className="mt-1 text-xs text-gray-500">CCTV monitored & zero-blindspot</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Vault Security</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Lock className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">256-bit Encrypted</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Dual-key biometrics enabled</div>
          </div>
        </div>

        {/* Security & Anti-Malpractice Alert */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-amber-50 border border-purple-100 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-purple-600 text-white rounded-xl shadow-sm">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold text-gray-900">Autonomous Flying Squad & CCTV Command Center Active</h3>
              <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                48 flying squad members designated under Controller of Exams Dr. K. N. Murthy. AI-powered CCTV surveillance active across Central Blocks A, B, C and Main Auditorium. Zero incidents reported in mock drills.
              </p>
            </div>
            <button className="px-3 py-1.5 text-xs font-semibold text-[#7c3aed] bg-purple-100/60 hover:bg-purple-100 rounded-lg transition whitespace-nowrap">
              Flying Squad Roster
            </button>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by course code, title, hall number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Dept:</span>
            </div>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Management Studies">Management Studies</option>
              <option value="Electronics">Electronics</option>
              <option value="Artificial Intelligence">Artificial Intelligence</option>
            </select>
          </div>
        </div>

        {/* Sessions Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Upcoming End-Semester Exam Sessions (Dec 2026)</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredSessions.length} sessions</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Exam ID / Code</th>
                  <th className="py-3 px-4">Course Title & Department</th>
                  <th className="py-3 px-4">Date & Time Slot</th>
                  <th className="py-3 px-4">Candidates</th>
                  <th className="py-3 px-4">Assigned Halls</th>
                  <th className="py-3 px-4">Chief Invigilator</th>
                  <th className="py-3 px-4">Paper Vault</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredSessions.map((session) => (
                  <tr key={session.id} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-gray-900">
                      <div>{session.id}</div>
                      <span className="inline-block mt-0.5 px-2 py-0.5 bg-purple-50 text-[#7c3aed] font-mono text-[10px] rounded font-bold">
                        {session.courseCode}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{session.courseTitle}</div>
                      <div className="text-[11px] text-gray-500">{session.department}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-1.5 font-medium text-gray-800">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {session.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-500 mt-0.5">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {session.timeSlot}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-gray-800">
                      {session.candidatesCount} Enrolled
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {session.assignedHalls.map((hall, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-medium">
                            {hall}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-700 font-medium">
                      {session.chiefSuperintendent}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Lock className="w-3 h-3" />
                        {session.paperVaultStatus}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-1.5 hover:bg-gray-100 rounded text-gray-500 hover:text-gray-700 transition" title="View Seating Grid">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 hover:bg-gray-100 rounded text-[#7c3aed] transition" title="Download Attendance Sheet">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
