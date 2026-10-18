import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  CreditCard, TrendingUp, AlertTriangle, CheckCircle2, 
  Download, Send, Search, Filter, ArrowUpRight, DollarSign, Wallet
} from 'lucide-react';

interface FeeTransaction {
  txnId: string;
  studentName: string;
  enrollmentNo: string;
  department: string;
  category: string;
  amount: string;
  paymentMode: 'Net Banking' | 'UPI / QR' | 'NEFT/RTGS' | 'Education Loan';
  utrNo: string;
  date: string;
  status: 'Reconciled' | 'Pending Verification';
}

export function AdminFees() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const transactions: FeeTransaction[] = [
    {
      txnId: 'TXN-2026-9041',
      studentName: 'Shivam Sharma',
      enrollmentNo: '21CS1048',
      department: 'B.Tech CSE (Sem 7)',
      category: 'Tuition & Semester Fee',
      amount: '₹85,000',
      paymentMode: 'Net Banking',
      utrNo: 'HDFC90412847',
      date: 'Aug 14, 2026',
      status: 'Reconciled'
    },
    {
      txnId: 'TXN-2026-9042',
      studentName: 'Aarav Patel',
      enrollmentNo: '21CS1012',
      department: 'B.Tech CSE (Sem 7)',
      category: 'Hostel & Mess Boarding',
      amount: '₹55,000',
      paymentMode: 'UPI / QR',
      utrNo: 'UPI91028374',
      date: 'Aug 15, 2026',
      status: 'Reconciled'
    },
    {
      txnId: 'TXN-2026-9043',
      studentName: 'Priya Nair',
      enrollmentNo: '22AI1004',
      department: 'B.Tech AI&DS (Sem 5)',
      category: 'Tuition & Semester Fee',
      amount: '₹92,500',
      paymentMode: 'Education Loan',
      utrNo: 'SBI-EL-49102',
      date: 'Aug 16, 2026',
      status: 'Reconciled'
    },
    {
      txnId: 'TXN-2026-9044',
      studentName: 'Rohan Deshmukh',
      enrollmentNo: '23ME1055',
      department: 'B.Tech Mech (Sem 3)',
      category: 'Tuition & Lab Fee',
      amount: '₹75,000',
      paymentMode: 'NEFT/RTGS',
      utrNo: 'ICIC002918',
      date: 'Aug 18, 2026',
      status: 'Pending Verification'
    },
    {
      txnId: 'TXN-2026-9045',
      studentName: 'Ananya Iyer',
      enrollmentNo: '21CS1009',
      department: 'B.Tech CSE (Sem 7)',
      category: 'Examination & Convocation',
      amount: '₹4,500',
      paymentMode: 'UPI / QR',
      utrNo: 'UPI93481029',
      date: 'Aug 19, 2026',
      status: 'Reconciled'
    }
  ];

  const filteredTxns = transactions.filter(t => {
    const matchesCat = filterCategory === 'All' || t.category.includes(filterCategory);
    const matchesSearch = t.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.enrollmentNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.txnId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.utrNo.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <CollegeLayout
      role="admin"
      user={user}
      breadcrumbs={[
        { label: 'Admin', path: '/college/admin/dashboard' },
        { label: 'Fee Management & Accounts' }
      ]}
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg">
                <CreditCard className="w-5 h-5" />
              </span>
              <h1 className="text-xl font-bold text-gray-900">Institutional Revenue & Accounts Directorate</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                FY 2026-27 Active
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Real-time tuition fee collections, hostel charges, financial aid subsidies, and automatic payment gateway reconciliations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 shadow-sm transition">
              <Download className="w-4 h-4 text-gray-500" />
              Annual Audit Ledger PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#7c3aed] hover:bg-[#6d28d9] rounded-xl shadow-sm transition">
              <Send className="w-4 h-4" />
              Broadcast Dues Reminder
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Total Collection</span>
              <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Wallet className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹42.80 Cr</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">92.04% of total billing (₹46.50 Cr)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Pending Dues Balance</span>
              <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><AlertTriangle className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹3.70 Cr</div>
            <div className="mt-1 text-xs text-amber-600 font-medium">348 students with unpaid dues</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Scholarships Disbursed</span>
              <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><TrendingUp className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">₹2.40 Cr</div>
            <div className="mt-1 text-xs text-gray-500">PMSSS & Merit concessions (412 students)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Gateway Settlement</span>
              <span className="p-2 bg-purple-50 text-[#7c3aed] rounded-lg"><CheckCircle2 className="w-4 h-4" /></span>
            </div>
            <div className="mt-2 text-2xl font-bold text-gray-900">100% Reconciled</div>
            <div className="mt-1 text-xs text-emerald-600 font-medium">HDFC & Razorpay SmartCollect T+1</div>
          </div>
        </div>

        {/* Revenue Category Progress Bar */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
          <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">Revenue Composition Breakdown</h3>
          <div className="h-3 w-full bg-gray-100 rounded-full flex overflow-hidden">
            <div className="bg-[#7c3aed]" style={{ width: '67%' }} title="Academic Tuition (67%)" />
            <div className="bg-emerald-500" style={{ width: '18%' }} title="Hostel & Dining (18%)" />
            <div className="bg-blue-500" style={{ width: '8%' }} title="Exams & Certification (8%)" />
            <div className="bg-amber-400" style={{ width: '7%' }} title="Development & Lab Fees (7%)" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#7c3aed]" />
              <span className="text-gray-600">Tuition & Academics: <strong className="text-gray-900">₹31.2 Cr</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-gray-600">Hostel & Dining: <strong className="text-gray-900">₹8.4 Cr</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500" />
              <span className="text-gray-600">Exam & Transcripts: <strong className="text-gray-900">₹3.2 Cr</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-400" />
              <span className="text-gray-600">Lab & Development: <strong className="text-gray-900">₹3.7 Cr</strong></span>
            </div>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by student, PRN, UTR, Txn ID..."
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
              <option value="Tuition">Tuition & Semester</option>
              <option value="Hostel">Hostel & Mess</option>
              <option value="Examination">Examination & Convocation</option>
            </select>
          </div>
        </div>

        {/* Transactions Table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-sm font-bold text-gray-900">Recent Collections & Payments Realized</h2>
            <span className="text-xs text-gray-500 font-medium">Showing {filteredTxns.length} entries</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/80 text-[11px] font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  <th className="py-3 px-4">Txn Ref / Date</th>
                  <th className="py-3 px-4">Student & Enrollment</th>
                  <th className="py-3 px-4">Fee Category</th>
                  <th className="py-3 px-4">Amount Paid</th>
                  <th className="py-3 px-4">Payment Channel</th>
                  <th className="py-3 px-4">Bank UTR</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs">
                {filteredTxns.map((t) => (
                  <tr key={t.txnId} className="hover:bg-purple-50/20 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="font-mono font-semibold text-gray-900">{t.txnId}</div>
                      <div className="text-[11px] text-gray-500">{t.date}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-gray-900">{t.studentName}</div>
                      <div className="text-[11px] text-gray-500">{t.enrollmentNo} • {t.department}</div>
                    </td>
                    <td className="py-3.5 px-4 font-medium text-gray-800">
                      {t.category}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {t.amount}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-[11px] font-medium">
                        {t.paymentMode}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono text-[11px] text-gray-600">
                      {t.utrNo}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                        t.status === 'Reconciled'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button className="px-2 py-1 text-xs font-semibold text-[#7c3aed] hover:bg-purple-50 rounded transition">
                        Receipt
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
