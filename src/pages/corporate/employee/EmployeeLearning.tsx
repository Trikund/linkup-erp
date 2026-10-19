import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  BookOpen, Award, CheckCircle2, Clock, Plus, 
  ExternalLink, Download, Sparkles, ShieldCheck
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  platform: string;
  progressPct: number;
  duration: string;
  instructor: string;
  status: 'In Progress' | 'Completed';
}

interface Cert {
  id: string;
  name: string;
  issuingBody: string;
  validity: string;
  credentialId: string;
  badgeUrl: string;
}

export function EmployeeLearning() {
  const user = { name: 'Rahul Sharma', roleLabel: 'Senior Frontend Developer • Engineering' };

  const courses: Course[] = [
    { id: 'CRS-01', title: 'Advanced Distributed Systems & Micro-Frontends with React 19', platform: 'Frontend Masters', progressPct: 75, duration: '14.5 Hours', instructor: 'Kent C. Dodds', status: 'In Progress' },
    { id: 'CRS-02', title: 'Web Performance Optimization, Core Web Vitals & Chrome DevTools', platform: 'O’Reilly Learning', progressPct: 100, duration: '10.0 Hours', instructor: 'Addy Osmani', status: 'Completed' },
    { id: 'CRS-03', title: 'Kubernetes for Frontend & Node.js Application Engineers', platform: 'Udemy Enterprise', progressPct: 40, duration: '18.0 Hours', instructor: 'Mumshad Mannambeth', status: 'In Progress' }
  ];

  const certifications: Cert[] = [
    { id: 'CERT-01', name: 'AWS Certified Solutions Architect - Associate', issuingBody: 'Amazon Web Services (AWS)', validity: 'Valid till Nov 2029', credentialId: 'AWS-PSA-908124', badgeUrl: 'AWS Certified' },
    { id: 'CERT-02', name: 'Meta Senior React & Frontend Architecture Specialist', issuingBody: 'Meta / Coursera Enterprise', validity: 'Lifetime Credential', credentialId: 'META-REACT-0842', badgeUrl: 'Meta Certified' }
  ];

  return (
    <CorporateLayout
      role="employee"
      user={user}
      title="Learning & Certifications"
      description="Access enterprise LMS libraries, track ongoing courses, and claim certification allowances."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Performance & Growth' },
        { label: 'Learning & Certs' }
      ]}
    >
      <div className="space-y-6">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <BookOpen size={20} />
              </span>
              <h1 className="text-xl font-bold text-slate-800">Enterprise Learning & Development</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ₹50,000 Annual Stipend
              </span>
            </div>
            <p className="text-xs text-slate-500">
              Unlimited access to Udemy Business, Frontend Masters, and O'Reilly Enterprise Library.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition">
            <Plus size={14} />
            Claim Certification Stipend
          </button>
        </div>

        {/* 4 Learning Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Annual L&D Budget</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Award size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900 font-mono">₹50,000</div>
            <div className="mt-1 text-xs text-slate-500">Claimed: ₹35,000 (70% utilized)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Available Stipend</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-emerald-600 font-mono">₹15,000</div>
            <div className="mt-1 text-xs text-slate-500">Valid till Dec 31, 2026</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Courses In Progress</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">2 Courses</div>
            <div className="mt-1 text-xs text-slate-500">Frontend Masters & Udemy</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Verified Certifications</span>
              <span className="p-2 bg-purple-50 text-purple-600 rounded-lg"><ShieldCheck size={16} /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-slate-900">2 Verified</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">AWS & Meta Certified</div>
          </div>
        </div>

        {/* Courses Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
            <div>
              <h3 className="text-sm font-bold text-slate-800">Enrolled Enterprise Courses</h3>
              <p className="text-xs text-slate-500">Track and resume your corporate training progress</p>
            </div>
            <span className="text-xs font-semibold text-blue-600">3 Courses Tracked</span>
          </div>

          <div className="space-y-4">
            {courses.map((c) => (
              <div key={c.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200">
                      {c.platform}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{c.duration}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">Instructor: {c.instructor}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mt-1">{c.title}</h4>
                </div>

                <div className="flex items-center gap-4 shrink-0 sm:self-center">
                  <div className="w-28">
                    <div className="flex justify-between text-[10px] mb-1">
                      <span className="text-slate-500">Progress</span>
                      <span className="font-bold font-mono text-slate-800">{c.progressPct}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${c.progressPct === 100 ? 'bg-emerald-500' : 'bg-blue-600'}`} style={{ width: `${c.progressPct}%` }} />
                    </div>
                  </div>

                  <button className="px-3 py-1.5 text-xs font-bold text-blue-600 bg-white border border-slate-200 hover:bg-blue-50 rounded-lg transition flex items-center gap-1 shadow-xs">
                    Resume <ExternalLink size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Vault */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-sm font-bold text-slate-800 mb-1">Verified Professional Certifications</h3>
          <p className="text-xs text-slate-500 mb-4">Credentials synced with LinkUpCorp Corporate HR Records.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start justify-between text-xs">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {cert.badgeUrl}
                  </span>
                  <h4 className="text-sm font-bold text-slate-800 mt-1.5">{cert.name}</h4>
                  <p className="text-slate-500 text-[11px] mt-0.5">{cert.issuingBody} • {cert.validity}</p>
                  <p className="font-mono text-[10px] text-slate-400 mt-1">ID: {cert.credentialId}</p>
                </div>
                <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-600 transition" title="View Certificate">
                  <ExternalLink size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
