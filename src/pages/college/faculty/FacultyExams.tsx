import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  FileBadge, Calendar, Clock, Building, CheckCircle2, 
  AlertCircle, Download, Upload, FileText, Shield, 
  ChevronRight, ArrowRight, UserCheck
} from 'lucide-react';

export function FacultyExams() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [activeTab, setActiveTab] = useState<'duties' | 'papers' | 'evaluation'>('duties');

  const invigilationDuties = [
    {
      id: 'INV-2026-08',
      date: '28 Oct 2026',
      day: 'Wednesday',
      session: 'Morning (09:30 AM - 12:30 PM)',
      hall: 'Central Examination Hall 4',
      capacity: '120 Candidates',
      role: 'Chief Hall Superintendent',
      status: 'Upcoming',
      subject: 'Data Structures & Algorithms (CS301)'
    },
    {
      id: 'INV-2026-14',
      date: '02 Nov 2026',
      day: 'Monday',
      session: 'Afternoon (02:00 PM - 05:00 PM)',
      hall: 'Tech Block 2 • Room 204',
      capacity: '60 Candidates',
      role: 'Flying Squad Member',
      status: 'Upcoming',
      subject: 'Operating Systems (CS502)'
    },
    {
      id: 'INV-2026-02',
      date: '14 Oct 2026',
      day: 'Wednesday',
      session: 'Morning (09:30 AM - 12:30 PM)',
      hall: 'Central Examination Hall 1',
      capacity: '120 Candidates',
      role: 'Hall Invigilator',
      status: 'Completed',
      subject: 'Mathematics III (MA301)'
    }
  ];

  const paperSettingTasks = [
    {
      courseCode: 'CS701',
      title: 'Machine Learning',
      examType: 'Mid-Semester Examination',
      setsRequired: '2 Sets (Set A & Set B)',
      status: 'Approved by COE',
      deadline: '15 Oct 2026',
      scheme: 'Bloom Taxonomy Level 3 & 4 compliant',
      moderator: 'Prof. S. R. Iyengar (External, IIT Ropar)'
    },
    {
      courseCode: 'CS703',
      title: 'Advanced Database Management Systems',
      examType: 'Mid-Semester Examination',
      setsRequired: '2 Sets (Set A & Set B)',
      status: 'Draft Submitted',
      deadline: '24 Oct 2026',
      scheme: 'CO3 & CO4 problem analysis',
      moderator: 'Prof. Manisha Bansal (COE Committee)'
    }
  ];

  const evaluationBundles = [
    {
      bundleCode: 'BNDL-CS701-01',
      course: 'CS701: Machine Learning',
      totalScripts: 72,
      evaluated: 27,
      remaining: 45,
      deadline: 'Tomorrow, 05:00 PM',
      centre: 'Department Evaluation Room 303',
      status: 'In Progress'
    },
    {
      bundleCode: 'BNDL-CS703-01',
      course: 'CS703: Advanced DBMS',
      totalScripts: 70,
      evaluated: 0,
      remaining: 70,
      deadline: '27 Oct 2026, 05:00 PM',
      centre: 'Department Evaluation Room 303',
      status: 'Pending Dispatch'
    }
  ];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Exam Duties & Papers" 
      description="Superintendence schedule, question paper submission portal, and answer script evaluation bundles."
    >
      {/* Top Banner */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
            <Shield size={24} />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-800">Mid-Semester Exam Session • Oct-Nov 2026</h3>
            <p className="text-xs text-slate-500">Controller of Examinations (COE) • Confidential Exam Cell Protocol</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
            <Download size={14} />
            <span>Paper Template (LaTeX)</span>
          </button>
          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-sm transition-all">
            <Upload size={14} />
            <span>Upload Question Paper</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'duties', label: 'Invigilation Duties (3)' },
          { key: 'papers', label: 'Question Paper Setting (2)' },
          { key: 'evaluation', label: 'Answer Script Bundles (2)' }
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === t.key
                ? 'bg-[#7c3aed] text-white shadow-md'
                : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab 1: Invigilation Duties */}
      {activeTab === 'duties' && (
        <div className="space-y-4">
          {invigilationDuties.map((d) => (
            <div key={d.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                    {d.id}
                  </span>
                  <div>
                    <h4 className="text-base font-bold text-slate-800">{d.subject}</h4>
                    <p className="text-xs text-slate-500">{d.role} • {d.capacity}</p>
                  </div>
                </div>

                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  d.status === 'Completed'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-100'
                    : 'bg-blue-50 text-blue-700 border border-blue-100'
                }`}>
                  {d.status}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-bold text-slate-800">
                  <Calendar size={14} className="text-[#7c3aed]" />
                  {d.date} ({d.day})
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Clock size={14} className="text-slate-400" />
                  {d.session}
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Building size={14} className="text-slate-400" />
                  {d.hall}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Question Paper Setting */}
      {activeTab === 'papers' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {paperSettingTasks.map((p) => (
            <div key={p.courseCode} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-black px-2.5 py-1 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                  {p.courseCode}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                  p.status.includes('Approved') 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {p.status}
                </span>
              </div>

              <h4 className="text-lg font-bold text-slate-800 mb-1">{p.title}</h4>
              <p className="text-xs text-slate-500 mb-4">{p.examType} • {p.setsRequired}</p>

              <div className="space-y-2 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-2xl border border-slate-100 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-500">Evaluation Scheme:</span>
                  <span className="font-bold text-slate-800">{p.scheme}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Peer Moderator:</span>
                  <span className="font-semibold text-slate-800">{p.moderator}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">COE Deadline:</span>
                  <span className="font-bold text-rose-600">{p.deadline}</span>
                </div>
              </div>

              <button className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-[#7c3aed] hover:text-white text-slate-700 text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                <FileText size={14} />
                <span>View Submitted Draft</span>
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Evaluation Bundles */}
      {activeTab === 'evaluation' && (
        <div className="space-y-4">
          {evaluationBundles.map((b) => (
            <div key={b.bundleCode} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-black px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                      {b.bundleCode}
                    </span>
                    <h4 className="text-base font-bold text-slate-800">{b.course}</h4>
                  </div>
                  <p className="text-xs text-slate-500">{b.centre} • Deadline: <strong className="text-amber-700">{b.deadline}</strong></p>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-slate-600 block">
                    Evaluated: <strong className="text-slate-900">{b.evaluated} / {b.totalScripts}</strong>
                  </span>
                  <span className="text-[11px] text-amber-700 font-bold">{b.remaining} remaining</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-4">
                <div 
                  className="bg-[#7c3aed] h-full rounded-full transition-all"
                  style={{ width: `${Math.round((b.evaluated / b.totalScripts) * 100)}%` }}
                />
              </div>

              <div className="flex items-center justify-end">
                <button className="px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5">
                  <span>Enter Marks in Portal</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </CollegeLayout>
  );
}
