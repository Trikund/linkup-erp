import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Users, 
  ClipboardList, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  CalendarClock, 
  FileCheck, 
  ArrowUpRight, 
  Check, 
  AlertCircle,
  Megaphone,
  Plus,
  Send,
  Eye,
  Calendar
} from 'lucide-react';

export function TeacherDashboard() {
  const user = USERS.teacher;
  const [selectedClassFilter, setSelectedClassFilter] = useState<'all' | '10-A' | '10-B' | '9-B' | '11-A'>('all');

  const todayClasses = [
    {
      period: 'Period 1',
      time: '08:30 AM - 09:15 AM',
      class: '10-A',
      subject: 'Mathematics (Standard)',
      room: 'Room 204',
      topic: 'Chapter 4: Quadratic Equations - Nature of Roots & Discriminant',
      status: 'completed',
      attendanceMarked: true,
      attendanceRate: '40/42 (95.2%)',
      mentorClass: true
    },
    {
      period: 'Period 3',
      time: '09:45 AM - 10:30 AM',
      class: '9-B',
      subject: 'Mathematics',
      room: 'Room 108',
      topic: 'Chapter 2: Polynomials - Factor Theorem & Algebraic Identities',
      status: 'in-progress',
      attendanceMarked: true,
      attendanceRate: '38/40 (95.0%)',
      mentorClass: false
    },
    {
      period: 'Period 5',
      time: '11:15 AM - 12:00 PM',
      class: '11-A',
      subject: 'Applied Mathematics',
      room: 'Math Lab 1',
      topic: 'Chapter 3: Trigonometric Functions & Unit Circle Proofs',
      status: 'upcoming',
      attendanceMarked: false,
      attendanceRate: 'Pending',
      mentorClass: false
    },
    {
      period: 'Period 6',
      time: '01:00 PM - 01:45 PM',
      class: '10-B',
      subject: 'Mathematics (Standard)',
      room: 'Room 205',
      topic: 'Chapter 7: Coordinate Geometry - Section Formula & Centroid',
      status: 'upcoming',
      attendanceMarked: false,
      attendanceRate: 'Pending',
      mentorClass: false
    },
    {
      period: 'Period 8',
      time: '02:00 PM - 02:40 PM',
      class: '10-A',
      subject: 'Remedial Math / Doubt Clinic',
      room: 'Room 204',
      topic: 'NCERT Exemplar Problem Solving & Term 1 Revision',
      status: 'upcoming',
      attendanceMarked: false,
      attendanceRate: 'Pending',
      mentorClass: true
    }
  ];

  const pendingSubmissions = [
    {
      student: 'Rahul Sharma',
      roll: '10-A (Roll 14)',
      title: 'Algebra & Matrices Case Study Worksheet',
      submittedAt: 'Today at 07:45 AM',
      type: 'Assignment',
      deadline: '12 Oct 2026',
      totalMarks: 25
    },
    {
      student: 'Priya Sen',
      roll: '10-A (Roll 22)',
      title: 'Quadratic Equations Exercise 4.3 Proofs',
      submittedAt: 'Today at 08:10 AM',
      type: 'Homework',
      deadline: '12 Oct 2026',
      totalMarks: 10
    },
    {
      student: 'Aarav Gupta',
      roll: '9-B (Roll 08)',
      title: 'Polynomial Division Long Method Worksheet',
      submittedAt: 'Yesterday at 09:30 PM',
      type: 'Homework',
      deadline: '11 Oct 2026',
      totalMarks: 10
    },
    {
      student: 'Sneha Kulkarni',
      roll: '11-A (Roll 31)',
      title: 'Trigonometry Formula Portfolio & Lab Journal',
      submittedAt: 'Yesterday at 06:15 PM',
      type: 'Assignment',
      deadline: '15 Oct 2026',
      totalMarks: 30
    }
  ];

  const classProgress = [
    {
      name: 'Class 10-A',
      role: 'Class Teacher & Mentor',
      students: 42,
      syllabus: 68,
      completedChapters: '8 / 12 Chapters',
      avgScore: '84.6%',
      attendance: '95.2%'
    },
    {
      name: 'Class 10-B',
      role: 'Subject Teacher',
      students: 40,
      syllabus: 64,
      completedChapters: '7 / 12 Chapters',
      avgScore: '78.2%',
      attendance: '92.5%'
    },
    {
      name: 'Class 9-B',
      role: 'Subject Teacher',
      students: 40,
      syllabus: 72,
      completedChapters: '9 / 12 Chapters',
      avgScore: '81.4%',
      attendance: '94.8%'
    },
    {
      name: 'Class 11-A',
      role: 'Subject Teacher',
      students: 38,
      syllabus: 60,
      completedChapters: '6 / 10 Chapters',
      avgScore: '86.1%',
      attendance: '96.0%'
    }
  ];

  const notices = [
    {
      id: 1,
      title: 'Mathematics Department Moderation Meeting',
      time: 'Today, 03:00 PM • Conference Room B',
      desc: 'Final review of CBSE Midterm Question Papers & marking schemes with Academic Coordinator.'
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting (PTM) Schedule Dispatched',
      time: 'Saturday, 17 Oct • 08:30 AM – 01:00 PM',
      desc: 'Class 10-A mentor slot sheets have been sent to parents. Attendance report slips must be finalized by Thursday.'
    },
    {
      id: 3,
      title: 'Syllabus Progress Report Submission',
      time: 'Deadline: 20 Oct 2026',
      desc: 'Submit Term-1 syllabus coverage metrics and list of students needing remedial coaching.'
    }
  ];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Senior Mathematics Faculty & Mentor for Class 10-A • Academic Session 2026-27"
    >
      <div className="space-y-8">

        {/* TOP KPI CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Today's Schedule</span>
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <Clock className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">5 Classes</span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">Next: <span className="font-bold text-blue-600">Period 5 (11-A) at 11:15 AM</span></p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Total Students</span>
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">184</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700">4 Sections</span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">Class Teacher: <span className="font-bold text-slate-800">10-A (42 Students)</span></p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Today's Attendance</span>
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <CheckCircle2 className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">94.6%</span>
                <span className="text-xs font-bold text-emerald-600">174 / 184</span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">10 absent across all sections</p>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Pending Evaluation</span>
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                <ClipboardList className="w-5 h-5" />
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">28</span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">Needs Review</span>
              </div>
              <p className="text-sm text-slate-500 mt-1 font-medium">16 Homework + 12 Assignments</p>
            </div>
          </div>
        </div>

        {/* 2-COLUMN MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT 2 COLUMNS: Today's Classes & Pending Reviews */}
          <div className="lg:col-span-2 space-y-8">

            {/* TODAY'S CLASSES CARD */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-extrabold text-slate-900">Today's Class Schedule</h2>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">Monday, 12 October 2026 • 5 Teaching Periods Assigned</p>
                </div>

                <Link
                  to="/school/teacher/timetable"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-3.5 py-2 rounded-xl transition"
                >
                  <CalendarClock className="w-4 h-4" />
                  Full Week Timetable
                </Link>
              </div>

              <div className="divide-y divide-slate-100 mt-2">
                {todayClasses.map((item, idx) => (
                  <div key={idx} className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 group hover:bg-slate-50/50 p-2.5 rounded-xl transition">
                    <div className="space-y-1.5 max-w-xl">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="px-2.5 py-1 rounded-lg text-xs font-extrabold bg-slate-100 text-slate-800">
                          {item.period}
                        </span>
                        <span className="text-sm font-bold text-slate-600 font-mono">
                          {item.time}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                          Class {item.class}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          • {item.room}
                        </span>
                        {item.mentorClass && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
                            Class Mentor
                          </span>
                        )}
                      </div>

                      <h4 className="text-base font-bold text-slate-900">
                        {item.subject}
                      </h4>
                      <p className="text-sm text-slate-600">
                        {item.topic}
                      </p>

                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 pt-0.5">
                        <span>Attendance: <strong className="text-slate-800 font-bold">{item.attendanceRate}</strong></span>
                        {item.status === 'completed' && (
                          <span className="text-emerald-600 font-bold flex items-center gap-1">
                            <Check className="w-3.5 h-3.5" /> Class Completed
                          </span>
                        )}
                        {item.status === 'in-progress' && (
                          <span className="text-blue-600 font-bold flex items-center gap-1 animate-pulse">
                            ● Class Currently Active
                          </span>
                        )}
                        {item.status === 'upcoming' && (
                          <span className="text-amber-600 font-semibold">
                            Upcoming in Schedule
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {item.status === 'completed' ? (
                        <Link
                          to="/school/teacher/attendance"
                          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
                        >
                          View Register
                        </Link>
                      ) : (
                        <Link
                          to="/school/teacher/attendance"
                          className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition flex items-center gap-1.5"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Mark Attendance
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PENDING SUBMISSIONS AWAITING REVIEW */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-2.5">
                    <ClipboardList className="w-6 h-6 text-amber-600" />
                    <h2 className="text-xl font-extrabold text-slate-900">Submissions Awaiting Grading</h2>
                  </div>
                  <p className="text-sm text-slate-500 mt-1">28 student papers submitted across your classes</p>
                </div>

                <Link
                  to="/school/teacher/assignments"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700"
                >
                  View All Submissions →
                </Link>
              </div>

              <div className="divide-y divide-slate-100 mt-2">
                {pendingSubmissions.map((sub, idx) => (
                  <div key={idx} className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <span className="text-base font-bold text-slate-900">{sub.student}</span>
                        <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-700">{sub.roll}</span>
                        <span className={`px-2 py-0.5 rounded-md text-xs font-bold ${sub.type === 'Assignment' ? 'bg-purple-50 text-purple-700' : 'bg-emerald-50 text-emerald-700'}`}>
                          {sub.type}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-slate-700">{sub.title}</p>
                      <p className="text-xs text-slate-400">
                        Submitted: <span className="text-slate-600 font-semibold">{sub.submittedAt}</span> • Max Marks: {sub.totalMarks}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to="/school/teacher/assignments"
                        className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-sm"
                      >
                        Evaluate & Grade
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 1 COLUMN: Quick Actions & Class Progress & Circulars */}
          <div className="space-y-8">

            {/* QUICK ACTIONS CARD */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 gap-3">
                <Link
                  to="/school/teacher/attendance"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Mark Daily Attendance
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/teacher/homework"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Plus className="w-5 h-5 text-blue-600" />
                    Create Homework Assignment
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/teacher/results"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <FileCheck className="w-5 h-5 text-purple-600" />
                    Enter Exam & Test Marks
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/teacher/announcements"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Send className="w-5 h-5 text-amber-600" />
                    Broadcast Notice to Class
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/teacher/students"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Users className="w-5 h-5 text-indigo-600" />
                    Student Directory & Dossiers
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* CLASS PROGRESS OVERVIEW */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-bold text-slate-900">Class Performance & Progress</h3>
                <Link to="/school/teacher/performance" className="text-xs font-bold text-blue-600 hover:underline">
                  Full Analytics
                </Link>
              </div>

              <div className="space-y-5">
                {classProgress.map((cls, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="font-extrabold text-slate-900">{cls.name}</span>
                        <span className="text-xs text-slate-400 ml-2">({cls.students} students)</span>
                      </div>
                      <span className="font-extrabold text-slate-800">{cls.avgScore} Avg</span>
                    </div>

                    <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                      <div 
                        className={`h-2.5 rounded-full transition-all duration-500 ${
                          cls.syllabus >= 70 ? 'bg-emerald-500' : cls.syllabus >= 65 ? 'bg-blue-600' : 'bg-amber-500'
                        }`} 
                        style={{ width: `${cls.syllabus}%` }} 
                      />
                    </div>

                    <div className="flex justify-between items-center text-xs text-slate-500 font-medium">
                      <span>Syllabus: {cls.completedChapters} ({cls.syllabus}%)</span>
                      <span>Att: {cls.attendance}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FACULTY NOTICEBOARD & CIRCULARS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Megaphone className="w-5 h-5 text-blue-600" />
                  <h3 className="text-lg font-bold text-slate-900">Staff Noticeboard</h3>
                </div>
              </div>

              <div className="space-y-4">
                {notices.map((n) => (
                  <div key={n.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{n.title}</h4>
                    <p className="text-xs text-slate-400 font-medium">{n.time}</p>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">{n.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
