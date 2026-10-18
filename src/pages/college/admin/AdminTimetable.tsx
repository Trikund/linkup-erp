import React, { useState } from 'react';
import { CollegeLayout } from '../../../components/college/layout/CollegeLayout';
import { 
  Calendar, Clock, Building, Users, Download, 
  Plus, CheckCircle2, AlertTriangle, Filter
} from 'lucide-react';

export function AdminTimetable() {
  const user = { name: 'Admin User', roleLabel: 'Super Administrator • Apex Institute' };
  const [selectedDept, setSelectedDept] = useState('CSE');

  const hallBookings = [
    { room: 'Main University Auditorium', capacity: '1,200 Seats', event: 'National Hackathon Inauguration', time: 'Tomorrow, 09:30 AM', status: 'Reserved' },
    { room: 'Tech Seminar Hall 1', capacity: '250 Seats', event: 'Guest Lecture: NVIDIA AI Architectures', time: '22 Oct, 02:00 PM', status: 'Reserved' },
    { room: 'Conference Board Room', capacity: '60 Seats', event: 'Academic Council Curriculum Meeting', time: '24 Oct, 11:00 AM', status: 'Reserved' }
  ];

  return (
    <CollegeLayout 
      role="admin" 
      user={user} 
      title="Master Timetable & Scheduling" 
      description="Central university room allocations, smart classroom scheduling, and auditorium reservation."
    >
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Smart Classrooms</p>
          <p className="text-xl font-black text-slate-800 mt-0.5">84 Rooms</p>
          <p className="text-[10px] text-emerald-600 font-semibold">100% AV Equipped</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Laboratories & Centers</p>
          <p className="text-xl font-black text-purple-700 mt-0.5">48 Labs</p>
          <p className="text-[10px] text-slate-500">Including 2 GPU Centers</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Conflict Analysis</p>
          <p className="text-xl font-black text-emerald-600 mt-0.5">0 Overlaps</p>
          <p className="text-[10px] text-emerald-700 font-semibold">Clean schedule verified</p>
        </div>
        <div className="bg-white border border-slate-100 rounded-2xl p-4 shadow-sm">
          <p className="text-[10px] font-bold text-slate-400 uppercase">Central Auditoriums</p>
          <p className="text-xl font-black text-blue-600 mt-0.5">4 Auditoriums</p>
          <p className="text-[10px] text-slate-500">Booking portal open</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-800">Master Classroom Scheduling Engine</h3>
                <p className="text-xs text-slate-500">Schedule slots mapped across 14 departments and 4 academic blocks.</p>
              </div>
              <button className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#7c3aed] text-white text-xs font-bold shadow-sm">
                <Plus size={14} />
                <span>Allocate Lecture Hall</span>
              </button>
            </div>

            <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 text-xs text-slate-700">
              <span className="font-bold text-purple-900 block mb-1">Academic Timetable Status: Live & Locked</span>
              <p className="text-slate-600 leading-relaxed">
                All departments have completed course-hour mappings for the Odd Semester 2026-27. Faculty substitutions are dynamically routed through the HOD approval module.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white border border-slate-100 rounded-3xl p-6 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-3">Auditorium & Seminar Hall Bookings</h4>
            <div className="space-y-3 text-xs">
              {hallBookings.map((h, i) => (
                <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <span className="font-bold text-slate-900 block">{h.room}</span>
                  <p className="text-[11px] text-slate-500 mt-0.5">{h.event}</p>
                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex justify-between text-[11px]">
                    <span className="text-[#7c3aed] font-medium">{h.time}</span>
                    <span className="font-bold text-emerald-700">{h.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CollegeLayout>
  );
}
