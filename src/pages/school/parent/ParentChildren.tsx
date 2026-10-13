import React from 'react';
import { Link } from 'react-router-dom';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Users, 
  GraduationCap, 
  BookOpen, 
  CalendarCheck, 
  Award, 
  Bus, 
  Heart, 
  Download, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export function ParentChildren() {
  const user = USERS.parent;

  const children = [
    {
      id: '1',
      name: 'Rahul Sharma',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop',
      grade: 'Grade X - Section A',
      roll: 14,
      admNo: 'DPS/2021/1042',
      cbsePin: 'CBSE-DEL-91827',
      house: 'Tagore House (Red)',
      dob: '14 May 2011 (Age: 15)',
      mentor: 'Mrs. Ananya Sharma',
      mentorDesig: 'Senior PGT Mathematics',
      mentorEmail: 'ananya.sharma@greenfield.edu.in',
      attendance: '92.4%',
      attendanceDays: '111 / 120 Days Present',
      gpa: '8.8 / 10.0',
      rank: '6th in Section (Top 15%)',
      bloodGroup: 'O+ (Positive)',
      allergies: 'None Reported',
      medicalStatus: 'Fit & Healthy',
      busRoute: 'Route #14 (Noida Expressway)',
      busStop: 'Sector 128 Main Gate',
      subjects: ['Mathematics (Standard)', 'Science (Physics, Chem, Bio)', 'English Literature', 'Social Science', 'Hindi Course A', 'Information Tech']
    },
    {
      id: '2',
      name: 'Ananya Sharma',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop',
      grade: 'Grade VII - Section B',
      roll: 8,
      admNo: 'DPS/2024/3192',
      cbsePin: 'CBSE-DEL-41092',
      house: 'Gandhi House (Blue)',
      dob: '22 August 2014 (Age: 12)',
      mentor: 'Mr. Vikram Singh',
      mentorDesig: 'TGT Computer Applications',
      mentorEmail: 'vikram.singh@greenfield.edu.in',
      attendance: '96.2%',
      attendanceDays: '115 / 120 Days Present',
      gpa: '9.4 / 10.0',
      rank: '2nd in Section',
      bloodGroup: 'B+ (Positive)',
      allergies: 'Mild dust sensitivity',
      medicalStatus: 'Fit & Healthy',
      busRoute: 'Route #14 (Noida Expressway)',
      busStop: 'Sector 128 Main Gate',
      subjects: ['General Mathematics', 'Integrated Science', 'English Communicative', 'Social Studies', 'Hindi Literature', 'Computer Science & AI']
    }
  ];

  return (
    <SchoolLayout 
      role="parent" 
      user={user}
      title="My Children • Academic Dossiers"
      description="Official institutional enrollment records, class mentor contacts, transportation details, and health cards."
    >
      <div className="space-y-8">

        {/* TOP SUMMARY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Enrolled Children</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-slate-900">2 Students</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Class 10-A & Class 7-B</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Family Attendance</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">94.3% Avg</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Both children regular</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Tuition Fees</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-emerald-600">Quarter 2 Cleared</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Next Due: 15 Nov 2026</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Transport Route</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-slate-900">Bus #14</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Common stop: Sector 128</p>
          </div>
        </div>

        {/* DETAILED DOSSIER CARDS */}
        <div className="space-y-8">
          {children.map((child) => (
            <div 
              key={child.id}
              className="bg-white border border-slate-100 rounded-2xl p-7 md:p-8 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6"
            >
              {/* Header Profile */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img 
                      src={child.avatar} 
                      alt={child.name} 
                      className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-100 shadow-sm"
                    />
                    <span className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-2 border-white" title="Active Enrollment" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-2xl font-extrabold text-slate-900">{child.name}</h3>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                        {child.grade}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        {child.house}
                      </span>
                    </div>

                    <p className="text-sm text-slate-500 mt-1.5 font-medium">
                      Roll No: <strong className="text-slate-800 font-mono">#{child.roll}</strong> • Admission No: <strong className="text-slate-800 font-mono">{child.admNo}</strong> • CBSE PIN: <strong className="text-slate-800 font-mono">{child.cbsePin}</strong>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Date of Birth: {child.dob}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button 
                    onClick={() => alert(`Downloading official digital student ID card for ${child.name}...`)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
                  >
                    <Download className="w-4 h-4" />
                    Download Student ID Card
                  </button>

                  <Link 
                    to="/school/parent/results"
                    className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition shadow-sm"
                  >
                    View Term Marksheet
                  </Link>
                </div>
              </div>

              {/* 3-Column Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

                {/* Col 1: Academic & Mentor */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-blue-700 font-bold text-xs uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4" />
                    Academic & Faculty Mentor
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Cumulative GPA:</span>
                      <span className="font-extrabold text-blue-600 text-sm">{child.gpa}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Attendance:</span>
                      <span className="font-extrabold text-emerald-600 text-sm">{child.attendance}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Class Standing:</span>
                      <span className="font-bold text-slate-900">{child.rank}</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-500 block">Class Mentor:</span>
                      <span className="font-bold text-slate-900 block text-sm mt-0.5">{child.mentor}</span>
                      <span className="text-slate-400 block">{child.mentorDesig}</span>
                      <a href={`mailto:${child.mentorEmail}`} className="text-blue-600 font-medium hover:underline block mt-0.5">
                        {child.mentorEmail}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 2: Health & Emergency Info */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-wider">
                    <Heart className="w-4 h-4" />
                    Medical & Health Dossier
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Blood Group:</span>
                      <span className="font-bold text-rose-600">{child.bloodGroup}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Known Allergies:</span>
                      <span className="font-bold text-slate-800">{child.allergies}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Physical Fitness:</span>
                      <span className="font-bold text-emerald-600 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {child.medicalStatus}
                      </span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-500 block">Infirmary Doctor On Record:</span>
                      <span className="font-bold text-slate-800 block mt-0.5">Dr. Meenakshi Sundaram</span>
                      <span className="text-slate-400 block">Campus Medical Center</span>
                    </div>
                  </div>
                </div>

                {/* Col 3: Bus & Transportation Route */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 space-y-3">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-xs uppercase tracking-wider">
                    <Bus className="w-4 h-4" />
                    Transportation & Daily Commute
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Assigned Bus:</span>
                      <span className="font-bold text-slate-900">{child.busRoute}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Designated Stop:</span>
                      <span className="font-bold text-slate-800">{child.busStop}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Morning Pickup:</span>
                      <span className="font-bold text-slate-900 font-mono">07:15 AM</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200/60">
                      <span className="text-slate-500">Afternoon Drop:</span>
                      <span className="font-bold text-slate-900 font-mono">03:40 PM</span>
                    </div>
                    <div className="pt-1">
                      <span className="text-slate-500 block">Bus Coordinator:</span>
                      <span className="font-bold text-slate-900 block mt-0.5">Mr. Balram (+91 94102 38910)</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Enrolled Subjects Pills */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Enrolled Curriculum Subjects:</span>
                <div className="flex flex-wrap gap-2">
                  {child.subjects.map((sub, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 rounded-lg text-xs font-bold text-slate-700">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </SchoolLayout>
  );
}
