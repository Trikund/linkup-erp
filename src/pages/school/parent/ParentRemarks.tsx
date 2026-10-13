import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  MessageSquare, ThumbsUp, AlertTriangle, Sparkles, User, 
  Calendar, CheckCircle, Send, Filter, Clock, ChevronRight, X
} from 'lucide-react';

interface RemarkItem {
  id: string;
  childId: 'rahul' | 'ananya';
  teacherName: string;
  teacherRole: string;
  subject: string;
  date: string;
  type: 'appreciation' | 'attention' | 'conduct' | 'cocurricular';
  title: string;
  content: string;
  recommendation: string;
  isAcknowledged: boolean;
  acknowledgedDate?: string;
  parentReply?: string;
}

const mockRemarks: RemarkItem[] = [
  {
    id: 'REM-101',
    childId: 'rahul',
    teacherName: 'Mrs. Ananya Sharma',
    teacherRole: 'Class 10-A Mentor & PGT Mathematics',
    subject: 'Mathematics',
    date: '10 Oct 2026',
    type: 'appreciation',
    title: 'Exemplary Peer Tutoring in Quadratic Formulas',
    content: 'Rahul demonstrated exceptional clarity during our problem-solving seminar today. Beyond solving the tough exemplar questions himself, he patiently assisted two peer classmates in understanding quadratic roots derivation.',
    recommendation: 'Encourage him to attempt the Ramanujan Inter-School Mathematics Olympiad application next month.',
    isAcknowledged: true,
    acknowledgedDate: '10 Oct 2026, 06:30 PM',
    parentReply: 'Thank you Mrs. Sharma! We have enrolled him in the mock Olympiad test series as recommended.',
  },
  {
    id: 'REM-102',
    childId: 'rahul',
    teacherName: 'Dr. Rajesh Sen',
    teacherRole: 'PGT Physics',
    subject: 'Science (Physics)',
    date: '04 Oct 2026',
    type: 'attention',
    title: 'Precision in Circuit Diagram Labelling',
    content: 'Rahul scored well in the theoretical concepts of Ohm’s law, but his practical lab observations lacked arrows indicating conventional current flow. Minor precision issues cost him marks.',
    recommendation: 'Please ensure he uses a sharp 2B pencil and strict arrow conventions for all CBSE practical schematic records.',
    isAcknowledged: true,
    acknowledgedDate: '05 Oct 2026, 09:12 AM',
  },
  {
    id: 'REM-103',
    childId: 'rahul',
    teacherName: 'Coach R.S. Rana',
    teacherRole: 'Head of Physical Education & Sports',
    subject: 'Physical Education',
    date: '28 Sep 2026',
    type: 'cocurricular',
    title: 'Match-Winning Knock in Zonal Cricket Tournament',
    content: 'Rahul led the Junior School Cricket XI with calm leadership and struck 48 runs not out against St. Xavier’s Academy. His sportsmanship and discipline on the field were commendable.',
    recommendation: 'He needs to stay hydrated and maintain proper stretching post-match exercises.',
    isAcknowledged: true,
    acknowledgedDate: '29 Sep 2026, 08:00 AM',
  },
  {
    id: 'REM-104',
    childId: 'rahul',
    teacherName: 'Ms. Pooja Nair',
    teacherRole: 'TGT English Literature',
    subject: 'English',
    date: '18 Sep 2026',
    type: 'attention',
    title: 'Vocabulary Expansion & Time Management in Formal Letters',
    content: 'Rahul takes slightly longer to structure his opening paragraphs for formal editorial letters. If he works on drafting templates faster, he will save at least 10 minutes in the CBSE board exam.',
    recommendation: 'Have him write one 120-word formal letter weekly under a strict 15-minute timer at home.',
    isAcknowledged: false,
  },
  // Ananya Remarks
  {
    id: 'REM-201',
    childId: 'ananya',
    teacherName: 'Mrs. Neha Batra',
    teacherRole: 'Class 7-B Mentor & TGT Science',
    subject: 'General Science',
    date: '08 Oct 2026',
    type: 'appreciation',
    title: 'Ingenious 3D Plant Cell Clay Model',
    content: 'Ananya created one of the best biological models in Class 7-B. Her explanation of cell organelle functions was lucid, confident, and very well articulated in front of the whole class.',
    recommendation: 'Keep encouraging her curious scientific spirit and exploration of nature.',
    isAcknowledged: true,
    acknowledgedDate: '09 Oct 2026, 11:20 AM',
    parentReply: 'She spent the entire weekend sculpting it! We are glad it went so well. Thanks Mrs. Batra!',
  },
  {
    id: 'REM-202',
    childId: 'ananya',
    teacherName: 'Ms. Radhika',
    teacherRole: 'Visual Arts Instructor',
    subject: 'Fine Arts',
    date: '01 Oct 2026',
    type: 'cocurricular',
    title: 'First Prize in District Watercolor Landscape Meet',
    content: 'Ananya represented DPS brilliantly at the District Inter-School Art Festival, winning First Prize for her depiction of Rural Sunrise. Her color blending technique is far ahead of her age.',
    recommendation: 'Nominated for the State Children Art Fellowship in December.',
    isAcknowledged: true,
    acknowledgedDate: '02 Oct 2026, 04:15 PM',
  },
  {
    id: 'REM-203',
    childId: 'ananya',
    teacherName: 'Mr. Vivek Saxena',
    teacherRole: 'TGT Mathematics',
    subject: 'Mathematics',
    date: '22 Sep 2026',
    type: 'attention',
    title: 'Practice Needed in Mixed Fraction Division',
    content: 'Ananya understands addition and multiplication of fractions very well, but occasionally reverses the reciprocal during complex division operations.',
    recommendation: '10 practice questions on fraction reciprocals recommended every alternate day.',
    isAcknowledged: false,
  },
];

export const ParentRemarks: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [filterType, setFilterType] = useState<string>('all');
  const [remarksList, setRemarksList] = useState<RemarkItem[]>(mockRemarks);
  const [replyModalRemark, setReplyModalRemark] = useState<RemarkItem | null>(null);
  const [replyText, setReplyText] = useState('');

  const childRemarks = remarksList.filter(r => r.childId === selectedChild);
  const filteredRemarks = childRemarks.filter(r => {
    if (filterType === 'all') return true;
    return r.type === filterType;
  });

  const handleAcknowledge = (id: string) => {
    setRemarksList(prev => prev.map(item => {
      if (item.id === id) {
        return {
          ...item,
          isAcknowledged: true,
          acknowledgedDate: 'Just now (by Mrs. Priya Sharma)',
        };
      }
      return item;
    }));
  };

  const handleSendReply = () => {
    if (!replyModalRemark || !replyText.trim()) return;
    setRemarksList(prev => prev.map(item => {
      if (item.id === replyModalRemark.id) {
        return {
          ...item,
          isAcknowledged: true,
          acknowledgedDate: item.acknowledgedDate || 'Just now (by Mrs. Priya Sharma)',
          parentReply: replyText,
        };
      }
      return item;
    }));
    setReplyModalRemark(null);
    setReplyText('');
  };

  const appreciationCount = childRemarks.filter(r => r.type === 'appreciation' || r.type === 'cocurricular').length;
  const attentionCount = childRemarks.filter(r => r.type === 'attention').length;

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Teacher Observations & Behavioral Diary"
      description="Official teacher notes on academic aptitude, study habits, classroom decorum, sports achievements, and home guidance."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Teacher Observations & Behavioral Diary</h1>
          <p className="text-sm text-gray-600 mt-1">
            Official teacher notes on academic aptitude, study habits, classroom decorum, sports achievements, and home guidance.
          </p>
        </div>

        {/* Child Selector */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => setSelectedChild('rahul')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => setSelectedChild('ananya')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Recorded Remarks</span>
            <div className="text-2xl font-bold text-gray-900 mt-1">{childRemarks.length} Notes</div>
            <div className="text-xs text-gray-500 mt-0.5">Session 2026-27 Diary</div>
          </div>
          <span className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><MessageSquare className="w-6 h-6" /></span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">Appreciations & Awards</span>
            <div className="text-2xl font-bold text-emerald-600 mt-1">{appreciationCount} Commendations</div>
            <div className="text-xs text-emerald-700 font-medium mt-0.5">Academic & co-curricular praise</div>
          </div>
          <span className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><ThumbsUp className="w-6 h-6" /></span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs font-semibold text-amber-700 uppercase tracking-wider">Focus Areas / Action Needed</span>
            <div className="text-2xl font-bold text-amber-600 mt-1">{attentionCount} Recommendations</div>
            <div className="text-xs text-amber-700 font-medium mt-0.5">Home study advice</div>
          </div>
          <span className="p-3 bg-amber-50 text-amber-600 rounded-xl"><AlertTriangle className="w-6 h-6" /></span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2 overflow-x-auto text-xs">
        <button
          onClick={() => setFilterType('all')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
            filterType === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Remarks ({childRemarks.length})
        </button>
        <button
          onClick={() => setFilterType('appreciation')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
            filterType === 'appreciation' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Appreciations ({childRemarks.filter(r => r.type === 'appreciation').length})
        </button>
        <button
          onClick={() => setFilterType('attention')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
            filterType === 'attention' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Attention Required ({childRemarks.filter(r => r.type === 'attention').length})
        </button>
        <button
          onClick={() => setFilterType('cocurricular')}
          className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
            filterType === 'cocurricular' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Sports & Talent ({childRemarks.filter(r => r.type === 'cocurricular').length})
        </button>
      </div>

      {/* Remarks Timeline Cards List */}
      <div className="space-y-4">
        {filteredRemarks.map((remark) => (
          <div key={remark.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4 hover:border-gray-300 transition-all">
            {/* Header: Teacher Profile & Date */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                  {remark.teacherName.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-gray-900">{remark.teacherName}</h3>
                  <p className="text-xs text-gray-500">{remark.teacherRole} • <strong>{remark.subject}</strong></p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                  remark.type === 'appreciation' ? 'bg-emerald-50 text-emerald-700' :
                  remark.type === 'attention' ? 'bg-amber-50 text-amber-700' :
                  remark.type === 'cocurricular' ? 'bg-purple-50 text-purple-700' :
                  'bg-blue-50 text-blue-700'
                }`}>
                  {remark.type === 'appreciation' && <ThumbsUp className="w-3.5 h-3.5" />}
                  {remark.type === 'attention' && <AlertTriangle className="w-3.5 h-3.5" />}
                  {remark.type === 'cocurricular' && <Sparkles className="w-3.5 h-3.5" />}
                  {remark.type.toUpperCase()}
                </span>
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {remark.date}
                </span>
              </div>
            </div>

            {/* Remark Content */}
            <div className="space-y-2">
              <h4 className="text-base font-bold text-gray-900">{remark.title}</h4>
              <p className="text-sm text-gray-700 leading-relaxed bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                "{remark.content}"
              </p>
            </div>

            {/* Recommendation Box */}
            <div className="p-3 bg-indigo-50/50 rounded-lg border border-indigo-100 text-xs">
              <span className="font-bold text-indigo-900 block mb-0.5">Teacher's Recommended Action for Parents:</span>
              <span className="text-indigo-800">{remark.recommendation}</span>
            </div>

            {/* Parent Reply Thread (if any) */}
            {remark.parentReply && (
              <div className="p-3 bg-emerald-50/60 rounded-lg border border-emerald-100 text-xs space-y-1">
                <div className="font-bold text-emerald-900 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" /> Parent's Response (Mrs. Priya Sharma)
                </div>
                <p className="text-emerald-800 italic">"{remark.parentReply}"</p>
              </div>
            )}

            {/* Footer Actions: Acknowledged pill or Action buttons */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-gray-100">
              {remark.isAcknowledged ? (
                <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>Acknowledged by Parent: {remark.acknowledgedDate}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 text-xs text-amber-700 font-semibold">
                  <Clock className="w-4 h-4 text-amber-500" />
                  <span>Pending parent acknowledgment</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                {!remark.isAcknowledged && (
                  <button
                    onClick={() => handleAcknowledge(remark.id)}
                    className="px-3 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-semibold hover:bg-emerald-700 transition-colors flex items-center gap-1"
                  >
                    <CheckCircle className="w-3.5 h-3.5" /> Acknowledge Note
                  </button>
                )}
                <button
                  onClick={() => setReplyModalRemark(remark)}
                  className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50 transition-colors flex items-center gap-1"
                >
                  <Send className="w-3.5 h-3.5" /> {remark.parentReply ? 'Edit Reply' : 'Reply to Teacher'}
                </button>
              </div>
            </div>
          </div>
        ))}

        {filteredRemarks.length === 0 && (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
            No remarks found under the selected category.
          </div>
        )}
      </div>

      {/* Reply Modal */}
      {replyModalRemark && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-sm font-bold">Reply to Teacher</h3>
                <p className="text-xs text-indigo-200">To: {replyModalRemark.teacherName} ({replyModalRemark.subject})</p>
              </div>
              <button 
                onClick={() => setReplyModalRemark(null)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              <div className="bg-gray-50 p-3 rounded-lg text-xs text-gray-600">
                <span className="font-semibold text-gray-800">Regarding Remark:</span> "{replyModalRemark.title}"
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase">Your Message as Parent</label>
                <textarea
                  rows={4}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Dear Teacher, thank you for informing us. We have discussed this with our child and..."
                  className="w-full p-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  onClick={() => setReplyModalRemark(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendReply}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-semibold hover:bg-indigo-700 flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" /> Send Reply to Teacher
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </SchoolLayout>
  );
};
