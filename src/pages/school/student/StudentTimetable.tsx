import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { Download, Calendar, Clock, MapPin, User, ChevronRight } from 'lucide-react';

export function StudentTimetable() {
  const user = USERS.student;
  const [selectedDay, setSelectedDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const scheduleData: Record<string, Array<{ period: string; time: string; subject: string; teacher: string; room: string; type: string }>> = {
    'Monday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Mathematics', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Physics & Natural Science', teacher: 'Mr. Amit Verma', room: 'Science Lab 2', type: 'Lab' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Morning Recess', teacher: 'Staff on duty', room: 'Courtyard / Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'English Literature', teacher: 'Ms. Neha Singh', room: 'Room 106', type: 'Core' },
      { period: 'Period 4', time: '11:30 - 12:30 PM', subject: 'Computer Science & AI', teacher: 'Mr. Vikram Singh', room: 'Computer Lab 1', type: 'Practical' },
      { period: 'Lunch', time: '12:30 - 01:30 PM', subject: 'Lunch Break', teacher: '-', room: 'Dining Hall', type: 'Break' },
      { period: 'Period 5', time: '01:30 - 02:30 PM', subject: 'Social Studies & Civics', teacher: 'Mr. Rohan Mehta', room: 'Room 104', type: 'Core' }
    ],
    'Tuesday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Chemistry Laboratory', teacher: 'Dr. Sunita Rao', room: 'Chem Lab', type: 'Lab' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Mathematics', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Morning Recess', teacher: 'Staff on duty', room: 'Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'Social Sciences', teacher: 'Mr. Rohan Mehta', room: 'Room 104', type: 'Core' },
      { period: 'Period 4', time: '11:30 - 12:30 PM', subject: 'Physical Education & Sports', teacher: 'Coach M. Sharma', room: 'Sports Arena', type: 'Sports' },
      { period: 'Lunch', time: '12:30 - 01:30 PM', subject: 'Lunch Break', teacher: '-', room: 'Dining Hall', type: 'Break' },
      { period: 'Period 5', time: '01:30 - 02:30 PM', subject: 'English Composition', teacher: 'Ms. Neha Singh', room: 'Room 106', type: 'Core' }
    ],
    'Wednesday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Computer Science', teacher: 'Mr. Vikram Singh', room: 'Computer Lab 1', type: 'Practical' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Mathematics', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Morning Recess', teacher: 'Staff on duty', room: 'Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'Physics Theory', teacher: 'Mr. Amit Verma', room: 'Room 204', type: 'Core' },
      { period: 'Period 4', time: '11:30 - 12:30 PM', subject: 'Library & Reading Hour', teacher: 'Mrs. K. Roy', room: 'Central Library', type: 'Activity' },
      { period: 'Lunch', time: '12:30 - 01:30 PM', subject: 'Lunch Break', teacher: '-', room: 'Dining Hall', type: 'Break' },
      { period: 'Period 5', time: '01:30 - 02:30 PM', subject: 'Art & Design', teacher: 'Ms. Shalini Gupta', room: 'Art Studio', type: 'Creative' }
    ],
    'Thursday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Social Sciences', teacher: 'Mr. Rohan Mehta', room: 'Room 104', type: 'Core' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Mathematics', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Morning Recess', teacher: 'Staff on duty', room: 'Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'Chemistry Theory', teacher: 'Dr. Sunita Rao', room: 'Room 204', type: 'Core' },
      { period: 'Period 4', time: '11:30 - 12:30 PM', subject: 'English Grammar', teacher: 'Ms. Neha Singh', room: 'Room 106', type: 'Core' },
      { period: 'Lunch', time: '12:30 - 01:30 PM', subject: 'Lunch Break', teacher: '-', room: 'Dining Hall', type: 'Break' },
      { period: 'Period 5', time: '01:30 - 02:30 PM', subject: 'Robotics & Coding Lab', teacher: 'Mr. Vikram Singh', room: 'Maker Space', type: 'Practical' }
    ],
    'Friday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Mathematics', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Physics Experiments', teacher: 'Mr. Amit Verma', room: 'Science Lab 2', type: 'Lab' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Morning Recess', teacher: 'Staff on duty', room: 'Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'English Drama', teacher: 'Ms. Neha Singh', room: 'Auditorium', type: 'Core' },
      { period: 'Period 4', time: '11:30 - 12:30 PM', subject: 'Environmental Studies', teacher: 'Mr. Rohan Mehta', room: 'Room 104', type: 'Core' },
      { period: 'Lunch', time: '12:30 - 01:30 PM', subject: 'Lunch Break', teacher: '-', room: 'Dining Hall', type: 'Break' },
      { period: 'Period 5', time: '01:30 - 02:30 PM', subject: 'Weekly Assessment / Quiz', teacher: 'Rotating Faculty', room: 'Room 204', type: 'Assessment' }
    ],
    'Saturday': [
      { period: 'Period 1', time: '08:00 - 09:00 AM', subject: 'Club Activities & Debate', teacher: 'Ms. Neha Singh', room: 'Hall B', type: 'Activity' },
      { period: 'Period 2', time: '09:00 - 10:00 AM', subject: 'Mathematics Remedial', teacher: 'Dr. Priya Patel', room: 'Room 204', type: 'Core' },
      { period: 'Break', time: '10:00 - 10:30 AM', subject: 'Recess', teacher: 'Staff on duty', room: 'Cafeteria', type: 'Break' },
      { period: 'Period 3', time: '10:30 - 11:30 AM', subject: 'Sports Matches & Training', teacher: 'Coach M. Sharma', room: 'Main Ground', type: 'Sports' }
    ]
  };

  const currentSchedule = scheduleData[selectedDay] || [];

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Weekly Timetable"
      description="View your daily periods, classroom allocations, subject timings, and teacher details."
    >
      <div className="space-y-6">

        {/* Top Controls: Day Tabs & PDF Download */}
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                  selectedDay === day
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/80 text-xs font-semibold transition-colors shrink-0">
            <Download size={14} /> Download PDF Timetable
          </button>
        </div>

        {/* Selected Day Timetable List */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
            <div>
              <h2 className="text-base font-bold text-slate-900">{selectedDay}'s Daily Schedule</h2>
              <p className="text-xs text-slate-500 mt-0.5">Grade 10-A • Academic Year 2026-27</p>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-100">
              {currentSchedule.filter(s => s.type !== 'Break').length} Academic Sessions
            </span>
          </div>

          <div className="space-y-3">
            {currentSchedule.map((slot, idx) => {
              const isBreak = slot.type === 'Break';
              return (
                <div 
                  key={idx}
                  className={`p-4 rounded-xl border transition-all ${
                    isBreak 
                      ? 'bg-slate-50/70 border-dashed border-slate-200 text-slate-500' 
                      : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                      {/* Period Badge */}
                      <span className={`w-20 text-center px-2 py-1 rounded-lg text-xs font-bold shrink-0 ${
                        isBreak 
                          ? 'bg-slate-200/60 text-slate-600' 
                          : 'bg-blue-50 text-blue-700 border border-blue-100'
                      }`}>
                        {slot.period}
                      </span>

                      {/* Time */}
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-slate-700 w-36 shrink-0">
                        <Clock size={13} className="text-slate-400" />
                        {slot.time}
                      </div>

                      {/* Subject Name */}
                      <div>
                        <h4 className={`text-sm font-bold ${isBreak ? 'text-slate-600 italic' : 'text-slate-900'}`}>
                          {slot.subject}
                        </h4>
                        {!isBreak && (
                          <p className="text-xs text-slate-500 mt-0.5 flex items-center gap-2">
                            <span>{slot.teacher}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Room & Type Badge */}
                    <div className="flex items-center gap-3 sm:text-right shrink-0">
                      <span className="text-xs text-slate-500 flex items-center gap-1">
                        <MapPin size={12} className="text-slate-400" /> {slot.room}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        slot.type === 'Core' ? 'bg-indigo-50 text-indigo-700' :
                        slot.type === 'Lab' ? 'bg-cyan-50 text-cyan-700' :
                        slot.type === 'Practical' ? 'bg-purple-50 text-purple-700' :
                        slot.type === 'Sports' ? 'bg-emerald-50 text-emerald-700' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {slot.type}
                      </span>
                    </div>
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
