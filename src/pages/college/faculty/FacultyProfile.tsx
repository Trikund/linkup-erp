import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  User, Mail, Phone, MapPin, Award, BookOpen, 
  Download, Briefcase, GraduationCap, Building2, 
  ExternalLink, CheckCircle2, ShieldCheck, Sparkles, FileText
} from 'lucide-react';

export function FacultyProfile() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Faculty Profile & CV" 
      description="Academic credentials, doctoral thesis details, research pedigree, and institutional portfolio."
    >
      {/* Profile Header Hero Card */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-sm mb-8 relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#7c3aed] to-indigo-600 text-white flex items-center justify-center font-black text-3xl shadow-xl shadow-purple-900/10">
              AS
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-3 py-0.5 rounded-full text-xs font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                  Professor & Head of Department
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 flex items-center gap-1">
                  <ShieldCheck size={13} /> AICTE Approved Faculty
                </span>
              </div>
              <h2 className="text-2xl font-black text-slate-900">Dr. Ankit Sharma</h2>
              <p className="text-sm font-semibold text-slate-500 mt-0.5">
                Department of Computer Science & Engineering • Apex Institute of Technology
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                <span>Emp ID: <strong className="text-slate-800 font-mono">FAC-2018-042</strong></span>
                <span>•</span>
                <span>AICTE ID: <strong className="text-slate-800 font-mono">1-334918231</strong></span>
                <span>•</span>
                <span>Cabin: <strong className="text-slate-800">Tech Block 3 • Room 301</strong></span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm">
              <Download size={14} />
              <span>Download Academic CV (PDF)</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Qualifications & Experience */}
        <div className="lg:col-span-2 space-y-8">
          {/* Education & Qualifications */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800">Academic Qualifications</h3>
                <p className="text-xs text-slate-400">Doctoral and postgraduate educational credentials</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">Ph.D. in Computer Science & Engineering</h4>
                  <span className="font-mono text-xs font-bold text-[#7c3aed]">2013 - 2017</span>
                </div>
                <p className="text-xs font-semibold text-slate-700">Indian Institute of Technology Delhi (IIT Delhi)</p>
                <p className="text-xs text-slate-500 mt-1 italic">
                  Thesis: "Fault-Tolerant Consensus Mechanisms for Distributed Heterogeneous Cloud Systems" (Advised by Prof. S. Banerjee)
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">M.Tech in Computer Science & Engineering</h4>
                  <span className="font-mono text-xs font-bold text-slate-500">2009 - 2011</span>
                </div>
                <p className="text-xs font-semibold text-slate-700">Indian Institute of Technology Roorkee (IIT Roorkee)</p>
                <p className="text-xs text-emerald-700 font-bold mt-1">Gold Medalist • CGPA: 9.84 / 10.0</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-bold text-slate-900">B.Tech in Computer Science & Engineering</h4>
                  <span className="font-mono text-xs font-bold text-slate-500">2005 - 2009</span>
                </div>
                <p className="text-xs font-semibold text-slate-700">Dr. A.P.J. Abdul Kalam Technical University</p>
                <p className="text-xs text-slate-500 mt-1">First Class with Honours (84.6%)</p>
              </div>
            </div>
          </div>

          {/* Academic Appointments & Career History */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-800">Academic Appointments (14+ Years)</h3>
                <p className="text-xs text-slate-400">Chronological university service history</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#7c3aed] mt-1.5 ring-4 ring-purple-100 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Professor & Head of Department (CSE)</h4>
                  <p className="text-xs text-slate-500">Apex Institute of Technology • July 2021 - Present</p>
                  <p className="text-xs text-slate-600 mt-1">Leading NBA Tier-1 accreditation, curriculum design, 18-faculty cadre, and departmental research grants.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Associate Professor</h4>
                  <p className="text-xs text-slate-500">Apex Institute of Technology • July 2018 - June 2021</p>
                  <p className="text-xs text-slate-600 mt-1">Served as Chief Examination Superintendent and NBA Criterion 3 Coordinator.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-300 mt-1.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Assistant Professor</h4>
                  <p className="text-xs text-slate-500">Jaypee Institute of Information Technology • Aug 2011 - June 2018</p>
                  <p className="text-xs text-slate-600 mt-1">Delivered operating systems and distributed algorithms courses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Digital Identity Card & Contact */}
        <div className="space-y-8">
          {/* Digital Faculty Identity Badge */}
          <div className="bg-gradient-to-b from-slate-900 to-indigo-950 text-white rounded-3xl p-6 shadow-xl relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/70">FACULTY DIGITAL ID</span>
              </div>
              <span className="text-[10px] font-mono text-white/50">APEX-INST-2026</span>
            </div>

            <div className="text-center py-2">
              <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 text-white flex items-center justify-center font-black text-2xl mx-auto mb-3 backdrop-blur-md">
                AS
              </div>
              <h3 className="text-lg font-black text-white">Dr. Ankit Sharma</h3>
              <p className="text-xs text-purple-300 font-semibold">Professor & HOD (CSE)</p>
              <p className="text-[11px] text-white/60 font-mono mt-1">ID: FAC-2018-042</p>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5 text-xs text-white/80">
              <div className="flex justify-between">
                <span className="text-white/50">Blood Group:</span>
                <span className="font-bold text-white">B+ Positive</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Validity:</span>
                <span className="font-bold text-emerald-400">June 2030</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Library Barcode:</span>
                <span className="font-mono font-bold text-white">8823-9014-22</span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-4">Official Contact Details</h4>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                  <Mail size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Email Address</span>
                  <span className="font-semibold text-slate-800">dr.ankit.sharma@apex.edu.in</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Official Mobile</span>
                  <span className="font-semibold text-slate-800">+91 98765 43210 (Ext: 301)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                  <MapPin size={14} />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">HOD Chamber</span>
                  <span className="font-semibold text-slate-800">Tech Block 3 • Room 301</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
