import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Bell, Send, Plus, Calendar, Users, Paperclip, 
  CheckCircle2, AlertCircle, Search, Filter, ShieldCheck
} from 'lucide-react';

interface Circular {
  id: string;
  title: string;
  category: 'NBA / NAAC' | 'Examination' | 'Department' | 'Holiday';
  sender: string;
  date: string;
  priority: 'Urgent' | 'Normal' | 'High';
  content: string;
  audience: string;
}

export function FacultyAnnouncements() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [activeTab, setActiveTab] = useState<'all' | 'published' | 'create'>('all');
  const [broadcastTitle, setBroadcastTitle] = useState('');
  const [broadcastBody, setBroadcastBody] = useState('');
  const [broadcastAudience, setBroadcastAudience] = useState('My Enrolled Students (CS701 & CS703)');
  const [isSuccess, setIsSuccess] = useState(false);

  const circulars: Circular[] = [
    {
      id: 'CIR-2026-104',
      title: 'Mandatory Submission of Course Outcome (CO-PO) Files for NBA Peer Review',
      category: 'NBA / NAAC',
      sender: 'Office of the HOD & Dean Academics',
      date: '18 Oct 2026',
      priority: 'Urgent',
      content: 'All faculty members handling Odd Semester 2026-27 courses are requested to submit signed course files along with direct attainment sheets by Friday, 24th Oct 2026.',
      audience: 'All CSE Department Faculty'
    },
    {
      id: 'CIR-2026-098',
      title: 'Mid-Semester Examination Answer Script Evaluation Protocol',
      category: 'Examination',
      sender: 'Controller of Examinations (COE)',
      date: '16 Oct 2026',
      priority: 'High',
      content: 'Answer scripts for completed exams must be evaluated within 72 hours of bundle handover. Entry into ERP portal must be completed with individual question breakdowns.',
      audience: 'All Teaching Faculty & Invigilators'
    },
    {
      id: 'CIR-2026-091',
      title: 'National Smart India Hackathon (SIH 2026) - Mentor Nominations',
      category: 'Department',
      sender: 'Innovation & Incubation Cell (IIC)',
      date: '14 Oct 2026',
      priority: 'Normal',
      content: 'Faculty members interested in mentoring student teams shortlisted for SIH 2026 hardware/software editions should register with the IIC coordinator.',
      audience: 'Faculty & Mentors'
    },
    {
      id: 'CIR-2026-085',
      title: 'Academic Holiday Circular: Diwali Festival & Compensatory Schedule',
      category: 'Holiday',
      sender: 'Office of the Registrar',
      date: '10 Oct 2026',
      priority: 'Normal',
      content: 'The institute will remain closed from 31st Oct to 4th Nov on occasion of Diwali. Scheduled lectures will be compensated on subsequent Saturdays as per academic calendar.',
      audience: 'Entire College (Faculty & Students)'
    }
  ];

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    if (!broadcastTitle || !broadcastBody) return;
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setBroadcastTitle('');
      setBroadcastBody('');
      setActiveTab('all');
    }, 2000);
  };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Notice Circulars" 
      description="Administrative circulars, academic notices, and departmental broadcasts to students and faculty."
    >
      {/* Top Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'all', label: 'All Circulars (4)' },
          { key: 'create', label: '+ Broadcast New Notice' }
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

      {/* Tab: Create New Broadcast Notice */}
      {activeTab === 'create' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm max-w-2xl">
          <h3 className="text-base font-bold text-slate-800 mb-1">Compose Department Notice</h3>
          <p className="text-xs text-slate-500 mb-5">Broadcast will be pushed immediately to students' portal dashboards and SMS channels.</p>

          {isSuccess && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center gap-2">
              <CheckCircle2 size={16} className="text-emerald-600" />
              <span>Notice circular published successfully! Dispatched to {broadcastAudience}.</span>
            </div>
          )}

          <form onSubmit={handleBroadcast} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Notice Headline</label>
              <input
                type="text"
                required
                value={broadcastTitle}
                onChange={(e) => setBroadcastTitle(e.target.value)}
                placeholder="e.g. Extra Class Announcement for Machine Learning (CS701)"
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Target Audience</label>
                <select
                  value={broadcastAudience}
                  onChange={(e) => setBroadcastAudience(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                >
                  <option>My Enrolled Students (CS701 & CS703)</option>
                  <option>Assigned Mentees (24 Students)</option>
                  <option>All B.Tech CSE 7th Sem Students</option>
                  <option>CSE Department Faculty Roster</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Notice Priority</label>
                <select className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]">
                  <option>Academic Notice (Standard)</option>
                  <option>Urgent / Action Required</option>
                  <option>Informational Circular</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-600 mb-1">Circular Content</label>
              <textarea
                required
                rows={5}
                value={broadcastBody}
                onChange={(e) => setBroadcastBody(e.target.value)}
                placeholder="Write detailed announcement text..."
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50"
              >
                <Paperclip size={14} />
                <span>Attach PDF Document</span>
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all"
              >
                <Send size={14} />
                <span>Publish Broadcast</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab: All Circulars */}
      {activeTab === 'all' && (
        <div className="space-y-4">
          {circulars.map((c) => (
            <div key={c.id} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                    {c.id}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                    c.priority === 'Urgent' ? 'bg-red-100 text-red-700' :
                    c.priority === 'High' ? 'bg-amber-100 text-amber-800' :
                    'bg-purple-100 text-[#7c3aed]'
                  }`}>
                    {c.priority}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {c.category}
                  </span>
                </div>
                <span className="text-xs font-medium text-slate-400">{c.date}</span>
              </div>

              <div className="py-3">
                <h4 className="text-base font-bold text-slate-800 mb-1">{c.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{c.content}</p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
                <span>Issued By: <strong className="text-slate-700">{c.sender}</strong></span>
                <span className="bg-slate-50 px-2.5 py-1 rounded-lg border border-slate-100 font-medium">
                  Audience: {c.audience}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </CollegeLayout>
  );
}
