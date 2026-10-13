import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CreditCard, Download, CheckCircle2, Clock, AlertTriangle, 
  Receipt, ArrowUpRight, ShieldCheck, DollarSign, Calendar, Info, X
} from 'lucide-react';

interface FeeBreakdownItem {
  head: string;
  amount: number;
  description: string;
}

interface PaymentRecord {
  id: string;
  receiptNo: string;
  childName: string;
  quarter: string;
  datePaid: string;
  amount: number;
  mode: string;
  transactionRef: string;
  status: 'success' | 'pending';
}

const childFeeData = {
  rahul: {
    childName: 'Rahul Sharma',
    classSection: 'Class 10-A',
    admissionNo: 'DPS/2021/1042',
    annualTotal: 84000,
    paidTotal: 63000,
    dueTotal: 21000,
    dueDate: '10 Nov 2026',
    quarterName: 'Quarter 3 (Oct 2026 – Dec 2026)',
    breakdown: [
      { head: 'Tuition & Academic Instructional Fee', amount: 13500, description: 'Class 10 Board curriculum instruction & mentor care' },
      { head: 'Senior Science & IT Laboratory Fee', amount: 3000, description: 'Physics, Chemistry & Computer coding lab consumables' },
      { head: 'AC School Bus Transport (Route #14)', amount: 3500, description: 'Green Meadows pick-up & drop' },
      { head: 'CBSE Board Examination Registration & Exam Paper Pool', amount: 1000, description: 'Pre-board question papers & external registration' },
    ],
  },
  ananya: {
    childName: 'Ananya Sharma',
    classSection: 'Class 7-B',
    admissionNo: 'DPS/2024/3192',
    annualTotal: 72000,
    paidTotal: 54000,
    dueTotal: 18000,
    dueDate: '10 Nov 2026',
    quarterName: 'Quarter 3 (Oct 2026 – Dec 2026)',
    breakdown: [
      { head: 'Tuition & Academic Instructional Fee', amount: 11500, description: 'Middle school NEP curriculum instructional charges' },
      { head: 'Activity, Fine Arts & Science Discovery Lab', amount: 2000, description: 'Art supplies, clay, and STEM kit exploration' },
      { head: 'AC School Bus Transport (Route #14)', amount: 3500, description: 'Green Meadows pick-up & drop' },
      { head: 'Library & Co-Curricular Fund', amount: 1000, description: 'Subscription to middle school magazines & reading club' },
    ],
  }
};

const mockReceipts: PaymentRecord[] = [
  {
    id: 'TXN-901',
    receiptNo: 'DPS/REC/2026/0942',
    childName: 'Rahul Sharma (10-A)',
    quarter: 'Quarter 2 (Jul - Sep 2026)',
    datePaid: '08 Jul 2026',
    amount: 21000,
    mode: 'HDFC NetBanking',
    transactionRef: 'HDFC-TXN-88492019',
    status: 'success',
  },
  {
    id: 'TXN-902',
    receiptNo: 'DPS/REC/2026/0943',
    childName: 'Ananya Sharma (7-B)',
    quarter: 'Quarter 2 (Jul - Sep 2026)',
    datePaid: '08 Jul 2026',
    amount: 18000,
    mode: 'HDFC NetBanking',
    transactionRef: 'HDFC-TXN-88492020',
    status: 'success',
  },
  {
    id: 'TXN-801',
    receiptNo: 'DPS/REC/2026/0411',
    childName: 'Rahul Sharma (10-A)',
    quarter: 'Quarter 1 (Apr - Jun 2026)',
    datePaid: '05 Apr 2026',
    amount: 42000,
    mode: 'Razorpay UPI (GPay)',
    transactionRef: 'UPI-99482019482',
    status: 'success',
  },
  {
    id: 'TXN-802',
    receiptNo: 'DPS/REC/2026/0412',
    childName: 'Ananya Sharma (7-B)',
    quarter: 'Quarter 1 (Apr - Jun 2026)',
    datePaid: '05 Apr 2026',
    amount: 36000,
    mode: 'Razorpay UPI (GPay)',
    transactionRef: 'UPI-99482019483',
    status: 'success',
  },
];

export const ParentFees: React.FC = () => {
  const [selectedChild, setSelectedChild] = useState<'rahul' | 'ananya'>('rahul');
  const [isPayModalOpen, setIsPayModalOpen] = useState(false);
  const [paymentMode, setPaymentMode] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const activeData = childFeeData[selectedChild];

  const handlePay = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1500);
  };

  const handleDownloadReceipt = (receiptNo: string) => {
    alert(`Downloading Tax Exemption (Sec 80C) Receipt: ${receiptNo}`);
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Tuition Fees & Online Payment Ledger"
      description="Quarterly school fees, breakdown of academic & bus dues, online payments, and Section 80C tax receipts."
    >
      <div className="space-y-6">
        {/* Top Banner & Child Switcher */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tuition Fees & Online Payment Ledger</h1>
          <p className="text-sm text-gray-600 mt-1">
            Quarterly school fees, breakdown of academic & bus dues, online payments, and Section 80C tax receipts.
          </p>
        </div>

        {/* Child Selector */}
        <div className="flex items-center bg-gray-100 p-1 rounded-xl border border-gray-200">
          <button
            onClick={() => setSelectedChild('rahul')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'rahul'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">R</div>
            <span>Rahul (10-A)</span>
          </button>
          <button
            onClick={() => setSelectedChild('ananya')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              selectedChild === 'ananya'
                ? 'bg-white text-indigo-600 shadow-sm font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <div className="w-6 h-6 rounded-full bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-bold">A</div>
            <span>Ananya (7-B)</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Annual Fee (2026-27)</span>
            <span className="p-2 bg-indigo-50 text-indigo-600 rounded-lg"><DollarSign className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">₹{activeData.annualTotal.toLocaleString('en-IN')}</span>
            <span className="text-xs text-gray-500">4 Quarters</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Total Paid to Date</span>
            <span className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">₹{activeData.paidTotal.toLocaleString('en-IN')}</span>
            <span className="text-xs text-emerald-700 font-medium">Q1 & Q2 Cleared</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Current Quarter Due</span>
            <span className="p-2 bg-amber-50 text-amber-600 rounded-lg"><Clock className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-amber-600">₹{activeData.dueTotal.toLocaleString('en-IN')}</span>
            <span className="text-xs text-amber-700 font-medium">Due by {activeData.dueDate}</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-500">Late Fee Fine</span>
            <span className="p-2 bg-blue-50 text-blue-600 rounded-lg"><ShieldCheck className="w-5 h-5" /></span>
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-emerald-600">₹0</span>
            <span className="text-xs text-emerald-700 font-medium">No late charges</span>
          </div>
        </div>
      </div>

      {/* Main Content: Current Quarter Breakdown + Action & Payment History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Current Quarter Invoice Breakdown */}
        <div className="lg:col-span-7 bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700">
                Payment Due
              </span>
              <h2 className="text-lg font-bold text-gray-900 mt-1">{activeData.quarterName}</h2>
              <p className="text-xs text-gray-500">
                Student: <strong>{activeData.childName}</strong> • {activeData.classSection} • Admn: {activeData.admissionNo}
              </p>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-500">Total Payable:</span>
              <div className="text-2xl font-bold text-indigo-700">₹{activeData.dueTotal.toLocaleString('en-IN')}</div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Itemized Fee Structure</h3>
            <div className="divide-y divide-gray-100 border border-gray-100 rounded-lg overflow-hidden">
              {activeData.breakdown.map((item, idx) => (
                <div key={idx} className="p-3 flex items-start justify-between bg-white hover:bg-gray-50 transition-colors">
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{item.head}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                  </div>
                  <div className="text-sm font-bold text-gray-900 ml-4">
                    ₹{item.amount.toLocaleString('en-IN')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notice banner & Pay Action Button */}
          <div className="bg-blue-50 p-3.5 rounded-xl border border-blue-100 flex items-start gap-3">
            <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-xs text-blue-900 space-y-1">
              <p className="font-semibold">Fee Payment Grace Period Notice</p>
              <p className="text-blue-800 leading-relaxed">
                Parents are requested to clear Quarter 3 fees by <strong>10 Nov 2026</strong>. Late fee penalty of ₹50/day is applicable from 15 Nov 2026.
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => { setIsPayModalOpen(true); setPaymentSuccess(false); }}
              className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <CreditCard className="w-4 h-4" /> Pay ₹{activeData.dueTotal.toLocaleString('en-IN')} Online Now
            </button>
            <button
              onClick={() => alert(`Fee Challan Generated for ${activeData.childName}. You can submit cash/cheque at the School Accounts counter.`)}
              className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Generate Offline Bank Challan
            </button>
          </div>
        </div>

        {/* Right Column: Direct Bank Transfer Details & Help */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Direct NEFT / RTGS / IMPS Transfer Details
            </h3>
            <p className="text-xs text-gray-500">
              In case of direct bank wire transfer, please mention Admission Number <strong>{activeData.admissionNo}</strong> in the transfer remarks.
            </p>

            <div className="bg-gray-50 p-3.5 rounded-lg border border-gray-200 text-xs space-y-2 font-mono">
              <div className="flex justify-between">
                <span className="text-gray-500">Bank Name:</span>
                <span className="font-semibold text-gray-900">HDFC Bank Limited</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Account Name:</span>
                <span className="font-semibold text-gray-900">Delhi Public Senior Sec School</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">A/C Number:</span>
                <span className="font-semibold text-indigo-700">50200049281039</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">IFSC Code:</span>
                <span className="font-semibold text-gray-900">HDFC0001234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Branch:</span>
                <span className="font-semibold text-gray-900">Cyber City, Gurugram</span>
              </div>
            </div>

            <div className="p-3 bg-amber-50 rounded-lg text-xs text-amber-900 space-y-1">
              <p className="font-semibold">Income Tax Benefit (Section 80C)</p>
              <p className="text-amber-800 leading-relaxed">
                Tuition fee component is eligible for tax deduction under Section 80C of IT Act 1961. Download verified tax receipts below.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-3">
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Accounts Desk Helpline</h4>
            <div className="text-xs text-gray-600 space-y-1.5">
              <p>Email: <strong className="text-gray-900">accounts@dpsgurugram.edu.in</strong></p>
              <p>Desk Phone: <strong className="text-gray-900">+91 124 456 7892 (Ext 104)</strong></p>
              <p>Timing: Mon - Sat (09:00 AM - 02:00 PM)</p>
            </div>
          </div>
        </div>
      </div>

      {/* Payment History & Verified Receipts Table */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
          <div>
            <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
              <Receipt className="w-5 h-5 text-indigo-600" />
              Verified Payment Receipts & History (Session 2026-27)
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">Instant downloads for GST and Section 80C tax exemption documentation.</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
              <tr>
                <th className="py-3 px-4">Receipt Number</th>
                <th className="py-3 px-4">Student</th>
                <th className="py-3 px-4">Fee Quarter</th>
                <th className="py-3 px-4">Date Paid</th>
                <th className="py-3 px-4">Amount</th>
                <th className="py-3 px-4">Payment Method & Reference</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-800">
              {mockReceipts.map((rec) => (
                <tr key={rec.id} className="hover:bg-indigo-50/30 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-semibold text-indigo-700 text-xs">
                    {rec.receiptNo}
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-gray-900">
                    {rec.childName}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-600">
                    {rec.quarter}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-700">
                    {rec.datePaid}
                  </td>
                  <td className="py-3.5 px-4 font-bold text-gray-900">
                    ₹{rec.amount.toLocaleString('en-IN')}
                  </td>
                  <td className="py-3.5 px-4 text-xs text-gray-600">
                    <div>{rec.mode}</div>
                    <span className="text-[11px] text-gray-400 font-mono">{rec.transactionRef}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 flex items-center gap-1 w-max">
                      <CheckCircle2 className="w-3 h-3" /> Cleared
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => handleDownloadReceipt(rec.receiptNo)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> 80C PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Online Payment Modal */}
      {isPayModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden animate-in fade-in">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-indigo-900 to-indigo-800 text-white">
              <div>
                <h3 className="text-base font-bold">Secure Fee Payment Gateway</h3>
                <p className="text-xs text-indigo-200 mt-0.5">Delhi Public School • SSL 256-bit Encrypted</p>
              </div>
              <button 
                onClick={() => setIsPayModalOpen(false)}
                className="text-white/80 hover:text-white p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              {paymentSuccess ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Payment Successful!</h4>
                  <p className="text-xs text-gray-600 max-w-xs mx-auto">
                    Your fee payment of <strong>₹{activeData.dueTotal.toLocaleString('en-IN')}</strong> for {activeData.childName} has been processed. Transaction ID: <strong>TXN-{Math.floor(100000 + Math.random() * 900000)}</strong>
                  </p>
                  <div className="pt-3 flex gap-3">
                    <button
                      onClick={() => { setIsPayModalOpen(false); setPaymentSuccess(false); }}
                      className="flex-1 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700"
                    >
                      Close & Return to Ledger
                    </button>
                    <button
                      onClick={() => alert('Downloading official receipt')}
                      className="flex-1 py-2.5 border border-gray-300 text-gray-700 rounded-xl text-xs font-semibold hover:bg-gray-50 flex items-center justify-center gap-1.5"
                    >
                      <Download className="w-3.5 h-3.5" /> Download Receipt
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500">{activeData.childName} ({activeData.classSection})</div>
                      <div className="text-sm font-bold text-gray-900">{activeData.quarterName}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">Payable Amount</div>
                      <div className="text-xl font-extrabold text-indigo-700">₹{activeData.dueTotal.toLocaleString('en-IN')}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Choose Payment Channel</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        type="button"
                        onClick={() => setPaymentMode('upi')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMode === 'upi'
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold shadow-xs'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs">Instant UPI</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">GPay / PhonePe</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMode('netbanking')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMode === 'netbanking'
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold shadow-xs'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs">Net Banking</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">All Major Banks</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setPaymentMode('card')}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMode === 'card'
                            ? 'border-indigo-600 bg-indigo-50/50 text-indigo-700 font-bold shadow-xs'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <div className="text-xs">Cards / EMI</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">Debit / Credit</div>
                      </button>
                    </div>
                  </div>

                  {paymentMode === 'upi' && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-700">Enter UPI ID / VPA</label>
                      <input
                        type="text"
                        defaultValue="priya.sharma@okhdfcbank"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                      />
                      <p className="text-[11px] text-gray-500">A payment collect request will be sent to your UPI application.</p>
                    </div>
                  )}

                  {paymentMode === 'netbanking' && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-700">Select Bank</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>HDFC Bank</option>
                        <option>State Bank of India</option>
                        <option>ICICI Bank</option>
                        <option>Axis Bank</option>
                        <option>Kotak Mahindra Bank</option>
                      </select>
                    </div>
                  )}

                  {paymentMode === 'card' && (
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-gray-700">Card Number</label>
                      <input
                        type="text"
                        placeholder="4532 •••• •••• 8912"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-mono"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <input
                          type="text"
                          placeholder="MM/YY"
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-center"
                        />
                        <input
                          type="password"
                          placeholder="CVV"
                          maxLength={3}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-center"
                        />
                      </div>
                    </div>
                  )}

                  <button
                    disabled={isProcessing}
                    onClick={handlePay}
                    className="w-full py-3 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <Clock className="w-4 h-4 animate-spin" /> Processing Secure Payment...
                      </>
                    ) : (
                      <>
                        Confirm & Pay ₹{activeData.dueTotal.toLocaleString('en-IN')}
                      </>
                    )}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      </div>
    </SchoolLayout>
  );
};
