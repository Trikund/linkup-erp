import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Bell, 
  AlertTriangle, 
  BookOpen, 
  Calendar, 
  FileText, 
  CheckCheck, 
  Search, 
  Download, 
  ChevronRight, 
  ChevronDown, 
  Pin,
  Clock,
  Sparkles
} from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  category: 'Academic' | 'Events' | 'Fee & Admin' | 'Urgent';
  department: string;
  author: string;
  date: string;
  timestamp: string;
  isRead: boolean;
  isPinned?: boolean;
  content: string;
  attachment?: {
    name: string;
    size: string;
    type: string;
  };
}

export function StudentNotifications() {
  const user = USERS.student;
  const [filter, setFilter] = useState<'All' | 'Academic' | 'Events' | 'Fee & Admin' | 'Urgent'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>('NOTIF-2026-101');

  const [notices, setNotices] = useState<Notice[]>([
    {
      id: 'NOTIF-2026-101',
      title: 'Mid-Term Examination 2026 Datesheet & Syllabus Scope',
      category: 'Urgent',
      department: 'Office of the Examination Controller',
      author: 'Mr. Anand Saxena (Exam Controller)',
      date: '11 Oct 2026',
      timestamp: '2 hours ago',
      isRead: false,
      isPinned: true,
      content: 'The official datesheet for the upcoming Mid-Term Examinations commencing from 15th October 2026 has been published. All students of Class X are required to carry their physical Hall Ticket and school ID card to the exam hall. Please review syllabus scope chapters in Mathematics and Science attached below.',
      attachment: {
        name: 'MidTerm_Datesheet_ClassX_Oct2026.pdf',
        size: '1.8 MB',
        type: 'PDF'
      }
    },
    {
      id: 'NOTIF-2026-102',
      title: 'Quarter 3 Institutional Fee Submission Due Date Notice',
      category: 'Fee & Admin',
      department: 'Accounts & Bursar Department',
      author: 'Mr. R. K. Singhania (Chief Bursar)',
      date: '09 Oct 2026',
      timestamp: '2 days ago',
      isRead: false,
      content: 'This is a gentle reminder that the installment for Quarter 3 (October – December 2026) is due on or before 15th November 2026. Payment receipts can be directly downloaded from the student portal after online settlement via UPI or Net Banking.',
      attachment: {
        name: 'Q3_Fee_Schedule_2026_27.pdf',
        size: '640 KB',
        type: 'PDF'
      }
    },
    {
      id: 'NOTIF-2026-103',
      title: 'Annual Inter-School Science Fair & Robotic Sprint 2026',
      category: 'Events',
      department: 'Science & Innovation Club',
      author: 'Dr. Ramesh Kumar (Science HOD)',
      date: '07 Oct 2026',
      timestamp: '4 days ago',
      isRead: true,
      isPinned: true,
      content: 'DPS International will host the 14th Annual Science Fair on November 4th and 5th. Interested students from Grades IX to XII who wish to register their models or autonomous robotics submissions must submit project abstracts to Room 204 before October 20th.',
      attachment: {
        name: 'Science_Fair_Guidelines_2026.pdf',
        size: '2.4 MB',
        type: 'PDF'
      }
    },
    {
      id: 'NOTIF-2026-104',
      title: 'Special Extra Classes for Board Mathematics Preparations',
      category: 'Academic',
      department: 'Department of Mathematics',
      author: 'Mr. Rajesh Verma (Senior PGT)',
      date: '05 Oct 2026',
      timestamp: '6 days ago',
      isRead: true,
      content: 'To support students in mastering Coordinate Geometry and Quadratic Equations, zero-hour revision classes will take place every Tuesday and Thursday between 7:45 AM and 8:30 AM in Room 204.',
    },
    {
      id: 'NOTIF-2026-105',
      title: 'Mandatory Winter Uniform Transition Guidelines',
      category: 'Fee & Admin',
      department: 'Student Welfare & Discipline Board',
      author: 'Mrs. Sunita Roy (Dean of Students)',
      date: '01 Oct 2026',
      timestamp: '10 days ago',
      isRead: true,
      content: 'All students are requested to switch to the winter school uniform starting Monday, 3rd November 2026. Navy blue institutional blazers with school crest and navy sweaters are mandatory. Authorized uniform tuck-shop hours are 8:00 AM to 3:00 PM.',
      attachment: {
        name: 'Winter_Uniform_Specifications.pdf',
        size: '980 KB',
        type: 'PDF'
      }
    },
    {
      id: 'NOTIF-2026-106',
      title: 'CBSE Regional Athletic & Badminton Championship Selection',
      category: 'Events',
      department: 'Department of Physical Education',
      author: 'Coach V. Raman (Sports Director)',
      date: '28 Sep 2026',
      timestamp: '2 weeks ago',
      isRead: true,
      content: 'Final selection trials for the CBSE Regional Badminton and Sprint events will be conducted at the Main Sports Complex this Saturday at 9:00 AM. Eligible students should register with Coach Raman in sports kit.',
    }
  ]);

  const markAllAsRead = () => {
    setNotices(notices.map(n => ({ ...n, isRead: true })));
  };

  const toggleReadStatus = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotices(notices.map(n => n.id === id ? { ...n, isRead: !n.isRead } : n));
  };

  const filteredNotices = notices.filter(n => {
    const matchesCategory = filter === 'All' || n.category === filter;
    const matchesSearch = n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          n.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          n.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const unreadCount = notices.filter(n => !n.isRead).length;

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Circulars & Notifications"
      description="Official institutional announcements, examination schedules, event invitations, and administrative circulars."
    >
      <div className="space-y-6">

        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">All Circulars</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Bell className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl font-extrabold text-slate-900 mt-3">{notices.length}</p>
            <p className="text-xs text-slate-500 mt-1">Active institutional notices</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Unread Notices</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Clock className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl font-extrabold text-amber-600 mt-3">{unreadCount}</p>
            <p className="text-xs text-slate-500 mt-1">Requires your attention</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Urgent Alerts</span>
              <span className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <AlertTriangle className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl font-extrabold text-rose-600 mt-3">
              {notices.filter(n => n.category === 'Urgent').length}
            </p>
            <p className="text-xs text-slate-500 mt-1">Examinations & Deadlines</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</span>
              <p className="text-xs text-slate-500 mt-1">Mark all notices as acknowledged</p>
            </div>
            <button
              onClick={markAllAsRead}
              disabled={unreadCount === 0}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs font-semibold rounded-xl transition shadow-sm"
            >
              <CheckCheck className="w-4 h-4" />
              Mark All As Read
            </button>
          </div>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
            {(['All', 'Urgent', 'Academic', 'Events', 'Fee & Admin'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-xl whitespace-nowrap transition ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {cat} {cat === 'Urgent' && unreadCount > 0 && `(${notices.filter(n => n.category === 'Urgent' && !n.isRead).length})`}
              </button>
            ))}
          </div>

          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search circulars by keyword..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotices.length === 0 ? (
            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center">
              <Bell className="w-10 h-10 text-slate-300 mx-auto mb-3" />
              <p className="text-sm font-bold text-slate-700">No circulars found</p>
              <p className="text-xs text-slate-500 mt-1">Try modifying your filter or search keywords.</p>
            </div>
          ) : (
            filteredNotices.map((notice) => {
              const isExpanded = expandedId === notice.id;

              return (
                <div
                  key={notice.id}
                  onClick={() => setExpandedId(isExpanded ? null : notice.id)}
                  className={`bg-white border rounded-2xl transition cursor-pointer shadow-[0_2px_10px_rgba(0,0,0,0.02)] ${
                    !notice.isRead 
                      ? 'border-blue-200 bg-blue-50/20' 
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3.5">
                        <div className="mt-0.5">
                          {notice.category === 'Urgent' ? (
                            <span className="p-2 rounded-xl bg-rose-50 text-rose-600 block">
                              <AlertTriangle className="w-5 h-5" />
                            </span>
                          ) : notice.category === 'Academic' ? (
                            <span className="p-2 rounded-xl bg-blue-50 text-blue-600 block">
                              <BookOpen className="w-5 h-5" />
                            </span>
                          ) : notice.category === 'Events' ? (
                            <span className="p-2 rounded-xl bg-emerald-50 text-emerald-600 block">
                              <Calendar className="w-5 h-5" />
                            </span>
                          ) : (
                            <span className="p-2 rounded-xl bg-purple-50 text-purple-600 block">
                              <FileText className="w-5 h-5" />
                            </span>
                          )}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            {notice.isPinned && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                                <Pin className="w-3 h-3 fill-amber-800" />
                                Pinned
                              </span>
                            )}
                            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                              notice.category === 'Urgent' ? 'bg-rose-100 text-rose-700' :
                              notice.category === 'Academic' ? 'bg-blue-100 text-blue-700' :
                              notice.category === 'Events' ? 'bg-emerald-100 text-emerald-700' :
                              'bg-purple-100 text-purple-700'
                            }`}>
                              {notice.category}
                            </span>
                            <span className="text-xs text-slate-400">• {notice.timestamp}</span>
                            {!notice.isRead && (
                              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            )}
                          </div>

                          <h3 className="text-base font-bold text-slate-900 mt-1.5">{notice.title}</h3>
                          <p className="text-xs text-slate-500 mt-1">
                            Issued by <span className="font-semibold text-slate-700">{notice.author}</span> • {notice.department}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={(e) => toggleReadStatus(notice.id, e)}
                          title={notice.isRead ? "Mark as unread" : "Mark as read"}
                          className={`p-1.5 rounded-lg text-xs font-semibold transition ${
                            notice.isRead 
                              ? 'text-slate-400 hover:text-slate-600 hover:bg-slate-100' 
                              : 'text-blue-600 hover:text-blue-800 bg-blue-50'
                          }`}
                        >
                          <CheckCheck className="w-4 h-4" />
                        </button>
                        <div className="text-slate-400 p-1">
                          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                        </div>
                      </div>
                    </div>

                    {/* EXPANDED CONTENT VIEW */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                        <div className="bg-slate-50/70 rounded-xl p-4 text-xs text-slate-700 leading-relaxed font-normal">
                          {notice.content}
                        </div>

                        {notice.attachment && (
                          <div className="mt-3 flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl">
                            <div className="flex items-center gap-3">
                              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <FileText className="w-4 h-4" />
                              </span>
                              <div>
                                <p className="text-xs font-bold text-slate-800">{notice.attachment.name}</p>
                                <p className="text-[10px] text-slate-400">{notice.attachment.type} Document • {notice.attachment.size}</p>
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(`Downloading circular attachment: ${notice.attachment?.name}`);
                              }}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition"
                            >
                              <Download className="w-3.5 h-3.5" />
                              Download
                            </button>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </SchoolLayout>
  );
}
