import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarClock, 
  Download, 
  Clock, 
  MapPin, 
  BookOpen, 
  Coffee, 
  CheckCircle2, 
  Calendar,
  Users,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export function TeacherTimetable() {
  const user = USERS.teacher;
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [viewMode, setViewMode] = useState<'daily' | 'weekly'>('daily');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const scheduleData: Record<string, any[]> = {
    Monday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-A', subject: 'Mathematics (Standard)', room: 'Room 204', type: 'lecture', topic: 'Quadratic Equations - Discriminant Analysis' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: 'Free Period', subject: 'Curriculum Planning & Grading', room: 'Faculty Room 2', type: 'free', topic: 'Evaluating Class 10-A Homework Notebooks' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: '9-B', subject: 'Mathematics', room: 'Room 108', type: 'lecture', topic: 'Polynomial Factor Theorem & Identifications' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea & Staff Refreshment', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: 'Free Period', subject: 'Parent Consultation Hour', room: 'Counseling Block', type: 'free', topic: 'Open slot for parent meetings' },
      { period: 'Period 5', time: '11:50 AM – 12:35 PM', class: '11-A', subject: 'Applied Mathematics', room: 'Math Lab 1', type: 'lab', topic: 'Trigonometric Waveforms Simulation' },
      { period: 'Lunch', time: '12:35 PM – 01:15 PM', class: 'Lunch Break', subject: 'Faculty Dining', room: 'Cafeteria', type: 'break', topic: '' },
      { period: 'Period 6', time: '01:15 PM – 01:55 PM', class: '10-B', subject: 'Mathematics (Standard)', room: 'Room 205', type: 'lecture', topic: 'Coordinate Geometry - Distance Formula' },
      { period: 'Period 7', time: '01:55 PM – 02:35 PM', class: 'Free Period', subject: 'CBSE Moderation Desk', room: 'Conference B', type: 'free', topic: 'Reviewing Mid-Term Question Papers' },
      { period: 'Period 8', time: '02:35 PM – 03:15 PM', class: '10-A', subject: 'Remedial Doubt Clinic', room: 'Room 204', type: 'remedial', topic: 'NCERT Exemplar Special Problems' },
    ],
    Tuesday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-B', subject: 'Mathematics (Standard)', room: 'Room 205', type: 'lecture', topic: 'Section Formula in Coordinate Geometry' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: '10-A', subject: 'Mathematics (Standard)', room: 'Room 204', type: 'lecture', topic: 'Quadratic Equation Word Problems' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: 'Free Period', subject: 'Lesson Planning', room: 'Faculty Room 2', type: 'free', topic: 'Preparing Chapter 5 Slides' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: '9-B', subject: 'Mathematics', room: 'Room 108', type: 'lecture', topic: 'Algebraic Identities Verification' },
      { period: 'Period 5', time: '11:50 AM – 12:35 PM', class: 'Free Period', subject: 'Student Mentoring Slot', room: 'Faculty Room 2', type: 'free', topic: 'Class 10-A Monitor Briefing' },
      { period: 'Lunch', time: '12:35 PM – 01:15 PM', class: 'Lunch Break', subject: 'Faculty Dining', room: 'Cafeteria', type: 'break', topic: '' },
      { period: 'Period 6', time: '01:15 PM – 01:55 PM', class: '11-A', subject: 'Applied Mathematics', room: 'Math Lab 1', type: 'lab', topic: 'Mathematical Induction Practice' },
      { period: 'Period 7', time: '01:55 PM – 02:35 PM', class: 'Free Period', subject: 'Exam Cell Coordination', room: 'Exam Wing', type: 'free', topic: 'Seating Chart Verification' },
      { period: 'Period 8', time: '02:35 PM – 03:15 PM', class: '10-B', subject: 'Remedial Math Clinic', room: 'Room 205', type: 'remedial', topic: 'Coordinate Geometry Doubt Clearing' },
    ],
    Wednesday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-A', subject: 'Mathematics (Standard)', room: 'Room 204', type: 'lecture', topic: 'Arithmetic Progressions Introduction' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: '9-B', subject: 'Mathematics', room: 'Room 108', type: 'lecture', topic: 'Factor Theorem Numerical Problems' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: '10-B', subject: 'Mathematics (Standard)', room: 'Room 205', type: 'lecture', topic: 'Area of Triangle & Collinearity' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: '11-A', subject: 'Applied Mathematics', room: 'Math Lab 1', type: 'lecture', topic: 'Sets and Relations Problems' },
      { period: 'Period 5', time: '11:50 AM – 12:35 PM', class: 'Free Period', subject: 'Notebook Correction', room: 'Faculty Room 2', type: 'free', topic: 'Class 9-B Homework Review' },
      { period: 'Lunch', time: '12:35 PM – 01:15 PM', class: 'Lunch Break', subject: 'Faculty Dining', room: 'Cafeteria', type: 'break', topic: '' },
      { period: 'Period 6', time: '01:15 PM – 01:55 PM', class: '10-A', subject: 'Math Lab Activity', room: 'Math Lab 1', type: 'lab', topic: 'Quadratic Curves Geometric Model' },
      { period: 'Period 7', time: '01:55 PM – 02:35 PM', class: 'Free Period', subject: 'Staff Meeting Prep', room: 'Faculty Room 2', type: 'free', topic: '' },
      { period: 'Period 8', time: '02:35 PM – 03:15 PM', class: 'Assembly', subject: 'Mentor Homeroom Session', room: 'Room 204', type: 'remedial', topic: 'Class 10-A Value Education & Review' },
    ],
    Thursday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-B', subject: 'Mathematics (Standard)', room: 'Room 205', type: 'lecture', topic: 'Internal Assessment Case Study' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: '11-A', subject: 'Applied Mathematics', room: 'Math Lab 1', type: 'lecture', topic: 'Multiple Angle Proofs' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: '10-A', subject: 'Mathematics (Standard)', room: 'Room 204', type: 'lecture', topic: 'AP nth Term Formula' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: 'Free Period', subject: 'Olympiad Training Planning', room: 'Faculty Room 2', type: 'free', topic: '' },
      { period: 'Period 5', time: '11:50 AM – 12:35 PM', class: '9-B', subject: 'Mathematics', room: 'Room 108', type: 'lecture', topic: 'Polynomial Identities Rapid Quiz' },
      { period: 'Lunch', time: '12:35 PM – 01:15 PM', class: 'Lunch Break', subject: 'Faculty Dining', room: 'Cafeteria', type: 'break', topic: '' },
      { period: 'Period 6', time: '01:15 PM – 01:55 PM', class: 'Free Period', subject: 'Library Duty', room: 'Senior Library', type: 'free', topic: 'Reference Book Selection' },
      { period: 'Period 7', time: '01:55 PM – 02:35 PM', class: '10-A', subject: 'Speed Math Session', room: 'Room 204', type: 'lecture', topic: 'Vedic Math Shortcut Techniques' },
      { period: 'Period 8', time: '02:35 PM – 03:15 PM', class: 'Free Period', subject: 'Parent Email Updates', room: 'Faculty Room 2', type: 'free', topic: '' },
    ],
    Friday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-A', subject: 'Mathematics (Standard)', room: 'Room 204', type: 'lecture', topic: 'Sum of First n Terms of AP' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: '9-B', subject: 'Mathematics', room: 'Room 108', type: 'lecture', topic: 'Splitting Middle Term Practice' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: 'Free Period', subject: 'Curriculum Audit', room: 'Academic Office', type: 'free', topic: '' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: '10-B', subject: 'Mathematics (Standard)', room: 'Room 205', type: 'lecture', topic: 'Triangles - Similarity Criteria' },
      { period: 'Period 5', time: '11:50 AM – 12:35 PM', class: '11-A', subject: 'Applied Mathematics', room: 'Math Lab 1', type: 'lecture', topic: 'Conditional Trigonometric Sums' },
      { period: 'Lunch', time: '12:35 PM – 01:15 PM', class: 'Lunch Break', subject: 'Faculty Dining', room: 'Cafeteria', type: 'break', topic: '' },
      { period: 'Period 6', time: '01:15 PM – 01:55 PM', class: 'Free Period', subject: 'Weekend Homework Setup', room: 'Faculty Room 2', type: 'free', topic: '' },
      { period: 'Period 7', time: '01:55 PM – 02:35 PM', class: 'Free Period', subject: 'Department Weekly Conclave', room: 'Conference A', type: 'free', topic: 'Faculty Sync' },
      { period: 'Period 8', time: '02:35 PM – 03:15 PM', class: '10-A', subject: 'Doubt Clinic & Review', room: 'Room 204', type: 'remedial', topic: 'Term 1 Revision' },
    ],
    Saturday: [
      { period: 'Period 1', time: '08:30 AM – 09:15 AM', class: '10-A', subject: 'Mathematics Unit Test', room: 'Room 204', type: 'lecture', topic: 'Weekly Mock Test on Chapter 4' },
      { period: 'Period 2', time: '09:15 AM – 10:00 AM', class: '10-B', subject: 'Mathematics Unit Test', room: 'Room 205', type: 'lecture', topic: 'Weekly Mock Test on Chapter 7' },
      { period: 'Period 3', time: '10:00 AM – 10:45 AM', class: '9-B', subject: 'Mathematics Problem Solving', room: 'Room 108', type: 'lecture', topic: 'Olympiad Questions' },
      { period: 'Break', time: '10:45 AM – 11:05 AM', class: 'Recess', subject: 'Morning Tea', room: 'Staff Room', type: 'break', topic: '' },
      { period: 'Period 4', time: '11:05 AM – 11:50 AM', class: '11-A', subject: 'Applied Mathematics Discussion', room: 'Math Lab 1', type: 'lecture', topic: 'Case Studies' },
      { period: 'Period 5', time: '11:50 AM – 12:45 PM', class: 'PTM Slot', subject: 'Parent Consultation & Dispersal', room: 'Room 204', type: 'remedial', topic: 'Class 10-A Parent Interaction' },
    ]
  };

  const currentSchedule = scheduleData[selectedDay] || scheduleData['Monday'];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Faculty Timetable & Workload"
      description="Manage your weekly teaching periods, laboratory practical hours, free planning blocks, and remedial doubt clinics."
    >
      <div className="space-y-8">

        {/* TOP WORKLOAD METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Weekly Teaching Load</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">26 Periods</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Regular classroom lectures</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Remedial Doubt Clinics</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">4 Periods</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Zero-period mentoring</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Planning & Free Time</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">14 Periods</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Evaluation & preparation</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wider">Lab Practical Sessions</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">4 Sessions</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Mathematics Lab 1</p>
          </div>
        </div>

        {/* CONTROLS & DAY SWITCHER */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => alert('Downloading official Mrs. Ananya Sharma Master Timetable PDF...')}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-bold hover:bg-slate-50 transition flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Timetable (PDF)
            </button>

            <button
              onClick={() => alert('Opening Faculty Period Substitution Request Desk...')}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-sm"
            >
              Request Substitution
            </button>
          </div>
        </div>

        {/* TIMETABLE SCHEDULE LIST */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <h3 className="text-xl font-extrabold text-slate-900">{selectedDay} Teaching Roster</h3>
              <p className="text-sm text-slate-500 mt-0.5">Faculty: Mrs. Ananya Sharma • Department of Mathematics</p>
            </div>
            <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-bold font-mono">
              Academic Year 2026-27
            </span>
          </div>

          <div className="space-y-4">
            {currentSchedule.map((item, idx) => {
              const isBreak = item.type === 'break';
              const isFree = item.type === 'free';
              const isLab = item.type === 'lab';
              const isRemedial = item.type === 'remedial';

              return (
                <div
                  key={idx}
                  className={`p-5 rounded-2xl border transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isBreak 
                      ? 'bg-amber-50/40 border-amber-200/60' 
                      : isFree
                      ? 'bg-slate-50/60 border-slate-200/70 border-dashed'
                      : isLab
                      ? 'bg-blue-50/40 border-blue-200/80 shadow-sm'
                      : isRemedial
                      ? 'bg-purple-50/40 border-purple-200/80'
                      : 'bg-white border-slate-200 hover:border-blue-300 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    {/* Period Badge & Time */}
                    <div className="w-40 shrink-0">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-extrabold ${
                        isBreak ? 'bg-amber-100 text-amber-800' :
                        isFree ? 'bg-slate-200 text-slate-700' :
                        isLab ? 'bg-blue-100 text-blue-800' :
                        isRemedial ? 'bg-purple-100 text-purple-800' :
                        'bg-slate-900 text-white'
                      }`}>
                        {item.period}
                      </span>
                      <p className="text-xs font-mono font-bold text-slate-500 mt-1.5">{item.time}</p>
                    </div>

                    {/* Class Details */}
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h4 className="text-base font-extrabold text-slate-900">{item.subject}</h4>
                        {item.class && !isBreak && (
                          <span className={`px-2.5 py-0.5 rounded-full text-xs font-black ${
                            item.class.includes('10-A') ? 'bg-purple-100 text-purple-800' :
                            isFree ? 'bg-slate-200 text-slate-600' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {item.class}
                          </span>
                        )}
                      </div>

                      {item.topic && (
                        <p className="text-sm text-slate-600 font-medium">
                          {item.topic}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Room / Location */}
                  <div className="flex items-center gap-4 shrink-0 text-xs">
                    <span className="font-semibold text-slate-600 flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-xl border border-slate-200">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {item.room}
                    </span>

                    {!isBreak && !isFree && (
                      <span className="px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                        Class Scheduled
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </SchoolLayout>
  );
}
