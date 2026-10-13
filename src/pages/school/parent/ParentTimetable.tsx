import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Calendar, Clock, MapPin, User, Download, Printer, 
  BookOpen, Bell, AlertCircle, ChevronRight, CheckCircle2
} from 'lucide-react';

interface Period {
  periodNo: number;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  type: 'academic' | 'lab' | 'activity' | 'break';
  color: string;
}

const rahulSchedule: Record<string, Period[]> = {
  Monday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Physics (Theory)', teacher: 'Dr. Rajesh Sen', room: 'Room 302', type: 'academic', color: 'blue' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Chemistry Practical', teacher: 'Mrs. Sunita Verma', room: 'Chemistry Lab 2', type: 'lab', color: 'amber' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'English Literature', teacher: 'Ms. Pooja Nair', room: 'Room 302', type: 'academic', color: 'purple' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Information Technology', teacher: 'Mr. Amit Verma', room: 'Computer Lab 1', type: 'lab', color: 'emerald' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Social Science (History)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', type: 'academic', color: 'rose' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Physical Education & Games', teacher: 'Coach R.S. Rana', room: 'Main Sports Field', type: 'activity', color: 'teal' },
  ],
  Tuesday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Physics Practical', teacher: 'Dr. Rajesh Sen', room: 'Physics Lab 1', type: 'lab', color: 'blue' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Social Science (Civics)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', type: 'academic', color: 'rose' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Biology (Theory)', teacher: 'Dr. Meenakshi', room: 'Room 302', type: 'academic', color: 'emerald' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'English Grammar & Writing', teacher: 'Ms. Pooja Nair', room: 'Room 302', type: 'academic', color: 'purple' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Mathematics Tutorial', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Library & Self Study', teacher: 'Mrs. S. Bannerjee', room: 'Central Library', type: 'activity', color: 'teal' },
  ],
  Wednesday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Chemistry (Theory)', teacher: 'Mrs. Sunita Verma', room: 'Room 302', type: 'academic', color: 'amber' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Information Technology', teacher: 'Mr. Amit Verma', room: 'Computer Lab 1', type: 'lab', color: 'emerald' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Social Science (Geography)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', type: 'academic', color: 'rose' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Biology Practical', teacher: 'Dr. Meenakshi', room: 'Biology Lab', type: 'lab', color: 'emerald' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'English Literature', teacher: 'Ms. Pooja Nair', room: 'Room 302', type: 'academic', color: 'purple' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Robotics Club Activity', teacher: 'Mr. Amit Verma', room: 'STEM Tinkering Lab', type: 'activity', color: 'teal' },
  ],
  Thursday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Physics (Theory)', teacher: 'Dr. Rajesh Sen', room: 'Room 302', type: 'academic', color: 'blue' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'English (Reading & Debate)', teacher: 'Ms. Pooja Nair', room: 'Language Lab', type: 'academic', color: 'purple' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Social Science (Economics)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', type: 'academic', color: 'rose' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Chemistry (Theory)', teacher: 'Mrs. Sunita Verma', room: 'Room 302', type: 'academic', color: 'amber' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Information Technology', teacher: 'Mr. Amit Verma', room: 'Computer Lab 1', type: 'lab', color: 'emerald' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Class Mentor Period', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'activity', color: 'indigo' },
  ],
  Friday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics Problem Solving', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Physics (Numerical Drill)', teacher: 'Dr. Rajesh Sen', room: 'Room 302', type: 'academic', color: 'blue' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Social Science (Maps & Case)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', type: 'academic', color: 'rose' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Hindi / Second Language', teacher: 'Dr. R.K. Pandey', room: 'Room 302', type: 'academic', color: 'amber' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'English Grammar', teacher: 'Ms. Pooja Nair', room: 'Room 302', type: 'academic', color: 'purple' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Work Experience / SUPW', teacher: 'Mr. B.K. Ghosh', room: 'Craft Studio', type: 'activity', color: 'teal' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Junior Cricket Practice', teacher: 'Coach R.S. Rana', room: 'Cricket Nets', type: 'activity', color: 'teal' },
  ],
  Saturday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Weekly Unit Test / Assessment', teacher: 'Class Mentor Pool', room: 'Exam Hall A', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'CBSE Pre-Board Doubt Clearing', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Science Concept Reinforcement', teacher: 'Dr. Rajesh Sen', room: 'Physics Lab 1', type: 'academic', color: 'blue' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Inter-House Clubs & Societies', teacher: 'House Mentors', room: 'Auditorium', type: 'activity', color: 'purple' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Dispersal & Bus Boarding', teacher: 'Transport Incharge', room: 'Gate 3 Bay', type: 'break', color: 'teal' },
  ]
};

const ananyaSchedule: Record<string, Period[]> = {
  Monday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'General Science', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'academic', color: 'emerald' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Mr. Vivek Saxena', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'English Grammar', teacher: 'Mrs. Shalini Gupta', room: 'Room 204', type: 'academic', color: 'purple' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Hindi Literature', teacher: 'Mrs. Uma Joshi', room: 'Room 204', type: 'academic', color: 'amber' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Social Studies', teacher: 'Mrs. Sunita Rao', room: 'Room 204', type: 'academic', color: 'rose' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Art & Sketching Studio', teacher: 'Ms. Radhika', room: 'Art Room 2', type: 'activity', color: 'teal' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Aerobics & Yoga', teacher: 'Coach Anita', room: 'Gymnasium', type: 'activity', color: 'teal' },
  ],
  Tuesday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Mr. Vivek Saxena', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'General Science Lab', teacher: 'Mrs. Neha Batra', room: 'Junior STEM Lab', type: 'lab', color: 'emerald' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Social Studies', teacher: 'Mrs. Sunita Rao', room: 'Room 204', type: 'academic', color: 'rose' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'English Reading Club', teacher: 'Mrs. Shalini Gupta', room: 'Library Annex', type: 'activity', color: 'purple' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Computer Basics & Scratch', teacher: 'Mr. N. Chopra', room: 'Junior Comp Lab', type: 'lab', color: 'blue' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Hindi Grammar', teacher: 'Mrs. Uma Joshi', room: 'Room 204', type: 'academic', color: 'amber' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Music & Choir', teacher: 'Sir Debashish', room: 'Music Room', type: 'activity', color: 'teal' },
  ],
  Wednesday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'General Science', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'academic', color: 'emerald' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Mr. Vivek Saxena', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'English Literature', teacher: 'Mrs. Shalini Gupta', room: 'Room 204', type: 'academic', color: 'purple' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Social Studies', teacher: 'Mrs. Sunita Rao', room: 'Room 204', type: 'academic', color: 'rose' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Environmental Studies', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'academic', color: 'emerald' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Sanskrit Basics', teacher: 'Panditji', room: 'Room 204', type: 'academic', color: 'amber' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Sports & Games', teacher: 'Coach Anita', room: 'Playground', type: 'activity', color: 'teal' },
  ],
  Thursday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Mr. Vivek Saxena', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'General Science', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'academic', color: 'emerald' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Hindi Literature', teacher: 'Mrs. Uma Joshi', room: 'Room 204', type: 'academic', color: 'amber' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Social Studies', teacher: 'Mrs. Sunita Rao', room: 'Room 204', type: 'academic', color: 'rose' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'English Creative Writing', teacher: 'Mrs. Shalini Gupta', room: 'Room 204', type: 'academic', color: 'purple' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Junior Robotics Kit', teacher: 'Mr. N. Chopra', room: 'STEM Tinkering Lab', type: 'activity', color: 'blue' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Class Mentor Care', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'activity', color: 'indigo' },
  ],
  Friday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'English Literature', teacher: 'Mrs. Shalini Gupta', room: 'Room 204', type: 'academic', color: 'purple' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics Drill', teacher: 'Mr. Vivek Saxena', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'General Science Quiz', teacher: 'Mrs. Neha Batra', room: 'Room 204', type: 'academic', color: 'emerald' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Social Studies Map Activity', teacher: 'Mrs. Sunita Rao', room: 'Room 204', type: 'academic', color: 'rose' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Hindi Essay Writing', teacher: 'Mrs. Uma Joshi', room: 'Room 204', type: 'academic', color: 'amber' },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Crafts & Origami', teacher: 'Ms. Radhika', room: 'Art Room 2', type: 'activity', color: 'teal' },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Library Hour', teacher: 'Mrs. S. Bannerjee', room: 'Junior Library', type: 'activity', color: 'teal' },
  ],
  Saturday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Weekly Unit Assessment', teacher: 'Section Teachers', room: 'Room 204', type: 'academic', color: 'indigo' },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Science Model Work', teacher: 'Mrs. Neha Batra', room: 'Junior STEM Lab', type: 'lab', color: 'emerald' },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Dramatics & Elocution', teacher: 'Mrs. Shalini Gupta', room: 'Auditorium', type: 'activity', color: 'purple' },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Outdoor Games', teacher: 'Coach Anita', room: 'Playground', type: 'activity', color: 'teal' },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Dispersal & Bus Boarding', teacher: 'Transport Incharge', room: 'Gate 3 Bay', type: 'break', color: 'teal' },
  ]
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const ParentTimetable: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const schedule = selectedChild === 'rahul' ? rahulSchedule : ananyaSchedule;
  const currentDayPeriods = schedule[selectedDay] || [];

  const handleDownload = () => {
    alert(`Downloading Weekly Class Timetable (PDF) for ${selectedChild === 'rahul' ? 'Rahul Sharma (Class 10-A)' : 'Ananya Sharma (Class 7-B)'}`);
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Weekly Class Timetable & Bell Schedule"
      description="Period-wise daily timetable, laboratory sessions, activity hours, break intervals, and bus dispersal times."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Weekly Class Timetable & Bell Schedule</h1>
          <p className="text-sm text-gray-600 mt-1">
            Period-wise daily timetable, laboratory sessions, activity hours, break intervals, and bus dispersal times.
          </p>
        </div>

        {/* Child Selector */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => setSelectedChild('rahul')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => setSelectedChild('ananya')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* Routine Highlights Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-lg"><Clock className="w-5 h-5" /></div>
          <div>
            <div className="text-xs text-gray-500 font-medium">School Timing</div>
            <div className="text-sm font-bold text-gray-900">08:00 AM – 02:40 PM</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 bg-amber-50 text-amber-600 rounded-lg"><Bell className="w-5 h-5" /></div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Morning Assembly</div>
            <div className="text-sm font-bold text-gray-900">08:00 AM – 08:30 AM</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-lg"><BookOpen className="w-5 h-5" /></div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Lunch Recess</div>
            <div className="text-sm font-bold text-gray-900">11:30 AM – 12:15 PM</div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3">
          <div className="p-2.5 bg-rose-50 text-rose-600 rounded-lg"><MapPin className="w-5 h-5" /></div>
          <div>
            <div className="text-xs text-gray-500 font-medium">Bus Dispersal</div>
            <div className="text-sm font-bold text-rose-600">02:50 PM Sharp (Gate 3)</div>
          </div>
        </div>
      </div>

      {/* Day Selector & Download Button Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Day Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                selectedDay === day
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors"
          >
            <Printer className="w-3.5 h-3.5" /> Print
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Download className="w-3.5 h-3.5" /> PDF Schedule
          </button>
        </div>
      </div>

      {/* Periods Timeline Grid */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
          <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-indigo-600" />
            <span>Schedule for {selectedDay} — {selectedChild === 'rahul' ? 'Class 10-A (Room 302)' : 'Class 7-B (Room 204)'}</span>
          </h3>
          <span className="text-xs font-medium text-gray-500">7 Periods + 1 Assembly + 1 Lunch</span>
        </div>

        <div className="divide-y divide-gray-100">
          {/* Assembly Header row */}
          <div className="p-3.5 bg-amber-50/50 flex items-center justify-between text-xs text-amber-900">
            <div className="flex items-center gap-3">
              <span className="font-bold px-2 py-0.5 bg-amber-100 rounded">08:00 - 08:30 AM</span>
              <span className="font-semibold">Morning Prayer Assembly, National Anthem & Daily News Briefing</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">School Assembly Ground</span>
          </div>

          {currentDayPeriods.map((period, index) => (
            <div 
              key={index}
              className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex flex-col items-center justify-center font-bold text-sm flex-shrink-0">
                  <span className="text-[10px] text-gray-400 font-medium">PD</span>
                  <span>{period.periodNo}</span>
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-bold text-gray-900">{period.subject}</h4>
                    <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                      period.type === 'lab' ? 'bg-amber-100 text-amber-800' :
                      period.type === 'activity' ? 'bg-emerald-100 text-emerald-800' :
                      period.type === 'break' ? 'bg-rose-100 text-rose-800' :
                      'bg-indigo-100 text-indigo-800'
                    }`}>
                      {period.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1 font-medium text-gray-700">
                      <User className="w-3.5 h-3.5 text-gray-400" /> {period.teacher}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" /> {period.room}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                <span className="font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-gray-400" /> {period.time}
                </span>
              </div>
            </div>
          ))}

          {/* Lunch Notice in between */}
          <div className="p-3 bg-emerald-50/50 flex items-center justify-between text-xs text-emerald-900">
            <div className="flex items-center gap-3">
              <span className="font-bold px-2 py-0.5 bg-emerald-100 rounded">11:30 - 12:15 PM</span>
              <span className="font-semibold">Recess Lunch Interval & Nutritious Meal Break</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">Cafeteria / Classroom Dining</span>
          </div>
        </div>
      </div>

      {/* Advisory Note for Parents */}
      <div className="p-4 bg-indigo-50/60 rounded-xl border border-indigo-100 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
        <div className="text-xs text-indigo-900 space-y-1">
          <p className="font-bold">Daily Bag Packing & Lab Protocol Advisory</p>
          <p className="text-indigo-800 leading-relaxed">
            Please ensure that students carry lab safety aprons on days with Practical Sessions (Chemistry / Physics / STEM Lab). On Physical Education days, white school sports shoes and house tracksuits are mandatory.
          </p>
        </div>
      </div>
      </div>
    </SchoolLayout>
  );
};
