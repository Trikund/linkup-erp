import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { FileCheck, Download, Clock, MapPin, AlertCircle, CheckCircle, Calendar } from 'lucide-react';

export function StudentExams() {
  const user = USERS.student;

  const exams = [
    {
      date: '18 Oct 2026',
      day: 'Monday',
      time: '10:00 AM - 01:00 PM',
      duration: '3 Hours',
      subject: 'Advanced Mathematics',
      code: 'MATH-101',
      room: 'Room 204 (Block A)',
      seatNo: 'Desk #14',
      maxMarks: 80,
      syllabus: 'Chapters 1 through 7 (Algebra, Trigonometry, Coordinate Geometry, Calculus Basics)'
    },
    {
      date: '20 Oct 2026',
      day: 'Wednesday',
      time: '10:00 AM - 01:00 PM',
      duration: '3 Hours',
      subject: 'Physics & Natural Sciences',
      code: 'PHYS-102',
      room: 'Science Lab 1 (Block B)',
      seatNo: 'Desk #08',
      maxMarks: 80,
      syllabus: 'Units 1-4 (Light, Electricity, Magnetic Effects, Natural Resources)'
    },
    {
      date: '22 Oct 2026',
      day: 'Friday',
      time: '10:00 AM - 12:30 PM',
      duration: '2.5 Hours',
      subject: 'Computer Science & AI',
      code: 'CS-103',
      room: 'Lab 2 (Tech Wing)',
      seatNo: 'Terminal #22',
      maxMarks: 70,
      syllabus: 'Theory & Coding: HTML5, CSS Flexbox, JavaScript ES6 Basics & Flowcharts'
    },
    {
      date: '25 Oct 2026',
      day: 'Monday',
      time: '10:00 AM - 01:00 PM',
      duration: '3 Hours',
      subject: 'English Literature & Language',
      code: 'ENG-104',
      room: 'Room 103 (Block A)',
      seatNo: 'Desk #14',
      maxMarks: 80,
      syllabus: 'Section A (Reading Comprehension), Section B (Writing & Grammar), Section C (Literature)'
    },
    {
      date: '27 Oct 2026',
      day: 'Wednesday',
      time: '10:00 AM - 01:00 PM',
      duration: '3 Hours',
      subject: 'Social Science & Civics',
      code: 'SOC-105',
      room: 'Room 104 (Block A)',
      seatNo: 'Desk #14',
      maxMarks: 80,
      syllabus: 'History Ch 1-3, Geography Ch 1-4, Democratic Politics Ch 1-3, Economics Ch 1-2'
    }
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Examination Schedule"
      description="Official datesheet for Mid-Term Examinations (Term 1, Academic Session 2026-27)."
    >
      <div className="space-y-6">

        {/* Top Announcement Banner with Admit Card Download */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 border border-blue-100">
              OFFICIAL DATESHEET
            </span>
            <h2 className="text-xl font-bold text-slate-900">Mid-Term Examinations 2026</h2>
            <p className="text-xs text-slate-500">
              Roll No: <strong className="text-slate-800 font-mono">1024</strong> • Enrollment: <strong className="text-slate-800 font-mono">GA-2024-ST1024</strong> • Examination Center: <strong className="text-slate-800">Greenfield Academy Main Campus</strong>
            </p>
          </div>

          <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm shadow-blue-500/20 transition-all shrink-0">
            <Download size={15} /> Download Admit Card (PDF)
          </button>
        </div>

        {/* Exam Schedule Table / List */}
        <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <h3 className="font-bold text-sm text-slate-900">Exam Timetable & Seating Information</h3>
            <span className="text-xs text-slate-500 font-medium">5 Papers Scheduled</span>
          </div>

          <div className="divide-y divide-slate-100">
            {exams.map((exam, i) => (
              <div key={i} className="p-5 hover:bg-slate-50/50 transition-colors flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  {/* Date Pill */}
                  <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 flex flex-col items-center justify-center text-blue-700 shrink-0 font-sans shadow-2xs">
                    <span className="text-lg font-black leading-none">{exam.date.split(' ')[0]}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{exam.date.split(' ')[1]}</span>
                  </div>

                  {/* Subject Details */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-slate-400 bg-slate-100 px-1.5 py-0.2 rounded">
                        {exam.code}
                      </span>
                      <h4 className="text-base font-bold text-slate-900">{exam.subject}</h4>
                    </div>
                    <p className="text-xs text-slate-500 flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Clock size={12} className="text-slate-400" /> {exam.time} ({exam.duration})
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-slate-400" /> {exam.room}
                      </span>
                      <span>•</span>
                      <span className="font-semibold text-blue-600">{exam.seatNo}</span>
                    </p>
                    <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100/80 mt-2 max-w-3xl">
                      <strong className="text-slate-700">Syllabus:</strong> {exam.syllabus}
                    </p>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg inline-block">
                    Max: {exam.maxMarks} Marks
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Examination Instructions */}
        <div className="bg-amber-50/60 border border-amber-200/70 rounded-2xl p-5 text-xs text-amber-900 space-y-2">
          <h4 className="font-bold flex items-center gap-1.5 text-amber-900">
            <AlertCircle size={15} className="text-amber-600" /> Examination Hall Guidelines:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-amber-800 leading-relaxed">
            <li>Students must be seated in their designated examination rooms at least 15 minutes before reading time.</li>
            <li>Admit card and school ID badge are strictly mandatory for entry to all examination blocks.</li>
            <li>No electronic gadgets, smart watches, or programmable calculators are permitted inside the hall.</li>
            <li>Reading time of 15 minutes will be allotted prior to paper commencement for paper inspection.</li>
          </ul>
        </div>

      </div>
    </SchoolLayout>
  );
}
