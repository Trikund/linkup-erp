import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Users, 
  Search, 
  Filter, 
  Phone, 
  Mail, 
  CheckCircle2, 
  AlertTriangle, 
  FileText, 
  UserCheck, 
  GraduationCap,
  Sparkles,
  ChevronDown,
  X,
  ExternalLink,
  Heart
} from 'lucide-react';

interface StudentData {
  id: number;
  roll: number;
  admNo: string;
  name: string;
  avatar: string;
  class: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  attendance: number;
  avgGrade: string;
  gpa: number;
  behavior: 'Exemplary' | 'Good' | 'Needs Attention';
  notes: string;
  bloodGroup: string;
}

export function TeacherStudents() {
  const user = USERS.teacher;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('10-A');
  const [filterType, setFilterType] = useState<'all' | 'high' | 'remedial' | 'low-att'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentData | null>(null);

  const students: StudentData[] = [
    {
      id: 1,
      roll: 1,
      admNo: 'DPS/2021/1001',
      name: 'Aarav Gupta',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mr. Vivek Gupta',
      parentPhone: '+91 98110 23411',
      parentEmail: 'vivek.gupta@corp.in',
      attendance: 98,
      avgGrade: 'A1',
      gpa: 9.8,
      behavior: 'Exemplary',
      notes: 'Class Monitor. Excellent problem-solving skills in Quadratic Equations. National Math Olympiad qualifier.',
      bloodGroup: 'B+'
    },
    {
      id: 2,
      roll: 2,
      admNo: 'DPS/2021/1008',
      name: 'Ananya Joshi',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mrs. Rekha Joshi',
      parentPhone: '+91 98711 44520',
      parentEmail: 'rekha.j@gmail.com',
      attendance: 95,
      avgGrade: 'A1',
      gpa: 9.4,
      behavior: 'Exemplary',
      notes: 'Consistently submits homework before deadlines. Participates actively in Vedic math speed tests.',
      bloodGroup: 'O+'
    },
    {
      id: 3,
      roll: 3,
      admNo: 'DPS/2021/1014',
      name: 'Aryan Kapoor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mr. Sanjeev Kapoor',
      parentPhone: '+91 98223 99102',
      parentEmail: 'sanjeev.k@hotmail.com',
      attendance: 88,
      avgGrade: 'B1',
      gpa: 7.8,
      behavior: 'Good',
      notes: 'Good conceptual clarity in Algebra. Needs regular homework tracking and speed improvement.',
      bloodGroup: 'A+'
    },
    {
      id: 4,
      roll: 4,
      admNo: 'DPS/2021/1020',
      name: 'Diya Sen',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Dr. Debashish Sen',
      parentPhone: '+91 99100 81234',
      parentEmail: 'debashish.sen@aiims.edu',
      attendance: 96,
      avgGrade: 'A1',
      gpa: 9.6,
      behavior: 'Exemplary',
      notes: 'Girl Class Representative. Shows keen enthusiasm in mathematical proofs and theorems.',
      bloodGroup: 'AB+'
    },
    {
      id: 5,
      roll: 14,
      admNo: 'DPS/2021/1042',
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mr. Rajesh Sharma',
      parentPhone: '+91 98112 45890',
      parentEmail: 'rajesh.sharma@tcs.com',
      attendance: 92,
      avgGrade: 'A2',
      gpa: 8.8,
      behavior: 'Good',
      notes: 'Diligent student. Active sports participant. Shows rapid improvement in coordinate geometry.',
      bloodGroup: 'O+'
    },
    {
      id: 6,
      roll: 18,
      admNo: 'DPS/2021/1055',
      name: 'Rohan Mehta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mr. Alok Mehta',
      parentPhone: '+91 98450 11920',
      parentEmail: 'alok.mehta@finvest.in',
      attendance: 71,
      avgGrade: 'C1',
      gpa: 5.6,
      behavior: 'Needs Attention',
      notes: 'Attendance below 75% CBSE threshold. Needs remedial attention in Quadratic Equations and word problems.',
      bloodGroup: 'B-'
    },
    {
      id: 7,
      roll: 22,
      admNo: 'DPS/2021/1068',
      name: 'Priya Sen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mrs. Shampa Sen',
      parentPhone: '+91 98119 44321',
      parentEmail: 'shampa.sen@gmail.com',
      attendance: 94,
      avgGrade: 'A2',
      gpa: 8.6,
      behavior: 'Good',
      notes: 'Well organized notebook and neat homework submissions. Very disciplined.',
      bloodGroup: 'O+'
    },
    {
      id: 8,
      roll: 28,
      admNo: 'DPS/2021/1089',
      name: 'Tanmay Bhatt',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop',
      class: '10-A',
      parentName: 'Mr. Harish Bhatt',
      parentPhone: '+91 98104 77291',
      parentEmail: 'h.bhatt@tech.com',
      attendance: 73,
      avgGrade: 'C2',
      gpa: 5.2,
      behavior: 'Needs Attention',
      notes: 'Frequently misses morning homework submissions. Recommended for zero-period doubt clinic.',
      bloodGroup: 'A-'
    },
    {
      id: 9,
      roll: 5,
      admNo: 'DPS/2021/2005',
      name: 'Kabir Verma',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop',
      class: '10-B',
      parentName: 'Mr. Sunil Verma',
      parentPhone: '+91 97112 00491',
      parentEmail: 'sunil.v@corp.com',
      attendance: 91,
      avgGrade: 'B1',
      gpa: 7.9,
      behavior: 'Good',
      notes: 'Good participation during classroom problem sessions.',
      bloodGroup: 'B+'
    },
    {
      id: 10,
      roll: 12,
      admNo: 'DPS/2021/2012',
      name: 'Simran Kaur',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
      class: '10-B',
      parentName: 'Mr. Harpreet Singh',
      parentPhone: '+91 98114 88301',
      parentEmail: 'harpreet.k@outlook.com',
      attendance: 95,
      avgGrade: 'A1',
      gpa: 9.3,
      behavior: 'Exemplary',
      notes: 'Top scorer in Chapter 7 Coordinate Geometry unit test.',
      bloodGroup: 'O+'
    }
  ];

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.admNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.roll.toString().includes(searchQuery);
    const matchesClass = selectedClass === 'all' || s.class === selectedClass;
    
    let matchesFilter = true;
    if (filterType === 'high') matchesFilter = s.gpa >= 9.0;
    if (filterType === 'remedial') matchesFilter = s.gpa < 6.5;
    if (filterType === 'low-att') matchesFilter = s.attendance < 75;

    return matchesSearch && matchesClass && matchesFilter;
  });

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Student Directory & Roster"
      description="Manage student academic profiles, parent contacts, attendance health, and behavioral notes."
    >
      <div className="space-y-8">

        {/* TOP METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Taught</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">184</span>
              <span className="text-xs font-bold text-blue-600">4 Sections</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Under Mathematics Department</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Class 10-A (Mentor)</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">42</span>
              <span className="text-xs font-bold text-purple-600">Mentor Class</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">22 Boys • 20 Girls</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">High Achievers (&gt;90%)</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-700">54</span>
              <span className="text-xs font-bold text-emerald-600">Grade A1 / A2</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Eligible for Olympiads</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Remedial Focus</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-amber-600">18</span>
              <span className="text-xs font-bold text-rose-600">Needs Support</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Zero-period coaching assigned</p>
          </div>
        </div>

        {/* CONTROLS: SEARCH & CLASS SELECTOR */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by student name, roll number, or admission no..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              />
            </div>

            {/* Class Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: '10-A', label: 'Class 10-A (Mentor)' },
                { id: '10-B', label: 'Class 10-B' },
                { id: 'all', label: 'All Classes (184)' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setSelectedClass(t.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                    selectedClass === t.id 
                      ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Sub Filters */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
            <span className="text-slate-400 font-bold mr-2 uppercase tracking-wider">Filter:</span>
            {[
              { id: 'all', label: 'All Students' },
              { id: 'high', label: 'Top Performers (GPA 9.0+)' },
              { id: 'remedial', label: 'Needs Remedial Support' },
              { id: 'low-att', label: 'Low Attendance (<75%)' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setFilterType(f.id as any)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                  filterType === f.id
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* STUDENT ROSTER TABLE */}
        <div className="bg-white border border-slate-100 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Student Roster ({filteredStudents.length} Students Listed)
              </h3>
              <p className="text-sm text-slate-500">Official CBSE Enrollment Records & Parent Directory</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                  <th className="py-3.5 px-6 font-bold">Roll / Adm</th>
                  <th className="py-3.5 px-6 font-bold">Student Name</th>
                  <th className="py-3.5 px-6 font-bold">Class</th>
                  <th className="py-3.5 px-6 font-bold">Parent Contact</th>
                  <th className="py-3.5 px-6 font-bold text-center">Attendance</th>
                  <th className="py-3.5 px-6 font-bold text-center">Term GPA</th>
                  <th className="py-3.5 px-6 font-bold">Behavior / Notes</th>
                  <th className="py-3.5 px-6 font-bold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredStudents.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50/60 transition group">
                    <td className="py-4 px-6 font-mono font-bold text-slate-800">
                      <div>#{s.roll}</div>
                      <div className="text-[11px] font-normal text-slate-400">{s.admNo}</div>
                    </td>

                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img 
                          src={s.avatar} 
                          alt={s.name} 
                          className="w-10 h-10 rounded-full object-cover border border-slate-200"
                        />
                        <div>
                          <p className="font-bold text-slate-900 text-base">{s.name}</p>
                          <span className="text-xs text-slate-400">Blood: {s.bloodGroup}</span>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-6 font-bold text-slate-700">
                      <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {s.class}
                      </span>
                    </td>

                    <td className="py-4 px-6">
                      <div className="text-xs font-semibold text-slate-800">{s.parentName}</div>
                      <div className="text-xs text-slate-500 font-mono flex items-center gap-1 mt-0.5">
                        <Phone className="w-3 h-3 text-slate-400" />
                        {s.parentPhone}
                      </div>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold ${
                        s.attendance >= 90 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        s.attendance >= 75 ? 'bg-blue-50 text-blue-700 border border-blue-200' :
                        'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {s.attendance}%
                      </span>
                    </td>

                    <td className="py-4 px-6 text-center">
                      <div className="font-extrabold text-slate-900 text-base">{s.gpa}</div>
                      <div className="text-xs font-bold text-blue-600">{s.avgGrade}</div>
                    </td>

                    <td className="py-4 px-6 max-w-xs">
                      <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                        s.behavior === 'Exemplary' ? 'bg-emerald-100 text-emerald-800' :
                        s.behavior === 'Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {s.behavior}
                      </span>
                      <p className="text-xs text-slate-500 truncate mt-1" title={s.notes}>
                        {s.notes}
                      </p>
                    </td>

                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => setSelectedStudent(s)}
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm"
                      >
                        Dossier
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MODAL: STUDENT DOSSIER DRAWER */}
        {selectedStudent && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-6">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <img 
                    src={selectedStudent.avatar} 
                    alt={selectedStudent.name} 
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-slate-200"
                  />
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900">{selectedStudent.name}</h3>
                    <p className="text-sm font-semibold text-blue-600">
                      Class {selectedStudent.class} • Roll #{selectedStudent.roll} • {selectedStudent.admNo}
                    </p>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedStudent(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Student Overview Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold block">Attendance</span>
                  <span className="text-lg font-black text-slate-900 mt-0.5 block">{selectedStudent.attendance}%</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold block">Term GPA</span>
                  <span className="text-lg font-black text-blue-600 mt-0.5 block">{selectedStudent.gpa}</span>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl">
                  <span className="text-xs text-slate-400 font-bold block">Grade</span>
                  <span className="text-lg font-black text-emerald-600 mt-0.5 block">{selectedStudent.avgGrade}</span>
                </div>
              </div>

              {/* Parent & Contact Details */}
              <div className="space-y-3 text-sm p-4 bg-slate-50/70 rounded-xl border border-slate-100">
                <div className="font-bold text-slate-900 text-xs uppercase tracking-wider">Parent & Emergency Contact</div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Guardian Name:</span>
                  <span className="font-bold text-slate-800">{selectedStudent.parentName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Mobile Phone:</span>
                  <span className="font-bold text-blue-600 font-mono">{selectedStudent.parentPhone}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Registered Email:</span>
                  <span className="font-bold text-slate-800">{selectedStudent.parentEmail}</span>
                </div>
              </div>

              {/* Teacher Remarks Box */}
              <div className="space-y-2">
                <span className="font-bold text-slate-900 text-sm">Class Teacher's Observations:</span>
                <p className="text-sm text-slate-600 bg-blue-50/50 p-3.5 rounded-xl border border-blue-100 leading-relaxed">
                  "{selectedStudent.notes}"
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href={`tel:${selectedStudent.parentPhone}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold text-center transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call Parent
                </a>
                <button
                  onClick={() => setSelectedStudent(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
