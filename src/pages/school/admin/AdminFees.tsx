import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  WalletCards, IndianRupee, ArrowUpRight, Clock, AlertTriangle, 
  Search, Download, Plus, CheckCircle2, Send, ChevronRight, X, FileText
} from 'lucide-react';

interface FeeTransaction {
  id: string;
  receiptNo: string;
  studentName: string;
  admissionNo: string;
  classGrade: string;
  quarter: string;
  amount: number;
  paymentMode: 'UPI' | 'NetBanking' | 'Cheque' | 'Cash' | 'Credit Card';
  paidDate: string;
  status: 'Successful' | 'Pending Verification' | 'Failed';
  parentName: string;
}

interface ClassFeeSummary {
  grade: string;
  totalStudents: number;
  expectedAmount: number;
  collectedAmount: number;
  pendingAmount: number;
  complianceRate: number;
}

interface FeeDefaulter {
  id: string;
  studentName: string;
  admissionNo: string;
  classGrade: string;
  parentName: string;
  parentPhone: string;
  dueQuarter: string;
  pendingAmount: number;
  overdueDays: number;
  lastReminderSent: string;
}

const mockTransactions: FeeTransaction[] = [
  {
    id: 'TXN-9021',
    receiptNo: 'REC-2026-0891',
    studentName: 'Rahul Sharma',
    admissionNo: 'GF-2023-0142',
    classGrade: 'Class 10-A',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 14500,
    paymentMode: 'UPI',
    paidDate: '10 Oct 2026',
    status: 'Successful',
    parentName: 'Mr. Manoj Sharma',
  },
  {
    id: 'TXN-9022',
    receiptNo: 'REC-2026-0892',
    studentName: 'Aarav Gupta',
    admissionNo: 'GF-2023-0189',
    classGrade: 'Class 10-A',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 14500,
    paymentMode: 'NetBanking',
    paidDate: '09 Oct 2026',
    status: 'Successful',
    parentName: 'Mr. Rajesh Gupta',
  },
  {
    id: 'TXN-9023',
    receiptNo: 'REC-2026-0893',
    studentName: 'Ananya Sharma',
    admissionNo: 'GF-2025-0412',
    classGrade: 'Class 7-B',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 12500,
    paymentMode: 'UPI',
    paidDate: '08 Oct 2026',
    status: 'Successful',
    parentName: 'Mr. Manoj Sharma',
  },
  {
    id: 'TXN-9024',
    receiptNo: 'REC-2026-0894',
    studentName: 'Kabir Verma',
    admissionNo: 'GF-2022-0087',
    classGrade: 'Class 11-PCM',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 18500,
    paymentMode: 'Cheque',
    paidDate: '07 Oct 2026',
    status: 'Successful',
    parentName: 'Dr. Anand Verma',
  },
  {
    id: 'TXN-9025',
    receiptNo: 'REC-2026-0895',
    studentName: 'Ishaan Malhotra',
    admissionNo: 'GF-2023-0219',
    classGrade: 'Class 10-B',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 14500,
    paymentMode: 'Cash',
    paidDate: '06 Oct 2026',
    status: 'Successful',
    parentName: 'Mrs. Sunita Malhotra',
  },
  {
    id: 'TXN-9026',
    receiptNo: 'REC-2026-0896',
    studentName: 'Priya Nambiar',
    admissionNo: 'GF-2024-0331',
    classGrade: 'Class 9-C',
    quarter: 'Quarter 3 (Oct - Dec 2026)',
    amount: 13500,
    paymentMode: 'Cheque',
    paidDate: '05 Oct 2026',
    status: 'Pending Verification',
    parentName: 'Mr. Suresh Nambiar',
  },
];

const mockClassSummaries: ClassFeeSummary[] = [
  { grade: 'Class 12 (Sci / Comm / Arts)', totalStudents: 220, expectedAmount: 4070000, collectedAmount: 3740000, pendingAmount: 330000, complianceRate: 91.8 },
  { grade: 'Class 11 (Sci / Comm / Arts)', totalStudents: 235, expectedAmount: 4347500, collectedAmount: 3825000, pendingAmount: 522500, complianceRate: 88.0 },
  { grade: 'Class 10 (Sections A, B, C, D)', totalStudents: 248, expectedAmount: 3596000, collectedAmount: 3262500, pendingAmount: 333500, complianceRate: 90.7 },
  { grade: 'Class 9 (Sections A, B, C, D)', totalStudents: 240, expectedAmount: 3240000, collectedAmount: 2889000, pendingAmount: 351000, complianceRate: 89.1 },
  { grade: 'Class 8 (Sections A, B, C)', totalStudents: 210, expectedAmount: 2625000, collectedAmount: 2336250, pendingAmount: 288750, complianceRate: 89.0 },
  { grade: 'Class 7 (Sections A, B, C)', totalStudents: 215, expectedAmount: 2687500, collectedAmount: 2445625, pendingAmount: 241875, complianceRate: 91.0 },
  { grade: 'Primary Wing (Classes 1 to 5)', totalStudents: 850, expectedAmount: 8500000, collectedAmount: 7650000, pendingAmount: 850000, complianceRate: 90.0 },
];

const mockDefaulters: FeeDefaulter[] = [
  {
    id: 'DEF-101',
    studentName: 'Rohan Mehra',
    admissionNo: 'GF-2023-0199',
    classGrade: 'Class 10-A',
    parentName: 'Mr. Ajay Mehra',
    parentPhone: '+91 98112 34981',
    dueQuarter: 'Quarter 3',
    pendingAmount: 14500,
    overdueDays: 14,
    lastReminderSent: '08 Oct 2026',
  },
  {
    id: 'DEF-102',
    studentName: 'Tanvi Saxena',
    admissionNo: 'GF-2024-0312',
    classGrade: 'Class 9-B',
    parentName: 'Mrs. Ritu Saxena',
    parentPhone: '+91 98721 44521',
    dueQuarter: 'Quarter 2 & 3',
    pendingAmount: 27000,
    overdueDays: 45,
    lastReminderSent: '05 Oct 2026',
  },
  {
    id: 'DEF-103',
    studentName: 'Aditya Kulkarni',
    admissionNo: 'GF-2022-0091',
    classGrade: 'Class 11-PCM',
    parentName: 'Mr. Shashi Kulkarni',
    parentPhone: '+91 98230 11987',
    dueQuarter: 'Quarter 3',
    pendingAmount: 18500,
    overdueDays: 14,
    lastReminderSent: '09 Oct 2026',
  },
  {
    id: 'DEF-104',
    studentName: 'Zoya Khan',
    admissionNo: 'GF-2025-0450',
    classGrade: 'Class 6-C',
    parentName: 'Dr. Tariq Khan',
    parentPhone: '+91 98450 77123',
    dueQuarter: 'Quarter 3',
    pendingAmount: 11500,
    overdueDays: 14,
    lastReminderSent: '10 Oct 2026',
  },
];

export function AdminFees() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'transactions' | 'classes' | 'defaulters' | 'structure'>('transactions');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollectModalOpen, setIsCollectModalOpen] = useState(false);
  const [isReminderSent, setIsReminderSent] = useState<string | null>(null);

  const handleSendReminder = (id: string) => {
    setIsReminderSent(id);
    setTimeout(() => setIsReminderSent(null), 3000);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Fee Management & Accounts Counter" 
      description="Greenfield Senior Secondary School • Academic Session 2026-27 • Financial Wing Ledger"
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gross Target (2026-27)</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <WalletCards size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">₹50,90,000</span>
              <span className="text-xs font-medium text-emerald-600 flex items-center">
                <ArrowUpRight size={12} /> +6.4% YoY
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Total annual fee schedule for 2,480 enrolled pupils</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Realized (YTD Q1-Q3)</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <IndianRupee size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">₹42,50,000</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">83.5%</span>
            </div>
            <div className="mt-2 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '83.5%' }}></div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Q3 Pending Dues</span>
              <div className="p-2 bg-rose-50 text-rose-600 rounded-xl">
                <Clock size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-rose-600">₹8,40,000</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">360 Defaulters</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Last date of Quarter 3: 31 Oct 2026 (No Late Fee)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Scholarships & RTE</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <FileText size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-600">₹4,20,000</span>
              <span className="text-xs font-semibold text-purple-700">62 Beneficiaries</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">CBSE Merit Wards & RTE Sec 12(1)(c) Waivers</p>
          </div>
        </div>

        {/* Tab Bar & Action Controls */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2 border-b md:border-b-0 pb-3 md:pb-0">
            <button
              onClick={() => setActiveTab('transactions')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'transactions'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Recent Transactions ({mockTransactions.length})
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'classes'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Class-wise Breakup
            </button>
            <button
              onClick={() => setActiveTab('defaulters')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'defaulters'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Overdue Roster ({mockDefaulters.length})
            </button>
            <button
              onClick={() => setActiveTab('structure')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'structure'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              CBSE Fee Slab Structure
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCollectModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              <Plus size={16} /> Collect Offline Fee
            </button>
            <button 
              onClick={() => alert('Downloading official Consolidated Fee Audit Report for Q1-Q3 2026-27 (PDF)...')}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-all"
            >
              <Download size={16} /> Export Tally XML
            </button>
          </div>
        </div>

        {/* Tab 1: Transactions Table */}
        {activeTab === 'transactions' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input
                  type="text"
                  placeholder="Search receipt, student or admission ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <span className="text-xs font-semibold text-slate-500">Live Gateway Sync: Razorpay & HDFC SmartHub Active</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Receipt No</th>
                    <th className="py-3 px-4">Student & Adm ID</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Quarter</th>
                    <th className="py-3 px-4">Amount</th>
                    <th className="py-3 px-4">Mode</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-blue-600 text-xs">
                        {tx.receiptNo}
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-slate-800">{tx.studentName}</div>
                        <div className="text-xs text-slate-400 font-mono">{tx.admissionNo} • {tx.parentName}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{tx.classGrade}</td>
                      <td className="py-3.5 px-4 text-xs text-slate-600">{tx.quarter}</td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        ₹{tx.amount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700">
                          {tx.paymentMode}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">{tx.paidDate}</td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          tx.status === 'Successful' 
                            ? 'bg-emerald-100 text-emerald-800' 
                            : 'bg-amber-100 text-amber-800'
                        }`}>
                          <CheckCircle2 size={12} /> {tx.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <button
                          onClick={() => alert(`Printing official School Fee Challan ${tx.receiptNo} for ${tx.studentName}`)}
                          className="px-2.5 py-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
                        >
                          Print Receipt
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Class-wise Summary */}
        {activeTab === 'classes' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5">
            <h3 className="text-base font-bold text-slate-800 mb-4">Class-wise Revenue Target vs Collection Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Academic Wing / Grade</th>
                    <th className="py-3 px-4">Enrolled Pupils</th>
                    <th className="py-3 px-4">Expected Net Dues</th>
                    <th className="py-3 px-4">Collected (Realized)</th>
                    <th className="py-3 px-4">Outstanding Balances</th>
                    <th className="py-3 px-4">Collection Rate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockClassSummaries.map((cls, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800">{cls.grade}</td>
                      <td className="py-3.5 px-4 text-slate-600">{cls.totalStudents} pupils</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-800">₹{cls.expectedAmount.toLocaleString('en-IN')}</td>
                      <td className="py-3.5 px-4 font-bold text-emerald-600">₹{cls.collectedAmount.toLocaleString('en-IN')}</td>
                      <td className="py-3.5 px-4 font-bold text-rose-600">₹{cls.pendingAmount.toLocaleString('en-IN')}</td>
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-2 rounded-full ${cls.complianceRate >= 90 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                              style={{ width: `${cls.complianceRate}%` }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold text-slate-700">{cls.complianceRate}%</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Defaulters Roster */}
        {activeTab === 'defaulters' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-800">Fee Defaulters & Delinquency Follow-up</h3>
                <p className="text-xs text-slate-500">Auto-generated reminders via Greenfield ERP Unified WhatsApp & SMS Gateway</p>
              </div>
              <button
                onClick={() => alert('Dispatched bulk WhatsApp Fee Reminders to all 360 pending guardian contact numbers.')}
                className="flex items-center gap-2 px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-sm font-semibold rounded-xl shadow-sm"
              >
                <Send size={15} /> Bulk Remind All Defaulters
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Student & ID</th>
                    <th className="py-3 px-4">Class</th>
                    <th className="py-3 px-4">Parent / Guardian</th>
                    <th className="py-3 px-4">Pending Quarter</th>
                    <th className="py-3 px-4">Overdue Amount</th>
                    <th className="py-3 px-4">Days Overdue</th>
                    <th className="py-3 px-4">Last Reminder</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {mockDefaulters.map((def) => (
                    <tr key={def.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4">
                        <div className="font-bold text-slate-800">{def.studentName}</div>
                        <div className="text-xs text-slate-400 font-mono">{def.admissionNo}</div>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{def.classGrade}</td>
                      <td className="py-3.5 px-4">
                        <div className="text-xs font-semibold text-slate-800">{def.parentName}</div>
                        <div className="text-xs text-slate-500">{def.parentPhone}</div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          {def.dueQuarter}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-rose-600">
                        ₹{def.pendingAmount.toLocaleString('en-IN')}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="text-xs font-bold text-rose-700 flex items-center gap-1">
                          <AlertTriangle size={13} /> {def.overdueDays} Days
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-slate-500">{def.lastReminderSent}</td>
                      <td className="py-3.5 px-4 text-right">
                        {isReminderSent === def.id ? (
                          <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-bold text-emerald-700 bg-emerald-50 rounded-lg">
                            <CheckCircle2 size={13} /> Sent!
                          </span>
                        ) : (
                          <button
                            onClick={() => handleSendReminder(def.id)}
                            className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition-colors"
                          >
                            Send SMS / WA
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: Fee Structure Master */}
        {activeTab === 'structure' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800">Approved CBSE Fee Slabs (Academic Session 2026-27)</h3>
            <p className="text-xs text-slate-500">As sanctioned by the School Management Committee (SMC) & CBSE Affiliation Bye-Laws.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Primary Wing (Classes 1 - 5)</span>
                <div className="mt-2 text-xl font-bold text-slate-800">₹10,000 <span className="text-xs font-normal text-slate-500">/ quarter</span></div>
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                  <li>• Tuition Fee: ₹7,000</li>
                  <li>• Computer & Smart Class: ₹1,500</li>
                  <li>• Development & Activity Fund: ₹1,500</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Middle Wing (Classes 6 - 8)</span>
                <div className="mt-2 text-xl font-bold text-slate-800">₹12,500 <span className="text-xs font-normal text-slate-500">/ quarter</span></div>
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                  <li>• Tuition Fee: ₹8,500</li>
                  <li>• Science Lab & STEAM: ₹2,000</li>
                  <li>• Sports & Library Fund: ₹2,000</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Secondary & Sr Sec (Classes 9 - 12)</span>
                <div className="mt-2 text-xl font-bold text-slate-800">₹14,500 - ₹18,500 <span className="text-xs font-normal text-slate-500">/ quarter</span></div>
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                  <li>• Tuition Fee: ₹11,000</li>
                  <li>• Physics/Chem/Bio/IP Labs: ₹4,500</li>
                  <li>• Examination & Board Charges: ₹3,000</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Collect Offline Fee */}
        {isCollectModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={() => setIsCollectModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-emerald-50 text-emerald-600 rounded-xl">
                  <WalletCards size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Fee Accounts Counter • Receive Payment</h3>
                  <p className="text-xs text-slate-500">Issue official signed school cash/cheque receipt</p>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Offline payment registered successfully! Generated Receipt #REC-2026-0897.');
                  setIsCollectModalOpen(false);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Student Admission No. / Name</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="GF-2023-0142 (Rahul Sharma, Class 10-A)"
                    className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Fee Installment</label>
                    <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option>Quarter 3 (Oct - Dec 2026)</option>
                      <option>Quarter 4 (Jan - Mar 2027)</option>
                      <option>Annual Outstanding Dues</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Amount to Collect (₹)</label>
                    <input 
                      type="number" 
                      required 
                      defaultValue={14500}
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl font-bold text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Payment Mode</label>
                    <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option>Cheque / Demand Draft</option>
                      <option>School Counter POS Swiping</option>
                      <option>Cash (Accounts Office)</option>
                      <option>Direct Bank Transfer / NEFT</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Cheque / Reference No.</label>
                    <input 
                      type="text" 
                      placeholder="e.g. CHQ-481029"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsCollectModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm"
                  >
                    Confirm & Print Challan
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
