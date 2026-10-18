import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Bell, Send, Plus, Search, Filter, Download, 
  Users, CheckCircle2, AlertTriangle, FileText, Pin, Clock
} from 'lucide-react';

interface CircularNotice {
  id: string;
  refNo: string;
  title: string;
  category: 'Examination' | 'Academic' | 'Administrative' | 'Campus Life';
  audience: string[];
  publishedDate: string;
  publishedBy: string;
  priority: 'High' | 'Normal' | 'Urgent';
  readCount: string;
  pinned: boolean;
}

export function AdminAnnouncements() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const circulars: CircularNotice[] = [
    {
      id: 'CIRC-2026-104',
      refNo: 'AIT/COE/2026/089',
      title: 'Odd Semester End-Term Theory & Practical Examinations Schedule (Dec 2026)',
      category: 'Examination',
      audience: ['All Students', 'Faculty', 'Parents'],
      publishedDate: 'Oct 15, 2026',
      publishedBy: 'Dr. K. N. Murthy (Controller of Exams)',
      priority: 'Urgent',
      readCount: '11,420 / 12,450',
      pinned: true
    },
    {
      id: 'CIRC-2026-103',
      refNo: 'AIT/ADM/2026/077',
      title: 'Mandatory Submission of Academic Bank of Credits (ABC-ID) for DigiLocker Sync',
      category: 'Academic',
      audience: ['All Students'],
      publishedDate: 'Oct 12, 2026',
      publishedBy: 'Registrar Office',
      priority: 'High',
      readCount: '9,840 / 12,450',
      pinned: true
    },
    {
      id: 'CIRC-2026-102',
      refNo: 'AIT/TNP/2026/045',
      title: 'Pre-Placement Talk & Registration for Microsoft Corporation SDE-1 Drive',
      category: 'Campus Life',
      audience: ['B.Tech CSE & AIDS Sem 7'],
      publishedDate: 'Oct 01, 2026',
      publishedBy: 'Training & Placement Directorate',
      priority: 'Normal',
      readCount: '690 / 720',
      pinned: false
    },
    {
      id: 'CIRC-2026-101',
      refNo: 'AIT/EST/2026/033',
      title: 'Diwali Break & Autumn Recess Notice for Faculty, Staff & Hostlers',
      category: 'Administrative',
      audience: ['All Students', 'Faculty', 'Staff', 'Hostlers'],
      publishedDate: 'Sep 28, 2026',
      publishedBy: 'Director Office',
      priority: 'Normal',
      readCount: '12,100 / 12,450',
      pinned: false
    },
    {
      id: 'CIRC-2026-100',
      refNo: 'AIT/RND/2026/012',
      title: 'Call for Proposals: Internal Seed Grant for Undergrad Innovation Projects',
      category: 'Academic',
      audience: ['Students', 'Faculty'],
      publishedDate: 'Sep 20, 2026',
      publishedBy: 'Dean (Research & Consultancy)',
      priority: 'Normal',
      readCount: '4,200 / 12,450',
      pinned: false
    }
  ];

  const filteredCirculars = circulars.filter(c => {
    const matchesCat = filterCategory === 'All' || c.category === filterCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.refNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.publishedBy.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Institutional Circulars' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Bell className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Institutional Circulars & Broadcast Center</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Official Communication Gateway
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Publish university circulars, send emergency SMS & push broadcasts across student, faculty, and parent communities.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              Circular Archive PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Plus className="w-4 h-4" />
              Publish New Circular
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Active Circulars</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><FileText className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">18 Published</div>
            <div className="mt-1 text-xs text-gray-500">2 pinned at university noticeboard</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Stakeholder Reach</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Users className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">24,492 Users</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">Students, Faculty & Guardians</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">SMS Gateway</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">Operational</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">TRAI DLT registered headers</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Urgent Broadcasts</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><AlertTriangle className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">1 High Priority</div>
            <div className="mt-1 text-xs text-gray-500">Odd Sem Exam Schedule</div>
          </div>
        </div>

        {/* Filter & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, ref no, author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Filter className="w-4 h-4" />
              <span>Category:</span>
            </div>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed] bg-white text-gray-700"
            >
              <option value="All">All Categories</option>
              <option value="Examination">Examination</option>
              <option value="Academic">Academic</option>
              <option value="Administrative">Administrative</option>
              <option value="Campus Life">Campus Life</option>
            </select>
          </div>
        </div>

        {/* Circulars List */}
        <div className="space-y-3">
          {filteredCirculars.map((circ) => (
            <div 
              key={circ.id}
              className={`bg-white p-5 rounded-2xl border transition hover:shadow-sm ${
                circ.pinned ? 'border-[#7c3aed]/30 bg-purple-50/10' : 'border-gray-100'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    {circ.pinned && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-[#7c3aed] text-white">
                        <Pin className="w-3 h-3" /> Pinned
                      </span>
                    )}
                    <span className="font-mono text-[11px] font-semibold text-gray-500">
                      Ref: {circ.refNo}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-gray-100 text-gray-700">
                      {circ.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                      circ.priority === 'Urgent'
                        ? 'bg-rose-50 text-rose-700 border border-rose-200'
                        : circ.priority === 'High'
                        ? 'bg-amber-50 text-amber-700 border border-amber-200'
                        : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    }`}>
                      {circ.priority} Priority
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-gray-900 hover:text-[#7c3aed] transition cursor-pointer">
                    {circ.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
                    <span>By: <strong className="text-gray-700">{circ.publishedBy}</strong></span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-gray-400" /> {circ.publishedDate}
                    </span>
                    <span>Read Receipts: <strong className="text-[#7c3aed] font-medium">{circ.readCount}</strong></span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end md:self-center">
                  <div className="flex flex-wrap gap-1 mr-2">
                    {circ.audience.map((aud, i) => (
                      <span key={i} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px] font-medium">
                        {aud}
                      </span>
                    ))}
                  </div>
                  <button className="px-3 py-1.5 text-xs font-semibold text-[#7c3aed] hover:bg-purple-50 rounded-lg transition">
                    View Circular
                  </button>
                  <button className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition flex items-center gap-1">
                    <Download className="w-3.5 h-3.5" /> PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CollegeLayout>
  );
}
