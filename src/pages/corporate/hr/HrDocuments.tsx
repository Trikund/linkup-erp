import React, { useState } from 'react';
import { CorporateLayout } from '../../../components/corporate/layout/CorporateLayout';
import { 
  FileText, Download, Send, Plus, CheckCircle2, 
  Search, Eye, Printer, ShieldCheck, ChevronRight
} from 'lucide-react';

interface LetterTemplate {
  id: string;
  title: string;
  category: string;
  recipient: string;
  date: string;
  status: 'Ready to Dispatch' | 'Dispatched via DocuSign' | 'Draft';
}

export function HrDocuments() {
  const user = { name: 'Anita Desai', roleLabel: 'Lead HR Business Partner • People & Culture' };
  const [selectedTemplate, setSelectedTemplate] = useState('offer');
  const [candidateName, setCandidateName] = useState('Meera Nair');
  const [jobTitle, setJobTitle] = useState('DevOps & Site Reliability Lead');
  const [annualCtc, setAnnualCtc] = useState('₹44,00,000');
  const [showSuccess, setShowSuccess] = useState(false);

  const [recentLetters] = useState<LetterTemplate[]>([
    { id: 'LTR-OFF-902', title: 'Formal Employment Offer & Contract', category: 'Recruitment', recipient: 'Meera Nair', date: 'Oct 18, 2026', status: 'Ready to Dispatch' },
    { id: 'LTR-PROM-428', title: 'Staff Promotion & Salary Revision Letter', category: 'Appraisal', recipient: 'Rahul Sharma', date: 'Oct 15, 2026', status: 'Dispatched via DocuSign' },
    { id: 'LTR-EXP-081', title: 'Experience & Service Bonafide Certificate', category: 'Offboarding', recipient: 'Suresh Pillai', date: 'Oct 12, 2026', status: 'Draft' },
    { id: 'LTR-VISA-310', title: 'Embassy Visa Employment Verification Letter', category: 'Travel', recipient: 'Kunal Kapoor', date: 'Oct 10, 2026', status: 'Dispatched via DocuSign' }
  ]);

  const handleGenerateLetter = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3500);
  };

  return (
    <CorporateLayout
      role="hr"
      user={user}
      title="Employee Documents & Letter Generation Suite"
      description="Issue official company employment offer letters, promotion addendums, and bonafide experience certificates."
      breadcrumbs={[
        { label: 'Corporate' },
        { label: 'Compliance & Governance' },
        { label: 'Employee Documents' }
      ]}
    >
      <div className="space-y-6">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
              <FileText size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Letters Issued (Q4)</p>
              <h3 className="text-2xl font-bold text-slate-900">48 Documents</h3>
              <p className="text-xs text-blue-600 font-medium">Offers & Bonafides</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">DocuSign Completion</p>
              <h3 className="text-2xl font-bold text-slate-900">97.8%</h3>
              <p className="text-xs text-emerald-600 font-medium">Within 48 hour turnaround</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cryptographic Stamp</p>
              <h3 className="text-2xl font-bold text-slate-900">Verified</h3>
              <p className="text-xs text-purple-600 font-medium">SHA-256 tamper-proof</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
              <Printer size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Standard Templates</p>
              <h3 className="text-2xl font-bold text-slate-900">5 Formats</h3>
              <p className="text-xs text-amber-600 font-medium">Corporate legal approved</p>
            </div>
          </div>
        </div>

        {/* Letter Generation Workbench */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h3 className="text-base font-bold text-slate-900 mb-1">Generate Official Document</h3>
          <p className="text-xs text-slate-500 mb-4">Select pre-approved legal templates and populate candidate/employee metadata.</p>

          {showSuccess && (
            <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-700 font-semibold flex items-center gap-2">
              <CheckCircle2 size={16} /> Document successfully generated and queued for digital signature.
            </div>
          )}

          <form onSubmit={handleGenerateLetter} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Template Format</label>
                <select 
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                >
                  <option value="offer">Employment Offer Letter & Contract</option>
                  <option value="promotion">Staff Promotion & Compensation Addendum</option>
                  <option value="experience">Relieving & Experience Certificate</option>
                  <option value="visa">Embassy Visa / Bonafide Employment Letter</option>
                  <option value="salary">Salary Verification & Address Proof Certificate</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Candidate / Employee Name</label>
                <input 
                  type="text"
                  value={candidateName}
                  onChange={(e) => setCandidateName(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Designation</label>
                <input 
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button 
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm transition"
              >
                <Send size={14} /> Generate & Send for e-Signature
              </button>
              <button 
                type="button"
                onClick={() => alert('PDF preview opened in background.')}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                <Eye size={14} /> Preview Letter Layout
              </button>
            </div>
          </form>
        </div>

        {/* Recently Generated Letters Log */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-slate-100 flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900">Recently Dispatched Formal Letters</h3>
              <p className="text-xs text-slate-500">Audit trail of generated contracts with DocuSign tracking tokens.</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  <th className="py-3 px-5">Document ID & Title</th>
                  <th className="py-3 px-5">Category</th>
                  <th className="py-3 px-5">Recipient</th>
                  <th className="py-3 px-5">Generated Date</th>
                  <th className="py-3 px-5">Status</th>
                  <th className="py-3 px-5 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {recentLetters.map((l) => (
                  <tr key={l.id} className="hover:bg-slate-50 transition">
                    <td className="py-3.5 px-5">
                      <p className="font-bold text-slate-900">{l.title}</p>
                      <p className="text-[11px] font-mono text-slate-400">{l.id}</p>
                    </td>
                    <td className="py-3.5 px-5">{l.category}</td>
                    <td className="py-3.5 px-5 font-semibold text-slate-800">{l.recipient}</td>
                    <td className="py-3.5 px-5 text-slate-500">{l.date}</td>
                    <td className="py-3.5 px-5">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        l.status.includes('Dispatched') ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                        l.status.includes('Ready') ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        'bg-slate-100 text-slate-600'
                      }`}>
                        {l.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-5 text-right">
                      <button 
                        onClick={() => alert(`Downloading signed copy of ${l.id}...`)}
                        className="text-blue-600 hover:text-blue-800 font-semibold text-xs flex items-center gap-1 ml-auto"
                      >
                        <Download size={13} /> PDF
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CorporateLayout>
  );
}
