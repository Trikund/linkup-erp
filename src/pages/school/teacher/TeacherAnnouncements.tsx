import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Megaphone, 
  Send, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Users, 
  Calendar, 
  Paperclip, 
  FileText, 
  X,
  Bell,
  Download,
  AlertCircle
} from 'lucide-react';

interface NoticeItem {
  id: number;
  title: string;
  category: string;
  target: string;
  sender: string;
  date: string;
  time: string;
  content: string;
  acknowledgements?: string;
  attachment?: string;
  isImportant?: boolean;
}

export function TeacherAnnouncements() {
  const user = USERS.teacher;
  const [activeTab, setActiveTab] = useState<'broadcasts' | 'circulars'>('broadcasts');
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);
  const [broadcastSuccess, setBroadcastSuccess] = useState(false);

  // Broadcast modal form states
  const [targetAudience, setTargetAudience] = useState('Class 10-A (Parents & Students)');
  const [category, setCategory] = useState('Examination Announcement');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const myBroadcasts: NoticeItem[] = [
    {
      id: 1,
      title: 'Class 10-A Mid-Term Mathematics Syllabus Revision Scope',
      category: 'Exam Notice',
      target: 'Class 10-A (Parents & Students)',
      sender: 'Mrs. Ananya Sharma (Class Teacher)',
      date: '10 Oct 2026',
      time: '04:15 PM',
      content: 'Dear Parents & Students, Please note that Chapters 1 through 7 will be assessed in the upcoming CBSE Mid-Term Examination. Practice NCERT Exemplar questions for Quadratic Equations and Coordinate Geometry. Zero-period doubt sessions are held daily at 02:35 PM in Room 204.',
      acknowledgements: '41 / 42 Parents Confirmed (97.6%)',
      attachment: 'Class10A_Math_Syllabus_Blueprint.pdf',
      isImportant: true
    },
    {
      id: 2,
      title: 'Parent-Teacher Meeting (PTM) Appointment Schedule Dispatched',
      category: 'PTM Notice',
      target: 'Class 10-A Parents',
      sender: 'Mrs. Ananya Sharma (Class Teacher)',
      date: '08 Oct 2026',
      time: '02:30 PM',
      content: 'The Term 1 Parent-Teacher Meeting will take place this Saturday, 17th October from 08:30 AM to 01:00 PM in Room 204. Individual 10-minute time slots have been assigned in order of student roll numbers. Please bring student homework diaries and Term 1 test notebooks.',
      acknowledgements: '39 / 42 Parents Confirmed (92.8%)',
      attachment: 'PTM_TimeSlot_Roster_10A.pdf',
      isImportant: true
    },
    {
      id: 3,
      title: 'Submission Deadline for Mathematics Portfolio & Lab Journals',
      category: 'Assignment Alert',
      target: 'Class 10-A & 10-B Students',
      sender: 'Mrs. Ananya Sharma (Subject Teacher)',
      date: '05 Oct 2026',
      time: '11:00 AM',
      content: 'Reminder that internal assessment portfolios (20 Marks) must be handed in by Wednesday, 14th October. Ensure all practical models and graph sheets are countersigned by parents.',
      acknowledgements: '78 / 82 Students Confirmed (95.1%)',
      attachment: 'Portfolio_Guidelines_ClassX.pdf',
      isImportant: false
    }
  ];

  const staffCirculars: NoticeItem[] = [
    {
      id: 101,
      title: 'CBSE Mid-Term Question Paper Moderation & Printing Schedule',
      category: 'Exam Cell',
      target: 'All Department Faculty',
      sender: 'Academic Coordinator Desk',
      date: '11 Oct 2026',
      time: '09:30 AM',
      content: 'All Senior Subject Teachers must finalize question paper sets and bilingual translations by 15th October. The Moderation Committee meeting will convene in Conference Room B today at 03:00 PM.',
      attachment: 'Exam_Cell_Circular_October2026.pdf',
      isImportant: true
    },
    {
      id: 102,
      title: 'Annual Sports Day Committee Formation & Duty Allocations',
      category: 'Administration',
      target: 'All Teaching Faculty',
      sender: 'Principal Office',
      date: '07 Oct 2026',
      time: '01:15 PM',
      content: 'The 34th Annual Athletic Meet is scheduled for 14th November 2026. Staff members assigned to Track & Field scoring, March Past judging, and refreshment coordination are requested to attend the kickoff meeting.',
      attachment: 'Sports_Day_Duty_Chart.pdf',
      isImportant: false
    },
    {
      id: 103,
      title: 'National Mathematics Day Inter-School Olympiad Hosting',
      category: 'Department Circular',
      target: 'Mathematics Department',
      sender: 'HOD Mathematics',
      date: '03 Oct 2026',
      time: '12:00 PM',
      content: 'Greenfield Academy has been selected as the CBSE Nodal Center for the upcoming Aryabhata Ganit Challenge 2026. Mrs. Ananya Sharma is designated as Faculty In-Charge for student registrations.',
      attachment: 'Aryabhata_Olympiad_Guidelines.pdf',
      isImportant: false
    }
  ];

  const handleBroadcastSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowBroadcastModal(false);
    setBroadcastSuccess(true);
    setTimeout(() => {
      setBroadcastSuccess(false);
      setSubject('');
      setMessage('');
    }, 3000);
  };

  return (
    <SchoolLayout 
      role="teacher" 
      user={user}
      title="Announcements & Class Broadcasts"
      description="Publish official notices to your classes, monitor parent read-receipts, and review administrative staff circulars."
    >
      <div className="space-y-8">

        {broadcastSuccess && (
          <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-semibold animate-in fade-in duration-200">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>Class broadcast successfully dispatched! Parent mobile app notifications triggered.</span>
          </div>
        )}

        {/* TOP STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">My Active Broadcasts</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-blue-600">3 Notices</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">To Class 10-A & 10-B</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Parent Read Rate</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-emerald-600">96.4%</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">High acknowledgement</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-purple-600 uppercase tracking-wider">Staff Circulars</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl lg:text-4xl font-extrabold text-purple-700">3 Received</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">From Principal & Exam Cell</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <span className="text-sm font-bold text-amber-600 uppercase tracking-wider">Next PTM</span>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl lg:text-3xl font-extrabold text-slate-900">17 Oct</span>
            </div>
            <p className="text-sm text-slate-500 mt-1 font-medium">Saturday • Room 204</p>
          </div>
        </div>

        {/* CONTROLS & NEW BROADCAST BUTTON */}
        <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex border-b sm:border-b-0 border-slate-200 gap-6">
            <button
              onClick={() => setActiveTab('broadcasts')}
              className={`pb-3 sm:pb-0 text-base font-bold transition-all relative ${
                activeTab === 'broadcasts' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              My Class Broadcasts ({myBroadcasts.length})
              {activeTab === 'broadcasts' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>

            <button
              onClick={() => setActiveTab('circulars')}
              className={`pb-3 sm:pb-0 text-base font-bold transition-all relative ${
                activeTab === 'circulars' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              Staff & Institutional Circulars ({staffCirculars.length})
              {activeTab === 'circulars' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          </div>

          <button
            onClick={() => setShowBroadcastModal(true)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold transition shadow-sm flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Broadcast Notice to Class
          </button>
        </div>

        {/* TAB 1: MY CLASS BROADCASTS */}
        {activeTab === 'broadcasts' && (
          <div className="space-y-5">
            {myBroadcasts.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                        {item.target}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-700">
                        {item.category}
                      </span>
                      {item.isImportant && (
                        <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200">
                          High Priority
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  </div>

                  <span className="text-xs text-slate-400 font-medium shrink-0">
                    Dispatched: {item.date} at {item.time}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                  {item.content}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Parent Acknowledgements: <strong className="text-slate-900 font-bold">{item.acknowledgements}</strong></span>
                  </div>

                  {item.attachment && (
                    <button 
                      onClick={() => alert(`Downloading attachment: ${item.attachment}`)}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-blue-600 font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <Paperclip className="w-3.5 h-3.5" />
                      {item.attachment}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: STAFF CIRCULARS */}
        {activeTab === 'circulars' && (
          <div className="space-y-5">
            {staffCirculars.map((item) => (
              <div 
                key={item.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-md transition"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-purple-50 text-purple-700 border border-purple-200">
                        {item.sender}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-700">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  </div>

                  <span className="text-xs text-slate-400 font-medium shrink-0">
                    Received: {item.date} at {item.time}
                  </span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal bg-slate-50/70 p-4 rounded-xl border border-slate-100">
                  {item.content}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100 text-xs">
                  <span className="text-slate-500 font-medium">Audience: <strong>{item.target}</strong></span>

                  {item.attachment && (
                    <button 
                      onClick={() => alert(`Downloading circular document: ${item.attachment}`)}
                      className="px-3.5 py-1.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition flex items-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" />
                      {item.attachment}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MODAL: BROADCAST NOTICE TO CLASS */}
        {showBroadcastModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-7 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200 space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Broadcast Notice to Class</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Sends instantaneous mobile push alert & SMS broadcast to parents.</p>
                </div>
                <button onClick={() => setShowBroadcastModal(false)} className="text-slate-400 hover:text-slate-600">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleBroadcastSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Target Audience</label>
                  <select 
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                  >
                    <option>Class 10-A (Parents & Students)</option>
                    <option>Class 10-B (Mathematics Students)</option>
                    <option>Class 9-B (Mathematics Students)</option>
                    <option>All Mathematics Classes (184 Students)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-800"
                  >
                    <option>Examination Announcement</option>
                    <option>Homework / Project Deadline</option>
                    <option>PTM Schedule Notice</option>
                    <option>Olympiad / Competition Registration</option>
                    <option>General Classroom Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Subject / Notice Title</label>
                  <input 
                    type="text"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Mid-Term Formula Revision Notes & Doubt Clinic Schedule"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Announcement Content</label>
                  <textarea 
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Compose complete notice message clearly outlining dates, venue, requirements, and instructions..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowBroadcastModal(false)}
                    className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-sm"
                  >
                    Send Broadcast Alert
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
