import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { CheckCircle2, TrendingUp, BookOpen, Clock, AlertCircle, CreditCard } from 'lucide-react';

export function StudentDashboard() {
  const user = { name: 'Shivam Sharma', roleLabel: 'B.Tech CSE • Sem 7' };

  return (
    <CollegeLayout role="student" user={user} title="Dashboard" description="Welcome back to LinkUp University.">
      <div className="mb-8">
        <h2 className="text-2xl font-black text-slate-800">Good morning, {user.name.split(' ')[0]} 👋</h2>
        <p className="text-slate-500 font-medium mt-1">Here's your academic overview for Semester 7.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Overall Attendance" value="86%" icon={CheckCircle2} subtitle="Looking good!" trend="neutral" color="green" />
        <StatCard title="Current CGPA" value="8.42" icon={TrendingUp} subtitle="Top 15% of Batch" trend="up" color="violet" />
        <StatCard title="Pending Assignments" value="4" icon={BookOpen} subtitle="2 due this week" trend="down" color="amber" />
        <StatCard title="Fee Status" value="Pending" icon={CreditCard} subtitle="Due in 15 days" trend="down" color="red" />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Today's Timetable */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Clock className="text-[#7c3aed]" size={20} /> Today's Schedule
            </h3>
            <div className="space-y-4">
              {[
                { time: '09:00 AM - 10:00 AM', subject: 'Machine Learning', room: 'Room 302', type: 'Lecture' },
                { time: '10:00 AM - 11:30 AM', subject: 'Cloud Computing', room: 'Lab 4', type: 'Practical' },
                { time: '12:00 PM - 01:00 PM', subject: 'Advanced Database', room: 'Room 305', type: 'Lecture' }
              ].map((s, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-32 flex-shrink-0 text-sm font-bold text-[#7c3aed]">{s.time}</div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{s.subject}</p>
                    <p className="text-xs font-medium text-slate-500">{s.room} • {s.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {/* Quick Actions */}
          <div className="bg-[#7c3aed] text-white rounded-2xl shadow-lg shadow-[#7c3aed]/20 p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Submit Assignment</button>
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Check Exam Schedule</button>
              <button className="w-full text-left px-4 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-medium transition-colors backdrop-blur-sm border border-white/10">Pay Semester Fees</button>
            </div>
          </div>

          {/* Announcements */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <AlertCircle className="text-blue-500" size={20} /> Latest Announcements
            </h3>
            <div className="space-y-4">
              <div className="pb-4 border-b border-slate-100">
                <p className="text-xs font-bold text-blue-600 mb-1">PLACEMENT CELL</p>
                <p className="text-sm font-bold text-slate-800">Mock Interview Drive Registration</p>
                <p className="text-xs text-slate-500 mt-1">Register by Friday for the upcoming mock interviews.</p>
              </div>
              <div>
                <p className="text-xs font-bold text-amber-600 mb-1">ACADEMIC</p>
                <p className="text-sm font-bold text-slate-800">Mid-Sem Results Published</p>
                <p className="text-xs text-slate-500 mt-1">Check the results portal for your marks.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
