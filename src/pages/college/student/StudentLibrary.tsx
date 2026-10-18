import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookMarked, BookOpen, Search, Clock, CheckCircle2, 
  ExternalLink, Download, AlertCircle, Bookmark, ShieldCheck
} from 'lucide-react';

export function StudentLibrary() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };
  const [search, setSearch] = useState('');

  const borrowedBooks = [
    {
      isbn: '978-0387310732',
      title: 'Pattern Recognition and Machine Learning',
      author: 'Christopher M. Bishop',
      issuedOn: '04 Oct 2026',
      dueDate: '04 Nov 2026',
      daysLeft: 17,
      status: 'Active',
      barcode: 'LIB-CS-2026-9041'
    },
    {
      isbn: '978-1449373320',
      title: 'Designing Data-Intensive Applications',
      author: 'Martin Kleppmann',
      issuedOn: '10 Oct 2026',
      dueDate: '10 Nov 2026',
      daysLeft: 23,
      status: 'Active',
      barcode: 'LIB-CS-2026-9118'
    },
    {
      isbn: '978-0262033848',
      title: 'Introduction to Algorithms (CLRS 3rd Edition)',
      author: 'Thomas H. Cormen et al.',
      issuedOn: '25 Aug 2026',
      dueDate: '25 Sep 2026 (Returned)',
      daysLeft: 0,
      status: 'Returned',
      barcode: 'LIB-CS-2025-1044'
    }
  ];

  const eResources = [
    { name: 'IEEE Xplore Digital Library', access: 'Institutional IP Access Granted', desc: 'Full text access to 5M+ IEEE journals, transactions and conference proceedings.', link: 'https://ieeexplore.ieee.org' },
    { name: 'ACM Digital Library', access: 'Institutional IP Access Granted', desc: 'Comprehensive computing collection of conferences, journals, and SIGCOMM/SIGMOD papers.', link: 'https://dl.acm.org' },
    { name: 'ScienceDirect (Elsevier)', access: 'Institutional IP Access Granted', desc: 'Peer-reviewed research across Computer Science, Artificial Intelligence and Robotics.', link: 'https://www.sciencedirect.com' },
    { name: 'SpringerLink Computing', access: 'Institutional IP Access Granted', desc: 'Lecture Notes in Computer Science (LNCS) and Springer monographs.', link: 'https://link.springer.com' },
  ];

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Library & E-Resources" 
      description="Central Knowledge Center • Physical Borrow Ledger • IEEE & ACM Digital Access"
    >
      {/* Top Banner Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Currently Borrowed</p>
          <h3 className="text-2xl font-black text-slate-900 mt-1">2 Books</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Borrow limit: 4 books max</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Outstanding Overdue Fine</p>
          <h3 className="text-2xl font-black text-emerald-600 mt-1">₹0.00</h3>
          <p className="text-xs text-emerald-600 mt-1 font-semibold">Zero Penalties • Good Standing</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Digital Subscriptions</p>
          <h3 className="text-2xl font-black text-[#7c3aed] mt-1">4 Portals</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">IEEE, ACM, Springer, Elsevier</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-3xl p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Library Card ID</p>
          <h3 className="text-xl font-mono font-black text-slate-800 mt-1">LIB-21CS-1048</h3>
          <p className="text-xs text-slate-500 mt-1 font-medium">Valid through June 2027</p>
        </div>
      </div>

      {/* Currently Issued Physical Books */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7 mb-8">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">Physical Books Circulation Record</h3>
            <p className="text-xs text-slate-500 font-medium">Auto-renew books online up to 2 times before physical return</p>
          </div>
          <button 
            onClick={() => alert('Book renewed successfully for 14 additional days!')}
            className="px-3.5 py-1.5 rounded-xl bg-purple-50 text-[#7c3aed] text-xs font-bold hover:bg-purple-100 transition-colors border border-purple-200"
          >
            Renew All Active Books
          </button>
        </div>

        <div className="space-y-3.5">
          {borrowedBooks.map((b, idx) => (
            <div 
              key={idx}
              className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all ${
                b.status === 'Active' ? 'bg-slate-50/70 border-slate-100' : 'bg-slate-50/30 border-dashed border-slate-200 opacity-60'
              }`}
            >
              <div className="flex items-start gap-3.5 mb-2 sm:mb-0">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-xs shrink-0">
                  <BookMarked size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Author: <span className="font-semibold text-slate-700">{b.author}</span> • ISBN: {b.isbn}</p>
                  <p className="text-[11px] text-slate-400 font-mono mt-0.5">Barcode: {b.barcode} • Issued: {b.issuedOn}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 self-start sm:self-auto">
                {b.status === 'Active' ? (
                  <div className="text-right">
                    <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                      <Clock size={12} /> Due: {b.dueDate}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{b.daysLeft} days remaining</span>
                  </div>
                ) : (
                  <span className="bg-slate-200 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                    Returned
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional E-Resources Access */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-base font-bold text-slate-900">Institutional Digital Subscriptions & Research Gateways</h3>
            <p className="text-xs text-slate-500 font-medium">Seamless campus IP authentication for papers, journals & conference publications</p>
          </div>
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Active Subscriptions
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {eResources.map((res, i) => (
            <div key={i} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-bold text-slate-900">{res.name}</h4>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    Active
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">{res.desc}</p>
              </div>

              <a 
                href={res.link} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#7c3aed] hover:underline pt-2 border-t border-slate-200/60"
              >
                <span>Access University Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </CollegeLayout>
  );
}
