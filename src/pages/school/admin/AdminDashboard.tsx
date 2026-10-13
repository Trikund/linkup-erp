import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Users, GraduationCap, BookOpen, CalendarCheck, WalletCards, Building,
  TrendingUp, ArrowUpRight, ArrowDownRight, Plus, Megaphone, UserPlus,
  Bus, CheckCircle2, Clock, AlertTriangle, ChevronRight, FileText,
  DollarSign, ShieldCheck, Activity, Search, Filter, X
} from 'lucide-react';

interface QuickStat {
  label: string;
  value: string;
  subValue: string;
  trend: string;
  isPositive: boolean;
  icon: any;
  color: string;
}

export function AdminDashboard() {
  const user = USERS.admin;
  const [enrollmentYear, setEnrollmentYear] = useState('2026-27');
  const [quickActionModal, setQuickActionModal] = useState<string | null>(null);

  // Quick Action form state
  const [newStudentName, setNewStudentName] = useState('');
  const [newStudentClass, setNewStudentClass] = useState('10-A');
  const [noticeTitle, setNoticeTitle] = useState('');
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);

  const kpis: QuickStat[] = [
    {
      label: 'Enrolled Students',
      value: '2,480',
      subValue: '64 Class Sections',
      trend: '+142 this term',
      isPositive: true,
      icon: GraduationCap,
      color: 'indigo',
    },
    {
      label: 'Faculty & Mentors',
      value: '86',
      subValue: '84 Present Today',
      trend: '97.6% staff turnout',
      isPositive: true,
      icon: BookOpen,
      color: 'blue',
    },
    {
      label: 'Registered Parents',
      value: '2,120',
      subValue: '98.2% Portal Active',
      trend: '+45 new signups',
      isPositive: true,
      icon: Users,
      color: 'purple',
    },
    {
      label: 'Today’s Attendance',
      value: '93.8%',
      subValue: '2,326 / 2,480 Present',
      trend: '+1.4% vs last week',
      isPositive: true,
      icon: CalendarCheck,
      color: 'emerald',
    },
    {
      label: 'Active Classrooms',
      value: '64',
      subValue: '100% Smart Boards',
      trend: 'Zero empty rooms',
      isPositive: true,
      icon: Building,
      color: 'teal',
    },
    {
      label: 'Fee Dues (Q3)',
      value: '₹8.40 L',
      subValue: 'Target: ₹50.90 L',
      trend: '₹42.50 L Collected (83.5%)',
      isPositive: false,
      icon: WalletCards,
      color: 'amber',
    },
  ];

  const enrollmentData = [
    { grade: 'Class 6', count: 240, capacity: 250, fillPct: 96, boys: 125, girls: 115 },
    { grade: 'Class 7', count: 260, capacity: 270, fillPct: 96, boys: 132, girls: 128 },
    { grade: 'Class 8', count: 280, capacity: 290, fillPct: 96, boys: 144, girls: 136 },
    { grade: 'Class 9', count: 310, capacity: 320, fillPct: 97, boys: 160, girls: 150 },
    { grade: 'Class 10', count: 325, capacity: 330, fillPct: 98, boys: 170, girls: 155 },
    { grade: 'Class 11', count: 295, capacity: 310, fillPct: 95, boys: 155, girls: 140 },
    { grade: 'Class 12', count: 310, capacity: 320, fillPct: 97, boys: 162, girls: 148 },
  ];

  const recentAdmissions = [
    { id: 'ADM-2026-401', name: 'Aarav Gupta', class: 'Class 10-A', date: '11 Oct 2026', parent: 'Dr. Sameer Gupta', phone: '+91 98112 44321', feeStatus: 'Paid' },
    { id: 'ADM-2026-402', name: 'Diya Patel', class: 'Class 7-B', date: '09 Oct 2026', parent: 'Mrs. Neeta Patel', phone: '+91 98223 55432', feeStatus: 'Paid' },
    { id: 'ADM-2026-403', name: 'Kabir Verma', class: 'Class 11-PCM', date: '08 Oct 2026', parent: 'Mr. Arvind Verma', phone: '+91 98334 66543', feeStatus: 'Pending Verification' },
    { id: 'ADM-2026-404', name: 'Ishita Sen', class: 'Class 9-C', date: '06 Oct 2026', parent: 'Mrs. Rohini Sen', phone: '+91 98445 77654', feeStatus: 'Paid' },
    { id: 'ADM-2026-405', name: 'Rohan Mehra', class: 'Class 8-A', date: '04 Oct 2026', parent: 'Mr. Deepak Mehra', phone: '+91 98556 88765', feeStatus: 'Paid' },
  ];

  const transportStatus = [
    { route: 'Route #14 (Noida / Sec 62)', driver: 'Mr. Balram', busNo: 'UP-16-BT-9142', students: 48, status: 'On Route • On Time', delay: '0 min' },
    { route: 'Route #08 (Greater Noida W)', driver: 'Mr. Suresh Pal', busNo: 'UP-16-BT-8812', students: 52, status: 'On Route • On Time', delay: '0 min' },
    { route: 'Route #21 (Mayur Vihar Ph 1)', driver: 'Mr. Dharamvir', busNo: 'DL-01-AX-3211', students: 44, status: 'Arrived at Campus', delay: 'Completed' },
  ];

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActionSuccess(`Action successfully recorded in school central administrative ledger.`);
    setTimeout(() => {
      setActionSuccess(null);
      setQuickActionModal(null);
    }, 2000);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user}
      title={`Good Morning, ${user.name.split(' ')[0]} 👋`}
      description="Greenfield Senior Secondary School (CBSE Affiliation #2130842) • Central Administrative Command Center"
    >
      <div className="space-y-6">
        {/* KPI Top Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {kpis.map((kpi, idx) => (
            <div 
              key={idx}
              className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-500 truncate">{kpi.label}</span>
                <span className={`p-1.5 rounded-lg ${
                  kpi.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                  kpi.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                  kpi.color === 'purple' ? 'bg-purple-50 text-purple-600' :
                  kpi.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' :
                  kpi.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                  'bg-amber-50 text-amber-600'
                }`}>
                  <kpi.icon className="w-4 h-4" />
                </span>
              </div>

              <div className="mt-2">
                <div className="text-2xl font-extrabold text-gray-900">{kpi.value}</div>
                <div className="text-[11px] font-medium text-gray-500 truncate mt-0.5">{kpi.subValue}</div>
              </div>

              <div className="mt-2 pt-2 border-t border-gray-100 flex items-center gap-1 text-[11px]">
                {kpi.isPositive ? (
                  <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                    <ArrowUpRight className="w-3 h-3" /> {kpi.trend}
                  </span>
                ) : (
                  <span className="text-amber-600 font-semibold flex items-center gap-0.5">
                    <AlertTriangle className="w-3 h-3" /> {kpi.trend}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid: Enrollment & Actions + Fee Collections */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (8 cols): Visual Enrollment Analytics + Recent Admissions */}
          <div className="lg:col-span-8 space-y-6">
            {/* Student Enrollment Chart Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 pb-4">
                <div>
                  <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-indigo-600" />
                    Student Enrollment & Capacity Distribution
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Class-wise strength across Middle & Senior Wings • 2,480 Total Enrolled Students
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select 
                    value={enrollmentYear}
                    onChange={(e) => setEnrollmentYear(e.target.value)}
                    className="text-xs font-semibold border border-gray-300 rounded-lg px-3 py-1.5 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="2026-27">Academic Year 2026-27</option>
                    <option value="2025-26">Academic Year 2025-26</option>
                  </select>
                </div>
              </div>

              {/* High-Contrast Interactive Bar Chart */}
              <div className="pt-2">
                <div className="grid grid-cols-7 gap-3 sm:gap-4 items-end h-56 pt-6 pb-2 px-2 bg-gradient-to-b from-gray-50/50 to-indigo-50/20 rounded-xl border border-gray-100">
                  {enrollmentData.map((item, idx) => {
                    const heightPct = Math.round((item.count / 350) * 100);
                    return (
                      <div key={idx} className="flex flex-col items-center h-full justify-end group">
                        {/* Hover Tooltip */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-[10px] rounded px-2 py-1 mb-2 font-mono whitespace-nowrap shadow-lg pointer-events-none">
                          {item.count} / {item.capacity} ({item.fillPct}%)
                        </div>

                        {/* Bar */}
                        <div className="w-full max-w-[42px] bg-indigo-100 rounded-t-lg relative overflow-hidden transition-all group-hover:shadow-md" style={{ height: `${heightPct}%` }}>
                          <div 
                            className="absolute inset-0 bg-gradient-to-t from-indigo-700 to-indigo-500 rounded-t-lg transition-all group-hover:from-indigo-800 group-hover:to-indigo-600"
                          />
                          <span className="absolute top-1 left-1/2 -translate-x-1/2 text-[10px] font-bold text-white">
                            {item.count}
                          </span>
                        </div>

                        {/* Label */}
                        <span className="text-[11px] font-bold text-gray-700 mt-2 truncate w-full text-center">
                          {item.grade}
                        </span>
                        <span className="text-[10px] text-gray-400 font-medium">
                          {item.fillPct}%
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-gray-500 pt-3 border-t border-gray-100 mt-3">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-indigo-600 inline-block" /> Enrolled Count
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-indigo-100 inline-block border border-indigo-200" /> Maximum Section Capacity
                    </span>
                  </div>
                  <span className="font-semibold text-gray-700">Average Capacity Utilization: 96.7%</span>
                </div>
              </div>
            </div>

            {/* Recent Admissions Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <h3 className="text-base font-bold text-gray-900">Recent Student Admissions & Registrations</h3>
                  <p className="text-xs text-gray-500">Processed this week under CBSE General Registration Guidelines</p>
                </div>
                <a href="/school/admin/students" className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
                  View Full Registry ({2480}) <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                    <tr>
                      <th className="py-2.5 px-3">Admission No</th>
                      <th className="py-2.5 px-3">Student Name</th>
                      <th className="py-2.5 px-3">Class</th>
                      <th className="py-2.5 px-3">Parent / Guardian</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Fee Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-gray-800 text-xs font-medium">
                    {recentAdmissions.map((adm) => (
                      <tr key={adm.id} className="hover:bg-indigo-50/30 transition-colors">
                        <td className="py-3 px-3 font-mono font-bold text-indigo-700">{adm.id}</td>
                        <td className="py-3 px-3 font-bold text-gray-900">{adm.name}</td>
                        <td className="py-3 px-3 font-semibold text-gray-700">{adm.class}</td>
                        <td className="py-3 px-3">
                          <div>{adm.parent}</div>
                          <span className="text-[10px] text-gray-400 font-mono">{adm.phone}</span>
                        </td>
                        <td className="py-3 px-3 text-gray-500">{adm.date}</td>
                        <td className="py-3 px-3">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                            adm.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                          }`}>
                            {adm.feeStatus}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Quick Actions + Fee Collection + Transport */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions Panel */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                <Activity className="w-4 h-4 text-indigo-600" />
                Administrative Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  onClick={() => setQuickActionModal('student')}
                  className="p-3 bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-200 rounded-xl text-left transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition-transform">
                    <UserPlus className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-gray-900">Add Student</div>
                  <div className="text-[10px] text-gray-500">New Admission</div>
                </button>

                <button
                  onClick={() => setQuickActionModal('teacher')}
                  className="p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-200 rounded-xl text-left transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-gray-900">Add Faculty</div>
                  <div className="text-[10px] text-gray-500">Teacher Roster</div>
                </button>

                <button
                  onClick={() => setQuickActionModal('class')}
                  className="p-3 bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-200 rounded-xl text-left transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition-transform">
                    <Building className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-gray-900">Create Section</div>
                  <div className="text-[10px] text-gray-500">Class Room Alloc</div>
                </button>

                <button
                  onClick={() => setQuickActionModal('notice')}
                  className="p-3 bg-gray-50 hover:bg-amber-50 border border-gray-200 hover:border-amber-200 rounded-xl text-left transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-2 group-hover:scale-105 transition-transform">
                    <Megaphone className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-gray-900">Announcement</div>
                  <div className="text-[10px] text-gray-500">Broadcast Circular</div>
                </button>
              </div>
            </div>

            {/* Quarter 3 Fee Collection Progress */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  Quarter 3 Fee Realization
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                  83.5% Cleared
                </span>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
                    <span>Collected Revenue</span>
                    <strong className="text-gray-900 font-bold text-sm">₹42,50,000</strong>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-emerald-500 h-2.5 rounded-full" style={{ width: '83.5%' }} />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium text-gray-600 mb-1">
                    <span>Pending Recovery (Due 10 Nov)</span>
                    <strong className="text-amber-700 font-bold text-sm">₹8,40,000</strong>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '16.5%' }} />
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-gray-500 border-t border-gray-100">
                  <span>Target Budget: <strong>₹50.90 Lakh</strong></span>
                  <a href="/school/admin/fees" className="text-indigo-600 hover:text-indigo-800 font-bold">
                    View Defaulters →
                  </a>
                </div>
              </div>
            </div>

            {/* Live Transport Fleet Status */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                <h3 className="text-base font-bold text-gray-900 flex items-center gap-2">
                  <Bus className="w-4 h-4 text-indigo-600" />
                  Live School Bus Fleet (18 Routes)
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  All Active
                </span>
              </div>

              <div className="space-y-3">
                {transportStatus.map((trn, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs space-y-1">
                    <div className="flex items-center justify-between font-bold text-gray-900">
                      <span>{trn.route}</span>
                      <span className="text-emerald-700 font-mono text-[11px]">{trn.delay}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-500 text-[11px]">
                      <span>Driver: {trn.driver} ({trn.busNo})</span>
                      <span>{trn.students} Students</span>
                    </div>
                  </div>
                ))}

                <a 
                  href="/school/admin/transport" 
                  className="block text-center text-xs font-bold text-indigo-600 hover:text-indigo-800 pt-1"
                >
                  Manage GPS Transport Fleet →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Action Modal */}
      {quickActionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">
                  {quickActionModal === 'student' && 'Register New Student Admission'}
                  {quickActionModal === 'teacher' && 'Onboard New Faculty Member'}
                  {quickActionModal === 'class' && 'Create New Classroom Section'}
                  {quickActionModal === 'notice' && 'Broadcast Official School Notice'}
                </h3>
                <p className="text-xs text-indigo-200">Greenfield Senior Secondary School</p>
              </div>
              <button onClick={() => setQuickActionModal(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {actionSuccess ? (
              <div className="p-6 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-gray-900">Success!</h4>
                <p className="text-xs text-gray-600">{actionSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleActionSubmit} className="p-6 space-y-4">
                {quickActionModal === 'student' && (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Student Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Advait Singhania"
                        value={newStudentName}
                        onChange={(e) => setNewStudentName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700">Class & Section</label>
                        <select
                          value={newStudentClass}
                          onChange={(e) => setNewStudentClass(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                        >
                          <option>10-A</option>
                          <option>10-B</option>
                          <option>7-B</option>
                          <option>11-PCM</option>
                          <option>12-Comm</option>
                        </select>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-700">Date of Birth</label>
                        <input
                          type="date"
                          defaultValue="2011-05-14"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Parent / Guardian Contact</label>
                      <input
                        type="text"
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                  </>
                )}

                {quickActionModal === 'notice' && (
                  <>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Circular Headline</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Schedule for Winter Break 2026"
                        value={noticeTitle}
                        onChange={(e) => setNoticeTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Target Recipient Group</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs">
                        <option>All School (Parents, Teachers, Students)</option>
                        <option>Parents Only</option>
                        <option>Teachers & Staff Only</option>
                        <option>Senior Wing (Classes 9 to 12)</option>
                      </select>
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Notice Body</label>
                      <textarea
                        rows={3}
                        placeholder="Enter official circular message..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                  </>
                )}

                {(quickActionModal === 'teacher' || quickActionModal === 'class') && (
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Designation / Subject Head</label>
                      <input
                        type="text"
                        placeholder="e.g. PGT Physics / Room 402 Senior Lab"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-gray-700">Department</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs">
                        <option>Science & Technology</option>
                        <option>Mathematics</option>
                        <option>Humanities & Languages</option>
                        <option>Commerce & Economics</option>
                      </select>
                    </div>
                  </div>
                )}

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setQuickActionModal(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
                  >
                    Save & Publish
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
