import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CalendarCheck, Calendar, Clock, MapPin, 
  Sparkles, Download, CheckCircle2, ArrowRight
} from 'lucide-react';

export function ParentEvents() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const events = [
    {
      date: '24 Oct 2026',
      title: 'Capstone Project Phase 2 Review & External Demo',
      category: 'Academic Milestone',
      time: '02:00 PM - 05:00 PM',
      location: 'Advanced AI/ML Lab 2',
      badge: 'bg-purple-100 text-[#7c3aed]'
    },
    {
      date: '31 Oct - 04 Nov 2026',
      title: 'Diwali Festival Break & Campus Recess',
      category: 'Institutional Holiday',
      time: 'All Day',
      location: 'Campus Wide',
      badge: 'bg-amber-100 text-amber-800'
    },
    {
      date: '15 Nov 2026',
      title: 'End-Semester Exam Form Clearance & Hall Ticket Issuance',
      category: 'COE Examination',
      time: '10:00 AM - 04:00 PM',
      location: 'ERP Examination Portal',
      badge: 'bg-blue-100 text-blue-800'
    },
    {
      date: '05 Dec 2026',
      title: 'Semester VII End-Term University Theory Examinations Begin',
      category: 'Examination',
      time: '09:30 AM - 12:30 PM',
      location: 'Central Exam Halls 1-4',
      badge: 'bg-rose-100 text-rose-800'
    },
    {
      date: '15 Jan 2027',
      title: 'Apex Innovate 2027 - Annual National Technical Fest',
      category: 'Campus Event',
      time: '09:00 AM - 08:00 PM',
      location: 'Apex Main Auditorium',
      badge: 'bg-emerald-100 text-emerald-800'
    }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Events & Calendar" 
      description="University academic calendar, examination schedules, festival breaks, and campus events."
    >
      <div className="bg-white border border-slate-100 rounded-3xl p-5 sm:p-6 shadow-sm mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-800">Academic Year 2026-2027 Calendar</h3>
          <p className="text-xs text-slate-500">Key institutional deadlines approved by Academic Council.</p>
        </div>
        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm">
          <Download size={14} />
          <span>Academic Calendar (PDF)</span>
        </button>
      </div>

      <div className="space-y-4">
        {events.map((e, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#7c3aed] flex flex-col items-center justify-center font-bold shrink-0 border border-purple-100">
                <span className="text-[10px] uppercase font-bold text-slate-400">Date</span>
                <span className="text-xs font-black text-center leading-tight">{e.date.split(' ')[0]}</span>
              </div>
              <div>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${e.badge} mb-1 inline-block`}>
                  {e.category}
                </span>
                <h4 className="text-base font-bold text-slate-800">{e.title}</h4>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1"><Clock size={12} /> {e.time}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                </div>
              </div>
            </div>

            <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-xl border border-purple-100 self-start sm:self-center">
              {e.date}
            </span>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
