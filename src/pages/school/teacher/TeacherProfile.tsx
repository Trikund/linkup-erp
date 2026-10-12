import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  BookOpen, 
  Mail, 
  Phone, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck, 
  GraduationCap, 
  Briefcase,
  Star,
  FileText,
  Edit3
} from 'lucide-react';

export function TeacherProfile() {
  const user = USERS.teacher;

  const credentials = [
    { label: 'Employee ID', value: 'EMP-MATH-2018-042' },
    { label: 'CBSE Teacher PIN', value: 'CBSE-DEL-TR-81920' },
    { label: 'Department', value: 'Mathematics & STEM Studies' },
    { label: 'Designation', value: 'Senior PGT Mathematics' },
    { label: 'Mentorship Charge', value: 'Class 10-A (Homeroom Mentor)' },
    { label: 'Date of Joining', value: '16 July 2018 (Permanent)' },
    { label: 'Total Experience', value: '9 Years (7 Years at Greenfield)' },
    { label: 'Official Email', value: 'ananya.sharma@greenfield.edu.in' },
    { label: 'Staff Room Desk', value: 'Desk 12 • Faculty Room 2 (Block B)' },
    { label: 'Emergency Contact', value: '+91 98103 44521' }
  ];

  const education = [
    { degree: 'Master of Science (M.Sc.) in Mathematics', institution: 'St. Stephen’s College, University of Delhi', year: '2015', grade: 'First Division with Distinction (86.4%)' },
    { degree: 'Bachelor of Education (B.Ed.) in Mathematics & Physics', institution: 'Central Institute of Education (CIE), Delhi', year: '2017', grade: 'University Gold Medalist' },
    { degree: 'Bachelor of Science (B.Sc. Hons) in Mathematics', institution: 'Miranda House, University of Delhi', year: '2013', grade: 'First Class Honors' }
  ];

  const certifications = [
    { title: 'CBSE NEP 2020 Pedagogical Framework for Secondary STEM', issuer: 'Central Board of Secondary Education (CBSE)', year: '2024' },
    { title: 'Advanced Vedic Mathematics & Mental Arithmetic Master Trainer', issuer: 'National Vedic Math Institute', year: '2023' },
    { title: 'GeoGebra & Desmos Interactive Mathematics Integration', issuer: 'STEM Education Council', year: '2022' }
  ];

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Faculty Profile & Dossier"
      description="Official faculty credentials, pedagogical certifications, academic degrees, and institutional mentorship dossier."
    >
      <div className="space-y-8 max-w-5xl">

        {/* HEADER PROFILE CARD */}
        <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-100 shadow-sm"
                />
                <span className="absolute -bottom-1 -right-1 p-1.5 bg-emerald-500 rounded-full border-2 border-white" title="Active Faculty" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 className="text-2xl font-extrabold text-slate-900">{user.name}</h2>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Senior PGT
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                    Class 10-A Mentor
                  </span>
                </div>
                <p className="text-sm text-slate-500 mt-1 font-medium">
                  Department of Mathematics • Greenfield Academy Senior Secondary Wing
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  CBSE Verified Teacher PIN: <strong className="text-slate-700 font-mono">CBSE-DEL-TR-81920</strong>
                </p>
              </div>
            </div>

            <button 
              onClick={() => alert('Faculty profile update request sent to School Administration.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition shadow-sm"
            >
              <Edit3 className="w-4 h-4" />
              Request Dossier Update
            </button>
          </div>
        </div>

        {/* CREDENTIALS GRID */}
        <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-6">
          <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-blue-600" />
            Institutional Credentials & Employment Record
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {credentials.map((c, i) => (
              <div key={i} className="p-3.5 bg-slate-50/70 rounded-xl border border-slate-100 flex justify-between items-center">
                <span className="text-slate-500 font-medium text-xs">{c.label}</span>
                <span className="font-bold text-slate-900 text-sm text-right">{c.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 2-COLUMN SECTION: EDUCATION & CERTIFICATIONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Academic Qualifications */}
          <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-purple-600" />
              Academic Qualifications
            </h3>

            <div className="space-y-4">
              {education.map((ed, idx) => (
                <div key={idx} className="p-4 bg-slate-50/70 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900 text-sm">{ed.degree}</h4>
                    <span className="text-xs font-mono font-bold text-slate-400">{ed.year}</span>
                  </div>
                  <p className="text-xs text-slate-600">{ed.institution}</p>
                  <p className="text-xs text-emerald-700 font-semibold">{ed.grade}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Pedagogical Certifications */}
          <div className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-5">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-600" />
              Professional Certifications & Training
            </h3>

            <div className="space-y-4">
              {certifications.map((cer, idx) => (
                <div key={idx} className="p-4 bg-slate-50/70 rounded-xl border border-slate-100 space-y-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-slate-900 text-sm">{cer.title}</h4>
                    <span className="text-xs font-mono font-bold text-slate-400">{cer.year}</span>
                  </div>
                  <p className="text-xs text-slate-600">{cer.issuer}</p>
                  <span className="inline-flex items-center gap-1 text-[11px] text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded-md mt-1">
                    <CheckCircle2 className="w-3 h-3 text-blue-600" /> Verified Credential
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200/80 text-xs text-emerald-800 space-y-1">
              <span className="font-bold block">Annual Appraisal Rating: Exemplary (Grade A+)</span>
              <p className="text-slate-600">
                100% pass outcome across 5 consecutive batches of CBSE Class X Board Examinations.
              </p>
            </div>
          </div>

        </div>

      </div>
    </SchoolLayout>
  );
}
