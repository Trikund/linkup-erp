import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookOpen, Users, Clock, FileText, CheckCircle2, 
  Download, Upload, ExternalLink, ChevronRight, BarChart2,
  Layers, Sparkles, Filter, Search, Award
} from 'lucide-react';

export function FacultyCourses() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [activeTab, setActiveTab] = useState<'all' | 'theory' | 'lab'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      code: 'CS701',
      title: 'Machine Learning',
      category: 'Professional Core',
      type: 'theory',
      credits: '4 (3-1-0)',
      semester: 'Semester VII • Section B',
      studentsEnrolled: 72,
      hoursDelivered: '28 / 40 Hrs',
      progress: 70,
      coAttainment: '2.64 / 3.00',
      nextClass: 'Today, 11:15 AM (Room 304)',
      modules: [
        { name: 'Unit 1: Supervised Learning & Regression', status: 'Completed', hours: '8 Hrs' },
        { name: 'Unit 2: Classification, SVM & Decision Trees', status: 'Completed', hours: '8 Hrs' },
        { name: 'Unit 3: Ensemble Methods & Random Forests', status: 'In Progress', hours: '6 Hrs' },
        { name: 'Unit 4: Neural Networks & Backpropagation', status: 'Pending', hours: '10 Hrs' },
        { name: 'Unit 5: Unsupervised Clustering & PCA', status: 'Pending', hours: '8 Hrs' }
      ],
      materialsCount: 14,
      assignmentsCount: 4
    },
    {
      code: 'CS703',
      title: 'Advanced Database Management Systems',
      category: 'Professional Core',
      type: 'theory',
      credits: '4 (3-1-0)',
      semester: 'Semester VII • Section A',
      studentsEnrolled: 70,
      hoursDelivered: '30 / 40 Hrs',
      progress: 75,
      coAttainment: '2.78 / 3.00',
      nextClass: 'Tomorrow, 09:00 AM (Room 302)',
      modules: [
        { name: 'Unit 1: Distributed DBMS & Query Optimization', status: 'Completed', hours: '8 Hrs' },
        { name: 'Unit 2: Concurrency Control & 2-Phase Commit', status: 'Completed', hours: '8 Hrs' },
        { name: 'Unit 3: NoSQL Architectures (MongoDB, Cassandra)', status: 'Completed', hours: '7 Hrs' },
        { name: 'Unit 4: Object-Oriented & Spatial Databases', status: 'In Progress', hours: '7 Hrs' },
        { name: 'Unit 5: Data Warehousing & OLAP Cubes', status: 'Pending', hours: '10 Hrs' }
      ],
      materialsCount: 18,
      assignmentsCount: 5
    },
    {
      code: 'CS706P',
      title: 'Major Capstone Project Lab',
      category: 'Practical & Project',
      type: 'lab',
      credits: '6 (0-0-6)',
      semester: 'Semester VII • All Sections (Guided Batches)',
      studentsEnrolled: 36,
      hoursDelivered: '36 / 48 Hrs',
      progress: 75,
      coAttainment: '2.90 / 3.00',
      nextClass: 'Today, 02:00 PM (Advanced AI Lab)',
      modules: [
        { name: 'Phase 1: Problem Formulation & IEEE Literature Survey', status: 'Completed', hours: '12 Hrs' },
        { name: 'Phase 2: Architectural Design & Sprint 1 Demo', status: 'Completed', hours: '12 Hrs' },
        { name: 'Phase 3: Module Integration & API Testing', status: 'In Progress', hours: '12 Hrs' },
        { name: 'Phase 4: Final Viva-Voce & Paper Publication', status: 'Pending', hours: '12 Hrs' }
      ],
      materialsCount: 6,
      assignmentsCount: 3
    }
  ];

  const filteredCourses = courses
    .filter(c => activeTab === 'all' || c.type === activeTab)
    .filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.code.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Assigned Courses" 
      description="Teaching allocations, syllabus delivery status, CO-PO mapping, and course material repository."
    >
      {/* Header Stat Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Subjects</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-slate-800">3 Courses</span>
            <span className="text-xs text-purple-600 font-bold">14 Credits</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">2 Theory + 1 Major Capstone Lab</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Enrolled</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-slate-800">142 Students</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">CSE 7th Sem (Sec A & Sec B)</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Average Syllabus Completed</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-emerald-600">73.3%</span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">On Track</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">94 of 128 total semester hours</p>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">NBA CO-PO Attainment</p>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-black text-[#7c3aed]">2.77 / 3.0</span>
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">Target: 2.5</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Accreditation Compliant (Level 3)</p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          {(['all', 'theory', 'lab'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                activeTab === tab
                  ? 'bg-[#7c3aed] text-white shadow-md'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {tab === 'all' ? 'All Courses (3)' : tab === 'theory' ? 'Theory (2)' : 'Project & Lab (1)'}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by code or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#7c3aed]"
          />
        </div>
      </div>

      {/* Course Cards List */}
      <div className="space-y-6">
        {filteredCourses.map((c) => (
          <div key={c.code} className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                    {c.code}
                  </span>
                  <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {c.category}
                  </span>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-lg">
                    Credits: {c.credits}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800">{c.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{c.semester} • {c.studentsEnrolled} Registered Students</p>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200 transition-all">
                  <Download size={14} />
                  <span>Syllabus PDF</span>
                </button>
                <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#7c3aed] text-xs font-bold border border-purple-200 transition-all">
                  <Upload size={14} />
                  <span>Upload Lecture Note</span>
                </button>
              </div>
            </div>

            {/* Progress & Delivery Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5 border-b border-slate-100">
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                  <span className="text-slate-600">Syllabus Progress</span>
                  <span className="text-[#7c3aed]">{c.progress}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#7c3aed] h-full rounded-full transition-all duration-500" style={{ width: `${c.progress}%` }} />
                </div>
                <p className="text-[11px] text-slate-400 mt-1.5">Delivered: {c.hoursDelivered}</p>
              </div>

              <div className="bg-slate-50/70 rounded-2xl p-3.5 border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">NBA Attainment (CO-PO)</p>
                  <p className="text-base font-black text-slate-800 mt-0.5">{c.coAttainment}</p>
                </div>
                <span className="p-2 bg-purple-100 text-[#7c3aed] rounded-xl">
                  <Award size={18} />
                </span>
              </div>

              <div className="bg-slate-50/70 rounded-2xl p-3.5 border border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Next Scheduled Lecture</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">{c.nextClass}</p>
                </div>
                <span className="p-2 bg-blue-100 text-blue-600 rounded-xl">
                  <Clock size={18} />
                </span>
              </div>
            </div>

            {/* Units & Modules Table */}
            <div className="pt-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Course Modules & Teaching Plan</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {c.modules.map((m, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50/60 border border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        m.status === 'Completed' ? 'bg-emerald-500' : m.status === 'In Progress' ? 'bg-amber-500' : 'bg-slate-300'
                      }`} />
                      <span className="font-semibold text-slate-700">{m.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-medium text-slate-400 font-mono">{m.hours}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        m.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : m.status === 'In Progress' ? 'bg-amber-100 text-amber-800' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {m.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
