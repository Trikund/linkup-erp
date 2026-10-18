import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Calendar, Clock, Building, Users, Download, 
  CheckCircle2, ArrowRight, BookOpen
} from 'lucide-react';

export function ParentTimetable() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };
  const [selectedDay, setSelectedDay] = useState<'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat'>('Mon');

  const scheduleData = {
    Mon: [
      { time: '09:00 AM - 10:00 AM', code: 'CS703', name: 'Advanced Database Management Systems', type: 'Lecture', faculty: 'Dr. Ankit Sharma (HOD)', room: 'Tech Block 3 • Room 302', color: 'border-l-purple-600' },
      { time: '10:15 AM - 11:15 AM', code: 'CS702', name: 'Cloud Computing Architectures', type: 'Lecture', faculty: 'Prof. Sneha Kulkarni', room: 'Tech Block 3 • Room 302', color: 'border-l-blue-600' },
      { time: '11:15 AM - 12:15 PM', code: 'CS701', name: 'Machine Learning & Neural Nets', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 304', color: 'border-l-indigo-600' },
      { time: '02:00 PM - 04:00 PM', code: 'CS706P', name: 'Major Capstone Project Lab', type: 'Lab Practical', faculty: 'Dr. Ankit Sharma (Guide)', room: 'Advanced AI/ML Lab 2', color: 'border-l-amber-600' }
    ],
    Tue: [
      { time: '09:00 AM - 10:00 AM', code: 'CS704', name: 'Information Security & Cryptography', type: 'Lecture', faculty: 'Dr. Rajeshwar Iyer', room: 'Tech Block 3 • Room 302', color: 'border-l-emerald-600' },
      { time: '10:15 AM - 11:15 AM', code: 'CS701', name: 'Machine Learning', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 304', color: 'border-l-indigo-600' },
      { time: '11:15 AM - 12:15 PM', code: 'CS703', name: 'Advanced Database Management Systems', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 302', color: 'border-l-purple-600' },
      { time: '02:00 PM - 04:00 PM', code: 'CS702P', name: 'Cloud & Distributed Systems Practical', type: 'Lab Practical', faculty: 'Prof. Sneha Kulkarni', room: 'Cloud Computing Lab 1', color: 'border-l-blue-600' }
    ],
    Wed: [
      { time: '09:00 AM - 10:00 AM', code: 'CS703', name: 'Advanced DBMS', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 302', color: 'border-l-purple-600' },
      { time: '10:15 AM - 11:15 AM', code: 'CS704', name: 'Information Security', type: 'Lecture', faculty: 'Dr. Rajeshwar Iyer', room: 'Tech Block 3 • Room 302', color: 'border-l-emerald-600' },
      { time: '11:15 AM - 12:15 PM', code: 'CS702', name: 'Cloud Computing', type: 'Lecture', faculty: 'Prof. Sneha Kulkarni', room: 'Tech Block 3 • Room 302', color: 'border-l-blue-600' },
      { time: '03:00 PM - 04:30 PM', code: 'MENTOR-01', name: 'Faculty Mentorship & Counseling', type: 'Mentorship', faculty: 'Dr. Ankit Sharma', room: 'HOD Cabin • Room 301', color: 'border-l-purple-600' }
    ],
    Thu: [
      { time: '09:00 AM - 10:00 AM', code: 'CS701', name: 'Machine Learning', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 304', color: 'border-l-indigo-600' },
      { time: '10:15 AM - 11:15 AM', code: 'CS704', name: 'Information Security', type: 'Lecture', faculty: 'Dr. Rajeshwar Iyer', room: 'Tech Block 3 • Room 302', color: 'border-l-emerald-600' },
      { time: '02:00 PM - 04:00 PM', code: 'CS706P', name: 'Major Capstone Project Lab', type: 'Lab Practical', faculty: 'Dr. Ankit Sharma (Guide)', room: 'Advanced AI/ML Lab 2', color: 'border-l-amber-600' }
    ],
    Fri: [
      { time: '09:00 AM - 10:00 AM', code: 'CS703', name: 'Advanced DBMS Tutorial', type: 'Tutorial', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 302', color: 'border-l-purple-600' },
      { time: '10:15 AM - 11:15 AM', code: 'CS701', name: 'Machine Learning Tutorial', type: 'Tutorial', faculty: 'Dr. Ankit Sharma', room: 'Tech Block 3 • Room 304', color: 'border-l-indigo-600' },
      { time: '11:15 AM - 12:15 PM', code: 'CS702', name: 'Cloud Computing', type: 'Lecture', faculty: 'Prof. Sneha Kulkarni', room: 'Tech Block 3 • Room 302', color: 'border-l-blue-600' }
    ],
    Sat: [
      { time: '10:00 AM - 12:00 PM', code: 'DOUBT-01', name: 'Weekend Remedial & Doubt Clearing', type: 'Doubt Class', faculty: 'Department Faculty', room: 'Tech Block 3 • Room 302', color: 'border-l-slate-600' }
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

  const currentSlots = scheduleData[selectedDay];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Weekly Timetable" 
      description="Official lecture timetable, lab sessions, and classroom allocations for Shivam Sharma (B.Tech CSE Sem 7)."
    >
      {/* Top Banner */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">Weekly Academic Hours: 26 Hours / Week</h3>
          <p className="text-xs text-slate-500 mt-0.5">14 Theory Lecture Hours • 8 Practical Lab Hours • 2 Tutorials • 2 Mentorship</p>
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm">
          <Download size={14} />
          <span>Download Timetable PDF</span>
        </button>
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
            <span className="text-[10px] uppercase tracking-wider block opacity-80">{d.key}</span>
            <span className="text-xs sm:text-sm font-bold">{d.label}</span>
          </button>
        ))}
      </div>

      {/* Slots List */}
      <div className="space-y-4">
        {currentSlots.map((slot, index) => (
          <div
            key={index}
            className={`bg-white border border-slate-100 rounded-3xl p-6 shadow-sm border-l-4 ${slot.color} hover:shadow-md transition-all`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                  {slot.code}
                </span>
                <h4 className="text-base font-bold text-slate-800">{slot.name}</h4>
              </div>

              <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 self-start sm:self-center">
                {slot.type}
              </span>
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
                Instructor: <strong className="text-slate-700">{slot.faculty}</strong>
              </span>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
