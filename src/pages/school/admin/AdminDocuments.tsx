import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  FileText, ShieldCheck, Download, Plus, Search, 
  CheckCircle2, AlertCircle, FileCheck, Printer, Clock, X
} from 'lucide-react';

interface IssuedCertificate {
  id: string;
  certNumber: string;
  studentName: string;
  admissionNo: string;
  classGrade: string;
  type: 'Transfer Certificate (TC)' | 'Bonafide Certificate' | 'Character Certificate' | 'Fee NOC';
  issueDate: string;
  reason: string;
  status: 'Issued & Signed' | 'Under Review';
  signedBy: string;
}

const mockCertificates: IssuedCertificate[] = [
  {
    id: 'DOC-101',
    certNumber: 'GSS/TC/2026/042',
    studentName: 'Kunal Singhania',
    admissionNo: 'GF-2022-0054',
    classGrade: 'Class 9-B',
    type: 'Transfer Certificate (TC)',
    issueDate: '09 Oct 2026',
    reason: 'Parent job transfer to Bangalore',
    status: 'Issued & Signed',
    signedBy: 'Principal Dr. V.K. Singhal',
  },
  {
    id: 'DOC-102',
    certNumber: 'GSS/BON/2026/189',
    studentName: 'Rahul Sharma',
    admissionNo: 'GF-2023-0142',
    classGrade: 'Class 10-A',
    type: 'Bonafide Certificate',
    issueDate: '05 Oct 2026',
    reason: 'Passport renewal application at RPO Delhi',
    status: 'Issued & Signed',
    signedBy: 'Admin Head Amit Verma',
  },
  {
    id: 'DOC-103',
    certNumber: 'GSS/BON/2026/190',
    studentName: 'Ananya Sharma',
    admissionNo: 'GF-2025-0412',
    classGrade: 'Class 7-B',
    type: 'Bonafide Certificate',
    issueDate: '05 Oct 2026',
    reason: 'Passport renewal application at RPO Delhi',
    status: 'Issued & Signed',
    signedBy: 'Admin Head Amit Verma',
  },
  {
    id: 'DOC-104',
    certNumber: 'GSS/CHR/2026/078',
    studentName: 'Kabir Verma',
    admissionNo: 'GF-2022-0087',
    classGrade: 'Class 11-PCM',
    type: 'Character Certificate',
    issueDate: '28 Sep 2026',
    reason: 'KVPY / Science Talent Fellowship application',
    status: 'Issued & Signed',
    signedBy: 'Principal Dr. V.K. Singhal',
  },
  {
    id: 'DOC-105',
    certNumber: 'GSS/NOC/2026/015',
    studentName: 'Diya Patel',
    admissionNo: 'GF-2023-0155',
    classGrade: 'Class 10-A',
    type: 'Fee NOC',
    issueDate: '25 Sep 2026',
    reason: 'Visa application for International Robotics Olympiad',
    status: 'Issued & Signed',
    signedBy: 'Accounts Officer R.K. Gupta',
  },
];

interface ComplianceDoc {
  id: string;
  title: string;
  issuingAuthority: string;
  referenceNo: string;
  validityTill: string;
  status: 'Active & Valid' | 'Renewal Due Soon';
}

const mockComplianceDocs: ComplianceDoc[] = [
  {
    id: 'CMP-01',
    title: 'CBSE Extension of General Affiliation (Secondary & Sr Secondary)',
    issuingAuthority: 'Central Board of Secondary Education, Delhi',
    referenceNo: 'CBSE/AFF/2130842/EX-2024-2029',
    validityTill: '31 Mar 2029',
    status: 'Active & Valid',
  },
  {
    id: 'CMP-02',
    title: 'School Building Safety & Structural Stability Certificate',
    issuingAuthority: 'Public Works Department (PWD) Delhi',
    referenceNo: 'PWD/STR/2025/1194',
    validityTill: '30 Jun 2028',
    status: 'Active & Valid',
  },
  {
    id: 'CMP-03',
    title: 'Fire Safety Certificate & NOC',
    issuingAuthority: 'Delhi Fire Service Headquarters',
    referenceNo: 'DFS/F6/MS/School/2024/SZ/891',
    validityTill: '15 Dec 2027',
    status: 'Active & Valid',
  },
  {
    id: 'CMP-04',
    title: 'Safe Drinking Water & Sanitary Conditions Certificate',
    issuingAuthority: 'Municipal Corporation Health Department',
    referenceNo: 'MCD/PHD/SZ/2026/4102',
    validityTill: '31 Aug 2027',
    status: 'Active & Valid',
  },
  {
    id: 'CMP-05',
    title: 'Recognition Certificate under RTE Act 2009',
    issuingAuthority: 'Directorate of Education, Govt. of NCT of Delhi',
    referenceNo: 'DoE/Zone-23/Act-1/2023/1820',
    validityTill: 'Permanent Recognition',
    status: 'Active & Valid',
  },
];

export function AdminDocuments() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'certificates' | 'compliance'>('certificates');
  const [searchQuery, setSearchQuery] = useState('');
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Official Documents, Certificates & CBSE Vault" 
      description="Greenfield Senior Secondary School • Affiliation #2130842 • Registrar Records"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Certificates Issued</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <FileText size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">352</span>
              <span className="text-xs font-semibold text-emerald-600">YTD 2026-27</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">TCs, Bonafide, Character & NOCs digitally stamped</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Transfer Certificates (TC)</span>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <FileCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-amber-600">42 TCs</span>
              <span className="text-xs font-normal text-slate-500">All PEN verified</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">National UDISE+ and CBSE Portal synchronized</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">CBSE Affiliation Status</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">Valid to 2029</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Affiliation #2130842 (Senior Secondary Wing)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Statutory Clearances</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <CheckCircle2 size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-600">5 / 5 Current</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Fire NOC, PWD Structural, Water, RTE valid</p>
          </div>
        </div>

        {/* Tab Bar & Action Controls */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('certificates')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'certificates'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Student Certificates Register ({mockCertificates.length})
            </button>
            <button
              onClick={() => setActiveTab('compliance')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'compliance'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              CBSE & Statutory Legal Vault (5 Documents)
            </button>
          </div>

          <button
            onClick={() => setIsGenerateModalOpen(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
          >
            <Plus size={16} /> Generate Student Certificate
          </button>
        </div>

        {/* Tab 1: Certificates Register */}
        {activeTab === 'certificates' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search certificate number, student or ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="text-xs text-slate-500 font-semibold">Includes QR-code digital verification hash</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Certificate Ref</th>
                    <th className="py-3 px-4">Student & Adm ID</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Document Type</th>
                    <th className="py-3 px-4">Issue Date</th>
                    <th className="py-3 px-4">Stated Purpose / Reason</th>
                    <th className="py-3 px-4">Signatory Authority</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockCertificates.map((cert) => (
                    <tr key={cert.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-xs text-blue-600">
                        {cert.certNumber}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-900">{cert.studentName}</div>
                        <div className="text-xs text-slate-400 font-mono">{cert.admissionNo}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{cert.classGrade}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                          cert.type.includes('Transfer') ? 'bg-amber-100 text-amber-800' :
                          cert.type.includes('Bonafide') ? 'bg-blue-100 text-blue-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {cert.type}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">{cert.issueDate}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600 max-w-xs truncate">{cert.reason}</td>
                      <td className="py-3.5 px-4 text-xs font-semibold text-slate-800">{cert.signedBy}</td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => alert(`Printing official digital certificate ${cert.certNumber} for ${cert.studentName}`)}
                          className="flex items-center gap-1 ml-auto px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          <Printer size={13} /> Print PDF
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Compliance Docs */}
        {activeTab === 'compliance' && (
          <div className="space-y-4">
            {mockComplianceDocs.map((doc) => (
              <div key={doc.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl mt-0.5">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{doc.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Issuing Authority: <strong className="text-slate-700">{doc.issuingAuthority}</strong>
                    </p>
                    <div className="mt-1 flex items-center gap-3 text-xs text-slate-600">
                      <span className="font-mono bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold">Ref: {doc.referenceNo}</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Clock size={12} /> Valid Until: {doc.validityTill}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <CheckCircle2 size={12} /> {doc.status}
                  </span>
                  <button 
                    onClick={() => alert(`Downloading verified legal copy of ${doc.title}...`)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg text-xs font-semibold transition-colors"
                  >
                    <Download size={13} /> View File
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal: Generate Certificate */}
        {isGenerateModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={() => setIsGenerateModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Issue Student Certificate</h3>
                  <p className="text-xs text-slate-500">Generate digitally stamped institutional credential</p>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Certificate generated, digitally signed with school seal, and archived!');
                  setIsGenerateModalOpen(false);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Select Student</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="GF-2023-0142 (Rahul Sharma, Class 10-A)"
                    className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Certificate Type</label>
                  <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    <option>Bonafide Certificate (Passport / Bank / Visa)</option>
                    <option>Transfer Certificate (TC) with UDISE+ PEN</option>
                    <option>Character & Conduct Certificate</option>
                    <option>Fee Clearance No Objection Certificate (NOC)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Stated Purpose / Remarks</label>
                  <textarea 
                    rows={2} 
                    required 
                    defaultValue="For submission to Regional Passport Office (RPO) for passport renewal."
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsGenerateModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
                  >
                    Generate & Sign
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
