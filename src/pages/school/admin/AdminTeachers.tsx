import React, { useState } from 'react';
import { SchoolLayout } from '../../../components/layout/SchoolLayout';
import { USERS } from '../../../data/mockData';
import { 
  BookOpen, Search, Filter, Plus, Download, Mail, 
  Phone, Calendar, Clock, CheckCircle2, UserCheck, 
  Award, Briefcase, ChevronRight, X, UserPlus, Eye
} from 'lucide-react';

interface TeacherRecord {
  id: string;
  empId: string;
  name: string;
  designation: string;
  department: string;
  category: 'PGT' | 'TGT' | 'PRT' | 'COACH';
  qualification: string;
  classesAssigned: string[];
  weeklyLoad: number;
  phone: string;
  email: string;
  status: 'Present' | 'On Leave' | 'On Duty';
  joiningYear: number;
}

const mockTeachersList: TeacherRecord[] = [
  {
    id: 'TCH-001',
    empId: 'DPS/FAC/0104',
    name: 'Mrs. Ananya Sharma',
    designation: 'Senior PGT Mathematics & Mentor',
    department: 'Mathematics',
    category: 'PGT',
    qualification: 'M.Sc. (Maths), B.Ed. (Gold Medalist)',
    classesAssigned: ['Class 10-A', 'Class 11-PCM', 'Class 12-A'],
    weeklyLoad: 28,
    phone: '+91 98711 22334',
    email: 'ananya.sharma@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2018,
  },
  {
    id: 'TCH-002',
    empId: 'DPS/FAC/0108',
    name: 'Dr. Rajesh Sen',
    designation: 'Head of Physics & Senior PGT',
    department: 'Science',
    category: 'PGT',
    qualification: 'Ph.D. (Applied Physics), B.Ed.',
    classesAssigned: ['Class 10-A', 'Class 12-PCM'],
    weeklyLoad: 26,
    phone: '+91 98722 33445',
    email: 'rajesh.sen@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2015,
  },
  {
    id: 'TCH-003',
    empId: 'DPS/FAC/0142',
    name: 'Mrs. Neha Batra',
    designation: 'TGT General Science & Mentor',
    department: 'Science',
    category: 'TGT',
    qualification: 'M.Sc. (Botany), B.Ed.',
    classesAssigned: ['Class 7-B', 'Class 8-A', 'Class 9-B'],
    weeklyLoad: 30,
    phone: '+91 98733 44556',
    email: 'neha.batra@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2020,
  },
  {
    id: 'TCH-004',
    empId: 'DPS/FAC/0115',
    name: 'Mr. Amit Verma',
    designation: 'PGT Computer Science & IT Incharge',
    department: 'Information Tech',
    category: 'PGT',
    qualification: 'M.Tech (CS), MCA',
    classesAssigned: ['Class 10-A', 'Class 11-CS', 'Class 12-CS'],
    weeklyLoad: 26,
    phone: '+91 98744 55667',
    email: 'amit.verma@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2017,
  },
  {
    id: 'TCH-005',
    empId: 'DPS/FAC/0120',
    name: 'Ms. Pooja Nair',
    designation: 'TGT English Literature',
    department: 'English',
    category: 'TGT',
    qualification: 'M.A. (English Lit), B.Ed.',
    classesAssigned: ['Class 9-A', 'Class 10-A', 'Class 10-B'],
    weeklyLoad: 28,
    phone: '+91 98755 66778',
    email: 'pooja.nair@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2019,
  },
  {
    id: 'TCH-006',
    empId: 'DPS/FAC/0134',
    name: 'Coach R.S. Rana',
    designation: 'Director of Physical Education & Sports',
    department: 'Sports',
    category: 'COACH',
    qualification: 'M.P.Ed., NIS Certified Cricket Coach',
    classesAssigned: ['Junior Cricket Squad', 'Class 9-12 PE'],
    weeklyLoad: 24,
    phone: '+91 98766 77889',
    email: 'rs.rana@dpsgurugram.edu.in',
    status: 'Present',
    joiningYear: 2014,
  },
  {
    id: 'TCH-007',
    empId: 'DPS/FAC/0160',
    name: 'Mrs. Kavita Roy',
    designation: 'Senior TGT Social Science',
    department: 'Social Science',
    category: 'TGT',
    qualification: 'M.A. (History), B.Ed.',
    classesAssigned: ['Class 9-C', 'Class 10-A', 'Class 10-B'],
    weeklyLoad: 28,
    phone: '+91 98777 88990',
    email: 'kavita.roy@dpsgurugram.edu.in',
    status: 'On Duty',
    joiningYear: 2016,
  },
  {
    id: 'TCH-008',
    empId: 'DPS/FAC/0188',
    name: 'Mr. Vivek Saxena',
    designation: 'TGT Mathematics (Middle Wing)',
    department: 'Mathematics',
    category: 'TGT',
    qualification: 'M.Sc. (Maths), B.Ed.',
    classesAssigned: ['Class 7-A', 'Class 7-B', 'Class 8-C'],
    weeklyLoad: 30,
    phone: '+91 98788 99001',
    email: 'vivek.saxena@dpsgurugram.edu.in',
    status: 'On Leave',
    joiningYear: 2021,
  },
];

export function AdminTeachers() {
  const user = USERS.admin;
  const [teachers, setTeachers] = useState<TeacherRecord[]>(mockTeachersList);
  const [searchQuery, setSearchQuery] = useState('');
  const [deptFilter, setDeptFilter] = useState('all');
  const [catFilter, setCatFilter] = useState('all');
  const [selectedTeacher, setSelectedTeacher] = useState<TeacherRecord | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Add Faculty Form State
  const [formData, setFormData] = useState({
    name: '',
    department: 'Science',
    category: 'PGT' as 'PGT' | 'TGT' | 'PRT',
    qualification: '',
    phone: '',
    email: '',
  });

  const filteredTeachers = teachers.filter((t) => {
    const matchesSearch =
      t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.empId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.department.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDept = deptFilter === 'all' || t.department === deptFilter;
    const matchesCat = catFilter === 'all' || t.category === catFilter;
    return matchesSearch && matchesDept && matchesCat;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newEntry: TeacherRecord = {
      id: `TCH-${Math.floor(200 + Math.random() * 800)}`,
      empId: `DPS/FAC/0${Math.floor(200 + Math.random() * 800)}`,
      name: formData.name,
      designation: `${formData.category} ${formData.department}`,
      department: formData.department,
      category: formData.category,
      qualification: formData.qualification,
      classesAssigned: ['Class 9-A', 'Class 10-B'],
      weeklyLoad: 28,
      phone: formData.phone,
      email: formData.email,
      status: 'Present',
      joiningYear: 2026,
    };
    setTeachers([newEntry, ...teachers]);
    setIsAddModalOpen(false);
    alert(`Faculty member ${newEntry.name} onboarded with Employee ID ${newEntry.empId}`);
  };

  return (
    <SchoolLayout 
      role="admin" 
      user={user} 
      title="Faculty Roster & Departmental Staffing" 
      description="Manage instructional faculty, workload allocations, qualifications, departmental divisions, and biometric attendance."
    >
      <div className="space-y-6">
        {/* Top KPI Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Total Teaching Staff</span>
            <div className="text-2xl font-extrabold text-gray-900 mt-1">86 Members</div>
            <div className="text-xs text-gray-500 mt-0.5">8 Academic Departments</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Faculty Turnout Today</span>
            <div className="text-2xl font-extrabold text-emerald-700 mt-1">84 / 86 (97.6%)</div>
            <div className="text-xs text-emerald-600 mt-0.5">1 On-Duty • 1 Approved Leave</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Teacher : Student Ratio</span>
            <div className="text-2xl font-extrabold text-indigo-700 mt-1">1 : 28.8</div>
            <div className="text-xs text-indigo-600 mt-0.5">CBSE Norm Compliant (≤ 1:30)</div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Average Teaching Load</span>
            <div className="text-2xl font-extrabold text-purple-700 mt-1">27.4 Periods/Wk</div>
            <div className="text-xs text-purple-600 mt-0.5">Balanced Academic Workload</div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-1">
            <div className="relative flex-1 sm:max-w-xs">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search teacher name, employee ID, or subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <select
                value={deptFilter}
                onChange={(e) => setDeptFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
              >
                <option value="all">All Departments</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
                <option value="Information Tech">Information Tech</option>
                <option value="Social Science">Social Science</option>
                <option value="Sports">Sports & PE</option>
              </select>

              <select
                value={catFilter}
                onChange={(e) => setCatFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-xs bg-white text-gray-700 font-medium"
              >
                <option value="all">All Cadres</option>
                <option value="PGT">PGT (11th & 12th)</option>
                <option value="TGT">TGT (6th to 10th)</option>
                <option value="PRT">PRT (Primary)</option>
                <option value="COACH">Coaches</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end lg:self-auto">
            <button
              onClick={() => alert('Exporting full 86 Faculty Members Roster to Excel')}
              className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-bold hover:bg-gray-50 flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" /> Export Roster
            </button>
            <button
              onClick={() => setIsAddModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" /> Onboard Faculty Member
            </button>
          </div>
        </div>

        {/* Teachers Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-50 text-gray-700 text-xs font-bold uppercase tracking-wider border-b border-gray-200">
                <tr>
                  <th className="py-3 px-4">Faculty Member</th>
                  <th className="py-3 px-4">Employee ID</th>
                  <th className="py-3 px-4">Cadre & Department</th>
                  <th className="py-3 px-4">Academic Qualifications</th>
                  <th className="py-3 px-4">Assigned Classes</th>
                  <th className="py-3 px-4">Load (Periods)</th>
                  <th className="py-3 px-4">Today’s Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-800 text-xs">
                {filteredTeachers.map((tch) => (
                  <tr key={tch.id} className="hover:bg-indigo-50/30 transition-colors">
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                          {tch.name.split(' ')[1]?.[0] || 'T'}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900">{tch.name}</div>
                          <div className="text-[11px] text-gray-500">{tch.designation}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-indigo-700">
                      {tch.empId}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        tch.category === 'PGT' ? 'bg-purple-100 text-purple-800' :
                        tch.category === 'TGT' ? 'bg-blue-100 text-blue-800' :
                        tch.category === 'COACH' ? 'bg-teal-100 text-teal-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {tch.category}
                      </span>
                      <div className="font-semibold text-gray-900 mt-1">{tch.department}</div>
                    </td>
                    <td className="py-3.5 px-4 text-gray-600 font-medium">
                      {tch.qualification}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {tch.classesAssigned.map((c, i) => (
                          <span key={i} className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded text-[10px] font-semibold">
                            {c}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-gray-900">
                      {tch.weeklyLoad} / wk
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        tch.status === 'Present' ? 'bg-emerald-100 text-emerald-800' :
                        tch.status === 'On Duty' ? 'bg-blue-100 text-blue-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {tch.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedTeacher(tch)}
                        className="p-1.5 text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="View Faculty Dossier"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Teacher Dossier Modal */}
      {selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold text-lg">
                  {selectedTeacher.name.split(' ')[1]?.[0] || 'T'}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{selectedTeacher.name}</h3>
                  <p className="text-xs text-indigo-200">
                    {selectedTeacher.designation} • ID: {selectedTeacher.empId}
                  </p>
                </div>
              </div>
              <button onClick={() => setSelectedTeacher(null)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200">
                <div>
                  <span className="text-gray-500">Cadre & Department:</span>
                  <div className="font-bold text-gray-900">{selectedTeacher.category} • {selectedTeacher.department}</div>
                </div>
                <div>
                  <span className="text-gray-500">Service Tenure:</span>
                  <div className="font-bold text-indigo-700">Since {selectedTeacher.joiningYear} ({2026 - selectedTeacher.joiningYear} Years)</div>
                </div>
                <div>
                  <span className="text-gray-500">Teaching Load:</span>
                  <div className="font-bold text-emerald-700">{selectedTeacher.weeklyLoad} Periods / Week</div>
                </div>
                <div>
                  <span className="text-gray-500">Attendance Today:</span>
                  <div className="font-bold text-gray-900">{selectedTeacher.status}</div>
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-bold text-gray-900 uppercase tracking-wider text-[11px]">Contact & Qualifications</h4>
                <div className="p-3 bg-white border border-gray-200 rounded-lg space-y-1">
                  <div>Degrees: <strong>{selectedTeacher.qualification}</strong></div>
                  <div>Official Email: <strong>{selectedTeacher.email}</strong></div>
                  <div>Phone: <strong>{selectedTeacher.phone}</strong></div>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                <button
                  onClick={() => alert(`Opening Weekly Timetable Schedule for ${selectedTeacher.name}`)}
                  className="px-3 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5" /> View Timetable
                </button>
                <button
                  onClick={() => setSelectedTeacher(null)}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700"
                >
                  Close Dossier
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Onboard Faculty Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-indigo-900 text-white">
              <div>
                <h3 className="text-base font-bold">Onboard New Faculty Member</h3>
                <p className="text-xs text-indigo-200">School Faculty Recruitment & Service Registry</p>
              </div>
              <button onClick={() => setIsAddModalOpen(false)} className="text-white/80 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Teacher Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dr. Sunita Kulkarni"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Department</label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science">Science (Physics/Chem/Bio)</option>
                    <option value="English">English Literature</option>
                    <option value="Information Tech">Information Tech / CS</option>
                    <option value="Social Science">Social Science</option>
                    <option value="Hindi">Hindi & Sanskrit</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Cadre</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  >
                    <option value="PGT">PGT (Classes 11-12)</option>
                    <option value="TGT">TGT (Classes 6-10)</option>
                    <option value="PRT">PRT (Primary)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700">Qualifications</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. M.Sc. (Chemistry), B.Ed."
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Mobile Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="+91 98112 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-700">Official Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@dpsgurugram.edu.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-indigo-600 text-white rounded-lg text-xs font-bold hover:bg-indigo-700 shadow-sm"
                >
                  Complete Onboarding
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </SchoolLayout>
  );
}
