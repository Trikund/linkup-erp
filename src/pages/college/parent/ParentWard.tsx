import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  UserCheck, Download, Award, BookOpen, Building, 
  Phone, Mail, Calendar, CheckCircle2, ShieldCheck, 
  FileText, Sparkles, User, ExternalLink
} from 'lucide-react';

export function ParentWard() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Ward Profile & Enrollment" 
      description="Official university enrollment records, academic credentials, and mentor affiliation of Shivam Sharma."
    >
      {/* Student Profile Identity Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#7c3aed] to-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-purple-900/10">
              SS
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                  B.Tech CSE • Semester VII
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <CheckCircle2 size={13} /> Active University Student
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">Shivam Sharma</h2>
              <p className="text-sm font-semibold text-slate-500 mt-0.5">
                Apex Institute of Technology • Batch 2023 - 2027
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                <span>Roll No: <strong className="text-slate-800 font-mono">21CS1048</strong></span>
                <span>•</span>
                <span>PRN: <strong className="text-slate-800 font-mono">20230164002341</strong></span>
                <span>•</span>
                <span>ABC ID: <strong className="text-slate-800 font-mono">742-918-301-445</strong></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-md">
              <Download size={14} />
              <span>Bonafide Certificate (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Enrollment details & Semester Subjects */}
        <div className="lg:col-span-2 space-y-8">
          {/* Institutional Enrollment Details */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">University Enrollment Dossier</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Department</span>
                <span className="font-bold text-slate-800 text-sm mt-0.5 block">Computer Science & Engineering</span>
                <span className="text-slate-500 text-[11px]">School of Engineering & Technology</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Current Cohort</span>
                <span className="font-bold text-slate-800 text-sm mt-0.5 block">Semester VII • Section A (Batch A1)</span>
                <span className="text-slate-500 text-[11px]">Academic Year 2026-2027</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Admission Mode</span>
                <span className="font-bold text-slate-800 text-sm mt-0.5 block">JEE Main Counselling (All India Merit)</span>
                <span className="text-slate-500 text-[11px]">Rank: 18,420 • Category: Open/General</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-[10px] font-bold uppercase text-slate-400 block">Credits Earned / Required</span>
                <span className="font-bold text-[#7c3aed] text-sm mt-0.5 block">142 Credits / 160 Total</span>
                <span className="text-emerald-600 font-semibold text-[11px]">On track for degree award in June 2027</span>
              </div>
            </div>
          </div>

          {/* Current Semester VII Enrolled Courses */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-4">Odd Semester 2026-27 Registered Subjects</h3>
            <div className="space-y-3">
              {[
                { code: 'CS701', name: 'Machine Learning', credits: '4 Credits', faculty: 'Dr. Ankit Sharma (HOD)', type: 'Theory Core' },
                { code: 'CS703', name: 'Advanced Database Management Systems', credits: '4 Credits', faculty: 'Dr. Ankit Sharma', type: 'Theory Core' },
                { code: 'CS706P', name: 'Major Capstone Project Lab', credits: '6 Credits', faculty: 'Dr. Ankit Sharma (Guide)', type: 'Major Project' },
                { code: 'CS702', name: 'Cloud Computing Architectures', credits: '3 Credits', faculty: 'Prof. Sneha Kulkarni', type: 'Elective Core' },
                { code: 'CS704', name: 'Information Security & Cryptography', credits: '3 Credits', faculty: 'Dr. Rajeshwar Iyer', type: 'Elective Core' }
              ].map((c) => (
                <div key={c.code} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 bg-white text-[#7c3aed] border border-purple-100 rounded-lg">
                      {c.code}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-sm">{c.name}</h4>
                      <p className="text-[11px] text-slate-500">Instructor: <strong className="text-slate-700">{c.faculty}</strong></p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/60 px-2 py-0.5 rounded">
                      {c.credits}
                    </span>
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                      {c.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Faculty Mentor Card & Digital ID */}
        <div className="space-y-8">
          {/* Assigned Faculty Mentor Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
                UGC Faculty Mentor
              </span>
            </div>

            <div className="text-center py-2">
              <div className="w-16 h-16 rounded-2xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-xl mx-auto mb-3">
                AS
              </div>
              <h4 className="text-base font-bold text-slate-800">Dr. Ankit Sharma</h4>
              <p className="text-xs text-slate-500 font-medium">Professor & Head of Department (CSE)</p>
              <p className="text-[11px] text-purple-600 font-semibold mt-0.5">Ph.D. (IIT Delhi)</p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Building size={14} className="text-[#7c3aed]" />
                <span>Tech Block 3 • Room 301</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-slate-400" />
                <a href="mailto:dr.ankit.sharma@apex.edu.in" className="text-purple-700 hover:underline">
                  dr.ankit.sharma@apex.edu.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-slate-400" />
                <span>+91 98765 43210 (Ext: 301)</span>
              </div>
            </div>
          </div>

          {/* Residential Hostel Allocation */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-3">Campus Hostel Residence</h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Hostel Building:</span>
                <span className="font-bold text-slate-800">Tech Boys Hostel 3</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Room Allotment:</span>
                <span className="font-bold text-purple-700">Room 204</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Room Partner:</span>
                <span className="font-medium text-slate-700">Kunal Singhal (21CS1108)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Chief Warden:</span>
                <span className="font-semibold text-slate-800">Dr. K. P. Singh</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
