import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Bell, FileText, Download, Calendar, Search, 
  ExternalLink, CheckCircle2, Megaphone, ShieldCheck
} from 'lucide-react';

export function StudentNotifications() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const circulars = [
    {
      id: 'CIRC-2026-184',
      title: 'End-Semester Nov 2026 Official Datesheet & Hall Ticket Download Guidelines',
      dept: 'Controller of Examinations',
      date: '17 Oct 2026',
      category: 'Exams',
      summary: 'All final year B.Tech students can now download their verified Admit Cards from the ERP portal. Admit cards must be carried along with university smart ID cards.',
      file: 'Datesheet_Nov2026_Final.pdf',
      important: true
    },
    {
      id: 'CIRC-2026-182',
      title: 'Google On-Campus Recruitment Drive: Shortlisted Candidates for Round 2 Technical',
      dept: 'Training & Placement Cell',
      date: '16 Oct 2026',
      category: 'Placements',
      summary: 'List of 18 students shortlisted for the technical interview round scheduled for Saturday, 25 October. Candidate briefing will take place at 04:00 PM on Friday in Seminar Hall A.',
      file: 'Google_Shortlist_Round2.pdf',
      important: true
    },
    {
      id: 'CIRC-2026-179',
      title: 'Smart India Hackathon (SIH 2026) Internal College Hackathon Call for Teams',
      dept: 'Innovation & Incubation Hub',
      date: '14 Oct 2026',
      category: 'Campus',
      summary: 'Inter-disciplinary teams of 6 students (with at least one female teammate) can submit problem statements before 30 October 2026. Top 5 teams will represent the university at National Finals.',
      file: 'SIH2026_Guidelines.pdf',
      important: false
    },
    {
      id: 'CIRC-2026-175',
      title: 'Machine Learning Lab Assignment 3 Deadline Extension by 2 Days',
      dept: 'Department of CSE',
      date: '12 Oct 2026',
      category: 'Academic',
      summary: 'Prof. Ankit Sharma has approved the deadline extension for PyTorch CIFAR-10 model code submissions till Friday, 24 October 11:59 PM on account of the tech seminar.',
      file: 'ML_Lab3_UpdatedRubric.pdf',
      important: false
    },
    {
      id: 'CIRC-2026-170',
      title: 'Central Digital Library Book Renewal and New ACM Digital Library Licenses',
      dept: 'University Central Library',
      date: '08 Oct 2026',
      category: 'Campus',
      summary: 'All enrolled students can now authenticate via campus single sign-on to access the newly subscribed ACM Digital Library computing archives and proceedings.',
      file: 'ACM_Access_Guide.pdf',
      important: false
    }
  ];

  const filtered = circulars.filter(c => {
    const matchesFilter = filter === 'All' || c.category === filter;
    const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                          c.dept.toLowerCase().includes(search.toLowerCase()) ||
                          c.id.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Notices & University Circulars" 
      description="Official Orders • Academic Notifications • Placement Circulars • COE Directives"
    >
      {/* Top Filter and Search */}
      <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search circulars by subject, department or ID..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
          {['All', 'Exams', 'Placements', 'Academic', 'Campus'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === cat 
                  ? 'bg-[#7c3aed] text-white shadow-md shadow-[#7c3aed]/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Notices Feed */}
      <div className="space-y-4 mb-8">
        {filtered.map((item) => (
          <div 
            key={item.id}
            className={`bg-white border rounded-3xl p-6 shadow-sm hover:shadow-md transition-all ${
              item.important ? 'border-purple-200 bg-purple-50/10' : 'border-slate-100'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#7c3aed] bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                  {item.id}
                </span>
                <span className="text-xs font-bold text-slate-500">{item.dept}</span>
                {item.important && (
                  <span className="bg-rose-50 text-rose-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-200">
                    Important
                  </span>
                )}
              </div>
              <span className="text-xs font-semibold text-slate-400">{item.date}</span>
            </div>

            <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.summary}</p>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-xs">
              <span className="text-slate-400 font-medium">Category: <strong className="text-slate-700">{item.category}</strong></span>
              <button 
                onClick={() => alert(`Downloading official notification PDF: ${item.file}`)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-purple-50 hover:text-[#7c3aed] text-slate-700 text-xs font-bold transition-colors"
              >
                <Download size={13} />
                <span>Download Circular PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
