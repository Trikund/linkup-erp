import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  CalendarCheck, Calendar, Clock, MapPin, Users, 
  Plus, CheckCircle2, Trophy, Download, Search, X
} from 'lucide-react';

interface SchoolEvent {
  id: string;
  title: string;
  category: 'Academic' | 'Sports' | 'Cultural' | 'PTM' | 'CBSE Competitions';
  startDate: string;
  endDate: string;
  timeSlot: string;
  venue: string;
  targetAudience: string;
  coordinator: string;
  expectedAttendance: number;
  status: 'Confirmed' | 'In Preparation' | 'Completed';
  description: string;
}

const mockEvents: SchoolEvent[] = [
  {
    id: 'EVT-2026-01',
    title: 'Mid-Term Parent-Teacher Meeting (PTM)',
    category: 'PTM',
    startDate: '18 Oct 2026',
    endDate: '18 Oct 2026',
    timeSlot: '08:30 AM – 01:30 PM',
    venue: 'Respective Classroom Sections (Wings A, B, C)',
    targetAudience: 'Parents of Classes 1 to 12',
    coordinator: 'Mrs. Ananya Sharma (Academic Dean)',
    expectedAttendance: 2100,
    status: 'Confirmed',
    description: 'One-on-one parent conferences to review Mid-Term evaluation progress, answer sheets, and remedial plans.',
  },
  {
    id: 'EVT-2026-02',
    title: 'Annual Inter-House Science & Robotics Exhibition "Innovision 2026"',
    category: 'Academic',
    startDate: '06 Nov 2026',
    endDate: '07 Nov 2026',
    timeSlot: '09:00 AM – 03:00 PM',
    venue: 'Central Auditorium & STEAM Innovation Labs',
    targetAudience: 'Classes 6 to 12 & Invited Guest Schools',
    coordinator: 'Dr. Rajesh Sen (HOD Physics & Innovation Cell)',
    expectedAttendance: 1450,
    status: 'In Preparation',
    description: 'Working models, AI & IoT demonstrations, and environmental sustainability exhibits judged by IIT Delhi faculty.',
  },
  {
    id: 'EVT-2026-03',
    title: '38th Annual Athletics & Sports Meet',
    category: 'Sports',
    startDate: '20 Nov 2026',
    endDate: '21 Nov 2026',
    timeSlot: '08:00 AM – 04:00 PM',
    venue: 'Greenfield Olympic Synthetic Track & Sports Grounds',
    targetAudience: 'All Wings & House Contingents',
    coordinator: 'Coach R.S. Rana (Director of Physical Education)',
    expectedAttendance: 2480,
    status: 'In Preparation',
    description: 'Track events (100m, 400m, Relays), High Jump, March Past ceremony and Inter-House Championship Trophy presentation.',
  },
  {
    id: 'EVT-2026-04',
    title: 'Diwali Cultural Evening & Inter-House Rangoli Contest',
    category: 'Cultural',
    startDate: '28 Oct 2026',
    endDate: '28 Oct 2026',
    timeSlot: '10:00 AM – 01:30 PM',
    venue: 'Open Air Amphitheatre',
    targetAudience: 'Classes 3 to 12',
    coordinator: 'Mrs. Kavita Roy (Cultural Affairs Head)',
    expectedAttendance: 1800,
    status: 'Confirmed',
    description: 'Traditional dance recitals, street plays, diya decoration, and eco-friendly Diwali celebration assembly.',
  },
  {
    id: 'EVT-2026-05',
    title: 'CBSE Regional Science Congress 2026 (Host School)',
    category: 'CBSE Competitions',
    startDate: '14 Dec 2026',
    endDate: '15 Dec 2026',
    timeSlot: '09:00 AM – 05:00 PM',
    venue: 'Auditorium Complex & Senior Science Wings',
    targetAudience: 'Participating 42 CBSE Affiliated Schools',
    coordinator: 'Mrs. Neha Batra (Coordinator CBSE Events)',
    expectedAttendance: 600,
    status: 'In Preparation',
    description: 'Zonal level paper presentations, research symposiums, and keynote addresses by eminent scientists.',
  },
];

interface HouseScore {
  house: string;
  color: string;
  bgLight: string;
  points: number;
  rank: number;
  captain: string;
}

const mockHouseScores: HouseScore[] = [
  { house: 'Ganga House', color: 'text-blue-700', bgLight: 'bg-blue-50 border-blue-200', points: 640, rank: 1, captain: 'Rahul Sharma (10-A)' },
  { house: 'Kaveri House', color: 'text-emerald-700', bgLight: 'bg-emerald-50 border-emerald-200', points: 615, rank: 2, captain: 'Diya Patel (10-A)' },
  { house: 'Yamuna House', color: 'text-amber-700', bgLight: 'bg-amber-50 border-amber-200', points: 580, rank: 3, captain: 'Aarav Gupta (10-A)' },
  { house: 'Brahmaputra House', color: 'text-rose-700', bgLight: 'bg-rose-50 border-rose-200', points: 545, rank: 4, captain: 'Kabir Verma (11-PCM)' },
];

export function AdminEvents() {
  const user = USERS.admin;
  const [activeTab, setActiveTab] = useState<'events' | 'houses' | 'venues'>('events');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredEvents = selectedCategory === 'All' 
    ? mockEvents 
    : mockEvents.filter(e => e.category === selectedCategory);

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Institutional Event Calendar & Co-Curriculars" 
      description="Greenfield Senior Secondary School • Annual Academic Calendar 2026-27"
    >
      <div className="space-y-6">
        {/* Top KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Upcoming Events (Q3)</span>
              <div className="p-2 bg-blue-50 text-blue-600 rounded-xl">
                <CalendarCheck size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-800">5 Major Events</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">PTM, Science Expo, Sports Meet scheduled</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Inter-House Leader</span>
              <div className="p-2 bg-amber-50 text-amber-600 rounded-xl">
                <Trophy size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-blue-600">Ganga House</span>
              <span className="text-xs font-bold text-slate-500">640 Pts</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Leading by 25 points over Kaveri House</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Auditorium & Venues</span>
              <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl">
                <MapPin size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-emerald-600">92% Utilized</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Main Auditorium, Synthetic Track, AV Rooms</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Student Participation</span>
              <div className="p-2 bg-purple-50 text-purple-600 rounded-xl">
                <Users size={18} />
              </div>
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-purple-600">1,850+</span>
              <span className="text-xs font-normal text-slate-500">Enrolled Pupils</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Active participation across sports & arts</p>
          </div>
        </div>

        {/* Tab Bar & Action Controls */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'events'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              School Events ({mockEvents.length})
            </button>
            <button
              onClick={() => setActiveTab('houses')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'houses'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Inter-House Standing (4 Houses)
            </button>
            <button
              onClick={() => setActiveTab('venues')}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                activeTab === 'venues'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Campus Venue Bookings
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-all"
            >
              <Plus size={16} /> Schedule New Event
            </button>
            <button 
              onClick={() => alert('Exporting Official CBSE Academic Activity Calendar 2026-27 (PDF)...')}
              className="flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold rounded-xl transition-all"
            >
              <Download size={16} /> Export Calendar
            </button>
          </div>
        </div>

        {/* Tab 1: Events Cards */}
        {activeTab === 'events' && (
          <div className="space-y-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap pb-1">
              {['All', 'Academic', 'Sports', 'Cultural', 'PTM', 'CBSE Competitions'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredEvents.map((evt) => (
                <div key={evt.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold mb-2 ${
                        evt.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                        evt.category === 'Sports' ? 'bg-emerald-100 text-emerald-800' :
                        evt.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                        evt.category === 'PTM' ? 'bg-amber-100 text-amber-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {evt.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">{evt.title}</h4>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold shrink-0 ${
                      evt.status === 'Confirmed' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                      'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      {evt.status}
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-slate-600 line-clamp-2">{evt.description}</p>

                  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-400 shrink-0" />
                      <span>{evt.startDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-slate-400 shrink-0" />
                      <span className="truncate">{evt.timeSlot}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2">
                      <MapPin size={13} className="text-slate-400 shrink-0" />
                      <span className="truncate">{evt.venue}</span>
                    </div>
                    <div className="flex items-center gap-1.5 col-span-2 text-slate-500">
                      <Users size={13} className="text-slate-400 shrink-0" />
                      <span>Coordinator: <strong className="text-slate-700">{evt.coordinator}</strong></span>
                    </div>
                  </div>

                  <div className="mt-4 pt-2 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs text-slate-500">
                      Expected Turnout: <strong>{evt.expectedAttendance}</strong>
                    </span>
                    <button
                      onClick={() => alert(`Broadcasting parent circular for "${evt.title}"...`)}
                      className="px-3 py-1 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg transition-colors"
                    >
                      Publish Circular
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Houses */}
        {activeTab === 'houses' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800">Annual Inter-House Championship Standings 2026-27</h3>
            <p className="text-xs text-slate-500">Points accumulated across Academics, Debates, Sports Meets, and Cultural Fests</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {mockHouseScores.map((h) => (
                <div key={h.house} className={`p-5 rounded-2xl border ${h.bgLight}`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Rank #{h.rank}</span>
                    <Trophy size={18} className={h.color} />
                  </div>
                  <h4 className={`mt-2 text-lg font-bold ${h.color}`}>{h.house}</h4>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-slate-900">{h.points}</span>
                    <span className="text-xs font-semibold text-slate-500">pts</span>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs text-slate-600">
                    Captain: <strong>{h.captain}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Venues */}
        {activeTab === 'venues' && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-base font-bold text-slate-800">Campus Facilities & Venue Management Roster</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-blue-600 uppercase">Main Central Auditorium</span>
                <p className="text-xs text-slate-600">Capacity: 1,200 Seats • Dolby Surround • Stage Rigging</p>
                <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Booked: 06-07 Nov (Robotics Expo)
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-emerald-600 uppercase">Olympic Sports Track & Pavilion</span>
                <p className="text-xs text-slate-600">8-lane Synthetic Track, Football Turf, Cricket Nets</p>
                <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Booked: 20-21 Nov (Annual Sports Day)
                </div>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold text-purple-600 uppercase">Open Air Amphitheatre</span>
                <p className="text-xs text-slate-600">Capacity: 800 Spectators • Natural Acoustic Layout</p>
                <div className="pt-2 text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={13} /> Booked: 28 Oct (Diwali Assembly)
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Schedule Event */}
        {isAddModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                  <CalendarCheck size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Schedule Institutional Event</h3>
                  <p className="text-xs text-slate-500">Publish to Academic Calendar & Parent App</p>
                </div>
              </div>

              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Event successfully added to Greenfield Academic Calendar 2026-27!');
                  setIsAddModalOpen(false);
                }} 
                className="space-y-4"
              >
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Event Title</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Inter-School Debate Championship"
                    className="w-full px-3.5 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Category</label>
                    <select className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none">
                      <option>Academic</option>
                      <option>Sports</option>
                      <option>Cultural</option>
                      <option>PTM</option>
                      <option>CBSE Competitions</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Venue</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue="Central Auditorium"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Date</label>
                    <input 
                      type="date" 
                      required 
                      defaultValue="2026-11-15"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Time Slot</label>
                    <input 
                      type="text" 
                      required 
                      defaultValue="09:00 AM – 02:00 PM"
                      className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Teacher In-Charge / Coordinator</label>
                  <input 
                    type="text" 
                    required 
                    defaultValue="Mrs. Ananya Sharma"
                    className="w-full px-3 py-2 text-sm border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button 
                    type="button" 
                    onClick={() => setIsAddModalOpen(false)}
                    className="px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
                  >
                    Confirm & Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </SchoolLayout>
  );
}
