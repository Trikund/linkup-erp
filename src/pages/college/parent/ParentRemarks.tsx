import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  MessageSquare, User, Calendar, Phone, Mail, 
  CheckCircle2, Send, Clock, ShieldCheck, ArrowRight
} from 'lucide-react';

export function ParentRemarks() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };
  const [meetingRequested, setMeetingRequested] = useState(false);
  const [preferredDate, setPreferredDate] = useState('');
  const [meetingTopic, setMeetingTopic] = useState('Academic Progress & Final Semester Strategy');
  const [parentNote, setParentNote] = useState('');

  const handleRequestMeeting = (e: React.FormEvent) => {
    e.preventDefault();
    setMeetingRequested(true);
    setTimeout(() => {
      setMeetingRequested(false);
      setParentNote('');
    }, 3500);
  };

  const remarksList = [
    {
      id: 'REM-101',
      author: 'Dr. Ankit Sharma',
      designation: 'Professor & Head of Department (CSE) • Official Mentor',
      date: '15 Oct 2026',
      tag: 'Mentorship Observation',
      text: 'Shivam is performing exceptionally well in laboratory sessions and has demonstrated exemplary initiative as team leader for the LinkUp ERP Capstone Project. His attendance is consistently healthy at 86.4%. Advised to maintain consistent revision for the upcoming End-Semester Theory examinations.'
    },
    {
      id: 'REM-102',
      author: 'Prof. Sneha Kulkarni',
      designation: 'Assistant Professor (Senior Grade) • Cloud Computing',
      date: '10 Oct 2026',
      tag: 'Subject Commendation',
      text: 'Demonstrated rapid troubleshooting during live Kubernetes container deployment. Submitted all lab manuals well ahead of the deadline.'
    },
    {
      id: 'REM-103',
      author: 'Mr. Vikramaditya Sen',
      designation: 'Director, Training & Placement Cell (T&P)',
      date: '12 Oct 2026',
      tag: 'Corporate Placement',
      text: 'Hearty congratulations to the parents! Shivam cleared all 4 rounds of CloudScale Technologies evaluation with distinction and received a Dream Offer of ₹14.50 LPA.'
    }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Faculty Mentor Remarks" 
      description="Direct academic observations, behavioral mentorship logs, and parent-teacher communication channel."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols): Remarks Feed */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
            <h3 className="text-base font-bold text-slate-800 mb-1">Official Faculty & Mentor Feedback Log</h3>
            <p className="text-xs text-slate-500 mb-6">Verified remarks posted by department faculty and academic mentors.</p>

            <div className="space-y-4">
              {remarksList.map((r) => (
                <div key={r.id} className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-purple-200 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200/60 mb-3">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{r.author}</h4>
                      <p className="text-xs text-slate-500">{r.designation}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-[#7c3aed]">
                        {r.tag}
                      </span>
                      <span className="text-[11px] text-slate-400 font-medium">{r.date}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{r.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Request Meeting Form */}
        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                <Calendar size={16} />
              </div>
              <h4 className="text-sm font-bold text-slate-800">Schedule Mentor Discussion</h4>
            </div>
            <p className="text-xs text-slate-500 mb-4">Request a telephonic or virtual Google Meet consultation with Dr. Ankit Sharma.</p>

            {meetingRequested && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl text-xs font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                <span>Consultation request submitted! The faculty office will confirm time slot via SMS.</span>
              </div>
            )}

            <form onSubmit={handleRequestMeeting} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-slate-600 mb-1">Preferred Consultation Date</label>
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1">Discussion Subject</label>
                <select
                  value={meetingTopic}
                  onChange={(e) => setMeetingTopic(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                >
                  <option>Academic Progress & Final Semester Strategy</option>
                  <option>Placement & Joining Clearance</option>
                  <option>Higher Studies / GATE Guidance</option>
                  <option>Hostel / Personal Wellbeing</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-600 mb-1">Specific Query / Note for Faculty</label>
                <textarea
                  rows={3}
                  value={parentNote}
                  onChange={(e) => setParentNote(e.target.value)}
                  placeholder="Mention any specific points you would like to discuss..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white font-bold shadow-sm transition-all flex items-center justify-center gap-1.5"
              >
                <Send size={13} />
                <span>Request Mentor Appointment</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
