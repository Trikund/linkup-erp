import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { 
  Users, GraduationCap, Building2, CreditCard, Award, 
  TrendingUp, Calendar, Clock, AlertCircle, ArrowRight, 
  ShieldCheck, Briefcase, BookOpen, Layers, Download, 
  ChevronRight, Sparkles, Activity, FileText, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function AdminDashboard() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };

  const enrollmentByDept = [
    { dept: 'Computer Science & Engineering', count: '3,200', pct: 85, hOD: 'Dr. Ankit Sharma', budget: '₹2.8 Cr' },
    { dept: 'Business Administration (MBA)', count: '2,800', pct: 72, hOD: 'Dr. S. K. Mittal', budget: '₹2.1 Cr' },
    { dept: 'Electronics & Communication', count: '1,800', pct: 58, hOD: 'Dr. R. Ramanathan', budget: '₹1.9 Cr' },
    { dept: 'Mechanical Engineering', count: '1,500', pct: 48, hOD: 'Dr. V. K. Gupta', budget: '₹1.8 Cr' },
    { dept: 'Information Technology & AI', count: '1,200', pct: 38, hOD: 'Dr. Meenakshi Sundaram', budget: '₹1.5 Cr' },
    { dept: 'Civil Engineering & Architecture', count: '1,100', pct: 32, hOD: 'Dr. P. C. Joshi', budget: '₹1.2 Cr' }
  ];

  const recentAuditLogs = [
    { user: 'Admin User (SuperAdmin)', action: 'Configured Odd Semester 2026-27 Master Datesheet', time: '12 mins ago', badge: 'System' },
    { user: 'Dr. Ankit Sharma (HOD CSE)', action: 'Locked & Submitted CS701 Mid-Semester CIA Marks to COE', time: '45 mins ago', badge: 'Exams' },
    { user: 'Accounts Section (Terminal 3)', action: 'Cleared ₹85,000 Tuition Fee Receipt for 21CS1048', time: '1 hour ago', badge: 'Finance' },
    { user: 'T&P Directorate', action: 'Approved CloudScale Tech Offer Letter for 18 Students', time: '2 hours ago', badge: 'Placements' },
    { user: 'System Cron Job', action: 'Biometric RFID attendance synchronization completed (12,450 Students)', time: '3 hours ago', badge: 'Automated' }
  ];

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Institution Dashboard" 
      description="Apex Institute of Technology • Central University ERP Executive Cockpit & Operations Hub"
    >
      {/* Executive University Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-[#6d28d9] rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Academic Session 2026-27
              </span>
              <span className="bg-emerald-400/20 text-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1">
                <ShieldCheck size={12} /> NAAC Grade A++ Accredited
              </span>
              <span className="bg-purple-400/20 text-purple-200 text-[11px] font-bold px-3 py-1 rounded-full border border-purple-400/30">
                NIRF Rank: 42 (Engineering)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Apex Institute of Technology Overview</h2>
            <p className="text-white/80 text-sm mt-1 max-w-2xl">
              12,450 enrolled undergraduates & scholars • 842 teaching cadre • 14 academic departments • Campus operations status: <span className="text-emerald-300 font-bold">100% Operational</span>.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/college/admin/reports"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold hover:bg-slate-100 transition-all shadow-md"
            >
              <Download size={14} />
              <span>NAAC / NIRF Dossier</span>
            </Link>
            <Link
              to="/college/admin/announcements"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Sparkles size={14} />
              <span>Broadcast Notice</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Executive Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard 
          title="Total Enrolled Students" 
          value="12,450" 
          icon={Users} 
          subtitle="+450 admissions this academic year" 
          color="blue" 
          trend="up"
        />
        <StatCard 
          title="Teaching Cadre" 
          value="842" 
          icon={GraduationCap} 
          subtitle="418 Ph.D. Holders • 1:15 Ratio" 
          color="violet" 
        />
        <StatCard 
          title="Academic Departments" 
          value="14 Depts" 
          icon={Building2} 
          subtitle="6 NBA Tier-1 Accredited" 
          color="green" 
        />
        <StatCard 
          title="Fee Realization (FY26)" 
          value="₹42.8 Cr" 
          icon={CreditCard} 
          subtitle="94.6% Collected • ₹2.4M Pending" 
          color="amber" 
          trend="up"
        />
      </div>

      {/* Main 2-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Left Column (2 Cols): Department Enrollment & Operations */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Department Enrollment Distribution */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Activity size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Department Enrollment Distribution</h3>
                  <p className="text-xs text-slate-500 font-medium">Student intake and departmental budget allocations</p>
                </div>
              </div>
              <Link 
                to="/college/admin/departments" 
                className="text-xs font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
              >
                <span>All 14 Departments</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-4">
              {enrollmentByDept.map((d, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs mb-2">
                    <div>
                      <span className="font-bold text-slate-800 text-sm">{d.dept}</span>
                      <span className="text-[11px] text-slate-500 block">Head: <strong>{d.hOD}</strong> • Budget: {d.budget}</span>
                    </div>
                    <span className="font-black text-slate-900 font-mono text-sm sm:text-right">
                      {d.count} Students
                    </span>
                  </div>
                  <div className="w-full bg-slate-200/70 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#7c3aed] h-full rounded-full transition-all duration-500" 
                      style={{ width: `${d.pct}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Overview Placement & COE Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Briefcase size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                    89.4% Placed
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800">Campus Placements 2026-27</h4>
                <p className="text-xs text-slate-500 mt-1">Highest CTC: <strong className="text-slate-800">₹44.0 LPA (Microsoft)</strong> • Average CTC: <strong className="text-emerald-700">₹9.4 LPA</strong></p>
              </div>

              <Link 
                to="/college/admin/placements"
                className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7c3aed] hover:underline"
              >
                <span>View Recruiter Dashboard</span>
                <ChevronRight size={14} />
              </Link>
            </div>

            <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800">
                    Dec 2026 Session
                  </span>
                </div>
                <h4 className="text-base font-bold text-slate-800">Controller of Examinations</h4>
                <p className="text-xs text-slate-500 mt-1">Odd Semester Theory Exams starting <strong className="text-slate-800">05 Dec 2026</strong>. Question paper moderation in progress.</p>
              </div>

              <Link 
                to="/college/admin/exams"
                className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#7c3aed] hover:underline"
              >
                <span>Open Exam Control Cell</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column (1 Col): Audit Logs & Administrative Governance */}
        <div className="space-y-8">
          {/* Recent Audit Logs */}
          <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-purple-50 text-[#7c3aed] flex items-center justify-center">
                  <Clock size={16} />
                </div>
                <h3 className="text-sm font-bold text-slate-800">System Audit Trail</h3>
              </div>
              <Link to="/college/admin/audit-logs" className="text-xs text-[#7c3aed] font-bold hover:underline">
                View All
              </Link>
            </div>

            <div className="space-y-3.5">
              {recentAuditLogs.map((log, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider bg-slate-200 text-slate-700">
                      {log.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">{log.time}</span>
                  </div>
                  <p className="font-semibold text-slate-800 leading-snug">{log.action}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{log.user}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Status Pill */}
          <div className="bg-slate-900 text-white rounded-3xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Campus Servers Live</span>
            </div>
            <h4 className="text-sm font-bold">Biometric Attendance Turnstiles Active</h4>
            <p className="text-xs text-white/70 mt-1 leading-relaxed">
              All 18 gate scanners and 32 lab RFID terminals are streaming attendance logs in real time to the ERP database.
            </p>
          </div>
        </div>
      </div>

      {/* Administration Fast Actions */}
      <div className="bg-white border border-slate-100 rounded-3xl p-6 sm:p-7 shadow-sm">
        <h3 className="text-base font-bold text-slate-800 mb-4">Central Administrative Shortcuts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[
            { label: 'Students Roster', path: '/college/admin/students', icon: Users, color: 'text-purple-600 bg-purple-50' },
            { label: 'Faculty Cadre', path: '/college/admin/faculty', icon: GraduationCap, color: 'text-blue-600 bg-blue-50' },
            { label: 'Departments', path: '/college/admin/departments', icon: Building2, color: 'text-emerald-600 bg-emerald-50' },
            { label: 'Fee Collection', path: '/college/admin/fees', icon: CreditCard, color: 'text-amber-600 bg-amber-50' },
            { label: 'Exam Cell', path: '/college/admin/exams', icon: Award, color: 'text-indigo-600 bg-indigo-50' },
            { label: 'Audit Logs', path: '/college/admin/audit-logs', icon: ShieldCheck, color: 'text-rose-600 bg-rose-50' }
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