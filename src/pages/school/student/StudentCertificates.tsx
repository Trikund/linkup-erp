import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  BadgeCheck, 
  Award, 
  FileText, 
  Download, 
  Clock, 
  CheckCircle2, 
  Plus, 
  ExternalLink,
  ShieldCheck,
  Search,
  Filter,
  Eye
} from 'lucide-react';

export function StudentCertificates() {
  const user = USERS.student;
  const [activeTab, setActiveTab] = useState<'issued' | 'awards' | 'requests'>('issued');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestType, setRequestType] = useState('Bonafide Student Certificate');
  const [requestPurpose, setRequestPurpose] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const certificates = [
    {
      id: 'CERT-ACAD-2026-0941',
      title: 'Academic Excellence Award (Grade IX)',
      category: 'Academic Honor',
      issueDate: '25 Mar 2026',
      issuingAuthority: 'Principal Office, Delhi Public School',
      signedBy: 'Dr. Arvind Sharma (Principal)',
      validity: 'Permanent Record',
      fileSize: '1.4 MB',
      status: 'Verified & Issued',
      description: 'Awarded for achieving top 5 percentile academic rank in Grade IX Board Preparatory Examinations.'
    },
    {
      id: 'CERT-BON-2026-1182',
      title: 'Bonafide Student Certificate',
      category: 'Institutional Document',
      issueDate: '10 Apr 2026',
      issuingAuthority: 'Registrar & Administration Dept.',
      signedBy: 'Mrs. K. Meenakshi (Registrar)',
      validity: 'Valid for Academic Year 2026-27',
      fileSize: '820 KB',
      status: 'Verified & Issued',
      description: 'Certifies current enrollment as a regular student of Class X-B for passport, visa, and government scholarship purposes.'
    },
    {
      id: 'CERT-FEE-2026-0418',
      title: 'Fee Estimation & Paid Certificate (Tax Rebate)',
      category: 'Financial Document',
      issueDate: '18 Apr 2026',
      issuingAuthority: 'Finance & Accounts Office',
      signedBy: 'Mr. R. K. Singhania (Chief Bursar)',
      validity: 'Financial Year 2026-27',
      fileSize: '650 KB',
      status: 'Verified & Issued',
      description: 'Official school receipt breakdown for income tax deduction under Section 80C.'
    }
  ];

  const awards = [
    {
      id: 'AWD-2026-0312',
      title: 'CBSE Regional Science Exhibition - 1st Position',
      event: 'Annual CBSE Science & Innovation Conclave 2026',
      date: '14 Feb 2026',
      tier: 'Zonal / Regional',
      facultyGuide: 'Dr. Ramesh Kumar (Science HOD)',
      certificateNo: 'CBSE-RO-SCI-2026-88',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      id: 'AWD-2025-0899',
      title: 'Inter-School Mathematics Olympiad (Gold Medal)',
      event: 'Delhi State Junior Mathematics Olympiad',
      date: '18 Nov 2025',
      tier: 'State Level',
      facultyGuide: 'Mr. Rajesh Verma (Mathematics)',
      certificateNo: 'DSMO-GOLD-2025-104',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      id: 'AWD-2025-0450',
      title: 'Debate Championship - Best Speaker Award',
      event: 'All-India Inter-School Model UN Conference',
      date: '12 Aug 2025',
      tier: 'National Level',
      facultyGuide: 'Mrs. Sunita Roy (English Literature)',
      certificateNo: 'MUN-DELHI-BEST-SPK-45',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  const documentRequests = [
    {
      requestId: 'REQ-2026-0241',
      certificateType: 'Character & Conduct Certificate',
      purpose: 'Application for Rotary Youth Leadership Camp',
      dateRequested: '08 Oct 2026',
      expectedDate: '14 Oct 2026',
      status: 'In Review',
      currentStage: 'Pending Headmaster Approval',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      requestId: 'REQ-2026-0189',
      certificateType: 'Bonafide Student Certificate',
      purpose: 'Passport Renewal Verification',
      dateRequested: '05 Apr 2026',
      expectedDate: '09 Apr 2026',
      status: 'Approved & Issued',
      currentStage: 'Issued (Download Available)',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    }
  ];

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRequestSubmitted(true);
    setTimeout(() => {
      setShowRequestModal(false);
      setRequestSubmitted(false);
      setRequestPurpose('');
    }, 1500);
  };

  return (
    <SchoolLayout 
      role="student" 
      user={user} 
      title="Certificates & Records"
      description="Access your digitally verified academic credentials, merit honors, and request official institutional documents."
    >
      <div className="space-y-6">

        {/* Top Summary Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Issued Documents</span>
              <span className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                <FileText className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">{certificates.length}</p>
            <p className="text-sm text-slate-500 mt-1 font-medium">Digitally signed & verified</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Merit Awards</span>
              <span className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
                <Award className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-amber-600 mt-3">{awards.length}</p>
            <p className="text-sm text-slate-500 mt-1 font-medium">State & National distinctions</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Requests</span>
              <span className="p-2.5 bg-purple-50 text-purple-600 rounded-xl">
                <Clock className="w-5 h-5" />
              </span>
            </div>
            <p className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-3">1</p>
            <p className="text-sm text-slate-500 mt-1 font-medium">Processing in Principal Office</p>
          </div>

          <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Attestation</span>
              <div className="flex items-center gap-2 mt-2 text-emerald-600">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-sm font-bold">DigiLocker Synced</span>
              </div>
            </div>
            <button 
              onClick={() => setShowRequestModal(true)}
              className="mt-3 w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl transition shadow-sm"
            >
              <Plus className="w-4 h-4" />
              Request Document
            </button>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setActiveTab('issued')}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition ${
                activeTab === 'issued'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Official Certificates ({certificates.length})
            </button>
            <button
              onClick={() => setActiveTab('awards')}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition ${
                activeTab === 'awards'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Merit & Olympiad Awards ({awards.length})
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-5 py-2.5 text-sm font-bold rounded-xl transition ${
                activeTab === 'requests'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Document Requests ({documentRequests.length})
            </button>
          </div>

          <button 
            onClick={() => setShowRequestModal(true)}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 rounded-xl transition shadow-sm"
          >
            <Plus className="w-4 h-4 text-blue-600" />
            New Document Request
          </button>
        </div>

        {/* TAB 1: ISSUED CERTIFICATES */}
        {activeTab === 'issued' && (
          <div className="space-y-4">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="bg-white border border-slate-100 rounded-2xl p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:border-slate-200 transition"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex items-start gap-5">
                    <div className="p-3.5 bg-blue-50 text-blue-600 rounded-2xl shrink-0">
                      <BadgeCheck className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg font-bold text-slate-900">{cert.title}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {cert.status}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600">
                          {cert.category}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cert.description}</p>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-4 pt-4 border-t border-slate-100 text-sm">
                        <div>
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Certificate ID</span>
                          <span className="font-bold text-slate-800 font-mono mt-0.5 block">{cert.id}</span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Date of Issue</span>
                          <span className="font-bold text-slate-800 mt-0.5 block">{cert.issueDate}</span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Issuing Authority</span>
                          <span className="font-bold text-slate-800 mt-0.5 block">{cert.issuingAuthority}</span>
                        </div>
                        <div>
                          <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">Signatory</span>
                          <span className="font-bold text-slate-800 mt-0.5 block">{cert.signedBy}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                    <span className="text-xs text-slate-400 font-medium">PDF • {cert.fileSize}</span>
                    <button 
                      onClick={() => alert(`Downloading signed certificate: ${cert.title}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition shadow-sm"
                    >
                      <Download className="w-4 h-4" />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: AWARDS & HONORS */}
        {activeTab === 'awards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {awards.map((award) => (
              <div 
                key={award.id}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:border-slate-200 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${award.badgeColor}`}>
                      {award.tier}
                    </span>
                    <span className="text-xs font-medium text-slate-400">{award.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 leading-snug">{award.title}</h4>
                  <p className="text-xs text-slate-600 mt-2 font-medium">{award.event}</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500">Mentor / Guide:</span>
                      <span className="font-semibold text-slate-800">{award.facultyGuide}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">Citation No:</span>
                      <span className="font-semibold font-mono text-slate-800">{award.certificateNo}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified Medalist</span>
                  </div>
                  <button 
                    onClick={() => alert(`Downloading citation award for: ${award.title}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Citation PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: DOCUMENT REQUESTS */}
        {activeTab === 'requests' && (
          <div className="space-y-4">
            <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Application Track History</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Track administrative progress of certificates requested from the school registrar.</p>
                </div>
                <button 
                  onClick={() => setShowRequestModal(true)}
                  className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  New Request
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-100">
                    <tr>
                      <th className="py-3 px-5">Request ID</th>
                      <th className="py-3 px-5">Document Type</th>
                      <th className="py-3 px-5">Purpose</th>
                      <th className="py-3 px-5">Date Requested</th>
                      <th className="py-3 px-5">Expected Date</th>
                      <th className="py-3 px-5">Status</th>
                      <th className="py-3 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {documentRequests.map((req) => (
                      <tr key={req.requestId} className="hover:bg-slate-50/50">
                        <td className="py-4 px-5 font-mono font-bold text-slate-800">{req.requestId}</td>
                        <td className="py-4 px-5 font-semibold text-slate-900">{req.certificateType}</td>
                        <td className="py-4 px-5 text-slate-600 max-w-xs truncate">{req.purpose}</td>
                        <td className="py-4 px-5 text-slate-500">{req.dateRequested}</td>
                        <td className="py-4 px-5 text-slate-500">{req.expectedDate}</td>
                        <td className="py-4 px-5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${req.statusColor}`}>
                            {req.status === 'Approved & Issued' ? (
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                            ) : (
                              <Clock className="w-3 h-3 text-amber-600" />
                            )}
                            {req.status}
                          </span>
                        </td>
                        <td className="py-4 px-5 text-right">
                          {req.status === 'Approved & Issued' ? (
                            <button 
                              onClick={() => alert(`Downloading approved document ${req.requestId}`)}
                              className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                            >
                              Download
                            </button>
                          ) : (
                            <span className="text-xs text-slate-400 font-medium">In Process</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* MODAL: Request New Certificate */}
        {showRequestModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-base font-bold text-slate-900">Request Official Document</h3>
                  <p className="text-xs text-slate-500 mt-0.5">Submitted directly to the school administrative office.</p>
                </div>
                <button 
                  onClick={() => setShowRequestModal(false)}
                  className="text-slate-400 hover:text-slate-600 text-lg font-bold p-1"
                >
                  ✕
                </button>
              </div>

              {requestSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">Request Submitted Successfully</h4>
                  <p className="text-xs text-slate-500 max-w-xs mx-auto">
                    Your request token <span className="font-mono font-bold text-slate-800">REQ-2026-0242</span> has been routed to the Registrar. You will receive an SMS and email when ready.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleRequestSubmit} className="mt-4 space-y-4 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Certificate Type</label>
                    <select 
                      value={requestType}
                      onChange={(e) => setRequestType(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                      <option value="Bonafide Student Certificate">Bonafide Student Certificate</option>
                      <option value="Character & Conduct Certificate">Character & Conduct Certificate</option>
                      <option value="Fee Structure & Estimate Certificate">Fee Structure & Estimate Certificate</option>
                      <option value="Medium of Instruction Certificate (English)">Medium of Instruction Certificate (English)</option>
                      <option value="Transfer Certificate (TC Application)">Transfer Certificate (TC Application)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Reason / Purpose of Request</label>
                    <textarea 
                      required
                      rows={3}
                      value={requestPurpose}
                      onChange={(e) => setRequestPurpose(e.target.value)}
                      placeholder="e.g. Required for passport verification / visa appointment / olympiad admission..."
                      className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">Urgency Level</label>
                    <select className="w-full px-3 py-2 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                      <option value="Normal">Normal (3-4 Business Days)</option>
                      <option value="Urgent">Urgent (24-48 Hours - Priority Queue)</option>
                    </select>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 leading-relaxed">
                    Note: Physical copies with wet ink seal and stamp can also be collected from Counter 4 (Main Administration Building) between 2:00 PM and 4:30 PM.
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setShowRequestModal(false)}
                      className="px-4 py-2 border border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition shadow-sm"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </SchoolLayout>
  );
}
