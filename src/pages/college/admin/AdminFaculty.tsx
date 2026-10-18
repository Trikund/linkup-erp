import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  GraduationCap, Search, Filter, Plus, Download, 
  Mail, Phone, Award, BookMarked, CheckCircle2
} from 'lucide-react';

export function AdminFaculty() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');

  const facultyList = [
    {
      empId: 'FAC-2018-042',
      name: 'Dr. Ankit Sharma',
      designation: 'Professor & Head of Department',
      dept: 'Computer Science & Engineering',
      qualification: 'Ph.D. (IIT Delhi), M.Tech (IIT Roorkee)',
      workload: '18 Hrs / Wk',
      citations: 942,
      grants: '₹28.5L (DST)',
      email: 'dr.ankit.sharma@apex.edu.in',
      phone: '+91 98765 43210'
    },
    {
      empId: 'FAC-2016-018',
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Professor & Head of Department',
      dept: 'Artificial Intelligence & Data Science',
      qualification: 'Ph.D. (IISc Bangalore)',
      workload: '16 Hrs / Wk',
      citations: 1240,
      grants: '₹35.0L (MeitY)',
      email: 'm.sundaram@apex.edu.in',
      phone: '+91 98112 00112'
    },
    {
      empId: 'FAC-2020-089',
      name: 'Dr. Rajeshwar Iyer',
      designation: 'Associate Professor',
      dept: 'Computer Science & Engineering',
      qualification: 'Ph.D. (IIT Bombay)',
      workload: '18 Hrs / Wk',
      citations: 512,
      grants: '₹12.0L (AICTE)',
      email: 'r.iyer@apex.edu.in',
      phone: '+91 98223 11223'
    },
    {
      empId: 'FAC-2022-140',
      name: 'Prof. Sneha Kulkarni',
      designation: 'Assistant Professor (Senior Grade)',
      dept: 'Computer Science & Engineering',
      qualification: 'M.Tech (IIT Kharagpur)',
      workload: '20 Hrs / Wk',
      citations: 148,
      grants: '-',
      email: 's.kulkarni@apex.edu.in',
      phone: '+91 98334 22334'
    }
  ];

  const filtered = facultyList.filter(f => 
    f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
    f.dept.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Faculty & Cadre" 
      description="University academic faculty directory, designations, doctoral credentials, workload distribution, and funded research."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Faculty Strength</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">842 Professors</p>
          <p className="text-[10px] text-purple-700 font-semibold">1:15 Faculty-Student Ratio</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Ph.D. Holders</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">418 Doctors</p>
          <p className="text-[10px] text-emerald-700 font-semibold">49.6% Doctoral Cadre</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Research Grants</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">₹3.80 Cr</p>
          <p className="text-[10px] text-slate-500">DST, MeitY & AICTE</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Patents Published</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">42 Patents</p>
          <p className="text-[10px] text-slate-500">18 Commercialized</p>
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-72">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search faculty name, emp ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
          />
        </div>

        <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all">
          <Plus size={14} />
          <span>Appoint Faculty</span>
        </button>
      </div>

      <div className="space-y-4">
        {filtered.map((f) => (
          <div key={f.empId} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-black px-2 py-0.5 bg-purple-50 text-[#7c3aed] rounded">
                    {f.empId}
                  </span>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2.5 py-0.5 rounded-full">
                    {f.designation}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-900">{f.name}</h4>
                <p className="text-xs text-slate-500">{f.dept} • {f.qualification}</p>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono font-bold text-slate-800 block">Teaching Workload: {f.workload}</span>
                <span className="text-[11px] text-purple-700 font-semibold">{f.citations} Citations • Grants: {f.grants}</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between pt-2 text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-4">
                <span>Email: <strong className="text-slate-800">{f.email}</strong></span>
                <span>Phone: <strong className="text-slate-800">{f.phone}</strong></span>
              </div>
              <button className="text-[#7c3aed] font-bold hover:underline">
                View Academic Bio & CV →
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
