import React from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { BookOpen, User, Clock, MapPin, CheckCircle, ArrowRight, FileText, Download } from 'lucide-react';

export function StudentClasses() {
  const user = USERS.student;

  const classes = [
    {
      id: 'math',
      name: 'Advanced Mathematics',
      code: 'MATH-10A',
      teacher: 'Dr. Priya Patel',
      room: 'Room 204',
      schedule: 'Mon, Wed, Fri • 09:00 AM',
      topic: 'Chapter 5: Differential Calculus & Real Applications',
      progress: 68,
      attendance: 94,
      totalStudents: 42,
      resourcesCount: 14,
      color: 'blue'
    },
    {
      id: 'sci',
      name: 'Physics & Natural Science',
      code: 'SCI-10A',
      teacher: 'Mr. Amit Verma',
      room: 'Science Lab 2',
      schedule: 'Tue, Thu • 10:30 AM',
      topic: 'Unit 3: Electromagnetic Induction & Alternating Currents',
      progress: 72,
      attendance: 91,
      totalStudents: 40,
      resourcesCount: 18,
      color: 'indigo'
    },
    {
      id: 'cs',
      name: 'Computer Science & AI',
      code: 'CS-10A',
      teacher: 'Mr. Vikram Singh',
      room: 'Computer Lab 1',
      schedule: 'Mon, Wed • 11:30 AM',
      topic: 'Module 4: React Component Architecture & State Management',
      progress: 85,
      attendance: 96,
      totalStudents: 38,
      resourcesCount: 22,
      color: 'cyan'
    },
    {
      id: 'eng',
      name: 'English Literature & Composition',
      code: 'ENG-10A',
      teacher: 'Ms. Neha Singh',
      room: 'Room 106',
      schedule: 'Daily • 01:30 PM',
      topic: 'Drama: Shakespearean Themes in Macbeth (Act III)',
      progress: 60,
      attendance: 88,
      totalStudents: 42,
      resourcesCount: 9,
      color: 'emerald'
    },
    {
      id: 'soc',
      name: 'Social Sciences & Civics',
      code: 'SOC-10A',
      teacher: 'Mr. Rohan Mehta',
      room: 'Room 104',
      schedule: 'Tue, Thu • 02:30 PM',
      topic: 'Contemporary World History: Post-War Global Institutions',
      progress: 55,
      attendance: 90,
      totalStudents: 42,
      resourcesCount: 12,
      color: 'amber'
    },
    {
      id: 'chem',
      name: 'Chemistry Laboratory',
      code: 'CHEM-10A',
      teacher: 'Dr. Sunita Rao',
      room: 'Chemistry Lab',
      schedule: 'Friday • 02:00 PM',
      topic: 'Practical: Acid-Base Titration & Volumetric Analysis',
      progress: 70,
      attendance: 95,
      totalStudents: 36,
      resourcesCount: 8,
      color: 'purple'
    }
  ];

  return (
    <SchoolLayout 
      role="student" 
      user={user}
      title="My Classes"
      description="Manage your enrolled subjects, faculty, syllabus progress, and course resources."
    >
      <div className="space-y-6">
        
        {/* Top Summary Banner */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-8">
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Enrolled Courses</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">6 Active Subjects</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Class Section</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">Grade 10 - Section A</p>
            </div>
            <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Academic Year</p>
              <p className="text-2xl lg:text-3xl font-extrabold text-slate-900 mt-1">2026 - 2027</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 text-sm font-bold flex items-center gap-2">
              <CheckCircle size={16} /> Full Enrollment Confirmed
            </span>
          </div>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {classes.map((cls) => (
            <div 
              key={cls.id} 
              className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-200 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header Tag & Code */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    {cls.code}
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 text-slate-700">
                    {cls.attendance}% Attended
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">{cls.name}</h3>
                
                {/* Teacher & Location */}
                <div className="space-y-2 my-4 text-sm text-slate-600">
                  <p className="flex items-center gap-2.5 font-semibold text-slate-800">
                    <User size={16} className="text-slate-400 shrink-0" /> {cls.teacher}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <MapPin size={16} className="text-slate-400 shrink-0" /> {cls.room}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Clock size={16} className="text-slate-400 shrink-0" /> {cls.schedule}
                  </p>
                </div>

                {/* Current Topic */}
                <div className="p-4 bg-slate-50/90 rounded-2xl border border-slate-100 my-4">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">CURRENT TOPIC</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1 leading-normal">{cls.topic}</p>
                </div>

                {/* Syllabus Progress */}
                <div className="space-y-2 mt-5">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600 font-semibold">Syllabus Covered</span>
                    <span className="font-extrabold text-slate-900">{cls.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                      style={{ width: `${cls.progress}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm text-slate-500 font-medium flex items-center gap-1.5">
                  <FileText size={16} /> {cls.resourcesCount} Files
                </span>
                <button className="text-sm text-blue-600 font-bold hover:text-blue-800 hover:underline flex items-center gap-1.5">
                  View Syllabus <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SchoolLayout>
  );
}
