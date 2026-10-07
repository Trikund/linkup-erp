import React from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { StatCard } from '../../../components/college/common/StatCard';
import { Users, BookOpen, Clock, AlertCircle } from 'lucide-react';

export function FacultyDashboard() {
  const user = { name: 'Dr. Ankit Sharma', roleLabel: 'Professor • CSE Dept' };

  return (
    <CollegeLayout role="faculty" user={user} title="Faculty Dashboard" description="Overview of your classes, students, and schedule.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Assigned Subjects" value="2" icon={BookOpen} color="violet" />
        <StatCard title="Total Students" value="124" icon={Users} color="blue" />
        <StatCard title="Today's Classes" value="3" icon={Clock} color="cyan" />
        <StatCard title="Pending Evaluations" value="45" icon={AlertCircle} color="amber" subtitle="Mid-Sem Papers" />
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Today's Schedule</h3>
          <div className="space-y-4">
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-slate-800">Advanced Database Management</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Sem 7 • Section A</p>
                </div>
                <span className="px-2 py-1 text-[10px] font-bold bg-[#7c3aed]/10 text-[#7c3aed] rounded-md">Lecture</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600 mt-4">
                <span className="flex items-center gap-1.5"><Clock size={16}/> 10:00 AM - 11:00 AM</span>
                <span className="flex items-center gap-1.5"><Users size={16}/> Room 302</span>
              </div>
            </div>
            
            <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-slate-800">Machine Learning</h4>
                  <p className="text-xs text-slate-500">B.Tech CSE • Sem 7 • Section B</p>
                </div>
                <span className="px-2 py-1 text-[10px] font-bold bg-[#7c3aed]/10 text-[#7c3aed] rounded-md">Lab</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-600 mt-4">
                <span className="flex items-center gap-1.5"><Clock size={16}/> 02:00 PM - 04:00 PM</span>
                <span className="flex items-center gap-1.5"><Users size={16}/> ML Lab 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 text-red-600">Low Attendance Alerts</h3>
          <p className="text-sm text-slate-500 mb-4">Students below 75% attendance in your subjects.</p>
          <div className="space-y-3">
            {[
              { name: 'Rahul Verma', id: 'CSE045', sub: 'Machine Learning', att: '68%' },
              { name: 'Neha Singh', id: 'CSE102', sub: 'Advanced DBMS', att: '71%' },
              { name: 'Amit Patel', id: 'CSE088', sub: 'Machine Learning', att: '64%' }
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">{s.name.charAt(0)}</div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">{s.name}</p>
                    <p className="text-[10px] font-medium text-slate-500">{s.id} • {s.sub}</p>
                  </div>
                </div>
                <span className="text-sm font-black text-red-600">{s.att}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}