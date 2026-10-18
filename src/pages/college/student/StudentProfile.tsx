import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  User, Mail, Phone, MapPin, Calendar, Award, 
  ShieldCheck, Download, GraduationCap, CheckCircle2, FileText
} from 'lucide-react';

export function StudentProfile() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Student Profile & ID" 
      description="Official University KYC Master Record • Academic Bank of Credits (ABC)"
    >
      {/* Student ID Badge Header */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <img 
              src="https://ui-avatars.com/api/?name=Shivam+Sharma&background=7c3aed&color=fff&bold=true&size=128" 
              alt="Shivam Sharma" 
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl border-2 border-purple-200 shadow-md object-cover" 
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">Shivam Sharma</h2>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                  Active
                </span>
              </div>
              <p className="text-xs font-bold text-[#7c3aed]">B.Tech Computer Science & Engineering (CSE)</p>
              <p className="text-xs text-slate-500 mt-1">
                Apex Institute of Technology • Batch 2023-2027 • 7th Semester (Section A)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
            <button 
              onClick={() => alert('Downloading official Digital Student ID Card PDF...')}
              className="px-4 py-2.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold hover:bg-purple-700 transition-colors shadow-md shadow-purple-500/20 inline-flex items-center gap-1.5"
            >
              <Download size={14} />
              <span>Download Digital ID Card</span>
            </button>
            <button 
              onClick={() => alert('Downloading Bonafide Student Certificate signed by Registrar...')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <FileText size={14} />
              <span>Bonafide Certificate</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Academic Details */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <GraduationCap size={18} className="text-[#7c3aed]" />
            <span>Academic Registry Information</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">University Roll No</span>
              <strong className="text-slate-900 font-mono text-sm">21CS1048</strong>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Permanent Registration No (PRN)</span>
              <strong className="text-slate-900 font-mono">20230164002341</strong>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Academic Bank of Credits (ABC ID)</span>
              <strong className="text-purple-700 font-mono">742-918-301-445</strong>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Admission Category</span>
              <span className="font-semibold text-slate-700">General (Merit JEE Main)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Program Duration</span>
              <span className="font-semibold text-slate-700">4 Years Full-Time (8 Semesters)</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Faculty Advisor</span>
              <span className="font-semibold text-[#7c3aed]">Dr. Ankit Sharma (HOD CSE)</span>
            </div>
          </div>
        </div>

        {/* Personal & Contact Information */}
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <User size={18} className="text-[#7c3aed]" />
            <span>Personal & Guardian KYC</span>
          </h3>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Date of Birth</span>
              <span className="font-semibold text-slate-800">14 May 2004 (22 Years)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Blood Group</span>
              <span className="font-semibold text-rose-600 font-bold">O+ Positive</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Primary Email</span>
              <span className="font-mono text-slate-700">shivam.sharma@linkup.edu</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Father's Name</span>
              <span className="font-semibold text-slate-800">Rajesh Sharma (+91 98765 43210)</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-100">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Permanent Residence</span>
              <span className="font-medium text-slate-700 text-right max-w-xs">
                Plot 42, Sector 62, Noida, Uttar Pradesh - 201309
              </span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">Aadhaar Verification</span>
              <span className="text-emerald-600 font-bold flex items-center gap-1">
                <CheckCircle2 size={13} /> Verified via DigiLocker (•••• 8912)
              </span>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
