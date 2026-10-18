import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  BookMarked, Award, ExternalLink, Download, Plus, 
  Sparkles, CheckCircle2, FileText, Globe, Bookmark, TrendingUp
} from 'lucide-react';

export function FacultyResearch() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [activeFilter, setActiveFilter] = useState<'all' | 'journal' | 'patent' | 'grant'>('all');

  const publications = [
    {
      type: 'journal',
      title: 'Decentralized Consensus in Fault-Tolerant Edge Computing: A Byzantine-Resilient Protocol',
      venue: 'IEEE Transactions on Parallel and Distributed Systems (TPDS)',
      year: '2025',
      doi: '10.1109/TPDS.2025.321044',
      impact: 'Impact Factor: 5.3 • Scopus Q1',
      citations: 42,
      authors: 'Sharma, A., Sundaram, M., and Iyengar, S.'
    },
    {
      type: 'journal',
      title: 'Adaptive Learning Rate Scheduling via Hessian Eigenspectrum Approximation for Deep CNNs',
      venue: 'ACM Transactions on Intelligent Systems and Technology (TIST)',
      year: '2024',
      doi: '10.1145/3641201',
      impact: 'Impact Factor: 4.9 • Scopus Q1',
      citations: 68,
      authors: 'Sharma, A., and Rao, V.'
    },
    {
      type: 'patent',
      title: 'A System and Method for Privacy-Preserving Federated Query Optimization in Multi-Tenant Clouds',
      venue: 'Indian Patent Office (Govt. of India)',
      year: 'Granted (March 2025)',
      doi: 'Patent No: IN-419082-B',
      impact: 'Commercialized with CloudScale Tech',
      citations: 0,
      authors: 'Inventor: Dr. Ankit Sharma'
    },
    {
      type: 'grant',
      title: 'Fault-Tolerant Consensus for Decentralized Edge Computing in Industry 4.0 IoT Clusters',
      venue: 'Department of Science & Technology (DST-SERB), Govt. of India',
      year: '2024 - 2027 (Ongoing)',
      doi: 'Grant Ref: CRG/2024/001429',
      impact: 'Sanctioned Amount: ₹28,50,000',
      citations: 0,
      authors: 'Principal Investigator: Dr. Ankit Sharma'
    },
    {
      type: 'grant',
      title: 'Deep Neural Optimization for Heterogeneous Embedded Edge Architectures',
      venue: 'AICTE Research Promotion Scheme (RPS)',
      year: '2023 - 2025 (Completed)',
      doi: 'Grant Ref: 8-42/RIFD/RPS/POLICY-1/2023',
      impact: 'Sanctioned Amount: ₹14,00,000',
      citations: 0,
      authors: 'Principal Investigator: Dr. Ankit Sharma'
    }
  ];

  const filtered = publications.filter(p => activeFilter === 'all' || p.type === activeFilter);

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Research & Publications" 
      description="Peer-reviewed scholarly output, patents granted, citations bibliometrics, and external funded research grants."
    >
      {/* Bibliometrics Card Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Citations</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">942</p>
          <p className="text-[10px] text-purple-600 font-semibold">Google Scholar Verified</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">h-index / i10-index</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">14 / 22</p>
          <p className="text-[10px] text-slate-500">Tier-1 Scholarly Standing</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Patents Granted</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">2 Patents</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Indian Patent Office</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Grant Funding</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">₹42.50 L</p>
          <p className="text-[10px] text-slate-500">DST-SERB & AICTE</p>
        </div>
      </div>

      {/* Action and Filter Ribbon */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          {[
            { key: 'all', label: 'All Scholarly Output' },
            { key: 'journal', label: 'Journals & IEEE (2)' },
            { key: 'patent', label: 'Patents (1)' },
            { key: 'grant', label: 'Funded Grants (2)' }
          ].map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key as any)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeFilter === f.key
                  ? 'bg-[#7c3aed] text-white shadow-sm'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
            <Download size={13} />
            <span>Export BibTeX</span>
          </button>
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold transition-all shadow-sm">
            <Plus size={13} />
            <span>Add Publication</span>
          </button>
        </div>
      </div>

      {/* Publications List */}
      <div className="space-y-4">
        {filtered.map((item, index) => (
          <div key={index} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-slate-100">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider ${
                    item.type === 'journal' ? 'bg-purple-50 text-[#7c3aed]' :
                    item.type === 'patent' ? 'bg-emerald-50 text-emerald-700' :
                    'bg-blue-50 text-blue-700'
                  }`}>
                    {item.type}
                  </span>
                  <span className="text-xs font-bold text-slate-500 font-mono">
                    {item.doi}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1 italic">{item.authors}</p>
                <p className="text-xs text-[#7c3aed] font-medium mt-0.5">{item.venue} • {item.year}</p>
              </div>

              <div className="text-right">
                <span className="text-xs font-black text-slate-800 block bg-slate-50 px-3 py-1 rounded-xl border border-slate-100">
                  {item.impact}
                </span>
                {item.citations > 0 && (
                  <span className="text-[11px] text-purple-700 font-bold block mt-1">
                    {item.citations} Citations
                  </span>
                )}
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between text-xs text-slate-500">
              <span>Indexed in Web of Science, Scopus, Google Scholar</span>
              <a href="#" className="font-bold text-[#7c3aed] hover:underline inline-flex items-center gap-1">
                <span>View Full Paper / Award Letter</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
