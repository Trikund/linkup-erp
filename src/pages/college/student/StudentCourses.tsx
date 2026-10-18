import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookOpen, Download, Search, CheckCircle2, FileText, UserCheck, 
  Clock, Award, ExternalLink, Calendar
} from 'lucide-react';

export function StudentCourses() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  const courses = [
    {
      code: 'CS701',
      name: 'Machine Learning & Neural Networks',
      credits: 4,
      ltp: '3-0-2',
      type: 'Core',
      faculty: 'Dr. Ankit Sharma',
      facultyEmail: 'ankit.sharma@linkup.edu',
      room: 'Room 302 / Lab 4',
      attendance: 89.2,
      hoursHeld: 48,
      hoursAttended: 43,
      syllabus: 'Supervised Learning, Neural Networks, Backpropagation, CNN, RNN, Transformers, Reinforcement Learning.',
      status: 'Enrolled'
    },
    {
      code: 'CS702',
      name: 'Cloud Computing Architecture',
      credits: 3,
      ltp: '3-0-0',
      type: 'Core',
      faculty: 'Prof. Vikas Singh',
      facultyEmail: 'vikas.singh@linkup.edu',
      room: 'Room 305',
      attendance: 84.6,
      hoursHeld: 39,
      hoursAttended: 33,
      syllabus: 'Virtualization, AWS & GCP Architecture, Microservices, Kubernetes orchestration, Serverless Computing.',
      status: 'Enrolled'
    },
    {
      code: 'CS703',
      name: 'Advanced Database Management Systems',
      credits: 4,
      ltp: '3-0-2',
      type: 'Core',
      faculty: 'Prof. Sunita Rao',
      facultyEmail: 'sunita.rao@linkup.edu',
      room: 'Room 305 / Lab 2',
      attendance: 92.5,
      hoursHeld: 40,
      hoursAttended: 37,
      syllabus: 'Distributed Databases, Query Optimization, Concurrency Control, NoSQL Datastores, B-Tree Indexing.',
      status: 'Enrolled'
    },
    {
      code: 'CS704',
      name: 'Information & Cyber Security',
      credits: 3,
      ltp: '3-0-0',
      type: 'Core',
      faculty: 'Dr. R. K. Verma',
      facultyEmail: 'rk.verma@linkup.edu',
      room: 'Room 301',
      attendance: 81.8,
      hoursHeld: 33,
      hoursAttended: 27,
      syllabus: 'Symmetric & Asymmetric Cryptography, RSA, AES, Hash functions, Network intrusion, Zero Trust Architecture.',
      status: 'Enrolled'
    },
    {
      code: 'CS705E',
      name: 'Deep Learning & Computer Vision',
      credits: 3,
      ltp: '3-0-0',
      type: 'Elective',
      faculty: 'Dr. Neha Kapoor',
      facultyEmail: 'neha.kapoor@linkup.edu',
      room: 'Seminar Hall B',
      attendance: 87.5,
      hoursHeld: 32,
      hoursAttended: 28,
      syllabus: 'Object Detection, YOLO, Vision Transformers, Semantic Segmentation, Generative Adversarial Networks (GANs).',
      status: 'Enrolled'
    },
    {
      code: 'CS706P',
      name: 'Major Capstone Project Phase-I & Seminar',
      credits: 4,
      ltp: '0-0-8',
      type: 'Project',
      faculty: 'Dr. Ankit Sharma (Advisor)',
      facultyEmail: 'ankit.sharma@linkup.edu',
      room: 'R&D Innovation Lab',
      attendance: 100.0,
      hoursHeld: 32,
      hoursAttended: 32,
      syllabus: 'Literature review, SRS document, System Architecture, Prototype development, Mid-Term Defense presentation.',
      status: 'Enrolled'
    }
  ];

  const filtered = courses.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.faculty.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = filterType === 'All' || c.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Courses & Syllabus" 
      description="Semester VII Curriculum • 6 Registered Courses • 21 Total Academic Credits"
    >
      {/* Top Summary Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Credits</p>
          <h3 className="text-2xl font-black text-slate-800 mt-1">21 Credits</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">14 Core • 3 Elective • 4 Project</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Enrolled Courses</p>
          <h3 className="text-2xl font-black text-purple-600 mt-1">6 Courses</h3>
          <p className="text-xs text-emerald-600 mt-1 font-semibold">100% Registration Approved</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Weekly Contact Hours</p>
          <h3 className="text-2xl font-black text-blue-600 mt-1">27 Hours</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">15 Theory • 12 Lab & Project</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Aggregate Attendance</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">86.4%</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Minimum Required: 75.0%</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search by course code, name, or faculty..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed] focus:border-[#7c3aed]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {['All', 'Core', 'Elective', 'Project'].map((type) => (
            <button
              key={type}
              onClick={() => setFilterType(type)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filterType === type 
                  ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((course, idx) => (
          <div 
            key={idx} 
            className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-1 rounded-xl border border-purple-200">
                    {course.code}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                    course.type === 'Core' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                    course.type === 'Elective' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    'bg-indigo-50 text-indigo-700 border-indigo-200'
                  }`}>
                    {course.type}
                  </span>
                </div>
                <span className="text-xs font-bold text-slate-700">{course.credits} Credits ({course.ltp})</span>
              </div>

              <h3 className="text-base font-bold text-slate-900 mb-1">{course.name}</h3>
              <p className="text-xs font-medium text-slate-500 mb-3">
                Faculty: <span className="font-semibold text-slate-700">{course.faculty}</span> ({course.facultyEmail})
              </p>

              <div className="bg-slate-50 rounded-2xl p-3 border border-slate-100 text-xs text-slate-600 mb-4 leading-relaxed">
                <p className="font-bold text-slate-700 mb-0.5">Syllabus Highlights:</p>
                {course.syllabus}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs mb-4">
                <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Lecture Hall / Lab</span>
                  <span className="font-bold text-slate-700">{course.room}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50/70 border border-slate-100">
                  <span className="text-slate-400 text-[10px] uppercase font-bold block">Attendance Log</span>
                  <span className={`font-bold ${course.attendance >= 85 ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {course.attendance}% ({course.hoursAttended}/{course.hoursHeld} hrs)
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <CheckCircle2 size={13} /> Registered
              </span>
              <button 
                onClick={() => alert(`Downloading AICTE Curriculum Syllabus PDF for ${course.code} - ${course.name}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 hover:text-[#7c3aed] text-slate-700 text-xs font-bold transition-colors"
              >
                <Download size={13} />
                <span>Download Syllabus PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}