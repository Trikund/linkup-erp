import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Users, Search, Filter, Download, Plus, 
  CheckCircle2, Mail, Phone, ExternalLink, ShieldAlert
} from 'lucide-react';

interface StudentRecord {
  rollNo: string;
  prn: string;
  name: string;
  dept: string;
  semester: string;
  cgpa: number;
  attendance: number;
  feeStatus: 'Paid' | 'Pending';
  placement: string;
}

export function AdminStudents() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');

  const students: StudentRecord[] = [
    { rollNo: '21CS1048', prn: '20230164002341', name: 'Shivam Sharma', dept: 'CSE', semester: 'Sem 7 (Sec A)', cgpa: 8.42, attendance: 86.4, feeStatus: 'Paid', placement: 'CloudScale Tech (₹14.5L)' },
    { rollNo: '21CS1012', prn: '20230164002305', name: 'Priya Sundaram', dept: 'CSE', semester: 'Sem 7 (Sec A)', cgpa: 9.18, attendance: 94.2, feeStatus: 'Paid', placement: 'Higher Studies' },
    { rollNo: '21CS1045', prn: '20230164002338', name: 'Rahul Verma', dept: 'CSE', semester: 'Sem 7 (Sec B)', cgpa: 7.15, attendance: 68.2, feeStatus: 'Paid', placement: 'Eligible Phase 2' },
    { rollNo: '24AI1019', prn: '20250164009812', name: 'Sneha Sharma', dept: 'AIDS', semester: 'Sem 3 (Sec B)', cgpa: 8.75, attendance: 91.2, feeStatus: 'Paid', placement: 'Undergraduate' },
    { rollNo: '21CS1092', prn: '20230164002385', name: 'Divya Khurana', dept: 'CSE', semester: 'Sem 7 (Sec B)', cgpa: 8.92, attendance: 91.0, feeStatus: 'Paid', placement: 'QuantMatrix (₹18.0L)' },
    { rollNo: '22EC1024', prn: '20240164005120', name: 'Karthik Nair', dept: 'ECE', semester: 'Sem 5 (Sec A)', cgpa: 8.10, attendance: 78.5, feeStatus: 'Pending', placement: 'Eligible' }
  ];

  const filtered = students.filter(s => {
    const matchesDept = deptFilter === 'All' || s.dept === deptFilter;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.rollNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.prn.includes(searchQuery);
    return matchesDept && matchesSearch;
  });

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Students Directory" 
      description="Central registry of 12,450 university students, enrollment records, biometric attendance, and fee clearance status."
    >
      {/* Top Stat Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Enrollment</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">12,450 Students</p>
          <p className="text-[10px] text-purple-700 font-semibold">Active ABC ID Verified</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Debarment Watchlist</p>
          <p className="text-xl font-black text-rose-600 mt-0.5">142 Flagged</p>
          <p className="text-[10px] text-rose-700 font-semibold">&lt;75% Attendance Notice</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Placement Conversion</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">89.4%</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Final Year B.Tech</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Fee Dues Cleared</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">94.6%</p>
          <p className="text-[10px] text-slate-500">₹42.8 Cr Realized</p>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {['All', 'CSE', 'AIDS', 'ECE'].map(dept => (
            <button
              key={dept}
              onClick={() => setDeptFilter(dept)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                deptFilter === dept ? 'bg-[#7c3aed] text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              {dept === 'All' ? 'All Depts' : dept}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search name, roll no, or PRN..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
            />
          </div>
          <button className="p-2 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl transition-all" title="Export Excel">
            <Download size={15} />
          </button>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white border border-slate-100 rounded-3xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Student Details</th>
                <th className="py-3.5 px-4">Department & Class</th>
                <th className="py-3.5 px-4 text-center">CGPA</th>
                <th className="py-3.5 px-4 text-center">Attendance</th>
                <th className="py-3.5 px-4 text-center">Fee Status</th>
                <th className="py-3.5 px-4">Placement / Track</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filtered.map((s) => (
                <tr key={s.rollNo} className="hover:bg-slate-50/70 transition-all">
                  <td className="py-3.5 px-4">
                    <strong className="text-slate-900 block">{s.name}</strong>
                    <span className="text-[11px] font-mono text-slate-400">{s.rollNo} • PRN: {s.prn}</span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="font-semibold text-slate-800">{s.dept}</span>
                    <span className="text-[11px] text-slate-400 block">{s.semester}</span>
                  </td>
                  <td className="py-3.5 px-4 text-center font-mono font-bold text-slate-900 text-sm">
                    {s.cgpa}
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold ${
                      s.attendance >= 75 ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                      {s.attendance}%
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      s.feeStatus === 'Paid' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {s.feeStatus}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-semibold text-purple-700">
                    {s.placement}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button className="px-3 py-1 rounded-xl border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold transition-all">
                      Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </CollegeLayout>
  );
}
