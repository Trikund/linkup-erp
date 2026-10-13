import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Megaphone, Send, Bell, CheckCircle2, Clock, 
  FileText, Plus, Search, Filter, Smartphone, MessageSquare, X, Eye
} from 'lucide-react';

interface CircularNotice {
  id: string;
  circularNo: string;
  title: string;
  category: 'CBSE Directive' | 'Academic' | 'Holiday' | 'Administrative' | 'Safety';
  targetAudience: 'All School' | 'Parents Only' | 'Teachers Only' | 'Students (9-12)' | 'Class 10 & 12';
  channels: ('App Push' | 'WhatsApp' | 'SMS' | 'Notice Board')[];
  issuedBy: string;
  publishedDate: string;
  readCount: number;
  totalRecipients: number;
  attachmentName?: string;
  content: string;
}

const mockCirculars: CircularNotice[] = [
  {
    id: 'CIR-2026-88',
    circularNo: 'GSS/CIR/2026/088',
    title: 'Advisory on Air Quality Index (AQI) & Precautionary Health Measures',
    category: 'Safety',
    targetAudience: 'All School',
    channels: ['App Push', 'WhatsApp', 'Notice Board'],
    issuedBy: 'Principal Dr. V.K. Singhal',
    publishedDate: '12 Oct 2026',
    readCount: 2340,
    totalRecipients: 2480,
    attachmentName: 'AQI_Advisory_Oct2026.pdf',
    content: 'In compliance with Directorate of Education guidelines, outdoor morning sports assemblies will be suspended until AQI levels normalize. All classrooms are equipped with HEPA filtration units.',
  },
  {
    id: 'CIR-2026-87',
    circularNo: 'GSS/CIR/2026/087',
    title: 'CBSE Pre-Board 1 Schedule & Hall Ticket Issuance (Classes 10 & 12)',
    category: 'CBSE Directive',
    targetAudience: 'Class 10 & 12',
    channels: ['App Push', 'WhatsApp', 'SMS', 'Notice Board'],
    issuedBy: 'Examination Controller',
    publishedDate: '10 Oct 2026',
    readCount: 468,
    totalRecipients: 468,
    attachmentName: 'PreBoard1_Datesheet_Final.pdf',
    content: 'The official datesheet for CBSE Pre-Board Examination 1 commencing 01 December 2026 is published. Admit cards will be distributed upon fee clearance by 15 November 2026.',
  },
  {
    id: 'CIR-2026-86',
    circularNo: 'GSS/CIR/2026/086',
    title: 'Schedule for Mid-Term Parent-Teacher Meeting (PTM) – 18 Oct 2026',
    category: 'Academic',
    targetAudience: 'Parents Only',
    channels: ['App Push', 'WhatsApp', 'SMS'],
    issuedBy: 'Dean of Academics',
    publishedDate: '07 Oct 2026',
    readCount: 2012,
    totalRecipients: 2120,
    attachmentName: 'PTM_TimeSlot_Allocations.pdf',
    content: 'Parents are cordially requested to attend the Mid-Term PTM on Saturday, 18 Oct 2026. Time slots are segregated based on Roll Numbers to minimize waiting time.',
  },
  {
    id: 'CIR-2026-85',
    circularNo: 'GSS/CIR/2026/085',
    title: 'Declaration of Autumn / Dussehra Break (22 Oct - 26 Oct 2026)',
    category: 'Holiday',
    targetAudience: 'All School',
    channels: ['App Push', 'Notice Board'],
    issuedBy: 'Admin Office',
    publishedDate: '04 Oct 2026',
    readCount: 2450,
    totalRecipients: 2480,
    content: 'School will remain closed for all wings from 22 October 2026 to 26 October 2026 on account of Dussehra & Autumn break. Regular classes resume Monday, 27 October 2026.',
  },
  {
    id: 'CIR-2026-84',
    circularNo: 'GSS/CIR/2026/084',
    title: 'Quarter 3 Tuition Fee Payment Reminder without Late Surcharge',
    category: 'Administrative',
    targetAudience: 'Parents Only',
    channels: ['WhatsApp', 'SMS', 'App Push'],
    issuedBy: 'Accounts Branch',
    publishedDate: '01 Oct 2026',
    readCount: 1890,
    totalRecipients: 2120,
    content: 'This is a gentle reminder that the last date for payment of School Fee for Quarter 3 (Oct-Dec) is 31 October 2026. Online payment is accessible via the Greenfield Parent App.',
  },
];

export function AdminAnnouncements() {
  const user = USERS.admin;
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAudience, setSelectedAudience] = useState('All');
  const [isComposeModalOpen, setIsComposeModalOpen] = useState(false);
  const [selectedCircularForView, setSelectedCircularForView] = useState<CircularNotice | null>(null);

  const filteredCirculars = mockCirculars.filter((c) => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.circularNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesAudience = selectedAudience === 'All' || c.targetAudience === selectedAudience;
    return matchesSearch && matchesAudience;
  });

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Circulars, Notices & Omni-Channel Broadcasts" 
      description="Greenfield Senior Secondary School • Official Institutional Communication Console"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Circulars Published</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Megaphone size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">64 Notices</span>
              <span className="text-xs font-semibold text-emerald-600">Session 2026-27</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Official digitally signed school gazette</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Delivery & Readership</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">98.2%</span>
              <span className="text-xs font-bold text-slate-500">Read Receipts</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Instant parent app push notification sync</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">SMS Gateway Balance</span>
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <Smartphone size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-indigo-600">84,200</span>
              <span className="text-xs font-semibold text-slate-500">SMS Credits</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">DLT Govt. Approved Greenfield Sender ID</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">WhatsApp Enterprise API</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <MessageSquare size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">Connected</span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Meta Verified</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Green tick business account active</p>
          </div>
        </div>

        {/* Action Controls & Filters */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search circulars, directives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Audience:</span>
              <select
                value={selectedAudience}
                onChange={(e) => setSelectedAudience(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="All">All Audiences</option>
                <option value="All School">All School</option>
                <option value="Parents Only">Parents Only</option>
                <option value="Teachers Only">Teachers Only</option>
                <option value="Class 10 & 12">Class 10 & 12</option>
              </select>
            </div>
          </div>

          <button
            onClick={() => setIsComposeModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
          >
            <Plus size={16} /> Compose New Broadcast
          </button>
        </div>

        {/* Circulars List */}
        <div className="space-y-4">
          {filteredCirculars.map((circ) => {
            const readPercentage = Math.round((circ.readCount / circ.totalRecipients) * 100);
            return (
              <div 
                key={circ.id} 
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1.5">
                      <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-100">
                        {circ.circularNo}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {circ.category}
                      </span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                        Target: {circ.targetAudience}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{circ.title}</h3>
                  </div>

                  <span className="text-xs text-slate-500 font-medium shrink-0 flex items-center gap-1">
                    <Clock size={13} /> {circ.publishedDate}
                  </span>
                </div>

                <p className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {circ.content}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span>Issued By: <strong className="text-slate-700">{circ.issuedBy}</strong></span>
                    <div className="flex items-center gap-1">
                      <span>Channels:</span>
                      {circ.channels.map(ch => (
                        <span key={ch} className="px-1.5 py-0.5 bg-slate-100 text-slate-600 font-semibold rounded text-[10px]">
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="text-slate-500">Read: {circ.readCount}/{circ.totalRecipients}</span>
                      <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: `${readPercentage}%` }}></div>
                      </div>
                      <span className="font-bold text-slate-700">{readPercentage}%</span>
                    </div>

                    <button
                      onClick={() => setSelectedCircularForView(circ)}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg text-xs font-bold transition-colors"
                    >
                      <Eye size={13} /> Read Full Notice
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: View Full Circular */}
        {selectedCircularForView && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150 space-y-4">
              <button 
                onClick={() => setSelectedCircularForView(null)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="border-b pb-3">
                <span className="text-xs font-bold text-blue-600 font-mono">{selectedCircularForView.circularNo}</span>
                <h3 className="text-lg font-bold text-slate-900 mt-1">{selectedCircularForView.title}</h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-slate-500">
                  <span>Date: {selectedCircularForView.publishedDate}</span>
                  <span>Issued By: {selectedCircularForView.issuedBy}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl text-xs text-slate-700 leading-relaxed space-y-2">
                <p>{selectedCircularForView.content}</p>
                {selectedCircularForView.attachmentName && (
                  <div className="mt-3 p-2 bg-white rounded-lg border border-slate-200 flex items-center justify-between">
                    <span className="font-semibold text-slate-700 flex items-center gap-1">
                      <FileText size={14} className="text-rose-500" /> {selectedCircularForView.attachmentName}
                    </span>
                    <button 
                      onClick={() => alert(`Downloading attachment ${selectedCircularForView.attachmentName}...`)}
                      className="text-blue-600 font-bold hover:underline"
                    >
                      Download
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-end">
                <button 
                  onClick={() => setSelectedCircularForView(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold"
                >
                  Close Notice
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Compose Broadcast */}
        {isComposeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={() => setIsComposeModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <Megaphone size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Compose Institutional Broadcast</h3>
                  <p className="text-xs text-slate-500">Dispatch instantly to selected user groups</p>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Circular successfully broadcast across Greenfield Mobile Apps, WhatsApp & Portal!');
                  setIsComposeModalOpen(false);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Subject / Circular Title</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Schedule for Annual Science Exhibition"
                    className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target Audience</label>
                    <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option>All School (Students + Parents + Teachers)</option>
                      <option>Parents Only</option>
                      <option>Teachers & Staff Only</option>
                      <option>Classes 9 to 12 Only</option>
                      <option>Board Exam Batches (10 & 12)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                    <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option>Academic Notice</option>
                      <option>CBSE Directive</option>
                      <option>Holiday Notification</option>
                      <option>Emergency Health Advisory</option>
                      <option>Administrative / Fee Circular</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Notice Body Text</label>
                  <textarea 
                    rows={4} 
                    required
                    placeholder="Enter complete circular announcement text..."
                    className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Dispatch Channels</label>
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-700">
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" defaultChecked className="rounded text-blue-600" /> App Push
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" defaultChecked className="rounded text-blue-600" /> WhatsApp
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" className="rounded text-blue-600" /> SMS Text
                    </label>
                    <label className="flex items-center gap-1.5">
                      <input type="checkbox" defaultChecked className="rounded text-blue-600" /> ERP Notice Board
                    </label>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsComposeModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="flex items-center gap-1.5 px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
                  >
                    <Send size={15} /> Publish & Broadcast
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
