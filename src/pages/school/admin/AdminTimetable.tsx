import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarClock, Search, Filter, Plus, Download, Printer, 
  CheckCircle2, AlertTriangle, User, MapPin, Clock, X, RefreshCw
} from 'lucide-react';

interface TimetableSlot {
  periodNo: number;
  time: string;
  subject: string;
  teacher: string;
  room: string;
  isLab: boolean;
  isSubstitute?: boolean;
  substituteTeacher?: string;
}

const schedule10A: Record<string, TimetableSlot[]> = {
  Monday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', isLab: false },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Physics (Theory)', teacher: 'Dr. Rajesh Sen', room: 'Room 302', isLab: false },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Chemistry Practical', teacher: 'Mrs. Sunita Verma', room: 'Chemistry Lab 2', isLab: true },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'English Literature', teacher: 'Ms. Pooja Nair', room: 'Room 302', isLab: false },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'Information Technology', teacher: 'Mr. Amit Verma', room: 'Computer Lab 1', isLab: true },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Social Science (History)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', isLab: false },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Physical Education & Games', teacher: 'Coach R.S. Rana', room: 'Sports Ground', isLab: false },
  ],
  Tuesday: [
    { periodNo: 1, time: '08:30 - 09:15 AM', subject: 'Physics Practical', teacher: 'Dr. Rajesh Sen', room: 'Physics Lab 1', isLab: true },
    { periodNo: 2, time: '09:15 - 10:00 AM', subject: 'Mathematics', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', isLab: false },
    { periodNo: 3, time: '10:00 - 10:45 AM', subject: 'Social Science (Civics)', teacher: 'Mrs. Kavita Roy', room: 'Room 302', isLab: false },
    { periodNo: 4, time: '10:45 - 11:30 AM', subject: 'Biology (Theory)', teacher: 'Dr. Meenakshi', room: 'Room 302', isLab: false },
    { periodNo: 5, time: '12:15 - 01:00 PM', subject: 'English Grammar', teacher: 'Ms. Pooja Nair', room: 'Room 302', isLab: false },
    { periodNo: 6, time: '01:00 - 01:45 PM', subject: 'Mathematics Tutorial', teacher: 'Mrs. Ananya Sharma', room: 'Room 302', isLab: false },
    { periodNo: 7, time: '01:45 - 02:25 PM', subject: 'Library Hour', teacher: 'Mrs. S. Bannerjee', room: 'Central Library', isLab: false },
  ]
};

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function AdminTimetable() {
  const user = USERS.admin;
  const [selectedClass, setSelectedClass] = useState('10-A');
  const [selectedDay, setSelectedDay] = useState('Monday');
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);

  // Substitute modal state
  const [absentFaculty, setAbsentFaculty] = useState('Mr. Vivek Saxena (TGT Maths)');
  const [replacementFaculty, setReplacementFaculty] = useState('Mrs. Sunita Verma');
  const [substitutePeriod, setSubstitutePeriod] = useState('Period 2 (09:15 - 10:00 AM)');

  const currentSlots = schedule10A[selectedDay] || schedule10A.Monday;

  const handleSubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubModalOpen(false);
    alert(`Substitute teacher ${replacementFaculty} assigned for ${absentFaculty} in ${substitutePeriod}! Automated SMS sent to faculty.`);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Master Institutional Timetable & Room Matrix" 
      description="Manage weekly period schedules across all 64 classrooms, resolve faculty clashes, and assign substitute arrangements."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Weekly Period Slots</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">2,688 Slots</div>
            <div className="text-xs text-gray-500 mt-0.5">42 Periods/Wk per section</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Timetable Clash Check</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">0 Clashes</div>
            <div className="text-xs text-emerald-600 mt-0.5">Automated Conflict Engine</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Lab & Special Rooms</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">12 Labs Active</div>
            <div className="text-xs text-indigo-600 mt-0.5">Physics, Chem, Bio, STEM, IT</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Substitutes Today</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">1 Assigned</div>
            <div className="text-xs text-purple-600 mt-0.5">Zero unmonitored classes</div>
          </div>
        </div>

        {/* Timetable Controls Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-gray-700">Class Section:</span>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-xs font-bold text-indigo-700 bg-indigo-50/50"
              >
                <option value="10-A">Class 10-A (Room 302)</option>
                <option value="10-B">Class 10-B (Room 303)</option>
                <option value="7-B">Class 7-B (Room 204)</option>
                <option value="11-PCM">Class 11-PCM (Room 401)</option>
                <option value="12-Comm">Class 12-Commerce (Room 405)</option>
              </select>
            </div>

            <div className="flex items-center gap-1 overflow-x-auto">
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedDay === day
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsSubModalOpen(true)}
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow-sm"
            >
              <RefreshCw className="w-3.5 h-3.5" /> Assign Substitute
            </button>
            <button
              onClick={() => alert(`Downloading Master Timetable PDF for ${selectedClass}`)}
              className="px-3 py-1.5 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> PDF
            </button>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center justify-between">
            <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
              <CalendarClock className="w-4 h-4 text-indigo-600" />
              <span>{selectedDay} Schedule — Class {selectedClass}</span>
            </h3>
            <span className="text-xs text-gray-500">Morning Assembly: 08:00 – 08:30 AM • Lunch Recess: 11:30 – 12:15 PM</span>
          </div>

          <div className="divide-y divide-gray-100">
            {currentSlots.map((slot) => (
              <div 
                key={slot.periodNo}
                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 text-gray-700 flex flex-col items-center justify-center font-bold text-sm flex-shrink-0">
                    <span className="text-[10px] text-gray-400 font-medium">PD</span>
                    <span>{slot.periodNo}</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-gray-900">{slot.subject}</h4>
                      {slot.isLab ? (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                          PRACTICAL LAB
                        </span>
                      ) : (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800">
                          THEORY
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1 font-semibold text-gray-700">
                        <User className="w-3.5 h-3.5 text-gray-400" /> {slot.teacher}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" /> {slot.room}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="font-semibold text-gray-700 bg-gray-100 px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> {slot.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Substitute Teacher Modal */}
      {isSubModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Substitute Arrangement Engine</h3>
                <p className="text-xs text-indigo-200">Greenfield Daily Faculty Management</p>
              </div>
              <button onClick={() => setIsSubModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubSubmit} className="p-5 space-y-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-gray-700">Absent Faculty Member</label>
                <input
                  type="text"
                  value={absentFaculty}
                  disabled
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100 font-semibold"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700">Select Available Free Faculty</label>
                <select
                  value={replacementFaculty}
                  onChange={(e) => setReplacementFaculty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                >
                  <option value="Mrs. Sunita Verma">Mrs. Sunita Verma (Free PD 2)</option>
                  <option value="Ms. Pooja Nair">Ms. Pooja Nair (Free PD 2)</option>
                  <option value="Mr. B.K. Ghosh">Mr. B.K. Ghosh (Free PD 2)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700">Period Slot & Classroom</label>
                <input
                  type="text"
                  value={substitutePeriod}
                  onChange={(e) => setSubstitutePeriod(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsSubModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Confirm Substitute
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
