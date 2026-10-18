import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Users, Search, Filter, Mail, Phone, Award, 
  CheckCircle2, AlertTriangle, ArrowUpDown, ChevronRight, 
  ExternalLink, UserCheck, ShieldAlert, Download, MessageSquare
} from 'lucide-react';

interface Student {
  rollNo: string;
  name: string;
  email: string;
  phone: string;
  section: 'Sec A' | 'Sec B';
  batch: 'A1' | 'A2' | 'B1' | 'B2';
  courses: string[];
  attendance: number;
  cgpa: number;
  isMentee: boolean;
  projectTeam?: string;
}

export function FacultyStudents() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [sectionFilter, setSectionFilter] = useState<'All' | 'Sec A' | 'Sec B'>('All');
  const [filterType, setFilterType] = useState<'all' | 'mentees' | 'lowAttendance'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const studentsList: Student[] = [
    {
      rollNo: '21CS1048',
      name: 'Shivam Sharma',
      email: 'shivam.cse21@apex.edu.in',
      phone: '+91 98765 43210',
      section: 'Sec A',
      batch: 'A1',
      courses: ['CS703 (Adv DBMS)', 'CS706P (Capstone Guide)'],
      attendance: 86.4,
      cgpa: 8.42,
      isMentee: true,
      projectTeam: 'Team 04: AI ERP Architecture'
    },
    {
      rollNo: '21CS1045',
      name: 'Rahul Verma',
      email: 'rahul.v@apex.edu.in',
      phone: '+91 98112 34567',
      section: 'Sec B',
      batch: 'B1',
      courses: ['CS701 (Machine Learning)'],
      attendance: 68.2,
      cgpa: 7.15,
      isMentee: true
    },
    {
      rollNo: '21CS1102',
      name: 'Neha Singh',
      email: 'neha.s@apex.edu.in',
      phone: '+91 98334 56789',
      section: 'Sec A',
      batch: 'A2',
      courses: ['CS703 (Adv DBMS)'],
      attendance: 71.4,
      cgpa: 7.80,
      isMentee: false
    },
    {
      rollNo: '21CS1088',
      name: 'Amit Patel',
      email: 'amit.p@apex.edu.in',
      phone: '+91 98223 45678',
      section: 'Sec B',
      batch: 'B2',
      courses: ['CS701 (Machine Learning)'],
      attendance: 64.0,
      cgpa: 6.90,
      isMentee: false
    },
    {
      rollNo: '21CS1012',
      name: 'Priya Sundaram',
      email: 'priya.s@apex.edu.in',
      phone: '+91 98901 23456',
      section: 'Sec A',
      batch: 'A1',
      courses: ['CS703 (Adv DBMS)', 'CS706P (Capstone Guide)'],
      attendance: 94.2,
      cgpa: 9.18,
      isMentee: true,
      projectTeam: 'Team 04: AI ERP Architecture'
    },
    {
      rollNo: '21CS1034',
      name: 'Ananya Roy',
      email: 'ananya.r@apex.edu.in',
      phone: '+91 98711 22334',
      section: 'Sec B',
      batch: 'B1',
      courses: ['CS701 (Machine Learning)'],
      attendance: 88.5,
      cgpa: 8.65,
      isMentee: true
    },
    {
      rollNo: '21CS1066',
      name: 'Vikramaditya Rao',
      email: 'vikram.r@apex.edu.in',
      phone: '+91 98450 11223',
      section: 'Sec A',
      batch: 'A2',
      courses: ['CS703 (Adv DBMS)'],
      attendance: 78.0,
      cgpa: 7.95,
      isMentee: false
    },
    {
      rollNo: '21CS1019',
      name: 'Aditya Kashyap',
      email: 'aditya.k@apex.edu.in',
      phone: '+91 98445 67890',
      section: 'Sec A',
      batch: 'A1',
      courses: ['CS703 (Adv DBMS)'],
      attendance: 69.0,
      cgpa: 7.20,
      isMentee: false
    },
    {
      rollNo: '21CS1092',
      name: 'Divya Khurana',
      email: 'divya.k@apex.edu.in',
      phone: '+91 98101 99887',
      section: 'Sec B',
      batch: 'B2',
      courses: ['CS701 (Machine Learning)', 'CS706P (Capstone Guide)'],
      attendance: 91.0,
      cgpa: 8.92,
      isMentee: true,
      projectTeam: 'Team 01: Healthcare AI'
    }
  ];

  const filteredStudents = studentsList.filter(s => {
    const matchesSection = sectionFilter === 'All' || s.section === sectionFilter;
    const matchesType = 
      filterType === 'all' ? true :
      filterType === 'mentees' ? s.isMentee :
      filterType === 'lowAttendance' ? s.attendance < 75 : true;
    const matchesSearch = 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.email.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesSection && matchesType && matchesSearch;
  });

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Students & Batches" 
      description="Student roster across assigned 7th semester divisions, attendance statistics, and mentee linkages."
    >
      {/* Top Stat Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Total Enrolled</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">142 Students</p>
          <p className="text-[10px] text-slate-500">Sec A: 70 • Sec B: 72</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Assigned Mentees</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">24 Students</p>
          <p className="text-[10px] text-purple-600 font-semibold">Under Dr. Ankit Sharma</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Low Attendance</p>
          <p className="text-xl font-black text-red-600 mt-0.5">4 Flagged (&lt;75%)</p>
          <p className="text-[10px] text-red-500 font-semibold">Notice generated</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[11px] font-bold text-slate-400 uppercase">Batch Average CGPA</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">8.14 / 10</p>
          <p className="text-[10px] text-slate-500">89% First Class Distinction</p>
        </div>
      </div>

      {/* Filter and Control Bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Section Selector */}
          <div className="flex bg-slate-100 p-1 rounded-xl">
            {(['All', 'Sec A', 'Sec B'] as const).map(sec => (
              <button
                key={sec}
                onClick={() => setSectionFilter(sec)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  sectionFilter === sec ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Quick Filters */}
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
              filterType === 'all' ? 'bg-[#7c3aed] text-white' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
            }`}
          >
            All (142)
          </button>
          <button
            onClick={() => setFilterType('mentees')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              filterType === 'mentees' ? 'bg-[#7c3aed] text-white' : 'bg-purple-50 text-[#7c3aed] hover:bg-purple-100'
            }`}
          >
            <UserCheck size={13} />
            <span>My Mentees (24)</span>
          </button>
          <button
            onClick={() => setFilterType('lowAttendance')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
              filterType === 'lowAttendance' ? 'bg-red-600 text-white' : 'bg-red-50 text-red-600 hover:bg-red-100'
            }`}
          >
            <ShieldAlert size={13} />
            <span>&lt; 75% Attendance</span>
          </button>
        </div>

        {/* Search Input & Export */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search roll no or name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>
          <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-all" title="Export Roster">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50/70 border-b border-slate-100 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Student Details</th>
                <th className="py-3.5 px-4">Section / Batch</th>
                <th className="py-3.5 px-4">Enrolled Subject(s)</th>
                <th className="py-3.5 px-4">Attendance</th>
                <th className="py-3.5 px-4">CGPA</th>
                <th className="py-3.5 px-4">Mentorship & Project</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredStudents.map((s) => (
                <tr key={s.rollNo} className="hover:bg-slate-50/80 transition-all">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-xs">
                        {s.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 flex items-center gap-1.5">
                          <span>{s.name}</span>
                          {s.isMentee && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                              Mentee
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-400 font-mono">{s.rollNo} • {s.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800">{s.section}</span>
                    <span className="text-slate-400 text-[11px] block">{s.batch}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex flex-col gap-0.5">
                      {s.courses.map((c, i) => (
                        <span key={i} className="text-[11px] text-slate-600 font-medium">
                          • {c}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-black ${
                      s.attendance < 75 
                        ? 'bg-red-50 text-red-600 border border-red-100' 
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    }`}>
                      {s.attendance}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-black text-slate-900">{s.cgpa}</span>
                    <span className="text-slate-400 text-[10px]"> / 10</span>
                  </td>
                  <td className="py-3.5 px-4">
                    {s.projectTeam ? (
                      <span className="text-[11px] font-medium text-purple-700 bg-purple-50 px-2 py-0.5 rounded-md">
                        {s.projectTeam}
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-400">-</span>
                    )}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <button 
                        onClick={() => setSelectedStudent(s)}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-[#7c3aed] hover:bg-purple-50 transition-all"
                        title="View Profile Card"
                      >
                        <UserCheck size={16} />
                      </button>
                      <a 
                        href={`mailto:${s.email}`}
                        className="p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-all"
                        title="Send Email"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Student Profile Modal */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex items-start justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-lg">
                  {selectedStudent.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{selectedStudent.name}</h3>
                  <p className="text-xs text-slate-400 font-mono">{selectedStudent.rollNo} • {selectedStudent.section}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedStudent(null)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold p-1"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-500">Official Email:</span>
                <span className="font-semibold text-slate-800">{selectedStudent.email}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-500">Contact Number:</span>
                <span className="font-semibold text-slate-800">{selectedStudent.phone}</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-500">Attendance Ratio:</span>
                <span className={`font-bold ${selectedStudent.attendance < 75 ? 'text-red-600' : 'text-emerald-600'}`}>
                  {selectedStudent.attendance}% {selectedStudent.attendance < 75 ? '(Shortage Notice Sent)' : '(Satisfactory)'}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-slate-50">
                <span className="text-slate-500">Cumulative CGPA:</span>
                <span className="font-bold text-slate-800">{selectedStudent.cgpa} / 10.0</span>
              </div>
              {selectedStudent.projectTeam && (
                <div className="flex justify-between py-1.5 border-b border-slate-50">
                  <span className="text-slate-500">Capstone Project:</span>
                  <span className="font-bold text-purple-700">{selectedStudent.projectTeam}</span>
                </div>
              )}
            </div>

            <div className="pt-3 flex gap-2">
              <button 
                onClick={() => setSelectedStudent(null)}
                className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all"
              >
                Close
              </button>
              <a 
                href={`mailto:${selectedStudent.email}`}
                className="flex-1 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold transition-all text-center"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
