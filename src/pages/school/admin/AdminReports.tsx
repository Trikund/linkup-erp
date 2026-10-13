import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  FileBarChart, Download, Users, TrendingUp, CheckCircle2, 
  Calendar, ArrowUpRight, Filter, PieChart, ShieldCheck, Printer
} from 'lucide-react';

export function AdminReports() {
  const user = USERS.admin;
  const [selectedReportType, setSelectedReportType] = useState('demographics');

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Institutional Analytics & CBSE Statutory Reports" 
      description="Greenfield Senior Secondary School • UDISE+ Code: 07040201842 • Session 2026-27"
    >
      <div className="space-y-6">
        {/* Top Executive KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Student-Teacher Ratio</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <Users size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">1 : 28.8</span>
              <span className="text-xs font-bold text-emerald-600">CBSE Standard</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">2,480 Students / 86 Full-time Faculty members</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Gender Ratio</span>
              <div className="p-2 bg-pink-50 text-pink-600 rounded-xl">
                <PieChart size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">54% : 46%</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">1,339 Boys • 1,141 Girls (Healthy Balika ratio)</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">UDISE+ Compliance</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">100% Certified</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">All 2,480 Permanent Education Numbers (PEN) verified</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">5-Yr Board Pass Average</span>
              <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                <TrendingUp size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-indigo-600">98.4%</span>
              <span className="text-xs font-semibold text-emerald-600 flex items-center">
                <ArrowUpRight size={12} /> +1.2%
              </span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Consistent CBSE Delhi Region Top 5 Quartile</p>
          </div>
        </div>

        {/* Report Selector Pills & Controls */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setSelectedReportType('demographics')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedReportType === 'demographics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Demographics & Enrolment
            </button>
            <button
              onClick={() => setSelectedReportType('academic')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedReportType === 'academic'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Academic Board Trends
            </button>
            <button
              onClick={() => setSelectedReportType('faculty')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedReportType === 'faculty'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Staff & Teacher Workload
            </button>
            <button
              onClick={() => setSelectedReportType('financial')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                selectedReportType === 'financial'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Financial & Fee Audit
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => alert(`Generating and downloading full statutory dossier for "${selectedReportType}" in PDF...`)}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              <Download size={15} /> Export PDF Dossier
            </button>
            <button 
              onClick={() => alert(`Exporting UDISE+ raw data packet for Ministry of Education submission...`)}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-all"
            >
              <FileBarChart size={15} /> Export Excel / CSV
            </button>
          </div>
        </div>

        {/* Report 1: Demographics */}
        {selectedReportType === 'demographics' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-800 mb-2">Wing-wise Enrollment & Capacity Breakdown</h3>
              <p className="text-xs text-slate-500 mb-4">Official counts mapped against sanctioned section limits</p>

              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Senior Secondary Wing (Classes 11 & 12 • Science, Commerce, Arts)</span>
                    <span>455 / 480 pupils (94.8% capacity)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '94.8%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Secondary Wing (Classes 9 & 10 • 8 Sections)</span>
                    <span>488 / 500 pupils (97.6% capacity)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '97.6%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Middle Wing (Classes 6 to 8 • 12 Sections)</span>
                    <span>687 / 720 pupils (95.4% capacity)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: '95.4%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700 mb-1">
                    <span>Primary Wing (Classes 1 to 5 • 20 Sections)</span>
                    <span>850 / 900 pupils (94.4% capacity)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '94.4%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-slate-800">Social Category Distribution (UDISE+ Standard)</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">General Category</span>
                    <strong className="text-slate-800">1,480 pupils (59.7%)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">OBC (Other Backward Classes)</span>
                    <strong className="text-slate-800">595 pupils (24.0%)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Scheduled Caste (SC)</span>
                    <strong className="text-slate-800">260 pupils (10.5%)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Scheduled Tribe (ST)</span>
                    <strong className="text-slate-800">145 pupils (5.8%)</strong>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-slate-800">RTE Act Section 12(1)(c) Compliance</h4>
                <p className="text-xs text-slate-500">25% admission quota for Economically Weaker Section (EWS) & Disadvantaged Groups</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Sanctioned RTE Seats</span>
                    <strong className="text-slate-800">120 Seats (Primary Entry)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Admitted RTE Candidates</span>
                    <strong className="text-emerald-700">120 Seats Filled (100%)</strong>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-600">Govt. Tuition Reimbursement Status</span>
                    <strong className="text-blue-600">Received up to Q2 2026</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Report 2: Academic Board Trends */}
        {selectedReportType === 'academic' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-800">CBSE Class 10 & 12 Board Performance Trajectory (2022 - 2026)</h3>
            <p className="text-xs text-slate-500">Official Board Examination pass percentage and 90%+ distinctions track</p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-700">
                <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200 text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Academic Session</th>
                    <th className="py-3 px-4">Class 10 Appeared</th>
                    <th className="py-3 px-4">Class 10 Pass %</th>
                    <th className="py-3 px-4">Class 12 Appeared</th>
                    <th className="py-3 px-4">Class 12 Pass %</th>
                    <th className="py-3 px-4">90%+ Scorers</th>
                    <th className="py-3 px-4">School Average</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-4 font-bold text-slate-800">2025-26</td>
                    <td className="py-3.5 px-4">242 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">99.2%</td>
                    <td className="py-3.5 px-4">218 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">98.6%</td>
                    <td className="py-3.5 px-4 font-bold text-blue-600">114 students</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">84.2%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-4 font-bold text-slate-800">2024-25</td>
                    <td className="py-3.5 px-4">238 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">98.7%</td>
                    <td className="py-3.5 px-4">210 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">98.1%</td>
                    <td className="py-3.5 px-4 font-bold text-blue-600">98 students</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">82.8%</td>
                  </tr>
                  <tr className="hover:bg-slate-50/80">
                    <td className="py-3.5 px-4 font-bold text-slate-800">2023-24</td>
                    <td className="py-3.5 px-4">230 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">98.3%</td>
                    <td className="py-3.5 px-4">204 pupils</td>
                    <td className="py-3.5 px-4 font-bold text-emerald-600">97.5%</td>
                    <td className="py-3.5 px-4 font-bold text-blue-600">89 students</td>
                    <td className="py-3.5 px-4 font-bold text-slate-800">81.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Report 3: Staff Workload */}
        {selectedReportType === 'faculty' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-800">Staff Workload & Cadre Distribution (86 Faculty)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-blue-600 uppercase">Post Graduate Teachers (PGT)</span>
                <div className="text-xl font-bold text-slate-900 mt-1">24 Teachers</div>
                <p className="text-xs text-slate-500 mt-2">Avg Workload: 26 periods/week</p>
                <p className="text-xs text-slate-500">Qualifications: M.Sc/M.A + B.Ed / Ph.D</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-indigo-600 uppercase">Trained Graduate Teachers (TGT)</span>
                <div className="text-xl font-bold text-slate-900 mt-1">34 Teachers</div>
                <p className="text-xs text-slate-500 mt-2">Avg Workload: 28 periods/week</p>
                <p className="text-xs text-slate-500">Qualifications: B.Sc/B.A + B.Ed + CTET</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-purple-600 uppercase">Primary & Co-Curricular (PRT/PET)</span>
                <div className="text-xl font-bold text-slate-900 mt-1">28 Teachers</div>
                <p className="text-xs text-slate-500 mt-2">Avg Workload: 28 periods/week</p>
                <p className="text-xs text-slate-500">Qualifications: D.El.Ed / B.P.Ed / Fine Arts</p>
              </div>
            </div>
          </div>
        )}

        {/* Report 4: Financial */}
        {selectedReportType === 'financial' && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-800">Audited Financial Summary (Academic Session 2026-27 YTD)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold text-slate-500 uppercase">Gross Fee Receivables</span>
                <div className="text-xl font-bold text-slate-900 mt-1">₹50,90,000</div>
                <p className="text-xs text-slate-500 mt-1">Total scheduled annual tuition & charges</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-emerald-50 border-emerald-200">
                <span className="text-xs font-bold text-emerald-700 uppercase">Net Realized Collection</span>
                <div className="text-xl font-bold text-emerald-800 mt-1">₹42,50,000 (83.5%)</div>
                <p className="text-xs text-emerald-600 mt-1">Directly credited to School Bank Accounts</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-rose-50 border-rose-200">
                <span className="text-xs font-bold text-rose-700 uppercase">Outstanding Quarter 3 Dues</span>
                <div className="text-xl font-bold text-rose-800 mt-1">₹8,40,000</div>
                <p className="text-xs text-rose-600 mt-1">Overdue notices sent via SMS/WhatsApp</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
