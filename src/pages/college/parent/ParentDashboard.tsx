import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { 
  Users, CheckCircle2, TrendingUp, CreditCard, Award, 
  Calendar, Clock, AlertCircle, ArrowRight, MessageSquare, 
  Briefcase, Building, ChevronDown, Download, ShieldCheck, 
  Bell, ExternalLink, Phone, Mail, Sparkles, BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChildProfile {
  id: string;
  name: string;
  rollNo: string;
  prn: string;
  program: string;
  semester: string;
  section: string;
  avatarInitials: string;
  cgpa: number;
  attendance: number;
  attendanceHours: string;
  feeStatus: string;
  placementStatus: string;
  hostelRoom: string;
  mentorName: string;
  mentorDept: string;
  mentorPhone: string;
}

export function ParentDashboard() {
  const user = { name: 'Rajesh Kumar Sharma', roleLabel: 'Parent Portal • Apex Institute' };

  const children: ChildProfile[] = [
    {
      id: 'child-1',
      name: 'Shivam Sharma',
      rollNo: '21CS1048',
      prn: '20230164002341',
      program: 'B.Tech Computer Science & Engineering',
      semester: 'Semester VII',
      section: 'Section A',
      avatarInitials: 'SS',
      cgpa: 8.42,
      attendance: 86.4,
      attendanceHours: '168 / 194 Hours',
      feeStatus: 'Cleared (No Dues)',
      placementStatus: 'Placed • CloudScale Tech (₹14.5 LPA)',
      hostelRoom: 'Tech Boys Hostel 3 • Room 204',
      mentorName: 'Dr. Ankit Sharma',
      mentorDept: 'Professor & HOD, Computer Science & Engineering',
      mentorPhone: '+91 98765 43210 (Ext: 301)'
    },
    {
      id: 'child-2',
      name: 'Sneha Sharma',
      rollNo: '24AI1019',
      prn: '20250164009812',
      program: 'B.Tech Artificial Intelligence & Data Science',
      semester: 'Semester III',
      section: 'Section B',
      avatarInitials: 'SN',
      cgpa: 8.75,
      attendance: 91.2,
      attendanceHours: '182 / 200 Hours',
      feeStatus: 'Cleared (No Dues)',
      placementStatus: 'Undergraduate Pre-Placement Track',
      hostelRoom: 'Girls Hostel 2 • Room 108',
      mentorName: 'Dr. Meenakshi Sundaram',
      mentorDept: 'Professor, AI & DS Dept',
      mentorPhone: '+91 98112 00112'
    }
  ];

  const [activeChildId, setActiveChildId] = useState<string>('child-1');
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  const activeChild = children.find(c => c.id === activeChildId) || children[0];

  const todayClasses = [
    { time: '09:00 AM - 10:00 AM', code: 'CS703', name: 'Advanced Database Management Systems', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Room 302' },
    { time: '10:15 AM - 11:15 AM', code: 'CS702', name: 'Cloud Computing Architectures', type: 'Lecture', faculty: 'Prof. Sneha Kulkarni', room: 'Room 302' },
    { time: '11:15 AM - 12:15 PM', code: 'CS701', name: 'Machine Learning & Neural Nets', type: 'Lecture', faculty: 'Dr. Ankit Sharma', room: 'Room 304' },
    { time: '02:00 PM - 04:00 PM', code: 'CS706P', name: 'Major Capstone Project Lab', type: 'Lab Practical', faculty: 'Dr. Ankit Sharma', room: 'Advanced AI/ML Lab 2' }
  ];

  return (
    <CollegeLayout 
      role="parent" 
      user={user} 
      title="Parent Dashboard" 
      description="Monitor academic progress, semester CGPA, period attendance, and campus life of your enrolled ward."
    >
      {/* Ward Selector Bar */}
      <div className="relative mb-6">
        <div className="bg-white border border-slate-100 rounded-3xl p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#7c3aed] text-white flex items-center justify-center font-black text-lg shadow-md shadow-purple-900/10 shrink-0">
              {activeChild.avatarInitials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Viewing Academic Ward
                </span>
                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-black px-2 py-0.5 rounded-full border border-emerald-100">
                  Active Enrollment
                </span>
              </div>
              <h2 className="text-xl font-black text-slate-800">{activeChild.name}</h2>
              <p className="text-xs text-slate-500 font-medium">
                {activeChild.program} • <strong className="text-purple-700">{activeChild.semester} ({activeChild.section})</strong> • Roll No: <strong className="text-slate-700 font-mono">{activeChild.rollNo}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSwitcherOpen(!isSwitcherOpen)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:border-purple-300 hover:bg-purple-50/30 text-slate-700 text-xs font-bold transition-all shadow-sm"
            >
              <Users size={15} className="text-[#7c3aed]" />
              <span>Switch Ward</span>
              <ChevronDown size={14} className="text-slate-400" />
            </button>
            <Link
              to="/college/parent/ward"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-sm"
            >
              <span>Full Ward Dossier</span>
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Dropdown for Switcher */}
        {isSwitcherOpen && (
          <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-3xl shadow-2xl border border-slate-100 p-2 z-30 animate-fade-in">
            <p className="px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">Registered Children</p>
            {children.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setActiveChildId(c.id);
                  setIsSwitcherOpen(false);
                }}
                className={`w-full flex items-center gap-3 p-3 rounded-2xl text-left transition-all ${
                  activeChildId === c.id ? 'bg-purple-50 border border-purple-100' : 'hover:bg-slate-50'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  activeChildId === c.id ? 'bg-[#7c3aed] text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {c.avatarInitials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-bold truncate ${activeChildId === c.id ? 'text-[#7c3aed]' : 'text-slate-800'}`}>
                    {c.name}
                  </p>
                  <p className="text-[11px] text-slate-500 truncate">{c.program} ({c.semester})</p>
                </div>
                {activeChildId === c.id && <CheckCircle2 size={16} className="text-[#7c3aed]" />}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Top 4 KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard 
          title="Overall Attendance" 
          value={`${activeChild.attendance}%`} 
          icon={CheckCircle2} 
          subtitle={`${activeChild.attendanceHours} • Requirement: >75%`} 
          color="green" 
          trend="up"
        />
        <StatCard 
          title="Cumulative CGPA" 
          value={String(activeChild.cgpa)} 
          icon={TrendingUp} 
          subtitle="Top 15% Batch Rank • Sem 6 SGPA: 8.61" 
          color="violet" 
          trend="up"
        />
        <StatCard 
          title="Semester VII Fees" 
          value={activeChild.feeStatus} 
          icon={CreditCard} 
          subtitle="₹85,000 Paid • No pending dues" 
          color="green" 
        />
        <StatCard 
          title="Campus Recruitment" 
          value="Placed (₹14.5L)" 
          icon={Briefcase} 
          subtitle="CloudScale Tech • Dream Offer" 
          color="blue" 
        />
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column (2 Cols): Schedule & Mentorship Remarks */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Academic Schedule */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Today's Class Schedule</h3>
                  <p className="text-xs text-slate-500 font-medium">Monday • 4 Sessions (3 Theory Lectures, 1 Major Project Lab)</p>
                </div>
              </div>
              <Link 
                to="/college/parent/timetable" 
                className="text-xs font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
              >
                <span>Full Timetable</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-3">
              {todayClasses.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-purple-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs font-black px-2.5 py-1 bg-white text-[#7c3aed] border border-purple-100 rounded-lg">
                      {item.code}
                    </span>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-800">{item.name}</h4>
                      <p className="text-[11px] text-slate-500">Instructor: <strong className="text-slate-700">{item.faculty}</strong> • {item.room}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
                    <span className="font-medium text-slate-600 flex items-center gap-1">
                      <Clock size={12} className="text-[#7c3aed]" />
                      {item.time}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-100 text-purple-700">
                      {item.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Official Faculty Mentor Remarks Card */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Faculty Mentor Official Remarks</h3>
                  <p className="text-xs text-slate-500 font-medium">Continuous Academic & Behavioral Counseling Observation</p>
                </div>
              </div>
              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                Verified by HOD
              </span>
            </div>

            <div className="p-5 bg-gradient-to-r from-amber-50/50 via-purple-50/30 to-slate-50 rounded-2xl border border-amber-100/80">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                "{activeChild.name} is performing exceptionally well in laboratory sessions and has demonstrated exemplary initiative as team leader for the LinkUp ERP Capstone Project. His attendance is consistently healthy at 86.4%. Advised to maintain consistent revision for the upcoming End-Semester Theory examinations."
              </p>
              <div className="mt-4 pt-3 border-t border-amber-200/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <p className="font-bold text-slate-800">{activeChild.mentorName}</p>
                  <p className="text-[11px] text-slate-500">{activeChild.mentorDept}</p>
                </div>
                <Link
                  to="/college/parent/remarks"
                  className="inline-flex items-center gap-1 font-bold text-[#7c3aed] hover:underline text-xs"
                >
                  <span>Request Virtual Discussion</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Placement & Hostel Summary */}
        <div className="space-y-8">
          
          {/* Placement & Career Highlights */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                  <Briefcase size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-800">Campus Placement Offer</h4>
              </div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Confirmed
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50/60 to-purple-50/30 border border-emerald-100 mb-4">
              <p className="text-xs font-bold text-slate-500 uppercase">Recruiting Organization</p>
              <h5 className="text-lg font-black text-slate-900 mt-0.5">CloudScale Technologies</h5>
              <p className="text-xs font-semibold text-purple-700">Role: Associate Cloud Architect</p>
              <div className="mt-3 pt-3 border-t border-emerald-200/50 flex items-baseline justify-between">
                <span className="text-xs text-slate-600 font-medium">Annual Compensation:</span>
                <span className="text-lg font-black text-emerald-700">₹14.50 LPA</span>
              </div>
            </div>

            <Link
              to="/college/parent/placements"
              className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all text-center block"
            >
              View T&P Dossier & Offer Letter
            </Link>
          </div>

          {/* Campus Residential Hostel Status */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Building size={16} />
                </div>
                <h4 className="text-sm font-bold text-slate-800">Hostel & Campus Residency</h4>
              </div>
              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                Hosteler
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-600 mb-4">
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Hostel Building:</span>
                <span className="font-bold text-slate-800">Tech Boys Hostel 3</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Room Number:</span>
                <span className="font-bold text-purple-700">Room 204 (Double)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Last Biometric Entry:</span>
                <span className="font-semibold text-slate-800">Yesterday, 08:42 PM (In)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-50">
                <span className="text-slate-400">Mess Account:</span>
                <span className="font-bold text-emerald-600">Cleared (₹0 Balance)</span>
              </div>
            </div>

            <Link
              to="/college/parent/hostel"
              className="w-full py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-[#7c3aed] text-xs font-bold transition-all text-center block"
            >
              Apply Out-Pass / Contact Warden
            </Link>
          </div>

          {/* Quick Helpline Hotline */}
          <div className="bg-slate-900 text-white rounded-3xl p-5 shadow-sm">
            <h5 className="text-xs font-bold uppercase tracking-wider text-purple-300 mb-2">Campus Parent Helpline</h5>
            <p className="text-xs text-white/80 leading-relaxed mb-3">
              Direct line to Dean of Student Welfare (DSW) & Chief Proctor for parent inquiries.
            </p>
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-300">
              <Phone size={13} />
              <span>+91 98100 22005 (Ext: 101)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Fast Navigation Grid */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
        <h3 className="text-base font-bold text-slate-800 mb-4">Parent Fast Actions & Direct Access</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: 'Attendance Ledger', path: '/college/parent/attendance', icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'Results & CGPA', path: '/college/parent/results', icon: Award, color: 'text-purple-600 bg-purple-50' },
            { label: 'Fee Receipts', path: '/college/parent/fees', icon: CreditCard, color: 'text-blue-600 bg-blue-50' },
            { label: 'Placement Records', path: '/college/parent/placements', icon: Briefcase, color: 'text-amber-600 bg-amber-50' },
            { label: 'Hostel & Mess', path: '/college/parent/hostel', icon: Building, color: 'text-indigo-600 bg-indigo-50' },
            { label: 'Help & Grievance', path: '/college/parent/help', icon: AlertCircle, color: 'text-rose-600 bg-rose-50' },
          ].map((action, i) => {
            const Icon = action.icon;
            return (
              <Link
                key={i}
                to={action.path}
                className="flex flex-col items-center justify-center p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/20 transition-all text-center group"
              >
                <div className={`w-11 h-11 rounded-2xl ${action.color} flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform`}>
                  <Icon size={20} />
                </div>
                <span className="text-xs font-bold text-slate-700 group-hover:text-[#7c3aed] transition-colors">
                  {action.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </CollegeLayout>
  );
}