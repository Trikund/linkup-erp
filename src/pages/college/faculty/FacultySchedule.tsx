import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Calendar, Clock, Users, Building, Download, Plus, 
  ChevronLeft, ChevronRight, CheckCircle2, Bookmark
} from 'lucide-react';

export function FacultySchedule() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'>('Mon');

  const weeklySchedule = {
    Mon: [
      {
        time: '09:00 AM - 10:00 AM',
        code: 'CS703',
        title: 'Advanced Database Management Systems',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec A',
        room: 'Tech Block 3 • Room 302',
        color: 'border-l-purple-600 bg-purple-50/40 text-purple-900',
        badge: 'bg-purple-100 text-purple-700'
      },
      {
        time: '11:15 AM - 12:15 PM',
        code: 'CS701',
        title: 'Machine Learning',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec B',
        room: 'Tech Block 3 • Room 304',
        color: 'border-l-indigo-600 bg-indigo-50/40 text-indigo-900',
        badge: 'bg-indigo-100 text-indigo-700'
      },
      {
        time: '02:00 PM - 04:00 PM',
        code: 'CS706P',
        title: 'Major Capstone Project Lab',
        type: 'Lab Practical',
        batch: 'B.Tech CSE Sem 7 • Batch A1 & A2',
        room: 'Advanced AI/ML Lab 2',
        color: 'border-l-amber-600 bg-amber-50/40 text-amber-900',
        badge: 'bg-amber-100 text-amber-700'
      },
      {
        time: '04:00 PM - 05:00 PM',
        code: 'HOD-ADM',
        title: 'HOD Departmental Office Consultation',
        type: 'Administrative',
        batch: 'Faculty & Student Walk-in',
        room: 'HOD Cabin • Room 301',
        color: 'border-l-emerald-600 bg-emerald-50/40 text-emerald-900',
        badge: 'bg-emerald-100 text-emerald-700'
      }
    ],
    Tue: [
      {
        time: '10:00 AM - 11:00 AM',
        code: 'CS701',
        title: 'Machine Learning',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec B',
        room: 'Tech Block 3 • Room 304',
        color: 'border-l-indigo-600 bg-indigo-50/40 text-indigo-900',
        badge: 'bg-indigo-100 text-indigo-700'
      },
      {
        time: '11:15 AM - 12:15 PM',
        code: 'CS703',
        title: 'Advanced Database Management Systems',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec A',
        room: 'Tech Block 3 • Room 302',
        color: 'border-l-purple-600 bg-purple-50/40 text-purple-900',
        badge: 'bg-purple-100 text-purple-700'
      },
      {
        time: '03:00 PM - 04:30 PM',
        code: 'MENTOR-01',
        title: 'Weekly 1-on-1 Mentorship Counseling',
        type: 'Mentoring',
        batch: 'Assigned Mentees (Batches 1 & 2)',
        room: 'HOD Cabin • Room 301',
        color: 'border-l-emerald-600 bg-emerald-50/40 text-emerald-900',
        badge: 'bg-emerald-100 text-emerald-700'
      }
    ],
    Wed: [
      {
        time: '09:00 AM - 10:00 AM',
        code: 'CS703',
        title: 'Advanced Database Management Systems',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec A',
        room: 'Tech Block 3 • Room 302',
        color: 'border-l-purple-600 bg-purple-50/40 text-purple-900',
        badge: 'bg-purple-100 text-purple-700'
      },
      {
        time: '10:15 AM - 11:15 AM',
        code: 'CS701',
        title: 'Machine Learning',
        type: 'Tutorial',
        batch: 'B.Tech CSE Sem 7 • Sec B (Tutorial Group 1)',
        room: 'Tech Block 3 • Room 305',
        color: 'border-l-blue-600 bg-blue-50/40 text-blue-900',
        badge: 'bg-blue-100 text-blue-700'
      },
      {
        time: '02:00 PM - 03:30 PM',
        code: 'DEPT-MEET',
        title: 'CSE Department Faculty Council Meeting',
        type: 'Administrative',
        batch: 'All CSE Teaching Faculty',
        room: 'Seminar Hall 1',
        color: 'border-l-rose-600 bg-rose-50/40 text-rose-900',
        badge: 'bg-rose-100 text-rose-700'
      }
    ],
    Thu: [
      {
        time: '11:15 AM - 12:15 PM',
        code: 'CS701',
        title: 'Machine Learning',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec B',
        room: 'Tech Block 3 • Room 304',
        color: 'border-l-indigo-600 bg-indigo-50/40 text-indigo-900',
        badge: 'bg-indigo-100 text-indigo-700'
      },
      {
        time: '02:00 PM - 04:00 PM',
        code: 'CS706P',
        title: 'Major Capstone Project Lab',
        type: 'Lab Practical',
        batch: 'B.Tech CSE Sem 7 • Batch B1 & B2',
        room: 'Advanced AI/ML Lab 2',
        color: 'border-l-amber-600 bg-amber-50/40 text-amber-900',
        badge: 'bg-amber-100 text-amber-700'
      }
    ],
    Fri: [
      {
        time: '09:00 AM - 10:00 AM',
        code: 'CS703',
        title: 'Advanced Database Management Systems',
        type: 'Tutorial',
        batch: 'B.Tech CSE Sem 7 • Sec A (Tutorial Group 2)',
        room: 'Tech Block 3 • Room 302',
        color: 'border-l-blue-600 bg-blue-50/40 text-blue-900',
        badge: 'bg-blue-100 text-blue-700'
      },
      {
        time: '10:15 AM - 11:15 AM',
        code: 'CS701',
        title: 'Machine Learning',
        type: 'Lecture',
        batch: 'B.Tech CSE Sem 7 • Sec B',
        room: 'Tech Block 3 • Room 304',
        color: 'border-l-indigo-600 bg-indigo-50/40 text-indigo-900',
        badge: 'bg-indigo-100 text-indigo-700'
      },
      {
        time: '03:00 PM - 05:00 PM',
        code: 'RESEARCH',
        title: 'Doctoral Scholar Research Guidance (DST-SERB)',
        type: 'Research',
        batch: 'Ph.D. Scholars (Deep Learning Lab)',
        room: 'Research Wing • Room 402',
        color: 'border-l-cyan-600 bg-cyan-50/40 text-cyan-900',
        badge: 'bg-cyan-100 text-cyan-700'
      }
    ],
    Sat: [
      {
        time: '10:00 AM - 12:00 PM',
        code: 'REMEDIAL',
        title: 'Remedial Class & Doubt Clearing Session',
        type: 'Doubt Class',
        batch: 'Low Attendance & Lateral Entry Students',
        room: 'Tech Block 3 • Room 302',
        color: 'border-l-purple-600 bg-purple-50/40 text-purple-900',
        badge: 'bg-purple-100 text-purple-700'
      }
    ]
  };

  const days = [
    { key: 'Mon', label: 'Monday' },
    { key: 'Tue', label: 'Tuesday' },
    { key: 'Wed', label: 'Wednesday' },
    { key: 'Thu', label: 'Thursday' },
    { key: 'Fri', label: 'Friday' },
    { key: 'Sat', label: 'Saturday' }
  ] as const;

  const currentSlots = weeklySchedule[selectedDay];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Teaching Schedule" 
      description="Weekly academic timetable, lecture room allocations, lab practical slots, and office consultation hours."
    >
      {/* Top Action Ribbon */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">Weekly Workload: 18 Hours / Week</h3>
          <p className="text-xs text-slate-500 mt-0.5">8 Lecture Hours • 4 Lab Practical Hours • 2 Tutorials • 4 Mentorship & Research</p>
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-all">
            <Download size={14} />
            <span>Download Timetable PDF</span>
          </button>
          <button className="flex-1 md:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 shadow-sm transition-all">
            <Plus size={14} />
            <span>Schedule Extra Class</span>
          </button>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
        {days.map((d) => (
          <button
            key={d.key}
            onClick={() => setSelectedDay(d.key)}
            className={`py-3 px-2 rounded-2xl text-center transition-all ${
              selectedDay === d.key
                ? 'bg-[#7c3aed] text-white shadow-md font-bold'
                : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50 font-semibold'
            }`}
          >
            <span className="text-[11px] uppercase tracking-wider block opacity-80">{d.key}</span>
            <span className="text-xs sm:text-sm font-bold">{d.label}</span>
          </button>
        ))}
      </div>

      {/* Schedule Slots Timeline */}
      <div className="space-y-4">
        {currentSlots.map((slot, index) => (
          <div
            key={index}
            className={`bg-white border border-slate-100 rounded-2xl p-5 shadow-sm border-l-4 ${slot.color.split(' ')[0]} hover:shadow-md transition-all`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-black px-2.5 py-1 bg-slate-100 text-slate-800 rounded-lg">
                  {slot.code}
                </span>
                <h4 className="text-base font-bold text-slate-800">{slot.title}</h4>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${slot.badge}`}>
                  {slot.type}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600 pt-3 border-t border-slate-100">
              <span className="flex items-center gap-1.5 font-bold text-slate-800">
                <Clock size={14} className="text-[#7c3aed]" />
                {slot.time}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Building size={14} className="text-slate-400" />
                {slot.room}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Users size={14} className="text-slate-400" />
                {slot.batch}
              </span>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
