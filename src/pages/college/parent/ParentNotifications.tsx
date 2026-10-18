import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Bell, Calendar, Download, ExternalLink, 
  CheckCircle2, ShieldAlert, Sparkles, Filter
} from 'lucide-react';

export function ParentNotifications() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };
  const [filter, setFilter] = useState<'all' | 'exam' | 'academic' | 'holiday'>('all');

  const notifications = [
    {
      id: 'NOTIF-2026-88',
      title: 'End-Semester Theory & Practical Examination Timetable (Dec 2026)',
      category: 'exam',
      date: '18 Oct 2026',
      sender: 'Controller of Examinations (COE)',
      priority: 'High',
      content: 'The official datesheet for the 7th Semester B.Tech End-Term examinations has been published. Theory exams will commence from 05 Dec 2026. Hall tickets will be issued through ERP portal for students with attendance above 75%.'
    },
    {
      id: 'NOTIF-2026-82',
      title: 'Diwali Festival Break & Campus Operations Advisory',
      category: 'holiday',
      date: '14 Oct 2026',
      sender: 'Office of the Registrar',
      priority: 'Normal',
      content: 'Academic instruction will remain suspended from 31 Oct to 04 Nov 2026 on account of Diwali. Hostels will remain operational with standard security curfew regulations. Mess service will continue without interruption.'
    },
    {
      id: 'NOTIF-2026-79',
      title: 'Campus Placement Super-Dream Recruitment Drives for Placed Students',
      category: 'academic',
      date: '12 Oct 2026',
      sender: 'Training & Placement Directorate',
      priority: 'High',
      content: 'Students who have secured Dream offers (including CloudScale Technologies) are hereby informed that Super-Dream recruiters (offering packages above ₹20.0 LPA) will commence on-campus screening from November 2026.'
    },
    {
      id: 'NOTIF-2026-71',
      title: 'Mandatory Submission of Capstone Project Synopsis Files for NBA Peer Team',
      category: 'academic',
      date: '08 Oct 2026',
      sender: 'Head of Department (CSE)',
      priority: 'Normal',
      content: 'All final year project groups under Dr. Ankit Sharma must upload signed copies of their Phase 2 architectural synopsis on the department portal for NBA Criterion 4 audit review.'
    }
  ];

  const filtered = notifications.filter(n => filter === 'all' || n.category === filter);

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Notices & Circulars" 
      description="Official administrative broadcasts, examination schedules, and institutional circulars from Apex Institute."
    >
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: 'all', label: 'All Notices (4)' },
          { key: 'exam', label: 'Examinations (1)' },
          { key: 'academic', label: 'Academic & Placement (2)' },
          { key: 'holiday', label: 'Holidays (1)' }
        ].map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key as any)}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
              filter === f.key
                ? 'bg-[#7c3aed] text-white shadow-md'
                : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Circulars List */}
      <div className="space-y-4">
        {filtered.map((n) => (
          <div key={n.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  {n.id}
                </span>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                  n.priority === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-purple-50 text-[#7c3aed]'
                }`}>
                  {n.priority}
                </span>
              </div>
              <span className="text-xs text-slate-400 font-medium">{n.date}</span>
            </div>

            <div className="py-3">
              <h4 className="text-base font-bold text-slate-800 mb-1">{n.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{n.content}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Authority: <strong className="text-slate-700">{n.sender}</strong></span>
              <button className="text-[#7c3aed] font-bold hover:underline inline-flex items-center gap-1">
                <Download size={13} />
                <span>Download Circular PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
