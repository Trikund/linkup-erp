import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  Building, Users, Search, Filter, Plus, Download, 
  Eye, Edit3, UserCheck, CheckCircle2, ChevronRight, X, 
  BookOpen, Monitor, ShieldCheck
} from 'lucide-react';

interface ClassSection {
  id: string;
  className: string;
  section: string;
  wing: 'Senior Wing' | 'Middle Wing' | 'Primary Wing';
  roomNo: string;
  classMentor: string;
  mentorEmpId: string;
  enrolled: number;
  capacity: number;
  attendanceToday: number;
  monitors: string;
  smartBoard: 'Active' | 'Under Maintenance';
}

const mockClassSections: ClassSection[] = [
  {
    id: 'SEC-10A',
    className: 'Class 10',
    section: 'A',
    wing: 'Senior Wing',
    roomNo: 'Room 302',
    classMentor: 'Mrs. Ananya Sharma',
    mentorEmpId: 'DPS/FAC/0104',
    enrolled: 42,
    capacity: 45,
    attendanceToday: 95.2,
    monitors: 'Rahul Sharma & Diya Patel',
    smartBoard: 'Active',
  },
  {
    id: 'SEC-10B',
    className: 'Class 10',
    section: 'B',
    wing: 'Senior Wing',
    roomNo: 'Room 303',
    classMentor: 'Mrs. Kavita Roy',
    mentorEmpId: 'DPS/FAC/0160',
    enrolled: 41,
    capacity: 45,
    attendanceToday: 92.6,
    monitors: 'Arjun Nair & Sneha Roy',
    smartBoard: 'Active',
  },
  {
    id: 'SEC-7B',
    className: 'Class 7',
    section: 'B',
    wing: 'Middle Wing',
    roomNo: 'Room 204',
    classMentor: 'Mrs. Neha Batra',
    mentorEmpId: 'DPS/FAC/0142',
    enrolled: 38,
    capacity: 40,
    attendanceToday: 97.4,
    monitors: 'Ananya Sharma & Krrish Jain',
    smartBoard: 'Active',
  },
  {
    id: 'SEC-11PCM',
    className: 'Class 11',
    section: 'PCM',
    wing: 'Senior Wing',
    roomNo: 'Room 401',
    classMentor: 'Dr. Rajesh Sen',
    mentorEmpId: 'DPS/FAC/0108',
    enrolled: 44,
    capacity: 45,
    attendanceToday: 91.0,
    monitors: 'Kabir Verma & Tanya Ghosh',
    smartBoard: 'Active',
  },
  {
    id: 'SEC-9C',
    className: 'Class 9',
    section: 'C',
    wing: 'Senior Wing',
    roomNo: 'Room 308',
    classMentor: 'Ms. Pooja Nair',
    mentorEmpId: 'DPS/FAC/0120',
    enrolled: 40,
    capacity: 42,
    attendanceToday: 94.0,
    monitors: 'Ishita Sen & Devansh Rao',
    smartBoard: 'Active',
  },
  {
    id: 'SEC-8A',
    className: 'Class 8',
    section: 'A',
    wing: 'Middle Wing',
    roomNo: 'Room 210',
    classMentor: 'Mr. Vivek Saxena',
    mentorEmpId: 'DPS/FAC/0188',
    enrolled: 39,
    capacity: 40,
    attendanceToday: 93.5,
    monitors: 'Rohan Mehra & Sanjana Das',
    smartBoard: 'Active',
  },
];

export function AdminClasses() {
  const user = USERS.admin;
  const [classesList, setClassesList] = useState<ClassSection[]>(mockClassSections);
  const [searchQuery, setSearchQuery] = useState('');
  const [wingFilter, setWingFilter] = useState('all');
  const [selectedClass, setSelectedClass] = useState<ClassSection | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // New Class Form
  const [newClassName, setNewClassName] = useState('Class 12');
  const [newSection, setNewSection] = useState('Commerce');
  const [newRoom, setNewRoom] = useState('Room 405');
  const [newMentor, setNewMentor] = useState('Mr. Amit Verma');

  const filteredClasses = classesList.filter((c) => {
    const matchesSearch =
      c.className.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.classMentor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.roomNo.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesWing = wingFilter === 'all' || c.wing === wingFilter;
    return matchesSearch && matchesWing;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: ClassSection = {
      id: `SEC-${Math.floor(100 + Math.random() * 900)}`,
      className: newClassName,
      section: newSection,
      wing: 'Senior Wing',
      roomNo: newRoom,
      classMentor: newMentor,
      mentorEmpId: 'DPS/FAC/0115',
      enrolled: 35,
      capacity: 45,
      attendanceToday: 100.0,
      monitors: 'TBD',
      smartBoard: 'Active',
    };
    setClassesList([...classesList, newEntry]);
    setIsAddModalOpen(false);
    alert(`Class section ${newClassName}-${newSection} established in ${newRoom}!`);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Classroom Sections & Wing Allocation" 
      description="Manage 64 class sections, classroom room allocations, class teachers assigned, and capacity distribution."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Active Sections</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">64 Classrooms</div>
            <div className="text-xs text-gray-500 mt-0.5">3 Academic Wings</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Average Section Size</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">38.7 Students</div>
            <div className="text-xs text-indigo-600 mt-0.5">CBSE Cap ≤ 40 Students</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Mentor Appointed</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">64 / 64 (100%)</div>
            <div className="text-xs text-emerald-600 mt-0.5">All Sections Assigned</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Smart Digital Boards</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">64 Operational</div>
            <div className="text-xs text-purple-600 mt-0.5">100% Interactive Tech</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative flex-1 w-full sm:max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search class, section, teacher or room number..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <select
              value={wingFilter}
              onChange={(e) => setWingFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
            >
              <option value="all">All School Wings</option>
              <option value="Senior Wing">Senior Wing (9th-12th)</option>
              <option value="Middle Wing">Middle Wing (6th-8th)</option>
            </select>

            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Create New Section
            </button>
          </div>
        </div>

        {/* Classes Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredClasses.map((cls) => {
            const fillRate = Math.round((cls.enrolled / cls.capacity) * 100);
            return (
              <div 
                key={cls.id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 space-y-4 hover:border-gray-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-sm">
                        {cls.className.replace('Class ', '')}{cls.section[0]}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">{cls.className} - {cls.section}</h3>
                        <p className="text-xs text-gray-500">{cls.wing} • <strong>{cls.roomNo}</strong></p>
                      </div>
                    </div>

                    <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded font-bold text-[10px]">
                      {cls.smartBoard}
                    </span>
                  </div>

                  <div className="pt-3 space-y-2.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Class Mentor:</span>
                      <strong className="text-gray-900 font-semibold">{cls.classMentor}</strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Monitors:</span>
                      <strong className="text-gray-700">{cls.monitors}</strong>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-gray-500">Attendance Today:</span>
                      <strong className="text-emerald-700 font-bold">{cls.attendanceToday}%</strong>
                    </div>

                    <div className="space-y-1 pt-1">
                      <div className="flex justify-between text-[11px] text-gray-500">
                        <span>Capacity ({cls.enrolled}/{cls.capacity})</span>
                        <span className="font-bold text-indigo-700">{fillRate}%</span>
                      </div>
                      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${fillRate}%` }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <a
                    href={`/school/admin/students?class=${cls.className.replace('Class ', '')}`}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    View Student List ({cls.enrolled}) <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    onClick={() => setSelectedClass(cls)}
                    className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-lg"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Class Detail Modal */}
      {selectedClass && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">{selectedClass.className} - Section {selectedClass.section}</h3>
                <p className="text-xs text-indigo-200">{selectedClass.wing} • {selectedClass.roomNo}</p>
              </div>
              <button onClick={() => setSelectedClass(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-200 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Class Mentor:</span>
                  <strong className="text-gray-900">{selectedClass.classMentor} ({selectedClass.mentorEmpId})</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Student Capacity:</span>
                  <strong>{selectedClass.enrolled} / {selectedClass.capacity} Seats Filled</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Elected Monitors:</span>
                  <strong>{selectedClass.monitors}</strong>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => setSelectedClass(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Class Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Create New Classroom Section</h3>
                <p className="text-xs text-indigo-200">Session 2026-27 Allocation</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-5 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Class</label>
                  <input
                    type="text"
                    required
                    value={newClassName}
                    onChange={(e) => setNewClassName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Section</label>
                  <input
                    type="text"
                    required
                    value={newSection}
                    onChange={(e) => setNewSection(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Assigned Room</label>
                  <input
                    type="text"
                    required
                    value={newRoom}
                    onChange={(e) => setNewRoom(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700">Class Mentor</label>
                  <input
                    type="text"
                    required
                    value={newMentor}
                    onChange={(e) => setNewMentor(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Create Section
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
