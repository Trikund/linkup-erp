import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Building2, Users, GraduationCap, Plus, Search, 
  Download, ExternalLink, ShieldCheck, Award, Mail, Phone
} from 'lucide-react';

interface Department {
  code: string;
  name: string;
  hod: string;
  hodEmail: string;
  students: number;
  faculty: number;
  labs: number;
  budget: string;
  accreditation: string;
  status: 'Active' | 'Under Review';
}

export function AdminDepartments() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [searchQuery, setSearchQuery] = useState('');

  const departments: Department[] = [
    {
      code: 'CSE',
      name: 'Department of Computer Science & Engineering',
      hod: 'Dr. Ankit Sharma (Ph.D. IIT Delhi)',
      hodEmail: 'dr.ankit.sharma@apex.edu.in',
      students: 3200,
      faculty: 142,
      labs: 6,
      budget: '₹2.80 Cr',
      accreditation: 'NBA Tier-1 Accredited (till 2028)',
      status: 'Active'
    },
    {
      code: 'AIDS',
      name: 'Department of Artificial Intelligence & Data Science',
      hod: 'Dr. Meenakshi Sundaram (Ph.D. IISc)',
      hodEmail: 'm.sundaram@apex.edu.in',
      students: 1200,
      faculty: 58,
      labs: 4,
      budget: '₹1.50 Cr',
      accreditation: 'NBA Tier-1 Accredited (till 2027)',
      status: 'Active'
    },
    {
      code: 'DOMS',
      name: 'Department of Management Studies (MBA)',
      hod: 'Dr. S. K. Mittal (Ph.D. FMS Delhi)',
      hodEmail: 'sk.mittal@apex.edu.in',
      students: 2800,
      faculty: 110,
      labs: 2,
      budget: '₹2.10 Cr',
      accreditation: 'AICTE & ACBSP Accredited',
      status: 'Active'
    },
    {
      code: 'ECE',
      name: 'Department of Electronics & Communication Engineering',
      hod: 'Dr. R. Ramanathan (Ph.D. IIT Bombay)',
      hodEmail: 'r.ramanathan@apex.edu.in',
      students: 1800,
      faculty: 92,
      labs: 8,
      budget: '₹1.90 Cr',
      accreditation: 'NBA Tier-1 Accredited (till 2028)',
      status: 'Active'
    },
    {
      code: 'MECH',
      name: 'Department of Mechanical Engineering',
      hod: 'Dr. V. K. Gupta (Ph.D. IIT Roorkee)',
      hodEmail: 'vk.gupta@apex.edu.in',
      students: 1500,
      faculty: 84,
      labs: 12,
      budget: '₹1.80 Cr',
      accreditation: 'NBA Accredited',
      status: 'Active'
    },
    {
      code: 'CIVIL',
      name: 'Department of Civil Engineering & Architecture',
      hod: 'Dr. P. C. Joshi (Ph.D. IIT Kanpur)',
      hodEmail: 'pc.joshi@apex.edu.in',
      students: 1100,
      faculty: 64,
      labs: 6,
      budget: '₹1.20 Cr',
      accreditation: 'NBA Accredited',
      status: 'Active'
    }
  ];

  const filtered = departments.filter(d => 
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.hod.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Departments & Cells" 
      description="University academic departments, HOD appointments, faculty strength, and departmental budgetary allocations."
    >
      {/* Top Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Active Departments</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">14 Departments</p>
          <p className="text-[10px] text-purple-700 font-semibold">Engineering & Management</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">NBA Tier-1 Accredited</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">6 Departments</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Valid till 2028</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Total Departmental Labs</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">48 Laboratories</p>
          <p className="text-[10px] text-slate-500">Includes GPU Clusters</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Annual Operating Budget</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">₹24.50 Cr</p>
          <p className="text-[10px] text-slate-500">Allocated for FY26-27</p>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-white border border-slate-100 rounded-2xl p-4 mb-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80">
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search department code or HOD..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#7c3aed]"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all shadow-sm">
            <Download size={14} />
            <span>Export Roster</span>
          </button>
          <button className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-purple-700 text-white text-xs font-bold shadow-md transition-all">
            <Plus size={14} />
            <span>Add Department</span>
          </button>
        </div>
      </div>

      {/* Department Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((d) => (
          <div key={d.code} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-slate-100 mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs font-black px-2.5 py-0.5 bg-purple-50 text-[#7c3aed] border border-purple-100 rounded-lg">
                      {d.code}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                      {d.status}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{d.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Head of Dept: <strong className="text-slate-800">{d.hod}</strong>
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 text-center text-xs py-2 my-2 bg-slate-50/70 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Enrolled</span>
                  <span className="font-bold text-slate-800">{d.students.toLocaleString()} Students</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Faculty Cadre</span>
                  <span className="font-bold text-purple-700">{d.faculty} Professors</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Labs / Units</span>
                  <span className="font-bold text-slate-800">{d.labs} High-Tech Labs</span>
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-600 mt-3">
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400">Accreditation:</span>
                  <span className="font-semibold text-emerald-700">{d.accreditation}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-50">
                  <span className="text-slate-400">Annual Budget Allocation:</span>
                  <span className="font-mono font-bold text-slate-900">{d.budget}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <a href={`mailto:${d.hodEmail}`} className="text-purple-700 font-bold hover:underline flex items-center gap-1">
                <Mail size={13} />
                <span>Contact HOD</span>
              </a>
              <button className="text-xs font-bold text-slate-700 hover:text-black">
                View Department Dossier →
              </button>
            </div>
          </div>
        ))}
      </div>
    </CollegeLayout>
  );
}
