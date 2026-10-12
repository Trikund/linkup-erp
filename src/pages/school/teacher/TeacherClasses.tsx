import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  BookOpen, 
  Users, 
  CalendarClock, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  FileText, 
  Plus, 
  BarChart3, 
  ClipboardCheck, 
  GraduationCap,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export function TeacherClasses() {
  const user = USERS.teacher;
  const [activeTab, setActiveTab] = useState<'classes' | 'curriculum'>('classes');

  const classes = [
    {
      id: '10-A',
      name: 'Class 10 - Section A',
      subject: 'Mathematics (Standard) - Code 041',
      role: 'Class Teacher & Subject Mentor',
      isMentor: true,
      students: 42,
      boys: 22,
      girls: 20,
      room: 'Room 204 (Second Floor)',
      periodsPerWeek: 7,
      monitor: 'Aarav Gupta & Diya Sen',
      attendanceToday: '40/42 (95.2%)',
      syllabusProgress: 68,
      currentChapter: 'Chapter 4: Quadratic Equations',
      currentTopic: 'Discriminant & Nature of Roots (Ex 4.3)',
      nextTopic: 'Chapter 5: Arithmetic Progressions',
      avgClassScore: '84.6%'
    },
    {
      id: '10-B',
      name: 'Class 10 - Section B',
      subject: 'Mathematics (Standard) - Code 041',
      role: 'Subject Teacher',
      isMentor: false,
      students: 40,
      boys: 21,
      girls: 19,
      room: 'Room 205 (Second Floor)',
      periodsPerWeek: 6,
      monitor: 'Rohan Mehra & Sania Mirza',
      attendanceToday: '37/40 (92.5%)',
      syllabusProgress: 64,
      currentChapter: 'Chapter 7: Coordinate Geometry',
      currentTopic: 'Section Formula & Centroid Problems (Ex 7.2)',
      nextTopic: 'Chapter 8: Introduction to Trigonometry',
      avgClassScore: '78.2%'
    },
    {
      id: '9-B',
      name: 'Class 9 - Section B',
      subject: 'Mathematics - Code 041',
      role: 'Subject Teacher',
      isMentor: false,
      students: 40,
      boys: 19,
      girls: 21,
      room: 'Room 108 (First Floor)',
      periodsPerWeek: 6,
      monitor: 'Kabir Sharma & Ananya Joshi',
      attendanceToday: '38/40 (95.0%)',
      syllabusProgress: 72,
      currentChapter: 'Chapter 2: Polynomials',
      currentTopic: 'Remainder Theorem & Splitting Middle Term',
      nextTopic: 'Chapter 3: Coordinate Geometry',
      avgClassScore: '81.4%'
    },
    {
      id: '11-A',
      name: 'Class 11 - Section A',
      subject: 'Applied Mathematics - Code 241',
      role: 'Subject Teacher',
      isMentor: false,
      students: 38,
      boys: 20,
      girls: 18,
      room: 'Mathematics Lab 1 (Block C)',
      periodsPerWeek: 7,
      monitor: 'Vikrant Roy & Tanvi Bajaj',
      attendanceToday: '36/38 (94.7%)',
      syllabusProgress: 60,
      currentChapter: 'Chapter 3: Trigonometric Functions',
      currentTopic: 'Multiple Angle Formulas & Graphs',
      nextTopic: 'Chapter 4: Principle of Mathematical Induction',
      avgClassScore: '86.1%'
    }
  ];

  const cbseCurriculum = [
    { unit: 'Unit I', title: 'Number Systems (Real Numbers)', marks: 6, status: 'Completed', periods: 12 },
    { unit: 'Unit II', title: 'Algebra (Polynomials, Linear Equations, Quadratic Eq, AP)', marks: 20, status: 'In Progress (80%)', periods: 35 },
    { unit: 'Unit III', title: 'Coordinate Geometry (Lines in 2D, Distance & Section Formula)', marks: 6, status: 'In Progress (60%)', periods: 14 },
    { unit: 'Unit IV', title: 'Geometry (Triangles, Circles & Tangent Proofs)', marks: 15, status: 'Upcoming', periods: 28 },
    { unit: 'Unit V', title: 'Trigonometry (Identities, Heights & Distances)', marks: 12, status: 'Upcoming', periods: 22 },
    { unit: 'Unit VI', title: 'Mensuration (Areas related to Circles, Surface Areas)', marks: 10, status: 'Upcoming', periods: 18 },
    { unit: 'Unit VII', title: 'Statistics & Probability (Mean, Median, Mode, Empirical Prob)', marks: 11, status: 'Upcoming', periods: 16 }
  ];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="My Classes & Curriculum Management"
      description="Overview of assigned classes, class strength, syllabus progress, monitors, and CBSE curriculum blueprint."
    >
      <div className="space-y-8">

        {/* TOP METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Sections</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">4 Classes</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">10-A, 10-B, 9-B, 11-A</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Students</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">184</span>
              <span className="text-xs font-bold text-emerald-600">82 Boys • 78 Girls</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Under Math Faculty Tutelage</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Class Mentorship</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">Class 10-A</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Class Teacher Responsibility</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Weekly Workload</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">26 Periods</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">+ 2 Remedial Doubt Clinics</p>
          </div>
        </div>

        {/* TAB CONTROLS */}
        <div className="flex border-b border-slate-200 gap-6">
          <button
            onClick={() => setActiveTab('classes')}
            className={`pb-4 text-base font-bold transition-all relative ${
              activeTab === 'classes' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Assigned Classes ({classes.length})
            {activeTab === 'classes' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('curriculum')}
            className={`pb-4 text-base font-bold transition-all relative ${
              activeTab === 'curriculum' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            CBSE Curriculum Blueprint & Syllabus
            {activeTab === 'curriculum' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        </div>

        {/* TAB 1: ASSIGNED CLASSES */}
        {activeTab === 'classes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {classes.map((c) => (
              <div 
                key={c.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-md transition group"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-xl font-extrabold text-slate-900">{c.name}</h3>
                        {c.isMentor && (
                          <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-50 text-purple-700 border border-purple-200">
                            Class Mentor
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-blue-600 mt-1">{c.subject}</p>
                    </div>

                    <span className="px-3 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono">
                      {c.periodsPerWeek} Periods/wk
                    </span>
                  </div>

                  {/* Metadata Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 text-xs py-1">
                    <div className="p-3 bg-slate-50/70 rounded-xl">
                      <span className="text-slate-400 block font-medium">Strength</span>
                      <span className="text-slate-900 font-bold text-sm mt-0.5 block">{c.students} Students</span>
                      <span className="text-slate-500 text-[11px]">{c.boys}B / {c.girls}G</span>
                    </div>

                    <div className="p-3 bg-slate-50/70 rounded-xl">
                      <span className="text-slate-400 block font-medium">Room Location</span>
                      <span className="text-slate-900 font-bold text-sm mt-0.5 block truncate">{c.room.split(' ')[0]} {c.room.split(' ')[1]}</span>
                      <span className="text-slate-500 text-[11px]">Assigned Lab</span>
                    </div>

                    <div className="p-3 bg-slate-50/70 rounded-xl sm:col-span-1 col-span-2">
                      <span className="text-slate-400 block font-medium">Avg Class Marks</span>
                      <span className="text-emerald-700 font-extrabold text-sm mt-0.5 block">{c.avgClassScore}</span>
                      <span className="text-slate-500 text-[11px]">Term 1 Benchmark</span>
                    </div>
                  </div>

                  {/* Syllabus Tracker */}
                  <div className="space-y-2 pt-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="font-bold text-slate-800">Syllabus Progress</span>
                      <span className="font-extrabold text-blue-600">{c.syllabusProgress}% Completed</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${c.syllabusProgress}%` }}
                      />
                    </div>
                  </div>

                  {/* Current Lesson Box */}
                  <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-100/60 text-sm space-y-1">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700">Currently Teaching</div>
                    <div className="font-bold text-slate-900">{c.currentChapter}</div>
                    <div className="text-xs text-slate-600">{c.currentTopic}</div>
                    <div className="text-xs text-slate-500 pt-1">Next up: <span className="font-semibold text-slate-700">{c.nextTopic}</span></div>
                  </div>

                  {/* Monitor Info */}
                  <div className="text-xs text-slate-500 flex items-center justify-between pt-1">
                    <span>Class Monitors: <strong className="text-slate-800">{c.monitor}</strong></span>
                    <span>Today's Att: <strong className="text-emerald-700">{c.attendanceToday}</strong></span>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-2 mt-4">
                  <Link 
                    to="/school/teacher/attendance"
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm"
                  >
                    Take Attendance
                  </Link>

                  <Link 
                    to="/school/teacher/homework"
                    className="flex-1 text-center py-2.5 px-3 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold transition border border-blue-200"
                  >
                    Assign Homework
                  </Link>

                  <Link 
                    to="/school/teacher/students"
                    className="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                  >
                    Student Roster
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: CURRICULUM BLUEPRINT */}
        {activeTab === 'curriculum' && (
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">CBSE Secondary School Curriculum (Class X - Mathematics)</h3>
                <p className="text-sm text-slate-500 mt-0.5">Annual theory examination: 80 Marks • Internal continuous assessment: 20 Marks • Total: 100 Marks</p>
              </div>

              <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold">
                CBSE Board Syllabus 2026-27
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="pb-3 font-bold">Unit No.</th>
                    <th className="pb-3 font-bold">Unit & Chapter Title</th>
                    <th className="pb-3 font-bold text-center">Periods</th>
                    <th className="pb-3 font-bold text-center">Marks Weightage</th>
                    <th className="pb-3 font-bold">Syllabus Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {cbseCurriculum.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-4 font-bold text-slate-800 font-mono">{item.unit}</td>
                      <td className="py-4 font-bold text-slate-900">{item.title}</td>
                      <td className="py-4 text-center font-semibold text-slate-600">{item.periods} hrs</td>
                      <td className="py-4 text-center">
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                          {item.marks} Marks
                        </span>
                      </td>
                      <td className="py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                          item.status.includes('Completed') ? 'bg-emerald-50 text-emerald-700' :
                          item.status.includes('In Progress') ? 'bg-amber-50 text-amber-700' :
                          'bg-slate-100 text-slate-600'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-bold text-slate-900">
                    <td className="py-4" colSpan={2}>Total Theory Examination Blueprint</td>
                    <td className="py-4 text-center font-bold text-slate-800">145 Periods</td>
                    <td className="py-4 text-center text-blue-700 font-black text-base">80 Marks</td>
                    <td className="py-4 text-xs font-semibold text-slate-500">+ 20 Marks Internal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
