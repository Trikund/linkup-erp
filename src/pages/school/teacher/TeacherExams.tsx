import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  FileCheck, 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  BookOpen,
  HelpCircle
} from 'lucide-react';

export function TeacherExams() {
  const user = USERS.teacher;
  const [activeTab, setActiveTab] = useState<'duties' | 'datesheet' | 'blueprint'>('duties');

  const duties = [
    {
      id: 1,
      date: 'Monday, 19 Oct 2026',
      time: '08:45 AM – 12:15 PM',
      examTitle: 'CBSE Mid-Term Examination 2026',
      subject: 'Science (Theory) - Class X',
      room: 'Exam Hall 2 (Senior Wing)',
      candidateCount: 42,
      role: 'Chief Room Invigilator',
      coInvigilator: 'Mr. Pradeep Mishra (TGT Science)',
      status: 'upcoming'
    },
    {
      id: 2,
      date: 'Wednesday, 21 Oct 2026',
      time: '08:45 AM – 12:15 PM',
      examTitle: 'CBSE Mid-Term Examination 2026',
      subject: 'Social Science - Class IX',
      room: 'Room 204 (Second Floor)',
      candidateCount: 40,
      role: 'Assistant Invigilator',
      coInvigilator: 'Mrs. Kavita Saxena (TGT Social Science)',
      status: 'upcoming'
    },
    {
      id: 3,
      date: 'Friday, 23 Oct 2026',
      time: '08:45 AM – 12:15 PM',
      examTitle: 'CBSE Mid-Term Examination 2026',
      subject: 'English Language & Literature - Class X',
      room: 'Exam Hall 1 (Auditorium)',
      candidateCount: 65,
      role: 'Chief Room Invigilator',
      coInvigilator: 'Ms. Pooja Nair (PGT English)',
      status: 'upcoming'
    }
  ];

  const examsList = [
    {
      subject: 'Mathematics (Standard) - Code 041',
      class: 'Class 10-A & 10-B',
      examDate: 'Monday, 26 Oct 2026',
      time: '09:00 AM – 12:00 PM',
      duration: '3 Hours',
      maxMarks: 80,
      paperStatus: 'Approved & Printed',
      moderator: 'Academic Coordinator Desk',
      answerKeyStatus: 'Submitted to Exam Cell',
      syllabus: 'Real Numbers, Polynomials, Linear Eq, Quadratic Eq, Coordinate Geometry, Triangles'
    },
    {
      subject: 'Mathematics - Code 041',
      class: 'Class 9-B',
      examDate: 'Thursday, 29 Oct 2026',
      time: '09:00 AM – 12:00 PM',
      duration: '3 Hours',
      maxMarks: 80,
      paperStatus: 'Approved & Printed',
      moderator: 'Academic Coordinator Desk',
      answerKeyStatus: 'Submitted to Exam Cell',
      syllabus: 'Number Systems, Polynomials, Coordinate Geometry, Linear Equations in Two Variables'
    },
    {
      subject: 'Applied Mathematics - Code 241',
      class: 'Class 11-A',
      examDate: 'Saturday, 31 Oct 2026',
      time: '09:00 AM – 12:00 PM',
      duration: '3 Hours',
      maxMarks: 80,
      paperStatus: 'Under Final Review',
      moderator: 'HOD Mathematics',
      answerKeyStatus: 'Draft Ready',
      syllabus: 'Sets & Relations, Trigonometric Functions, Mathematical Induction, Complex Numbers'
    }
  ];

  const blueprintSections = [
    { section: 'Section A', qType: 'Multiple Choice Questions (MCQs) & Assertion-Reason', qCount: 20, marksEach: 1, total: 20 },
    { section: 'Section B', qType: 'Very Short Answer (VSA) type questions', qCount: 5, marksEach: 2, total: 10 },
    { section: 'Section C', qType: 'Short Answer (SA) type questions', qCount: 6, marksEach: 3, total: 18 },
    { section: 'Section D', qType: 'Long Answer (LA) type questions', qCount: 4, marksEach: 5, total: 20 },
    { section: 'Section E', qType: 'Case-based / Passage-based integrated units of assessment', qCount: 3, marksEach: 4, total: 12 },
  ];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Examinations & Invigilation Management"
      description="View assigned exam invigilation duties, question paper moderation records, and official CBSE question paper blueprints."
    >
      <div className="space-y-8">

        {/* TOP METRIC CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Invigilation Duties</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">3 Sessions</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Mid-Term Exam Period</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Papers Set</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">3 / 3 Papers</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Submitted & approved</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Evaluated Answer Scripts</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">124 Scripts</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Unit Test 2 fully completed</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Next Invigilation</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-slate-900">19 Oct</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Hall 2 • 08:45 AM</p>
          </div>
        </div>

        {/* TAB CONTROLS */}
        <div className="flex border-b border-slate-200 gap-6">
          <button
            onClick={() => setActiveTab('duties')}
            className={`pb-4 text-base font-bold transition-all relative ${
              activeTab === 'duties' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            My Invigilation Schedule ({duties.length})
            {activeTab === 'duties' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('datesheet')}
            className={`pb-4 text-base font-bold transition-all relative ${
              activeTab === 'datesheet' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Mathematics Exam Datesheet & Moderation
            {activeTab === 'datesheet' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('blueprint')}
            className={`pb-4 text-base font-bold transition-all relative ${
              activeTab === 'blueprint' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            CBSE Paper Blueprint (80 Marks)
            {activeTab === 'blueprint' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        </div>

        {/* TAB 1: INVIGILATION DUTIES */}
        {activeTab === 'duties' && (
          <div className="space-y-5">
            {duties.map((duty) => (
              <div 
                key={duty.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 md:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-md transition space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                        {duty.role}
                      </span>
                      <span className="text-xs font-semibold text-slate-500">{duty.examTitle}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{duty.subject}</h3>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold font-mono">
                    Reporting: 08:30 AM Sharp
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3.5 bg-slate-50/70 rounded-xl space-y-1">
                    <span className="text-slate-400 block font-medium flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Date & Session
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">{duty.date}</span>
                    <span className="text-slate-500 font-mono">{duty.time}</span>
                  </div>

                  <div className="p-3.5 bg-slate-50/70 rounded-xl space-y-1">
                    <span className="text-slate-400 block font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Room Location & Candidates
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">{duty.room}</span>
                    <span className="text-slate-500">{duty.candidateCount} Registered Candidates</span>
                  </div>

                  <div className="p-3.5 bg-slate-50/70 rounded-xl space-y-1">
                    <span className="text-slate-400 block font-medium flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5" /> Co-Invigilator
                    </span>
                    <span className="font-bold text-slate-900 text-sm block">{duty.coInvigilator}</span>
                    <span className="text-slate-500">Joint Room Responsibility</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Duty Guidelines: Verify admit cards, manage barcode sticker sheets, and enforce 15-minute question reading time.</span>
                  <button 
                    onClick={() => alert(`Downloaded seating plan & attendance sheet for ${duty.room}`)}
                    className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition shrink-0"
                  >
                    Download Seating Chart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: EXAM DATESHEET & MODERATION */}
        {activeTab === 'datesheet' && (
          <div className="space-y-6">
            {examsList.map((ex, i) => (
              <div 
                key={i}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                      {ex.class}
                    </span>
                    <h3 className="text-xl font-extrabold text-slate-900 mt-2">{ex.subject}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Exam Date: <strong className="text-slate-800">{ex.examDate}</strong> • Duration: {ex.duration} • Max Marks: {ex.maxMarks}
                    </p>
                  </div>

                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    {ex.paperStatus}
                  </span>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Prescribed Syllabus Scope:</span>
                  <p className="text-sm text-slate-700 bg-slate-50/70 p-4 rounded-xl border border-slate-100 leading-relaxed font-normal">
                    {ex.syllabus}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500">
                    Moderator: <strong className="text-slate-800">{ex.moderator}</strong> • Answer Key: <strong className="text-emerald-700">{ex.answerKeyStatus}</strong>
                  </span>

                  <button
                    onClick={() => alert(`Downloading verified question paper & marking scheme for ${ex.subject}`)}
                    className="px-4 py-2 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download Sample Question Paper (PDF)
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: BLUEPRINT */}
        {activeTab === 'blueprint' && (
          <div className="bg-white border border-slate-100 rounded-2xl p-6 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">CBSE Class X Mathematics Examination Structure</h3>
                <p className="text-sm text-slate-500 mt-0.5">Annual Board Exam Pattern • 38 Questions Across 5 Sections</p>
              </div>
              <span className="px-4 py-2 rounded-xl bg-blue-50 text-blue-700 font-black text-sm border border-blue-200">
                Total: 80 Marks
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-500 text-xs uppercase tracking-wider">
                    <th className="py-3.5 px-6 font-bold">Section</th>
                    <th className="py-3.5 px-6 font-bold">Question Format & Typology</th>
                    <th className="py-3.5 px-6 font-bold text-center">No. of Questions</th>
                    <th className="py-3.5 px-6 font-bold text-center">Marks Per Question</th>
                    <th className="py-3.5 px-6 font-bold text-right">Section Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blueprintSections.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition">
                      <td className="py-4 px-6 font-bold text-slate-900 font-mono">{sec.section}</td>
                      <td className="py-4 px-6 font-medium text-slate-800">{sec.qType}</td>
                      <td className="py-4 px-6 text-center font-bold text-slate-700">{sec.qCount} Qs</td>
                      <td className="py-4 px-6 text-center font-semibold text-slate-600">{sec.marksEach} Mark</td>
                      <td className="py-4 px-6 text-right font-black text-blue-600">{sec.total} Marks</td>
                    </tr>
                  ))}
                  <tr className="bg-slate-50 font-extrabold text-slate-900">
                    <td className="py-4 px-6" colSpan={2}>Comprehensive Theory Examination Total</td>
                    <td className="py-4 px-6 text-center">38 Questions</td>
                    <td className="py-4 px-6 text-center">3 Hours</td>
                    <td className="py-4 px-6 text-right text-base text-blue-700">80 Marks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
