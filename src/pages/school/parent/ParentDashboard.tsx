import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, 
  ClipboardList, 
  FileCheck, 
  WalletCards, 
  ArrowRight, 
  TrendingUp, 
  Clock, 
  Users, 
  Bus, 
  Calendar, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  MessageSquare,
  ArrowUpRight,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../../lib/utils';

export function ParentDashboard() {
  const user = USERS.parent;

  const childrenData = [
    {
      id: '1',
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
      class: 'Class 10 - Section A',
      roll: 14,
      admNo: 'DPS/2021/1042',
      mentor: 'Mrs. Ananya Sharma (PGT Math)',
      attendance: 92.4,
      presentDays: '111 / 120 Days',
      performance: '86.4%',
      gpa: 8.8,
      rank: '6th in Section',
      assignmentsDue: '2 Pending Tasks',
      feeStatus: 'Paid (Q2 Cleared)',
      feeDueDate: 'Q3 Due: 15 Nov 2026',
      busRoute: 'Bus #14 (Noida Expressway)',
      busPickup: '07:15 AM • Sector 128 Gate',
      todaySchedule: [
        { time: '08:30 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 204' },
        { time: '10:00 AM', subject: 'English Literature', teacher: 'Mrs. Sunita Roy', room: 'Room 204' },
        { time: '11:50 AM', subject: 'Science (Physics)', teacher: 'Mr. Pradeep Mishra', room: 'Physics Lab' },
        { time: '01:15 PM', subject: 'Social Science', teacher: 'Mrs. Kavita Saxena', room: 'Room 204' },
      ],
      remarks: [
        {
          subject: 'Mathematics',
          teacher: 'Mrs. Ananya Sharma',
          date: '12 Oct 2026',
          text: 'Rahul shows impressive conceptual improvement in Quadratic Equations and discriminant analysis. Very attentive during problem-solving sessions.'
        },
        {
          subject: 'Science (Physics)',
          teacher: 'Mr. Pradeep Mishra',
          date: '08 Oct 2026',
          text: 'Excellent lab demonstration of refraction through glass prism. Term report submitted with accurate diagram labeling.'
        }
      ],
      pendingHomework: [
        { subject: 'Mathematics', title: 'Exercise 4.3 Word Problems', due: 'Today at 05:00 PM', urgency: 'high' },
        { subject: 'English', title: 'Two Gentlemen of Verona Character Sketch', due: 'Tomorrow, 08:30 AM', urgency: 'normal' }
      ]
    },
    {
      id: '2',
      name: 'Ananya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
      class: 'Class 7 - Section B',
      roll: 8,
      admNo: 'DPS/2024/3192',
      mentor: 'Mr. Vikram Singh (TGT Computer)',
      attendance: 96.2,
      presentDays: '115 / 120 Days',
      performance: '91.8%',
      gpa: 9.4,
      rank: '2nd in Section',
      assignmentsDue: '1 Pending Task',
      feeStatus: 'Paid (Q2 Cleared)',
      feeDueDate: 'Q3 Due: 15 Nov 2026',
      busRoute: 'Bus #14 (Noida Expressway)',
      busPickup: '07:15 AM • Sector 128 Gate',
      todaySchedule: [
        { time: '08:30 AM', subject: 'General Science', teacher: 'Mrs. Ritu Sen', room: 'Room 106' },
        { time: '10:00 AM', subject: 'Mathematics', teacher: 'Mr. Alok Verma', room: 'Room 106' },
        { time: '11:50 AM', subject: 'Computer Applications', teacher: 'Mr. Vikram Singh', room: 'Computer Lab 1' },
        { time: '01:15 PM', subject: 'Hindi Literature', teacher: 'Mrs. Sarita Devi', room: 'Room 106' },
      ],
      remarks: [
        {
          subject: 'Computer Applications',
          teacher: 'Mr. Vikram Singh',
          date: '10 Oct 2026',
          text: 'Ananya created an outstanding HTML & Scratch animation project on environmental conservation. Awarded Star Student of the Week.'
        },
        {
          subject: 'General Science',
          teacher: 'Mrs. Ritu Sen',
          date: '05 Oct 2026',
          text: 'Consistently completes all workbook exercises on plant physiology. Participates enthusiastically in science quizzes.'
        }
      ],
      pendingHomework: [
        { subject: 'Science', title: 'Photosynthesis Diagram & Experiments', due: 'Tomorrow at 09:00 AM', urgency: 'normal' }
      ]
    }
  ];

  const [activeChildId, setActiveChildId] = useState('1');
  const activeChild = childrenData.find(c => c.id === activeChildId) || childrenData[0];

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Parent & Guardian Portal • Real-time academic tracking, attendance alerts, fees, and teacher communications."
    >
      <div className="space-y-8">

        {/* CHILD SWITCHER BAR */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enrolled Children ({childrenData.length})</span>
            <Link to="/school/parent/children" className="text-xs font-bold text-blue-600 hover:underline">
              View Detailed Dossiers →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {childrenData.map((child) => (
              <button
                key={child.id}
                onClick={() => setActiveChildId(child.id)}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-2xl transition-all duration-200 border text-left",
                  activeChildId === child.id 
                    ? "bg-blue-50/60 border-blue-500 shadow-sm ring-2 ring-blue-500/20" 
                    : "bg-slate-50/60 border-slate-200/80 hover:bg-slate-100/70"
                )}
              >
                <img 
                  src={child.avatar} 
                  alt={child.name} 
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-white shadow-sm shrink-0" 
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-extrabold text-slate-900 text-base truncate">{child.name}</p>
                    {activeChildId === child.id && (
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-blue-600 text-white">Active</span>
                    )}
                  </div>
                  <p className="text-xs font-bold text-blue-700 mt-0.5">{child.class} • Roll #{child.roll}</p>
                  <p className="text-xs text-slate-500 mt-0.5 font-medium">Att: <strong className="text-slate-800">{child.attendance}%</strong> • Mentor: {child.mentor.split(' ')[1]} {child.mentor.split(' ')[2]}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* TOP KPI METRICS FOR ACTIVE CHILD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Attendance</span>
              <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                <CalendarCheck className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">{activeChild.attendance}%</span>
              <span className="text-xs font-bold text-slate-500">{activeChild.presentDays}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Eligible for Board Exams (≥75%)</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Academic Grade</span>
              <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">{activeChild.performance}</span>
              <span className="text-xs font-bold text-slate-500 font-mono">GPA {activeChild.gpa}</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">{activeChild.rank}</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Homework & Tasks</span>
              <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                <ClipboardList className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">24 / 26</span>
              <span className="text-xs font-bold text-amber-600">Completed</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">{activeChild.assignmentsDue}</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Tuition Fees</span>
              <div className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                <WalletCards className="w-5 h-5" />
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-emerald-600">All Cleared</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Paid</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">{activeChild.feeDueDate}</p>
          </div>
        </div>

        {/* 2-COLUMN MAIN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT 2 COLUMNS: Classes & Remarks & Pending Work */}
          <div className="lg:col-span-2 space-y-8">

            {/* TODAY'S CLASS SCHEDULE */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {activeChild.name.split(' ')[0]}'s Class Schedule Today
                  </h3>
                  <p className="text-sm text-slate-500 mt-0.5">Monday, 12 Oct • {activeChild.class}</p>
                </div>

                <Link 
                  to="/school/parent/timetable" 
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-xl transition"
                >
                  Full Weekly Timetable →
                </Link>
              </div>

              <div className="divide-y divide-slate-100 mt-2">
                {activeChild.todaySchedule.map((slot, idx) => (
                  <div key={idx} className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {slot.time}
                      </span>
                      <div>
                        <h4 className="font-bold text-slate-900 text-base">{slot.subject}</h4>
                        <p className="text-xs text-slate-500">Teacher: <strong className="text-slate-700">{slot.teacher}</strong></p>
                      </div>
                    </div>

                    <span className="text-xs font-semibold text-slate-600 bg-slate-50 px-3 py-1 rounded-xl border border-slate-200">
                      {slot.room}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* TEACHER REMARKS & COMMENDATIONS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Teacher Remarks & Observations</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Direct notes from faculty mentors to parents</p>
                </div>

                <Link to="/school/parent/remarks" className="text-xs font-bold text-blue-600 hover:underline">
                  View All Remarks →
                </Link>
              </div>

              <div className="space-y-4 mt-5">
                {activeChild.remarks.map((rem, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {rem.subject}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">{rem.date}</span>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      "{rem.text}"
                    </p>

                    <p className="text-xs font-semibold text-slate-500 pt-1">
                      — {rem.teacher}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ACTIVE HOMEWORK REMINDERS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Pending Homework & Submissions</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Tasks due for submission this week</p>
                </div>

                <Link to="/school/parent/homework" className="text-xs font-bold text-blue-600 hover:underline">
                  View Homework Hub →
                </Link>
              </div>

              <div className="space-y-3 mt-4">
                {activeChild.pendingHomework.map((hw, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200/80 flex items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900 text-sm">{hw.title}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-700">
                          {hw.subject}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">Due: <strong className="text-rose-600">{hw.due}</strong></p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                      Action Required
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 1 COLUMN: Quick Actions & Bus Status & Events */}
          <div className="space-y-8">

            {/* QUICK ACTIONS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Actions</h3>
              <div className="grid grid-cols-1 gap-3">
                <Link
                  to="/school/parent/fees"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <WalletCards className="w-5 h-5 text-purple-600" />
                    Pay School Fees Online
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/parent/results"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <FileCheck className="w-5 h-5 text-emerald-600" />
                    Download Term Report Card
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/parent/attendance"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <CalendarCheck className="w-5 h-5 text-blue-600" />
                    Apply for Medical / Casual Leave
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>

                <Link
                  to="/school/parent/events"
                  className="flex items-center justify-between p-3.5 rounded-xl border border-slate-200/80 hover:border-blue-400 hover:bg-blue-50/40 text-slate-800 hover:text-blue-700 font-bold text-sm transition group"
                >
                  <span className="flex items-center gap-2.5">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    Book PTM Time Slot
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
                </Link>
              </div>
            </div>

            {/* SCHOOL BUS GPS & COMMUTE STATUS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Bus className="w-5 h-5 text-amber-600" />
                  <h3 className="text-lg font-bold text-slate-900">School Transport</h3>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                  On Route
                </span>
              </div>

              <div className="p-4 bg-slate-50/70 rounded-xl space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Route Number:</span>
                  <span className="font-bold text-slate-900">{activeChild.busRoute}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Assigned Pickup:</span>
                  <span className="font-bold text-slate-800">{activeChild.busPickup}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Bus In-charge:</span>
                  <span className="font-bold text-blue-600">Mr. Balram (+91 94102 38910)</span>
                </div>
              </div>
            </div>

            {/* UPCOMING SCHOOL EVENTS */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-slate-900">Upcoming Events</h3>
                <Link to="/school/parent/events" className="text-xs font-bold text-blue-600 hover:underline">
                  Calendar
                </Link>
              </div>

              <div className="space-y-3.5">
                {[
                  { date: '17', month: 'OCT', title: 'Term 1 Parent-Teacher Meeting (PTM)', time: '08:30 AM – 01:00 PM • Room 204' },
                  { date: '24', month: 'OCT', title: 'Inter-School Science & Math Fair', time: '09:00 AM • Main Auditorium' },
                  { date: '29', month: 'OCT', title: 'Diwali Break Begins', time: 'School reopens on 04 Nov 2026' },
                ].map((ev, i) => (
                  <div key={i} className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-extrabold uppercase">{ev.month}</span>
                      <span className="text-lg font-black leading-none">{ev.date}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{ev.title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">{ev.time}</p>
                    </div>
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
