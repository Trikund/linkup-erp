import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { Clock, Calendar, Download, Printer, MapPin, User, Info } from 'lucide-react';

export function StudentTimetable() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const schedule: Record<string, Array<{ time: string; code: string; name: string; faculty: string; room: string; type: string }>> = {
    Monday: [
      { time: '09:00 - 10:00 AM', code: 'CS701', name: 'Machine Learning & Neural Networks', faculty: 'Dr. Ankit Sharma', room: 'Room 302', type: 'Theory' },
      { time: '10:15 - 11:45 AM', code: 'CS702', name: 'Cloud Computing Architecture Lab', faculty: 'Prof. Vikas Singh', room: 'Advanced Lab 4', type: 'Practical' },
      { time: '12:00 - 01:00 PM', code: 'CS703', name: 'Advanced Database Systems', faculty: 'Prof. Sunita Rao', room: 'Room 305', type: 'Theory' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch & Campus Break', faculty: 'Cafeteria & Library', room: 'Student Center', type: 'Break' },
      { time: '02:00 - 03:30 PM', code: 'CS706P', name: 'Major Capstone Project Review', faculty: 'Dr. Ankit Sharma', room: 'Seminar Hall B', type: 'Capstone' },
      { time: '03:45 - 04:45 PM', code: 'TP701', name: 'T&P Aptitude & Soft Skills Training', faculty: 'Placement Cell', room: 'Auditorium 2', type: 'Training' },
    ],
    Tuesday: [
      { time: '09:00 - 10:00 AM', code: 'CS704', name: 'Information & Cyber Security', faculty: 'Dr. R. K. Verma', room: 'Room 301', type: 'Theory' },
      { time: '10:15 - 11:45 AM', code: 'CS705E', name: 'Deep Learning & Computer Vision', faculty: 'Dr. Neha Kapoor', room: 'Seminar Hall B', type: 'Elective' },
      { time: '12:00 - 01:00 PM', code: 'CS701', name: 'Machine Learning Tutorial', faculty: 'Dr. Ankit Sharma', room: 'Room 302', type: 'Tutorial' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch & Campus Break', faculty: 'Cafeteria & Library', room: 'Student Center', type: 'Break' },
      { time: '02:00 - 04:00 PM', code: 'CS701L', name: 'Machine Learning PyTorch Lab', faculty: 'Dr. Ankit Sharma', room: 'AI & GPU Lab', type: 'Practical' },
    ],
    Wednesday: [
      { time: '09:00 - 10:00 AM', code: 'CS703', name: 'Advanced Database Systems', faculty: 'Prof. Sunita Rao', room: 'Room 305', type: 'Theory' },
      { time: '10:15 - 11:45 AM', code: 'CS702', name: 'Cloud Computing Architecture', faculty: 'Prof. Vikas Singh', room: 'Room 305', type: 'Theory' },
      { time: '12:00 - 01:00 PM', code: 'CS704', name: 'Information & Cyber Security', faculty: 'Dr. R. K. Verma', room: 'Room 301', type: 'Theory' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch & Campus Break', faculty: 'Cafeteria & Library', room: 'Student Center', type: 'Break' },
      { time: '02:00 - 04:30 PM', code: 'CS703L', name: 'PostgreSQL Query Optimization Lab', faculty: 'Prof. Sunita Rao', room: 'Database Lab 2', type: 'Practical' },
    ],
    Thursday: [
      { time: '09:00 - 10:00 AM', code: 'CS701', name: 'Machine Learning & Neural Networks', faculty: 'Dr. Ankit Sharma', room: 'Room 302', type: 'Theory' },
      { time: '10:15 - 11:45 AM', code: 'CS705E', name: 'Deep Learning & Computer Vision', faculty: 'Dr. Neha Kapoor', room: 'Seminar Hall B', type: 'Elective' },
      { time: '12:00 - 01:00 PM', code: 'CS702', name: 'Cloud AWS Services Overview', faculty: 'Prof. Vikas Singh', room: 'Room 305', type: 'Theory' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch & Campus Break', faculty: 'Cafeteria & Library', room: 'Student Center', type: 'Break' },
      { time: '02:00 - 04:00 PM', code: 'CS706P', name: 'Capstone Sprint Implementation', faculty: 'Dr. Ankit Sharma', room: 'R&D Lab', type: 'Capstone' },
    ],
    Friday: [
      { time: '09:00 - 10:00 AM', code: 'CS704', name: 'Cyber Security Cryptography Lab', faculty: 'Dr. R. K. Verma', room: 'Cyber Lab 1', type: 'Practical' },
      { time: '10:15 - 11:45 AM', code: 'CS703', name: 'NoSQL & MongoDB Case Studies', faculty: 'Prof. Sunita Rao', room: 'Room 305', type: 'Theory' },
      { time: '12:00 - 01:00 PM', code: 'LIB701', name: 'Digital Library & Research Papers', faculty: 'Dr. S. K. Roy', room: 'Central E-Library', type: 'Library' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch & Campus Break', faculty: 'Cafeteria & Library', room: 'Student Center', type: 'Break' },
      { time: '02:00 - 04:00 PM', code: 'TP702', name: 'Mock Technical Interview Session', faculty: 'Alumni Mentors', room: 'Conference Hall', type: 'Training' },
    ],
    Saturday: [
      { time: '09:30 - 11:30 AM', code: 'SEM701', name: 'Industry Expert Guest Webinar', faculty: 'Guest Speaker (Google)', room: 'Main Auditorium', type: 'Seminar' },
      { time: '11:45 - 01:00 PM', code: 'CLUB701', name: 'Coding Club & Hackathon Prep', faculty: 'Student Council', room: 'Innovation Hub', type: 'Activity' },
      { time: '01:00 - 02:00 PM', code: 'LUNCH', name: 'Lunch', faculty: 'Cafeteria', room: 'Student Center', type: 'Break' },
    ]
  };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Weekly Timetable" 
      description="Semester VII Official Lecture & Practical Schedule • Academic Year 2026-27"
    >
      {/* Action Header */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-base font-bold text-slate-800">Section CSE-A • Room 302 Base Hall</h2>
          <p className="text-xs text-slate-500 font-medium">Effective from: 01 August 2026 • 27 Weekly Contact Hours</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
          >
            <Printer size={14} />
            <span>Print</span>
          </button>
          <button 
            onClick={() => alert('Downloading Apex Institute of Technology Semester VII Master Timetable PDF...')}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20"
          >
            <Download size={14} />
            <span>Download Timetable PDF</span>
          </button>
        </div>
      </div>

      {/* Day Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedDay === day 
                ? 'bg-[#7c3aed] text-white shadow-lg shadow-[#7c3aed]/25' 
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Selected Day Schedule */}
      <div className="space-y-3.5 mb-8">
        {schedule[selectedDay]?.map((slot, idx) => (
          <div 
            key={idx}
            className={`flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-3xl border transition-all ${
              slot.type === 'Break'
                ? 'bg-slate-50/80 border-dashed border-slate-200 opacity-80'
                : 'bg-white border-slate-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-purple-200'
            }`}
          >
            <div className="flex items-start sm:items-center gap-4 mb-2 sm:mb-0">
              <div className="w-32 shrink-0 font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-3 py-2 rounded-xl border border-purple-100 text-center">
                {slot.time}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{slot.code}</span>
                  <h3 className="text-sm font-bold text-slate-900">{slot.name}</h3>
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <User size={13} className="text-slate-400" />
                    {slot.faculty}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={13} className="text-[#7c3aed]" />
                    <span className="font-semibold text-slate-700">{slot.room}</span>
                  </span>
                </div>
              </div>
            </div>

            <span className={`text-[11px] font-bold px-3 py-1 rounded-full border self-start sm:self-auto ${
              slot.type === 'Practical' ? 'bg-amber-50 text-amber-700 border-amber-200' :
              slot.type === 'Capstone' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
              slot.type === 'Elective' ? 'bg-purple-50 text-purple-700 border-purple-200' :
              slot.type === 'Break' ? 'bg-slate-100 text-slate-600 border-slate-200' :
              slot.type === 'Training' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
              'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              {slot.type}
            </span>
          </div>
        ))}
      </div>

      {/* Lab & Hall Directory Notice */}
      <div className="bg-purple-50/60 border border-purple-100 rounded-3xl p-5 flex items-start gap-3">
        <Info size={18} className="text-[#7c3aed] shrink-0 mt-0.5" />
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong className="text-slate-800">Lab Policy Reminder:</strong> Students attending Practical Lab sessions (Lab 4, AI & GPU Lab, Database Lab) must carry their college ID cards and submit weekly laboratory assignment code before 05:00 PM on Friday.
        </p>
      </div>
    </CollegeLayout>
  );
}
