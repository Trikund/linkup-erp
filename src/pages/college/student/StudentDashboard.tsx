import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { 
  CheckCircle2, TrendingUp, BookOpen, Clock, AlertCircle, 
  CreditCard, Briefcase, FileCheck, ArrowRight, Calendar,
  Download, Award, User, Sparkles, Building2, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function StudentDashboard() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout 
      role="student" 
      user={user} 
      title="Student Overview" 
      description="Apex Institute of Technology • B.Tech Computer Science & Engineering (Batch 2023-2027)"
    >
      {/* Student Welcome Banner */}
      <div className="bg-gradient-to-r from-[#7c3aed] via-[#6d28d9] to-indigo-700 rounded-3xl p-6 sm:p-8 text-white mb-8 shadow-xl shadow-purple-900/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-white/20">
                Semester VII • Section A
              </span>
              <span className="bg-emerald-500/30 text-emerald-200 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-400/30 flex items-center gap-1">
                <CheckCircle2 size={12} /> Active Student
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">Good morning, Shivam 👋</h2>
            <p className="text-white/80 text-sm mt-1 max-w-xl">
              University Roll No: <span className="font-mono font-bold text-white">21CS1048</span> • PRN: <span className="font-mono font-bold text-white">20230164002341</span> • ABC ID: <span className="font-mono font-bold text-white">742-918-301-445</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/college/student/exams" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#7c3aed] text-xs font-bold hover:bg-slate-50 transition-all shadow-md hover:shadow-lg"
            >
              <Download size={14} />
              <span>Download Hall Ticket</span>
            </Link>
            <Link 
              to="/college/student/placements" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all border border-white/30 backdrop-blur-md"
            >
              <Briefcase size={14} />
              <span>T&P Portal</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Top 4 KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
        <StatCard 
          title="Overall Attendance" 
          value="86.4%" 
          icon={CheckCircle2} 
          subtitle="Above 75% Requirement • 168/194 hrs" 
          trend="up" 
          color="green" 
        />
        <StatCard 
          title="Current CGPA" 
          value="8.42" 
          icon={TrendingUp} 
          subtitle="Sem 6 SGPA: 8.61 • Top 15% Batch" 
          trend="up" 
          color="violet" 
        />
        <StatCard 
          title="Pending Labs & Tasks" 
          value="4 Submissions" 
          icon={BookOpen} 
          subtitle="Next: CNN Model due in 3 days" 
          trend="down" 
          color="amber" 
        />
        <StatCard 
          title="Semester VII Fees" 
          value="Cleared" 
          icon={CreditCard} 
          subtitle="₹85,000 Paid • No pending dues" 
          trend="neutral" 
          color="green" 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column (2 Cols) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Today's Lecture Schedule */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-purple-50 text-[#7c3aed] flex items-center justify-center border border-purple-100">
                  <Clock size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Today's Lecture Schedule</h3>
                  <p className="text-xs text-slate-500 font-medium">Monday • 4 Sessions Scheduled</p>
                </div>
              </div>
              <Link 
                to="/college/student/timetable" 
                className="text-xs font-bold text-[#7c3aed] hover:underline flex items-center gap-1"
              >
                <span>Full Timetable</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="space-y-3">
              {[
                { time: '09:00 AM - 10:00 AM', code: 'CS701', subject: 'Machine Learning & Neural Networks', room: 'Room 302', faculty: 'Dr. Ankit Sharma (HOD)', type: 'Theory', live: false },
                { time: '10:15 AM - 11:45 AM', code: 'CS702', subject: 'Cloud Computing Architecture Lab', room: 'Advanced Lab 4', faculty: 'Prof. Vikas Singh', type: 'Lab Practical', live: true },
                { time: '12:00 PM - 01:00 PM', code: 'CS703', subject: 'Advanced Database Systems', room: 'Room 305', faculty: 'Prof. Sunita Rao', type: 'Theory', live: false },
                { time: '02:00 PM - 03:30 PM', code: 'CS706P', subject: 'Major Project Phase-I Review', room: 'Seminar Hall B', faculty: 'Project Committee Panel', type: 'Capstone', live: false },
              ].map((s, i) => (
                <div 
                  key={i} 
                  className={`flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl border transition-all ${
                    s.live 
                      ? 'bg-purple-50/60 border-purple-200 ring-2 ring-purple-500/20' 
                      : 'bg-slate-50/70 border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-start sm:items-center gap-3.5 mb-2 sm:mb-0">
                    <div className="text-xs font-mono font-bold text-[#7c3aed] bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shrink-0">
                      {s.time}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{s.code}</span>
                        <h4 className="text-sm font-bold text-slate-800">{s.subject}</h4>
                        {s.live && (
                          <span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-200 animate-pulse">
                            ● In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5 font-medium">
                        {s.faculty} • <span className="font-semibold text-slate-700">{s.room}</span>
                      </p>
                    </div>
                  </div>
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border self-start sm:self-auto ${
                    s.type === 'Lab Practical' ? 'bg-amber-50 text-amber-700 border-amber-200' :
                    s.type === 'Capstone' ? 'bg-indigo-50 text-indigo-700 border-indigo-200' :
                    'bg-blue-50 text-blue-700 border-blue-200'
                  }`}>
                    {s.type}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Registered Courses Quick View */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 sm:p-7">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800">Semester VII Courses & Syllabus</h3>
                  <p className="text-xs text-slate-500 font-medium">6 Registered Courses • 21 Total Credits</p>
                </div>
              </div>
              <Link 
                to="/college/student/courses" 
                className="text-xs font-bold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>View All Courses</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { code: 'CS701', name: 'Machine Learning', credits: 4, faculty: 'Dr. Ankit Sharma', attendance: 89 },
                { code: 'CS702', name: 'Cloud Computing', credits: 3, faculty: 'Prof. Vikas Singh', attendance: 84 },
                { code: 'CS703', name: 'Advanced DBMS', credits: 4, faculty: 'Prof. Sunita Rao', attendance: 92 },
                { code: 'CS704', name: 'Cyber Security', credits: 3, faculty: 'Dr. R. K. Verma', attendance: 81 },
              ].map((c, i) => (
                <div key={i} className="p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#7c3aed] bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
                      {c.code}
                    </span>
                    <span className="text-xs font-bold text-slate-600">{c.credits} Credits</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800">{c.name}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{c.faculty}</p>
                  <div className="mt-3 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-500">Attendance</span>
                    <span className={c.attendance >= 85 ? 'text-emerald-600' : 'text-amber-600'}>{c.attendance}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-200 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${c.attendance >= 85 ? 'bg-emerald-500' : 'bg-amber-500'}`} 
                      style={{ width: `${c.attendance}%` }} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Column (1 Col) */}
        <div className="space-y-8">
          
          {/* Quick Actions Panel */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Quick Student Actions</h3>
            <div className="space-y-2.5">
              <Link 
                to="/college/student/assignments" 
                className="w-full flex items-center justify-between px-4 py-3 bg-purple-50 hover:bg-purple-100/70 text-[#7c3aed] rounded-2xl text-xs font-bold transition-all border border-purple-200/80 group"
              >
                <div className="flex items-center gap-2.5">
                  <FileCheck size={16} />
                  <span>Submit Lab Assignment</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link 
                to="/college/student/attendance" 
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl text-xs font-bold transition-all border border-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <Calendar size={16} className="text-slate-500" />
                  <span>Apply for OD / Leave</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link 
                to="/college/student/fees" 
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl text-xs font-bold transition-all border border-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <CreditCard size={16} className="text-slate-500" />
                  <span>Fee Ledger & Receipts</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>

              <Link 
                to="/college/student/library" 
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-2xl text-xs font-bold transition-all border border-slate-200 group"
              >
                <div className="flex items-center gap-2.5">
                  <BookOpen size={16} className="text-slate-500" />
                  <span>Library E-Resources</span>
                </div>
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Campus Placement Drives Widget */}
          <div className="bg-white border border-slate-100 rounded-3xl shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-slate-800 flex items-center gap-2">
                <Briefcase size={16} className="text-[#7c3aed]" />
                <span>Live Placement Drives</span>
              </h3>
              <span className="text-[10px] font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full border border-purple-200">
                Tier-1 Drives
              </span>
            </div>

            <div className="space-y-3">
              {[
                { company: 'Google India', role: 'Software Engineer', ctc: '₹28 LPA', status: 'Round 2 Tech on Oct 25', badge: 'Shortlisted' },
                { company: 'Microsoft', role: 'Cloud Architect', ctc: '₹24 LPA', status: 'Online Assessment Pending', badge: 'Eligible' },
                { company: 'Infosys', role: 'Power Programmer', ctc: '₹9.5 LPA', status: 'Offer Letter Issued 🎉', badge: 'Selected' },
              ].map((p, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-xs font-bold text-slate-800">{p.company}</h4>
                    <span className="text-[10px] font-bold text-[#7c3aed]">{p.ctc}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">{p.role}</p>
                  <div className="mt-2 flex items-center justify-between text-[10px]">
                    <span className="text-slate-600 font-medium">{p.status}</span>
                    <span className={`px-2 py-0.5 rounded-full font-bold ${
                      p.badge === 'Selected' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      p.badge === 'Shortlisted' ? 'bg-purple-50 text-purple-700 border border-purple-200' :
                      'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}>
                      {p.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/college/student/placements" 
              className="mt-4 block text-center text-xs font-bold text-[#7c3aed] hover:underline"
            >
              Open Full Placement Portal →
            </Link>
          </div>

          {/* Faculty Mentor Card */}
          <div className="bg-slate-50/70 border border-slate-200 rounded-3xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 text-[#7c3aed] flex items-center justify-center font-bold text-sm border border-purple-200">
                AS
              </div>
              <div>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Faculty Mentor</p>
                <h4 className="text-sm font-bold text-slate-800">Dr. Ankit Sharma</h4>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Professor & Head of Department (CSE) • Office: Tech Block 3, Room 301. Weekly mentor counseling: Tuesdays 03:00 PM.
            </p>
          </div>

        </div>
      </div>
    </CollegeLayout>
  );
}
