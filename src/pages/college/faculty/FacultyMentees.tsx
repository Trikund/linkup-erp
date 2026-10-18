import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  UserCheck, Users, Calendar, MessageSquare, Phone, 
  Mail, AlertCircle, Plus, CheckCircle2, ChevronRight, 
  ExternalLink, Search, Clock, Save
} from 'lucide-react';

interface Mentee {
  rollNo: string;
  name: string;
  cgpa: number;
  attendance: number;
  careerGoal: string;
  placementStatus: string;
  lastMeeting: string;
  notes: string;
  flagged: boolean;
}

export function FacultyMentees() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };

  const [selectedMentee, setSelectedMentee] = useState<Mentee | null>(null);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingNotes, setMeetingNotes] = useState('');
  const [savedMeeting, setSavedMeeting] = useState(false);

  const menteesList: Mentee[] = [
    {
      rollNo: '21CS1048',
      name: 'Shivam Sharma',
      cgpa: 8.42,
      attendance: 86.4,
      careerGoal: 'Full-Stack Enterprise Architect / Cloud Engineer',
      placementStatus: 'Placed • CloudScale Tech (₹14.5 LPA)',
      lastMeeting: '12 Oct 2026',
      notes: 'Active in LinkUp ERP project development. Advised to complete AWS Certified Solutions Architect certification before final sem.',
      flagged: false
    },
    {
      rollNo: '21CS1012',
      name: 'Priya Sundaram',
      cgpa: 9.18,
      attendance: 94.2,
      careerGoal: 'M.Tech / Ph.D. Research in Deep Learning',
      placementStatus: 'Opting for Higher Studies (GATE CSE Prep)',
      lastMeeting: '08 Oct 2026',
      notes: 'Writing research paper on attention models for IEEE INDICON 2026. Mock interview scheduled.',
      flagged: false
    },
    {
      rollNo: '21CS1045',
      name: 'Rahul Verma',
      cgpa: 7.15,
      attendance: 68.2,
      careerGoal: 'Software Development Engineer',
      placementStatus: 'Eligible for Phase 2 Campus Drives',
      lastMeeting: '15 Oct 2026',
      notes: 'Attendance dip due to medical illness in September. Medical certificate verified. Assigned to Saturday remedial session.',
      flagged: true
    },
    {
      rollNo: '21CS1034',
      name: 'Ananya Roy',
      cgpa: 8.65,
      attendance: 88.5,
      careerGoal: 'Product Management & AI Systems',
      placementStatus: 'Intern at Fintech Labs (PPO Evaluation)',
      lastMeeting: '05 Oct 2026',
      notes: 'Requested letter of recommendation for foreign internships. Letter drafted and signed.',
      flagged: false
    },
    {
      rollNo: '21CS1092',
      name: 'Divya Khurana',
      cgpa: 8.92,
      attendance: 91.0,
      careerGoal: 'Data Scientist / ML Engineer',
      placementStatus: 'Placed • QuantMatrix (₹18.0 LPA)',
      lastMeeting: '10 Oct 2026',
      notes: 'Reviewed Capstone Sprint 2 deliverables. Performance is exemplary.',
      flagged: false
    }
  ];

  const handleSaveCounseling = () => {
    setSavedMeeting(true);
    setTimeout(() => {
      setSelectedMentee(null);
      setSavedMeeting(false);
      setMeetingNotes('');
    }, 1500);
  };

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Mentee Counseling" 
      description="UGC/AICTE Faculty-Student Mentorship Scheme • 24 assigned undergraduate engineering wards."
    >
      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Assigned Mentees</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">24 Students</p>
          <p className="text-[10px] text-[#7c3aed] font-semibold">B.Tech CSE 2023-27</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Batch Avg CGPA</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">8.35 / 10</p>
          <p className="text-[10px] text-slate-500">Above college benchmark</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Need Attention</p>
          <p className="text-xl font-black text-red-600 mt-0.5">2 Flagged</p>
          <p className="text-[10px] text-red-600 font-semibold">Attendance & Backlog risk</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Campus Placed</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">18 / 24 Placed</p>
          <p className="text-[10px] text-purple-700 font-semibold">75% Conversion Rate</p>
        </div>
      </div>

      {/* Mentees Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {menteesList.map((m) => (
          <div key={m.rollNo} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-sm">
                    {m.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 flex items-center gap-2">
                      <span>{m.name}</span>
                      {m.flagged && (
                        <span className="px-2 py-0.5 text-[9px] font-black uppercase tracking-wider bg-red-100 text-red-700 rounded">
                          Attention
                        </span>
                      )}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">{m.rollNo}</p>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-black text-slate-900 block">CGPA: {m.cgpa}</span>
                  <span className={`text-[11px] font-bold ${m.attendance < 75 ? 'text-red-600' : 'text-emerald-600'}`}>
                    Att: {m.attendance}%
                  </span>
                </div>
              </div>

              <div className="py-3 space-y-2 text-xs text-slate-600">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Career Objective</span>
                  <span className="font-semibold text-slate-800">{m.careerGoal}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase block">Placement / Higher Studies</span>
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px]">
                    {m.placementStatus}
                  </span>
                </div>
                <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Last Counseling Note ({m.lastMeeting})</span>
                  <p className="text-xs text-slate-700 mt-1 italic">"{m.notes}"</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-medium">Next session: Bi-weekly cycle</span>
              <button
                onClick={() => setSelectedMentee(m)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#7c3aed] text-xs font-bold transition-all"
              >
                <MessageSquare size={13} />
                <span>Log 1-on-1 Session</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Counseling Modal */}
      {selectedMentee && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-100">
            <div className="flex justify-between items-center pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-slate-800">Record Mentorship Session</h4>
                <p className="text-xs text-slate-500">{selectedMentee.name} ({selectedMentee.rollNo})</p>
              </div>
              <button onClick={() => setSelectedMentee(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            {savedMeeting ? (
              <div className="py-8 text-center">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={24} />
                </div>
                <h5 className="font-bold text-slate-800">Counseling Log Saved!</h5>
                <p className="text-xs text-slate-500 mt-1">Updated in student ERP record and dean quarterly report.</p>
              </div>
            ) : (
              <div className="py-4 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Session Date</label>
                  <input
                    type="date"
                    defaultValue="2026-10-19"
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Topic / Discussion Category</label>
                  <select className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]">
                    <option>Academic Performance & Attendance</option>
                    <option>Placement Preparation & Mock Tech Interview</option>
                    <option>Higher Studies / GRE / GATE Guidance</option>
                    <option>Personal Counseling & Stress Management</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Faculty Observations & Action Plan</label>
                  <textarea
                    rows={4}
                    value={meetingNotes}
                    onChange={(e) => setMeetingNotes(e.target.value)}
                    placeholder="Enter key takeaways, targets for next month, recommendations..."
                    className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
                  />
                </div>

                <div className="flex gap-2 pt-2">
                  <button
                    onClick={() => setSelectedMentee(null)}
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveCounseling}
                    className="flex-1 py-2 text-xs font-bold rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <Save size={14} />
                    <span>Save to Dossier</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </CollegeLayout>
  );
}
