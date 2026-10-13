import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Bell, AlertTriangle, FileText, Download, Calendar, 
  CheckCircle2, Search, Filter, ShieldAlert, Bus, BookOpen, Clock
} from 'lucide-react';

interface CircularNotice {
  id: string;
  refNo: string;
  title: string;
  category: 'urgent' | 'academic' | 'transport' | 'admin';
  issuedBy: string;
  date: string;
  targetAudience: string;
  summary: string;
  attachment?: string;
  isUnread: boolean;
}

const initialCirculars: CircularNotice[] = [
  {
    id: 'CIR-101',
    refNo: 'DPS/CIR/2026/118',
    title: 'CBSE Class 10 Board LOC (List of Candidates) Final Verification & Parent Signature',
    category: 'urgent',
    issuedBy: 'CBSE Examination Controller Cell',
    date: '12 Oct 2026, 09:30 AM',
    targetAudience: 'Parents of Class 10 (Rahul Sharma)',
    summary: 'As per CBSE New Delhi directives, parents of Class 10 students must verify the spelling of Student Name, Mother’s Name, Father’s Name, Date of Birth, and Subject Codes (041 Standard Mathematics) on the final LOC slip during the PTM on 17 Oct 2026.',
    attachment: 'CBSE_LOC_Verification_Checklist_2026.pdf',
    isUnread: true,
  },
  {
    id: 'CIR-102',
    refNo: 'DPS/CIR/2026/115',
    title: 'Term 1 Parent-Teacher Meeting (PTM) Schedule & Slot Booking Advisory',
    category: 'academic',
    issuedBy: 'Office of the Principal',
    date: '10 Oct 2026, 11:00 AM',
    targetAudience: 'All Classes (Nursery to Class 12)',
    summary: 'The Term 1 PTM will be held physically on Saturday, 17 Oct 2026 from 08:30 AM to 01:30 PM. Parents are requested to adhere to their booked 15-minute time slots to avoid crowding in the academic corridors. Students accompanying parents must be in complete school uniform.',
    attachment: 'Term1_PTM_Room_Allocation_Chart.pdf',
    isUnread: true,
  },
  {
    id: 'CIR-103',
    refNo: 'DPS/TRN/2026/042',
    title: 'Bus Route #14 (Green Meadows / Sector 62) Morning Stop Timing Adjustment',
    category: 'transport',
    issuedBy: 'Mr. Balram (Transport Coordinator)',
    date: '08 Oct 2026, 04:45 PM',
    targetAudience: 'Bus Route #14 Commuters (Rahul & Ananya)',
    summary: 'Due to ongoing flyover construction near Sector 62 Golf Course Extension, Bus #14 will arrive 5 minutes earlier at Green Meadows Gate 1 (07:10 AM instead of 07:15 AM) starting Monday, 14 Oct 2026. Afternoon drop timings remain unchanged.',
    isUnread: false,
  },
  {
    id: 'CIR-104',
    refNo: 'DPS/CIR/2026/109',
    title: 'Transition to School Winter Uniform Effective 04 November 2026',
    category: 'admin',
    issuedBy: 'School Discipline & Welfare Committee',
    date: '05 Oct 2026, 10:15 AM',
    targetAudience: 'All Students (Classes 1 to 12)',
    summary: 'Following the Deepavali break, all students must report in the prescribed school winter uniform (Full-sleeve white shirt, grey worsted trousers/skirt, navy blue V-neck pullover/blazer with school crest) effective Wednesday, 04 Nov 2026.',
    attachment: 'Winter_Uniform_Specifications_2026.pdf',
    isUnread: false,
  },
  {
    id: 'CIR-105',
    refNo: 'DPS/ACA/2026/098',
    title: 'National Science & Robotics Exhibition Registration (Classes 6 to 11)',
    category: 'academic',
    issuedBy: 'STEM & Innovation Department',
    date: '01 Oct 2026, 02:00 PM',
    targetAudience: 'Middle & Senior Wing Students',
    summary: 'Our annual Inter-House Science & Robotics Exhibition "TechnoVation 2026" is scheduled for 24 Oct 2026. Working prototypes and chart entries are invited under Sustainable Energy, AI in Agriculture, and Cellular Biology categories.',
    attachment: 'TechnoVation_2026_Brochure.pdf',
    isUnread: false,
  },
  {
    id: 'CIR-106',
    refNo: 'DPS/ADM/2026/089',
    title: 'Quarter 3 Tuition & Bus Fee Payment Reminder (Oct – Dec 2026)',
    category: 'admin',
    issuedBy: 'Accounts & Finance Department',
    date: '28 Sep 2026, 09:00 AM',
    targetAudience: 'All Parents & Guardians',
    summary: 'The Quarter 3 fee invoice has been generated on the Parent Portal. Kindly complete the online transaction or bank challan submission on or before 10 November 2026 to avoid late fee charges.',
    isUnread: false,
  },
];

export const ParentNotifications: React.FC = () => {
  const [notices, setNotices] = useState<CircularNotice[]>(initialCirculars);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotices = notices.filter((n) => {
    const matchesCat = selectedCategory === 'all' || n.category === selectedCategory;
    const matchesSearch =
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      n.refNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const unreadCount = notices.filter(n => n.isUnread).length;

  const handleMarkAllRead = () => {
    setNotices(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const handleMarkOneRead = (id: string) => {
    setNotices(prev => prev.map(n => n.id === id ? { ...n, isUnread: false } : n));
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="School Circulars & Official Notices"
      description="Official broadcasts from the Principal’s Desk, CBSE Examination Cell, Transport Coordinator, and Accounts Office."
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-gray-900">School Circulars & Official Notices</h1>
            {unreadCount > 0 && (
              <span className="px-2.5 py-0.5 bg-rose-100 text-rose-700 rounded-full text-xs font-bold">
                {unreadCount} New
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            Official broadcasts from the Principal’s Desk, CBSE Examination Cell, Transport Coordinator, and Accounts Office.
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="flex items-center gap-1.5 px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl text-xs font-bold transition-colors self-start md:self-auto"
          >
            <CheckCircle2 className="w-4 h-4" /> Mark All Circulars as Read
          </button>
        )}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Circulars ({notices.length})
          </button>
          <button
            onClick={() => setSelectedCategory('urgent')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'urgent' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Urgent Action ({notices.filter(n => n.category === 'urgent').length})
          </button>
          <button
            onClick={() => setSelectedCategory('academic')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'academic' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Academic ({notices.filter(n => n.category === 'academic').length})
          </button>
          <button
            onClick={() => setSelectedCategory('transport')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'transport' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Transport ({notices.filter(n => n.category === 'transport').length})
          </button>
          <button
            onClick={() => setSelectedCategory('admin')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition-colors ${
              selectedCategory === 'admin' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Admin & Uniform ({notices.filter(n => n.category === 'admin').length})
          </button>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search circular number or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-1.5 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Circulars List */}
      <div className="space-y-4">
        {filteredNotices.map((notice) => (
          <div
            key={notice.id}
            onClick={() => handleMarkOneRead(notice.id)}
            className={`p-5 bg-white rounded-xl border transition-all ${
              notice.isUnread
                ? 'border-indigo-300 ring-1 ring-indigo-100 shadow-sm'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                  {notice.refNo}
                </span>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                  notice.category === 'urgent' ? 'bg-rose-100 text-rose-700' :
                  notice.category === 'transport' ? 'bg-amber-100 text-amber-800' :
                  notice.category === 'academic' ? 'bg-blue-100 text-blue-700' :
                  'bg-emerald-100 text-emerald-700'
                }`}>
                  {notice.category === 'urgent' && <ShieldAlert className="w-3.5 h-3.5" />}
                  {notice.category === 'transport' && <Bus className="w-3.5 h-3.5" />}
                  {notice.category === 'academic' && <BookOpen className="w-3.5 h-3.5" />}
                  {notice.category.toUpperCase()}
                </span>
                {notice.isUnread && (
                  <span className="px-2 py-0.5 bg-indigo-600 text-white rounded-full text-[10px] font-bold uppercase tracking-wider">
                    Unread
                  </span>
                )}
              </div>

              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-gray-400" /> {notice.date}
              </span>
            </div>

            <div className="mt-3 space-y-2">
              <h3 className="text-base font-bold text-gray-900">{notice.title}</h3>
              <p className="text-sm text-gray-700 leading-relaxed">{notice.summary}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex flex-wrap items-center gap-3 text-gray-500">
                <span>Issued By: <strong className="text-gray-800">{notice.issuedBy}</strong></span>
                <span>•</span>
                <span>Applicable To: <strong className="text-indigo-700">{notice.targetAudience}</strong></span>
              </div>

              {notice.attachment && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`Downloading Official Circular PDF: ${notice.attachment}`);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 rounded-lg font-semibold transition-colors self-start sm:self-auto"
                >
                  <Download className="w-3.5 h-3.5" /> {notice.attachment}
                </button>
              )}
            </div>
          </div>
        ))}

        {filteredNotices.length === 0 && (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
            No circulars match your current filter.
          </div>
        )}
      </div>
      </div>
    </SchoolLayout>
  );
};
