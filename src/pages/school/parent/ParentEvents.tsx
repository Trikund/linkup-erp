import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Calendar, Clock, MapPin, Users, Award, Download, 
  CheckCircle2, Sparkles, BookOpen, Sun, X
} from 'lucide-react';

interface SchoolEvent {
  id: string;
  title: string;
  dateRange: string;
  dayOfWeek: string;
  time: string;
  venue: string;
  category: 'ptm' | 'festival' | 'sports' | 'exam' | 'exhibition';
  applicableTo: string;
  description: string;
  statusBadge: string;
}

const upcomingEvents: SchoolEvent[] = [
  {
    id: 'EVT-101',
    title: 'Term 1 Parent-Teacher Consultation (PTM)',
    dateRange: '17 Oct 2026',
    dayOfWeek: 'Saturday',
    time: '08:30 AM – 01:30 PM',
    venue: 'Respective Classrooms (Senior & Middle Wing)',
    category: 'ptm',
    applicableTo: 'All Classes (Nursery to Class 12)',
    description: 'One-on-one review of Term 1 performance, answer scripts inspection, and signing of CBSE Class 10 LOC register.',
    statusBadge: 'Slots Confirmed',
  },
  {
    id: 'EVT-102',
    title: 'TechnoVation 2026 — Annual Science & Robotics Exhibition',
    dateRange: '24 Oct 2026',
    dayOfWeek: 'Saturday',
    time: '09:30 AM – 03:00 PM',
    venue: 'Main Auditorium & STEM Tinkering Block',
    category: 'exhibition',
    applicableTo: 'Classes 6 to 12 (Parents Invited)',
    description: 'Showcasing student-built working prototypes in Sustainable Energy, Robotics, AI, and Cellular Biology. Ananya’s 3D Plant Cell model & Rahul’s Library DBMS are shortlisted for display.',
    statusBadge: 'Parents Cordially Invited',
  },
  {
    id: 'EVT-103',
    title: 'Deepavali, Govardhan Puja & Bhai Dooj Autumn Break',
    dateRange: '29 Oct – 03 Nov 2026',
    dayOfWeek: 'Thursday to Tuesday (6 Days)',
    time: 'School Closed',
    venue: 'All Campus Wings',
    category: 'festival',
    applicableTo: 'Entire School & Administrative Offices',
    description: 'School will remain closed for Deepavali festivities. Classes resume on Wednesday, 04 Nov 2026 in compulsory Winter Uniform.',
    statusBadge: 'Gazetted Holiday',
  },
  {
    id: 'EVT-104',
    title: 'Children’s Day Fete & Annual Athletic Meet 2026',
    dateRange: '14 Nov 2026',
    dayOfWeek: 'Saturday',
    time: '08:30 AM – 02:00 PM',
    venue: 'Main Olympic Track & Sports Complex',
    category: 'sports',
    applicableTo: 'All Students & Parents',
    description: 'Inter-house track relays, march past, cultural drill, and prize distribution by the Chief Guest.',
    statusBadge: 'Registration Open',
  },
  {
    id: 'EVT-105',
    title: 'CBSE Class 10 First Pre-Board Examination',
    dateRange: '01 Dec – 12 Dec 2026',
    dayOfWeek: 'Monday to Saturday',
    time: '08:30 AM – 11:45 AM',
    venue: 'Senior Examination Hall A & B',
    category: 'exam',
    applicableTo: 'Class 10 & Class 12 Board Batches',
    description: 'Full-syllabus examination strictly modeled on the latest CBSE 2027 sample question papers.',
    statusBadge: 'Datesheet Released',
  },
];

export const ParentEvents: React.FC = () => {
  const [filterCat, setFilterCat] = useState<string>('all');
  const [isSlotModalOpen, setIsSlotModalOpen] = useState(false);
  const [rahulSlot, setRahulSlot] = useState('09:30 AM – 09:45 AM');
  const [ananyaSlot, setAnanyaSlot] = useState('10:15 AM – 10:30 AM');

  const filteredEvents = upcomingEvents.filter(e => filterCat === 'all' || e.category === filterCat);

  const handleSaveSlots = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSlotModalOpen(false);
    alert(`PTM Time Slots Updated!\n• Rahul (10-A): ${rahulSlot}\n• Ananya (7-B): ${ananyaSlot}`);
  };

  return (
    <SchoolLayout
      role="parent"
      user={USERS.parent}
      title="Academic Calendar, PTM & School Events"
      description="Upcoming school celebrations, PTM appointment slots, gazetted festival holidays, and examination schedules."
    >
      <div className="space-y-6">
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Academic Calendar, PTM & School Events</h1>
          <p className="text-sm text-gray-600 mt-1">
            Upcoming school celebrations, PTM appointment slots, gazetted festival holidays, and examination schedules.
          </p>
        </div>

        <button
          onClick={() => alert('Downloading Full Academic Session 2026-27 Planner & Holiday List (PDF)')}
          className="flex items-center gap-2 px-4 py-2.5 bg-indigo-600 text-white rounded-xl text-xs font-bold hover:bg-indigo-700 transition-colors shadow-sm self-start md:self-auto"
        >
          <Download className="w-4 h-4" /> Download 2026-27 Almanac PDF
        </button>
      </div>

      {/* PTM Slot Booking Highlight Card */}
      <div className="bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-xl p-6 text-white shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-semibold border border-emerald-400/30">
              <CheckCircle2 className="w-3.5 h-3.5" /> Upcoming Saturday, 17 Oct 2026
            </span>
            <h2 className="text-xl font-bold">Your Confirmed PTM Consultation Slots</h2>
            <p className="text-xs text-indigo-200 max-w-2xl">
              To ensure smooth discussion for parents with two enrolled siblings, your slots for Class 10-A and Class 7-B have been scheduled sequentially.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
              <div className="text-xs text-indigo-200">Rahul Sharma (Class 10-A)</div>
              <div className="text-sm font-bold text-white mt-0.5">{rahulSlot}</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">Room 302 • Mrs. Ananya Sharma</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-3.5 rounded-xl border border-white/15">
              <div className="text-xs text-indigo-200">Ananya Sharma (Class 7-B)</div>
              <div className="text-sm font-bold text-white mt-0.5">{ananyaSlot}</div>
              <div className="text-[11px] text-emerald-300 mt-0.5">Room 204 • Mrs. Neha Batra</div>
            </div>

            <button
              onClick={() => setIsSlotModalOpen(true)}
              className="px-4 py-3 bg-white text-indigo-900 rounded-xl text-xs font-bold hover:bg-indigo-50 transition-colors shadow-sm"
            >
              Reschedule Slots
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="bg-white p-3.5 rounded-xl border border-gray-200 shadow-sm flex items-center gap-2 overflow-x-auto text-xs">
        <button
          onClick={() => setFilterCat('all')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'all' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          All Events ({upcomingEvents.length})
        </button>
        <button
          onClick={() => setFilterCat('ptm')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'ptm' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          PTM Meetings
        </button>
        <button
          onClick={() => setFilterCat('exhibition')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'exhibition' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Exhibitions & Fairs
        </button>
        <button
          onClick={() => setFilterCat('festival')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'festival' ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Holidays & Breaks
        </button>
        <button
          onClick={() => setFilterCat('sports')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'sports' ? 'bg-emerald-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Sports Day
        </button>
        <button
          onClick={() => setFilterCat('exam')}
          className={`px-3.5 py-1.5 rounded-lg font-bold whitespace-nowrap transition-colors ${
            filterCat === 'exam' ? 'bg-rose-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Exams
        </button>
      </div>

      {/* Events Cards List */}
      <div className="space-y-4">
        {filteredEvents.map((evt) => (
          <div key={evt.id} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 flex flex-col md:flex-row md:items-center justify-between gap-5 hover:border-gray-300 transition-all">
            <div className="flex items-start gap-4">
              {/* Date Badge Box */}
              <div className="w-16 h-16 rounded-2xl bg-indigo-50 border border-indigo-100 text-indigo-700 flex flex-col items-center justify-center flex-shrink-0 text-center p-1">
                <Calendar className="w-5 h-5 mb-0.5 text-indigo-600" />
                <span className="text-[11px] font-extrabold leading-tight">{evt.dateRange.split(' ')[0]} {evt.dateRange.split(' ')[1]}</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase ${
                    evt.category === 'ptm' ? 'bg-indigo-100 text-indigo-800' :
                    evt.category === 'festival' ? 'bg-amber-100 text-amber-800' :
                    evt.category === 'sports' ? 'bg-emerald-100 text-emerald-800' :
                    evt.category === 'exam' ? 'bg-rose-100 text-rose-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {evt.category}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{evt.dateRange} ({evt.dayOfWeek})</span>
                </div>

                <h3 className="text-base font-bold text-gray-900">{evt.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed max-w-3xl">{evt.description}</p>

                <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1 font-medium text-gray-700">
                    <Clock className="w-3.5 h-3.5 text-gray-400" /> {evt.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" /> {evt.venue}
                  </span>
                  <span className="flex items-center gap-1 text-indigo-600 font-medium">
                    <Users className="w-3.5 h-3.5" /> {evt.applicableTo}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end justify-between gap-2 flex-shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-gray-100">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-bold">
                {evt.statusBadge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Reschedule PTM Slot Modal */}
      {isSlotModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Modify PTM Time Slots</h3>
                <p className="text-xs text-indigo-200">Saturday, 17 Oct 2026</p>
              </div>
              <button onClick={() => setIsSlotModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveSlots} className="p-5 space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Rahul Sharma (Class 10-A — Room 302)</label>
                <select
                  value={rahulSlot}
                  onChange={(e) => setRahulSlot(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>09:00 AM – 09:15 AM</option>
                  <option>09:30 AM – 09:45 AM</option>
                  <option>10:00 AM – 10:15 AM</option>
                  <option>11:00 AM – 11:15 AM</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700">Ananya Sharma (Class 7-B — Room 204)</label>
                <select
                  value={ananyaSlot}
                  onChange={(e) => setAnanyaSlot(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option>09:45 AM – 10:00 AM</option>
                  <option>10:15 AM – 10:30 AM</option>
                  <option>10:45 AM – 11:00 AM</option>
                  <option>11:30 AM – 11:45 AM</option>
                </select>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsSlotModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700"
                >
                  Confirm Slots
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
    </SchoolLayout>
  );
};
