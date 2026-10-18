import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Building, Users, Cpu, Award, CheckCircle2, 
  ExternalLink, Mail, Phone, Calendar, Download, 
  ShieldCheck, HardDrive, Sparkles
} from 'lucide-react';

export function FacultyDepartment() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor & HOD • CSE Dept' };
  const [activeTab, setActiveTab] = useState<'faculty' | 'labs' | 'accreditation'>('faculty');

  const facultyMembers = [
    {
      name: 'Dr. Ankit Sharma',
      designation: 'Professor & Head of Department',
      qualification: 'Ph.D. (IIT Delhi), M.Tech (IIT Roorkee)',
      specialization: 'Distributed Systems & Machine Learning',
      cabin: 'Tech Block 3 • Room 301',
      email: 'dr.ankit.sharma@apex.edu.in',
      phone: '+91 98765 43210',
      experience: '14 Years'
    },
    {
      name: 'Dr. Meenakshi Sundaram',
      designation: 'Professor',
      qualification: 'Ph.D. (IISc Bangalore)',
      specialization: 'Computer Vision & Deep Learning',
      cabin: 'Tech Block 3 • Room 303',
      email: 'm.sundaram@apex.edu.in',
      phone: '+91 98112 00112',
      experience: '16 Years'
    },
    {
      name: 'Dr. Rajeshwar Iyer',
      designation: 'Associate Professor',
      qualification: 'Ph.D. (IIT Bombay)',
      specialization: 'Cybersecurity & Cryptography',
      cabin: 'Tech Block 3 • Room 305',
      email: 'r.iyer@apex.edu.in',
      phone: '+91 98223 11223',
      experience: '11 Years'
    },
    {
      name: 'Prof. Sneha Kulkarni',
      designation: 'Assistant Professor (Senior Grade)',
      qualification: 'M.Tech (IIT Kharagpur)',
      specialization: 'Cloud Computing & DevOps',
      cabin: 'Tech Block 3 • Room 307',
      email: 's.kulkarni@apex.edu.in',
      phone: '+91 98334 22334',
      experience: '8 Years'
    },
    {
      name: 'Prof. Harsh Vardhan',
      designation: 'Assistant Professor',
      qualification: 'M.Tech (NIT Trichy)',
      specialization: 'Full-Stack Web Architectures',
      cabin: 'Tech Block 3 • Room 309',
      email: 'h.vardhan@apex.edu.in',
      phone: '+91 98445 33445',
      experience: '5 Years'
    }
  ];

  const departmentalLabs = [
    {
      name: 'Advanced AI & Machine Learning Lab',
      room: 'Tech Block 3 • Lab 2',
      incharge: 'Dr. Ankit Sharma',
      workstations: '40 Dell Precision Workstations',
      compute: '2x NVIDIA RTX A6000 (48GB VRAM) Cluster',
      utilization: '96%',
      status: 'Fully Operational'
    },
    {
      name: 'Cloud Computing & Virtualization Lab',
      room: 'Tech Block 3 • Lab 1',
      incharge: 'Prof. Sneha Kulkarni',
      workstations: '35 HP Z-series Systems',
      compute: 'VMware vSphere 8 + OpenStack Private Cloud',
      utilization: '92%',
      status: 'Fully Operational'
    },
    {
      name: 'IoT & Embedded Systems Lab',
      room: 'Tech Block 3 • Lab 4',
      incharge: 'Dr. Rajeshwar Iyer',
      workstations: '30 Raspberry Pi 4 & Jetson Nano Kits',
      compute: 'Logic Analyzers & Oscilloscope Stations',
      utilization: '88%',
      status: 'Fully Operational'
    }
  ];

  return (
    <CollegeLayout 
      role="faculty" 
      user={user} 
      title="Department Cell (HOD)" 
      description="Department of Computer Science & Engineering • Academic administration, faculty cadre, labs & NBA accreditation."
    >
      {/* HOD Leadership Badge */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm mb-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
            <Building size={28} />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-purple-100 text-[#7c3aed]">
                Head of Department
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-100 text-emerald-800 flex items-center gap-1">
                <ShieldCheck size={11} /> NBA Tier-1 Accredited
              </span>
            </div>
            <h3 className="text-xl font-black text-slate-800">Department of Computer Science & Engineering</h3>
            <p className="text-xs text-slate-500">Established 2004 • 600+ Students • 18 Faculty Members • 6 High-Performance Labs</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all">
            <Download size={14} />
            <span>Annual Department Report</span>
          </button>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Teaching Faculty</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">18 Professors</p>
          <p className="text-[10px] text-purple-600 font-semibold">1:15 Faculty-Student Ratio</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Research Grants (FY26)</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">₹42.5 Lakhs</p>
          <p className="text-[10px] text-slate-500">DST-SERB & AICTE RPS</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Placement Rate</p>
          <p className="text-xl font-black text-[#7c3aed] mt-0.5">94.8%</p>
          <p className="text-[10px] text-purple-700 font-semibold">Avg CTC: ₹9.4 LPA</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">NBA Audit Score</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">782 / 1000</p>
          <p className="text-[10px] text-slate-500">Accredited till June 2028</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {[
          { key: 'faculty', label: 'Faculty Directory (18)' },
          { key: 'labs', label: 'Laboratories & Infrastructure (6)' },
          { key: 'accreditation', label: 'NBA / NAAC Compliance' }
        ].map(t => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key as any)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all ${
              activeTab === t.key
                ? 'bg-[#7c3aed] text-white shadow-md'
                : 'bg-white border border-slate-100 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Tab Content: Faculty Directory */}
      {activeTab === 'faculty' && (
        <div className="space-y-4">
          {facultyMembers.map((fac, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-base font-bold text-slate-800">{fac.name}</h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-purple-50 text-[#7c3aed]">
                    {fac.designation}
                  </span>
                </div>
                <p className="text-xs text-slate-500">{fac.qualification} • {fac.experience} Experience</p>
                <p className="text-xs text-slate-700 mt-1 font-medium">Domain: {fac.specialization}</p>
                <p className="text-[11px] text-slate-400 font-mono mt-0.5">{fac.cabin}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a 
                  href={`mailto:${fac.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold"
                >
                  <Mail size={13} />
                  <span>{fac.email}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: Labs */}
      {activeTab === 'labs' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {departmentalLabs.map((lab, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="p-2 rounded-xl bg-purple-50 text-[#7c3aed]">
                    <Cpu size={20} />
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    {lab.status}
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800">{lab.name}</h4>
                <p className="text-xs text-slate-400 font-medium mt-0.5">{lab.room}</p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Faculty Incharge</span>
                    <span className="font-semibold text-slate-800">{lab.incharge}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Workstations</span>
                    <span className="font-medium text-slate-700">{lab.workstations}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Compute Infrastructure</span>
                    <span className="font-mono text-[11px] text-purple-700 font-semibold">{lab.compute}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Slot Utilization:</span>
                <span className="font-black text-emerald-600">{lab.utilization}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab Content: Accreditation */}
      {activeTab === 'accreditation' && (
        <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <h4 className="text-sm font-bold uppercase text-slate-600 tracking-wider">NBA Tier-1 Criteria Compliance Status</h4>
          {[
            { criterion: 'Criterion 1: Vision, Mission & PEOs', score: '48 / 50', status: 'Compliant' },
            { criterion: 'Criterion 2: Program Curriculum & Teaching-Learning Processes', score: '92 / 100', status: 'Compliant' },
            { criterion: 'Criterion 3: Course Outcomes and Program Outcomes (CO-PO)', score: '155 / 175', status: 'Compliant' },
            { criterion: 'Criterion 4: Students Performance & Placements', score: '138 / 150', status: 'Compliant' },
            { criterion: 'Criterion 5: Faculty Information & Contributions', score: '172 / 200', status: 'Compliant' },
            { criterion: 'Criterion 6: Facilities & Technical Support (Labs)', score: '75 / 80', status: 'Compliant' }
          ].map((crit, idx) => (
            <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
              <span className="font-bold text-slate-800">{crit.criterion}</span>
              <div className="flex items-center gap-3">
                <span className="font-mono font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">{crit.score}</span>
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <CheckCircle2 size={13} /> {crit.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </CollegeLayout>
  );
}
