import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { 
  BookOpen, Users, Clock, AlertCircle, Calendar, CheckCircle2, 
  ArrowRight, FileText, Award, Bell, ShieldAlert, Sparkles, 
  ExternalLink, Send, Check, ChevronRight, UserCheck, Search, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function FacultyDashboard() {
  const user = { 
    name: 'Dr. Ankit Sharma', 
    roleLabel: 'Professor & HOD • CSE Dept' 
  };

  const [alertSent, setAlertSent] = useState<string | null>(null);

  const handleSendAlert = (studentId: string) => {
    setAlertSent(studentId);
    setTimeout(() => setAlertSent(null), 3000);
  };

  const todayClasses = [
    {
      code: 'CS703',
      name: 'Advanced Database Management Systems',
      section: 'B.Tech CSE • Sem 7 (Sec A)',
      time: '09:00 AM - 10:00 AM',
      room: 'Tech Block 3 • Room 302',
      type: 'Lecture',
      status: 'Completed',
      studentsCount: 70
    },
    {
      code: 'CS701',
      name: 'Machine Learning',
      section: 'B.Tech CSE • Sem 7 (Sec B)',
      time: '11:15 AM - 12:15 PM',
      room: 'Tech Block 3 • Room 304',
      type: 'Lecture',
      status: 'Ongoing',
      studentsCount: 72
    },
    {
      code: 'CS706P',
      name: 'Major Capstone Project Lab',
      section: 'B.Tech CSE • Sem 7 (Batch A1 & A2)',
      time: '02:00 PM - 04:00 PM',
      room: 'Advanced AI/ML Lab 2',
      type: 'Lab Practical',
      status: 'Upcoming',
      studentsCount: 36
    }
  ];

  const lowAttendanceStudents = [
    { id: '21CS1045', name: 'Rahul Verma', section: 'Sec B', course: 'Machine Learning (CS701)', att: 68.2, classes: '15/22', phone: '+91 98112 34567' },
    { id: '21CS1088', name: 'Amit Patel', section: 'Sec B', course: 'Machine Learning (CS701)', att: 64.0, classes: '14/22', phone: '+91 98223 45678' },
    { id: '21CS1102', name: 'Neha Singh', section: 'Sec A', course: 'Adv DBMS (CS703)', att: 71.4, classes: '15/21', phone: '+91 98334 56789' },
    { id: '21CS1019', name: 'Aditya Kashyap', section: 'Sec A', course: 'Adv DBMS (CS703)', att: 69.0, classes: '14/21', phone: '+91 98445 67890' }
  ];

  const pendingEvaluations = [
    { title: 'CS701 Mid-Sem Paper Evaluation', count: '45 / 72 Answer Sheets', due: 'Tomorrow, 5:00 PM', type: 'Mid-Sem' },
    { title: 'CS706P Capstone Sprint 2 Synopsis', count: '6 / 6 Project Batches', due: '24 Oct 2026', type: 'Review' },
    { title: 'CS703 Lab Practical 3: SQL Triggers', count: '18 / 70 Submissions', due: '26 Oct 2026', type: 'Lab Manual' }
  ];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Faculty Dashboard" 
      description="Apex Institute of Technology • Department of Computer Science & Engineering"
    >
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-indigo-700 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-purple-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Odd Semester 2026-27
              </span>
              <span className="bg-amber-400/20 text-amber-200 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-400/30 flex items-center gap-1">
                <Sparkles size={12} /> Head of Department (CSE)
              </span>
              <span className="bg-emerald-500/20 text-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-400/30">
                EMP: FAC-2018-042
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Welcome, Dr. Ankit Sharma 👋</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              Ph.D. (IIT Delhi) • Cabin: Tech Block 3, Room 301 • You have <span className="font-bold text-white">3 scheduled sessions</span> today and <span className="font-bold text-amber-200">45 pending evaluations</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/college/faculty/attendance" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#7c3aed] text-xs font-bold hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
            >
              <CheckCircle2 size={14} />
              <span>Mark Attendance</span>
            </Link>
            <Link 
              to="/college/faculty/assignments" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all border border-white/30 backdrop-blur-md"
            >
              <FileText size={14} />
              <span>Grade Submissions</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard 
          title="Assigned Subjects" 
          value="3 Courses" 
          icon={BookOpen} 
          subtitle="CS701 (ML), CS703 (DBMS), CS706P" 
          color="violet" 
        />
        <StatCard 
          title="Total Students Taught" 
          value="142" 
          icon={Users} 
          subtitle="Sec A: 70 • Sec B: 72 Students" 
          color="blue" 
        />
        <StatCard 
          title="Pending Evaluations" 
          value="45 Papers" 
          icon={AlertCircle} 
          subtitle="Mid-Sem Marks due in 48 hours" 
          color="amber" 
        />
        <StatCard 
          title="Mentee Counseling" 
          value="24 Students" 
          icon={UserCheck} 
          subtitle="2 flagged for low attendance" 
          color="green" 
        />
      </div>

      {/* Main Grid: Today's Schedule & Low Attendance Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column (2 Cols): Today's Schedule & Pending Evaluations */}
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Teaching Schedule */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Today's Teaching Schedule</h3>
                  <p className="text-xs text-slate-500 font-medium">Monday • 3 Academic Sessions (2 Lectures, 1 Practical Lab)</p>
                </div>
              </div>
              <Link 
                to="/college/faculty/schedule" 
                className="text-xs font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
              >
                <span>Full Timetable</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-3.5">
              {todayClasses.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 sm:p-5 rounded-2xl border border-slate-100 hover:border-purple-200 transition-all bg-slate-50/50 hover:bg-white hover:shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                        {item.code}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{item.name}</h4>
                        <p className="text-xs text-slate-500">{item.section}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-200/70 text-slate-700">
                        {item.type}
                      </span>
                      <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${
                        item.status === 'Completed' 
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                          : item.status === 'Ongoing'
                          ? 'bg-amber-50 text-amber-700 border border-amber-100 animate-pulse'
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-600 gap-2">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 font-medium">
                        <Clock size={13} className="text-[#7c3aed]" />
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1 font-medium">
                        <Users size={13} className="text-slate-400" />
                        {item.room} • {item.studentsCount} Students
                      </span>
                    </div>
                    <Link
                      to="/college/faculty/attendance"
                      className="text-xs font-bold text-[#7c3aed] hover:text-purple-800 flex items-center gap-1"
                    >
                      <span>Take Attendance</span>
                      <ChevronRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Evaluations Queue */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Pending Evaluation Queue</h3>
                  <p className="text-xs text-slate-500 font-medium">Answer sheets and lab practicals awaiting rubric grading</p>
                </div>
              </div>
              <Link 
                to="/college/faculty/assignments" 
                className="text-xs font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
              >
                <span>View All Grading</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-3">
              {pendingEvaluations.map((ev, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-amber-200 transition-all gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                        {ev.type}
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">{ev.title}</h4>
                    </div>
                    <p className="text-xs text-slate-500">Remaining: <span className="font-semibold text-slate-700">{ev.count}</span> • Deadline: <span className="text-amber-700 font-medium">{ev.due}</span></p>
                  </div>
                  <Link 
                    to="/college/faculty/assignments"
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 bg-[#7c3aed] hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm self-start sm:self-center"
                  >
                    <span>Grade Now</span>
                    <ArrowRight size={12} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Critical Low Attendance & HOD Notices */}
        <div className="space-y-8">
          {/* Low Attendance Watchlist */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-red-50 text-red-600 flex items-center justify-center border border-red-100">
                  <ShieldAlert size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800">Low Attendance Alerts</h3>
                  <p className="text-[11px] text-slate-500 font-medium">Below University 75% Cutoff</p>
                </div>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-black rounded-full bg-red-100 text-red-700">
                4 At Risk
              </span>
            </div>

            <div className="space-y-3">
              {lowAttendanceStudents.map((s) => (
                <div key={s.id} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-red-100 transition-all">
                  <div className="flex items-center justify-between mb-1.5">
                    <div>
                      <h4 className="text-xs font-bold text-slate-800">{s.name}</h4>
                      <p className="text-[10px] text-slate-500 font-mono">{s.id} • {s.section}</p>
                    </div>
                    <span className="text-xs font-black text-red-600 bg-red-50 px-2 py-0.5 rounded-md border border-red-100">
                      {s.att}%
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 mb-2">{s.course} ({s.classes})</p>
                  <button
                    onClick={() => handleSendAlert(s.id)}
                    className="w-full flex items-center justify-center gap-1.5 py-1.5 text-[11px] font-bold rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-all"
                  >
                    {alertSent === s.id ? (
                      <span className="text-emerald-600 flex items-center gap-1">
                        <Check size={12} /> SMS & Email Sent
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <Send size={11} className="text-[#7c3aed]" /> Notify Student & Guardian
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>

            <Link 
              to="/college/faculty/attendance" 
              className="mt-4 block text-center text-xs font-bold text-[#7c3aed] hover:underline"
            >
              Open Full Attendance Register →
            </Link>
          </div>

          {/* HOD & Department Circulars */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Bell size={18} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">Department Circulars</h3>
              </div>
              <Link to="/college/faculty/announcements" className="text-xs text-[#7c3aed] font-bold hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-purple-50/50 border border-purple-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#7c3aed]">NBA Accreditation</span>
                <p className="text-xs font-bold text-slate-800 mt-0.5">Criterion 3 & 4 Course Outcome (CO) Files Submission</p>
                <p className="text-[11px] text-slate-500 mt-1">Please submit signed CO-PO attainment matrices by Friday, 25th Oct.</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Controller of Exams</span>
                <p className="text-xs font-bold text-slate-800 mt-0.5">End-Semester Paper Moderation Meeting</p>
                <p className="text-[11px] text-slate-500 mt-1">Scheduled for Wednesday 3:30 PM in Board Room with external peers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Access Action Shortcuts */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
        <h3 className="text-base font-bold text-slate-800 mb-4">Faculty Fast Actions & Shortcuts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: 'Assigned Courses', path: '/college/faculty/courses', icon: BookOpen, color: 'text-purple-600 bg-purple-50' },
            { label: 'Students Directory', path: '/college/faculty/students', icon: Users, color: 'text-blue-600 bg-blue-50' },
            { label: 'Take Attendance', path: '/college/faculty/attendance', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'Lab Submissions', path: '/college/faculty/assignments', icon: FileText, color: 'text-amber-600 bg-amber-50' },
            { label: 'Mentee Records', path: '/college/faculty/mentees', icon: UserCheck, color: 'text-indigo-600 bg-indigo-50' },
            { label: 'Apply Leave', path: '/college/faculty/leaves', icon: Clock, color: 'text-rose-600 bg-rose-50' },
          ].map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={i}
                to={action.path}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/20 transition-all text-center group"
              >
                <div className={`w-11 h-11 rounded-2xl ${action.color} flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#7c3aed] transition-colors">
                  {action.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </CollegeLayout>
  );
}